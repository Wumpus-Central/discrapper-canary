n.d(t, { Z: () => o });
var r = n(200651),
    s = n(192379),
    i = n(618158);
function o(e) {
    let { children: t } = e,
        { preventIdle: n, allowIdle: o } = (0, i.Y)('popup');
    return s.useEffect(() => (n(), () => o()), [o, n]), (0, r.jsx)(r.Fragment, { children: t });
}
