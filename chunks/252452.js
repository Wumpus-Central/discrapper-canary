n.d(t, { A: () => a });
var i = n(73153);
let a = {
    close() {
        i.h.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
    },
    setSection(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        i.h.dispatch({ type: "USER_SETTINGS_MODAL_SET_SECTION", section: e, subsection: t, ...n });
    },
    clearSubsection(e) {
        i.h.dispatch({ type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION", forSection: e });
    },
    clearScrollPosition(e) {
        i.h.dispatch({ type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION", forSection: e });
    },
    clearLocation() {
        i.h.dispatch({ type: "USER_SETTINGS_MODAL_CLEAR_LOCATION" });
    },
};
