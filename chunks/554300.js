n.d(t, { Z: () => c });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(568611),
    l = n(481060),
    u = n(731860);
let c = r.forwardRef(function (e, t) {
    var n;
    let { avatar: r, name: a, children: c, subText: d, decorators: f, onClick: _, selected: p, muted: h, to: m, avatarClassName: g, selectedClassName: E, innerClassName: v, wrapContent: y, highlighted: I, focusProps: T, ...b } = e;
    (b.className = s()(b.className, u.container, {
        [u.selected]: p,
        [u.highlighted]: I,
        [u.active]: p,
        [null != E ? E : '']: p,
        [u.clickable]: !p && (null != m || null != _)
    })),
        (b['aria-selected'] = null !== (n = b['aria-selected']) && void 0 !== n ? n : p);
    let S = (0, i.jsxs)('div', {
        className: s()(v, u.layout, {
            [u.muted]: !p && h,
            [u.wrappedLayout]: y
        }),
        children: [
            (0, i.jsx)('div', {
                className: s()(u.avatar, g),
                children: r
            }),
            (0, i.jsxs)('div', {
                className: u.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: u.nameAndDecorators,
                        children: [
                            (0, i.jsx)('div', {
                                className: s()(u.name, { [u.wrappedName]: y }),
                                children: a
                            }),
                            f
                        ]
                    }),
                    null != d
                        ? (0, i.jsx)('div', {
                              className: u.subText,
                              children: d
                          })
                        : null
                ]
            }),
            null != c
                ? (0, i.jsx)('div', {
                      className: u.children,
                      children: c
                  })
                : null
        ]
    });
    return null != m
        ? (0, i.jsx)(l.tEY, {
              ...T,
              children: (0, i.jsx)(o.rU, {
                  to: m,
                  onClick: _,
                  ...b,
                  role: 'listitem',
                  ref: t,
                  children: S
              })
          })
        : null != _
          ? (0, i.jsx)(l.P3F, {
                onClick: _,
                focusProps: T,
                ...b,
                role: 'listitem',
                innerRef: t,
                children: S
            })
          : (0, i.jsx)(l.tEY, {
                ...T,
                children: (0, i.jsx)('div', {
                    ...b,
                    role: 'listitem',
                    ref: t,
                    children: S
                })
            });
});
