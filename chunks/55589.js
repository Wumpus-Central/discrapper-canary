let r, a, i;
n.d(t, { Z: () => T }), n(388685), n(539854);
var o,
    l,
    c,
    s = n(913527),
    u = n.n(s),
    _ = n(442837),
    d = n(759174),
    f = n(570140),
    m = n(333023),
    p = n(355298),
    g = n(333984),
    v = n(131704),
    b = n(592125),
    h = n(430824),
    I = n(306680),
    y = n(9156),
    S = n(594174),
    E = n(709054);
let C = new d.h(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
    },
    (e) => {
        let { lastMessageId: t } = e;
        return -E.default.extractTimestamp(t);
    }
);
function P(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let r = null != (n = null != (t = I.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
                      a = e.isMessageRequestTimestamp;
                  if (null != a) {
                      let e = u()(a).valueOf(),
                          t = E.default.fromTimestamp(e);
                      return E.default.compare(r, t) > 0 ? r : t;
                  }
                  return r;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: p.Z.isMessageRequest(e.id) || g.Z.isSpam(e.id)
    };
}
function O() {
    C.clear(),
        Object.values(b.Z.getMutablePrivateChannels()).forEach((e) => {
            C.set(e.id, P(e));
        });
}
function A() {
    let e = b.Z.getMutablePrivateChannels();
    for (let t in e) C.set(t, P(e[t]));
}
let N =
    ((r = []),
    (a = []),
    (i = []),
    () => {
        let e = C.values('FAVORITE'),
            t = C.values('DEFAULT');
        return (
            (r !== e || a !== t) &&
                ((i = []),
                e.forEach((e) => {
                    let { channelId: t } = e;
                    return i.push(t);
                }),
                (r = e),
                t.forEach((e) => {
                    let { channelId: t } = e;
                    return i.push(t);
                }),
                (a = t)),
            i
        );
    });
class w extends (o = _.ZP.Store) {
    initialize() {
        this.waitFor(b.Z, h.Z, S.default, p.Z, y.ZP), this.syncWith([y.ZP, p.Z], O);
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
(c = 'PrivateChannelSortStore'),
    (l = 'displayName') in w
        ? Object.defineProperty(w, l, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (w[l] = c);
let T = new w(f.Z, {
    CONNECTION_OPEN: O,
    CONNECTION_OPEN_SUPPLEMENTAL: O,
    OVERLAY_INITIALIZE: O,
    CACHE_LOADED: A,
    CACHE_LOADED_LAZY: A,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, v.hv)(e.type) || C.has(e.id)) && C.set(e.id, P(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, v.hv)(t.type) || t.id === m.V) return !1;
        C.set(t.id, P(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return C.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!C.has(t)) return !1;
        let r = b.Z.getChannel(t);
        return null != r && C.set(t, P(r, n.id));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return C.delete(t);
    },
    LOGOUT: function () {
        C.clear();
    }
});
