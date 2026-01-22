n.d(t, {
    A: () => c,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(948651);
let l = i.forwardRef((e, t) => {
    let {
        muted: n = !1,
        highlighted: i = !1,
        avatar: a,
        decorators: l,
        rightDecorators: c,
        name: u,
        subText: d,
        avatarClassName: f,
        innerClassName: p,
        nameClassName: _,
        subtextClassName: h,
        withDisplayNameStyles: m = !1,
    } = e;
    return (0, r.jsxs)("div", {
        ref: t,
        className: s()(o.Zp, p, {
            [o.SU]: n,
            [o.mr]: i,
            [o.Ij]: null != c,
        }),
        children: [
            (0, r.jsx)("div", {
                className: s()(o.my, f),
                children: a,
            }),
            (0, r.jsxs)("div", {
                className: s()(o.Qs, {
                    [o.e8]: m,
                }),
                children: [
                    (0, r.jsxs)("div", {
                        className: o.BG,
                        children: [
                            (0, r.jsxs)("div", {
                                className: o.R1,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: s()(o.UU, _),
                                        children: u,
                                    }),
                                    l,
                                ],
                            }),
                            c,
                        ],
                    }),
                    null != d
                        ? (0, r.jsx)("div", {
                              className: s()(o.Sv, h),
                              children: d,
                          })
                        : null,
                ],
            }),
        ],
    });
});
l.displayName = "AvatarWithText";
let c = l;
