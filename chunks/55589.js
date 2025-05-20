let r, i, s;
n.d(t, { Z: () => N }), n(388685), n(539854);
var o,
    a,
    l,
    c = n(913527),
    u = n.n(c),
    d = n(442837),
    p = n(759174),
    f = n(570140),
    g = n(333023),
    b = n(355298),
    m = n(333984),
    _ = n(131704),
    v = n(592125),
    h = n(430824),
    O = n(306680),
    j = n(9156),
    y = n(594174),
    x = n(709054);
let C = new p.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -x.default.extractTimestamp(t);
    }
);
function S(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let r = null != (n = null != (t = O.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
                      i = e.isMessageRequestTimestamp;
                  if (null != i) {
                      let e = u()(i).valueOf(),
                          t = x.default.fromTimestamp(e);
                      return x.default.compare(r, t) > 0 ? r : t;
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
    C.clear(),
        Object.values(v.Z.getMutablePrivateChannels()).forEach((e) => {
            C.set(e.id, S(e));
        });
}
function E() {
    let e = v.Z.getMutablePrivateChannels();
    for (let t in e) C.set(t, S(e[t]));
}
let w =
    ((r = []),
    (i = []),
    (s = []),
    () => {
        let e = C.values('FAVORITE'),
            t = C.values('DEFAULT');
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
class T extends (o = d.ZP.Store) {
    initialize() {
        this.waitFor(v.Z, h.Z, y.default, b.Z, j.ZP), this.syncWith([j.ZP, b.Z], P);
    }
    getPrivateChannelIds() {
        return w();
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
(l = 'PrivateChannelSortStore'),
    (a = 'displayName') in T
        ? Object.defineProperty(T, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (T[a] = l);
let N = new T(f.Z, {
    CONNECTION_OPEN: P,
    CONNECTION_OPEN_SUPPLEMENTAL: P,
    OVERLAY_INITIALIZE: P,
    CACHE_LOADED: E,
    CACHE_LOADED_LAZY: E,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, _.hv)(e.type) || C.has(e.id)) && C.set(e.id, S(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, _.hv)(t.type) || t.id === g.V) return !1;
        C.set(t.id, S(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return C.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!C.has(t)) return !1;
        let r = v.Z.getChannel(t);
        return null != r && C.set(t, S(r, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return C.delete(t);
    },
    LOGOUT: function () {
        C.clear();
    }
});
