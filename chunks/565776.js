n.d(t, { A: () => C });
var i = n(435558),
    r = n.n(i),
    l = n(855986),
    a = n(73153),
    s = n(619019),
    o = n(287809),
    u = n(38910);
let d = {},
    c = 0,
    S = !1,
    E = !1;
function _(e) {
    let t = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: r().first(e.reasons)?.name,
        user: new s.A(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: t,
    };
}
class h extends l.Ay.Store {
    static displayName = "FriendSuggestionStore";
    initialize() {
        this.waitFor(o.default);
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
let C = new h(a.h, {
    CONNECTION_OPEN: function (e) {
        ((d = {}),
            (c = e.friendSuggestionCount) > 0
                ? ((E = !0), !S && E && ((S = !0), (E = !1), u.A.fetch()))
                : (function () {
                      arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  })());
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        let t = _(e.suggestion);
        if (null != d[t.key]) return !1;
        (c++, (d = { ...d, [t.key]: t }));
    },
    FRIEND_SUGGESTION_DELETE: function (e) {
        ((c = Math.max(0, --c)), delete d[e.suggestedUserId]);
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
        var t;
        ((S = !1),
            (t = e.suggestions),
            (d = r()
                .chain(t)
                .map((e) => _(e))
                .keyBy((e) => e.key)
                .value()),
            (c = r().keys(d).length));
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        ((S = !1), (d = {}));
    },
});
