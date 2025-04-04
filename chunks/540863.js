n.d(t, { x: () => p }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(15127),
    a = n(512983),
    s = n(178038);
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
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let p = i.forwardRef(function (e, t) {
    var n,
        { children: l, disabled: u = !1, className: _, titleClassName: p, tag: h = 'h5', required: m = !1, style: g, title: E, error: b, titleId: y } = e,
        v = f(e, ['children', 'disabled', 'className', 'titleClassName', 'tag', 'required', 'style', 'title', 'error', 'titleId']);
    let O = i.useId(),
        I = i.useId(),
        S = null != y ? y : O,
        T = null != b ? (null != (n = v.errorId) ? n : I) : void 0,
        [N, A] = i.useState(void 0),
        [C, R] = i.useState(void 0),
        P = void 0 !== C;
    return (0, r.jsx)('div', {
        ref: t,
        className: null != _ ? _ : void 0,
        style: null != g ? g : void 0,
        children: (0, r.jsx)(o.ol, {
            titleId: S,
            errorId: T,
            error: null != b ? b : void 0,
            isFocused: N,
            setIsFocused: A,
            hasValue: C,
            setHasValue: R,
            children: (0, r.jsxs)('div', {
                className: P ? s.fieldWrapper : void 0,
                children: [
                    null != E || null != b
                        ? (0, r.jsx)(
                              a.v,
                              d(
                                  c(
                                      {
                                          tag: h,
                                          disabled: u,
                                          required: m,
                                          error: b,
                                          className: p,
                                          id: S,
                                          errorId: T
                                      },
                                      v
                                  ),
                                  { children: E }
                              )
                          )
                        : null,
                    l
                ]
            })
        })
    });
});
