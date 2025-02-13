n.d(t, { Z: () => m });
var a = n(200651),
    l = n(192379),
    r = n(120356),
    i = n.n(r),
    o = n(263568),
    s = n(481060),
    c = n(388032),
    u = n(620619);
function d(e) {
    let { label: t, isSelected: n, onClick: l, children: r } = e,
        o = (0, s.xUy)({
            isSelected: n,
            label: t
        });
    return (0, a.jsx)(s.P3F, {
        ...o,
        onClick: l,
        className: i()(u.option, n && u.optionSelected),
        children: r
    });
}
let m = function (e) {
    let { selectedLayoutType: t, onSelectedLayoutType: n } = e,
        r = (0, s.arW)({ orientation: 'horizontal' }),
        i = l.useMemo(
            () => [
                {
                    name: o.C.DEFAULT,
                    label: c.intl.string(c.t.GhK6X1),
                    icon: s.jE$
                },
                {
                    name: o.C.IMAGE_ONLY_ANSWERS,
                    label: c.intl.string(c.t.an4GKS),
                    icon: s.XBm
                }
            ],
            []
        ),
        m = (e) => {
            n(e);
        };
    return (0, a.jsx)('div', {
        className: u.container,
        'aria-label': c.intl.string(c.t.e9hWx8),
        ...r,
        children: i.map((e) => {
            let n = e.icon;
            return (0, a.jsx)(
                d,
                {
                    label: e.label,
                    isSelected: e.name === t,
                    onClick: () => m(e.name),
                    children: (0, a.jsx)(n, { className: u.icon })
                },
                e.name
            );
        })
    });
};
