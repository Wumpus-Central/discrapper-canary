n.d(t, {
    Z: () => S,
    b: () => O
});
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(570140),
    a = n(594174),
    s = n(626135),
    l = n(358085),
    c = n(857595),
    u = n(607070),
    d = n(981631);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
let _ = window.matchMedia('(prefers-reduced-motion: reduce)'),
    h = window.matchMedia('(prefers-contrast: more)'),
    m = window.matchMedia('(prefers-contrast: less)'),
    g = window.matchMedia('(prefers-color-scheme: dark)'),
    E = window.matchMedia('(prefers-color-scheme: light)'),
    v = window.matchMedia('(forced-colors: active)'),
    b = 5;
function y() {
    let e = a.default.getCurrentUser();
    return null == e || Date.now() - +e.createdAt < 86400000;
}
function O() {
    return 'windows' === (0, l.getOS)();
}
let S = {
    initBasic() {
        _.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(_), g.addListener(this.handleSystemColorPreferencesChanged), E.addListener(this.handleSystemColorPreferencesChanged), v.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), h.addListener(this.handleSystemPrefersContrastChanged), m.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged();
    },
    init() {
        this.initBasic(),
            o.Z.subscribe('ACCESSIBILITY_COLORBLIND_TOGGLE', () => {
                s.default.track(d.rMx.LOCAL_SETTINGS_UPDATED, { colorblind_enabled: u.Z.colorblindMode });
            }),
            o.Z.subscribe('ACCESSIBILITY_SET_SATURATION', (e) => {
                s.default.track(d.rMx.LOCAL_SETTINGS_UPDATED, { saturation_level: e.saturation });
            });
    },
    maybeShowKeyboardNavigationExplainerModal() {
        (b = Math.max(b - 1, 0)),
            y() ||
                u.Z.keyboardNavigationExplainerModalSeen ||
                0 !== b ||
                (0, i.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e('6380'), n.e('84468')]).then(n.bind(n, 461964));
                    return (t) => (0, r.jsx)(e, p({}, t));
                });
    },
    handleSystemPrefersReducedMotionChanged(e) {
        o.Z.wait(() => {
            c.Nc(e.matches ? 'reduce' : 'no-preference');
        });
    },
    handleSystemColorPreferencesChanged() {
        let e;
        g.matches ? (e = d.BRd.DARK) : E.matches && (e = d.BRd.LIGHT);
        let t = (!l.isPlatformEmbedded || O()) && v.matches ? 'active' : 'none';
        o.Z.wait(() => {
            c.Ej(e, t);
        });
    },
    handleSystemPrefersContrastChanged() {
        let e = 'no-preference';
        h.matches ? (e = 'more') : m.matches && (e = 'less'),
            o.Z.wait(() => {
                c.TX(e);
            });
    }
};
