t.d(r, { g: () => c });
var n = t(255367),
    a = t(120356),
    i = t.n(a),
    s = t(481060),
    l = t(510918),
    o = t(254925),
    d = t(602268);
function c(e) {
    let { selectedBadge: r, onBadgeClicked: t } = e;
    return (0, n.jsx)('div', {
        className: d.pickerGrid,
        children: o.QV.map((e) =>
            (0, n.jsx)(
                s.P3F,
                {
                    className: i()(d.pickerItem, { [d.pickerItemSelected]: e === r }),
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
