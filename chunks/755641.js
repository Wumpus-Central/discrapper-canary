t.d(r, { g: () => d });
var n = t(255367),
    i = t(120356),
    a = t.n(i),
    s = t(481060),
    l = t(510918),
    o = t(254925),
    c = t(602268);
function d(e) {
    let { selectedBadge: r, onBadgeClicked: t } = e;
    return (0, n.jsx)('div', {
        className: c.pickerGrid,
        children: o.QV.map((e) =>
            (0, n.jsx)(
                s.P3F,
                {
                    className: a()(c.pickerItem, { [c.pickerItemSelected]: e === r }),
                    onClick: () => (null == t ? void 0 : t(e)),
                    children: (0, n.jsx)(l.v, {
                        badge: e,
                        width: 32,
                        height: 32
                    })
                },
                e
            )
        )
    });
}
