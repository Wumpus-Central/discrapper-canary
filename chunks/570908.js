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
        rightDecorators: c,
        name: u,
        subText: d,
        avatarClassName: f,
        innerClassName: p,
        nameClassName: _,
        subtextClassName: m,
        withDisplayNameStyles: h = !1,
    } = e;
    return (0, r.jsxs)("div", {
        ref: t,
        className: o()(s.layout, p, {
            [s.muted]: n,
            [s.highlighted]: i,
            [s.fullWidth]: null != c,
        }),
        children: [
            (0, r.jsx)("div", {
                className: o()(s.avatar, f),
                children: a,
            }),
            (0, r.jsxs)("div", {
                className: o()(s.content, { [s.withDisplayNameStyles]: h }),
                children: [
                    (0, r.jsxs)("div", {
                        className: s.nameAndDecorators,
                        children: [
                            (0, r.jsxs)("div", {
                                className: s.leftName,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: o()(s.name, _),
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
                              className: o()(s.subText, m),
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
