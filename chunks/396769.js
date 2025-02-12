n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(600164),
    r = n(852386);
function s(e) {
    let { icon: t, onClick: n, label: s } = e;
    return (0, i.jsx)(l.zxk, {
        look: l.zxk.Looks.BLANK,
        size: l.zxk.Sizes.MIN,
        className: r.button,
        onClick: n,
        children: (0, i.jsxs)(a.Z, {
            align: a.Z.Align.CENTER,
            children: [
                (0, i.jsx)('div', {
                    className: r.buttonIcon,
                    children: t
                }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    color: 'none',
                    children: s
                })
            ]
        })
    });
}
