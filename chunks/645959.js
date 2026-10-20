let i, r, a;
(n.d(t, { A: () => y }), n(321073));
var s = n(536637),
    l = n.n(s),
    o = n(17928),
    d = n(713402),
    c = n(73153),
    u = n(695870),
    _ = n(380335),
    E = n(157550),
    A = n(95701),
    h = n(734057),
    f = n(71393),
    I = n(573163),
    p = n(543465),
    T = n(287809),
    m = n(935208),
    g = n(746080);
let S = new d.J(
    function (e) {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
    },
    function (e) {
        let { lastMessageId: t } = e;
        return -m.default.extractTimestamp(t);
    },
);
function N(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  let t = I.Ay.lastMessageId(e.id) ?? e.lastMessageId ?? e.id,
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
function C() {
    (S.clear(),
        Object.values(h.A.getMutablePrivateChannels()).forEach((e) => {
            S.set(e.id, N(e));
        }));
}
function O() {
    let e = h.A.getMutablePrivateChannels();
    for (let t in e) S.set(t, N(e[t]));
}
let R =
    ((i = []),
    (r = []),
    (a = []),
    () => {
        let e = S.values("FAVORITE"),
            t = S.values("DEFAULT");
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
class L extends o.Ay.Store {
    static displayName = "PrivateChannelSortStore";
    initialize() {
        (this.waitFor(h.A, f.A, _.A, I.Ay, E.A, p.Ay, T.default), this.syncWith([p.Ay, _.A], C));
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
                let { channelId: n, lastMessageId: i } = t;
                e[n] = i;
            }),
            e
        );
    }
}
let y = new L(c.h, {
    CONNECTION_OPEN: C,
    CONNECTION_OPEN_SUPPLEMENTAL: C,
    OVERLAY_INITIALIZE: C,
    CACHE_LOADED: O,
    CACHE_LOADED_LAZY: O,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            !e.hasFlag(g.lx.UNLISTED) && ((0, A.Gw)(e.type) || S.has(e.id)) && S.set(e.id, N(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, A.Gw)(t.type) || t.id === u.E || t.hasFlag(g.lx.UNLISTED)) return !1;
        S.set(t.id, N(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return S.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!S.has(t)) return !1;
        let i = h.A.getChannel(t);
        return null != i && S.set(t, N(i, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return S.delete(t);
    },
    LOGOUT: function () {
        S.clear();
    },
});
