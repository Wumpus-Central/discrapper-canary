n.d(t, {
    Z: () => T,
    b: () => S
});
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(570140),
    a = n(781391),
    s = n(594174),
    l = n(626135),
    c = n(358085),
    u = n(857595),
    d = n(607070),
    f = n(981631),
    _ = n(874893);
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
function h(e) {
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
}
let m = window.matchMedia('(prefers-reduced-motion: reduce)'),
    g = window.matchMedia('(prefers-contrast: more)'),
    E = window.matchMedia('(prefers-contrast: less)'),
    b = window.matchMedia('(prefers-color-scheme: dark)'),
    y = window.matchMedia('(prefers-color-scheme: light)'),
    v = window.matchMedia('(forced-colors: active)'),
    O = 5;
function I() {
    let e = s.default.getCurrentUser();
    return null == e || Date.now() - +e.createdAt < 86400000;
}
function S() {
    return 'windows' === (0, c.getOS)();
}
let T = {
    initBasic() {
        m.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(m), b.addListener(this.handleSystemColorPreferencesChanged), y.addListener(this.handleSystemColorPreferencesChanged), v.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), g.addListener(this.handleSystemPrefersContrastChanged), E.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged();
    },
    init() {
        this.initBasic(),
            o.Z.subscribe('ACCESSIBILITY_COLORBLIND_TOGGLE', () => {
                l.default.track(f.rMx.LOCAL_SETTINGS_UPDATED, { colorblind_enabled: d.Z.colorblindMode });
            }),
            o.Z.subscribe('ACCESSIBILITY_SET_SATURATION', (e) => {
                l.default.track(f.rMx.LOCAL_SETTINGS_UPDATED, { saturation_level: e.saturation });
            });
    },
    maybeShowKeyboardNavigationExplainerModal() {
        (O = Math.max(O - 1, 0)),
            I() ||
                d.Z.keyboardNavigationExplainerModalSeen ||
                0 !== O ||
                (0, i.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e('6380'), n.e('91081')]).then(n.bind(n, 461964));
                    return (t) => (0, r.jsx)(e, h({}, t));
                });
    },
    handleSystemPrefersReducedMotionChanged(e) {
        o.Z.wait(() => {
            u.Nc(e.matches ? 'reduce' : 'no-preference');
        });
    },
    handleSystemColorPreferencesChanged() {
        let e = _.zd.NO_PREFERENCE;
        b.matches ? (e = _.zd.DARK) : y.matches && (e = _.zd.LIGHT);
        let t = (!c.isPlatformEmbedded || S()) && v.matches ? 'active' : 'none';
        o.Z.wait(() => {
            a.Q_(e), u.Ej(t);
        });
    },
    handleSystemPrefersContrastChanged() {
        let e = 'no-preference';
        g.matches ? (e = 'more') : E.matches && (e = 'less'),
            o.Z.wait(() => {
                u.TX(e);
            });
    }
};
