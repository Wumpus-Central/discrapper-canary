n.d(t, { L: () => i });
var r = n(692547);
function i(e, t) {
    var n, i, a, o, s;
    return null !=
        (s =
            null == (a = (o = r.Z.colors.BACKGROUND_SURFACE_HIGH).resolve) ||
            null ==
                (i = a.call(o, {
                    theme: e,
                    saturation: t
                })) ||
            null == (n = i.hex)
                ? void 0
                : n.call(i))
        ? s
        : '#000';
}
