i.d(t, { A: () => A });
var n = i(435558),
    r = i.n(n),
    a = i(855986),
    s = i(73153),
    l = i(619019),
    o = i(287809),
    _ = i(38910);
let u = {},
    d = 0,
    S = !1,
    c = !1;
function E(e) {
    let t = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: r().first(e.reasons)?.name,
        user: new l.A(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: t,
    };
}
class I extends a.Ay.Store {
    static displayName = "FriendSuggestionStore";
    initialize() {
        this.waitFor(o.default);
    }
    getSuggestionCount() {
        return d;
    }
    getSuggestions() {
        return Object.entries(u).map((e) => {
            let [t, i] = e;
            return i;
        });
    }
    getSuggestion(e) {
        return u[e];
    }
}
let A = new I(s.h, {
    CONNECTION_OPEN: function (e) {
        ((u = {}),
            (d = e.friendSuggestionCount) > 0
                ? ((c = !0), !S && c && ((S = !0), (c = !1), _.A.fetch()))
                : (function () {
                      arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  })());
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        let t = E(e.suggestion);
        if (null != u[t.key]) return !1;
        (d++, (u = { ...u, [t.key]: t }));
    },
    FRIEND_SUGGESTION_DELETE: function (e) {
        ((d = Math.max(0, --d)), delete u[e.suggestedUserId]);
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
        var t;
        ((S = !1),
            (t = e.suggestions),
            (u = r()
                .chain(t)
                .map((e) => E(e))
                .keyBy((e) => e.key)
                .value()),
            (d = r().keys(u).length));
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        ((S = !1), (u = {}));
    },
});
