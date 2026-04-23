"use strict";
n.d(t, { A: () => S, D: () => T });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(73153),
    a = n(973654),
    o = n(287809),
    l = n(954571),
    u = n(723702),
    c = n(955572),
    d = n(775602),
    _ = n(652215),
    f = n(185928);
let p = window.matchMedia("(prefers-reduced-motion: reduce)"),
    h = window.matchMedia("(prefers-contrast: more)"),
    E = window.matchMedia("(prefers-contrast: less)"),
    m = window.matchMedia("(prefers-color-scheme: dark)"),
    g = window.matchMedia("(prefers-color-scheme: light)"),
    A = window.matchMedia("(forced-colors: active)"),
    I = 5;
function T() {
    return "windows" === (0, u.getOS)();
}
let S = {
    initBasic() {
        p.addListener(this.handleSystemPrefersReducedMotionChanged),
            this.handleSystemPrefersReducedMotionChanged(p),
            m.addListener(this.handleSystemColorPreferencesChanged),
            g.addListener(this.handleSystemColorPreferencesChanged),
            A.addListener(this.handleSystemColorPreferencesChanged),
            this.handleSystemColorPreferencesChanged(),
            h.addListener(this.handleSystemPrefersContrastChanged),
            E.addListener(this.handleSystemPrefersContrastChanged),
            this.handleSystemPrefersContrastChanged();
    },
    init() {
        this.initBasic(),
            s.h.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
                l.default.track(_.HAw.LOCAL_SETTINGS_UPDATED, { colorblind_enabled: d.A.colorblindMode });
            }),
            s.h.subscribe("ACCESSIBILITY_SET_SATURATION", (e) => {
                l.default.track(_.HAw.LOCAL_SETTINGS_UPDATED, { saturation_level: e.saturation });
            });
    },
    maybeShowKeyboardNavigationExplainerModal() {
        let e;
        (I = Math.max(I - 1, 0)),
            null == (e = o.default.getCurrentUser()) ||
                Date.now() - e.createdAt < 864e5 ||
                d.A.keyboardNavigationExplainerModalSeen ||
                0 !== I ||
                (0, i.openModalLazy)(async () => {
                    let { default: e } = await n.e("98186").then(n.bind(n, 645905));
                    return (t) => (0, r.jsx)(e, { ...t });
                });
    },
    handleSystemPrefersReducedMotionChanged(e) {
        s.h.wait(() => {
            c.RJ(e.matches ? "reduce" : "no-preference");
        });
    },
    handleSystemColorPreferencesChanged() {
        let e = f.Fc.NO_PREFERENCE;
        m.matches ? (e = f.Fc.DARK) : g.matches && (e = f.Fc.LIGHT);
        let t = (!u.isPlatformEmbedded || T()) && A.matches ? "active" : "none";
        s.h.wait(() => {
            a.LA(e), c.RI(t);
        });
    },
    handleSystemPrefersContrastChanged() {
        let e = "no-preference";
        h.matches ? (e = "more") : E.matches && (e = "less"),
            s.h.wait(() => {
                c.Jb(e);
            });
    },
};
