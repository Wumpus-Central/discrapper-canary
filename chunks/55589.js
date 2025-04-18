let n, i, s;
r.d(t, { Z: () => C }), r(388685), r(539854);
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
    Z = r(131704),
    M = r(592125),
    g = r(430824),
    j = r(306680),
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
function V(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, r;
                  let n = null != (r = null != (t = j.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? r : e.id,
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
function x() {
    H.clear(),
        Object.values(M.Z.getMutablePrivateChannels()).forEach((e) => {
            H.set(e.id, V(e));
        });
}
function w() {
    let e = M.Z.getMutablePrivateChannels();
    for (let t in e) H.set(t, V(e[t]));
}
let P =
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
class _ extends (o = v.ZP.Store) {
    initialize() {
        this.waitFor(M.Z, g.Z, y.default, d.Z, O.ZP), this.syncWith([O.ZP, d.Z], x);
    }
    getPrivateChannelIds() {
        return P();
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
    (l = 'displayName') in _
        ? Object.defineProperty(_, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (_[l] = a);
let C = new _(f.Z, {
    CONNECTION_OPEN: x,
    CONNECTION_OPEN_SUPPLEMENTAL: x,
    OVERLAY_INITIALIZE: x,
    CACHE_LOADED: w,
    CACHE_LOADED_LAZY: w,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, Z.hv)(e.type) || H.has(e.id)) && H.set(e.id, V(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, Z.hv)(t.type) || t.id === p.V) return !1;
        H.set(t.id, V(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return H.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: r } = e;
        if (!H.has(t)) return !1;
        let n = M.Z.getChannel(t);
        return null != n && H.set(t, V(n, r.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return H.delete(t);
    },
    LOGOUT: function () {
        H.clear();
    }
});
