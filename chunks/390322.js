n.d(t, { Z: () => s });
var r = n(73800),
    i = n(618158);
function s(e) {
    let { children: t } = e,
        { preventIdle: n, allowIdle: s } = (0, i.Y)('popup');
    return r.useEffect(() => (n(), () => s()), [s, n]), t;
}
