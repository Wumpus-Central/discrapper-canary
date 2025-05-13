n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    a = n(481060),
    o = n(386019),
    s = n(388032),
    l = n(227832);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e) {
    let t = i.useRef(null);
    return (0, r.jsx)(
        o.Z,
        f(u({}, e), {
            targetElementRef: t,
            children: (e) =>
                (0, r.jsx)(a.ua7, {
                    targetElementRef: t,
                    text: s.intl.string(s.t.UKOtz8),
                    'aria-label': !1,
                    children: (n) =>
                        (0, r.jsx)(
                            a.P3F,
                            f(u({}, n, e), {
                                innerRef: t,
                                'aria-label': s.intl.string(s.t.UKOtz8),
                                onClick: (t) => {
                                    var r;
                                    t.stopPropagation(), null == (r = n.onClick) || r.call(n), e.onClick(t);
                                },
                                onContextMenu: (t) => {
                                    var r;
                                    t.preventDefault(), null == (r = n.onClick) || r.call(n), e.onClick(t);
                                },
                                className: l.contextMenu,
                                children: (0, r.jsx)(a.xhG, {
                                    color: a.TVs.colors.INTERACTIVE_NORMAL,
                                    size: 'xs'
                                })
                            })
                        )
                })
        })
    );
}
