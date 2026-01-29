let r, l, a;
n.d(t, {
    A: () => S,
}),
    n(896048),
    n(321073);
var i,
    o,
    s = n(989349),
    c = n.n(s),
    u = n(311907),
    d = n(713402),
    _ = n(73153),
    f = n(695870),
    A = n(380335),
    p = n(157550),
    b = n(493507),
    h = n(95701),
    m = n(734057),
    I = n(71393),
    g = n(222823),
    E = n(543465),
    y = n(287809),
    O = n(661191);
let C = new d.J(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
    },
    (e) => {
        let { lastMessageId: t, nudgeTimestamp: n } = e;
        return null != n ? -n : -O.default.extractTimestamp(t);
    },
);

function v(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let r = null != (t = null != (n = g.Ay.lastMessageId(e.id)) ? n : e.lastMessageId) ? t : e.id,
                      l = e.isMessageRequestTimestamp;
                  if (null != l) {
                      let e = c()(l).valueOf(),
                          t = O.default.fromTimestamp(e);
                      return O.default.compare(r, t) > 0 ? r : t;
                  }
                  return r;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: A.A.isMessageRequest(e.id) || p.A.isSpam(e.id),
        nudgeTimestamp: b.A.getNudgeTimestamp(e.id),
    };
}

function N() {
    C.clear(),
        Object.values(m.A.getMutablePrivateChannels()).forEach((e) => {
            C.set(e.id, v(e));
        });
}

function T() {
    let e = m.A.getMutablePrivateChannels();
    for (let t in e) C.set(t, v(e[t]));
}
let P =
    ((r = []),
    (l = []),
    (a = []),
    () => {
        let e = C.values("FAVORITE"),
            t = C.values("DEFAULT");
        return (
            (r !== e || l !== t) &&
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
                (l = t)),
            a
        );
    });
class L extends (i = u.Ay.Store) {
    initialize() {
        this.waitFor(m.A, I.A, A.A, g.Ay, p.A, E.Ay, y.default, b.A), this.syncWith([E.Ay, A.A, b.A], N);
    }
    getPrivateChannelIds() {
        return P();
    }
    getSortedChannels() {
        return [C.values("FAVORITE"), C.values("DEFAULT")];
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
(o = "displayName") in L
    ? Object.defineProperty(L, o, {
          value: "PrivateChannelSortStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (L[o] = "PrivateChannelSortStore");
let S = new L(_.h, {
    CONNECTION_OPEN: N,
    CONNECTION_OPEN_SUPPLEMENTAL: N,
    OVERLAY_INITIALIZE: N,
    CACHE_LOADED: T,
    CACHE_LOADED_LAZY: T,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, h.Gw)(e.type) || C.has(e.id)) && C.set(e.id, v(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, h.Gw)(t.type) || t.id === f.E) return !1;
        C.set(t.id, v(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return C.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!C.has(t)) return !1;
        let r = m.A.getChannel(t);
        return null != r && C.set(t, v(r, n.id));
    },
    REPLY_NUDGE_SET: function (e) {
        let { channelId: t } = e;
        if (!C.has(t)) return !1;
        let n = m.A.getChannel(t);
        return null != n && C.set(t, v(n));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return C.delete(t);
    },
    LOGOUT: function () {
        C.clear();
    },
});
