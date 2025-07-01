n.d(t, {
    HA: () => A,
    HV: () => y,
    J4: () => p,
    JL: () => m,
    Om: () => O,
    P0: () => _,
    Vb: () => I,
    fR: () => E,
    gG: () => h,
    hf: () => S,
    u7: () => T,
    uf: () => v,
    w8: () => g,
    z3: () => b,
    zW: () => f
});
var r = n(73800),
    i = n(704215),
    a = n(906732),
    o = n(211644),
    s = n(266454),
    l = n(626135),
    c = n(981631),
    u = n(474936);
let d = 'manual',
    f = () => {
        ((d = 'manual'), l.default.track(c.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: 'hex_input' }));
    },
    _ = () => {
        ((d = 'manual'), l.default.track(c.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: 'color_picker' }));
    },
    p = () => {
        l.default.track(c.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: 'eye_dropper' });
    },
    h = () => {
        ((d = 'manual'), l.default.track(c.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: 'add_color' }));
    },
    m = () => {
        ((d = 'manual'), l.default.track(c.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: 'remove_color' }));
    },
    g = () => {
        l.default.track(c.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: 'color_selected' });
    },
    E = () => {
        ((d = 'manual'), l.default.track(c.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: 'gradient_direction' }));
    },
    b = () => {
        ((d = 'manual'), l.default.track(c.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: 'color_intensity' }));
    },
    y = () => {
        ((d = 'manual'), l.default.track(c.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: 'base_theme' }));
    },
    O = () => {
        ((d = 'surprise_me'), l.default.track(c.rMx.CUSTOM_THEMES_SURPRISE_BUTTON_CLICKED, {}));
    },
    v = () => {
        ((d = 'manual'), l.default.track(c.rMx.CUSTOM_THEME_RESET_BUTTON_CLICKED, {}));
    },
    I = () => {
        l.default.track(c.rMx.CUSTOM_THEMES_BACK_BUTTON_CLICKED, {});
    },
    T = (e, t, n, r, i) => {
        (l.default.track(c.rMx.CUSTOM_THEMES_UPDATED, {
            colors: e,
            color_intensity: t,
            gradient_angle: n,
            base_theme: r,
            location_stack: i,
            creation_method: d
        }),
            (d = 'manual'));
    },
    S = (e, t) => {
        let { analyticsLocations: n } = (0, a.ZP)(t);
        r.useEffect(() => {
            e ||
                l.default.track(c.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: u.cd.CUSTOM_THEMES_UPSELL,
                    location_stack: n
                });
        }, [e, n]);
    },
    A = (e, t) => {
        let n = (0, s.Nj)(i.z.CUSTOM_THEME_COACHMARK),
            a = (0, o.ZP)((e) => e.recentlyShown[0]);
        r.useEffect(() => {
            e && !n && null != t && t !== i.z.CUSTOM_THEME_COACHMARK && l.default.track(c.rMx.CUSTOM_THEMES_COACHMARK_NOT_SHOWN_REASON, { last_dismissible_content_winner: null != a ? i.z[a] : 'None' });
        }, [e, n, t, a]);
    };
