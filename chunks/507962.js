n.d(t, {
    G8: () => c,
    HV: () => _,
    Om: () => f,
    Vb: () => h,
    fR: () => u,
    hf: () => g,
    u7: () => m,
    uf: () => p,
    z3: () => d
});
var r = n(73800),
    i = n(906732),
    a = n(626135),
    o = n(981631),
    s = n(474936);
let l = 'manual',
    c = () => {
        l = 'manual';
    },
    u = () => {
        l = 'manual';
    },
    d = () => {
        l = 'manual';
    },
    _ = () => {
        l = 'manual';
    },
    f = () => {
        (l = 'surprise_me'), a.default.track(o.rMx.CUSTOM_THEMES_SURPRISE_BUTTON_CLICKED, {});
    },
    p = () => {
        (l = 'manual'), a.default.track(o.rMx.CUSTOM_THEME_RESET_BUTTON_CLICKED, {});
    },
    h = () => {
        a.default.track(o.rMx.CUSTOM_THEMES_BACK_BUTTON_CLICKED, {});
    },
    m = (e, t, n, r, i) => {
        a.default.track(o.rMx.CUSTOM_THEMES_UPDATED, {
            colors: e,
            color_intensity: t,
            gradient_angle: n,
            base_theme: r,
            location_stack: i,
            creation_method: l
        }),
            (l = 'manual');
    },
    g = (e, t) => {
        let { analyticsLocations: n } = (0, i.ZP)(t);
        r.useEffect(() => {
            e ||
                a.default.track(o.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: s.cd.CUSTOM_THEMES_UPSELL,
                    location_stack: n
                });
        }, [e, n]);
    };
