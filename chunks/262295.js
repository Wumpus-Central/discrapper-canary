"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(195462);
let o = a.forwardRef((e, t) => {
    let {
        muted: n = !1,
        highlighted: a = !1,
        avatar: i,
        decorators: o,
        name: c,
        subText: d,
        avatarClassName: u,
        innerClassName: _,
        withDisplayNameStyles: p = !1,
    } = e;
    return (0, r.jsxs)("div", {
        ref: t,
        className: l()(s.Zp, _, { [s.SU]: n, [s.mr]: a }),
        children: [
            (0, r.jsx)("div", { className: l()(s.my, u), children: i }),
            (0, r.jsxs)("div", {
                className: l()(s.Qs, { [s.e8]: p }),
                children: [
                    (0, r.jsxs)("div", {
                        className: s.BG,
                        children: [(0, r.jsx)("div", { className: s.UU, children: c }), o],
                    }),
                    null != d ? (0, r.jsx)("div", { className: s.Sv, children: d }) : null,
                ],
            }),
        ],
    });
});
o.displayName = "AvatarWithText";
let c = o;
