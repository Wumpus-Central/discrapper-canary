"use strict";
n.d(t, { A: () => i });
var r = n(73153);
let i = {
    close() {
        r.h.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
    },
    setSection(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        r.h.dispatch({ type: "USER_SETTINGS_MODAL_SET_SECTION", section: e, subsection: t, ...n });
    },
    clearSubsection(e) {
        r.h.dispatch({ type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION", forSection: e });
    },
    clearScrollPosition(e) {
        r.h.dispatch({ type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION", forSection: e });
    },
    clearLocation() {
        r.h.dispatch({ type: "USER_SETTINGS_MODAL_CLEAR_LOCATION" });
    },
};
