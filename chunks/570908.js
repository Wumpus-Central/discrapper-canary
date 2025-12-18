n.d(t, { Z: () => c });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(226462);
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
        nameClassName: p,
        subtextClassName: _,
        withDisplayNameStyles: m = !1,
        fullWidth: h = !1,
    } = e;
    return (0, r.jsxs)("div", {
        ref: t,
        className: o()(s.layout, f, {
            [s.muted]: n,
            [s.highlighted]: i,
            [s.fullWidth]: h,
        }),
        children: [
            (0, r.jsx)("div", {
                className: o()(s.avatar, d),
                children: a,
            }),
            (0, r.jsxs)("div", {
                className: o()(s.content, { [s.withDisplayNameStyles]: m }),
                children: [
                    (0, r.jsxs)("div", {
                        className: s.nameAndDecorators,
                        children: [
                            (0, r.jsx)("div", {
                                className: o()(s.name, p),
                                children: c,
                            }),
                            l,
                        ],
                    }),
                    null != u
                        ? (0, r.jsx)("div", {
                              className: o()(s.subText, _),
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
