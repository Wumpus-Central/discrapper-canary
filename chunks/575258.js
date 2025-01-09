var i,
    r,
    l,
    s,
    a = n(442837),
    o = n(570140),
    c = n(430824),
    d = n(981631);
let u = {
        description: '',
        channels: [],
        enabled: !1
    },
    m = u,
    h = !1,
    g = !1,
    x = u;
function p(e) {
    let { welcomeScreen: t, guildId: n } = e,
        i = c.Z.getGuild(n);
    if (null != t) {
        var r, l;
        x = m = {
            description: null !== (r = t.description) && void 0 !== r ? r : '',
            channels: null !== (l = t.welcome_channels) && void 0 !== l ? l : [],
            enabled: null == i ? void 0 : i.hasFeature(d.oNc.WELCOME_SCREEN_ENABLED)
        };
    } else x = m = u;
    g = !1;
}
class f extends (s = a.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    get() {
        return x;
    }
    showNotice() {
        return g;
    }
    getSettingsProps() {
        return {
            submitting: h,
            hasErrors: g,
            welcomeSettings: x,
            originalWelcomeSettings: m
        };
    }
}
(l = 'WelcomeScreenSettingsStore'),
    (r = 'displayName') in (i = f)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new f(o.Z, {
        WELCOME_SCREEN_FETCH_SUCCESS: p,
        WELCOME_SCREEN_UPDATE: p,
        WELCOME_SCREEN_SETTINGS_RESET: function () {
            (x = m), (g = !1);
        },
        WELCOME_SCREEN_SETTINGS_CLEAR: function () {
            (x = u), (m = u);
        },
        WELCOME_SCREEN_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            x = {
                ...x,
                ...t
            };
        },
        WELCOME_SCREEN_SUBMIT: function () {
            h = !0;
        },
        WELCOME_SCREEN_SUBMIT_SUCCESS: function (e) {
            p(e), (h = !1);
        },
        WELCOME_SCREEN_SUBMIT_FAILURE: function () {
            (g = !0), (h = !1);
        }
    }));
