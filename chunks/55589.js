let i, a, r;
t.d(n, { Z: () => D }), t(47120), t(653041);
var l,
    o,
    _,
    s = t(913527),
    d = t.n(s),
    c = t(442837),
    u = t(759174),
    I = t(570140),
    T = t(333023),
    f = t(355298),
    N = t(333984),
    m = t(131704),
    g = t(592125),
    E = t(430824),
    h = t(306680),
    S = t(9156),
    p = t(594174),
    O = t(709054);
let b = new u.h(
    (e) => {
        let { isRequest: n, isFavorite: t } = e;
        return n ? [] : [t ? 'FAVORITE' : 'DEFAULT'];
    },
    (e) => {
        let { lastMessageId: n } = e;
        return -n;
    }
);
function v(e) {
    let n =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var n, t;
                  let i = null !== (t = null !== (n = h.ZP.lastMessageId(e.id)) && void 0 !== n ? n : e.lastMessageId) && void 0 !== t ? t : e.id,
                      a = e.isMessageRequestTimestamp;
                  if (null != a) {
                      let e = d()(a).valueOf(),
                          n = O.default.fromTimestamp(e);
                      return O.default.compare(i, n) > 0 ? i : n;
                  }
                  return i;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: n,
        isFavorite: !1,
        isRequest: f.Z.isMessageRequest(e.id) || N.Z.isSpam(e.id)
    };
}
function P() {
    b.clear(),
        Object.values(g.Z.getMutablePrivateChannels()).forEach((e) => {
            b.set(e.id, v(e));
        });
}
function x() {
    let e = g.Z.getMutablePrivateChannels();
    for (let n in e) b.set(n, v(e[n]));
}
let C =
    ((i = []),
    (a = []),
    (r = []),
    () => {
        let e = b.values('FAVORITE'),
            n = b.values('DEFAULT');
        return (
            (i !== e || a !== n) &&
                ((r = []),
                e.forEach((e) => {
                    let { channelId: n } = e;
                    return r.push(n);
                }),
                (i = e),
                n.forEach((e) => {
                    let { channelId: n } = e;
                    return r.push(n);
                }),
                (a = n)),
            r
        );
    });
class U extends (l = c.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, E.Z, p.default, f.Z, S.ZP), this.syncWith([S.ZP, f.Z], P);
    }
    getPrivateChannelIds() {
        return C();
    }
    getSortedChannels() {
        return [b.values('FAVORITE'), b.values('DEFAULT')];
    }
    serializeForOverlay() {
        let e = {};
        return (
            b.values().forEach((n) => {
                let { channelId: t, lastMessageId: i } = n;
                e[t] = i;
            }),
            e
        );
    }
}
(_ = 'PrivateChannelSortStore'),
    (o = 'displayName') in U
        ? Object.defineProperty(U, o, {
              value: _,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (U[o] = _);
let D = new U(I.Z, {
    CONNECTION_OPEN: P,
    CONNECTION_OPEN_SUPPLEMENTAL: P,
    OVERLAY_INITIALIZE: P,
    CACHE_LOADED: x,
    CACHE_LOADED_LAZY: x,
    CHANNEL_UPDATES: function (e) {
        let { channels: n } = e;
        n.forEach((e) => {
            ((0, m.hv)(e.type) || b.has(e.id)) && b.set(e.id, v(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: n } = e;
        if (!(0, m.hv)(n.type) || n.id === T.V) return !1;
        b.set(n.id, v(n));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: n } = e;
        return b.delete(n.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: n, message: t } = e;
        if (!b.has(n)) return !1;
        let i = g.Z.getChannel(n);
        return null != i && b.set(n, v(i, t.id));
    },
    GUILD_CREATE: function (e) {
        let n = e.guild.id;
        return b.delete(n);
    },
    LOGOUT: function () {
        b.clear();
    }
});
