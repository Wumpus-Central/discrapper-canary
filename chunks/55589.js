let r, i, s;
(n.d(t, { Z: () => T }), n(388685), n(539854));
var l,
    o,
    a,
    c = n(913527),
    u = n.n(c),
    d = n(442837),
    f = n(759174),
    p = n(570140),
    g = n(333023),
    b = n(355298),
    m = n(333984),
    v = n(131704),
    h = n(592125),
    O = n(430824),
    y = n(306680),
    E = n(9156),
    S = n(594174),
    j = n(709054);
let x = new f.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -j.default.extractTimestamp(t);
    }
);
function C(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let r = null != (n = null != (t = y.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
                      i = e.isMessageRequestTimestamp;
                  if (null != i) {
                      let e = u()(i).valueOf(),
                          t = j.default.fromTimestamp(e);
                      return j.default.compare(r, t) > 0 ? r : t;
                  }
                  return r;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: b.Z.isMessageRequest(e.id) || m.Z.isSpam(e.id)
    };
}
function P() {
    (x.clear(),
        Object.values(h.Z.getMutablePrivateChannels()).forEach((e) => {
            x.set(e.id, C(e));
        }));
}
function _() {
    let e = h.Z.getMutablePrivateChannels();
    for (let t in e) x.set(t, C(e[t]));
}
let N =
    ((r = []),
    (i = []),
    (s = []),
    () => {
        let e = x.values('FAVORITE'),
            t = x.values('DEFAULT');
        return (
            (r !== e || i !== t) &&
                ((s = []),
                e.forEach((e) => {
                    let { channelId: t } = e;
                    return s.push(t);
                }),
                (r = e),
                t.forEach((e) => {
                    let { channelId: t } = e;
                    return s.push(t);
                }),
                (i = t)),
            s
        );
    });
class w extends (l = d.ZP.Store) {
    initialize() {
        (this.waitFor(h.Z, O.Z, S.default, b.Z, E.ZP), this.syncWith([E.ZP, b.Z], P));
    }
    getPrivateChannelIds() {
        return N();
    }
    getSortedChannels() {
        return [x.values('FAVORITE'), x.values('DEFAULT')];
    }
    serializeForOverlay() {
        let e = {};
        return (
            x.values().forEach((t) => {
                let { channelId: n, lastMessageId: r } = t;
                e[n] = r;
            }),
            e
        );
    }
}
((a = 'PrivateChannelSortStore'),
    (o = 'displayName') in w
        ? Object.defineProperty(w, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (w[o] = a));
let T = new w(p.Z, {
    CONNECTION_OPEN: P,
    CONNECTION_OPEN_SUPPLEMENTAL: P,
    OVERLAY_INITIALIZE: P,
    CACHE_LOADED: _,
    CACHE_LOADED_LAZY: _,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, v.hv)(e.type) || x.has(e.id)) && x.set(e.id, C(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, v.hv)(t.type) || t.id === g.V) return !1;
        x.set(t.id, C(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return x.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!x.has(t)) return !1;
        let r = h.Z.getChannel(t);
        return null != r && x.set(t, C(r, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return x.delete(t);
    },
    LOGOUT: function () {
        x.clear();
    }
});
