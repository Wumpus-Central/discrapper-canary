n.d(t, { Z: () => u }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(810097);
function o(e, t, n) {
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
                o(e, t, n[t]);
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let u = i.forwardRef(function (e, t) {
    var { children: n, className: o, onShowToolbar: c } = e,
        u = l(e, ['children', 'className', 'onShowToolbar']);
    let d = t,
        [f, _] = i.useState(!1),
        p = () => {
            null == c || c(), _(!0);
        },
        h = () => {
            _(!1);
        };
    return (0, r.jsxs)('div', {
        className: o,
        onMouseEnter: p,
        onMouseLeave: h,
        onFocus: (e) => {
            var t;
            (null == (t = d.current) ? void 0 : t.contains(e.relatedTarget)) && p();
        },
        onBlur: (e) => {
            var t;
            let n = e.relatedTarget;
            (null != n && (null == (t = d.current) ? void 0 : t.contains(n))) || h();
        },
        ref: d,
        children: [
            n,
            (0, r.jsx)(
                a.ZP,
                s(
                    {
                        targetRef: d,
                        isVisible: f,
                        isExpandable: !1
                    },
                    u
                )
            )
        ]
    });
});
