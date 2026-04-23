n.d(t, { r: () => u });
var l = n(17928),
    r = n(899847),
    i = n(842144);
function u(e, t, n, u) {
    var o, d;
    let { comparator: s = (e, t) => e === t } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        a = (l) => n(i.A.getSettings(l)?.[e]?.[t]);
    return {
        getControlledSetting: a,
        updateControlledSetting:
            ((o = a),
            (d = (n, l) =>
                null == n
                    ? Promise.resolve()
                    : r.Ay.updateTeenSettings(n, e, (e) => {
                          e[t] = u(l, e[t]);
                      })),
            function (e, t) {
                return "function" == typeof t ? d(e, t(o(e))) : d(e, t);
            }),
        useControlledSetting: (e) => (0, l.bG)([i.A], () => a(e), [e], s),
    };
}
