n.d(t, {
    Ac: () => b,
    DI: () => A,
    HA: () => R,
    HV: () => S,
    J4: () => m,
    JL: () => g,
    Ln: () => d,
    Om: () => I,
    P0: () => _,
    PI: () => O,
    Vb: () => C,
    fR: () => y,
    gG: () => h,
    hf: () => P,
    u7: () => N,
    uf: () => T,
    w8: () => E,
    z3: () => v,
    zW: () => p,
});
var r = n(473749),
    i = n(704215),
    a = n(906732),
    o = n(467409),
    s = n(266454),
    l = n(626135),
    c = n(981631),
    u = n(474936),
    d = (function (e) {
        return (e.APPEARANCE_SETTINGS = "appearance_settings"), (e.PREVIEW_THEMES = "preview_themes"), e;
    })({});
let f = "manual",
    p = () => {
        (f = "manual"), l.default.track(c.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "hex_input" });
    },
    _ = () => {
        (f = "manual"), l.default.track(c.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_picker" });
    },
    m = () => {
        l.default.track(c.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "eye_dropper" });
    },
    h = () => {
        (f = "manual"), l.default.track(c.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "add_color" });
    },
    g = () => {
        (f = "manual"), l.default.track(c.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "remove_color" });
    },
    E = () => {
        l.default.track(c.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_selected" });
    },
    b = () => {
        (f = "manual"),
            l.default.track(c.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "gradient_direction_input" });
    },
    y = () => {
        (f = "manual"),
            l.default.track(c.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "gradient_direction" });
    },
    O = () => {
        (f = "manual"),
            l.default.track(c.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_intensity_input" });
    },
    v = () => {
        (f = "manual"),
            l.default.track(c.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_intensity" });
    },
    S = () => {
        (f = "manual"), l.default.track(c.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "base_theme" });
    },
    I = () => {
        (f = "surprise_me"), l.default.track(c.rMx.CUSTOM_THEMES_SURPRISE_BUTTON_CLICKED, {});
    },
    T = () => {
        (f = "manual"), l.default.track(c.rMx.CUSTOM_THEME_RESET_BUTTON_CLICKED, {});
    },
    C = () => {
        l.default.track(c.rMx.CUSTOM_THEMES_BACK_BUTTON_CLICKED, {});
    },
    A = (e) => {
        l.default.track(c.rMx.CUSTOM_THEMES_BANNER_CLICKED, { banner_location: e });
    },
    N = (e, t, n, r, i) => {
        l.default.track(c.rMx.CUSTOM_THEMES_UPDATED, {
            colors: e,
            color_intensity: t,
            gradient_angle: n,
            base_theme: r,
            location_stack: i,
            creation_method: f,
        }),
            (f = "manual");
    },
    P = (e, t) => {
        let { analyticsLocations: n } = (0, a.ZP)(t);
        r.useEffect(() => {
            e ||
                l.default.track(c.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: u.cd.CUSTOM_THEMES_UPSELL,
                    location_stack: n,
                });
        }, [e, n]);
    },
    R = (e, t) => {
        let n = (0, s.Nj)(i.z.CUSTOM_THEME_COACHMARK);
        r.useEffect(() => {
            if (e && !n && t !== i.z.CUSTOM_THEME_COACHMARK) {
                let {
                    dailyCapReached: e,
                    inCooldown: t,
                    inAccountTenureRestriction: n,
                    lastContentShown: r,
                    currentFatigableWinner: a,
                    lastDismissibleContentWinner: s,
                } = (0, o.i)(i.z.CUSTOM_THEME_COACHMARK);
                (e || t || n || ("CUSTOM_THEME_COACHMARK" !== a && "None" !== a)) &&
                    l.default.track(c.rMx.CUSTOM_THEMES_COACHMARK_NOT_SHOWN_REASON, {
                        daily_cap_reached: e,
                        in_cooldown: t,
                        in_account_tenure_restriction: n,
                        last_content_shown: r,
                        current_fatigable_winner: a,
                        last_dismissible_content_winner: s,
                    });
            }
        }, [e, n, t]);
    };
