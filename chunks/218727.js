a.d(t, { A: () => o });
var n = a(311907),
    l = a(73153);
let r = () => ({ isFetching: !1, lastFetchedAt: null, error: null }),
    s = [],
    i = r();
class c extends n.Ay.Store {
    static displayName = "RecentAvatarsStore";
    get isFetching() {
        return i.isFetching;
    }
    get fetchError() {
        return i.error;
    }
    get shouldFetch() {
        return Date.now() - (i.lastFetchedAt ?? 0) > 3e5 && !i.isFetching;
    }
    getAvatars() {
        return s;
    }
}
let o = new c(l.h, {
    RECENT_AVATARS_FETCH_START: function () {
        (i.isFetching = !0), (i.error = null);
    },
    RECENT_AVATARS_FETCH_SUCCESS: function (e) {
        let { avatars: t } = e;
        (s = t), (i.isFetching = !1), (i.lastFetchedAt = Date.now());
    },
    RECENT_AVATARS_FETCH_FAILURE: function (e) {
        let { error: t } = e;
        (i.isFetching = !1), (i.error = t);
    },
    RECENT_AVATARS_UPDATE: function () {
        i.lastFetchedAt = 0;
    },
    RECENT_AVATAR_DELETE: function (e) {
        let { avatarId: t } = e;
        s = s.filter((e) => e.id !== t);
    },
    LOGOUT: function () {
        (s = []), (i = r());
    },
});
