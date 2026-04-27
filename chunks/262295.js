"use strict";
r.d(t, { A: () => c });
var n = r(627968),
    i = r(64700),
    a = r(503698),
    s = r.n(a),
    l = r(195462);
let o = i.forwardRef((e, t) => {
    let {
        muted: r = !1,
        highlighted: i = !1,
        avatar: a,
        decorators: o,
        name: c,
        subText: d,
        avatarClassName: u,
        innerClassName: _,
        withDisplayNameStyles: p = !1,
    } = e;
    return (0, n.jsxs)("div", {
        ref: t,
        className: s()(l.Zp, _, { [l.SU]: r, [l.mr]: i }),
        children: [
            (0, n.jsx)("div", { className: s()(l.my, u), children: a }),
            (0, n.jsxs)("div", {
                className: s()(l.Qs, { [l.e8]: p }),
                children: [
                    (0, n.jsxs)("div", {
                        className: l.BG,
                        children: [(0, n.jsx)("div", { className: l.UU, children: c }), o],
                    }),
                    null != d ? (0, n.jsx)("div", { className: l.Sv, children: d }) : null,
                ],
            }),
        ],
    });
});
o.displayName = "AvatarWithText";
let c = o;
