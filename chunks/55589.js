let i, r, s;
n.d(t, { Z: () => N }), n(388685), n(539854);
var l,
    o,
    a = n(913527),
    u = n.n(a),
    c = n(442837),
    d = n(759174),
    h = n(570140),
    p = n(333023),
    g = n(355298),
    f = n(333984),
    v = n(131704),
    m = n(592125),
    C = n(430824),
    b = n(306680),
    y = n(9156),
    O = n(594174),
    S = n(709054);
let E = new d.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -S.default.extractTimestamp(t);
    },
);
function _(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let i = null != (n = null != (t = b.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
                      r = e.isMessageRequestTimestamp;
                  if (null != r) {
                      let e = u()(r).valueOf(),
                          t = S.default.fromTimestamp(e);
                      return S.default.compare(i, t) > 0 ? i : t;
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
function I() {
    E.clear(),
        Object.values(m.Z.getMutablePrivateChannels()).forEach((e) => {
            E.set(e.id, _(e));
        });
}
function w() {
    let e = m.Z.getMutablePrivateChannels();
    for (let t in e) E.set(t, _(e[t]));
}
let j =
    ((i = []),
    (r = []),
    (s = []),
    () => {
        let e = E.values("FAVORITE"),
            t = E.values("DEFAULT");
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
class P extends (l = c.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, C.Z, O.default, g.Z, y.ZP), this.syncWith([y.ZP, g.Z], I);
    }
    getPrivateChannelIds() {
        return j();
    }
    getSortedChannels() {
        return [E.values("FAVORITE"), E.values("DEFAULT")];
    }
    serializeForOverlay() {
        let e = {};
        return (
            E.values().forEach((t) => {
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
    CONNECTION_OPEN: I,
    CONNECTION_OPEN_SUPPLEMENTAL: I,
    OVERLAY_INITIALIZE: I,
    CACHE_LOADED: w,
    CACHE_LOADED_LAZY: w,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, v.hv)(e.type) || E.has(e.id)) && E.set(e.id, _(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, v.hv)(t.type) || t.id === p.V) return !1;
        E.set(t.id, _(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return E.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!E.has(t)) return !1;
        let i = m.Z.getChannel(t);
        return null != i && E.set(t, _(i, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return E.delete(t);
    },
    LOGOUT: function () {
        E.clear();
    },
});
