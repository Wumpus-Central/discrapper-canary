var a,
    E = n(582128),
    e = n(688810),
    T = n(739053),
    c = n(82498),
    o = n(129230),
    l = n(652215),
    u = n(682901),
    S = (((a = {}).APPEARANCE_SETTINGS = "appearance_settings"), (a.PREVIEW_THEMES = "preview_themes"), a);
let r = "manual";
n.d(
    t,
    {},
    {
        AL: function () {
            o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "eye_dropper" });
        },
        CE: function () {
            ((r = "manual"),
                o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "hex_input" }));
        },
        Cq: function () {
            ((r = "manual"),
                o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, {
                    control_name: "color_intensity_input",
                }));
        },
        G8: S,
        G_: function () {
            ((r = "manual"), o.default.track(l.HAw.CUSTOM_THEME_RESET_BUTTON_CLICKED, {}));
        },
        HU: function () {
            ((r = "manual"),
                o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "add_color" }));
        },
        PT: function () {
            ((r = "manual"),
                o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "gradient_direction" }));
        },
        QJ: function () {
            ((r = "manual"),
                o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_intensity" }));
        },
        VE: function () {
            ((r = "manual"),
                o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_picker" }));
        },
        Yl: function (_, t, n, a, E) {
            (o.default.track(l.HAw.CUSTOM_THEMES_UPDATED, {
                colors: _,
                color_intensity: t,
                gradient_angle: n,
                base_theme: a,
                location_stack: E,
                creation_method: r,
            }),
                (r = "manual"));
        },
        b0: function (_) {
            o.default.track(l.HAw.CUSTOM_THEMES_BANNER_CLICKED, { banner_location: _ });
        },
        dR: function () {
            ((r = "manual"),
                o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "base_theme" }));
        },
        f1: function () {
            ((r = "manual"),
                o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "remove_color" }));
        },
        l6: function () {
            ((r = "manual"),
                o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, {
                    control_name: "gradient_direction_input",
                }));
        },
        mx: function () {
            o.default.track(l.HAw.CUSTOM_THEMES_EDITOR_CONTROLS_CHANGED, { control_name: "color_selected" });
        },
        uk: function () {
            o.default.track(l.HAw.CUSTOM_THEMES_BACK_BUTTON_CLICKED, {});
        },
        wb: function (_, t) {
            let { analyticsLocations: n } = (0, e.Ay)(t);
            E.useEffect(() => {
                _ ||
                    (o.default.track(l.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: u.e.CUSTOM_THEMES_UPSELL,
                        location_stack: n,
                    }),
                    (0, T.sq)(l.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, c.uq)(u.e.CUSTOM_THEMES_UPSELL)));
            }, [_, n]);
        },
        y4: function () {
            ((r = "surprise_me"), o.default.track(l.HAw.CUSTOM_THEMES_SURPRISE_BUTTON_CLICKED, {}));
        },
    },
);
