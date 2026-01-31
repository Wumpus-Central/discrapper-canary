n.d(t, {
    A: () => c,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(948651);
let l = i.forwardRef((e, t) => {
    let {
        muted: n = !1,
        highlighted: i = !1,
        avatar: a,
        decorators: l,
        name: c,
        subText: u,
        avatarClassName: d,
        innerClassName: f,
        withDisplayNameStyles: p = !1,
    } = e;
    return (0, r.jsxs)("div", {
        ref: t,
        className: o()(s.Zp, f, {
            [s.SU]: n,
            [s.mr]: i,
        }),
        children: [
            (0, r.jsx)("div", {
                className: o()(s.my, d),
                children: a,
            }),
            (0, r.jsxs)("div", {
                className: o()(s.Qs, {
                    [s.e8]: p,
                }),
                children: [
                    (0, r.jsxs)("div", {
                        className: s.BG,
                        children: [
                            (0, r.jsx)("div", {
                                className: s.UU,
                                children: c,
                            }),
                            l,
                        ],
                    }),
                    null != u
                        ? (0, r.jsx)("div", {
                              className: s.Sv,
                              children: u,
                          })
                        : null,
                ],
            }),
        ],
    });
});
l.displayName = "AvatarWithText";
let c = l;
