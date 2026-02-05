n.d(t, { r: () => a });
var i = n(311907),
    s = n(899847),
    r = n(842144);
function a(e, t, n, a) {
    var l, o;
    let { comparator: c = (e, t) => e === t } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        d = (i) => n(r.A.getSettings(i)?.[e]?.[t]);
    return {
        getControlledSetting: d,
        updateControlledSetting:
            ((l = d),
            (o = (n, i) =>
                null == n
                    ? Promise.resolve()
                    : s.Ay.updateTeenSettings(n, e, (e) => {
                          e[t] = a(i, e[t]);
                      })),
            function (e, t) {
                return "function" == typeof t ? o(e, t(l(e))) : o(e, t);
            }),
        useControlledSetting: (e) => (0, i.bG)([r.A], () => d(e), [e], c),
    };
}
