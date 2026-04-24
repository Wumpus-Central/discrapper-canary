n.d(t, { A: () => l });
var i = n(228366),
    a = n(924283),
    r = n(976860),
    _ = n(652215);
function s(e) {
    i.h.dispatch({ type: "FRIENDS_SET_SECTION", section: e });
}
let l = {
    transitionToSection(e) {
        let { explicit: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (0, r.JK)().location.pathname !== _.BVt.FRIENDS && (0, r.pX)(_.BVt.FRIENDS),
            s(e),
            t && (0, a.A)({ tab_opened: e });
    },
    setSection: s,
    setInitialSection(e) {
        i.h.dispatch({ type: "FRIENDS_SET_INITIAL_SECTION", section: e });
    },
};
