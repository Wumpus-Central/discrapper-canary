n.d(t, { Z: () => u }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(810097);
function a(e, t, n) {
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
function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = c(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function u(e) {
    var { children: t, className: n, onShowToolbar: a } = e,
        c = l(e, ['children', 'className', 'onShowToolbar']);
    let u = i.useRef(null),
        [d, f] = i.useState(!1),
        _ = () => {
            null == a || a(), f(!0);
        },
        p = () => {
            f(!1);
        };
    return (0, r.jsxs)('div', {
        className: n,
        onMouseEnter: _,
        onMouseLeave: p,
        onFocus: _,
        onBlur: (e) => {
            var t;
            (null == (t = u.current) ? void 0 : t.contains(e.relatedTarget)) || p();
        },
        ref: u,
        children: [
            t,
            (0, r.jsx)(
                o.ZP,
                s(
                    {
                        targetRef: u,
                        isVisible: d,
                        isExpandable: !1
                    },
                    c
                )
            )
        ]
    });
}
