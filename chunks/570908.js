n.d(t, { Z: () => c });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(462991);
let l = i.forwardRef((e, t) => {
    let { muted: n = !1, highlighted: i = !1, avatar: o, decorators: l, name: c, subText: u, avatarClassName: d, innerClassName: f } = e;
    return (0, r.jsxs)('div', {
        ref: t,
        className: a()(f, s.layout, {
            [s.muted]: n,
            [s.highlighted]: i
        }),
        children: [
            (0, r.jsx)('div', {
                className: a()(s.avatar, d),
                children: o
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
