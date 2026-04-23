"use strict";
n.d(t, {
    AL: () => E,
    CE: () => d,
    Cq: () => S,
    G8: () => o,
    G_: () => x,
    HU: () => m,
    PT: () => h,
    QJ: () => p,
    VE: () => _,
    Yl: () => g,
    b0: () => I,
    dR: () => C,
    f1: () => T,
    l6: () => A,
    mx: () => f,
    uk: () => b,
    wb: () => H,
    y4: () => v,
});
var i,
    l = n(64700),
    r = n(688810),
    s = n(954571),
    a = n(652215),
    c = n(788868),
    o = (((i = {}).APPEARANCE_SETTINGS = "appearance_settings"), (i.PREVIEW_THEMES = "preview_themes"), i);
let u = "manual",
    d = () => {
        (u = "manual"), s.default.track(a.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "hex_input" });
    },
    _ = () => {
        (u = "manual"), s.default.track(a.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_picker" });
    },
    E = () => {
        s.default.track(a.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "eye_dropper" });
    },
    m = () => {
        (u = "manual"), s.default.track(a.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "add_color" });
    },
    T = () => {
        (u = "manual"), s.default.track(a.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "remove_color" });
    },
    f = () => {
        s.default.track(a.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_selected" });
    },
    A = () => {
        (u = "manual"),
            s.default.track(a.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "gradient_direction_input" });
    },
    h = () => {
        (u = "manual"),
            s.default.track(a.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "gradient_direction" });
    },
    S = () => {
        (u = "manual"),
            s.default.track(a.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_intensity_input" });
    },
    p = () => {
        (u = "manual"),
            s.default.track(a.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_intensity" });
    },
    C = () => {
        (u = "manual"), s.default.track(a.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "base_theme" });
    },
    v = () => {
        (u = "surprise_me"), s.default.track(a.HAw.CUSTOM_THEMES_SURPRISE_BUTTON_CLICKED, {});
    },
    x = () => {
        (u = "manual"), s.default.track(a.HAw.CUSTOM_THEME_RESET_BUTTON_CLICKED, {});
    },
    b = () => {
        s.default.track(a.HAw.CUSTOM_THEMES_BACK_BUTTON_CLICKED, {});
    },
    I = (e) => {
        s.default.track(a.HAw.CUSTOM_THEMES_BANNER_CLICKED, { banner_location: e });
    },
    g = (e, t, n, i, l) => {
        s.default.track(a.HAw.CUSTOM_THEMES_UPDATED, {
            colors: e,
            color_intensity: t,
            gradient_angle: n,
            base_theme: i,
            location_stack: l,
            creation_method: u,
        }),
            (u = "manual");
    },
    H = (e, t) => {
        let { analyticsLocations: n } = (0, r.Ay)(t);
        l.useEffect(() => {
            e || s.default.track(a.HAw.PREMIUM_UPSELL_VIEWED, { type: c.e.CUSTOM_THEMES_UPSELL, location_stack: n });
        }, [e, n]);
    };
