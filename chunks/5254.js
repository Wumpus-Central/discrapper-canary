n.d(t, { Z: () => C }), n(47120);
var i,
    l,
    r,
    a = n(392711),
    s = n.n(a),
    o = n(442837),
    d = n(570140),
    c = n(598077),
    u = n(594174),
    h = n(388380),
    m = n(72937);
let p = {},
    g = 0,
    _ = !1,
    f = !1;
function E(e) {
    var t;
    let n = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: null === (t = s().first(e.reasons)) || void 0 === t ? void 0 : t.name,
        user: new c.Z(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: n
    };
}
class I extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(u.default);
    }
    getSuggestionCount() {
        return g;
    }
    getSuggestions() {
        return Object.entries(p).map((e) => {
            let [t, n] = e;
            return n;
        });
    }
    getSuggestion(e) {
        return p[e];
    }
}
(r = 'FriendSuggestionStore'),
    (l = 'displayName') in I
        ? Object.defineProperty(I, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (I[l] = r);
let C = new I(d.Z, {
    CONNECTION_OPEN: function (e) {
        (p = {}), (g = e.friendSuggestionCount) > 0 ? ((f = !0), _ || !f || ((_ = !0), (f = !1), h.Z.fetch())) : (0, m.Z)();
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        let t = E(e.suggestion);
        if (null != p[t.key]) return !1;
        g++,
            (p = {
                ...p,
                [t.key]: t
            });
    },
    FRIEND_SUGGESTION_DELETE: function (e) {
        (g = Math.max(0, --g)), delete p[e.suggestedUserId];
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
        var t;
        (_ = !1),
            (t = e.suggestions),
            (p = s()
                .chain(t)
                .map((e) => E(e))
                .keyBy((e) => e.key)
                .value()),
            (g = s().keys(p).length);
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        (_ = !1), (p = {});
    }
});
