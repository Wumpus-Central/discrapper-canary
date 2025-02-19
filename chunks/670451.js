n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(386019),
    a = n(388032),
    s = n(481736);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    return (0, r.jsx)(
        o.Z,
        d(c({}, e), {
            children: (e) =>
                (0, r.jsx)(i.ua7, {
                    text: a.NW.string(a.t.UKOtz8),
                    'aria-label': !1,
                    children: (t) =>
                        (0, r.jsx)(
                            i.P3F,
                            d(c({}, t, e), {
                                'aria-label': a.NW.string(a.t.UKOtz8),
                                onClick: (n) => {
                                    var r;
                                    n.stopPropagation(), null === (r = t.onClick) || void 0 === r || r.call(t), e.onClick(n);
                                },
                                onContextMenu: (n) => {
                                    var r;
                                    n.preventDefault(), null === (r = t.onClick) || void 0 === r || r.call(t), e.onClick(n);
                                },
                                className: s.contextMenu,
                                children: (0, r.jsx)(i.xhG, {
                                    color: i.TVs.colors.INTERACTIVE_NORMAL,
                                    size: 'xs'
                                })
                            })
                        )
                })
        })
    );
}
