n.d(t, { Z: () => c });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(462991);
let l = i.forwardRef((e, t) => {
    let { muted: n = !1, highlighted: i = !1, avatar: a, decorators: l, name: c, subText: u, avatarClassName: d, innerClassName: f } = e;
    return (0, r.jsxs)('div', {
        ref: t,
        className: o()(f, s.layout, {
            [s.muted]: n,
            [s.highlighted]: i
        }),
        children: [
            (0, r.jsx)('div', {
                className: o()(s.avatar, d),
                children: a
            }),
            (0, r.jsxs)('div', {
                className: s.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: s.nameAndDecorators,
                        children: [
                            (0, r.jsx)('div', {
                                className: s.name,
                                children: c
                            }),
                            l
                        ]
                    }),
                    null != u
                        ? (0, r.jsx)('div', {
                              className: s.subText,
                              children: u
                          })
                        : null
                ]
            })
        ]
    });
});
l.displayName = 'AvatarWithText';
let c = l;
