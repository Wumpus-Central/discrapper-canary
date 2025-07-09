(n.d(t, { V: () => l }), n(953529));
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r);
(n(755721), n(481060), n(937860));
var a = n(973792);
let l = (e) => {
    let { invertTail: t, leftOffset: n, rightOffset: r, tailSpineClassName: l, tailTargetInnerClassName: o } = e;
    return (0, i.jsxs)('div', {
        className: s()(a.tail, t ? a.tailPositionInverted : a.tailPositionNormal),
        style: {
            left: n,
            right: r
        },
        children: [
            (0, i.jsx)('div', { className: s()(a.tailSpine, l) }),
            (0, i.jsx)('div', {
                className: s()(a.tailTargetOuter, t ? a.tailTargetPositionInverted : a.tailTargetPositionNormal),
                children: (0, i.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: '8',
                    height: '8',
                    viewBox: '0 0 8 8',
                    fill: 'none',
                    children: (0, i.jsx)('circle', {
                        cx: '50%',
                        cy: '50%',
                        r: '3',
                        className: s()(a.tailTargetInner, o)
                    })
                })
            })
        ]
    });
};
