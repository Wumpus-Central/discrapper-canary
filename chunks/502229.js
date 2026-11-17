var i = n(477900);
n(582128);
var r = n(192308),
    a = n(73153),
    s = n(973654),
    l = n(287809),
    o = n(129230),
    d = n(723702),
    c = n(955572),
    u = n(775602),
    _ = n(652215),
    E = n(185928);
let A = window.matchMedia("(prefers-reduced-motion: reduce)"),
    f = window.matchMedia("(prefers-contrast: more)"),
    h = window.matchMedia("(prefers-contrast: less)"),
    I = window.matchMedia("(prefers-color-scheme: dark)"),
    p = window.matchMedia("(prefers-color-scheme: light)"),
    m = window.matchMedia("(forced-colors: active)"),
    g = 5;
function T() {
    return "windows" === (0, d.R0)();
}
n.d(
    t,
    {},
    {
        A: {
            initBasic() {
                (A.addListener(this.handleSystemPrefersReducedMotionChanged),
                    this.handleSystemPrefersReducedMotionChanged(A),
                    I.addListener(this.handleSystemColorPreferencesChanged),
                    p.addListener(this.handleSystemColorPreferencesChanged),
                    m.addListener(this.handleSystemColorPreferencesChanged),
                    this.handleSystemColorPreferencesChanged(),
                    f.addListener(this.handleSystemPrefersContrastChanged),
                    h.addListener(this.handleSystemPrefersContrastChanged),
                    this.handleSystemPrefersContrastChanged());
            },
            init() {
                (this.initBasic(),
                    a.h.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
                        o.default.track(_.HAw.LOCAL_SETTINGS_UPDATED, { colorblind_enabled: u.Ay.colorblindMode });
                    }),
                    a.h.subscribe("ACCESSIBILITY_SET_SATURATION", (e) => {
                        o.default.track(_.HAw.LOCAL_SETTINGS_UPDATED, { saturation_level: e.saturation });
                    }));
            },
            maybeShowKeyboardNavigationExplainerModal() {
                let e;
                ((g = Math.max(g - 1, 0)),
                    null == (e = l.default.getCurrentUser()) ||
                        Date.now() - e.createdAt < 864e5 ||
                        u.Ay.keyboardNavigationExplainerModalSeen ||
                        0 !== g ||
                        (0, r.mM)(
                            async () => {
                                let { default: e } = await Promise.all([n.e(65e3), n.e(898186)]).then(
                                    n.bind(n, 645905),
                                );
                                return (t) => (0, i.jsx)(e, { ...t });
                            },
                            { modalKey: "keyboard-navigation-explainer" },
                        ));
            },
            handleSystemPrefersReducedMotionChanged(e) {
                c.RJ(e.matches ? "reduce" : "no-preference");
            },
            handleSystemColorPreferencesChanged() {
                let e = E.Fc.NO_PREFERENCE;
                I.matches ? (e = E.Fc.DARK) : p.matches && (e = E.Fc.LIGHT);
                let t = (!d.isPlatformEmbedded || T()) && m.matches ? "active" : "none";
                (s.LA(e), c.RI(t));
            },
            handleSystemPrefersContrastChanged() {
                let e = "no-preference";
                (f.matches ? (e = "more") : h.matches && (e = "less"), c.Jb(e));
            },
        },
        D: T,
    },
);
