e.d(t, { A: () => i });
var E = e(228366);
let i = {
    close() {
        E.h.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
    },
    setSection(_) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        E.h.dispatch({ type: "USER_SETTINGS_MODAL_SET_SECTION", section: _, subsection: t, ...e });
    },
    clearSubsection(_) {
        E.h.dispatch({ type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION", forSection: _ });
    },
    clearLocation() {
        E.h.dispatch({ type: "USER_SETTINGS_MODAL_CLEAR_LOCATION" });
    },
};
