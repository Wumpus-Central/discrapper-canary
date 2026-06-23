"use strict";
let i, r, s;
n.d(t, { A: () => R }), n(321073);
var a = n(989349),
    o = n.n(a),
    l = n(17928),
    u = n(713402),
    c = n(228366),
    d = n(695870),
    _ = n(380335),
    h = n(157550),
    f = n(95701),
    p = n(734057),
    E = n(71393),
    m = n(568548),
    g = n(543465),
    A = n(287809),
    I = n(935208);
let T = new u.J(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -I.default.extractTimestamp(t);
    },
);
function S(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  let t = m.Ay.lastMessageId(e.id) ?? e.lastMessageId ?? e.id,
                      n = e.isMessageRequestTimestamp;
                  if (null != n) {
                      let e = o()(n).valueOf(),
                          i = I.default.fromTimestamp(e);
                      return I.default.compare(t, i) > 0 ? t : i;
                  }
                  return t;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: g.Ay.isMessagesFavorite(e.id),
        isRequest: _.A.isMessageRequest(e.id) || h.A.isSpam(e.id),
    };
}
function y() {
    T.clear(),
        Object.values(p.A.getMutablePrivateChannels()).forEach((e) => {
            T.set(e.id, S(e));
        });
}
function C() {
    let e = p.A.getMutablePrivateChannels();
    for (let t in e) T.set(t, S(e[t]));
}
let N =
    ((i = []),
    (r = []),
    (s = []),
    () => {
        let e = T.values("FAVORITE"),
            t = T.values("DEFAULT");
        return (
            (i !== e || r !== t) &&
                ((s = []),
                e.forEach((e) => {
                    let { channelId: t } = e;
                    return s.push(t);
                }),
                (i = e),
                t.forEach((e) => {
                    let { channelId: t } = e;
                    return s.push(t);
                }),
                (r = t)),
            s
        );
    });
class v extends l.Ay.Store {
    static displayName = "PrivateChannelSortStore";
    initialize() {
        this.waitFor(p.A, E.A, _.A, m.Ay, h.A, g.Ay, A.default), this.syncWith([g.Ay, _.A], y);
    }
    getPrivateChannelIds() {
        return N();
    }
    getSortedChannels() {
        return [T.values("FAVORITE"), T.values("DEFAULT")];
    }
    serializeForOverlay() {
        let e = {};
        return (
            T.values().forEach((t) => {
                let { channelId: n, lastMessageId: i } = t;
                e[n] = i;
            }),
            e
        );
    }
}
let R = new v(c.h, {
    CONNECTION_OPEN: y,
    CONNECTION_OPEN_SUPPLEMENTAL: y,
    OVERLAY_INITIALIZE: y,
    CACHE_LOADED: C,
    CACHE_LOADED_LAZY: C,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, f.Gw)(e.type) || T.has(e.id)) && T.set(e.id, S(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, f.Gw)(t.type) || t.id === d.E) return !1;
        T.set(t.id, S(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return T.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!T.has(t)) return !1;
        let i = p.A.getChannel(t);
        return null != i && T.set(t, S(i, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return T.delete(t);
    },
    LOGOUT: function () {
        T.clear();
    },
});
