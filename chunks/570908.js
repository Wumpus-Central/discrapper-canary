n.d(t, { Z: () => o });
var l = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    a = n(501401);
function o(e) {
    let { selected: t, muted: n = !1, highlighted: r = !1, wrapContent: o = !1, avatar: s, decorators: c, name: u, subText: d, avatarClassName: E, innerClassName: h } = e;
    return (0, l.jsxs)('div', {
        className: i()(h, a.layout, {
            [a.muted]: !t && n,
            [a.highlighted]: r,
            [a.wrappedLayout]: o
        }),
        children: [
            (0, l.jsx)('div', {
                className: i()(a.avatar, E),
                children: s
            }),
            (0, l.jsxs)('div', {
                className: a.content,
                children: [
                    (0, l.jsxs)('div', {
                        className: a.nameAndDecorators,
                        children: [
                            (0, l.jsx)('div', {
                                className: i()(a.name, { [a.wrappedName]: o }),
                                children: u
                            }),
                            c
                        ]
                    }),
                    null != d
                        ? (0, l.jsx)('div', {
                              className: a.subText,
                              children: d
                          })
                        : null
                ]
            })
        ]
    });
}
