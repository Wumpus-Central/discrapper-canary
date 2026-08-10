E.d(t, { A: () => i });
var e = E(228366);
let i = {
    close() {
        e.h.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
    },
    setSection(_) {
        e.h.dispatch({ type: "USER_SETTINGS_MODAL_SET_SECTION", section: _ });
    },
};
