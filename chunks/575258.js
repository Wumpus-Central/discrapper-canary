n.d(t, { Z: () => f }), n(953529);
var r,
    i = n(442837),
    l = n(570140),
    s = n(430824),
    a = n(981631);
function o(e, t, n) {
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
let c = {
        description: '',
        channels: [],
        enabled: !1
    },
    d = c,
    u = !1,
    m = !1,
    g = c;
function p(e) {
    let { welcomeScreen: t, guildId: n } = e,
        r = s.Z.getGuild(n);
    if (null != t) {
        var i, l;
        g = d = {
            description: null != (i = t.description) ? i : '',
            channels: null != (l = t.welcome_channels) ? l : [],
            enabled: null == r ? void 0 : r.hasFeature(a.oNc.WELCOME_SCREEN_ENABLED)
        };
    } else g = d = c;
    m = !1;
}
class h extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z);
    }
    get() {
        return g;
    }
    showNotice() {
        return m;
    }
    getSettingsProps() {
        return {
            submitting: u,
            hasErrors: m,
            welcomeSettings: g,
            originalWelcomeSettings: d
        };
    }
}
o(h, 'displayName', 'WelcomeScreenSettingsStore');
let f = new h(l.Z, {
    WELCOME_SCREEN_FETCH_SUCCESS: p,
    WELCOME_SCREEN_UPDATE: p,
    WELCOME_SCREEN_SETTINGS_RESET: function () {
        (g = d), (m = !1);
    },
    WELCOME_SCREEN_SETTINGS_CLEAR: function () {
        (g = c), (d = c);
    },
    WELCOME_SCREEN_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        g = (function (e) {
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
                        o(e, t, n[t]);
                    });
            }
            return e;
        })({}, g, t);
    },
    WELCOME_SCREEN_SUBMIT: function () {
        u = !0;
    },
    WELCOME_SCREEN_SUBMIT_SUCCESS: function (e) {
        p(e), (u = !1);
    },
    WELCOME_SCREEN_SUBMIT_FAILURE: function () {
        (m = !0), (u = !1);
    }
});
