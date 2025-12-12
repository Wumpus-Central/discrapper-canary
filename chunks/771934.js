n.d(t, {
    Ac: () => h,
    DI: () => I,
    HV: () => y,
    J4: () => f,
    JL: () => _,
    Ln: () => l,
    Om: () => O,
    P0: () => d,
    PI: () => E,
    Vb: () => S,
    fR: () => g,
    gG: () => p,
    hf: () => C,
    u7: () => T,
    uf: () => v,
    w8: () => m,
    z3: () => b,
    zW: () => u,
});
var r = n(473749),
    i = n(906732),
    a = n(626135),
    o = n(981631),
    s = n(474936),
    l = (function (e) {
        return (e.APPEARANCE_SETTINGS = "appearance_settings"), (e.PREVIEW_THEMES = "preview_themes"), e;
    })({});
let c = "manual",
    u = () => {
        (c = "manual"), a.default.track(o.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "hex_input" });
    },
    d = () => {
        (c = "manual"), a.default.track(o.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_picker" });
    },
    f = () => {
        a.default.track(o.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "eye_dropper" });
    },
    p = () => {
        (c = "manual"), a.default.track(o.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "add_color" });
    },
    _ = () => {
        (c = "manual"), a.default.track(o.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "remove_color" });
    },
    m = () => {
        a.default.track(o.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_selected" });
    },
    h = () => {
        (c = "manual"),
            a.default.track(o.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "gradient_direction_input" });
    },
    g = () => {
        (c = "manual"),
            a.default.track(o.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "gradient_direction" });
    },
    E = () => {
        (c = "manual"),
            a.default.track(o.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_intensity_input" });
    },
    b = () => {
        (c = "manual"),
            a.default.track(o.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_intensity" });
    },
    y = () => {
        (c = "manual"), a.default.track(o.rMx.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "base_theme" });
    },
    O = () => {
        (c = "surprise_me"), a.default.track(o.rMx.CUSTOM_THEMES_SURPRISE_BUTTON_CLICKED, {});
    },
    v = () => {
        (c = "manual"), a.default.track(o.rMx.CUSTOM_THEME_RESET_BUTTON_CLICKED, {});
    },
    S = () => {
        a.default.track(o.rMx.CUSTOM_THEMES_BACK_BUTTON_CLICKED, {});
    },
    I = (e) => {
        a.default.track(o.rMx.CUSTOM_THEMES_BANNER_CLICKED, { banner_location: e });
    },
    T = (e, t, n, r, i) => {
        a.default.track(o.rMx.CUSTOM_THEMES_UPDATED, {
            colors: e,
            color_intensity: t,
            gradient_angle: n,
            base_theme: r,
            location_stack: i,
            creation_method: c,
        }),
            (c = "manual");
    },
    C = (e, t) => {
        let { analyticsLocations: n } = (0, i.ZP)(t);
        r.useEffect(() => {
            e ||
                a.default.track(o.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: s.cd.CUSTOM_THEMES_UPSELL,
                    location_stack: n,
                });
        }, [e, n]);
    };
