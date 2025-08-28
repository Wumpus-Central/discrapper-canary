n.d(t, {
    J: () => y,
    Z: () => O,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(751334),
    l = n(920155),
    c = n(744399),
    u = n(966902),
    d = n(237872),
    f = n(562618),
    _ = n(254477);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function y(e) {
    var t,
        n,
        {
            title: a,
            body: p,
            badge: m,
            graphic: b,
            size: y = "md",
            actions: O,
            textLink: v,
            gradientColor: I,
            onRequestClose: T,
            popoverRef: S,
            position: A,
            caretConfig: C,
        } = e,
        N = E(e, [
            "title",
            "body",
            "badge",
            "graphic",
            "size",
            "actions",
            "textLink",
            "gradientColor",
            "onRequestClose",
            "popoverRef",
            "position",
            "caretConfig",
        ]);
    let [R, P] = i.useState(null != A ? A : "top"),
        [w, D] = i.useState({
            position: (0, l.q)(R),
            align: null != (t = null == C ? void 0 : C.align) ? t : "center",
            customOffset: null == C ? void 0 : C.customOffset,
        }),
        x = i.useCallback(
            (e, t) => {
                null == T || T(t);
            },
            [T],
        ),
        L = i.useCallback(() => {
            null == T || T("user:explicit");
        }, [T]),
        j = i.useCallback((e) => {
            P(e), D((t) => g(h({}, t), { position: (0, l.q)(e) }));
        }, []);
    return (0, r.jsx)(
        l.m,
        g(h({}, N), {
            position: R,
            onRequestClose: x,
            gradientColor: I,
            onPositionChange: j,
            caretConfig: w,
            children: (0, r.jsxs)("div", {
                ref: S,
                children: [
                    (0, r.jsx)(d.u, {
                        onClick: L,
                        variant: null != I ? "color-mix" : void 0,
                    }),
                    null != b &&
                        (0, r.jsx)("div", {
                            className: o()(_.graphic, { [_["graphic--".concat(y)]]: null != y }),
                            children: (0, r.jsx)(
                                s.z,
                                g(h({}, b), {
                                    aspectRatio: null != (n = b.aspectRatio) ? n : "sm" === y ? "2/1" : "16/9",
                                }),
                            ),
                        }),
                    (0, r.jsx)(f.Y, {
                        title: a,
                        body: p,
                        badge: m,
                        textLink: v,
                        hasBottomMargin: null != O,
                    }),
                    null != O && O.length > 0 ? (0, r.jsx)(c.k, { actions: O }) : null,
                    (0, r.jsx)(u.$, { caretConfig: w }),
                ],
            }),
        }),
    );
}
let O = y;
