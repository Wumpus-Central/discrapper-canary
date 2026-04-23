n.d(t, { A: () => E });
var i = n(735438),
    r = n.n(i),
    s = n(311907),
    l = n(73153),
    a = n(427157),
    u = n(287809),
    o = n(38910),
    d = n(858885);
let c = {},
    h = 0,
    I = !1,
    g = !1;
function f(e) {
    let t = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: r().first(e.reasons)?.name,
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
let E = new A(l.h, {
    CONNECTION_OPEN: function (e) {
        (c = {}),
            (h = e.friendSuggestionCount) > 0 ? ((g = !0), !I && g && ((I = !0), (g = !1), o.A.fetch())) : (0, d.A)();
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        let t = f(e.suggestion);
        if (null != c[t.key]) return !1;
        h++, (c = { ...c, [t.key]: t });
    },
    FRIEND_SUGGESTION_DELETE: function (e) {
        (h = Math.max(0, --h)), delete c[e.suggestedUserId];
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
        var t;
        (I = !1),
            (t = e.suggestions),
            (c = r()
                .chain(t)
                .map((e) => f(e))
                .keyBy((e) => e.key)
                .value()),
            (h = r().keys(c).length);
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        (I = !1), (c = {});
    },
});
