n.d(t, { Z: () => g });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(568611),
    l = n(481060),
    c = n(516817),
    u = n(993556);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let g = i.forwardRef(function (e, t) {
    var n,
        { avatar: i, name: o, nameplate: d, children: p, subText: m, decorators: g, onClick: E, hovered: v, selected: b, muted: y, to: O, avatarClassName: S, selectedClassName: I, innerClassName: T, wrapContent: N, highlighted: A, focusProps: C } = e,
        R = h(e, ['avatar', 'name', 'nameplate', 'children', 'subText', 'decorators', 'onClick', 'hovered', 'selected', 'muted', 'to', 'avatarClassName', 'selectedClassName', 'innerClassName', 'wrapContent', 'highlighted', 'focusProps']);
    (R.className = a()(R.className, u.container, {
        [u.selected]: b,
        [u.highlighted]: A,
        [u.active]: b,
        [null != I ? I : '']: b,
        [u.clickable]: !b && (null != O || null != E),
        [u.wrapperPlated]: null != d
    })),
        (R['aria-selected'] = null !== (n = R['aria-selected']) && void 0 !== n ? n : b);
    let P = (0, r.jsxs)('div', {
        className: a()(u.childContainer, { [u.nameplated]: null != d }),
        children: [
            (0, r.jsx)(c.Z, {
                nameplate: d,
                hovered: v,
                selected: b
            }),
            (0, r.jsxs)('div', {
                className: a()(T, u.layout, {
                    [u.muted]: !b && y,
                    [u.wrappedLayout]: N,
                    [u.plated]: null != d
                }),
                children: [
                    (0, r.jsx)('div', {
                        className: a()(u.avatar, S),
                        children: i
                    }),
                    (0, r.jsxs)('div', {
                        className: u.content,
                        children: [
                            (0, r.jsxs)('div', {
                                className: u.nameAndDecorators,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: a()(u.name, { [u.wrappedName]: N }),
                                        children: o
                                    }),
                                    g
                                ]
                            }),
                            null != m
                                ? (0, r.jsx)('div', {
                                      className: u.subText,
                                      children: m
                                  })
                                : null
                        ]
                    }),
                    null != p
                        ? (0, r.jsx)('div', {
                              className: u.children,
                              children: p
                          })
                        : null
                ]
            })
        ]
    });
    return null != O
        ? (0, r.jsx)(
              l.tEY,
              _(f({}, C), {
                  children: (0, r.jsx)(
                      s.rU,
                      _(
                          f(
                              {
                                  to: O,
                                  onClick: E
                              },
                              R
                          ),
                          {
                              role: 'listitem',
                              ref: t,
                              children: P
                          }
                      )
                  )
              })
          )
        : null != E
          ? (0, r.jsx)(
                l.P3F,
                _(
                    f(
                        {
                            onClick: E,
                            focusProps: C
                        },
                        R
                    ),
                    {
                        role: 'listitem',
                        innerRef: t,
                        children: P
                    }
                )
            )
          : (0, r.jsx)(
                l.tEY,
                _(f({}, C), {
                    children: (0, r.jsx)(
                        'div',
                        _(f({}, R), {
                            role: 'listitem',
                            ref: t,
                            children: P
                        })
                    )
                })
            );
});
