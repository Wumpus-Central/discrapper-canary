"use strict";
n.d(t, { A: () => M }), n(321073);
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
    p = n(71393),
    h = n(222823),
    m = n(543465),
    g = n(287809),
    E = n(661191);
let A = (e) => {
        let { lastMessageId: t, nudgeTimestamp: n } = e;
        return -Math.max(E.default.extractTimestamp(t), n ?? 0);
    },
    I = (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
    },
    T = new s.J(I, A);
function y() {
    T.clear();
}
function S(e) {
    let t = h.Ay.lastMessageId(e.id) ?? e.lastMessageId ?? e.id,
        n = e.isMessageRequestTimestamp;
    if (null != n) {
        let e = i()(n).valueOf(),
            r = E.default.fromTimestamp(e);
        return E.default.compare(t, r) > 0 ? t : r;
    }
    return t;
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: u.A.isMessageRequest(e.id) || c.A.isSpam(e.id),
        nudgeTimestamp: d.A.getNudgeTimestamp(e.id),
    };
}
function C() {
    T.clear(),
        Object.values(f.A.getMutablePrivateChannels()).forEach((e) => {
            T.set(e.id, v(e));
        });
}
function b(e) {
    let { channel: t } = e;
    if (!(0, _.Gw)(t.type) || t.id === l.E) return !1;
    T.set(t.id, v(t));
}
function N(e) {
    let { channels: t } = e;
    t.forEach((e) => {
        ((0, _.Gw)(e.type) || T.has(e.id)) && T.set(e.id, v(e));
    });
}
function R(e) {
    let { channel: t } = e;
    return T.delete(t.id);
}
function O(e) {
    let { channelId: t, message: n } = e;
    if (!T.has(t)) return !1;
    let r = f.A.getChannel(t);
    return null != r && T.set(t, v(r, n.id));
}
function D(e) {
    let { channelId: t } = e;
    if (!T.has(t)) return !1;
    let n = f.A.getChannel(t);
    return null != n && T.set(t, v(n));
}
function L(e) {
    let t = e.guild.id;
    return T.delete(t);
}
function w() {
    let e = f.A.getMutablePrivateChannels();
    for (let t in e) T.set(t, v(e[t]));
}
let x = (() => {
    let e = [],
        t = [],
        n = [];
    return () => {
        let r = T.values("FAVORITE"),
            i = T.values("DEFAULT");
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
class P extends a.Ay.Store {
    static displayName = "PrivateChannelSortStore";
    initialize() {
        this.waitFor(f.A, p.A, u.A, h.Ay, c.A, m.Ay, g.default, d.A), this.syncWith([m.Ay, u.A, d.A], C);
    }
    getPrivateChannelIds() {
        return x();
    }
    getSortedChannels() {
        return [T.values("FAVORITE"), T.values("DEFAULT")];
    }
    serializeForOverlay() {
        let e = {};
        return (
            T.values().forEach((t) => {
                let { channelId: n, lastMessageId: r } = t;
                e[n] = r;
            }),
            e
        );
    }
}
let M = new P(o.h, {
    CONNECTION_OPEN: C,
    CONNECTION_OPEN_SUPPLEMENTAL: C,
    OVERLAY_INITIALIZE: C,
    CACHE_LOADED: w,
    CACHE_LOADED_LAZY: w,
    CHANNEL_UPDATES: N,
    CHANNEL_CREATE: b,
    CHANNEL_DELETE: R,
    MESSAGE_CREATE: O,
    REPLY_NUDGE_SET: D,
    GUILD_CREATE: L,
    LOGOUT: y,
});
