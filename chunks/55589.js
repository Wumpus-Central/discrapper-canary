let r, i, s;
n.d(t, { Z: () => N }), n(388685), n(539854);
var o,
    l,
    a,
    c = n(913527),
    u = n.n(c),
    d = n(442837),
    f = n(759174),
    p = n(570140),
    g = n(333023),
    b = n(355298),
    m = n(333984),
    _ = n(131704),
    h = n(592125),
    v = n(430824),
    O = n(306680),
    y = n(9156),
    S = n(594174),
    C = n(709054);
let j = new f.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -C.default.extractTimestamp(t);
    }
);
function x(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let r = null != (n = null != (t = O.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
                      i = e.isMessageRequestTimestamp;
                  if (null != i) {
                      let e = u()(i).valueOf(),
                          t = C.default.fromTimestamp(e);
                      return C.default.compare(r, t) > 0 ? r : t;
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
function E() {
    j.clear(),
        Object.values(h.Z.getMutablePrivateChannels()).forEach((e) => {
            j.set(e.id, x(e));
        });
}
function P() {
    let e = h.Z.getMutablePrivateChannels();
    for (let t in e) j.set(t, x(e[t]));
}
let w =
    ((r = []),
    (i = []),
    (s = []),
    () => {
        let e = j.values('FAVORITE'),
            t = j.values('DEFAULT');
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
        this.waitFor(h.Z, v.Z, S.default, b.Z, y.ZP), this.syncWith([y.ZP, b.Z], E);
    }
    getPrivateChannelIds() {
        return w();
    }
    getSortedChannels() {
        return [j.values('FAVORITE'), j.values('DEFAULT')];
    }
    serializeForOverlay() {
        let e = {};
        return (
            j.values().forEach((t) => {
                let { channelId: n, lastMessageId: r } = t;
                e[n] = r;
            }),
            e
        );
    }
}
(a = 'PrivateChannelSortStore'),
    (l = 'displayName') in T
        ? Object.defineProperty(T, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (T[l] = a);
let N = new T(p.Z, {
    CONNECTION_OPEN: E,
    CONNECTION_OPEN_SUPPLEMENTAL: E,
    OVERLAY_INITIALIZE: E,
    CACHE_LOADED: P,
    CACHE_LOADED_LAZY: P,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, _.hv)(e.type) || j.has(e.id)) && j.set(e.id, x(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, _.hv)(t.type) || t.id === g.V) return !1;
        j.set(t.id, x(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return j.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!j.has(t)) return !1;
        let r = h.Z.getChannel(t);
        return null != r && j.set(t, x(r, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return j.delete(t);
    },
    LOGOUT: function () {
        j.clear();
    }
});
