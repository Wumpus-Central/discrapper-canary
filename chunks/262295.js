l.d(t, { A: () => o });
var r = l(627968),
    a = l(64700),
    s = l(503698),
    n = l.n(s),
    i = l(173318);
let c = a.forwardRef((e, t) => {
    let {
        muted: l = !1,
        highlighted: a = !1,
        avatar: s,
        decorators: c,
        name: o,
        subText: u,
        avatarClassName: d,
        innerClassName: m,
        withDisplayNameStyles: A = !1,
    } = e;
    return (0, r.jsxs)("div", {
        ref: t,
        className: n()(i.Zp, m, { [i.SU]: l, [i.mr]: a }),
        children: [
            (0, r.jsx)("div", { className: n()(i.my, d), children: s }),
            (0, r.jsxs)("div", {
                className: n()(i.Qs, { [i.e8]: A }),
                children: [
                    (0, r.jsxs)("div", {
                        className: i.BG,
                        children: [(0, r.jsx)("div", { className: i.UU, children: o }), c],
                    }),
                    null != u ? (0, r.jsx)("div", { className: i.Sv, children: u }) : null,
                ],
            }),
        ],
    });
});
c.displayName = "AvatarWithText";
let o = c;
