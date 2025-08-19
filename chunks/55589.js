let i, r, s;
n.d(t, { Z: () => N }), n(388685), n(539854);
var l,
    o,
    a = n(913527),
    c = n.n(a),
    u = n(442837),
    d = n(759174),
    h = n(570140),
    p = n(333023),
    g = n(355298),
    f = n(333984),
    m = n(131704),
    b = n(592125),
    v = n(430824),
    C = n(306680),
    _ = n(9156),
    y = n(594174),
    O = n(709054);
let S = new d.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -O.default.extractTimestamp(t);
    },
);
function E(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let i = null != (n = null != (t = C.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
                      r = e.isMessageRequestTimestamp;
                  if (null != r) {
                      let e = c()(r).valueOf(),
                          t = O.default.fromTimestamp(e);
                      return O.default.compare(i, t) > 0 ? i : t;
                  }
                  return i;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: g.Z.isMessageRequest(e.id) || f.Z.isSpam(e.id),
    };
}
function w() {
    S.clear(),
        Object.values(b.Z.getMutablePrivateChannels()).forEach((e) => {
            S.set(e.id, E(e));
        });
}
function I() {
    let e = b.Z.getMutablePrivateChannels();
    for (let t in e) S.set(t, E(e[t]));
}
let j =
    ((i = []),
    (r = []),
    (s = []),
    () => {
        let e = S.values("FAVORITE"),
            t = S.values("DEFAULT");
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
class P extends (l = u.ZP.Store) {
    initialize() {
        this.waitFor(b.Z, v.Z, y.default, g.Z, _.ZP), this.syncWith([_.ZP, g.Z], w);
    }
    getPrivateChannelIds() {
        return j();
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
(o = "displayName") in P
    ? Object.defineProperty(P, o, {
          value: "PrivateChannelSortStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (P[o] = "PrivateChannelSortStore");
let N = new P(h.Z, {
    CONNECTION_OPEN: w,
    CONNECTION_OPEN_SUPPLEMENTAL: w,
    OVERLAY_INITIALIZE: w,
    CACHE_LOADED: I,
    CACHE_LOADED_LAZY: I,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, m.hv)(e.type) || S.has(e.id)) && S.set(e.id, E(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, m.hv)(t.type) || t.id === p.V) return !1;
        S.set(t.id, E(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return S.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!S.has(t)) return !1;
        let i = b.Z.getChannel(t);
        return null != i && S.set(t, E(i, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return S.delete(t);
    },
    LOGOUT: function () {
        S.clear();
    },
});
