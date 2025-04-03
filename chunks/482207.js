n.d(t, { Z: () => f });
var r,
    i,
    o,
    a = n(442837),
    l = n(570140);
let c = () => ({
        isFetching: !1,
        lastFetchedAt: null,
        error: null
    }),
    d = [],
    s = c();
class _ extends (o = a.ZP.Store) {
    get isFetching() {
        return s.isFetching;
    }
    get fetchError() {
        return s.error;
    }
    get shouldFetch() {
        var e;
        return Date.now() - (null != (e = s.lastFetchedAt) ? e : 0) > 300000 && !s.isFetching;
    }
    getAvatars() {
        return d;
    }
}
(i = 'RecentAvatarsStore'),
    (r = 'displayName') in _
        ? Object.defineProperty(_, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (_[r] = i);
let f = new _(l.Z, {
    RECENT_AVATARS_FETCH_START: function () {
        (s.isFetching = !0), (s.error = null);
    },
    RECENT_AVATARS_FETCH_SUCCESS: function (e) {
        let { avatars: t } = e;
        (d = t), (s.isFetching = !1), (s.lastFetchedAt = Date.now());
    },
    RECENT_AVATARS_FETCH_FAILURE: function (e) {
        let { error: t } = e;
        (s.isFetching = !1), (s.error = t);
    },
    RECENT_AVATARS_UPDATE: function () {
        s.lastFetchedAt = 0;
    },
    RECENT_AVATAR_DELETE: function (e) {
        let { avatarId: t } = e;
        d = d.filter((e) => e.id !== t);
    },
    LOGOUT: function () {
        (d = []), (s = c());
    }
});
