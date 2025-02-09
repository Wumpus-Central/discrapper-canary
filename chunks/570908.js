n.d(t, { Z: () => s });
var l = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    r = n(61510);
function s(e) {
    let { selected: t, muted: n = !1, highlighted: i = !1, wrapContent: s = !1, avatar: o, decorators: u, name: d, subText: c, avatarClassName: E, innerClassName: _ } = e;
    return (0, l.jsxs)('div', {
        className: a()(_, r.layout, {
            [r.muted]: !t && n,
            [r.highlighted]: i,
            [r.wrappedLayout]: s
        }),
        children: [
            (0, l.jsx)('div', {
                className: a()(r.avatar, E),
                children: o
            }),
            (0, l.jsxs)('div', {
                className: r.content,
                children: [
                    (0, l.jsxs)('div', {
                        className: r.nameAndDecorators,
                        children: [
                            (0, l.jsx)('div', {
                                className: a()(r.name, { [r.wrappedName]: s }),
                                children: d
                            }),
                            u
                        ]
                    }),
                    null != c
                        ? (0, l.jsx)('div', {
                              className: r.subText,
                              children: c
                          })
                        : null
                ]
            })
        ]
    });
}
