l.d(e, { A: () => c });
var s = l(627968),
    i = l(64700),
    d = l(503698),
    r = l.n(d),
    t = l(195462);
let n = i.forwardRef((a, e) => {
    let {
        muted: l = !1,
        highlighted: i = !1,
        avatar: d,
        decorators: n,
        name: c,
        subText: u,
        avatarClassName: m,
        innerClassName: o,
        withDisplayNameStyles: v = !1,
    } = a;
    return (0, s.jsxs)("div", {
        ref: e,
        className: r()(t.Zp, o, { [t.SU]: l, [t.mr]: i }),
        children: [
            (0, s.jsx)("div", { className: r()(t.my, m), children: d }),
            (0, s.jsxs)("div", {
                className: r()(t.Qs, { [t.e8]: v }),
                children: [
                    (0, s.jsxs)("div", {
                        className: t.BG,
                        children: [(0, s.jsx)("div", { className: t.UU, children: c }), n],
                    }),
                    null != u ? (0, s.jsx)("div", { className: t.Sv, children: u }) : null,
                ],
            }),
        ],
    });
});
n.displayName = "AvatarWithText";
let c = n;
