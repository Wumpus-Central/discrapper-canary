n.d(t, { Z: () => m }), n(388685);
var i,
    r = n(392711),
    l = n.n(r),
    s = n(442837),
    a = n(570140),
    o = n(598077),
    c = n(594174),
    u = n(388380),
    d = n(72937);
function p(e, t, n) {
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
let f = {},
    g = 0,
    h = !1,
    O = !1;
function y(e) {
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
class N extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(c.default);
    }
    getSuggestionCount() {
        return g;
    }
    getSuggestions() {
        return Object.entries(f).map((e) => {
            let [t, n] = e;
            return n;
        });
    }
    getSuggestion(e) {
        return f[e];
    }
}
p(N, 'displayName', 'FriendSuggestionStore');
let m = new N(a.Z, {
    CONNECTION_OPEN: function (e) {
        (f = {}), (g = e.friendSuggestionCount) > 0 ? ((O = !0), !h && O && ((h = !0), (O = !1), u.Z.fetch())) : (0, d.Z)();
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        var t, n;
        let i = y(e.suggestion);
        if (null != f[i.key]) return !1;
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
                            p(e, t, n[t]);
                        });
                }
                return e;
            })({}, f)),
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
            (f = t);
    },
    FRIEND_SUGGESTION_DELETE: function (e) {
        (g = Math.max(0, --g)), delete f[e.suggestedUserId];
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
        var t;
        (h = !1),
            (t = e.suggestions),
            (f = l()
                .chain(t)
                .map((e) => y(e))
                .keyBy((e) => e.key)
                .value()),
            (g = l().keys(f).length);
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        (h = !1), (f = {});
    }
});
