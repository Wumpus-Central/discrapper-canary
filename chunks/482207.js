n.d(t, { Z: () => p });
var r,
    a,
    l,
    i = n(442837),
    o = n(570140);
let s = {
        isFetching: !1,
        lastFetchedAt: null,
        error: null
    },
    c = [],
    u = s;
class d extends (l = i.ZP.Store) {
    get isFetching() {
        return u.isFetching;
    }
    get fetchError() {
        return u.error;
    }
    get shouldFetch() {
        var e;
        return Date.now() - (null !== (e = u.lastFetchedAt) && void 0 !== e ? e : 0) > 300000 && !u.isFetching;
    }
    getAvatars() {
        return c;
    }
}
(a = 'RecentAvatarsStore'),
    (r = 'displayName') in d
        ? Object.defineProperty(d, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[r] = a);
let p = new d(o.Z, {
    RECENT_AVATARS_FETCH_START: function () {
        (u.isFetching = !0), (u.error = null);
    },
    RECENT_AVATARS_FETCH_SUCCESS: function (e) {
        let { avatars: t } = e;
        (c = t), (u.isFetching = !1), (u.lastFetchedAt = Date.now());
    },
    RECENT_AVATARS_FETCH_FAILURE: function (e) {
        let { error: t } = e;
        (u.isFetching = !1), (u.error = t);
    },
    RECENT_AVATARS_UPDATE: function () {
        u.lastFetchedAt = 0;
    },
    RECENT_AVATAR_DELETE: function (e) {
        let { avatarId: t } = e;
        c = c.filter((e) => e.id !== t);
    },
    LOGOUT: function () {
        (c = []), (u = s);
    }
});
