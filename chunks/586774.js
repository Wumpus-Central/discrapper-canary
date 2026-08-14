"use strict";
n.d(t, { A: () => I });
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(889227),
    o = n(287809),
    d = n(38910);
let c = {},
    u = 0,
    _ = !1,
    E = !1;
function A(e) {
    let t = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: r().first(e.reasons)?.name,
        user: new l.A(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: t,
    };
}
class h extends a.Ay.Store {
    static displayName = "FriendSuggestionStore";
    initialize() {
        this.waitFor(o.default);
    }
    getSuggestionCount() {
        return u;
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
let I = new h(s.h, {
    CONNECTION_OPEN: function (e) {
        (c = {}),
            (u = e.friendSuggestionCount) > 0
                ? ((E = !0), !_ && E && ((_ = !0), (E = !1), d.A.fetch()))
                : (function () {
                      arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  })();
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        let t = A(e.suggestion);
        if (null != c[t.key]) return !1;
        u++, (c = { ...c, [t.key]: t });
    },
    FRIEND_SUGGESTION_DELETE: function (e) {
        (u = Math.max(0, --u)), delete c[e.suggestedUserId];
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
        var t;
        (_ = !1),
            (t = e.suggestions),
            (c = r()
                .chain(t)
                .map((e) => A(e))
                .keyBy((e) => e.key)
                .value()),
            (u = r().keys(c).length);
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        (_ = !1), (c = {});
    },
});
