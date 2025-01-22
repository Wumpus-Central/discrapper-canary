r.d(n, {
    b: function () {
        return b;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(570140),
    s = r(594174),
    l = r(626135),
    u = r(358085),
    c = r(857595),
    d = r(607070),
    f = r(981631);
let p = window.matchMedia('(prefers-reduced-motion: reduce)'),
    h = window.matchMedia('(prefers-contrast: more)'),
    _ = window.matchMedia('(prefers-contrast: less)'),
    m = window.matchMedia('(prefers-color-scheme: dark)'),
    g = window.matchMedia('(prefers-color-scheme: light)'),
    E = window.matchMedia('(forced-colors: active)'),
    v = 5;
function y() {
    let e = s.default.getCurrentUser();
    return null == e || Date.now() - +e.createdAt < 86400000;
}
function b() {
    return 'windows' === (0, u.getOS)();
}
n.Z = {
    initBasic() {
        p.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(p), m.addListener(this.handleSystemColorPreferencesChanged), g.addListener(this.handleSystemColorPreferencesChanged), E.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), h.addListener(this.handleSystemPrefersContrastChanged), _.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged();
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
        (v = Math.max(v - 1, 0)),
            !y() &&
                !d.Z.keyboardNavigationExplainerModalSeen &&
                0 === v &&
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([r.e('6380'), r.e('39362')]).then(r.bind(r, 461964));
                    return (n) => (0, i.jsx)(e, { ...n });
                });
    },
    handleSystemPrefersReducedMotionChanged(e) {
        o.Z.wait(() => {
            c.Nc(e.matches ? 'reduce' : 'no-preference');
        });
    },
    handleSystemColorPreferencesChanged() {
        let e;
        m.matches ? (e = f.BRd.DARK) : g.matches && (e = f.BRd.LIGHT);
        let n = (!u.isPlatformEmbedded || b()) && E.matches ? 'active' : 'none';
        o.Z.wait(() => {
            c.Ej(e, n);
        });
    },
    handleSystemPrefersContrastChanged() {
        let e = 'no-preference';
        h.matches ? (e = 'more') : _.matches && (e = 'less'),
            o.Z.wait(() => {
                c.TX(e);
            });
    }
};
