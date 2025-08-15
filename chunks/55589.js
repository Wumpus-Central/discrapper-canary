let r, a, o;
n.d(t, { Z: () => j }), n(388685), n(539854);
var l,
    i,
    c = n(913527),
    u = n.n(c),
    d = n(442837),
    s = n(759174),
    f = n(570140),
    _ = n(333023),
    h = n(355298),
    b = n(333984),
    p = n(131704),
    g = n(592125),
    v = n(430824),
    m = n(306680),
    E = n(9156),
    C = n(594174),
    y = n(709054);
let O = new s.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -y.default.extractTimestamp(t);
    },
);
function I(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let r = null != (n = null != (t = m.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
                      a = e.isMessageRequestTimestamp;
                  if (null != a) {
                      let e = u()(a).valueOf(),
                          t = y.default.fromTimestamp(e);
                      return y.default.compare(r, t) > 0 ? r : t;
                  }
                  return r;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: h.Z.isMessageRequest(e.id) || b.Z.isSpam(e.id),
    };
}
function S() {
    O.clear(),
        Object.values(g.Z.getMutablePrivateChannels()).forEach((e) => {
            O.set(e.id, I(e));
        });
}
function w() {
    let e = g.Z.getMutablePrivateChannels();
    for (let t in e) O.set(t, I(e[t]));
}
let P =
    ((r = []),
    (a = []),
    (o = []),
    () => {
        let e = O.values("FAVORITE"),
            t = O.values("DEFAULT");
        return (
            (r !== e || a !== t) &&
                ((o = []),
                e.forEach((e) => {
                    let { channelId: t } = e;
                    return o.push(t);
                }),
                (r = e),
                t.forEach((e) => {
                    let { channelId: t } = e;
                    return o.push(t);
                }),
                (a = t)),
            o
        );
    });
class T extends (l = d.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, v.Z, C.default, h.Z, E.ZP), this.syncWith([E.ZP, h.Z], S);
    }
    getPrivateChannelIds() {
        return P();
    }
    getSortedChannels() {
        return [O.values("FAVORITE"), O.values("DEFAULT")];
    }
    serializeForOverlay() {
        let e = {};
        return (
            O.values().forEach((t) => {
                let { channelId: n, lastMessageId: r } = t;
                e[n] = r;
            }),
            e
        );
    }
}
(i = "displayName") in T
    ? Object.defineProperty(T, i, {
          value: "PrivateChannelSortStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (T[i] = "PrivateChannelSortStore");
let j = new T(f.Z, {
    CONNECTION_OPEN: S,
    CONNECTION_OPEN_SUPPLEMENTAL: S,
    OVERLAY_INITIALIZE: S,
    CACHE_LOADED: w,
    CACHE_LOADED_LAZY: w,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, p.hv)(e.type) || O.has(e.id)) && O.set(e.id, I(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, p.hv)(t.type) || t.id === _.V) return !1;
        O.set(t.id, I(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return O.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!O.has(t)) return !1;
        let r = g.Z.getChannel(t);
        return null != r && O.set(t, I(r, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return O.delete(t);
    },
    LOGOUT: function () {
        O.clear();
    },
});
