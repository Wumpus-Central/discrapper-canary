let r, a, i;
t.d(n, { Z: () => k }), t(388685), t(539854);
var o,
    l,
    c = t(913527),
    s = t.n(c),
    d = t(442837),
    u = t(759174),
    _ = t(570140),
    p = t(333023),
    b = t(355298),
    f = t(333984),
    h = t(131704),
    m = t(592125),
    g = t(430824),
    v = t(306680),
    x = t(9156),
    C = t(594174),
    O = t(709054);
let y = new u.h(
    (e) => {
        let { isRequest: n, isFavorite: t } = e;
        return n ? [] : [t ? "FAVORITE" : "DEFAULT"];
    },
    (e) => {
        let { lastMessageId: n } = e;
        return -O.default.extractTimestamp(n);
    },
);
function I(e) {
    let n =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var n, t;
                  let r = null != (t = null != (n = v.ZP.lastMessageId(e.id)) ? n : e.lastMessageId) ? t : e.id,
                      a = e.isMessageRequestTimestamp;
                  if (null != a) {
                      let e = s()(a).valueOf(),
                          n = O.default.fromTimestamp(e);
                      return O.default.compare(r, n) > 0 ? r : n;
                  }
                  return r;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: n,
        isFavorite: !1,
        isRequest: b.Z.isMessageRequest(e.id) || f.Z.isSpam(e.id),
    };
}
function j() {
    y.clear(),
        Object.values(m.Z.getMutablePrivateChannels()).forEach((e) => {
            y.set(e.id, I(e));
        });
}
function E() {
    let e = m.Z.getMutablePrivateChannels();
    for (let n in e) y.set(n, I(e[n]));
}
let w =
    ((r = []),
    (a = []),
    (i = []),
    () => {
        let e = y.values("FAVORITE"),
            n = y.values("DEFAULT");
        return (
            (r !== e || a !== n) &&
                ((i = []),
                e.forEach((e) => {
                    let { channelId: n } = e;
                    return i.push(n);
                }),
                (r = e),
                n.forEach((e) => {
                    let { channelId: n } = e;
                    return i.push(n);
                }),
                (a = n)),
            i
        );
    });
class P extends (o = d.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, g.Z, C.default, b.Z, x.ZP), this.syncWith([x.ZP, b.Z], j);
    }
    getPrivateChannelIds() {
        return w();
    }
    getSortedChannels() {
        return [y.values("FAVORITE"), y.values("DEFAULT")];
    }
    serializeForOverlay() {
        let e = {};
        return (
            y.values().forEach((n) => {
                let { channelId: t, lastMessageId: r } = n;
                e[t] = r;
            }),
            e
        );
    }
}
(l = "displayName") in P
    ? Object.defineProperty(P, l, {
          value: "PrivateChannelSortStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (P[l] = "PrivateChannelSortStore");
let k = new P(_.Z, {
    CONNECTION_OPEN: j,
    CONNECTION_OPEN_SUPPLEMENTAL: j,
    OVERLAY_INITIALIZE: j,
    CACHE_LOADED: E,
    CACHE_LOADED_LAZY: E,
    CHANNEL_UPDATES: function (e) {
        let { channels: n } = e;
        n.forEach((e) => {
            ((0, h.hv)(e.type) || y.has(e.id)) && y.set(e.id, I(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: n } = e;
        if (!(0, h.hv)(n.type) || n.id === p.V) return !1;
        y.set(n.id, I(n));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: n } = e;
        return y.delete(n.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: n, message: t } = e;
        if (!y.has(n)) return !1;
        let r = m.Z.getChannel(n);
        return null != r && y.set(n, I(r, t.id));
    },
    GUILD_CREATE: function (e) {
        let n = e.guild.id;
        return y.delete(n);
    },
    LOGOUT: function () {
        y.clear();
    },
});
