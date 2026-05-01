n.d(t, { A: () => E });
var i = n(735438),
    l = n.n(i),
    s = n(17928),
    r = n(228366),
    a = n(889227),
    u = n(287809),
    o = n(38910);
let d = {},
    c = 0,
    h = !1,
    A = !1;
function f(e) {
    let t = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: l().first(e.reasons)?.name,
        user: new a.A(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: t,
    };
}
class g extends s.Ay.Store {
    static displayName = "FriendSuggestionStore";
    initialize() {
        this.waitFor(u.default);
    }
    getSuggestionCount() {
        return c;
    }
    getSuggestions() {
        return Object.entries(d).map((e) => {
            let [t, n] = e;
            return n;
        });
    }
    getSuggestion(e) {
        return d[e];
    }
}
let E = new g(r.h, {
    CONNECTION_OPEN: function (e) {
        (d = {}),
            (c = e.friendSuggestionCount) > 0
                ? ((A = !0), !h && A && ((h = !0), (A = !1), o.A.fetch()))
                : (function () {
                      arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  })();
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        let t = f(e.suggestion);
        if (null != d[t.key]) return !1;
        c++, (d = { ...d, [t.key]: t });
    },
    FRIEND_SUGGESTION_DELETE: function (e) {
        (c = Math.max(0, --c)), delete d[e.suggestedUserId];
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
        var t;
        (h = !1),
            (t = e.suggestions),
            (d = l()
                .chain(t)
                .map((e) => f(e))
                .keyBy((e) => e.key)
                .value()),
            (c = l().keys(d).length);
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        (h = !1), (d = {});
    },
});
