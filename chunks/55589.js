let r, i, o;
n.d(t, { Z: () => w }), n(388685), n(539854);
var a,
    l,
    c,
    u = n(913527),
    s = n.n(u),
    d = n(442837),
    _ = n(759174),
    f = n(570140),
    p = n(333023),
    m = n(355298),
    b = n(333984),
    h = n(131704),
    g = n(592125),
    v = n(430824),
    I = n(306680),
    E = n(9156),
    y = n(594174),
    O = n(709054);
let S = new _.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -O.default.extractTimestamp(t);
    }
);
function C(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let r = null != (n = null != (t = I.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
                      i = e.isMessageRequestTimestamp;
                  if (null != i) {
                      let e = s()(i).valueOf(),
                          t = O.default.fromTimestamp(e);
                      return O.default.compare(r, t) > 0 ? r : t;
                  }
                  return r;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: m.Z.isMessageRequest(e.id) || b.Z.isSpam(e.id)
    };
}
function P() {
    S.clear(),
        Object.values(g.Z.getMutablePrivateChannels()).forEach((e) => {
            S.set(e.id, C(e));
        });
}
function A() {
    let e = g.Z.getMutablePrivateChannels();
    for (let t in e) S.set(t, C(e[t]));
}
let N =
    ((r = []),
    (i = []),
    (o = []),
    () => {
        let e = S.values('FAVORITE'),
            t = S.values('DEFAULT');
        return (
            (r !== e || i !== t) &&
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
                (i = t)),
            o
        );
    });
class T extends (a = d.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, v.Z, y.default, m.Z, E.ZP), this.syncWith([E.ZP, m.Z], P);
    }
    getPrivateChannelIds() {
        return N();
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
(c = 'PrivateChannelSortStore'),
    (l = 'displayName') in T
        ? Object.defineProperty(T, l, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (T[l] = c);
let w = new T(f.Z, {
    CONNECTION_OPEN: P,
    CONNECTION_OPEN_SUPPLEMENTAL: P,
    OVERLAY_INITIALIZE: P,
    CACHE_LOADED: A,
    CACHE_LOADED_LAZY: A,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, h.hv)(e.type) || S.has(e.id)) && S.set(e.id, C(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, h.hv)(t.type) || t.id === p.V) return !1;
        S.set(t.id, C(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return S.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!S.has(t)) return !1;
        let r = g.Z.getChannel(t);
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
