n.d(t, { Z: () => E }), n(47120);
var r,
    i = n(392711),
    l = n.n(i),
    o = n(442837),
    a = n(570140),
    s = n(598077),
    c = n(594174),
    u = n(388380),
    d = n(247879);
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
let h = {},
    g = 0,
    f = !1,
    m = !1;
function b(e) {
    var t;
    let n = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
    return {
        key: e.suggested_user.id,
        name: null === (t = l().first(e.reasons)) || void 0 === t ? void 0 : t.name,
        user: new s.Z(e.suggested_user),
        mutualFriendsCount: e.mutual_friends_count,
        contactNames: n
    };
}
class _ extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(c.default);
    }
    getSuggestionCount() {
        return g;
    }
    getSuggestions() {
        return Object.entries(h).map((e) => {
            let [t, n] = e;
            return n;
        });
    }
    getSuggestion(e) {
        return h[e];
    }
}
p(_, 'displayName', 'FriendSuggestionStore');
let E = new _(a.Z, {
    CONNECTION_OPEN: function (e) {
        (h = {}), (g = e.friendSuggestionCount) > 0 ? ((m = !0), f || !m || ((f = !0), (m = !1), u.Z.fetch())) : (0, d.Z)();
    },
    FRIEND_SUGGESTION_CREATE: function (e) {
        var t, n;
        let r = b(e.suggestion);
        if (null != h[r.key]) return !1;
        g++,
            (t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            p(e, t, n[t]);
                        });
                }
                return e;
            })({}, h)),
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
            (h = t);
    },
    FRIEND_SUGGESTION_DELETE: function (e) {
        (g = Math.max(0, --g)), delete h[e.suggestedUserId];
    },
    LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
        var t;
        (f = !1),
            (t = e.suggestions),
            (h = l()
                .chain(t)
                .map((e) => b(e))
                .keyBy((e) => e.key)
                .value()),
            (g = l().keys(h).length);
    },
    LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
        (f = !1), (h = {});
    }
});
