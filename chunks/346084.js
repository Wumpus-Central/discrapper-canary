n.d(t, { A: () => f });
var l = n(735438),
    i = n.n(l),
    s = n(311907),
    r = n(73153),
    a = n(427157),
    u = n(287809),
    o = n(38910),
    d = n(858885);
let c = {},
    h = 0,
    g = !1,
    I = !1;
function E(e) {
    let t = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: i().first(e.reasons)?.name,
        user: new a.A(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: t,
    };
}
class A extends s.Ay.Store {
    static displayName = "FriendSuggestionStore";
    initialize() {
        this.waitFor(u.default);
    }
    getSuggestionCount() {
        return h;
    }
    getSuggestions() {
        return Object.entries(c).map((e) => {
            let [t, n] = e;
            return n;
        });
    }
    getSuggestion(e) {
        return c[e];
    }
}
let f = new A(r.h, {
    CONNECTION_OPEN: function (e) {
        (c = {}),
            (h = e.friendSuggestionCount) > 0 ? ((I = !0), !g && I && ((g = !0), (I = !1), o.A.fetch())) : (0, d.A)();
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        let t = E(e.suggestion);
        if (null != c[t.key]) return !1;
        h++, (c = { ...c, [t.key]: t });
    },
    FRIEND_SUGGESTION_DELETE: function (e) {
        (h = Math.max(0, --h)), delete c[e.suggestedUserId];
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
        var t;
        (g = !1),
            (t = e.suggestions),
            (c = i()
                .chain(t)
                .map((e) => E(e))
                .keyBy((e) => e.key)
                .value()),
            (h = i().keys(c).length);
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        (g = !1), (c = {});
    },
});
