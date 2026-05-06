"use strict";
n.d(t, { A: () => r });
var i = n(228366);
let r = {
    close() {
        i.h.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
    },
    setSection(e) {
        i.h.dispatch({ type: "USER_SETTINGS_MODAL_SET_SECTION", section: e });
    },
};
