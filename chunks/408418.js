n.d(t, { r: () => o });
var i = n(17928),
    l = n(899847),
    r = n(842144);
function o(e, t, n, o) {
    var d, s;
    let { comparator: u = (e, t) => e === t } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        a = (i) => n(r.A.getSettings(i)?.[e]?.[t]);
    return {
        getControlledSetting: a,
        updateControlledSetting:
            ((d = a),
            (s = (n, i) =>
                null == n
                    ? Promise.resolve()
                    : l.Ay.updateTeenSettings(n, e, (e) => {
                          e[t] = o(i, e[t]);
                      })),
            function (e, t) {
                return "function" == typeof t ? s(e, t(d(e))) : s(e, t);
            }),
        useControlledSetting: (e) => (0, i.bG)([r.A], () => a(e), [e], u),
    };
}
