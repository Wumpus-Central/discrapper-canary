n.d(t, { Z: () => p }), n(953529);
var r,
    i = n(442837),
    l = n(570140),
    a = n(430824),
    s = n(981631);
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
let c = {
        description: "",
        channels: [],
        enabled: !1,
    },
    d = c,
    u = !1,
    g = !1,
    f = c;
function m(e) {
    let { welcomeScreen: t, guildId: n } = e,
        r = a.Z.getGuild(n);
    if (null != t) {
        var i, l;
        f = d = {
            description: null != (i = t.description) ? i : "",
            channels: null != (l = t.welcome_channels) ? l : [],
            enabled: null == r ? void 0 : r.features.has(s.GuildFeatures.WELCOME_SCREEN_ENABLED),
        };
    } else f = d = c;
    g = !1;
}
class b extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(a.Z);
    }
    get() {
        return f;
    }
    showNotice() {
        return g;
    }
    getSettingsProps() {
        return {
            submitting: u,
            hasErrors: g,
            welcomeSettings: f,
            originalWelcomeSettings: d,
        };
    }
}
o(b, "displayName", "WelcomeScreenSettingsStore");
let p = new b(l.Z, {
    WELCOME_SCREEN_FETCH_SUCCESS: m,
    WELCOME_SCREEN_UPDATE: m,
    WELCOME_SCREEN_SETTINGS_RESET: function () {
        (f = d), (g = !1);
    },
    WELCOME_SCREEN_SETTINGS_CLEAR: function () {
        (f = c), (d = c);
    },
    WELCOME_SCREEN_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        f = (function (e) {
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
        })({}, f, t);
    },
    WELCOME_SCREEN_SUBMIT: function () {
        u = !0;
    },
    WELCOME_SCREEN_SUBMIT_SUCCESS: function (e) {
        m(e), (u = !1);
    },
    WELCOME_SCREEN_SUBMIT_FAILURE: function () {
        (g = !0), (u = !1);
    },
});
