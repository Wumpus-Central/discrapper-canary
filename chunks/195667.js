n.d(t, {
    r: () => s,
});
var r = n(311907),
    i = n(899847),
    a = n(842144);

function s(e, t, n, s) {
    let { comparator: l = (e, t) => e === t } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        c = (r) => {
            var i, s;
            return n(null == (s = a.A.getSettings(r)) || null == (i = s[e]) ? void 0 : i[t]);
        },
        u = (e) => (0, r.bG)([a.A], () => c(e), [e], l);
    return {
        getControlledSetting: c,
        updateControlledSetting: o(c, (n, r) =>
            null == n
                ? Promise.resolve()
                : i.Ay.updateTeenSettings(n, e, (e) => {
                      e[t] = s(r, e[t]);
                  }),
        ),
        useControlledSetting: u,
    };
}

function o(e, t) {
    return function (n, r) {
        return "function" == typeof r ? t(n, r(e(n))) : t(n, r);
    };
}
