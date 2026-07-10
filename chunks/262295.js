"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(173318);
let o = r.forwardRef((e, t) => {
    let {
        muted: n = !1,
        highlighted: r = !1,
        avatar: a,
        decorators: o,
        name: d,
        subText: c,
        avatarClassName: u,
        innerClassName: _,
        withDisplayNameStyles: E = !1,
    } = e;
    return (0, i.jsxs)("div", {
        ref: t,
        className: s()(l.Zp, _, { [l.SU]: n, [l.mr]: r }),
        children: [
            (0, i.jsx)("div", { className: s()(l.my, u), children: a }),
            (0, i.jsxs)("div", {
                className: s()(l.Qs, { [l.e8]: E }),
                children: [
                    (0, i.jsxs)("div", {
                        className: l.BG,
                        children: [(0, i.jsx)("div", { className: l.UU, children: d }), o],
                    }),
                    null != c ? (0, i.jsx)("div", { className: l.Sv, children: c }) : null,
                ],
            }),
        ],
    });
});
o.displayName = "AvatarWithText";
let d = o;
