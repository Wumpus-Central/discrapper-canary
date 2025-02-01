n.d(t, { Z: () => _ });
var i,
    r,
    l,
    s = n(442837),
    a = n(570140),
    o = n(430824),
    c = n(981631);
let d = {
        description: '',
        channels: [],
        enabled: !1
    },
    u = d,
    m = !1,
    h = !1,
    g = d;
function x(e) {
    let { welcomeScreen: t, guildId: n } = e,
        i = o.Z.getGuild(n);
    if (null != t) {
        var r, l;
        g = u = {
            description: null !== (r = t.description) && void 0 !== r ? r : '',
            channels: null !== (l = t.welcome_channels) && void 0 !== l ? l : [],
            enabled: null == i ? void 0 : i.hasFeature(c.oNc.WELCOME_SCREEN_ENABLED)
        };
    } else g = u = d;
    h = !1;
}
class p extends (l = s.ZP.Store) {
    initialize() {
        this.waitFor(o.Z);
    }
    get() {
        return g;
    }
    showNotice() {
        return h;
    }
    getSettingsProps() {
        return {
            submitting: m,
            hasErrors: h,
            welcomeSettings: g,
            originalWelcomeSettings: u
        };
    }
}
(r = 'WelcomeScreenSettingsStore'),
    (i = 'displayName') in p
        ? Object.defineProperty(p, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (p[i] = r);
let _ = new p(a.Z, {
    WELCOME_SCREEN_FETCH_SUCCESS: x,
    WELCOME_SCREEN_UPDATE: x,
    WELCOME_SCREEN_SETTINGS_RESET: function () {
        (g = u), (h = !1);
    },
    WELCOME_SCREEN_SETTINGS_CLEAR: function () {
        (g = d), (u = d);
    },
    WELCOME_SCREEN_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        g = {
            ...g,
            ...t
        };
    },
    WELCOME_SCREEN_SUBMIT: function () {
        m = !0;
    },
    WELCOME_SCREEN_SUBMIT_SUCCESS: function (e) {
        x(e), (m = !1);
    },
    WELCOME_SCREEN_SUBMIT_FAILURE: function () {
        (h = !0), (m = !1);
    }
});
