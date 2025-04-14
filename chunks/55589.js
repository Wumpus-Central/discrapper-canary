let r, i, o;
n.d(t, { Z: () => A }), n(388685), n(539854);
var l,
    s,
    a,
    c = n(913527),
    u = n.n(c),
    d = n(442837),
    p = n(759174),
    h = n(570140),
    f = n(333023),
    _ = n(355298),
    m = n(333984),
    b = n(131704),
    g = n(592125),
    E = n(430824),
    O = n(306680),
    y = n(9156),
    C = n(594174),
    S = n(709054);
let v = new p.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -t;
    }
);
function N(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let r = null != (n = null != (t = O.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
                      i = e.isMessageRequestTimestamp;
                  if (null != i) {
                      let e = u()(i).valueOf(),
                          t = S.default.fromTimestamp(e);
                      return S.default.compare(r, t) > 0 ? r : t;
                  }
                  return r;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: _.Z.isMessageRequest(e.id) || m.Z.isSpam(e.id)
    };
}
function T() {
    v.clear(),
        Object.values(g.Z.getMutablePrivateChannels()).forEach((e) => {
            v.set(e.id, N(e));
        });
}
function I() {
    let e = g.Z.getMutablePrivateChannels();
    for (let t in e) v.set(t, N(e[t]));
}
let x =
    ((r = []),
    (i = []),
    (o = []),
    () => {
        let e = v.values('FAVORITE'),
            t = v.values('DEFAULT');
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
class P extends (l = d.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, E.Z, C.default, _.Z, y.ZP), this.syncWith([y.ZP, _.Z], T);
    }
    getPrivateChannelIds() {
        return x();
    }
    getSortedChannels() {
        return [v.values('FAVORITE'), v.values('DEFAULT')];
    }
    serializeForOverlay() {
        let e = {};
        return (
            v.values().forEach((t) => {
                let { channelId: n, lastMessageId: r } = t;
                e[n] = r;
            }),
            e
        );
    }
}
(a = 'PrivateChannelSortStore'),
    (s = 'displayName') in P
        ? Object.defineProperty(P, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (P[s] = a);
let A = new P(h.Z, {
    CONNECTION_OPEN: T,
    CONNECTION_OPEN_SUPPLEMENTAL: T,
    OVERLAY_INITIALIZE: T,
    CACHE_LOADED: I,
    CACHE_LOADED_LAZY: I,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, b.hv)(e.type) || v.has(e.id)) && v.set(e.id, N(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, b.hv)(t.type) || t.id === f.V) return !1;
        v.set(t.id, N(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return v.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!v.has(t)) return !1;
        let r = g.Z.getChannel(t);
        return null != r && v.set(t, N(r, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return v.delete(t);
    },
    LOGOUT: function () {
        v.clear();
    }
});
