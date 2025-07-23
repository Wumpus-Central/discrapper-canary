n.d(t, { Z: () => u });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(892567),
    l = n(462991);
let c = i.forwardRef((e, t) => {
    let { muted: n = !1, highlighted: i = !1, avatar: a, decorators: c, name: u, subText: d, avatarClassName: _, innerClassName: f, displayNameStyles: p, displayNameStyleEffects: h } = e;
    return (0, r.jsxs)('div', {
        ref: t,
        className: o()(l.layout, f, {
            [l.muted]: n,
            [l.highlighted]: i
        }),
        children: [
            (0, r.jsx)('div', {
                className: o()(l.avatar, _),
                children: a
            }),
            (0, r.jsxs)('div', {
                className: l.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: l.nameAndDecorators,
                        children: [
                            (0, r.jsx)('div', {
                                className: l.name,
                                children: (0, r.jsx)(s.Z, {
                                    userName: u,
                                    displayNameStyles: p,
                                    effectDisplayType: h
                                })
                            }),
                            c
                        ]
                    }),
                    null != d
                        ? (0, r.jsx)('div', {
                              className: l.subText,
                              children: d
                          })
                        : null
                ]
            })
        ]
    });
});
c.displayName = 'AvatarWithText';
let u = c;
