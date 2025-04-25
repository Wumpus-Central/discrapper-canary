n.d(t, { Z: () => m }), n(388685);
var i,
    r = n(392711),
    l = n.n(r),
    s = n(442837),
    o = n(570140),
    a = n(598077),
    u = n(594174),
    c = n(388380),
    d = n(72937);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = {},
    p = 0,
    O = !1,
    y = !1;
function h(e) {
    var t;
    let n = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: null == (t = l().first(e.reasons)) ? void 0 : t.name,
        user: new a.Z(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: n
    };
}
class v extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(u.default);
    }
    getSuggestionCount() {
        return p;
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
f(v, 'displayName', 'FriendSuggestionStore');
let m = new v(o.Z, {
    CONNECTION_OPEN: function (e) {
        (g = {}), (p = e.friendSuggestionCount) > 0 ? ((y = !0), !O && y && ((O = !0), (y = !1), c.Z.fetch())) : (0, d.Z)();
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        var t, n;
        let i = h(e.suggestion);
        if (null != g[i.key]) return !1;
        p++,
            (t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            f(e, t, n[t]);
                        });
                }
                return e;
            })({}, g)),
            (n = n = { [i.key]: i }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            (g = t);
    },
    FRIEND_SUGGESTION_DELETE: function (e) {
        (p = Math.max(0, --p)), delete g[e.suggestedUserId];
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
        var t;
        (O = !1),
            (t = e.suggestions),
            (g = l()
                .chain(t)
                .map((e) => h(e))
                .keyBy((e) => e.key)
                .value()),
            (p = l().keys(g).length);
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        (O = !1), (g = {});
    }
});
