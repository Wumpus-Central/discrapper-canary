i.d(t, { A: () => p });
var l = i(435558),
    n = i.n(l),
    a = i(17928),
    s = i(73153),
    r = i(889227),
    o = i(287809),
    c = i(38910);
let d = {},
    h = 0,
    u = !1,
    _ = !1;
function S(e) {
    let t = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: n().first(e.reasons)?.name,
        user: new r.A(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: t,
    };
}
class f extends a.Ay.Store {
    static displayName = "FriendSuggestionStore";
    initialize() {
        this.waitFor(o.default);
    }
    getSuggestionCount() {
        return h;
    }
    getSuggestions() {
        return Object.entries(d).map((e) => {
            let [t, i] = e;
            return i;
        });
    }
    getSuggestion(e) {
        return d[e];
    }
}
let p = new f(s.h, {
    CONNECTION_OPEN: function (e) {
        ((d = {}),
            (h = e.friendSuggestionCount) > 0
                ? ((_ = !0), !u && _ && ((u = !0), (_ = !1), c.A.fetch()))
                : (function () {
                      arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  })());
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        let t = S(e.suggestion);
        if (null != d[t.key]) return !1;
        (h++, (d = { ...d, [t.key]: t }));
    },
    FRIEND_SUGGESTION_DELETE: function (e) {
        ((h = Math.max(0, --h)), delete d[e.suggestedUserId]);
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
        var t;
        ((u = !1),
            (t = e.suggestions),
            (d = n()
                .chain(t)
                .map((e) => S(e))
                .keyBy((e) => e.key)
                .value()),
            (h = n().keys(d).length));
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        ((u = !1), (d = {}));
    },
});
