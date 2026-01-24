n.d(t, {
    A: () => k,
}),
    n(896048),
    n(321073);
var r,
    i = n(989349),
    a = n.n(i),
    s = n(311907),
    o = n(713402),
    l = n(73153),
    c = n(695870),
    u = n(380335),
    d = n(157550),
    f = n(493507),
    p = n(95701),
    _ = n(734057),
    h = n(71393),
    m = n(222823),
    g = n(543465),
    E = n(287809),
    y = n(661191);

function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let O = (e) => {
        let { lastMessageId: t, nudgeTimestamp: n } = e;
        return null != n ? -n : -y.default.extractTimestamp(t);
    },
    v = (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
    },
    A = new o.J(v, O);

function I() {
    A.clear();
}

function S(e) {
    var t, n;
    let r = null != (t = null != (n = m.Ay.lastMessageId(e.id)) ? n : e.lastMessageId) ? t : e.id,
        i = e.isMessageRequestTimestamp;
    if (null != i) {
        let e = a()(i).valueOf(),
            t = y.default.fromTimestamp(e);
        return y.default.compare(r, t) > 0 ? r : t;
    }
    return r;
}

function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: u.A.isMessageRequest(e.id) || d.A.isSpam(e.id),
        nudgeTimestamp: f.A.getNudgeTimestamp(e.id),
    };
}

function C() {
    A.clear(),
        Object.values(_.A.getMutablePrivateChannels()).forEach((e) => {
            A.set(e.id, T(e));
        });
}

function N(e) {
    let { channel: t } = e;
    if (!(0, p.Gw)(t.type) || t.id === c.E) return !1;
    A.set(t.id, T(t));
}

function w(e) {
    let { channels: t } = e;
    t.forEach((e) => {
        ((0, p.Gw)(e.type) || A.has(e.id)) && A.set(e.id, T(e));
    });
}

function R(e) {
    let { channel: t } = e;
    return A.delete(t.id);
}

function P(e) {
    let { channelId: t, message: n } = e;
    if (!A.has(t)) return !1;
    let r = _.A.getChannel(t);
    return null != r && A.set(t, T(r, n.id));
}

function D(e) {
    let { channelId: t } = e;
    if (!A.has(t)) return !1;
    let n = _.A.getChannel(t);
    return null != n && A.set(t, T(n));
}

function x(e) {
    let t = e.guild.id;
    return A.delete(t);
}

function L() {
    let e = _.A.getMutablePrivateChannels();
    for (let t in e) A.set(t, T(e[t]));
}
let j = (() => {
    let e = [],
        t = [],
        n = [];
    return () => {
        let r = A.values("FAVORITE"),
            i = A.values("DEFAULT");
        return (
            (e !== r || t !== i) &&
                ((n = []),
                r.forEach((e) => {
                    let { channelId: t } = e;
                    return n.push(t);
                }),
                (e = r),
                i.forEach((e) => {
                    let { channelId: t } = e;
                    return n.push(t);
                }),
                (t = i)),
            n
        );
    };
})();
class M extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(_.A, h.A, u.A, m.Ay, d.A, g.Ay, E.default, f.A), this.syncWith([g.Ay, u.A], C);
    }
    getPrivateChannelIds() {
        return j();
    }
    getSortedChannels() {
        return [A.values("FAVORITE"), A.values("DEFAULT")];
    }
    serializeForOverlay() {
        let e = {};
        return (
            A.values().forEach((t) => {
                let { channelId: n, lastMessageId: r } = t;
                e[n] = r;
            }),
            e
        );
    }
}
b(M, "displayName", "PrivateChannelSortStore");
let k = new M(l.h, {
    CONNECTION_OPEN: C,
    CONNECTION_OPEN_SUPPLEMENTAL: C,
    OVERLAY_INITIALIZE: C,
    CACHE_LOADED: L,
    CACHE_LOADED_LAZY: L,
    CHANNEL_UPDATES: w,
    CHANNEL_CREATE: N,
    CHANNEL_DELETE: R,
    MESSAGE_CREATE: P,
    REPLY_NUDGE_SET: D,
    GUILD_CREATE: x,
    LOGOUT: I,
});
