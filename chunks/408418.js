n.d(e, { r: () => o });
var r = n(17928),
    i = n(899847),
    l = n(842144);
function o(t, e, n, o) {
    var u, d;
    let { comparator: s = (t, e) => t === e } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        c = (r) => n(l.A.getSettings(r)?.[t]?.[e]);
    return {
        getControlledSetting: c,
        updateControlledSetting:
            ((u = c),
            (d = (n, r) =>
                null == n
                    ? Promise.resolve()
                    : i.Ay.updateTeenSettings(n, t, (t) => {
                          t[e] = o(r, t[e]);
                      })),
            function (t, e) {
                return "function" == typeof e ? d(t, e(u(t))) : d(t, e);
            }),
        useControlledSetting: (t) => (0, r.bG)([l.A], () => c(t), [t], s),
    };
}
