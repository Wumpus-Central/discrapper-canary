n.d(t, { Z: () => o });
var r = n(192379),
    s = n(618158);
function o(e) {
    let { children: t } = e,
        { preventIdle: n, allowIdle: o } = (0, s.Y)('popup');
    return r.useEffect(() => (n(), () => o()), [o, n]), t;
}
