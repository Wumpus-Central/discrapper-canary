n.d(t, { V: () => s });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(557766);
let s = (e) => {
    let { invertTail: t, leftOffset: n, rightOffset: i, tailSpineClassName: s, tailTargetInnerClassName: l } = e;
    return (0, r.jsxs)("div", {
        className: a()(o.tail, t ? o.tailPositionInverted : o.tailPositionNormal),
        style: {
            left: n,
            right: i,
        },
        children: [
            (0, r.jsx)("div", { className: a()(o.tailSpine, s) }),
            (0, r.jsx)("div", {
                className: a()(o.tailTargetOuter, t ? o.tailTargetPositionInverted : o.tailTargetPositionNormal),
                children: (0, r.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "8",
                    height: "8",
                    viewBox: "0 0 8 8",
                    fill: "none",
                    children: (0, r.jsx)("circle", {
                        cx: "50%",
                        cy: "50%",
                        r: "3",
                        className: a()(o.tailTargetInner, l),
                    }),
                }),
            }),
        ],
    });
};
