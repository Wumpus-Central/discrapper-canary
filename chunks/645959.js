let r, l, a;
n.d(t, {
    A: () => w,
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
    p = n(380335),
    m = n(157550),
    A = n(493507),
    b = n(95701),
    h = n(734057),
    g = n(71393),
    y = n(222823),
    v = n(543465),
    I = n(287809),
    C = n(661191);
let E = new d.J(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
    },
    (e) => {
        let { lastMessageId: t, nudgeTimestamp: n } = e;
        return null != n ? -n : -C.default.extractTimestamp(t);
    },
);

function O(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var t, n;
                  let r = null != (t = null != (n = y.Ay.lastMessageId(e.id)) ? n : e.lastMessageId) ? t : e.id,
                      l = e.isMessageRequestTimestamp;
                  if (null != l) {
                      let e = c()(l).valueOf(),
                          t = C.default.fromTimestamp(e);
                      return C.default.compare(r, t) > 0 ? r : t;
                  }
                  return r;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: p.A.isMessageRequest(e.id) || m.A.isSpam(e.id),
        nudgeTimestamp: A.A.getNudgeTimestamp(e.id),
    };
}

function T() {
    E.clear(),
        Object.values(h.A.getMutablePrivateChannels()).forEach((e) => {
            E.set(e.id, O(e));
        });
}

function N() {
    let e = h.A.getMutablePrivateChannels();
    for (let t in e) E.set(t, O(e[t]));
}
let x =
    ((r = []),
    (l = []),
    (a = []),
    () => {
        let e = E.values("FAVORITE"),
            t = E.values("DEFAULT");
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
class P extends (i = u.Ay.Store) {
    initialize() {
        this.waitFor(h.A, g.A, p.A, y.Ay, m.A, v.Ay, I.default, A.A), this.syncWith([v.Ay, p.A], T);
    }
    getPrivateChannelIds() {
        return x();
    }
    getSortedChannels() {
        return [E.values("FAVORITE"), E.values("DEFAULT")];
    }
    serializeForOverlay() {
        let e = {};
        return (
            E.values().forEach((t) => {
                let { channelId: n, lastMessageId: r } = t;
                e[n] = r;
            }),
            e
        );
    }
}
(o = "displayName") in P
    ? Object.defineProperty(P, o, {
          value: "PrivateChannelSortStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (P[o] = "PrivateChannelSortStore");
let w = new P(_.h, {
    CONNECTION_OPEN: T,
    CONNECTION_OPEN_SUPPLEMENTAL: T,
    OVERLAY_INITIALIZE: T,
    CACHE_LOADED: N,
    CACHE_LOADED_LAZY: N,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, b.Gw)(e.type) || E.has(e.id)) && E.set(e.id, O(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, b.Gw)(t.type) || t.id === f.E) return !1;
        E.set(t.id, O(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return E.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!E.has(t)) return !1;
        let r = h.A.getChannel(t);
        return null != r && E.set(t, O(r, n.id));
    },
    REPLY_NUDGE_SET: function (e) {
        let { channelId: t } = e;
        if (!E.has(t)) return !1;
        let n = h.A.getChannel(t);
        return null != n && E.set(t, O(n));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return E.delete(t);
    },
    LOGOUT: function () {
        E.clear();
    },
});
