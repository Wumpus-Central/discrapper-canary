let r, i, l;
n.d(t, { Z: () => T }), n(388685), n(539854);
var s,
    o,
    a,
    c = n(913527),
    u = n.n(c),
    d = n(442837),
    f = n(759174),
    p = n(570140),
    b = n(333023),
    O = n(355298),
    h = n(333984),
    m = n(131704),
    g = n(592125),
    j = n(430824),
    y = n(306680),
    v = n(9156),
    S = n(594174),
    E = n(709054);
let x = new f.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -E.default.extractTimestamp(t);
    },
);
function P(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let r = null != (n = null != (t = y.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
                      i = e.isMessageRequestTimestamp;
                  if (null != i) {
                      let e = u()(i).valueOf(),
                          t = E.default.fromTimestamp(e);
                      return E.default.compare(r, t) > 0 ? r : t;
                  }
                  return r;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: O.Z.isMessageRequest(e.id) || h.Z.isSpam(e.id),
    };
}
function C() {
    x.clear(),
        Object.values(g.Z.getMutablePrivateChannels()).forEach((e) => {
            x.set(e.id, P(e));
        });
}
function w() {
    let e = g.Z.getMutablePrivateChannels();
    for (let t in e) x.set(t, P(e[t]));
}
let N =
    ((r = []),
    (i = []),
    (l = []),
    () => {
        let e = x.values("FAVORITE"),
            t = x.values("DEFAULT");
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
class _ extends (s = d.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, j.Z, S.default, O.Z, v.ZP), this.syncWith([v.ZP, O.Z], C);
    }
    getPrivateChannelIds() {
        return N();
    }
    getSortedChannels() {
        return [x.values("FAVORITE"), x.values("DEFAULT")];
    }
    serializeForOverlay() {
        let e = {};
        return (
            x.values().forEach((t) => {
                let { channelId: n, lastMessageId: r } = t;
                e[n] = r;
            }),
            e
        );
    }
}
(a = "PrivateChannelSortStore"),
    (o = "displayName") in _
        ? Object.defineProperty(_, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
          })
        : (_[o] = a);
let T = new _(p.Z, {
    CONNECTION_OPEN: C,
    CONNECTION_OPEN_SUPPLEMENTAL: C,
    OVERLAY_INITIALIZE: C,
    CACHE_LOADED: w,
    CACHE_LOADED_LAZY: w,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, m.hv)(e.type) || x.has(e.id)) && x.set(e.id, P(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, m.hv)(t.type) || t.id === b.V) return !1;
        x.set(t.id, P(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return x.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!x.has(t)) return !1;
        let r = g.Z.getChannel(t);
        return null != r && x.set(t, P(r, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return x.delete(t);
    },
    LOGOUT: function () {
        x.clear();
    },
});
