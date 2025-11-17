n.d(t, { x: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(15127),
    o = n(512983),
    s = n(154948);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let p = i.forwardRef(function (e, t) {
    var {
            children: n,
            disabled: l = !1,
            className: u,
            titleClassName: _,
            tag: p = "h5",
            required: h = !1,
            style: m,
            title: g,
            error: E,
            titleId: b,
        } = e,
        y = f(e, [
            "children",
            "disabled",
            "className",
            "titleClassName",
            "tag",
            "required",
            "style",
            "title",
            "error",
            "titleId",
        ]);
    let O = i.useId(),
        v = i.useId(),
        I = null != b ? b : O,
        T = null != E ? v : void 0,
        [S, A] = i.useState(void 0),
        [C, N] = i.useState(void 0),
        R = void 0 !== C;
    return (0, r.jsx)("div", {
        ref: t,
        className: null != u ? u : void 0,
        style: null != m ? m : void 0,
        children: (0, r.jsx)(a.ol, {
            titleId: I,
            errorId: T,
            error: null != E ? E : void 0,
            isFocused: S,
            setIsFocused: A,
            hasValue: C,
            setHasValue: N,
            children: (0, r.jsxs)("div", {
                className: R ? s.fieldWrapper : void 0,
                children: [
                    null != g || null != E
                        ? (0, r.jsx)(
                              o.v,
                              d(
                                  c(
                                      {
                                          tag: p,
                                          disabled: l,
                                          required: h,
                                          error: E,
                                          className: _,
                                          id: I,
                                          errorId: T,
                                      },
                                      y,
                                  ),
                                  { children: g },
                              ),
                          )
                        : null,
                    n,
                ],
            }),
        }),
    });
});
