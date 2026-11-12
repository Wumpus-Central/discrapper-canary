var i = n(73153);
n.d(
    t,
    {},
    {
        A: {
            close() {
                i.h.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
            },
            setSection(e) {
                i.h.dispatch({ type: "USER_SETTINGS_MODAL_SET_SECTION", section: e });
            },
        },
    },
);
