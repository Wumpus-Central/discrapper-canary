n.d(t, { A: () => m }), n(896048), n(228524);
var r,
    i = n(311907),
    l = n(73153),
    s = n(591552),
    a = n(555337),
    c = n(539916);
function o(e, t, n) {
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
let d = [],
    u = !1,
    f = [];
function g() {
    let e = a.A.getGuildId();
    if (null == e) {
        (d = []), (f = []), (u = !1);
        return;
    }
    (d = [...s.A.getConnections(e)]), (f = []), (u = !1);
}
class b extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(s.A, a.A);
    }
    getEditedConnections() {
        return d;
    }
    getErrors() {
        return f;
    }
    isSubmitting() {
        return u;
    }
    hasChanges() {
        let e = a.A.getGuildId();
        if (null == e) return !1;
        let t = s.A.getConnections(e);
        return (
            d.length !== t.length ||
            d.some((e, n) => {
                let r = t[n];
                return (
                    null == r ||
                    e.connection_type !== r.connection_type ||
                    e.application_id !== r.application_id ||
                    e.provider_id !== r.provider_id ||
                    e.description !== r.description
                );
            })
        );
    }
    showNotice() {
        return this.hasChanges();
    }
    hasValidationErrors() {
        return f.length > 0;
    }
}
o(b, "displayName", "GuildSettingsOnboardingConnectionsStore");
let m = new b(l.h, {
    GUILD_SETTINGS_INIT: g,
    GUILD_SETTINGS_SET_SECTION: g,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: g,
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_ADD: function (e) {
        let { connection: t } = e;
        if (d.length >= c.pA) {
            f = ["Maximum ".concat(c.pA, " connections allowed")];
            return;
        }
        (d = [...d, t]), (f = (0, c.n4)(d));
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REMOVE: function (e) {
        let { index: t } = e;
        (d = d.filter((e, n) => n !== t)), (f = (0, c.n4)(d));
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_UPDATE: function (e) {
        let { index: t, updates: n } = e;
        (d = d.map((e, r) =>
            r === t
                ? (function (e) {
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
                                  o(e, t, n[t]);
                              });
                      }
                      return e;
                  })({}, e, n)
                : e,
        )),
            (f = (0, c.n4)(d));
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REORDER: function (e) {
        let { connections: t } = e;
        (d = [...t]), (f = (0, c.n4)(d));
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_RESET: function () {
        let e = a.A.getGuildId();
        if (null == e) {
            (d = []), (f = []);
            return;
        }
        (d = [...s.A.getConnections(e)]), (f = []);
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SUBMIT: function () {
        (u = !0), (f = (0, c.n4)(d));
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS: function (e) {
        let { connections: t } = e;
        (u = !1), (f = []), (d = [...t]);
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_FAILED: function (e) {
        let { errors: t } = e;
        (u = !1), (f = t);
    },
});
