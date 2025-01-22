var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(568611),
    u = r(481060),
    c = r(317767);
let d = a.forwardRef(function (e, n) {
    var r;
    let { avatar: a, name: o, children: d, subText: f, decorators: p, onClick: h, selected: _, muted: m, to: g, avatarClassName: E, selectedClassName: v, innerClassName: y, wrapContent: b, highlighted: I, focusProps: T, ...S } = e;
    (S.className = s()(S.className, c.container, {
        [c.selected]: _,
        [c.highlighted]: I,
        [null != v ? v : '']: _,
        [c.clickable]: !_ && (null != g || null != h)
    })),
        (S['aria-selected'] = null !== (r = S['aria-selected']) && void 0 !== r ? r : _);
    let A = (0, i.jsxs)('div', {
        className: s()(y, c.layout, {
            [c.muted]: !_ && m,
            [c.wrappedLayout]: b
        }),
        children: [
            (0, i.jsx)('div', {
                className: s()(c.avatar, E),
                children: a
            }),
            (0, i.jsxs)('div', {
                className: c.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: c.nameAndDecorators,
                        children: [
                            (0, i.jsx)('div', {
                                className: s()(c.name, { [c.wrappedName]: b }),
                                children: o
                            }),
                            p
                        ]
                    }),
                    null != f
                        ? (0, i.jsx)('div', {
                              className: c.subText,
                              children: f
                          })
                        : null
                ]
            }),
            null != d
                ? (0, i.jsx)('div', {
                      className: c.children,
                      children: d
                  })
                : null
        ]
    });
    return null != g
        ? (0, i.jsx)(u.FocusRing, {
              ...T,
              children: (0, i.jsx)(l.rU, {
                  to: g,
                  onClick: h,
                  ...S,
                  role: 'listitem',
                  ref: n,
                  children: A
              })
          })
        : null != h
          ? (0, i.jsx)(u.Clickable, {
                onClick: h,
                focusProps: T,
                ...S,
                role: 'listitem',
                innerRef: n,
                children: A
            })
          : (0, i.jsx)(u.FocusRing, {
                ...T,
                children: (0, i.jsx)('div', {
                    ...S,
                    role: 'listitem',
                    ref: n,
                    children: A
                })
            });
});
n.Z = d;
