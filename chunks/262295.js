a.d(t, { A: () => c });
var n = a(627968),
    l = a(64700),
    r = a(503698),
    i = a.n(r),
    s = a(195462);
let o = l.forwardRef((e, t) => {
    let {
        muted: a = !1,
        highlighted: l = !1,
        avatar: r,
        decorators: o,
        name: c,
        subText: d,
        avatarClassName: u,
        innerClassName: h,
        withDisplayNameStyles: p = !1,
    } = e;
    return (0, n.jsxs)("div", {
        ref: t,
        className: i()(s.Zp, h, { [s.SU]: a, [s.mr]: l }),
        children: [
            (0, n.jsx)("div", { className: i()(s.my, u), children: r }),
            (0, n.jsxs)("div", {
                className: i()(s.Qs, { [s.e8]: p }),
                children: [
                    (0, n.jsxs)("div", {
                        className: s.BG,
                        children: [(0, n.jsx)("div", { className: s.UU, children: c }), o],
                    }),
                    null != d ? (0, n.jsx)("div", { className: s.Sv, children: d }) : null,
                ],
            }),
        ],
    });
});
o.displayName = "AvatarWithText";
let c = o;
