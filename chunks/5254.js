n.d(t, { Z: () => O }), n(388685);
var i,
    r = n(392711),
    l = n.n(r),
    a = n(442837),
    o = n(570140),
    s = n(598077),
    c = n(594174),
    u = n(388380),
    d = n(72937);
function g(e, t, n) {
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
    f = 0,
    N = !1,
    m = !1;
function h(e) {
    var t;
    let n = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: null == (t = l().first(e.reasons)) ? void 0 : t.name,
        user: new s.Z(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: n
    };
}
class y extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(c.default);
    }
    getSuggestionCount() {
        return f;
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
g(y, 'displayName', 'FriendSuggestionStore');
let O = new y(o.Z, {
    CONNECTION_OPEN: function (e) {
        (p = {}), (f = e.friendSuggestionCount) > 0 ? ((m = !0), !N && m && ((N = !0), (m = !1), u.Z.fetch())) : (0, d.Z)();
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        var t, n;
        let i = h(e.suggestion);
        if (null != p[i.key]) return !1;
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
                            g(e, t, n[t]);
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
        (f = Math.max(0, --f)), delete p[e.suggestedUserId];
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
        var t;
        (N = !1),
            (t = e.suggestions),
            (p = l()
                .chain(t)
                .map((e) => h(e))
                .keyBy((e) => e.key)
                .value()),
            (f = l().keys(p).length);
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        (N = !1), (p = {});
    }
});
