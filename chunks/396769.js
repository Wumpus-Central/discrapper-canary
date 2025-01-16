n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(600164),
    a = n(242289);
function s(e) {
    let { icon: t, onClick: n, label: s } = e;
    return (0, i.jsx)(l.Button, {
        look: l.Button.Looks.BLANK,
        size: l.Button.Sizes.MIN,
        className: a.button,
        onClick: n,
        children: (0, i.jsxs)(r.Z, {
            align: r.Z.Align.CENTER,
            children: [
                (0, i.jsx)('div', {
                    className: a.buttonIcon,
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
