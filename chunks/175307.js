n.d(t, {
    u: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(780384),
    l = n(481060),
    a = n(410030),
    s = n(656867);
function o(e) {
    let { text: t, onClick: n } = e,
        o = (0, a.ZP)(),
        c = (0, r.wj)(o);
    return (0, i.jsxs)(l.Button, {
        size: 'medium',
        color: c ? l.ButtonColors.TRANSPARENT : l.ButtonColors.WHITE,
        className: s.button,
        onClick: n,
        innerClassName: s.innerButton,
        children: [
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/semibold',
                color: 'header-primary',
                children: t
            }),
            (0, i.jsx)(l.LinkExternalSmallIcon, {
                size: 'sm',
                color: l.tokens.colors.HEADER_PRIMARY
            })
        ]
    });
}
