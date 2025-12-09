n.d(t, { Z: () => j }), n(388685), n(539854);
var r,
    i = n(913527),
    a = n.n(i),
    o = n(442837),
    s = n(759174),
    l = n(570140),
    c = n(333023),
    u = n(355298),
    d = n(333984),
    f = n(131704),
    p = n(592125),
    _ = n(430824),
    m = n(306680),
    h = n(9156),
    g = n(594174),
    E = n(709054);
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
    v = new s.h(O, y);
function S() {
    v.clear();
}
function I(e) {
    var t, n;
    let r = null != (n = null != (t = m.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
        i = e.isMessageRequestTimestamp;
    if (null != i) {
        let e = a()(i).valueOf(),
            t = E.default.fromTimestamp(e);
        return E.default.compare(r, t) > 0 ? r : t;
    }
    return r;
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: u.Z.isMessageRequest(e.id) || d.Z.isSpam(e.id),
    };
}
function A() {
    v.clear(),
        Object.values(p.Z.getMutablePrivateChannels()).forEach((e) => {
            v.set(e.id, T(e));
        });
}
function C(e) {
    let { channel: t } = e;
    if (!(0, f.hv)(t.type) || t.id === c.V) return !1;
    v.set(t.id, T(t));
}
function N(e) {
    let { channels: t } = e;
    t.forEach((e) => {
        ((0, f.hv)(e.type) || v.has(e.id)) && v.set(e.id, T(e));
    });
}
function P(e) {
    let { channel: t } = e;
    return v.delete(t.id);
}
function R(e) {
    let { channelId: t, message: n } = e;
    if (!v.has(t)) return !1;
    let r = p.Z.getChannel(t);
    return null != r && v.set(t, T(r, n.id));
}
function D(e) {
    let t = e.guild.id;
    return v.delete(t);
}
function w() {
    let e = p.Z.getMutablePrivateChannels();
    for (let t in e) v.set(t, T(e[t]));
}
let x = (() => {
    let e = [],
        t = [],
        n = [];
    return () => {
        let r = v.values("FAVORITE"),
            i = v.values("DEFAULT");
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
class L extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, _.Z, u.Z, m.ZP, d.Z, h.ZP, g.default), this.syncWith([h.ZP, u.Z], A);
    }
    getPrivateChannelIds() {
        return x();
    }
    getSortedChannels() {
        return [v.values("FAVORITE"), v.values("DEFAULT")];
    }
    serializeForOverlay() {
        let e = {};
        return (
            v.values().forEach((t) => {
                let { channelId: n, lastMessageId: r } = t;
                e[n] = r;
            }),
            e
        );
    }
}
b(L, "displayName", "PrivateChannelSortStore");
let j = new L(l.Z, {
    CONNECTION_OPEN: A,
    CONNECTION_OPEN_SUPPLEMENTAL: A,
    OVERLAY_INITIALIZE: A,
    CACHE_LOADED: w,
    CACHE_LOADED_LAZY: w,
    CHANNEL_UPDATES: N,
    CHANNEL_CREATE: C,
    CHANNEL_DELETE: P,
    MESSAGE_CREATE: R,
    GUILD_CREATE: D,
    LOGOUT: S,
});
