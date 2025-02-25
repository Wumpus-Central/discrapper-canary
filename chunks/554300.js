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
        { avatar: o, name: d, nameplate: p, children: m, subText: g, decorators: E, onClick: v, hovered: b, selected: y, muted: O, to: S, avatarClassName: I, selectedClassName: T, innerClassName: N, wrapContent: A, highlighted: C, focusProps: R } = e,
        P = h(e, ['avatar', 'name', 'nameplate', 'children', 'subText', 'decorators', 'onClick', 'hovered', 'selected', 'muted', 'to', 'avatarClassName', 'selectedClassName', 'innerClassName', 'wrapContent', 'highlighted', 'focusProps']);
    (P.className = a()(P.className, u.container, {
        [u.selected]: y,
        [u.highlighted]: C,
        [u.active]: y,
        [null != T ? T : '']: y,
        [u.clickable]: !y && (null != S || null != v),
        [u.wrapperPlated]: null != p
    })),
        (P['aria-selected'] = null !== (n = P['aria-selected']) && void 0 !== n ? n : y);
    let D = i.useRef(null),
        w = (0, r.jsxs)('div', {
            className: a()(u.childContainer, { [u.nameplated]: null != p }),
            children: [
                (0, r.jsx)(c.Z, {
                    nameplate: p,
                    hovered: b,
                    selected: y,
                    content: D.current
                }),
                (0, r.jsxs)('div', {
                    ref: D,
                    className: a()(N, u.layout, {
                        [u.muted]: !y && O,
                        [u.wrappedLayout]: A
                    }),
                    children: [
                        (0, r.jsx)('div', {
                            className: a()(u.avatar, I),
                            children: o
                        }),
                        (0, r.jsxs)('div', {
                            className: u.content,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: u.nameAndDecorators,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: a()(u.name, { [u.wrappedName]: A }),
                                            children: d
                                        }),
                                        E
                                    ]
                                }),
                                null != g
                                    ? (0, r.jsx)('div', {
                                          className: u.subText,
                                          children: g
                                      })
                                    : null
                            ]
                        }),
                        null != m
                            ? (0, r.jsx)('div', {
                                  className: u.children,
                                  children: m
                              })
                            : null
                    ]
                })
            ]
        });
    return null != S
        ? (0, r.jsx)(
              l.tEY,
              _(f({}, R), {
                  children: (0, r.jsx)(
                      s.rU,
                      _(
                          f(
                              {
                                  to: S,
                                  onClick: v
                              },
                              P
                          ),
                          {
                              role: 'listitem',
                              ref: t,
                              children: w
                          }
                      )
                  )
              })
          )
        : null != v
          ? (0, r.jsx)(
                l.P3F,
                _(
                    f(
                        {
                            onClick: v,
                            focusProps: R
                        },
                        P
                    ),
                    {
                        role: 'listitem',
                        innerRef: t,
                        children: w
                    }
                )
            )
          : (0, r.jsx)(
                l.tEY,
                _(f({}, R), {
                    children: (0, r.jsx)(
                        'div',
                        _(f({}, P), {
                            role: 'listitem',
                            ref: t,
                            children: w
                        })
                    )
                })
            );
});
