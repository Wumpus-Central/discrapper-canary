let i, s, l;
n(47120), n(653041);
var r,
    a,
    d,
    o,
    h,
    u,
    c = n(913527),
    C = n.n(c),
    g = n(442837),
    f = n(759174),
    p = n(570140),
    v = n(355298),
    I = n(333984),
    E = n(131704),
    S = n(592125),
    _ = n(430824),
    y = n(306680),
    w = n(9156),
    N = n(594174),
    m = n(709054),
    A = n(176505);
((d = r || (r = {})).DEFAULT = 'DEFAULT'), (d.FAVORITE = 'FAVORITE');
let L = new f.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -t;
    }
);
function R(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let i = null !== (n = null !== (t = y.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                      s = e.isMessageRequestTimestamp;
                  if (null != s) {
                      let e = C()(s).valueOf(),
                          t = m.default.fromTimestamp(e);
                      return m.default.compare(i, t) > 0 ? i : t;
                  }
                  return i;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: v.Z.isMessageRequest(e.id) || I.Z.isSpam(e.id)
    };
}
function Z() {
    L.clear(),
        Object.values(S.Z.getMutablePrivateChannels()).forEach((e) => {
            L.set(e.id, R(e));
        });
}
function O() {
    let e = S.Z.getMutablePrivateChannels();
    for (let t in e) L.set(t, R(e[t]));
}
let T =
    ((i = []),
    (s = []),
    (l = []),
    () => {
        let e = L.values('FAVORITE'),
            t = L.values('DEFAULT');
        return (
            (i !== e || s !== t) &&
                ((l = []),
                e.forEach((e) => {
                    let { channelId: t } = e;
                    return l.push(t);
                }),
                (i = e),
                t.forEach((e) => {
                    let { channelId: t } = e;
                    return l.push(t);
                }),
                (s = t)),
            l
        );
    });
class b extends (a = g.ZP.Store) {
    initialize() {
        this.waitFor(S.Z, _.Z, N.default, v.Z, w.ZP), this.syncWith([w.ZP, v.Z], Z);
    }
    getPrivateChannelIds() {
        return T();
    }
    getSortedChannels() {
        return [L.values('FAVORITE'), L.values('DEFAULT')];
    }
    serializeForOverlay() {
        let e = {};
        return (
            L.values().forEach((t) => {
                let { channelId: n, lastMessageId: i } = t;
                e[n] = i;
            }),
            e
        );
    }
}
(u = 'PrivateChannelSortStore'),
    (h = 'displayName') in (o = b)
        ? Object.defineProperty(o, h, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[h] = u),
    (t.Z = new b(p.Z, {
        CONNECTION_OPEN: Z,
        CONNECTION_OPEN_SUPPLEMENTAL: Z,
        OVERLAY_INITIALIZE: Z,
        CACHE_LOADED: O,
        CACHE_LOADED_LAZY: O,
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            t.forEach((e) => {
                ((0, E.hv)(e.type) || L.has(e.id)) && L.set(e.id, R(e));
            });
        },
        CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, E.hv)(t.type) || t.id === A.V) return !1;
            L.set(t.id, R(t));
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return L.delete(t.id);
        },
        MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e;
            if (!L.has(t)) return !1;
            let i = S.Z.getChannel(t);
            return null != i && L.set(t, R(i, n.id));
        },
        GUILD_CREATE: function (e) {
            let t = e.guild.id;
            return L.delete(t);
        },
        LOGOUT: function () {
            L.clear();
        }
    }));
