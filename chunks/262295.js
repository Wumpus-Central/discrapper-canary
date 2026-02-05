"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(948651);
let l = i.forwardRef((e, t) => {
    let {
        muted: n = !1,
        highlighted: i = !1,
        avatar: a,
        decorators: l,
        name: u,
        subText: c,
        avatarClassName: d,
        innerClassName: _,
        withDisplayNameStyles: f = !1,
    } = e;
    return (0, r.jsxs)("div", {
        ref: t,
        className: s()(o.Zp, _, { [o.SU]: n, [o.mr]: i }),
        children: [
            (0, r.jsx)("div", { className: s()(o.my, d), children: a }),
            (0, r.jsxs)("div", {
                className: s()(o.Qs, { [o.e8]: f }),
                children: [
                    (0, r.jsxs)("div", {
                        className: o.BG,
                        children: [(0, r.jsx)("div", { className: o.UU, children: u }), l],
                    }),
                    null != c ? (0, r.jsx)("div", { className: o.Sv, children: c }) : null,
                ],
            }),
        ],
    });
});
l.displayName = "AvatarWithText";
let u = l;
