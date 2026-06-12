n.d(t, { r: () => o });
var r = n(17928),
    l = n(899847),
    i = n(842144);
function o(e, t, n, o) {
    var u, d;
    let { comparator: s = (e, t) => e === t } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        a = (r) => n(i.A.getSettings(r)?.[e]?.[t]);
    return {
        getControlledSetting: a,
        updateControlledSetting:
            ((u = a),
            (d = (n, r) =>
                null == n
                    ? Promise.resolve()
                    : l.Ay.updateTeenSettings(n, e, (e) => {
                          e[t] = o(r, e[t]);
                      })),
            function (e, t) {
                return "function" == typeof t ? d(e, t(u(e))) : d(e, t);
            }),
        useControlledSetting: (e) => (0, r.bG)([i.A], () => a(e), [e], s),
    };
}
