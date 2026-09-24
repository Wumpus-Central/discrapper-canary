n.d(t, { e: () => d });
var a = n(477900),
    l = n(582128),
    r = n(821609),
    i = n(688810),
    s = n(609174),
    u = n(721610),
    c = n(686320),
    o = n(406980);
function d(e) {
    let { variant: t = "primary" } = e,
        n = (0, s.Y_)(),
        { analyticsLocations: d } = (0, i.Ay)(),
        { picker: f } = l.useContext(u.$),
        { label: p, icon: m } = (0, c.$)(f?.action),
        v = l.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), null != f)
                    ? f.onPick(n)
                    : (0, o.K)([n], { analyticsLocations: d });
            },
            [n, d, f],
        );
    return (0, a.jsx)(r.$, { onClick: v, icon: m, variant: t, size: "sm", text: p, fullWidth: !0 });
}
