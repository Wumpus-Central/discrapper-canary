n.d(t, { Z: () => o });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(600164),
    a = n(180546);
function o(e) {
    let { icon: t, onClick: n, label: o } = e;
    return (0, r.jsx)(i.zxk, {
        look: i.zxk.Looks.BLANK,
        size: i.zxk.Sizes.MIN,
        className: a.button,
        onClick: n,
        children: (0, r.jsxs)(l.Z, {
            align: l.Z.Align.CENTER,
            children: [
                (0, r.jsx)('div', {
                    className: a.buttonIcon,
                    children: t
                }),
                (0, r.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    color: 'none',
                    children: o
                })
            ]
        })
    });
}
