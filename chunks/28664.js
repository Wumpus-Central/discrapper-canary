n.d(t, { u: () => O }), n(415506);
var r = n(255367),
    i = n(73800),
    o = n(314910),
    a = n(747127),
    s = n(550656),
    l = n(464281),
    c = n(102725),
    u = n(342134),
    d = n(966327);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let E = i.createContext(null);
function b(e) {
    var {
            children: t,
            text: n,
            position: o = "top",
            align: a = "center",
            spacing: s,
            layerContext: l,
            onAnimationRest: u,
            targetElementRef: f,
            caretConfig: p,
            className: h,
            style: g,
            color: b,
            tooltipClassName: y,
            tooltipContentClassName: O,
            tooltipPointerClassName: I,
            allowOverflow: T,
            disableTooltipPointerEvents: S,
            clickableOnMobile: A,
            hideOnClick: N,
        } = e,
        C = m(e, [
            "children",
            "text",
            "position",
            "align",
            "spacing",
            "layerContext",
            "onAnimationRest",
            "targetElementRef",
            "caretConfig",
            "className",
            "style",
            "color",
            "tooltipClassName",
            "tooltipContentClassName",
            "tooltipPointerClassName",
            "allowOverflow",
            "disableTooltipPointerEvents",
            "clickableOnMobile",
            "hideOnClick",
        ]);
    let R = (0, d.c)(f),
        P = i.useId(),
        {
            isVisible: w,
            isRendered: D,
            triggerProps: L,
            handleExitComplete: x,
        } = (0, c.l)(_({ targetElementRef: R.targetElementRef }, C)),
        M = i.useMemo(
            () => ({
                triggerHandlers: L,
                triggerRef: R.triggerRef,
                targetElementRef: R.targetElementRef,
                tooltipId: P,
                isVisible: w,
                isRendered: D,
                text: n,
                position: o,
                align: a,
                spacing: s,
                caretConfig: p,
                layerContext: l,
                onAnimationRest: u,
                handleExitComplete: x,
            }),
            [L, R.triggerRef, R.targetElementRef, P, w, D, n, o, a, s, p, l, u, x],
        );
    return (0, r.jsxs)(E.Provider, {
        value: M,
        children: [t, (0, r.jsx)(v, {})],
    });
}
function y(e) {
    var t;
    let { strategy: n = "clone", element: r = "div", children: o } = e,
        s = i.useContext(E);
    if (null == s) throw Error("TooltipTrigger must be used within TooltipRoot");
    let { triggerHandlers: c, triggerRef: u, tooltipId: d } = s,
        f = i.isValidElement(o) ? o : null,
        p = (0, a.Z)(null == f || null == (t = f.props) ? void 0 : t.ref, u);
    if ("clone" === n) return null == f ? null : (0, l.C9)(f, c, d, p);
    let m = h(_({}, c), {
        onFocus: (0, l.tS)(c.onFocus, (e) => {
            let t = e.target;
            if (null != t) {
                var n;
                let e = (0, l.QV)(null != (n = t.getAttribute("aria-describedby")) ? n : void 0, d);
                t.setAttribute("aria-describedby", e);
            }
        }),
    });
    return (0, l.FX)({
        element: r,
        children: o,
        triggerHandlers: m,
        triggerRef: u,
    });
}
function O(e) {
    var { children: t, asContainer: n = !1 } = e,
        o = m(e, ["children", "asContainer"]);
    return null == o.text || "" === o.text
        ? t
        : n
          ? (0, r.jsx)(
                b,
                h(_({}, o), {
                    children: (0, r.jsx)(y, {
                        strategy: "wrap",
                        element: "div",
                        children: t,
                    }),
                }),
            )
          : i.isValidElement(t)
            ? (0, r.jsx)(
                  b,
                  h(_({}, o), {
                      children: (0, r.jsx)(y, {
                          strategy: "clone",
                          children: t,
                      }),
                  }),
              )
            : null;
}
function v() {
    var e;
    let t = i.useContext(E);
    if (null == t) throw Error("TooltipContent must be used within TooltipRoot");
    let {
        isVisible: n,
        isRendered: a,
        handleExitComplete: c,
        onAnimationRest: d,
        tooltipId: f,
        targetElementRef: _,
        text: p,
        position: h,
        align: m,
        spacing: g,
        caretConfig: b,
        layerContext: y,
    } = t;
    return (0, u.Q)({
        shouldShow: n,
        caretPosition: null != (e = null == b ? void 0 : b.position) ? e : (0, l.Av)(h),
        onExitComplete: c,
        onAnimationRest: d,
    })((e, t) =>
        t
            ? (0, r.jsx)(s.N, {
                  isVisible: n,
                  isRendered: a,
                  targetElementRef: _,
                  id: f,
                  content: p,
                  position: h,
                  align: m,
                  spacing: g,
                  caretConfig: b,
                  layerContext: null != y ? y : o.nz,
                  animationStyle: e,
                  "data-mana-component": "tooltip",
              })
            : null,
    );
}
