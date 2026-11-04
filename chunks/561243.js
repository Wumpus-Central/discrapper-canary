var d = a(73153);
a.d(
    t,
    {},
    {
        J: function () {
            d.h.dispatch({ type: "WOW_MOMENT_CONFIRMATION_CLEAR_NAMEPLATE_PREVIEW_OVERRIDES" });
        },
        s: function (e) {
            let { displayNameStyles: t, avatar: a } = e;
            d.h.dispatch({
                type: "WOW_MOMENT_CONFIRMATION_SET_NAMEPLATE_PREVIEW_OVERRIDES",
                displayNameStyles: t,
                avatar: a,
            });
        },
    },
);
