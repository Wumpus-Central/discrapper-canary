n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(600164),
    o = n(180546);
function a(e) {
    let { icon: t, onClick: n, label: a } = e;
    return (0, r.jsx)(i.zxk, {
        look: i.zxk.Looks.BLANK,
        size: i.zxk.Sizes.MIN,
        className: o.button,
        onClick: n,
        children: (0, r.jsxs)(l.Z, {
            align: l.Z.Align.CENTER,
            children: [
                (0, r.jsx)('div', {
                    className: o.buttonIcon,
                    children: t
                }),
                (0, r.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    color: 'none',
                    children: a
                })
            ]
        })
    });
}
