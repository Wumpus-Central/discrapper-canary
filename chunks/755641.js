B.d(g, { g: () => I });
var C = B(200651),
    Q = B(120356),
    w = B.n(Q),
    D = B(481060),
    f = B(550271),
    E = B(254925),
    v = B(602268);
function I(A) {
    let { selectedBadge: g, onBadgeClicked: B } = A;
    return (0, C.jsx)('div', {
        className: v.pickerGrid,
        children: E.QV.map((A) =>
            (0, C.jsx)(
                D.P3F,
                {
                    className: w()(v.pickerItem, { [v.pickerItemSelected]: A === g }),
                    onClick: () => (null == B ? void 0 : B(A)),
                    children: (0, C.jsx)(f.A, {
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
