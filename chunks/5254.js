n.d(t, { Z: () => N }), n(388685);
var i,
    r = n(392711),
    l = n.n(r),
    s = n(442837),
    a = n(570140),
    o = n(598077),
    c = n(594174),
    u = n(388380),
    f = n(72937);
function d(e, t, n) {
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
let p = {},
    g = 0,
    O = !1,
    y = !1;
function h(e) {
    var t;
    let n = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: null == (t = l().first(e.reasons)) ? void 0 : t.name,
        user: new o.Z(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: n
    };
}
class m extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(c.default);
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
d(m, 'displayName', 'FriendSuggestionStore');
let N = new m(a.Z, {
    CONNECTION_OPEN: function (e) {
        (p = {}), (g = e.friendSuggestionCount) > 0 ? ((y = !0), !O && y && ((O = !0), (y = !1), u.Z.fetch())) : (0, f.Z)();
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        var t, n;
        let i = h(e.suggestion);
        if (null != p[i.key]) return !1;
        g++,
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
                            d(e, t, n[t]);
                        });
                }
                return e;
            })({}, p)),
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
            (p = t);
    },
    FRIEND_SUGGESTION_DELETE: function (e) {
        (g = Math.max(0, --g)), delete p[e.suggestedUserId];
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
        var t;
        (O = !1),
            (t = e.suggestions),
            (p = l()
                .chain(t)
                .map((e) => h(e))
                .keyBy((e) => e.key)
                .value()),
            (g = l().keys(p).length);
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        (O = !1), (p = {});
    }
});
