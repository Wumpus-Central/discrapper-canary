let r, i, o;
n.d(t, { Z: () => P }), n(388685), n(539854);
var l,
    s,
    a,
    c = n(913527),
    u = n.n(c),
    d = n(442837),
    p = n(759174),
    h = n(570140),
    _ = n(333023),
    f = n(355298),
    m = n(333984),
    g = n(131704),
    b = n(592125),
    E = n(430824),
    C = n(306680),
    O = n(9156),
    y = n(594174),
    v = n(709054);
let S = new p.h(
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
                  let r = null != (n = null != (t = C.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
                      i = e.isMessageRequestTimestamp;
                  if (null != i) {
                      let e = u()(i).valueOf(),
                          t = v.default.fromTimestamp(e);
                      return v.default.compare(r, t) > 0 ? r : t;
                  }
                  return r;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: f.Z.isMessageRequest(e.id) || m.Z.isSpam(e.id)
    };
}
function x() {
    S.clear(),
        Object.values(b.Z.getMutablePrivateChannels()).forEach((e) => {
            S.set(e.id, N(e));
        });
}
function I() {
    let e = b.Z.getMutablePrivateChannels();
    for (let t in e) S.set(t, N(e[t]));
}
let T =
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
class L extends (l = d.ZP.Store) {
    initialize() {
        this.waitFor(b.Z, E.Z, y.default, f.Z, O.ZP), this.syncWith([O.ZP, f.Z], x);
    }
    getPrivateChannelIds() {
        return T();
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
    (s = 'displayName') in L
        ? Object.defineProperty(L, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (L[s] = a);
let P = new L(h.Z, {
    CONNECTION_OPEN: x,
    CONNECTION_OPEN_SUPPLEMENTAL: x,
    OVERLAY_INITIALIZE: x,
    CACHE_LOADED: I,
    CACHE_LOADED_LAZY: I,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, g.hv)(e.type) || S.has(e.id)) && S.set(e.id, N(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, g.hv)(t.type) || t.id === _.V) return !1;
        S.set(t.id, N(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return S.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!S.has(t)) return !1;
        let r = b.Z.getChannel(t);
        return null != r && S.set(t, N(r, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return S.delete(t);
    },
    LOGOUT: function () {
        S.clear();
    }
});
