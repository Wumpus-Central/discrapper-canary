l.d(t, { A: () => _ });
var n = l(435558),
    i = l.n(n),
    a = l(17928),
    r = l(228366),
    s = l(889227),
    o = l(287809),
    c = l(38910);
let u = {},
    d = 0,
    h = !1,
    f = !1;
function p(e) {
    let t = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: i().first(e.reasons)?.name,
        user: new s.A(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: t,
    };
}
class S extends a.Ay.Store {
    static displayName = "FriendSuggestionStore";
    initialize() {
        this.waitFor(o.default);
    }
    getSuggestionCount() {
        return d;
    }
    getSuggestions() {
        return Object.entries(u).map((e) => {
            let [t, l] = e;
            return l;
        });
    }
    getSuggestion(e) {
        return u[e];
    }
}
let _ = new S(r.h, {
    CONNECTION_OPEN: function (e) {
        (u = {}),
            (d = e.friendSuggestionCount) > 0
                ? ((f = !0), !h && f && ((h = !0), (f = !1), c.A.fetch()))
                : (function () {
                      arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  })();
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        let t = p(e.suggestion);
        if (null != u[t.key]) return !1;
        d++, (u = { ...u, [t.key]: t });
    },
    FRIEND_SUGGESTION_DELETE: function (e) {
        (d = Math.max(0, --d)), delete u[e.suggestedUserId];
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
        var t;
        (h = !1),
            (t = e.suggestions),
            (u = i()
                .chain(t)
                .map((e) => p(e))
                .keyBy((e) => e.key)
                .value()),
            (d = i().keys(u).length);
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        (h = !1), (u = {});
    },
});
