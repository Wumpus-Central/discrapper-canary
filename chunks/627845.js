r.d(n, {
    b: function () {
        return T;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(570140),
    o = r(594174),
    l = r(626135),
    u = r(358085),
    c = r(857595),
    d = r(607070),
    f = r(981631);
let _ = window.matchMedia('(prefers-reduced-motion: reduce)'),
    h = window.matchMedia('(prefers-contrast: more)'),
    p = window.matchMedia('(prefers-contrast: less)'),
    m = window.matchMedia('(prefers-color-scheme: dark)'),
    g = window.matchMedia('(prefers-color-scheme: light)'),
    E = window.matchMedia('(forced-colors: active)'),
    v = 5;
function I() {
    let e = o.default.getCurrentUser();
    return null == e || Date.now() - +e.createdAt < 86400000;
}
function T() {
    return 'windows' === (0, u.getOS)();
}
n.Z = {
    initBasic() {
        _.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(_), m.addListener(this.handleSystemColorPreferencesChanged), g.addListener(this.handleSystemColorPreferencesChanged), E.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), h.addListener(this.handleSystemPrefersContrastChanged), p.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged();
    },
    init() {
        this.initBasic(),
            s.Z.subscribe('ACCESSIBILITY_COLORBLIND_TOGGLE', () => {
                l.default.track(f.rMx.LOCAL_SETTINGS_UPDATED, { colorblind_enabled: d.Z.colorblindMode });
            }),
            s.Z.subscribe('ACCESSIBILITY_SET_SATURATION', (e) => {
                l.default.track(f.rMx.LOCAL_SETTINGS_UPDATED, { saturation_level: e.saturation });
            });
    },
    maybeShowKeyboardNavigationExplainerModal() {
        (v = Math.max(v - 1, 0)),
            !I() &&
                !d.Z.keyboardNavigationExplainerModalSeen &&
                0 === v &&
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([r.e('6380'), r.e('59088')]).then(r.bind(r, 461964));
                    return (n) => (0, i.jsx)(e, { ...n });
                });
    },
    handleSystemPrefersReducedMotionChanged(e) {
        s.Z.wait(() => {
            c.Nc(e.matches ? 'reduce' : 'no-preference');
        });
    },
    handleSystemColorPreferencesChanged() {
        let e;
        m.matches ? (e = f.BRd.DARK) : g.matches && (e = f.BRd.LIGHT);
        let n = (!u.isPlatformEmbedded || T()) && E.matches ? 'active' : 'none';
        s.Z.wait(() => {
            c.Ej(e, n);
        });
    },
    handleSystemPrefersContrastChanged() {
        let e = 'no-preference';
        h.matches ? (e = 'more') : p.matches && (e = 'less'),
            s.Z.wait(() => {
                c.TX(e);
            });
    }
};
