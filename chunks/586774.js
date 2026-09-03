i.d(t, { A: () => _ });
var l = i(435558),
    a = i.n(l),
    n = i(17928),
    s = i(228366),
    r = i(889227),
    c = i(287809),
    d = i(38910);
let h = {},
    o = 0,
    u = !1,
    f = !1;
function p(e) {
    let t = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: a().first(e.reasons)?.name,
        user: new r.A(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: t,
    };
}
class S extends n.Ay.Store {
    static displayName = "FriendSuggestionStore";
    initialize() {
        this.waitFor(c.default);
    }
    getSuggestionCount() {
        return o;
    }
    getSuggestions() {
        return Object.entries(h).map((e) => {
            let [t, i] = e;
            return i;
        });
    }
    getSuggestion(e) {
        return h[e];
    }
}
let _ = new S(s.h, {
    CONNECTION_OPEN: function (e) {
        (h = {}),
            (o = e.friendSuggestionCount) > 0
                ? ((f = !0), !u && f && ((u = !0), (f = !1), d.A.fetch()))
                : (function () {
                      arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  })();
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        let t = p(e.suggestion);
        if (null != h[t.key]) return !1;
        o++, (h = { ...h, [t.key]: t });
    },
    FRIEND_SUGGESTION_DELETE: function (e) {
        (o = Math.max(0, --o)), delete h[e.suggestedUserId];
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
        var t;
        (u = !1),
            (t = e.suggestions),
            (h = a()
                .chain(t)
                .map((e) => p(e))
                .keyBy((e) => e.key)
                .value()),
            (o = a().keys(h).length);
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        (u = !1), (h = {});
    },
});
