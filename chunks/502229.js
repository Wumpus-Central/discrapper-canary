"use strict";
n.d(t, { A: () => S, D: () => g });
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(228366),
    s = n(973654),
    l = n(287809),
    o = n(174459),
    d = n(723702),
    c = n(955572),
    u = n(775602),
    _ = n(652215),
    E = n(185928);
let A = window.matchMedia("(prefers-reduced-motion: reduce)"),
    h = window.matchMedia("(prefers-contrast: more)"),
    I = window.matchMedia("(prefers-contrast: less)"),
    f = window.matchMedia("(prefers-color-scheme: dark)"),
    p = window.matchMedia("(prefers-color-scheme: light)"),
    T = window.matchMedia("(forced-colors: active)"),
    m = 5;
function g() {
    return "windows" === (0, d.getOS)();
}
let S = {
    initBasic() {
        A.addListener(this.handleSystemPrefersReducedMotionChanged),
            this.handleSystemPrefersReducedMotionChanged(A),
            f.addListener(this.handleSystemColorPreferencesChanged),
            p.addListener(this.handleSystemColorPreferencesChanged),
            T.addListener(this.handleSystemColorPreferencesChanged),
            this.handleSystemColorPreferencesChanged(),
            h.addListener(this.handleSystemPrefersContrastChanged),
            I.addListener(this.handleSystemPrefersContrastChanged),
            this.handleSystemPrefersContrastChanged();
    },
    init() {
        this.initBasic(),
            a.h.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
                o.default.track(_.HAw.LOCAL_SETTINGS_UPDATED, { colorblind_enabled: u.Ay.colorblindMode });
            }),
            a.h.subscribe("ACCESSIBILITY_SET_SATURATION", (e) => {
                o.default.track(_.HAw.LOCAL_SETTINGS_UPDATED, { saturation_level: e.saturation });
            });
    },
    maybeShowKeyboardNavigationExplainerModal() {
        let e;
        (m = Math.max(m - 1, 0)),
            null == (e = l.default.getCurrentUser()) ||
                Date.now() - e.createdAt < 864e5 ||
                u.Ay.keyboardNavigationExplainerModalSeen ||
                0 !== m ||
                (0, r.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("773989"), n.e("963309"), n.e("898186")]).then(
                            n.bind(n, 645905),
                        );
                        return (t) => (0, i.jsx)(e, { ...t });
                    },
                    { modalKey: "keyboard-navigation-explainer" },
                );
    },
    handleSystemPrefersReducedMotionChanged(e) {
        a.h.wait(() => {
            c.RJ(e.matches ? "reduce" : "no-preference");
        });
    },
    handleSystemColorPreferencesChanged() {
        let e = E.Fc.NO_PREFERENCE;
        f.matches ? (e = E.Fc.DARK) : p.matches && (e = E.Fc.LIGHT);
        let t = (!d.isPlatformEmbedded || g()) && T.matches ? "active" : "none";
        a.h.wait(() => {
            s.LA(e), c.RI(t);
        });
    },
    handleSystemPrefersContrastChanged() {
        let e = "no-preference";
        h.matches ? (e = "more") : I.matches && (e = "less"),
            a.h.wait(() => {
                c.Jb(e);
            });
    },
};
