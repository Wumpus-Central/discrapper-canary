n.d(t, { Z: () => a });
var s = n(200651),
    i = n(192379),
    l = n(618158);
function a(e) {
    let { children: t } = e,
        { preventIdle: n, allowIdle: a } = (0, l.Y)('popup');
    return i.useEffect(() => (n(), () => a()), [a, n]), (0, s.jsx)(s.Fragment, { children: t });
}
