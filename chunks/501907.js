r.d(t, { J: () => a });
var n = r(366632),
    i = r(123680),
    o = r(582128);
function a(e = {}) {
    let { locale: t } = (0, n.Y)();
    return (0, o.useMemo)(() => new (0, i.K)(t, e), [t, e]);
}
