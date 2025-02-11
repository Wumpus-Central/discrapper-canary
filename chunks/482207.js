n.d(t, { Z: () => m });
var l,
    a,
    i,
    s = n(442837),
    r = n(570140);
let o = {
        isFetching: !1,
        lastFetchedAt: null,
        error: null
    },
    c = [],
    d = o;
class u extends (i = s.ZP.Store) {
    get isFetching() {
        return d.isFetching;
    }
    get fetchError() {
        return d.error;
    }
    get shouldFetch() {
        var e;
        return Date.now() - (null !== (e = d.lastFetchedAt) && void 0 !== e ? e : 0) > 300000 && !d.isFetching;
    }
    getAvatars() {
        return c;
    }
}
(a = 'RecentAvatarsStore'),
    (l = 'displayName') in u
        ? Object.defineProperty(u, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[l] = a);
let m = new u(r.Z, {
    RECENT_AVATARS_FETCH_START: function () {
        (d.isFetching = !0), (d.error = null);
    },
    RECENT_AVATARS_FETCH_SUCCESS: function (e) {
        let { avatars: t } = e;
        (c = t), (d.isFetching = !1), (d.lastFetchedAt = Date.now());
    },
    RECENT_AVATARS_FETCH_FAILURE: function (e) {
        let { error: t } = e;
        (d.isFetching = !1), (d.error = t);
    },
    LOGOUT: function () {
        (c = []), (d = o);
    }
});
