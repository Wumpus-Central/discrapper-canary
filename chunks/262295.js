"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(195462);
let o = i.forwardRef((e, t) => {
    let {
        muted: n = !1,
        highlighted: i = !1,
        avatar: a,
        decorators: o,
        name: c,
        subText: u,
        avatarClassName: d,
        innerClassName: _,
        withDisplayNameStyles: p = !1,
    } = e;
    return (0, r.jsxs)("div", {
        ref: t,
        className: l()(s.Zp, _, { [s.SU]: n, [s.mr]: i }),
        children: [
            (0, r.jsx)("div", { className: l()(s.my, d), children: a }),
            (0, r.jsxs)("div", {
                className: l()(s.Qs, { [s.e8]: p }),
                children: [
                    (0, r.jsxs)("div", {
                        className: s.BG,
                        children: [(0, r.jsx)("div", { className: s.UU, children: c }), o],
                    }),
                    null != u ? (0, r.jsx)("div", { className: s.Sv, children: u }) : null,
                ],
            }),
        ],
    });
});
o.displayName = "AvatarWithText";
let c = o;
