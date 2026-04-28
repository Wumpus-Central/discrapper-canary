"use strict";
n.d(t, { A: () => S, D: () => T });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(228366),
    a = n(973654),
    o = n(287809),
    l = n(954571),
    _ = n(723702),
    d = n(955572),
    u = n(775602),
    c = n(652215),
    E = n(185928);
let h = window.matchMedia("(prefers-reduced-motion: reduce)"),
    m = window.matchMedia("(prefers-contrast: more)"),
    f = window.matchMedia("(prefers-contrast: less)"),
    g = window.matchMedia("(prefers-color-scheme: dark)"),
    I = window.matchMedia("(prefers-color-scheme: light)"),
    A = window.matchMedia("(forced-colors: active)"),
    p = 5;
function T() {
    return "windows" === (0, _.getOS)();
}
let S = {
    initBasic() {
        h.addListener(this.handleSystemPrefersReducedMotionChanged),
            this.handleSystemPrefersReducedMotionChanged(h),
            g.addListener(this.handleSystemColorPreferencesChanged),
            I.addListener(this.handleSystemColorPreferencesChanged),
            A.addListener(this.handleSystemColorPreferencesChanged),
            this.handleSystemColorPreferencesChanged(),
            m.addListener(this.handleSystemPrefersContrastChanged),
            f.addListener(this.handleSystemPrefersContrastChanged),
            this.handleSystemPrefersContrastChanged();
    },
    init() {
        this.initBasic(),
            s.h.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
                l.default.track(c.HAw.LOCAL_SETTINGS_UPDATED, { colorblind_enabled: u.A.colorblindMode });
            }),
            s.h.subscribe("ACCESSIBILITY_SET_SATURATION", (e) => {
                l.default.track(c.HAw.LOCAL_SETTINGS_UPDATED, { saturation_level: e.saturation });
            });
    },
    maybeShowKeyboardNavigationExplainerModal() {
        let e;
        (p = Math.max(p - 1, 0)),
            null == (e = o.default.getCurrentUser()) ||
                Date.now() - e.createdAt < 864e5 ||
                u.A.keyboardNavigationExplainerModalSeen ||
                0 !== p ||
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("55805"), n.e("63309"), n.e("98186")]).then(
                        n.bind(n, 645905),
                    );
                    return (t) => (0, i.jsx)(e, { ...t });
                });
    },
    handleSystemPrefersReducedMotionChanged(e) {
        s.h.wait(() => {
            d.RJ(e.matches ? "reduce" : "no-preference");
        });
    },
    handleSystemColorPreferencesChanged() {
        let e = E.Fc.NO_PREFERENCE;
        g.matches ? (e = E.Fc.DARK) : I.matches && (e = E.Fc.LIGHT);
        let t = (!_.isPlatformEmbedded || T()) && A.matches ? "active" : "none";
        s.h.wait(() => {
            a.LA(e), d.RI(t);
        });
    },
    handleSystemPrefersContrastChanged() {
        let e = "no-preference";
        m.matches ? (e = "more") : f.matches && (e = "less"),
            s.h.wait(() => {
                d.Jb(e);
            });
    },
};
