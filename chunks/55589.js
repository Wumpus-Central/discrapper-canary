let r, i, o;
n.d(t, { Z: () => P }), n(47120), n(653041);
var l,
    s,
    a,
    c = n(913527),
    u = n.n(c),
    d = n(442837),
    p = n(759174),
    _ = n(570140),
    f = n(333023),
    h = n(355298),
    m = n(333984),
    b = n(131704),
    g = n(592125),
    E = n(430824),
    C = n(306680),
    O = n(9156),
    y = n(594174),
    v = n(709054);
let N = new p.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -t;
    }
);
function S(e) {
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
        isRequest: h.Z.isMessageRequest(e.id) || m.Z.isSpam(e.id)
    };
}
function x() {
    N.clear(),
        Object.values(g.Z.getMutablePrivateChannels()).forEach((e) => {
            N.set(e.id, S(e));
        });
}
function I() {
    let e = g.Z.getMutablePrivateChannels();
    for (let t in e) N.set(t, S(e[t]));
}
let T =
    ((r = []),
    (i = []),
    (o = []),
    () => {
        let e = N.values('FAVORITE'),
            t = N.values('DEFAULT');
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
        this.waitFor(g.Z, E.Z, y.default, h.Z, O.ZP), this.syncWith([O.ZP, h.Z], x);
    }
    getPrivateChannelIds() {
        return T();
    }
    getSortedChannels() {
        return [N.values('FAVORITE'), N.values('DEFAULT')];
    }
    serializeForOverlay() {
        let e = {};
        return (
            N.values().forEach((t) => {
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
let P = new L(_.Z, {
    CONNECTION_OPEN: x,
    CONNECTION_OPEN_SUPPLEMENTAL: x,
    OVERLAY_INITIALIZE: x,
    CACHE_LOADED: I,
    CACHE_LOADED_LAZY: I,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, b.hv)(e.type) || N.has(e.id)) && N.set(e.id, S(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, b.hv)(t.type) || t.id === f.V) return !1;
        N.set(t.id, S(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return N.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!N.has(t)) return !1;
        let r = g.Z.getChannel(t);
        return null != r && N.set(t, S(r, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return N.delete(t);
    },
    LOGOUT: function () {
        N.clear();
    }
});
