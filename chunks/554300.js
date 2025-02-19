n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(568611),
    l = n(481060),
    c = n(993556);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let m = i.forwardRef(function (e, t) {
    var n,
        { avatar: i, name: o, children: u, subText: f, decorators: h, onClick: m, selected: g, muted: E, to: v, avatarClassName: b, selectedClassName: y, innerClassName: O, wrapContent: S, highlighted: I, focusProps: T } = e,
        N = _(e, ['avatar', 'name', 'children', 'subText', 'decorators', 'onClick', 'selected', 'muted', 'to', 'avatarClassName', 'selectedClassName', 'innerClassName', 'wrapContent', 'highlighted', 'focusProps']);
    (N.className = a()(N.className, c.container, {
        [c.selected]: g,
        [c.highlighted]: I,
        [c.active]: g,
        [null != y ? y : '']: g,
        [c.clickable]: !g && (null != v || null != m)
    })),
        (N['aria-selected'] = null !== (n = N['aria-selected']) && void 0 !== n ? n : g);
    let A = (0, r.jsxs)('div', {
        className: a()(O, c.layout, {
            [c.muted]: !g && E,
            [c.wrappedLayout]: S
        }),
        children: [
            (0, r.jsx)('div', {
                className: a()(c.avatar, b),
                children: i
            }),
            (0, r.jsxs)('div', {
                className: c.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: c.nameAndDecorators,
                        children: [
                            (0, r.jsx)('div', {
                                className: a()(c.name, { [c.wrappedName]: S }),
                                children: o
                            }),
                            h
                        ]
                    }),
                    null != f
                        ? (0, r.jsx)('div', {
                              className: c.subText,
                              children: f
                          })
                        : null
                ]
            }),
            null != u
                ? (0, r.jsx)('div', {
                      className: c.children,
                      children: u
                  })
                : null
        ]
    });
    return null != v
        ? (0, r.jsx)(
              l.tEY,
              p(d({}, T), {
                  children: (0, r.jsx)(
                      s.rU,
                      p(
                          d(
                              {
                                  to: v,
                                  onClick: m
                              },
                              N
                          ),
                          {
                              role: 'listitem',
                              ref: t,
                              children: A
                          }
                      )
                  )
              })
          )
        : null != m
          ? (0, r.jsx)(
                l.P3F,
                p(
                    d(
                        {
                            onClick: m,
                            focusProps: T
                        },
                        N
                    ),
                    {
                        role: 'listitem',
                        innerRef: t,
                        children: A
                    }
                )
            )
          : (0, r.jsx)(
                l.tEY,
                p(d({}, T), {
                    children: (0, r.jsx)(
                        'div',
                        p(d({}, N), {
                            role: 'listitem',
                            ref: t,
                            children: A
                        })
                    )
                })
            );
});
