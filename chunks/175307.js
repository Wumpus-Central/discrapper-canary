n.d(t, { u: () => s });
var r = n(200651);
n(192379);
var i = n(780384),
    l = n(481060),
    o = n(410030),
    a = n(405782);
function s(e) {
    let { text: t, onClick: n } = e,
        s = (0, o.ZP)(),
        c = (0, i.wj)(s);
    return (0, r.jsxs)(l.zxk, {
        size: 'medium',
        color: c ? l.Ttl.TRANSPARENT : l.Ttl.WHITE,
        className: a.button,
        onClick: n,
        innerClassName: a.innerButton,
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
