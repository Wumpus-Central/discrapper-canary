n.d(t, { Z: () => c });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(462991);
let l = i.forwardRef((e, t) => {
    let { selected: n, muted: i = !1, highlighted: o = !1, wrapContent: l = !1, avatar: c, decorators: u, name: d, subText: f, avatarClassName: _, innerClassName: p } = e;
    return (0, r.jsxs)('div', {
        ref: t,
        className: a()(p, s.layout, {
            [s.muted]: !n && i,
            [s.highlighted]: o,
            [s.wrappedLayout]: l
        }),
        children: [
            (0, r.jsx)('div', {
                className: a()(s.avatar, _),
                children: c
            }),
            (0, r.jsxs)('div', {
                className: s.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: s.nameAndDecorators,
                        children: [
                            (0, r.jsx)('div', {
                                className: a()(s.name, { [s.wrappedName]: l }),
                                children: d
                            }),
                            u
                        ]
                    }),
                    null != f
                        ? (0, r.jsx)('div', {
                              className: s.subText,
                              children: f
                          })
                        : null
                ]
            })
        ]
    });
});
l.displayName = 'AvatarWithText';
let c = l;
