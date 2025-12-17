n.d(t, { x: () => _ }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(15127),
    o = n(512983),
    s = n(832360);
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
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let _ = i.forwardRef(function (e, t) {
    var {
            children: n,
            disabled: l = !1,
            className: u,
            titleClassName: p,
            tag: _ = "h5",
            required: m = !1,
            style: h,
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
        S = null != b ? b : O,
        I = null != E ? v : void 0,
        [T, C] = i.useState(void 0),
        [A, N] = i.useState(void 0),
        P = void 0 !== A;
    return (0, r.jsx)("div", {
        ref: t,
        className: null != u ? u : void 0,
        style: null != h ? h : void 0,
        children: (0, r.jsx)(a.ol, {
            "data-migration-pending": !0,
            titleId: S,
            errorId: I,
            error: null != E ? E : void 0,
            isFocused: T,
            setIsFocused: C,
            hasValue: A,
            setHasValue: N,
            children: (0, r.jsxs)("div", {
                className: P ? s.fieldWrapper : void 0,
                children: [
                    null != g || null != E
                        ? (0, r.jsx)(
                              o.v,
                              d(
                                  c(
                                      {
                                          "data-migration-pending": !0,
                                          tag: _,
                                          disabled: l,
                                          required: m,
                                          error: E,
                                          className: p,
                                          id: S,
                                          errorId: I,
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
