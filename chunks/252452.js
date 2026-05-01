E.d(t, { A: () => S });
var e = E(228366);
let S = {
    close() {
        e.h.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
    },
    setSection(_) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        e.h.dispatch({ type: "USER_SETTINGS_MODAL_SET_SECTION", section: _, subsection: t, ...E });
    },
    clearSubsection(_) {
        e.h.dispatch({ type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION", forSection: _ });
    },
    clearLocation() {
        e.h.dispatch({ type: "USER_SETTINGS_MODAL_CLEAR_LOCATION" });
    },
};
