var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(568611),
    u = r(481060),
    c = r(317767);
let d = a.forwardRef(function (e, n) {
    var r;
    let { avatar: a, name: s, children: d, subText: f, decorators: _, onClick: h, selected: p, muted: m, to: g, avatarClassName: E, selectedClassName: v, innerClassName: I, wrapContent: T, highlighted: b, focusProps: y, ...S } = e;
    (S.className = o()(S.className, c.container, {
        [c.selected]: p,
        [c.highlighted]: b,
        [null != v ? v : '']: p,
        [c.clickable]: !p && (null != g || null != h)
    })),
        (S['aria-selected'] = null !== (r = S['aria-selected']) && void 0 !== r ? r : p);
    let A = (0, i.jsxs)('div', {
        className: o()(I, c.layout, {
            [c.muted]: !p && m,
            [c.wrappedLayout]: T
        }),
        children: [
            (0, i.jsx)('div', {
                className: o()(c.avatar, E),
                children: a
            }),
            (0, i.jsxs)('div', {
                className: c.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: c.nameAndDecorators,
                        children: [
                            (0, i.jsx)('div', {
                                className: o()(c.name, { [c.wrappedName]: T }),
                                children: s
                            }),
                            _
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
              ...y,
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
                focusProps: y,
                ...S,
                role: 'listitem',
                innerRef: n,
                children: A
            })
          : (0, i.jsx)(u.FocusRing, {
                ...y,
                children: (0, i.jsx)('div', {
                    ...S,
                    role: 'listitem',
                    ref: n,
                    children: A
                })
            });
});
n.Z = d;
