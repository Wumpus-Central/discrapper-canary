let r, i, l;
n(47120), n(653041);
var a,
    u,
    o,
    s,
    c,
    d,
    f = n(913527),
    p = n.n(f),
    h = n(442837),
    _ = n(759174),
    E = n(570140),
    m = n(333023),
    g = n(355298),
    C = n(333984),
    v = n(131704),
    A = n(592125),
    I = n(430824),
    N = n(306680),
    T = n(9156),
    S = n(594174),
    O = n(709054);
((o = a || (a = {})).DEFAULT = 'DEFAULT'), (o.FAVORITE = 'FAVORITE');
let R = new _.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -t;
    }
);
function P(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let r = null !== (n = null !== (t = N.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                      i = e.isMessageRequestTimestamp;
                  if (null != i) {
                      let e = p()(i).valueOf(),
                          t = O.default.fromTimestamp(e);
                      return O.default.compare(r, t) > 0 ? r : t;
                  }
                  return r;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: g.Z.isMessageRequest(e.id) || C.Z.isSpam(e.id)
    };
}
function Z() {
    R.clear(),
        Object.values(A.Z.getMutablePrivateChannels()).forEach((e) => {
            R.set(e.id, P(e));
        });
}
function y() {
    let e = A.Z.getMutablePrivateChannels();
    for (let t in e) R.set(t, P(e[t]));
}
let L =
    ((r = []),
    (i = []),
    (l = []),
    () => {
        let e = R.values('FAVORITE'),
            t = R.values('DEFAULT');
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
class b extends (u = h.ZP.Store) {
    initialize() {
        this.waitFor(A.Z, I.Z, S.default, g.Z, T.ZP), this.syncWith([T.ZP, g.Z], Z);
    }
    getPrivateChannelIds() {
        return L();
    }
    getSortedChannels() {
        return [R.values('FAVORITE'), R.values('DEFAULT')];
    }
    serializeForOverlay() {
        let e = {};
        return (
            R.values().forEach((t) => {
                let { channelId: n, lastMessageId: r } = t;
                e[n] = r;
            }),
            e
        );
    }
}
(d = 'PrivateChannelSortStore'),
    (c = 'displayName') in (s = b)
        ? Object.defineProperty(s, c, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[c] = d),
    (t.Z = new b(E.Z, {
        CONNECTION_OPEN: Z,
        CONNECTION_OPEN_SUPPLEMENTAL: Z,
        OVERLAY_INITIALIZE: Z,
        CACHE_LOADED: y,
        CACHE_LOADED_LAZY: y,
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            t.forEach((e) => {
                ((0, v.hv)(e.type) || R.has(e.id)) && R.set(e.id, P(e));
            });
        },
        CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, v.hv)(t.type) || t.id === m.V) return !1;
            R.set(t.id, P(t));
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return R.delete(t.id);
        },
        MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e;
            if (!R.has(t)) return !1;
            let r = A.Z.getChannel(t);
            return null != r && R.set(t, P(r, n.id));
        },
        GUILD_CREATE: function (e) {
            let t = e.guild.id;
            return R.delete(t);
        },
        LOGOUT: function () {
            R.clear();
        }
    }));
