n.d(t, {
    AL: () => O,
    CE: () => r,
    Cq: () => A,
    G8: () => l,
    G_: () => D,
    HU: () => S,
    PT: () => M,
    QJ: () => d,
    VE: () => C,
    Yl: () => k,
    b0: () => U,
    dR: () => m,
    f1: () => H,
    l6: () => f,
    mx: () => i,
    uk: () => N,
    wb: () => s,
    y4: () => R,
});
var a,
    E = n(64700),
    e = n(688810),
    c = n(174459),
    T = n(652215),
    o = n(788868),
    l = (((a = {}).APPEARANCE_SETTINGS = "appearance_settings"), (a.PREVIEW_THEMES = "preview_themes"), a);
let u = "manual";
function r() {
    (u = "manual"), c.default.track(T.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "hex_input" });
}
function C() {
    (u = "manual"), c.default.track(T.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_picker" });
}
function O() {
    c.default.track(T.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "eye_dropper" });
}
function S() {
    (u = "manual"), c.default.track(T.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "add_color" });
}
function H() {
    (u = "manual"), c.default.track(T.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "remove_color" });
}
function i() {
    c.default.track(T.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_selected" });
}
function f() {
    (u = "manual"),
        c.default.track(T.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "gradient_direction_input" });
}
function M() {
    (u = "manual"),
        c.default.track(T.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "gradient_direction" });
}
function A() {
    (u = "manual"),
        c.default.track(T.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_intensity_input" });
}
function d() {
    (u = "manual"), c.default.track(T.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_intensity" });
}
function m() {
    (u = "manual"), c.default.track(T.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "base_theme" });
}
function R() {
    (u = "surprise_me"), c.default.track(T.HAw.CUSTOM_THEMES_SURPRISE_BUTTON_CLICKED, {});
}
function D() {
    (u = "manual"), c.default.track(T.HAw.CUSTOM_THEME_RESET_BUTTON_CLICKED, {});
}
function N() {
    c.default.track(T.HAw.CUSTOM_THEMES_BACK_BUTTON_CLICKED, {});
}
function U(_) {
    c.default.track(T.HAw.CUSTOM_THEMES_BANNER_CLICKED, { banner_location: _ });
}
function k(_, t, n, a, E) {
    c.default.track(T.HAw.CUSTOM_THEMES_UPDATED, {
        colors: _,
        color_intensity: t,
        gradient_angle: n,
        base_theme: a,
        location_stack: E,
        creation_method: u,
    }),
        (u = "manual");
}
function s(_, t) {
    let { analyticsLocations: n } = (0, e.Ay)(t);
    E.useEffect(() => {
        _ || c.default.track(T.HAw.PREMIUM_UPSELL_VIEWED, { type: o.e.CUSTOM_THEMES_UPSELL, location_stack: n });
    }, [_, n]);
}
