v.d(g, { g: () => n });
var B = v(200651),
    t = v(120356),
    e = v.n(t),
    f = v(481060),
    r = v(510918),
    C = v(254925),
    h = v(602268);
function n(A) {
    let { selectedBadge: g, onBadgeClicked: v } = A;
    return (0, B.jsx)('div', {
        className: h.pickerGrid,
        children: C.QV.map((A) =>
            (0, B.jsx)(
                f.P3F,
                {
                    className: e()(h.pickerItem, { [h.pickerItemSelected]: A === g }),
                    onClick: () => (null == v ? void 0 : v(A)),
                    children: (0, B.jsx)(r.v, {
                        badge: A,
                        width: 32,
                        height: 32
                    })
                },
                A
            )
        )
    });
}
