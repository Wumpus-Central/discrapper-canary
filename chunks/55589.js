let r, i, l;
n.d(t, { Z: () => w }), n(388685), n(539854);
var o,
    u,
    a = n(913527),
    s = n.n(a),
    c = n(442837),
    d = n(759174),
    f = n(570140),
    m = n(333023),
    p = n(355298),
    v = n(333984),
    g = n(131704),
    b = n(592125),
    E = n(430824),
    O = n(306680),
    y = n(9156),
    S = n(594174),
    j = n(709054);
let _ = new d.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -j.default.extractTimestamp(t);
    },
);
function h(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let r = null != (n = null != (t = O.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
                      i = e.isMessageRequestTimestamp;
                  if (null != i) {
                      let e = s()(i).valueOf(),
                          t = j.default.fromTimestamp(e);
                      return j.default.compare(r, t) > 0 ? r : t;
                  }
                  return r;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: p.Z.isMessageRequest(e.id) || v.Z.isSpam(e.id),
    };
}
function P() {
    _.clear(),
        Object.values(b.Z.getMutablePrivateChannels()).forEach((e) => {
            _.set(e.id, h(e));
        });
}
function C() {
    let e = b.Z.getMutablePrivateChannels();
    for (let t in e) _.set(t, h(e[t]));
}
let Z =
    ((r = []),
    (i = []),
    (l = []),
    () => {
        let e = _.values("FAVORITE"),
            t = _.values("DEFAULT");
        return (
            (r !== e || i !== t) &&
                ((l = []),
                e.forEach((e) => {
                    let { channelId: t } = e;
                    return l.push(t);
                }),
                (r = e),
                t.forEach((e) => {
                    let { channelId: t } = e;
                    return l.push(t);
                }),
                (i = t)),
            l
        );
    });
class N extends (o = c.ZP.Store) {
    initialize() {
        this.waitFor(b.Z, E.Z, S.default, p.Z, y.ZP), this.syncWith([y.ZP, p.Z], P);
    }
    getPrivateChannelIds() {
        return Z();
    }
    getSortedChannels() {
        return [_.values("FAVORITE"), _.values("DEFAULT")];
    }
    serializeForOverlay() {
        let e = {};
        return (
            _.values().forEach((t) => {
                let { channelId: n, lastMessageId: r } = t;
                e[n] = r;
            }),
            e
        );
    }
}
(u = "displayName") in N
    ? Object.defineProperty(N, u, {
          value: "PrivateChannelSortStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (N[u] = "PrivateChannelSortStore");
let w = new N(f.Z, {
    CONNECTION_OPEN: P,
    CONNECTION_OPEN_SUPPLEMENTAL: P,
    OVERLAY_INITIALIZE: P,
    CACHE_LOADED: C,
    CACHE_LOADED_LAZY: C,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, g.hv)(e.type) || _.has(e.id)) && _.set(e.id, h(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, g.hv)(t.type) || t.id === m.V) return !1;
        _.set(t.id, h(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return _.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!_.has(t)) return !1;
        let r = b.Z.getChannel(t);
        return null != r && _.set(t, h(r, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return _.delete(t);
    },
    LOGOUT: function () {
        _.clear();
    },
});
