let i, r, a;
n.d(t, { Z: () => v }), n(47120), n(653041);
var l,
    o,
    s,
    _ = n(913527),
    u = n.n(_),
    I = n(442837),
    d = n(759174),
    T = n(570140),
    E = n(333023),
    O = n(355298),
    S = n(333984),
    N = n(131704),
    c = n(592125),
    P = n(430824),
    f = n(306680),
    h = n(9156),
    m = n(594174),
    g = n(709054);
let p = new d.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -t;
    }
);
function b(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let i = null !== (n = null !== (t = f.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                      r = e.isMessageRequestTimestamp;
                  if (null != r) {
                      let e = u()(r).valueOf(),
                          t = g.default.fromTimestamp(e);
                      return g.default.compare(i, t) > 0 ? i : t;
                  }
                  return i;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: O.Z.isMessageRequest(e.id) || S.Z.isSpam(e.id)
    };
}
function C() {
    p.clear(),
        Object.values(c.Z.getMutablePrivateChannels()).forEach((e) => {
            p.set(e.id, b(e));
        });
}
function M() {
    let e = c.Z.getMutablePrivateChannels();
    for (let t in e) p.set(t, b(e[t]));
}
let R =
    ((i = []),
    (r = []),
    (a = []),
    () => {
        let e = p.values('FAVORITE'),
            t = p.values('DEFAULT');
        return (
            (i !== e || r !== t) &&
                ((a = []),
                e.forEach((e) => {
                    let { channelId: t } = e;
                    return a.push(t);
                }),
                (i = e),
                t.forEach((e) => {
                    let { channelId: t } = e;
                    return a.push(t);
                }),
                (r = t)),
            a
        );
    });
class D extends (l = I.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, P.Z, m.default, O.Z, h.ZP), this.syncWith([h.ZP, O.Z], C);
    }
    getPrivateChannelIds() {
        return R();
    }
    getSortedChannels() {
        return [p.values('FAVORITE'), p.values('DEFAULT')];
    }
    serializeForOverlay() {
        let e = {};
        return (
            p.values().forEach((t) => {
                let { channelId: n, lastMessageId: i } = t;
                e[n] = i;
            }),
            e
        );
    }
}
(s = 'PrivateChannelSortStore'),
    (o = 'displayName') in D
        ? Object.defineProperty(D, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (D[o] = s);
let v = new D(T.Z, {
    CONNECTION_OPEN: C,
    CONNECTION_OPEN_SUPPLEMENTAL: C,
    OVERLAY_INITIALIZE: C,
    CACHE_LOADED: M,
    CACHE_LOADED_LAZY: M,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, N.hv)(e.type) || p.has(e.id)) && p.set(e.id, b(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, N.hv)(t.type) || t.id === E.V) return !1;
        p.set(t.id, b(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return p.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!p.has(t)) return !1;
        let i = c.Z.getChannel(t);
        return null != i && p.set(t, b(i, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return p.delete(t);
    },
    LOGOUT: function () {
        p.clear();
    }
});
