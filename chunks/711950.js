"use strict";
n.d(t, { A: () => l });
var i = n(228366),
    r = n(924283),
    s = n(976860),
    a = n(652215);
function o(e) {
    i.h.dispatch({ type: "FRIENDS_SET_SECTION", section: e });
}
let l = {
    transitionToSection(e) {
        let { explicit: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (0, s.JK)().location.pathname !== a.BVt.FRIENDS && (0, s.pX)(a.BVt.FRIENDS),
            o(e),
            t && (0, r.A)({ tab_opened: e });
    },
    setSection: o,
    setInitialSection(e) {
        i.h.dispatch({ type: "FRIENDS_SET_INITIAL_SECTION", section: e });
    },
};
