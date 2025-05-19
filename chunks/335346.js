n.d(t, { V: () => o }), n(953529);
var r = n(255367);
n(73800);
var l = n(120356),
    a = n.n(l);
n(481060), n(937860);
var i = n(473012);
let o = (e) => {
    let { invertTail: t, leftOffset: n, rightOffset: l, tailSpineClassName: o, tailTargetInnerClassName: s } = e;
    return (0, r.jsxs)('div', {
        className: a()(i.tail, t ? i.tailPositionInverted : i.tailPositionNormal),
        style: {
            left: n,
            right: l
        },
        children: [
            (0, r.jsx)('div', { className: a()(i.tailSpine, o) }),
            (0, r.jsx)('div', {
                className: a()(i.tailTargetOuter, t ? i.tailTargetPositionInverted : i.tailTargetPositionNormal),
                children: (0, r.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: '8',
                    height: '8',
                    viewBox: '0 0 8 8',
                    fill: 'none',
                    children: (0, r.jsx)('circle', {
                        cx: '50%',
                        cy: '50%',
                        r: '3',
                        className: a()(i.tailTargetInner, s)
                    })
                })
            })
        ]
    });
};
