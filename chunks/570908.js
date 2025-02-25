n.d(t, { Z: () => c });
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(501401);
let s = r.forwardRef((e, t) => {
    let { selected: n, muted: r = !1, highlighted: i = !1, wrapContent: s = !1, avatar: c, decorators: u, name: d, subText: E, avatarClassName: f, innerClassName: C } = e;
    return (0, l.jsxs)('div', {
        ref: t,
        className: a()(C, o.layout, {
            [o.muted]: !n && r,
            [o.highlighted]: i,
            [o.wrappedLayout]: s
        }),
        children: [
            (0, l.jsx)('div', {
                className: a()(o.avatar, f),
                children: c
            }),
            (0, l.jsxs)('div', {
                className: o.content,
                children: [
                    (0, l.jsxs)('div', {
                        className: o.nameAndDecorators,
                        children: [
                            (0, l.jsx)('div', {
                                className: a()(o.name, { [o.wrappedName]: s }),
                                children: d
                            }),
                            u
                        ]
                    }),
                    null != E
                        ? (0, l.jsx)('div', {
                              className: o.subText,
                              children: E
                          })
                        : null
                ]
            })
        ]
    });
});
s.displayName = 'AvatarWithText';
let c = s;
