r.d(n, { g: () => c });
var t = r(255367),
    a = r(120356),
    i = r.n(a),
    s = r(481060),
    l = r(510918),
    o = r(254925),
    d = r(602268);
function c(e) {
    let { selectedBadge: n, onBadgeClicked: r } = e;
    return (0, t.jsx)('div', {
        className: d.pickerGrid,
        children: o.QV.map((e) =>
            (0, t.jsx)(
                s.P3F,
                {
                    className: i()(d.pickerItem, { [d.pickerItemSelected]: e === n }),
                    onClick: () => (null == r ? void 0 : r(e)),
                    children: (0, t.jsx)(l.v, {
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
