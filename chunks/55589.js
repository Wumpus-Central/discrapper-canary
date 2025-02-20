let r, o, a;
n.d(t, { Z: () => I }), n(47120), n(653041);
var i,
    s,
    l,
    d = n(913527),
    c = n.n(d),
    u = n(442837),
    _ = n(759174),
    b = n(570140),
    h = n(333023),
    p = n(355298),
    f = n(333984),
    E = n(131704),
    g = n(592125),
    C = n(430824),
    O = n(306680),
    v = n(9156),
    m = n(594174),
    w = n(709054);
let S = new _.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -t;
    }
);
function y(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let r = null !== (n = null !== (t = O.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                      o = e.isMessageRequestTimestamp;
                  if (null != o) {
                      let e = c()(o).valueOf(),
                          t = w.default.fromTimestamp(e);
                      return w.default.compare(r, t) > 0 ? r : t;
                  }
                  return r;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: p.Z.isMessageRequest(e.id) || f.Z.isSpam(e.id)
    };
}
function P() {
    S.clear(),
        Object.values(g.Z.getMutablePrivateChannels()).forEach((e) => {
            S.set(e.id, y(e));
        });
}
function R() {
    let e = g.Z.getMutablePrivateChannels();
    for (let t in e) S.set(t, y(e[t]));
}
let T =
    ((r = []),
    (o = []),
    (a = []),
    () => {
        let e = S.values('FAVORITE'),
            t = S.values('DEFAULT');
        return (
            (r !== e || o !== t) &&
                ((a = []),
                e.forEach((e) => {
                    let { channelId: t } = e;
                    return a.push(t);
                }),
                (r = e),
                t.forEach((e) => {
                    let { channelId: t } = e;
                    return a.push(t);
                }),
                (o = t)),
            a
        );
    });
class A extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, C.Z, m.default, p.Z, v.ZP), this.syncWith([v.ZP, p.Z], P);
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
(l = 'PrivateChannelSortStore'),
    (s = 'displayName') in A
        ? Object.defineProperty(A, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (A[s] = l);
let I = new A(b.Z, {
    CONNECTION_OPEN: P,
    CONNECTION_OPEN_SUPPLEMENTAL: P,
    OVERLAY_INITIALIZE: P,
    CACHE_LOADED: R,
    CACHE_LOADED_LAZY: R,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, E.hv)(e.type) || S.has(e.id)) && S.set(e.id, y(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, E.hv)(t.type) || t.id === h.V) return !1;
        S.set(t.id, y(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return S.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!S.has(t)) return !1;
        let r = g.Z.getChannel(t);
        return null != r && S.set(t, y(r, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return S.delete(t);
    },
    LOGOUT: function () {
        S.clear();
    }
});
