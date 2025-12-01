n.d(t, {
    Z: () => T,
    b: () => I,
});
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(570140),
    o = n(781391),
    s = n(594174),
    l = n(626135),
    c = n(358085),
    u = n(857595),
    d = n(607070),
    f = n(981631),
    p = n(874893);
function _(e, t, n) {
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
function m(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
let h = window.matchMedia("(prefers-reduced-motion: reduce)"),
    g = window.matchMedia("(prefers-contrast: more)"),
    E = window.matchMedia("(prefers-contrast: less)"),
    b = window.matchMedia("(prefers-color-scheme: dark)"),
    y = window.matchMedia("(prefers-color-scheme: light)"),
    O = window.matchMedia("(forced-colors: active)"),
    v = 5;
function S() {
    let e = s.default.getCurrentUser();
    return null == e || Date.now() - e.createdAt < 86400000;
}
function I() {
    return "windows" === (0, c.getOS)();
}
let T = {
    initBasic() {
        h.addListener(this.handleSystemPrefersReducedMotionChanged),
            this.handleSystemPrefersReducedMotionChanged(h),
            b.addListener(this.handleSystemColorPreferencesChanged),
            y.addListener(this.handleSystemColorPreferencesChanged),
            O.addListener(this.handleSystemColorPreferencesChanged),
            this.handleSystemColorPreferencesChanged(),
            g.addListener(this.handleSystemPrefersContrastChanged),
            E.addListener(this.handleSystemPrefersContrastChanged),
            this.handleSystemPrefersContrastChanged();
    },
    init() {
        this.initBasic(),
            a.Z.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
                l.default.track(f.rMx.LOCAL_SETTINGS_UPDATED, { colorblind_enabled: d.Z.colorblindMode });
            }),
            a.Z.subscribe("ACCESSIBILITY_SET_SATURATION", (e) => {
                l.default.track(f.rMx.LOCAL_SETTINGS_UPDATED, { saturation_level: e.saturation });
            });
    },
    maybeShowKeyboardNavigationExplainerModal() {
        (v = Math.max(v - 1, 0)),
            S() ||
                d.Z.keyboardNavigationExplainerModalSeen ||
                0 !== v ||
                (0, i.ZDy)(async () => {
                    let { default: e } = await n.e("73872").then(n.bind(n, 461964));
                    return (t) => (0, r.jsx)(e, m({}, t));
                });
    },
    handleSystemPrefersReducedMotionChanged(e) {
        a.Z.wait(() => {
            u.Nc(e.matches ? "reduce" : "no-preference");
        });
    },
    handleSystemColorPreferencesChanged() {
        let e = p.zd.NO_PREFERENCE;
        b.matches ? (e = p.zd.DARK) : y.matches && (e = p.zd.LIGHT);
        let t = (!c.isPlatformEmbedded || I()) && O.matches ? "active" : "none";
        a.Z.wait(() => {
            o.Q_(e), u.Ej(t);
        });
    },
    handleSystemPrefersContrastChanged() {
        let e = "no-preference";
        g.matches ? (e = "more") : E.matches && (e = "less"),
            a.Z.wait(() => {
                u.TX(e);
            });
    },
};
