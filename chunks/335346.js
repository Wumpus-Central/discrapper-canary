(n.d(t, { V: () => a }), n(953529));
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r);
(n(481060), n(937860));
var l = n(973792);
let a = (e) => {
    let { invertTail: t, leftOffset: n, rightOffset: r, tailSpineClassName: a, tailTargetInnerClassName: o } = e;
    return (0, i.jsxs)('div', {
        className: s()(l.tail, t ? l.tailPositionInverted : l.tailPositionNormal),
        style: {
            left: n,
            right: r
        },
        children: [
            (0, i.jsx)('div', { className: s()(l.tailSpine, a) }),
            (0, i.jsx)('div', {
                className: s()(l.tailTargetOuter, t ? l.tailTargetPositionInverted : l.tailTargetPositionNormal),
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
                        className: s()(l.tailTargetInner, o)
                    })
                })
            })
        ]
    });
};
