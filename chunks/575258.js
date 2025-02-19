n.d(t, { Z: () => f }), n(266796);
var r,
    i = n(442837),
    s = n(570140),
    a = n(430824),
    l = n(981631);
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
    p = c;
function g(e) {
    let { welcomeScreen: t, guildId: n } = e,
        r = a.Z.getGuild(n);
    if (null != t) {
        var i, s;
        p = d = {
            description: null !== (i = t.description) && void 0 !== i ? i : '',
            channels: null !== (s = t.welcome_channels) && void 0 !== s ? s : [],
            enabled: null == r ? void 0 : r.hasFeature(l.oNc.WELCOME_SCREEN_ENABLED)
        };
    } else p = d = c;
    m = !1;
}
class h extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(a.Z);
    }
    get() {
        return p;
    }
    showNotice() {
        return m;
    }
    getSettingsProps() {
        return {
            submitting: u,
            hasErrors: m,
            welcomeSettings: p,
            originalWelcomeSettings: d
        };
    }
}
o(h, 'displayName', 'WelcomeScreenSettingsStore');
let f = new h(s.Z, {
    WELCOME_SCREEN_FETCH_SUCCESS: g,
    WELCOME_SCREEN_UPDATE: g,
    WELCOME_SCREEN_SETTINGS_RESET: function () {
        (p = d), (m = !1);
    },
    WELCOME_SCREEN_SETTINGS_CLEAR: function () {
        (p = c), (d = c);
    },
    WELCOME_SCREEN_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        p = (function (e) {
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
        })({}, p, t);
    },
    WELCOME_SCREEN_SUBMIT: function () {
        u = !0;
    },
    WELCOME_SCREEN_SUBMIT_SUCCESS: function (e) {
        g(e), (u = !1);
    },
    WELCOME_SCREEN_SUBMIT_FAILURE: function () {
        (m = !0), (u = !1);
    }
});
