n.d(t, { Z: () => E });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(688642),
    l = n(481060),
    c = n(359135),
    u = n(516817),
    d = n(241072);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
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
function h(e, t) {
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
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let E = i.forwardRef(function (e, t) {
    var n,
        { avatar: a, name: f, nameplate: p, children: g, subText: E, decorators: b, onClick: y, hovered: O, selected: v, muted: I, to: S, avatarClassName: T, selectedClassName: A, innerClassName: N, wrapContent: C, highlighted: R, focusProps: P } = e,
        w = m(e, ['avatar', 'name', 'nameplate', 'children', 'subText', 'decorators', 'onClick', 'hovered', 'selected', 'muted', 'to', 'avatarClassName', 'selectedClassName', 'innerClassName', 'wrapContent', 'highlighted', 'focusProps']);
    (w.className = o()(w.className, d.container, {
        [d.selected]: v,
        [d.highlighted]: R,
        [null != A ? A : '']: v,
        [d.clickable]: !v && (null != S || null != y)
    })),
        (w['aria-selected'] = null != (n = w['aria-selected']) ? n : v);
    let D = i.useRef(null),
        L = (0, r.jsxs)('div', {
            className: o()(d.childContainer, { [d.nameplated]: null != p }),
            children: [
                (0, r.jsx)(u.Z, {
                    nameplate: p,
                    hovered: O,
                    selected: v,
                    content: D,
                    placement: c.i.MEMBER_LIST
                }),
                (0, r.jsxs)('div', {
                    ref: D,
                    className: o()(N, d.layout, {
                        [d.muted]: !v && I,
                        [d.wrappedLayout]: C
                    }),
                    children: [
                        (0, r.jsx)('div', {
                            className: o()(d.avatar, T),
                            children: a
                        }),
                        (0, r.jsxs)('div', {
                            className: d.content,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: d.nameAndDecorators,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: o()(d.name, { [d.wrappedName]: C }),
                                            children: f
                                        }),
                                        b
                                    ]
                                }),
                                null != E
                                    ? (0, r.jsx)('div', {
                                          className: d.subText,
                                          children: E
                                      })
                                    : null
                            ]
                        }),
                        null != g
                            ? (0, r.jsx)('div', {
                                  className: d.children,
                                  children: g
                              })
                            : null
                    ]
                })
            ]
        });
    return null != S
        ? (0, r.jsx)(
              l.tEY,
              h(_({}, P), {
                  children: (0, r.jsx)(
                      s.rU,
                      h(
                          _(
                              {
                                  to: S,
                                  onClick: y
                              },
                              w
                          ),
                          {
                              role: 'listitem',
                              ref: t,
                              children: L
                          }
                      )
                  )
              })
          )
        : null != y
          ? (0, r.jsx)(
                l.P3F,
                h(
                    _(
                        {
                            onClick: y,
                            focusProps: P
                        },
                        w
                    ),
                    {
                        role: 'listitem',
                        innerRef: t,
                        children: L
                    }
                )
            )
          : (0, r.jsx)(
                l.tEY,
                h(_({}, P), {
                    children: (0, r.jsx)(
                        'div',
                        h(_({}, w), {
                            role: 'listitem',
                            ref: t,
                            children: L
                        })
                    )
                })
            );
});
