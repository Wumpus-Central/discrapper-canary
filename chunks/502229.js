"use strict";
n.d(t, { A: () => S, D: () => T });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(228366),
    a = n(973654),
    o = n(287809),
    l = n(174459),
    u = n(723702),
    c = n(955572),
    d = n(775602),
    _ = n(652215),
    h = n(185928);
let f = window.matchMedia("(prefers-reduced-motion: reduce)"),
    p = window.matchMedia("(prefers-contrast: more)"),
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
        f.addListener(this.handleSystemPrefersReducedMotionChanged),
            this.handleSystemPrefersReducedMotionChanged(f),
            m.addListener(this.handleSystemColorPreferencesChanged),
            g.addListener(this.handleSystemColorPreferencesChanged),
            A.addListener(this.handleSystemColorPreferencesChanged),
            this.handleSystemColorPreferencesChanged(),
            p.addListener(this.handleSystemPrefersContrastChanged),
            E.addListener(this.handleSystemPrefersContrastChanged),
            this.handleSystemPrefersContrastChanged();
    },
    init() {
        this.initBasic(),
            s.h.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
                l.default.track(_.HAw.LOCAL_SETTINGS_UPDATED, { colorblind_enabled: d.Ay.colorblindMode });
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
                d.Ay.keyboardNavigationExplainerModalSeen ||
                0 !== I ||
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("55805"), n.e("63309"), n.e("75805")]).then(
                        n.bind(n, 645905),
                    );
                    return (t) => (0, i.jsx)(e, { ...t });
                });
    },
    handleSystemPrefersReducedMotionChanged(e) {
        s.h.wait(() => {
            c.RJ(e.matches ? "reduce" : "no-preference");
        });
    },
    handleSystemColorPreferencesChanged() {
        let e = h.Fc.NO_PREFERENCE;
        m.matches ? (e = h.Fc.DARK) : g.matches && (e = h.Fc.LIGHT);
        let t = (!u.isPlatformEmbedded || T()) && A.matches ? "active" : "none";
        s.h.wait(() => {
            a.LA(e), c.RI(t);
        });
    },
    handleSystemPrefersContrastChanged() {
        let e = "no-preference";
        p.matches ? (e = "more") : E.matches && (e = "less"),
            s.h.wait(() => {
                c.Jb(e);
            });
    },
};
