n.d(t, { u: () => o });
var i = n(200651);
n(192379);
var l = n(780384),
    r = n(481060),
    a = n(410030),
    s = n(656867);
function o(e) {
    let { text: t, onClick: n } = e,
        o = (0, a.ZP)(),
        c = (0, l.wj)(o);
    return (0, i.jsxs)(r.zxk, {
        size: 'medium',
        color: c ? r.Ttl.TRANSPARENT : r.Ttl.WHITE,
        className: s.button,
        onClick: n,
        innerClassName: s.innerButton,
        children: [
            (0, i.jsx)(r.Text, {
                variant: 'text-sm/semibold',
                color: 'header-primary',
                children: t
            }),
            (0, i.jsx)(r.Gr1, {
                size: 'sm',
                color: r.TVs.colors.HEADER_PRIMARY
            })
        ]
    });
}
