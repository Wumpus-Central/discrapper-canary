n.d(t, { c: () => o });
var r = n(442837),
    i = n(260722),
    a = n(473007);
function o(e, t, n, o) {
    let { comparator: l = (e, t) => e === t } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        c = (r) => {
            var i, o;
            return n(null == (o = a.Z.getSettings(r)) || null == (i = o[e]) ? void 0 : i[t]);
        },
        u = (e) => (0, r.e7)([a.Z], () => c(e), [e], l);
    return {
        getControlledSetting: c,
        updateControlledSetting: s(c, (n, r) =>
            null == n
                ? Promise.resolve()
                : i.ZP.updateTeenSettings(n, e, (e) => {
                      e[t] = o(r, e[t]);
                  }),
        ),
        useControlledSetting: u,
    };
}
function s(e, t) {
    return function (n, r) {
        return "function" == typeof r ? t(n, r(e(n))) : t(n, r);
    };
}
