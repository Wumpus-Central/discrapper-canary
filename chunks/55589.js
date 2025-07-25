let r, i, l;
(n.d(t, { Z: () => T }), n(388685), n(539854));
var s,
    o,
    a,
    c = n(913527),
    u = n.n(c),
    d = n(442837),
    f = n(759174),
    p = n(570140),
    g = n(333023),
    m = n(355298),
    b = n(333984),
    h = n(131704),
    v = n(592125),
    O = n(430824),
    y = n(306680),
    E = n(9156),
    S = n(594174),
    j = n(709054);
let C = new f.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -j.default.extractTimestamp(t);
    }
);
function _(e) {
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
        isRequest: m.Z.isMessageRequest(e.id) || b.Z.isSpam(e.id)
    };
}
function P() {
    (C.clear(),
        Object.values(v.Z.getMutablePrivateChannels()).forEach((e) => {
            C.set(e.id, _(e));
        }));
}
function x() {
    let e = v.Z.getMutablePrivateChannels();
    for (let t in e) C.set(t, _(e[t]));
}
let N =
    ((r = []),
    (i = []),
    (l = []),
    () => {
        let e = C.values('FAVORITE'),
            t = C.values('DEFAULT');
        return (
            (r !== e || i !== t) &&
                ((l = []),
                e.forEach((e) => {
                    let { channelId: t } = e;
                    return l.push(t);
                }),
                (r = e),
                t.forEach((e) => {
                    let { channelId: t } = e;
                    return l.push(t);
                }),
                (i = t)),
            l
        );
    });
class w extends (s = d.ZP.Store) {
    initialize() {
        (this.waitFor(v.Z, O.Z, S.default, m.Z, E.ZP), this.syncWith([E.ZP, m.Z], P));
    }
    getPrivateChannelIds() {
        return N();
    }
    getSortedChannels() {
        return [C.values('FAVORITE'), C.values('DEFAULT')];
    }
    serializeForOverlay() {
        let e = {};
        return (
            C.values().forEach((t) => {
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
    CACHE_LOADED: x,
    CACHE_LOADED_LAZY: x,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, h.hv)(e.type) || C.has(e.id)) && C.set(e.id, _(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, h.hv)(t.type) || t.id === g.V) return !1;
        C.set(t.id, _(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return C.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!C.has(t)) return !1;
        let r = v.Z.getChannel(t);
        return null != r && C.set(t, _(r, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return C.delete(t);
    },
    LOGOUT: function () {
        C.clear();
    }
});
