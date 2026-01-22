r.d(t, { A: () => f });
var n,
    l,
    a = r(311907),
    i = r(73153);
let s = () => ({
        isFetching: !1,
        lastFetchedAt: null,
        error: null,
    }),
    o = [],
    c = s();
class u extends (l = a.Ay.Store) {
    get isFetching() {
        return c.isFetching;
    }
    get fetchError() {
        return c.error;
    }
    get shouldFetch() {
        var e;
        return Date.now() - (null != (e = c.lastFetchedAt) ? e : 0) > 300000 && !c.isFetching;
    }
    getAvatars() {
        return o;
    }
}
(n = "displayName") in u
    ? Object.defineProperty(u, n, {
          value: "RecentAvatarsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (u[n] = "RecentAvatarsStore");
let f = new u(i.h, {
    RECENT_AVATARS_FETCH_START: function () {
        (c.isFetching = !0), (c.error = null);
    },
    RECENT_AVATARS_FETCH_SUCCESS: function (e) {
        let { avatars: t } = e;
        (o = t), (c.isFetching = !1), (c.lastFetchedAt = Date.now());
    },
    RECENT_AVATARS_FETCH_FAILURE: function (e) {
        let { error: t } = e;
        (c.isFetching = !1), (c.error = t);
    },
    RECENT_AVATARS_UPDATE: function () {
        c.lastFetchedAt = 0;
    },
    RECENT_AVATAR_DELETE: function (e) {
        let { avatarId: t } = e;
        o = o.filter((e) => e.id !== t);
    },
    LOGOUT: function () {
        (o = []), (c = s());
    },
});
