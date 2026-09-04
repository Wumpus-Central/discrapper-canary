i.d(t, { A: () => _ });
var l = i(435558),
    a = i.n(l),
    n = i(17928),
    s = i(228366),
    r = i(889227),
    c = i(287809),
    h = i(38910);
let d = {},
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
        return Object.entries(d).map((e) => {
            let [t, i] = e;
            return i;
        });
    }
    getSuggestion(e) {
        return d[e];
    }
}
let _ = new S(s.h, {
    CONNECTION_OPEN: function (e) {
        (d = {}),
            (o = e.friendSuggestionCount) > 0
                ? ((f = !0), !u && f && ((u = !0), (f = !1), h.A.fetch()))
                : (function () {
                      arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  })();
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        let t = p(e.suggestion);
        if (null != d[t.key]) return !1;
        o++, (d = { ...d, [t.key]: t });
    },
    FRIEND_SUGGESTION_DELETE: function (e) {
        (o = Math.max(0, --o)), delete d[e.suggestedUserId];
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
        var t;
        (u = !1),
            (t = e.suggestions),
            (d = a()
                .chain(t)
                .map((e) => p(e))
                .keyBy((e) => e.key)
                .value()),
            (o = a().keys(d).length);
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        (u = !1), (d = {});
    },
});
