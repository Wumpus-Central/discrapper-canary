n.d(t, {
    A: () => r,
});
var d = n(311907),
    i = n(287809),
    h = n(936926);

function r() {
    return (0, d.bG)([i.default], () => {
        var e, t, n;
        return (
            !!(0, h.Eq)({
                location: "useIsInRestrictedHours",
            }) &&
            null !=
                (e =
                    null == (n = i.default.getCurrentUser()) || null == (t = n.restrictedSchedule)
                        ? void 0
                        : t.isInRestrictedHours()) &&
            e
        );
    });
}
