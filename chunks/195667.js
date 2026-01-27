n.d(t, {
    r: () => s,
});
var r = n(311907),
    i = n(899847),
    l = n(842144);

function s(e, t, n, s) {
    var a, o;
    let { comparator: c = (e, t) => e === t } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        d = (r) => {
            var i, s;
            return n(null == (s = l.A.getSettings(r)) || null == (i = s[e]) ? void 0 : i[t]);
        };
    return {
        getControlledSetting: d,
        updateControlledSetting:
            ((a = d),
            (o = (n, r) =>
                null == n
                    ? Promise.resolve()
                    : i.Ay.updateTeenSettings(n, e, (e) => {
                          e[t] = s(r, e[t]);
                      })),
            function (e, t) {
                return "function" == typeof t ? o(e, t(a(e))) : o(e, t);
            }),
        useControlledSetting: (e) => (0, r.bG)([l.A], () => d(e), [e], c),
    };
}
