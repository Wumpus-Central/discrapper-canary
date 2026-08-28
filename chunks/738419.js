n.d(t, {
    AL: () => H,
    CE: () => C,
    Cq: () => R,
    G8: () => S,
    G_: () => N,
    HU: () => i,
    PT: () => d,
    QJ: () => U,
    VE: () => O,
    Yl: () => s,
    b0: () => L,
    dR: () => m,
    f1: () => M,
    l6: () => A,
    mx: () => f,
    uk: () => k,
    wb: () => I,
    y4: () => D,
});
var a,
    E = n(582128),
    e = n(688810),
    T = n(10392),
    c = n(82498),
    o = n(174459),
    l = n(652215),
    u = n(202541),
    S = (((a = {}).APPEARANCE_SETTINGS = "appearance_settings"), (a.PREVIEW_THEMES = "preview_themes"), a);
let r = "manual";
function C() {
    (r = "manual"), o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "hex_input" });
}
function O() {
    (r = "manual"), o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_picker" });
}
function H() {
    o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "eye_dropper" });
}
function i() {
    (r = "manual"), o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "add_color" });
}
function M() {
    (r = "manual"), o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "remove_color" });
}
function f() {
    o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_selected" });
}
function A() {
    (r = "manual"),
        o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "gradient_direction_input" });
}
function d() {
    (r = "manual"),
        o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "gradient_direction" });
}
function R() {
    (r = "manual"),
        o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_intensity_input" });
}
function U() {
    (r = "manual"), o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_intensity" });
}
function m() {
    (r = "manual"), o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "base_theme" });
}
function D() {
    (r = "surprise_me"), o.default.track(l.HAw.CUSTOM_THEMES_SURPRISE_BUTTON_CLICKED, {});
}
function N() {
    (r = "manual"), o.default.track(l.HAw.CUSTOM_THEME_RESET_BUTTON_CLICKED, {});
}
function k() {
    o.default.track(l.HAw.CUSTOM_THEMES_BACK_BUTTON_CLICKED, {});
}
function L(_) {
    o.default.track(l.HAw.CUSTOM_THEMES_BANNER_CLICKED, { banner_location: _ });
}
function s(_, t, n, a, E) {
    o.default.track(l.HAw.CUSTOM_THEMES_UPDATED, {
        colors: _,
        color_intensity: t,
        gradient_angle: n,
        base_theme: a,
        location_stack: E,
        creation_method: r,
    }),
        (r = "manual");
}
function I(_, t) {
    let { analyticsLocations: n } = (0, e.Ay)(t);
    E.useEffect(() => {
        _ ||
            (o.default.track(l.HAw.PREMIUM_UPSELL_VIEWED, { type: u.e.CUSTOM_THEMES_UPSELL, location_stack: n }),
            (0, T.sq)(l.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, c.uq)(u.e.CUSTOM_THEMES_UPSELL)));
    }, [_, n]);
}
