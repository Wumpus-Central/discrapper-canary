let n, l, s;
t.d(i, {
    A: () => T,
}),
    t(896048),
    t(321073);
var a,
    u,
    r = t(989349),
    A = t.n(r),
    d = t(311907),
    g = t(713402),
    f = t(73153),
    M = t(695870),
    o = t(380335),
    c = t(157550),
    m = t(493507),
    N = t(95701),
    E = t(734057),
    h = t(71393),
    y = t(222823),
    R = t(543465),
    C = t(287809),
    p = t(661191);
let v = new g.J(
    (e) => {
        let { isRequest: i, isFavorite: t } = e;
        return i ? [] : [t ? "FAVORITE" : "DEFAULT"];
    },
    (e) => {
        let { lastMessageId: i, nudgeTimestamp: t } = e;
        return -Math.max(p.default.extractTimestamp(i), null != t ? t : 0);
    },
);

function O(e) {
    let i =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  var i, t;
                  let n = null != (i = null != (t = y.Ay.lastMessageId(e.id)) ? t : e.lastMessageId) ? i : e.id,
                      l = e.isMessageRequestTimestamp;
                  if (null != l) {
                      let e = A()(l).valueOf(),
                          i = p.default.fromTimestamp(e);
                      return p.default.compare(n, i) > 0 ? n : i;
                  }
                  return n;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: i,
        isFavorite: !1,
        isRequest: o.A.isMessageRequest(e.id) || c.A.isSpam(e.id),
        nudgeTimestamp: m.A.getNudgeTimestamp(e.id),
    };
}

function U() {
    v.clear(),
        Object.values(E.A.getMutablePrivateChannels()).forEach((e) => {
            v.set(e.id, O(e));
        });
}

function S() {
    let e = E.A.getMutablePrivateChannels();
    for (let i in e) v.set(i, O(e[i]));
}
let D =
    ((n = []),
    (l = []),
    (s = []),
    () => {
        let e = v.values("FAVORITE"),
            i = v.values("DEFAULT");
        return (
            (n !== e || l !== i) &&
                ((s = []),
                e.forEach((e) => {
                    let { channelId: i } = e;
                    return s.push(i);
                }),
                (n = e),
                i.forEach((e) => {
                    let { channelId: i } = e;
                    return s.push(i);
                }),
                (l = i)),
            s
        );
    });
class L extends (a = d.Ay.Store) {
    initialize() {
        this.waitFor(E.A, h.A, o.A, y.Ay, c.A, R.Ay, C.default, m.A), this.syncWith([R.Ay, o.A, m.A], U);
    }
    getPrivateChannelIds() {
        return D();
    }
    getSortedChannels() {
        return [v.values("FAVORITE"), v.values("DEFAULT")];
    }
    serializeForOverlay() {
        let e = {};
        return (
            v.values().forEach((i) => {
                let { channelId: t, lastMessageId: n } = i;
                e[t] = n;
            }),
            e
        );
    }
}
(u = "displayName") in L
    ? Object.defineProperty(L, u, {
          value: "PrivateChannelSortStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (L[u] = "PrivateChannelSortStore");
let T = new L(f.h, {
    CONNECTION_OPEN: U,
    CONNECTION_OPEN_SUPPLEMENTAL: U,
    OVERLAY_INITIALIZE: U,
    CACHE_LOADED: S,
    CACHE_LOADED_LAZY: S,
    CHANNEL_UPDATES: function (e) {
        let { channels: i } = e;
        i.forEach((e) => {
            ((0, N.Gw)(e.type) || v.has(e.id)) && v.set(e.id, O(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: i } = e;
        if (!(0, N.Gw)(i.type) || i.id === M.E) return !1;
        v.set(i.id, O(i));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: i } = e;
        return v.delete(i.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: i, message: t } = e;
        if (!v.has(i)) return !1;
        let n = E.A.getChannel(i);
        return null != n && v.set(i, O(n, t.id));
    },
    REPLY_NUDGE_SET: function (e) {
        let { channelId: i } = e;
        if (!v.has(i)) return !1;
        let t = E.A.getChannel(i);
        return null != t && v.set(i, O(t));
    },
    GUILD_CREATE: function (e) {
        let i = e.guild.id;
        return v.delete(i);
    },
    LOGOUT: function () {
        v.clear();
    },
});
