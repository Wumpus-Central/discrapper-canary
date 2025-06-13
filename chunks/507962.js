n.d(t, {
    HV: () => g,
    J4: () => d,
    JL: () => f,
    Om: () => E,
    P0: () => u,
    Vb: () => y,
    fR: () => h,
    gG: () => _,
    hf: () => v,
    u7: () => O,
    uf: () => b,
    w8: () => p,
    z3: () => m,
    zW: () => c
});
var r = n(73800),
    i = n(906732),
    a = n(626135),
    o = n(981631),
    s = n(474936);
let l = 'manual',
    c = () => {
        (l = 'manual'), a.default.track(o.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: 'hex_input' });
    },
    u = () => {
        (l = 'manual'), a.default.track(o.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: 'color_picker' });
    },
    d = () => {
        a.default.track(o.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: 'eye_dropper' });
    },
    _ = () => {
        (l = 'manual'), a.default.track(o.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: 'add_color' });
    },
    f = () => {
        (l = 'manual'), a.default.track(o.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: 'remove_color' });
    },
    p = () => {
        a.default.track(o.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: 'color_selected' });
    },
    h = () => {
        (l = 'manual'), a.default.track(o.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: 'gradient_direction' });
    },
    m = () => {
        (l = 'manual'), a.default.track(o.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: 'color_intensity' });
    },
    g = () => {
        (l = 'manual'), a.default.track(o.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: 'base_theme' });
    },
    E = () => {
        (l = 'surprise_me'), a.default.track(o.rMx.CUSTOM_THEMES_SURPRISE_BUTTON_CLICKED, {});
    },
    b = () => {
        (l = 'manual'), a.default.track(o.rMx.CUSTOM_THEME_RESET_BUTTON_CLICKED, {});
    },
    y = () => {
        a.default.track(o.rMx.CUSTOM_THEMES_BACK_BUTTON_CLICKED, {});
    },
    O = (e, t, n, r, i) => {
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
    v = (e, t) => {
        let { analyticsLocations: n } = (0, i.ZP)(t);
        r.useEffect(() => {
            e ||
                a.default.track(o.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: s.cd.CUSTOM_THEMES_UPSELL,
                    location_stack: n
                });
        }, [e, n]);
    };
