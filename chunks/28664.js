n.d(t, { u: () => O }), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(314910),
    o = n(747127),
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let E = i.createContext(null);
function b(e) {
    var {
            children: t,
            text: n,
            position: a = "top",
            align: o = "center",
            spacing: s,
            layerContext: l,
            onAnimationRest: u,
            targetElementRef: f,
            caretConfig: p,
        } = e,
        h = m(e, [
            "children",
            "text",
            "position",
            "align",
            "spacing",
            "layerContext",
            "onAnimationRest",
            "targetElementRef",
            "caretConfig",
        ]);
    let g = (0, d.c)(f),
        b = i.useId(),
        {
            isVisible: y,
            isRendered: O,
            triggerProps: I,
            handleExitComplete: T,
        } = (0, c.l)(_({ targetElementRef: g.targetElementRef }, h)),
        S = i.useMemo(
            () => ({
                triggerHandlers: I,
                triggerRef: g.triggerRef,
                targetElementRef: g.targetElementRef,
                tooltipId: b,
                isVisible: y,
                isRendered: O,
                text: n,
                position: a,
                align: o,
                spacing: s,
                caretConfig: p,
                layerContext: l,
                onAnimationRest: u,
                handleExitComplete: T,
                positionKey: "string" == typeof n ? n : void 0,
            }),
            [I, g.triggerRef, g.targetElementRef, b, y, O, n, a, o, s, p, l, u, T],
        );
    return (0, r.jsxs)(E.Provider, {
        value: S,
        children: [t, (0, r.jsx)(v, {})],
    });
}
function y(e) {
    var t;
    let { strategy: n = "clone", tag: r = "div", children: a } = e,
        s = i.useContext(E);
    if (null == s) throw Error("TooltipTrigger must be used within TooltipRoot");
    let { triggerHandlers: c, triggerRef: u, tooltipId: d } = s,
        f = i.isValidElement(a) ? a : null,
        p = (0, o.Z)(null == f || null == (t = f.props) ? void 0 : t.ref, u);
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
        tag: r,
        children: a,
        triggerHandlers: m,
        triggerRef: u,
    });
}
function O(e) {
    var { children: t, asContainer: n = !1, tag: a = "div" } = e,
        o = m(e, ["children", "asContainer", "tag"]);
    return null == o.text || "" === o.text
        ? t
        : n
          ? (0, r.jsx)(
                b,
                h(_({}, o), {
                    children: (0, r.jsx)(y, {
                        strategy: "wrap",
                        tag: a,
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
        isRendered: o,
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
        positionKey: O,
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
                  isRendered: o,
                  targetElementRef: _,
                  id: f,
                  content: p,
                  position: h,
                  align: m,
                  spacing: g,
                  caretConfig: b,
                  layerContext: null != y ? y : a.nz,
                  animationStyle: e,
                  positionKey: O,
                  "data-mana-component": "tooltip",
              })
            : null,
    );
}
