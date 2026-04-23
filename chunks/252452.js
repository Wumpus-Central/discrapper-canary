n.d(t, { A: () => a });
var l = n(228366);
let a = {
    close() {
        l.h.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
    },
    setSection(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        l.h.dispatch({ type: "USER_SETTINGS_MODAL_SET_SECTION", section: e, subsection: t, ...n });
    },
    clearSubsection(e) {
        l.h.dispatch({ type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION", forSection: e });
    },
    clearLocation() {
        l.h.dispatch({ type: "USER_SETTINGS_MODAL_CLEAR_LOCATION" });
    },
};
