n.d(t, { g: () => c });
var r = n(255367),
    i = n(120356),
    a = n.n(i),
    s = n(481060),
    l = n(510918),
    d = n(254925),
    o = n(602268);
function c(e) {
    let { selectedBadge: t, onBadgeClicked: n } = e;
    return (0, r.jsx)('div', {
        className: o.pickerGrid,
        children: d.QV.map((e) =>
            (0, r.jsx)(
                s.P3F,
                {
                    className: a()(o.pickerItem, { [o.pickerItemSelected]: e === t }),
                    onClick: () => (null == n ? void 0 : n(e)),
                    children: (0, r.jsx)(l.v, {
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
