n.d(t, { u: () => y }), n(35282), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(635041),
    o = n(793030),
    s = n(481060),
    l = n(550656),
    c = n(464281),
    u = n(102725),
    d = n(342134),
    f = n(966327),
    _ = n(495511);
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
    let t;
    var {
            children: n,
            text: p,
            keyboardShortcut: m,
            __unsupportedReactNodeAsText: b,
            asContainer: y = !1,
            tag: O = "span",
            position: v = "top",
            align: I = "center",
            spacing: T,
            layerContext: S,
            targetElementRef: A,
            caretConfig: C,
            positionKey: N,
        } = e,
        R = E(e, [
            "children",
            "text",
            "keyboardShortcut",
            "__unsupportedReactNodeAsText",
            "asContainer",
            "tag",
            "position",
            "align",
            "spacing",
            "layerContext",
            "targetElementRef",
            "caretConfig",
            "positionKey",
        ]);
    let P = (0, f.c)(A),
        w = i.useId(),
        { isVisible: D, triggerProps: x } = (0, u.l)(h({ targetElementRef: P.targetElementRef }, R)),
        L = (0, d.Q)({ shouldShow: D }),
        { defaultLayerContext: M } = (0, o.ZFG)(),
        j = i.useMemo(
            () =>
                null != b
                    ? b
                    : null == p || "" === p
                      ? null
                      : null != m && "" !== m
                        ? (0, r.jsxs)("div", {
                              className: _.tooltipWithShortcut,
                              children: [
                                  (0, r.jsx)(s.Text, {
                                      variant: "text-sm/medium",
                                      children: p,
                                  }),
                                  (0, r.jsx)(s.M2$, { shortcut: m }),
                              ],
                          })
                        : p,
            [p, m, b],
        );
    if (null == j || ("string" == typeof j && "" === j)) return n;
    let k = null != N ? N : (0, c.Sw)(p);
    if (y) {
        let e = g(h({}, x), {
            onFocus: (0, c.tS)(x.onFocus, (e) => {
                let t = e.target;
                if (null != t) {
                    var n;
                    let e = (0, c.QV)(null != (n = t.getAttribute("aria-describedby")) ? n : void 0, w);
                    t.setAttribute("aria-describedby", e);
                }
            }),
            onBlur: (0, c.tS)(x.onBlur, (e) => {
                let t = e.target;
                if (null != t) {
                    let e = t.getAttribute("aria-describedby");
                    if (null != e) {
                        let n = e.split(" ").filter((e) => e !== w);
                        n.length > 0
                            ? t.setAttribute("aria-describedby", n.join(" "))
                            : t.removeAttribute("aria-describedby");
                    }
                }
            }),
        });
        t = (0, c.FX)({
            tag: O,
            children: n,
            triggerHandlers: e,
            triggerRef: P.triggerRef,
        });
    } else {
        if (!i.isValidElement(n)) return null;
        t = (0, c.C9)(n, x, w, P.triggerRef);
    }
    let U = L((e, t) =>
        t
            ? (0, r.jsx)(l.N, {
                  isVisible: D,
                  isRendered: !0,
                  targetElementRef: P.targetElementRef,
                  id: w,
                  content: j,
                  position: v,
                  align: I,
                  spacing: T,
                  caretConfig: C,
                  layerContext: null != S ? S : M,
                  animationStyle: e,
                  positionKey: k,
              })
            : null,
    );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t,
            null != j && "" !== j
                ? (0, r.jsx)(a.n, {
                      id: w,
                      children: j,
                  })
                : null,
            U,
        ],
    });
}
