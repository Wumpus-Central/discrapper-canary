n.d(t, {
    AL: () => f,
    CE: () => u,
    Cq: () => E,
    G8: () => l,
    G_: () => A,
    HU: () => p,
    PT: () => g,
    QJ: () => b,
    VE: () => d,
    Yl: () => I,
    b0: () => S,
    dR: () => y,
    f1: () => _,
    l6: () => m,
    mx: () => h,
    uk: () => v,
    wb: () => T,
    y4: () => O,
});
var r = n(64700),
    i = n(688810),
    a = n(954571),
    s = n(652215),
    o = n(788868),
    l = (function (e) {
        return (e.APPEARANCE_SETTINGS = "appearance_settings"), (e.PREVIEW_THEMES = "preview_themes"), e;
    })({});
let c = "manual",
    u = () => {
        (c = "manual"), a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "hex_input" });
    },
    d = () => {
        (c = "manual"), a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_picker" });
    },
    f = () => {
        a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "eye_dropper" });
    },
    p = () => {
        (c = "manual"), a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "add_color" });
    },
    _ = () => {
        (c = "manual"), a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "remove_color" });
    },
    h = () => {
        a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_selected" });
    },
    m = () => {
        (c = "manual"),
            a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "gradient_direction_input" });
    },
    g = () => {
        (c = "manual"),
            a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "gradient_direction" });
    },
    E = () => {
        (c = "manual"),
            a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_intensity_input" });
    },
    b = () => {
        (c = "manual"),
            a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_intensity" });
    },
    y = () => {
        (c = "manual"), a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "base_theme" });
    },
    O = () => {
        (c = "surprise_me"), a.default.track(s.HAw.CUSTOM_THEMES_SURPRISE_BUTTON_CLICKED, {});
    },
    A = () => {
        (c = "manual"), a.default.track(s.HAw.CUSTOM_THEME_RESET_BUTTON_CLICKED, {});
    },
    v = () => {
        a.default.track(s.HAw.CUSTOM_THEMES_BACK_BUTTON_CLICKED, {});
    },
    S = (e) => {
        a.default.track(s.HAw.CUSTOM_THEMES_BANNER_CLICKED, { banner_location: e });
    },
    I = (e, t, n, r, i) => {
        a.default.track(s.HAw.CUSTOM_THEMES_UPDATED, {
            colors: e,
            color_intensity: t,
            gradient_angle: n,
            base_theme: r,
            location_stack: i,
            creation_method: c,
        }),
            (c = "manual");
    },
    T = (e, t) => {
        let { analyticsLocations: n } = (0, i.Ay)(t);
        r.useEffect(() => {
            e ||
                a.default.track(s.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: o.e.CUSTOM_THEMES_UPSELL,
                    location_stack: n,
                });
        }, [e, n]);
    };
