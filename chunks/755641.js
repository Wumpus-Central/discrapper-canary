t.d(n, { g: () => c });
var r = t(255367),
    i = t(120356),
    a = t.n(i),
    l = t(481060),
    s = t(510918),
    d = t(254925),
    o = t(602268);
function c(e) {
    let { selectedBadge: n, onBadgeClicked: t } = e;
    return (0, r.jsx)('div', {
        className: o.pickerGrid,
        children: d.QV.map((e) =>
            (0, r.jsx)(
                l.P3F,
                {
                    className: a()(o.pickerItem, { [o.pickerItemSelected]: e === n }),
                    onClick: () => (null == t ? void 0 : t(e)),
                    children: (0, r.jsx)(s.v, {
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
