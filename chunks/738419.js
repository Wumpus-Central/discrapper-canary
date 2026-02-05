"use strict";
n.d(t, {
    AL: () => _,
    CE: () => c,
    Cq: () => E,
    G8: () => l,
    G_: () => y,
    HU: () => f,
    PT: () => g,
    QJ: () => A,
    VE: () => d,
    Yl: () => C,
    b0: () => v,
    dR: () => I,
    f1: () => p,
    l6: () => m,
    mx: () => h,
    uk: () => S,
    wb: () => b,
    y4: () => T,
});
var r = n(64700),
    i = n(688810),
    a = n(954571),
    s = n(652215),
    o = n(788868),
    l = (function (e) {
        return (e.APPEARANCE_SETTINGS = "appearance_settings"), (e.PREVIEW_THEMES = "preview_themes"), e;
    })({});
let u = "manual",
    c = () => {
        (u = "manual"), a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "hex_input" });
    },
    d = () => {
        (u = "manual"), a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_picker" });
    },
    _ = () => {
        a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "eye_dropper" });
    },
    f = () => {
        (u = "manual"), a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "add_color" });
    },
    p = () => {
        (u = "manual"), a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "remove_color" });
    },
    h = () => {
        a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_selected" });
    },
    m = () => {
        (u = "manual"),
            a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "gradient_direction_input" });
    },
    g = () => {
        (u = "manual"),
            a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "gradient_direction" });
    },
    E = () => {
        (u = "manual"),
            a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_intensity_input" });
    },
    A = () => {
        (u = "manual"),
            a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_intensity" });
    },
    I = () => {
        (u = "manual"), a.default.track(s.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "base_theme" });
    },
    T = () => {
        (u = "surprise_me"), a.default.track(s.HAw.CUSTOM_THEMES_SURPRISE_BUTTON_CLICKED, {});
    },
    y = () => {
        (u = "manual"), a.default.track(s.HAw.CUSTOM_THEME_RESET_BUTTON_CLICKED, {});
    },
    S = () => {
        a.default.track(s.HAw.CUSTOM_THEMES_BACK_BUTTON_CLICKED, {});
    },
    v = (e) => {
        a.default.track(s.HAw.CUSTOM_THEMES_BANNER_CLICKED, { banner_location: e });
    },
    C = (e, t, n, r, i) => {
        a.default.track(s.HAw.CUSTOM_THEMES_UPDATED, {
            colors: e,
            color_intensity: t,
            gradient_angle: n,
            base_theme: r,
            location_stack: i,
            creation_method: u,
        }),
            (u = "manual");
    },
    b = (e, t) => {
        let { analyticsLocations: n } = (0, i.Ay)(t);
        r.useEffect(() => {
            e || a.default.track(s.HAw.PREMIUM_UPSELL_VIEWED, { type: o.e.CUSTOM_THEMES_UPSELL, location_stack: n });
        }, [e, n]);
    };
