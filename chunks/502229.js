"use strict";
n.d(t, { A: () => S, D: () => y });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(73153),
    s = n(973654),
    o = n(287809),
    l = n(954571),
    u = n(723702),
    c = n(955572),
    d = n(775602),
    _ = n(652215),
    f = n(185928);
let p = window.matchMedia("(prefers-reduced-motion: reduce)"),
    h = window.matchMedia("(prefers-contrast: more)"),
    m = window.matchMedia("(prefers-contrast: less)"),
    g = window.matchMedia("(prefers-color-scheme: dark)"),
    E = window.matchMedia("(prefers-color-scheme: light)"),
    A = window.matchMedia("(forced-colors: active)"),
    I = 5;
function T() {
    let e = o.default.getCurrentUser();
    return null == e || Date.now() - e.createdAt < 864e5;
}
function y() {
    return "windows" === (0, u.getOS)();
}
let S = {
    initBasic() {
        p.addListener(this.handleSystemPrefersReducedMotionChanged),
            this.handleSystemPrefersReducedMotionChanged(p),
            g.addListener(this.handleSystemColorPreferencesChanged),
            E.addListener(this.handleSystemColorPreferencesChanged),
            A.addListener(this.handleSystemColorPreferencesChanged),
            this.handleSystemColorPreferencesChanged(),
            h.addListener(this.handleSystemPrefersContrastChanged),
            m.addListener(this.handleSystemPrefersContrastChanged),
            this.handleSystemPrefersContrastChanged();
    },
    init() {
        this.initBasic(),
            a.h.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
                l.default.track(_.HAw.LOCAL_SETTINGS_UPDATED, { colorblind_enabled: d.A.colorblindMode });
            }),
            a.h.subscribe("ACCESSIBILITY_SET_SATURATION", (e) => {
                l.default.track(_.HAw.LOCAL_SETTINGS_UPDATED, { saturation_level: e.saturation });
            });
    },
    maybeShowKeyboardNavigationExplainerModal() {
        (I = Math.max(I - 1, 0)),
            T() ||
                d.A.keyboardNavigationExplainerModalSeen ||
                0 !== I ||
                (0, i.mMO)(async () => {
                    let { default: e } = await n.e("98186").then(n.bind(n, 645905));
                    return (t) => (0, r.jsx)(e, { ...t });
                });
    },
    handleSystemPrefersReducedMotionChanged(e) {
        a.h.wait(() => {
            c.RJ(e.matches ? "reduce" : "no-preference");
        });
    },
    handleSystemColorPreferencesChanged() {
        let e = f.Fc.NO_PREFERENCE;
        g.matches ? (e = f.Fc.DARK) : E.matches && (e = f.Fc.LIGHT);
        let t = (!u.isPlatformEmbedded || y()) && A.matches ? "active" : "none";
        a.h.wait(() => {
            s.LA(e), c.RI(t);
        });
    },
    handleSystemPrefersContrastChanged() {
        let e = "no-preference";
        h.matches ? (e = "more") : m.matches && (e = "less"),
            a.h.wait(() => {
                c.Jb(e);
            });
    },
};
