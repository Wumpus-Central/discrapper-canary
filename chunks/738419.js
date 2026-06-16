t.d(a, {
    AL: () => o,
    CE: () => c,
    Cq: () => m,
    G8: () => C,
    G_: () => N,
    HU: () => H,
    PT: () => d,
    QJ: () => R,
    VE: () => S,
    Yl: () => s,
    b0: () => k,
    dR: () => i,
    f1: () => u,
    l6: () => A,
    mx: () => M,
    uk: () => U,
    wb: () => w,
    y4: () => D,
});
var E,
    e = t(64700),
    T = t(688810),
    n = t(174459),
    l = t(652215),
    r = t(788868),
    C = (((E = {}).APPEARANCE_SETTINGS = "appearance_settings"), (E.PREVIEW_THEMES = "preview_themes"), E);
let O = "manual",
    c = () => {
        (O = "manual"), n.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "hex_input" });
    },
    S = () => {
        (O = "manual"), n.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_picker" });
    },
    o = () => {
        n.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "eye_dropper" });
    },
    H = () => {
        (O = "manual"), n.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "add_color" });
    },
    u = () => {
        (O = "manual"), n.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "remove_color" });
    },
    M = () => {
        n.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_selected" });
    },
    A = () => {
        (O = "manual"),
            n.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "gradient_direction_input" });
    },
    d = () => {
        (O = "manual"),
            n.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "gradient_direction" });
    },
    m = () => {
        (O = "manual"),
            n.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_intensity_input" });
    },
    R = () => {
        (O = "manual"),
            n.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_intensity" });
    },
    i = () => {
        (O = "manual"), n.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "base_theme" });
    },
    D = () => {
        (O = "surprise_me"), n.default.track(l.HAw.CUSTOM_THEMES_SURPRISE_BUTTON_CLICKED, {});
    },
    N = () => {
        (O = "manual"), n.default.track(l.HAw.CUSTOM_THEME_RESET_BUTTON_CLICKED, {});
    },
    U = () => {
        n.default.track(l.HAw.CUSTOM_THEMES_BACK_BUTTON_CLICKED, {});
    },
    k = (_) => {
        n.default.track(l.HAw.CUSTOM_THEMES_BANNER_CLICKED, { banner_location: _ });
    },
    s = (_, a, t, E, e) => {
        n.default.track(l.HAw.CUSTOM_THEMES_UPDATED, {
            colors: _,
            color_intensity: a,
            gradient_angle: t,
            base_theme: E,
            location_stack: e,
            creation_method: O,
        }),
            (O = "manual");
    },
    w = (_, a) => {
        let { analyticsLocations: t } = (0, T.Ay)(a);
        e.useEffect(() => {
            _ || n.default.track(l.HAw.PREMIUM_UPSELL_VIEWED, { type: r.e.CUSTOM_THEMES_UPSELL, location_stack: t });
        }, [_, t]);
    };
