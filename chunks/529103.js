n.d(t, { Z: () => l });
var r = n(570140),
    i = n(557968),
    o = n(703656),
    a = n(981631);
function s(e) {
    r.Z.dispatch({
        type: "FRIENDS_SET_SECTION",
        section: e,
    });
}
let l = {
    transitionToSection(e) {
        let { explicit: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (0, o.s1)().location.pathname !== a.Z5c.FRIENDS && (0, o.uL)(a.Z5c.FRIENDS),
            s(e),
            t && (0, i.Z)({ tab_opened: e });
    },
    setSection: s,
    setInitialSection(e) {
        r.Z.dispatch({
            type: "FRIENDS_SET_INITIAL_SECTION",
            section: e,
        });
    },
};
