n.d(t, { I: () => h });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(670596),
    l = n(743236),
    c = n(939350),
    u = n(253068);
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
function _(e, t) {
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
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    let { color: t = 'default', label: n, control: o, disabled: d, isFocused: _, showDefaultFocus: h = !1, menuItemProps: g, onClose: m } = e,
        { onInteraction: E } = i.useContext(s.p),
        v = i.useRef(null),
        b = i.useRef(null);
    i.useLayoutEffect(() => {
        var e, t, n;
        _ ? ((0, l.F)(v), null === (e = b.current) || void 0 === e || e.focus()) : null === (n = b.current) || void 0 === n || null === (t = n.blur) || void 0 === t || t.call(n);
    }, [_]);
    let y = i.useCallback(() => {
            var e, t;
            (null === (t = b.current) || void 0 === t ? void 0 : null === (e = t.activate) || void 0 === e ? void 0 : e.call(t)) && m();
        }, [m]),
        O = o(
            {
                onClose: m,
                disabled: d,
                isFocused: _,
                onInteraction: i.useCallback(
                    (e) => {
                        null == E || E({ type: null != e ? e : s.U.DEFAULT });
                    },
                    [E]
                )
            },
            b
        );
    return (0, r.jsxs)(
        'div',
        p(
            f(
                {
                    onClick: y,
                    className: a()(u.item, c._[t], {
                        [u.disabled]: d,
                        [u.focused]: h && _,
                        [u.hideInteraction]: !h
                    }),
                    'aria-disabled': d
                },
                g
            ),
            {
                children: [
                    null != n
                        ? (0, r.jsx)('div', {
                              className: u.labelContainer,
                              children: (0, r.jsx)('div', {
                                  className: u.label,
                                  children: n
                              })
                          })
                        : null,
                    O
                ]
            }
        )
    );
}
