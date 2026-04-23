"use strict";
n.d(t, { A: () => o });
var a = n(627968),
    i = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(173318);
let d = i.forwardRef((e, t) => {
    let {
        muted: n = !1,
        highlighted: i = !1,
        avatar: r,
        decorators: d,
        name: o,
        subText: c,
        avatarClassName: u,
        innerClassName: _,
        withDisplayNameStyles: m = !1,
    } = e;
    return (0, a.jsxs)("div", {
        ref: t,
        className: l()(s.Zp, _, { [s.SU]: n, [s.mr]: i }),
        children: [
            (0, a.jsx)("div", { className: l()(s.my, u), children: r }),
            (0, a.jsxs)("div", {
                className: l()(s.Qs, { [s.e8]: m }),
                children: [
                    (0, a.jsxs)("div", {
                        className: s.BG,
                        children: [(0, a.jsx)("div", { className: s.UU, children: o }), d],
                    }),
                    null != c ? (0, a.jsx)("div", { className: s.Sv, children: c }) : null,
                ],
            }),
        ],
    });
});
d.displayName = "AvatarWithText";
let o = d;
