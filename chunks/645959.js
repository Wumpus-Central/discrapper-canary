"use strict";
let i, r, a;
n.d(t, { A: () => L }), n(321073);
var s = n(989349),
    l = n.n(s),
    o = n(17928),
    d = n(713402),
    c = n(228366),
    u = n(695870),
    _ = n(380335),
    E = n(157550),
    A = n(95701),
    h = n(734057),
    I = n(71393),
    f = n(568548),
    p = n(543465),
    T = n(287809),
    m = n(935208);
let g = new d.J(
    function (e) {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
    },
    function (e) {
        let { lastMessageId: t } = e;
        return -m.default.extractTimestamp(t);
    },
);
function S(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  let t = f.Ay.lastMessageId(e.id) ?? e.lastMessageId ?? e.id,
                      n = e.isMessageRequestTimestamp;
                  if (null != n) {
                      let e = l()(n).valueOf(),
                          i = m.default.fromTimestamp(e);
                      return m.default.compare(t, i) > 0 ? t : i;
                  }
                  return t;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: p.Ay.isMessagesFavorite(e.id),
        isRequest: _.A.isMessageRequest(e.id) || E.A.isSpam(e.id),
    };
}
function N() {
    g.clear(),
        Object.values(h.A.getMutablePrivateChannels()).forEach((e) => {
            g.set(e.id, S(e));
        });
}
function C() {
    let e = h.A.getMutablePrivateChannels();
    for (let t in e) g.set(t, S(e[t]));
}
let R =
    ((i = []),
    (r = []),
    (a = []),
    () => {
        let e = g.values("FAVORITE"),
            t = g.values("DEFAULT");
        return (
            (i !== e || r !== t) &&
                ((a = []),
                e.forEach((e) => {
                    let { channelId: t } = e;
                    return a.push(t);
                }),
                (i = e),
                t.forEach((e) => {
                    let { channelId: t } = e;
                    return a.push(t);
                }),
                (r = t)),
            a
        );
    });
class O extends o.Ay.Store {
    static displayName = "PrivateChannelSortStore";
    initialize() {
        this.waitFor(h.A, I.A, _.A, f.Ay, E.A, p.Ay, T.default), this.syncWith([p.Ay, _.A], N);
    }
    getPrivateChannelIds() {
        return R();
    }
    getSortedChannels() {
        return [g.values("FAVORITE"), g.values("DEFAULT")];
    }
    serializeForOverlay() {
        let e = {};
        return (
            g.values().forEach((t) => {
                let { channelId: n, lastMessageId: i } = t;
                e[n] = i;
            }),
            e
        );
    }
}
let L = new O(c.h, {
    CONNECTION_OPEN: N,
    CONNECTION_OPEN_SUPPLEMENTAL: N,
    OVERLAY_INITIALIZE: N,
    CACHE_LOADED: C,
    CACHE_LOADED_LAZY: C,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, A.Gw)(e.type) || g.has(e.id)) && g.set(e.id, S(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, A.Gw)(t.type) || t.id === u.E) return !1;
        g.set(t.id, S(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return g.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!g.has(t)) return !1;
        let i = h.A.getChannel(t);
        return null != i && g.set(t, S(i, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return g.delete(t);
    },
    LOGOUT: function () {
        g.clear();
    },
});
