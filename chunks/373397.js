n.d(t, { L: () => i });
var r = n(692547);
function i(e, t) {
    var n, i, o, a, s;
    return null !=
        (s =
            null == (o = (a = r.Z.colors.BACKGROUND_SURFACE_HIGH).resolve) ||
            null ==
                (i = o.call(a, {
                    theme: e,
                    saturation: t
                })) ||
            null == (n = i.hex)
                ? void 0
                : n.call(i))
        ? s
        : '#000';
}
