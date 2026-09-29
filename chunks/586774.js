l.d(t, { A: () => C });
var i = l(435558),
    a = l.n(i),
    n = l(17928),
    s = l(228366),
    r = l(889227),
    c = l(287809),
    h = l(38910);
let d = {},
    o = 0,
    _ = !1,
    u = !1;
function S(e) {
    let t = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: a().first(e.reasons)?.name,
        user: new r.A(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: t,
    };
}
class p extends n.Ay.Store {
    static displayName = "FriendSuggestionStore";
    initialize() {
        this.waitFor(c.default);
    }
    getSuggestionCount() {
        return o;
    }
    getSuggestions() {
        return Object.entries(d).map((e) => {
            let [t, l] = e;
            return l;
        });
    }
    getSuggestion(e) {
        return d[e];
    }
}
let C = new p(s.h, {
    CONNECTION_OPEN: function (e) {
        ((d = {}),
            (o = e.friendSuggestionCount) > 0
                ? ((u = !0), !_ && u && ((_ = !0), (u = !1), h.A.fetch()))
                : (function () {
                      arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  })());
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        let t = S(e.suggestion);
        if (null != d[t.key]) return !1;
        (o++, (d = { ...d, [t.key]: t }));
    },
    FRIEND_SUGGESTION_DELETE: function (e) {
        ((o = Math.max(0, --o)), delete d[e.suggestedUserId]);
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
        var t;
        ((_ = !1),
            (t = e.suggestions),
            (d = a()
                .chain(t)
                .map((e) => S(e))
                .keyBy((e) => e.key)
                .value()),
            (o = a().keys(d).length));
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        ((_ = !1), (d = {}));
    },
});
