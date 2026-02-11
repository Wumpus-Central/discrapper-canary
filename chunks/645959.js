"use strict";
n.d(t, { default: () => k }), n(321073);
var r = n(989349),
    i = n.n(r),
    a = n(311907),
    s = n(713402),
    o = n(73153),
    l = n(695870),
    u = n(380335),
    c = n(157550),
    d = n(493507),
    _ = n(95701),
    f = n(734057),
    h = n(71393),
    p = n(222823),
    g = n(543465),
    E = n(287809),
    A = n(661191);
let I = (e) => {
        let { lastMessageId: t, nudgeTimestamp: n } = e;
        return -Math.max(A.default.extractTimestamp(t), n ?? 0);
    },
    T = (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
    },
    y = new s.J(T, I);
function S() {
    y.clear();
}
function v(e) {
    let t = p.Ay.lastMessageId(e.id) ?? e.lastMessageId ?? e.id,
        n = e.isMessageRequestTimestamp;
    if (null != n) {
        let e = i()(n).valueOf(),
            r = A.default.fromTimestamp(e);
        return A.default.compare(t, r) > 0 ? t : r;
    }
    return t;
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: u.A.isMessageRequest(e.id) || c.A.isSpam(e.id),
        nudgeTimestamp: d.A.getNudgeDMTimestamp(e.id),
    };
}
function b() {
    y.clear(),
        Object.values(f.A.getMutablePrivateChannels()).forEach((e) => {
            y.set(e.id, C(e));
        });
}
function N(e) {
    let { channel: t } = e;
    if (!(0, _.Gw)(t.type) || t.id === l.E) return !1;
    y.set(t.id, C(t));
}
function R(e) {
    let { channels: t } = e;
    t.forEach((e) => {
        ((0, _.Gw)(e.type) || y.has(e.id)) && y.set(e.id, C(e));
    });
}
function O(e) {
    let { channel: t } = e;
    return y.delete(t.id);
}
function D(e) {
    let { channelId: t, message: n } = e;
    if (!y.has(t)) return !1;
    let r = f.A.getChannel(t);
    return null != r && y.set(t, C(r, n.id));
}
function L(e) {
    let { channelId: t } = e;
    if (!y.has(t)) return !1;
    let n = f.A.getChannel(t);
    return null != n && y.set(t, C(n));
}
function w(e) {
    let t = e.guild.id;
    return y.delete(t);
}
function x() {
    let e = f.A.getMutablePrivateChannels();
    for (let t in e) y.set(t, C(e[t]));
}
let P = (() => {
    let e = [],
        t = [],
        n = [];
    return () => {
        let r = y.values("FAVORITE"),
            i = y.values("DEFAULT");
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
class M extends a.Ay.Store {
    static displayName = "PrivateChannelSortStore";
    initialize() {
        this.waitFor(f.A, h.A, u.A, p.Ay, c.A, g.Ay, E.default, d.A), this.syncWith([g.Ay, u.A, d.A], b);
    }
    getPrivateChannelIds() {
        return P();
    }
    getSortedChannels() {
        return [y.values("FAVORITE"), y.values("DEFAULT")];
    }
    serializeForOverlay() {
        let e = {};
        return (
            y.values().forEach((t) => {
                let { channelId: n, lastMessageId: r } = t;
                e[n] = r;
            }),
            e
        );
    }
}
let k = new M(o.h, {
    CONNECTION_OPEN: b,
    CONNECTION_OPEN_SUPPLEMENTAL: b,
    OVERLAY_INITIALIZE: b,
    CACHE_LOADED: x,
    CACHE_LOADED_LAZY: x,
    CHANNEL_UPDATES: R,
    CHANNEL_CREATE: N,
    CHANNEL_DELETE: O,
    MESSAGE_CREATE: D,
    REPLY_NUDGE_SET: L,
    GUILD_CREATE: w,
    LOGOUT: S,
});
