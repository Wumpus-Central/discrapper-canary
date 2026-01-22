n.d(t, { A: () => A }), n(896048);
var r,
    i = n(735438),
    l = n.n(i),
    s = n(311907),
    o = n(73153),
    a = n(427157),
    u = n(287809),
    c = n(38910),
    d = n(858885);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let g = {},
    f = 0,
    h = !1,
    m = !1;
function O(e) {
    var t;
    let n = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: null == (t = l().first(e.reasons)) ? void 0 : t.name,
        user: new a.A(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: n,
    };
}
class E extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(u.default);
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
p(E, "displayName", "FriendSuggestionStore");
let A = new E(o.h, {
    CONNECTION_OPEN: function (e) {
        (g = {}),
            (f = e.friendSuggestionCount) > 0 ? ((m = !0), !h && m && ((h = !0), (m = !1), c.A.fetch())) : (0, d.A)();
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        var t, n;
        let r = O(e.suggestion);
        if (null != g[r.key]) return !1;
        f++,
            (t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            p(e, t, n[t]);
                        });
                }
                return e;
            })({}, g)),
            (n = n = { [r.key]: r }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            (g = t);
    },
    FRIEND_SUGGESTION_DELETE: function (e) {
        (f = Math.max(0, --f)), delete g[e.suggestedUserId];
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
        var t;
        (h = !1),
            (t = e.suggestions),
            (g = l()
                .chain(t)
                .map((e) => O(e))
                .keyBy((e) => e.key)
                .value()),
            (f = l().keys(g).length);
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        (h = !1), (g = {});
    },
});
