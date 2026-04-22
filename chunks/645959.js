"use strict";
let r, i, s;
n.d(t, { default: () => C }), n(321073);
var a = n(989349),
    o = n.n(a),
    l = n(311907),
    u = n(713402),
    d = n(73153),
    c = n(695870),
    _ = n(380335),
    f = n(157550),
    E = n(493507),
    h = n(95701),
    p = n(734057),
    m = n(71393),
    g = n(222823),
    A = n(543465),
    I = n(287809),
    T = n(661191);
let S = new u.J(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
    },
    (e) => {
        let { lastMessageId: t, nudgeTimestamp: n } = e;
        return -Math.max(T.default.extractTimestamp(t), n ?? 0);
    },
);
function y(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  let t = g.Ay.lastMessageId(e.id) ?? e.lastMessageId ?? e.id,
                      n = e.isMessageRequestTimestamp;
                  if (null != n) {
                      let e = o()(n).valueOf(),
                          r = T.default.fromTimestamp(e);
                      return T.default.compare(t, r) > 0 ? t : r;
                  }
                  return t;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: _.A.isMessageRequest(e.id) || f.A.isSpam(e.id),
        nudgeTimestamp: E.A.getNudgeDMTimestamp(e.id),
    };
}
function N() {
    S.clear(),
        Object.values(p.A.getMutablePrivateChannels()).forEach((e) => {
            S.set(e.id, y(e));
        });
}
function O() {
    let e = p.A.getMutablePrivateChannels();
    for (let t in e) S.set(t, y(e[t]));
}
let R =
    ((r = []),
    (i = []),
    (s = []),
    () => {
        let e = S.values("FAVORITE"),
            t = S.values("DEFAULT");
        return (
            (r !== e || i !== t) &&
                ((s = []),
                e.forEach((e) => {
                    let { channelId: t } = e;
                    return s.push(t);
                }),
                (r = e),
                t.forEach((e) => {
                    let { channelId: t } = e;
                    return s.push(t);
                }),
                (i = t)),
            s
        );
    });
class v extends l.Ay.Store {
    static displayName = "PrivateChannelSortStore";
    initialize() {
        this.waitFor(p.A, m.A, _.A, g.Ay, f.A, A.Ay, I.default, E.A), this.syncWith([A.Ay, _.A, E.A], N);
    }
    getPrivateChannelIds() {
        return R();
    }
    getSortedChannels() {
        return [S.values("FAVORITE"), S.values("DEFAULT")];
    }
    serializeForOverlay() {
        let e = {};
        return (
            S.values().forEach((t) => {
                let { channelId: n, lastMessageId: r } = t;
                e[n] = r;
            }),
            e
        );
    }
}
let C = new v(d.h, {
    CONNECTION_OPEN: N,
    CONNECTION_OPEN_SUPPLEMENTAL: N,
    OVERLAY_INITIALIZE: N,
    CACHE_LOADED: O,
    CACHE_LOADED_LAZY: O,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, h.Gw)(e.type) || S.has(e.id)) && S.set(e.id, y(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, h.Gw)(t.type) || t.id === c.E) return !1;
        S.set(t.id, y(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return S.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!S.has(t)) return !1;
        let r = p.A.getChannel(t);
        return null != r && S.set(t, y(r, n.id));
    },
    REPLY_NUDGE_SET: function (e) {
        let { channelId: t } = e;
        if (!S.has(t)) return !1;
        let n = p.A.getChannel(t);
        return null != n && S.set(t, y(n));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return S.delete(t);
    },
    LOGOUT: function () {
        S.clear();
    },
});
