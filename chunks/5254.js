n.d(t, { Z: () => O }), n(47120);
var i,
    r = n(392711),
    l = n.n(r),
    o = n(442837),
    s = n(570140),
    a = n(598077),
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
let g = {},
    f = 0,
    N = !1,
    h = !1;
function y(e) {
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
class m extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(c.default);
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
p(m, 'displayName', 'FriendSuggestionStore');
let O = new m(s.Z, {
    CONNECTION_OPEN: function (e) {
        (g = {}), (f = e.friendSuggestionCount) > 0 ? ((h = !0), !N && h && ((N = !0), (h = !1), u.Z.fetch())) : (0, d.Z)();
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        var t, n;
        let i = y(e.suggestion);
        if (null != g[i.key]) return !1;
        f++,
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
        (f = Math.max(0, --f)), delete g[e.suggestedUserId];
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
        var t;
        (N = !1),
            (t = e.suggestions),
            (g = l()
                .chain(t)
                .map((e) => y(e))
                .keyBy((e) => e.key)
                .value()),
            (f = l().keys(g).length);
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        (N = !1), (g = {});
    }
});
