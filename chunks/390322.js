n.d(t, { Z: () => i });
var r = n(192379),
    s = n(618158);
function i(e) {
    let { children: t } = e,
        { preventIdle: n, allowIdle: i } = (0, s.Y)('popup');
    return r.useEffect(() => (n(), () => i()), [i, n]), t;
}
