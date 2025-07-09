n.d(t, { u: () => c });
var r = n(255367);
n(73800);
var i = n(780384),
    l = n(755721),
    a = n(481060),
    o = n(410030),
    s = n(450552);
function c(e) {
    let { text: t, onClick: n } = e,
        c = (0, o.ZP)(),
        u = (0, i.wj)(c);
    return (0, r.jsxs)(l.zx, {
        size: 'medium',
        color: u ? l.Tt.TRANSPARENT : l.Tt.WHITE,
        className: s.button,
        onClick: n,
        innerClassName: s.innerButton,
        children: [
            (0, r.jsx)(a.Text, {
                variant: 'text-sm/semibold',
                color: 'header-primary',
                children: t
            }),
            (0, r.jsx)(a.Gr1, {
                size: 'sm',
                color: a.TVs.colors.HEADER_PRIMARY
            })
        ]
    });
}
