n.d(e, { r: () => l });
var i = n(17928),
    r = n(899847),
    o = n(842144);
function l(t, e, n, l) {
    var u, d;
    let { comparator: s = (t, e) => t === e } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        c = (i) => n(o.A.getSettings(i)?.[t]?.[e]);
    return {
        getControlledSetting: c,
        updateControlledSetting:
            ((u = c),
            (d = (n, i) =>
                null == n
                    ? Promise.resolve()
                    : r.Ay.updateTeenSettings(n, t, (t) => {
                          t[e] = l(i, t[e]);
                      })),
            function (t, e) {
                return "function" == typeof e ? d(t, e(u(t))) : d(t, e);
            }),
        useControlledSetting: (t) => (0, i.bG)([o.A], () => c(t), [t], s),
    };
}
