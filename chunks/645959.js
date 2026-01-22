n.d(t, { A: () => j }), n(896048), n(321073);
var r,
    i = n(989349),
    a = n.n(i),
    s = n(311907),
    o = n(713402),
    l = n(73153),
    c = n(695870),
    u = n(380335),
    d = n(157550),
    f = n(95701),
    p = n(734057),
    _ = n(71393),
    h = n(222823),
    m = n(543465),
    g = n(287809),
    E = n(661191);
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
let y = (e) => {
        let { lastMessageId: t } = e;
        return -E.default.extractTimestamp(t);
    },
    O = (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
    },
    A = new o.J(O, y);
function v() {
    A.clear();
}
function S(e) {
    var t, n;
    let r = null != (t = null != (n = h.Ay.lastMessageId(e.id)) ? n : e.lastMessageId) ? t : e.id,
        i = e.isMessageRequestTimestamp;
    if (null != i) {
        let e = a()(i).valueOf(),
            t = E.default.fromTimestamp(e);
        return E.default.compare(r, t) > 0 ? r : t;
    }
    return r;
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: u.A.isMessageRequest(e.id) || d.A.isSpam(e.id),
    };
}
function T() {
    A.clear(),
        Object.values(p.A.getMutablePrivateChannels()).forEach((e) => {
            A.set(e.id, I(e));
        });
}
function C(e) {
    let { channel: t } = e;
    if (!(0, f.Gw)(t.type) || t.id === c.E) return !1;
    A.set(t.id, I(t));
}
function N(e) {
    let { channels: t } = e;
    t.forEach((e) => {
        ((0, f.Gw)(e.type) || A.has(e.id)) && A.set(e.id, I(e));
    });
}
function R(e) {
    let { channel: t } = e;
    return A.delete(t.id);
}
function w(e) {
    let { channelId: t, message: n } = e;
    if (!A.has(t)) return !1;
    let r = p.A.getChannel(t);
    return null != r && A.set(t, I(r, n.id));
}
function P(e) {
    let t = e.guild.id;
    return A.delete(t);
}
function D() {
    let e = p.A.getMutablePrivateChannels();
    for (let t in e) A.set(t, I(e[t]));
}
let x = (() => {
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
class L extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(p.A, _.A, u.A, h.Ay, d.A, m.Ay, g.default), this.syncWith([m.Ay, u.A], T);
    }
    getPrivateChannelIds() {
        return x();
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
b(L, "displayName", "PrivateChannelSortStore");
let j = new L(l.h, {
    CONNECTION_OPEN: T,
    CONNECTION_OPEN_SUPPLEMENTAL: T,
    OVERLAY_INITIALIZE: T,
    CACHE_LOADED: D,
    CACHE_LOADED_LAZY: D,
    CHANNEL_UPDATES: N,
    CHANNEL_CREATE: C,
    CHANNEL_DELETE: R,
    MESSAGE_CREATE: w,
    GUILD_CREATE: P,
    LOGOUT: v,
});
