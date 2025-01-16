n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(743483);
function o(e) {
    let { selected: t, muted: n = !1, highlighted: l = !1, wrapContent: o = !1, avatar: s, decorators: c, name: u, subText: d, avatarClassName: h, innerClassName: p } = e;
    return (0, i.jsxs)('div', {
        className: r()(p, a.layout, {
            [a.muted]: !t && n,
            [a.highlighted]: l,
            [a.wrappedLayout]: o
        }),
        children: [
            (0, i.jsx)('div', {
                className: r()(a.avatar, h),
                children: s
            }),
            (0, i.jsxs)('div', {
                className: a.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: a.nameAndDecorators,
                        children: [
                            (0, i.jsx)('div', {
                                className: r()(a.name, { [a.wrappedName]: o }),
                                children: u
                            }),
                            c
                        ]
                    }),
                    null != d
                        ? (0, i.jsx)('div', {
                              className: a.subText,
                              children: d
                          })
                        : null
                ]
            })
        ]
    });
}
