n.d(t, {
    W: () => i,
});
var r = n(827734);

function i(e, t) {
    var n, i, a, s, o;
    return null !=
        (n =
            null == (s = (o = r.A.colors.BACKGROUND_SURFACE_HIGH).resolve) ||
            null ==
                (a = s.call(o, {
                    theme: e,
                    saturation: t,
                })) ||
            null == (i = a.hex)
                ? void 0
                : i.call(a))
        ? n
        : "#000";
}
