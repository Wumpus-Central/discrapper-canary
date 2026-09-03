n.d(t, { A: () => o });
var i = n(228366),
    r = n(924283),
    a = n(976860),
    s = n(652215);
function l(e) {
    i.h.dispatch({ type: "FRIENDS_SET_SECTION", section: e });
}
let o = {
    transitionToSection(e) {
        let { explicit: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (0, a.JK)().location.pathname !== s.BVt.FRIENDS && (0, a.pX)(s.BVt.FRIENDS),
            l(e),
            t && (0, r.A)({ tab_opened: e });
    },
    setSection: l,
    setInitialSection(e) {
        i.h.dispatch({ type: "FRIENDS_SET_INITIAL_SECTION", section: e });
    },
};
