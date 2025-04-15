let n, i, s;
r.d(t, { Z: () => _ }), r(388685), r(539854);
var o,
    l,
    a,
    c = r(913527),
    h = r.n(c),
    v = r(442837),
    u = r(759174),
    f = r(570140),
    p = r(333023),
    d = r(355298),
    b = r(333984),
    g = r(131704),
    Z = r(592125),
    j = r(430824),
    M = r(306680),
    O = r(9156),
    y = r(594174),
    m = r(709054);
let H = new u.h(
    (e) => {
        let { isRequest: t, isFavorite: r } = e;
        return t ? [] : [r ? 'FAVORITE' : 'DEFAULT'];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -t;
    }
);
function x(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, r;
                  let n = null != (r = null != (t = M.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? r : e.id,
                      i = e.isMessageRequestTimestamp;
                  if (null != i) {
                      let e = h()(i).valueOf(),
                          t = m.default.fromTimestamp(e);
                      return m.default.compare(n, t) > 0 ? n : t;
                  }
                  return n;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: d.Z.isMessageRequest(e.id) || b.Z.isSpam(e.id)
    };
}
function V() {
    H.clear(),
        Object.values(Z.Z.getMutablePrivateChannels()).forEach((e) => {
            H.set(e.id, x(e));
        });
}
function w() {
    let e = Z.Z.getMutablePrivateChannels();
    for (let t in e) H.set(t, x(e[t]));
}
let C =
    ((n = []),
    (i = []),
    (s = []),
    () => {
        let e = H.values('FAVORITE'),
            t = H.values('DEFAULT');
        return (
            (n !== e || i !== t) &&
                ((s = []),
                e.forEach((e) => {
                    let { channelId: t } = e;
                    return s.push(t);
                }),
                (n = e),
                t.forEach((e) => {
                    let { channelId: t } = e;
                    return s.push(t);
                }),
                (i = t)),
            s
        );
    });
class P extends (o = v.ZP.Store) {
    initialize() {
        this.waitFor(Z.Z, j.Z, y.default, d.Z, O.ZP), this.syncWith([O.ZP, d.Z], V);
    }
    getPrivateChannelIds() {
        return C();
    }
    getSortedChannels() {
        return [H.values('FAVORITE'), H.values('DEFAULT')];
    }
    serializeForOverlay() {
        let e = {};
        return (
            H.values().forEach((t) => {
                let { channelId: r, lastMessageId: n } = t;
                e[r] = n;
            }),
            e
        );
    }
}
(a = 'PrivateChannelSortStore'),
    (l = 'displayName') in P
        ? Object.defineProperty(P, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (P[l] = a);
let _ = new P(f.Z, {
    CONNECTION_OPEN: V,
    CONNECTION_OPEN_SUPPLEMENTAL: V,
    OVERLAY_INITIALIZE: V,
    CACHE_LOADED: w,
    CACHE_LOADED_LAZY: w,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, g.hv)(e.type) || H.has(e.id)) && H.set(e.id, x(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, g.hv)(t.type) || t.id === p.V) return !1;
        H.set(t.id, x(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return H.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: r } = e;
        if (!H.has(t)) return !1;
        let n = Z.Z.getChannel(t);
        return null != n && H.set(t, x(n, r.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return H.delete(t);
    },
    LOGOUT: function () {
        H.clear();
    }
});
