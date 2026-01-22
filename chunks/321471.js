n.d(t, { e: () => _ }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(504345),
    s = n(742158),
    o = n(463807);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = p(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let _ = i.forwardRef(function (e, t) {
    let [n, ...l] = [e, t],
        {
            children: u,
            disabled: p = !1,
            className: _,
            titleClassName: h,
            tag: m = "h5",
            required: g = !1,
            style: E,
            title: b,
            error: y,
            titleId: O,
        } = n,
        A = f(n, [
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
        ]),
        [v] = l,
        S = i.useId(),
        I = i.useId(),
        T = null != O ? O : S,
        C = null != y ? I : void 0,
        [N, R] = i.useState(void 0),
        [w, P] = i.useState(void 0),
        D = void 0 !== w;
    return (0, r.jsx)("div", {
        ref: v,
        className: null != _ ? _ : void 0,
        style: null != E ? E : void 0,
        children: (0, r.jsx)(a.hN, {
            "data-migration-pending": !0,
            titleId: T,
            errorId: C,
            error: null != y ? y : void 0,
            isFocused: N,
            setIsFocused: R,
            hasValue: w,
            setHasValue: P,
            children: (0, r.jsxs)("div", {
                className: D ? o.G : void 0,
                children: [
                    null != b || null != y
                        ? (0, r.jsx)(
                              s.z,
                              d(
                                  c(
                                      {
                                          "data-migration-pending": !0,
                                          tag: m,
                                          disabled: p,
                                          required: g,
                                          error: y,
                                          className: h,
                                          id: T,
                                          errorId: C,
                                      },
                                      A,
                                  ),
                                  { children: b },
                              ),
                          )
                        : null,
                    u,
                ],
            }),
        }),
    });
});
