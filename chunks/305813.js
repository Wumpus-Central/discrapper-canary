n.d(t, { Z: () => c });
var l = n(255367),
    s = n(481060),
    r = n(698282),
    i = n(388032),
    o = n(454507);
function c(e) {
    let { user: t, selectedFontId: n, selectedEffectId: c, selectedColors: a, onClose: d, className: u } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s.xBx, {
                separator: !1,
                className: o.modalHeaderPreview,
                children: (0, l.jsx)(s.olH, { onClick: d })
            }),
            (0, l.jsx)('div', {
                className: u,
                children: (0, l.jsx)(s.Text, {
                    variant: 'text-md/semibold',
                    children: i.intl.string(r.default.cAtmqa)
                })
            })
        ]
    });
}
