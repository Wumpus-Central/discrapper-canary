let r, s, i;
n.d(t, { Z: () => T }), n(388685), n(539854);
var o,
    l,
    a,
    c = n(913527),
    u = n.n(c),
    d = n(442837),
    f = n(759174),
    p = n(570140),
    g = n(333023),
    b = n(355298),
    m = n(333984),
    v = n(131704),
    h = n(592125),
    O = n(430824),
    _ = n(306680),
    j = n(9156),
    y = n(594174),
    x = n(709054);
let S = new f.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -t;
    }
);
function C(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let r = null != (n = null != (t = _.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
                      s = e.isMessageRequestTimestamp;
                  if (null != s) {
                      let e = u()(s).valueOf(),
                          t = x.default.fromTimestamp(e);
                      return x.default.compare(r, t) > 0 ? r : t;
                  }
                  return r;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: b.Z.isMessageRequest(e.id) || m.Z.isSpam(e.id)
    };
}
function E() {
    S.clear(),
        Object.values(h.Z.getMutablePrivateChannels()).forEach((e) => {
            S.set(e.id, C(e));
        });
}
function P() {
    let e = h.Z.getMutablePrivateChannels();
    for (let t in e) S.set(t, C(e[t]));
}
let w =
    ((r = []),
    (s = []),
    (i = []),
    () => {
        let e = S.values('FAVORITE'),
            t = S.values('DEFAULT');
        return (
            (r !== e || s !== t) &&
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
                (s = t)),
            i
        );
    });
class N extends (o = d.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, O.Z, y.default, b.Z, j.ZP), this.syncWith([j.ZP, b.Z], E);
    }
    getPrivateChannelIds() {
        return w();
    }
    getSortedChannels() {
        return [S.values('FAVORITE'), S.values('DEFAULT')];
    }
    serializeForOverlay() {
        let e = {};
        return (
            S.values().forEach((t) => {
                let { channelId: n, lastMessageId: r } = t;
                e[n] = r;
            }),
            e
        );
    }
}
(a = 'PrivateChannelSortStore'),
    (l = 'displayName') in N
        ? Object.defineProperty(N, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (N[l] = a);
let T = new N(p.Z, {
    CONNECTION_OPEN: E,
    CONNECTION_OPEN_SUPPLEMENTAL: E,
    OVERLAY_INITIALIZE: E,
    CACHE_LOADED: P,
    CACHE_LOADED_LAZY: P,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, v.hv)(e.type) || S.has(e.id)) && S.set(e.id, C(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, v.hv)(t.type) || t.id === g.V) return !1;
        S.set(t.id, C(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return S.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!S.has(t)) return !1;
        let r = h.Z.getChannel(t);
        return null != r && S.set(t, C(r, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return S.delete(t);
    },
    LOGOUT: function () {
        S.clear();
    }
});
