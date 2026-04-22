"use strict";
a.d(t, { A: () => l });
var r = a(73153);
let l = {
    close() {
        r.h.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
    },
    setSection(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        r.h.dispatch({ type: "USER_SETTINGS_MODAL_SET_SECTION", section: e, subsection: t, ...a });
    },
    clearSubsection(e) {
        r.h.dispatch({ type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION", forSection: e });
    },
    clearLocation() {
        r.h.dispatch({ type: "USER_SETTINGS_MODAL_CLEAR_LOCATION" });
    },
};
