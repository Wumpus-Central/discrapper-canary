"use strict";
n.d(t, { A: () => E });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(889227),
    l = n(287809),
    u = n(38910);
let c = {},
    d = 0,
    _ = !1,
    f = !1;
function h(e) {
    let t = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: r().first(e.reasons)?.name,
        user: new o.A(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: t,
    };
}
class p extends s.Ay.Store {
    static displayName = "FriendSuggestionStore";
    initialize() {
        this.waitFor(l.default);
    }
    getSuggestionCount() {
        return d;
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
let E = new p(a.h, {
    CONNECTION_OPEN: function (e) {
        (c = {}),
            (d = e.friendSuggestionCount) > 0
                ? ((f = !0), !_ && f && ((_ = !0), (f = !1), u.A.fetch()))
                : (function () {
                      arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  })();
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        let t = h(e.suggestion);
        if (null != c[t.key]) return !1;
        d++, (c = { ...c, [t.key]: t });
    },
    FRIEND_SUGGESTION_DELETE: function (e) {
        (d = Math.max(0, --d)), delete c[e.suggestedUserId];
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
        var t;
        (_ = !1),
            (t = e.suggestions),
            (c = r()
                .chain(t)
                .map((e) => h(e))
                .keyBy((e) => e.key)
                .value()),
            (d = r().keys(c).length);
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        (_ = !1), (c = {});
    },
});
