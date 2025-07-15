l.d(t, { Z: () => c });
var n = l(255367),
    s = l(481060),
    r = l(698282),
    i = l(388032),
    o = l(454507);
function c(e) {
    let { user: t, selectedFontId: l, selectedEffectId: c, selectedColors: a, onClose: d, className: u } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(s.xBx, {
                separator: !1,
                className: o.modalHeaderPreview,
                children: (0, n.jsx)(s.olH, { onClick: d })
            }),
            (0, n.jsx)('div', {
                className: u,
                children: (0, n.jsx)(s.Text, {
                    variant: 'text-md/semibold',
                    children: i.intl.string(r.default.cAtmqa)
                })
            })
        ]
    });
}
