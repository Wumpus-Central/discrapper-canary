n.d(t, { I: () => _ });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(743236),
    l = n(939350),
    c = n(253068);
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
function _(e) {
    let { color: t = 'default', label: n, control: o, disabled: u, isFocused: f, showDefaultFocus: _ = !1, menuItemProps: h, onClose: m } = e,
        g = i.useRef(null),
        E = i.useRef(null);
    i.useLayoutEffect(() => {
        var e, t, n;
        f ? ((0, s.F)(g), null === (e = E.current) || void 0 === e || e.focus()) : null === (n = E.current) || void 0 === n || null === (t = n.blur) || void 0 === t || t.call(n);
    }, [f]);
    let v = i.useCallback(() => {
            var e, t;
            (null === (t = E.current) || void 0 === t ? void 0 : null === (e = t.activate) || void 0 === e ? void 0 : e.call(t)) && m();
        }, [m]),
        b = o(
            {
                onClose: m,
                disabled: u,
                isFocused: f
            },
            E
        );
    return (0, r.jsxs)(
        'div',
        p(
            d(
                {
                    onClick: v,
                    className: a()(c.item, l._[t], {
                        [c.disabled]: u,
                        [c.focused]: _ && f,
                        [c.hideInteraction]: !_
                    }),
                    'aria-disabled': u
                },
                h
            ),
            {
                children: [
                    null != n
                        ? (0, r.jsx)('div', {
                              className: c.labelContainer,
                              children: (0, r.jsx)('div', {
                                  className: c.label,
                                  children: n
                              })
                          })
                        : null,
                    b
                ]
            }
        )
    );
}
