let i, l, r;
n.d(t, { Z: () => L }), n(47120), n(653041);
var s,
    a,
    o,
    d = n(913527),
    u = n.n(d),
    c = n(442837),
    h = n(759174),
    g = n(570140),
    C = n(333023),
    f = n(355298),
    p = n(333984),
    E = n(131704),
    v = n(592125),
    _ = n(430824),
    I = n(306680),
    S = n(9156),
    m = n(594174),
    T = n(709054);
let N = new h.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -t;
    }
);
function O(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let i = null !== (n = null !== (t = I.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                      l = e.isMessageRequestTimestamp;
                  if (null != l) {
                      let e = u()(l).valueOf(),
                          t = T.default.fromTimestamp(e);
                      return T.default.compare(i, t) > 0 ? i : t;
                  }
                  return i;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: f.Z.isMessageRequest(e.id) || p.Z.isSpam(e.id)
    };
}
function A() {
    N.clear(),
        Object.values(v.Z.getMutablePrivateChannels()).forEach((e) => {
            N.set(e.id, O(e));
        });
}
function y() {
    let e = v.Z.getMutablePrivateChannels();
    for (let t in e) N.set(t, O(e[t]));
}
let P =
    ((i = []),
    (l = []),
    (r = []),
    () => {
        let e = N.values('FAVORITE'),
            t = N.values('DEFAULT');
        return (
            (i !== e || l !== t) &&
                ((r = []),
                e.forEach((e) => {
                    let { channelId: t } = e;
                    return r.push(t);
                }),
                (i = e),
                t.forEach((e) => {
                    let { channelId: t } = e;
                    return r.push(t);
                }),
                (l = t)),
            r
        );
    });
class b extends (s = c.ZP.Store) {
    initialize() {
        this.waitFor(v.Z, _.Z, m.default, f.Z, S.ZP), this.syncWith([S.ZP, f.Z], A);
    }
    getPrivateChannelIds() {
        return P();
    }
    getSortedChannels() {
        return [N.values('FAVORITE'), N.values('DEFAULT')];
    }
    serializeForOverlay() {
        let e = {};
        return (
            N.values().forEach((t) => {
                let { channelId: n, lastMessageId: i } = t;
                e[n] = i;
            }),
            e
        );
    }
}
(o = 'PrivateChannelSortStore'),
    (a = 'displayName') in b
        ? Object.defineProperty(b, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (b[a] = o);
let L = new b(g.Z, {
    CONNECTION_OPEN: A,
    CONNECTION_OPEN_SUPPLEMENTAL: A,
    OVERLAY_INITIALIZE: A,
    CACHE_LOADED: y,
    CACHE_LOADED_LAZY: y,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, E.hv)(e.type) || N.has(e.id)) && N.set(e.id, O(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, E.hv)(t.type) || t.id === C.V) return !1;
        N.set(t.id, O(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return N.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!N.has(t)) return !1;
        let i = v.Z.getChannel(t);
        return null != i && N.set(t, O(i, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return N.delete(t);
    },
    LOGOUT: function () {
        N.clear();
    }
});
