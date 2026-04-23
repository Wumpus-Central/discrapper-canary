n.d(t, {
    AL: () => m,
    CE: () => c,
    Cq: () => E,
    G8: () => d,
    G_: () => b,
    HU: () => _,
    PT: () => x,
    QJ: () => T,
    VE: () => g,
    Yl: () => N,
    b0: () => v,
    dR: () => S,
    f1: () => A,
    l6: () => p,
    mx: () => h,
    uk: () => C,
    wb: () => I,
    y4: () => f,
});
var i,
    s = n(64700),
    l = n(688810),
    a = n(954571),
    r = n(652215),
    o = n(788868),
    d = (((i = {}).APPEARANCE_SETTINGS = "appearance_settings"), (i.PREVIEW_THEMES = "preview_themes"), i);
let u = "manual",
    c = () => {
        (u = "manual"), a.default.track(r.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "hex_input" });
    },
    g = () => {
        (u = "manual"), a.default.track(r.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_picker" });
    },
    m = () => {
        a.default.track(r.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "eye_dropper" });
    },
    _ = () => {
        (u = "manual"), a.default.track(r.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "add_color" });
    },
    A = () => {
        (u = "manual"), a.default.track(r.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "remove_color" });
    },
    h = () => {
        a.default.track(r.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_selected" });
    },
    p = () => {
        (u = "manual"),
            a.default.track(r.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "gradient_direction_input" });
    },
    x = () => {
        (u = "manual"),
            a.default.track(r.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "gradient_direction" });
    },
    E = () => {
        (u = "manual"),
            a.default.track(r.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_intensity_input" });
    },
    T = () => {
        (u = "manual"),
            a.default.track(r.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_intensity" });
    },
    S = () => {
        (u = "manual"), a.default.track(r.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "base_theme" });
    },
    f = () => {
        (u = "surprise_me"), a.default.track(r.HAw.CUSTOM_THEMES_SURPRISE_BUTTON_CLICKED, {});
    },
    b = () => {
        (u = "manual"), a.default.track(r.HAw.CUSTOM_THEME_RESET_BUTTON_CLICKED, {});
    },
    C = () => {
        a.default.track(r.HAw.CUSTOM_THEMES_BACK_BUTTON_CLICKED, {});
    },
    v = (e) => {
        a.default.track(r.HAw.CUSTOM_THEMES_BANNER_CLICKED, { banner_location: e });
    },
    N = (e, t, n, i, s) => {
        a.default.track(r.HAw.CUSTOM_THEMES_UPDATED, {
            colors: e,
            color_intensity: t,
            gradient_angle: n,
            base_theme: i,
            location_stack: s,
            creation_method: u,
        }),
            (u = "manual");
    },
    I = (e, t) => {
        let { analyticsLocations: n } = (0, l.Ay)(t);
        s.useEffect(() => {
            e || a.default.track(r.HAw.PREMIUM_UPSELL_VIEWED, { type: o.e.CUSTOM_THEMES_UPSELL, location_stack: n });
        }, [e, n]);
    };
