var h = p(73153);
p.d(
    E,
    {},
    {
        RO: function (t) {
            h.h.dispatch({ type: "CONJURE_PAGES_PIN_SET", pinned: t });
        },
        g7: function (t, E) {
            h.h.dispatch({ type: "CONJURE_PAGES_PROJECT_VIEW_SAVE", projectId: t, view: E });
        },
        jQ: function (t) {
            let { inServer: E = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            h.h.dispatch({ type: "CONJURE_PAGES_VISIT", projectId: t, inServer: E });
        },
        mE: function () {
            h.h.dispatch({ type: "CONJURE_PAGES_LEAVE" });
        },
        wd: function (t, E) {
            h.h.dispatch({ type: "CONJURE_PAGES_SCROLL_SAVE", key: t, scrollTop: E });
        },
    },
);
