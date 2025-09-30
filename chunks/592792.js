n.d(t, { c: () => o });
var r = n(442837),
    i = n(260722),
    a = n(473007);
function o(e, t, n, o) {
    let l = (r) => {
            var i, o;
            return n(null == (o = a.Z.getSettings(r)) || null == (i = o[e]) ? void 0 : i[t]);
        },
        c = (e) => (0, r.e7)([a.Z], () => l(e));
    return {
        getControlledSetting: l,
        updateControlledSetting: s(l, (n, r) =>
            null == n
                ? Promise.resolve()
                : i.ZP.updateTeenSettings(n, e, (e) => {
                      e[t] = o(r, e[t]);
                  }),
        ),
        useControlledSetting: c,
    };
}
function s(e, t) {
    return function (n, r) {
        return "function" == typeof r ? t(n, r(e(n))) : t(n, r);
    };
}
