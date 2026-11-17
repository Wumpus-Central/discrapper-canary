let i, r, a;
(n.d(t, { A: () => L }), n(321073));
var s = n(536637),
    l = n.n(s),
    o = n(855986),
    d = n(713402),
    c = n(73153);
n(695870);
var u = n(380335),
    _ = n(157550),
    E = n(95701),
    A = n(734057),
    f = n(71393),
    h = n(218461),
    I = n(543465),
    p = n(287809),
    m = n(811091),
    g = n(746080);
let T = new d.J(
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
                  let t = h.Ay.lastMessageId(e.id) ?? e.lastMessageId ?? e.id,
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
        isFavorite: I.Ay.isMessagesFavorite(e.id),
        isRequest: u.A.isMessageRequest(e.id) || _.A.isSpam(e.id),
    };
}
function N() {
    (T.clear(),
        Object.values(A.A.getMutablePrivateChannels()).forEach((e) => {
            T.set(e.id, S(e));
        }));
}
function C() {
    let e = A.A.getMutablePrivateChannels();
    for (let t in e) T.set(t, S(e[t]));
}
let O =
    ((i = []),
    (r = []),
    (a = []),
    () => {
        let e = T.values("FAVORITE"),
            t = T.values("DEFAULT");
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
        (this.waitFor(A.A, f.A, u.A, h.Ay, _.A, I.Ay, p.default), this.syncWith([I.Ay, u.A], N));
    }
    getPrivateChannelIds() {
        return O();
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
let L = new R(c.h, {
    CONNECTION_OPEN: N,
    CONNECTION_OPEN_SUPPLEMENTAL: N,
    OVERLAY_INITIALIZE: N,
    CACHE_LOADED: C,
    CACHE_LOADED_LAZY: C,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            !e.hasFlag(g.lx.UNLISTED) && ((0, E.Gw)(e.type) || T.has(e.id)) && T.set(e.id, S(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, E.Gw)(t.type) || "131" === t.id || t.hasFlag(g.lx.UNLISTED)) return !1;
        T.set(t.id, S(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return T.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!T.has(t)) return !1;
        let i = A.A.getChannel(t);
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
