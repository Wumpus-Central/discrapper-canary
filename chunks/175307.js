n.d(t, { u: () => s });
var r = n(255367);
n(73800);
var i = n(780384),
    l = n(481060),
    a = n(410030),
    o = n(450552);
function s(e) {
    let { text: t, onClick: n } = e,
        s = (0, a.ZP)(),
        c = (0, i.wj)(s);
    return (0, r.jsxs)(l.zxk, {
        size: 'medium',
        color: c ? l.Ttl.TRANSPARENT : l.Ttl.WHITE,
        className: o.button,
        onClick: n,
        innerClassName: o.innerButton,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-sm/semibold',
                color: 'header-primary',
                children: t
            }),
            (0, r.jsx)(l.Gr1, {
                size: 'sm',
                color: l.TVs.colors.HEADER_PRIMARY
            })
        ]
    });
}
