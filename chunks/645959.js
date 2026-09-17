let i, r, a;
(n.d(t, { A: () => L }), n(321073));
var s = n(536637),
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
    f = n(573163),
    p = n(543465),
    T = n(287809),
    g = n(935208);
let m = new d.J(
    function (e) {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
    },
    function (e) {
        let { lastMessageId: t } = e;
        return -g.default.extractTimestamp(t);
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
                          i = g.default.fromTimestamp(e);
                      return g.default.compare(t, i) > 0 ? t : i;
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
    (m.clear(),
        Object.values(h.A.getMutablePrivateChannels()).forEach((e) => {
            m.set(e.id, S(e));
        }));
}
function C() {
    let e = h.A.getMutablePrivateChannels();
    for (let t in e) m.set(t, S(e[t]));
}
let O =
    ((i = []),
    (r = []),
    (a = []),
    () => {
        let e = m.values("FAVORITE"),
            t = m.values("DEFAULT");
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
class R extends o.Ay.Store {
    static displayName = "PrivateChannelSortStore";
    initialize() {
        (this.waitFor(h.A, I.A, _.A, f.Ay, E.A, p.Ay, T.default), this.syncWith([p.Ay, _.A], N));
    }
    getPrivateChannelIds() {
        return O();
    }
    getSortedChannels() {
        return [m.values("FAVORITE"), m.values("DEFAULT")];
    }
    serializeForOverlay() {
        let e = {};
        return (
            m.values().forEach((t) => {
                let { channelId: n, lastMessageId: i } = t;
                e[n] = i;
            }),
            e
        );
    }
}
let L = new R(c.h, {
    CONNECTION_OPEN: N,
    CONNECTION_OPEN_SUPPLEMENTAL: N,
    OVERLAY_INITIALIZE: N,
    CACHE_LOADED: C,
    CACHE_LOADED_LAZY: C,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, A.Gw)(e.type) || m.has(e.id)) && m.set(e.id, S(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, A.Gw)(t.type) || t.id === u.E) return !1;
        m.set(t.id, S(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return m.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!m.has(t)) return !1;
        let i = h.A.getChannel(t);
        return null != i && m.set(t, S(i, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return m.delete(t);
    },
    LOGOUT: function () {
        m.clear();
    },
});
