n.d(t, { A: () => s });
var d = n(311907),
    i = n(287809),
    h = n(936926);
function s() {
    return (0, d.bG)(
        [i.default],
        () =>
            !!(0, h.Eq)({ location: "useIsInRestrictedHours" }) &&
            (i.default.getCurrentUser()?.restrictedSchedule?.isInRestrictedHours() ?? !1),
    );
}
