"use strict";
r.d(t, { A: () => c });
var n = r(627968),
    i = r(64700),
    a = r(503698),
    l = r.n(a),
    s = r(195462);
let o = i.forwardRef((e, t) => {
    let {
        muted: r = !1,
        highlighted: i = !1,
        avatar: a,
        decorators: o,
        name: c,
        subText: u,
        avatarClassName: d,
        innerClassName: _,
        withDisplayNameStyles: p = !1,
    } = e;
    return (0, n.jsxs)("div", {
        ref: t,
        className: l()(s.Zp, _, { [s.SU]: r, [s.mr]: i }),
        children: [
            (0, n.jsx)("div", { className: l()(s.my, d), children: a }),
            (0, n.jsxs)("div", {
                className: l()(s.Qs, { [s.e8]: p }),
                children: [
                    (0, n.jsxs)("div", {
                        className: s.BG,
                        children: [(0, n.jsx)("div", { className: s.UU, children: c }), o],
                    }),
                    null != u ? (0, n.jsx)("div", { className: s.Sv, children: u }) : null,
                ],
            }),
        ],
    });
});
o.displayName = "AvatarWithText";
let c = o;
