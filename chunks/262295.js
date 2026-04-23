n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(195462);
let o = l.forwardRef((e, t) => {
    let {
        muted: n = !1,
        highlighted: l = !1,
        avatar: s,
        decorators: o,
        name: d,
        subText: c,
        avatarClassName: u,
        innerClassName: h,
        withDisplayNameStyles: A = !1,
    } = e;
    return (0, i.jsxs)("div", {
        ref: t,
        className: a()(r.Zp, h, { [r.SU]: n, [r.mr]: l }),
        children: [
            (0, i.jsx)("div", { className: a()(r.my, u), children: s }),
            (0, i.jsxs)("div", {
                className: a()(r.Qs, { [r.e8]: A }),
                children: [
                    (0, i.jsxs)("div", {
                        className: r.BG,
                        children: [(0, i.jsx)("div", { className: r.UU, children: d }), o],
                    }),
                    null != c ? (0, i.jsx)("div", { className: r.Sv, children: c }) : null,
                ],
            }),
        ],
    });
});
o.displayName = "AvatarWithText";
let d = o;
