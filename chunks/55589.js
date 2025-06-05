let r, l, i;
n.d(t, { Z: () => Z }), n(388685), n(539854);
var o,
    a,
    s,
    u = n(913527),
    c = n.n(u),
    d = n(442837),
    f = n(759174),
    h = n(570140),
    p = n(333023),
    g = n(355298),
    O = n(333984),
    y = n(131704),
    N = n(592125),
    b = n(430824),
    v = n(306680),
    m = n(9156),
    E = n(594174),
    C = n(709054);
let x = new f.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -C.default.extractTimestamp(t);
    }
);
function I(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let r = null != (n = null != (t = v.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
                      l = e.isMessageRequestTimestamp;
                  if (null != l) {
                      let e = c()(l).valueOf(),
                          t = C.default.fromTimestamp(e);
                      return C.default.compare(r, t) > 0 ? r : t;
                  }
                  return r;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: g.Z.isMessageRequest(e.id) || O.Z.isSpam(e.id)
    };
}
function T() {
    x.clear(),
        Object.values(N.Z.getMutablePrivateChannels()).forEach((e) => {
            x.set(e.id, I(e));
        });
}
function S() {
    let e = N.Z.getMutablePrivateChannels();
    for (let t in e) x.set(t, I(e[t]));
}
let P =
    ((r = []),
    (l = []),
    (i = []),
    () => {
        let e = x.values('FAVORITE'),
            t = x.values('DEFAULT');
        return (
            (r !== e || l !== t) &&
                ((i = []),
                e.forEach((e) => {
                    let { channelId: t } = e;
                    return i.push(t);
                }),
                (r = e),
                t.forEach((e) => {
                    let { channelId: t } = e;
                    return i.push(t);
                }),
                (l = t)),
            i
        );
    });
class j extends (o = d.ZP.Store) {
    initialize() {
        this.waitFor(N.Z, b.Z, E.default, g.Z, m.ZP), this.syncWith([m.ZP, g.Z], T);
    }
    getPrivateChannelIds() {
        return P();
    }
    getSortedChannels() {
        return [x.values('FAVORITE'), x.values('DEFAULT')];
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
(s = 'PrivateChannelSortStore'),
    (a = 'displayName') in j
        ? Object.defineProperty(j, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (j[a] = s);
let Z = new j(h.Z, {
    CONNECTION_OPEN: T,
    CONNECTION_OPEN_SUPPLEMENTAL: T,
    OVERLAY_INITIALIZE: T,
    CACHE_LOADED: S,
    CACHE_LOADED_LAZY: S,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, y.hv)(e.type) || x.has(e.id)) && x.set(e.id, I(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, y.hv)(t.type) || t.id === p.V) return !1;
        x.set(t.id, I(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return x.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!x.has(t)) return !1;
        let r = N.Z.getChannel(t);
        return null != r && x.set(t, I(r, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return x.delete(t);
    },
    LOGOUT: function () {
        x.clear();
    }
});
