n.d(t, { Z: () => I }), n(388685);
var r,
    i = n(392711),
    l = n.n(i),
    s = n(442837),
    o = n(570140),
    a = n(598077),
    u = n(594174),
    c = n(388380),
    d = n(72937);
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
    O = !1;
function m(e) {
    var t;
    let n = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: null == (t = l().first(e.reasons)) ? void 0 : t.name,
        user: new a.Z(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: n,
    };
}
class E extends (r = s.ZP.Store) {
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
let I = new E(o.Z, {
    CONNECTION_OPEN: function (e) {
        (g = {}),
            (f = e.friendSuggestionCount) > 0 ? ((O = !0), !h && O && ((h = !0), (O = !1), c.Z.fetch())) : (0, d.Z)();
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        var t, n;
        let r = m(e.suggestion);
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
                .map((e) => m(e))
                .keyBy((e) => e.key)
                .value()),
            (f = l().keys(g).length);
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        (h = !1), (g = {});
    },
});
