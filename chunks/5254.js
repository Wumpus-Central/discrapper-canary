n(47120);
var i,
    r,
    l,
    a,
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    d = n(570140),
    u = n(598077),
    h = n(594174),
    m = n(388380),
    p = n(72937);
let g = {},
    f = 0,
    _ = !1,
    E = !1;
function I(e) {
    var t;
    let n = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: null === (t = o().first(e.reasons)) || void 0 === t ? void 0 : t.name,
        user: new u.Z(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: n
    };
}
class C extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(h.default);
    }
    getSuggestionCount() {
        return f;
    }
    getSuggestions() {
        return Object.entries(g).map((e) => {
            let [t, n] = e;
            return n;
        });
    }
    getSuggestion(e) {
        return g[e];
    }
}
(a = 'FriendSuggestionStore'),
    (l = 'displayName') in (r = C)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    (t.Z = new C(d.Z, {
        CONNECTION_OPEN: function (e) {
            (g = {}), (f = e.friendSuggestionCount) > 0 ? ((E = !0), _ || !E || ((_ = !0), (E = !1), m.Z.fetch())) : (0, p.Z)();
        },
        FRIEND_SUGGESTION_CREATE: function (e) {
            let t = I(e.suggestion);
            if (null != g[t.key]) return !1;
            f++,
                (g = {
                    ...g,
                    [t.key]: t
                });
        },
        FRIEND_SUGGESTION_DELETE: function (e) {
            (f = Math.max(0, --f)), delete g[e.suggestedUserId];
        },
        LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
            var t;
            (_ = !1),
                (t = e.suggestions),
                (g = o()
                    .chain(t)
                    .map((e) => I(e))
                    .keyBy((e) => e.key)
                    .value()),
                (f = o().keys(g).length);
        },
        LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
            (_ = !1), (g = {});
        }
    }));
