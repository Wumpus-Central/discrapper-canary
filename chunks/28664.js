n.d(t, { u: () => y }), n(35282), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(635041),
    o = n(793030),
    s = n(481060),
    l = n(550656),
    c = n(464281),
    u = n(102725),
    d = n(342134),
    f = n(966327),
    p = n(847310);
function _(e, t, n) {
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
function m(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
            : h(Object(t)).forEach(function (n) {
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
            text: _,
            keyboardShortcut: h,
            __unsupportedReactNodeAsText: b,
            asContainer: y = !1,
            tag: O = "span",
            position: v = "top",
            align: S = "center",
            spacing: I,
            layerContext: T,
            targetElementRef: C,
            anchorRef: A,
            caretConfig: N,
            positionKey: P,
            ariaHidden: R = !1,
        } = e,
        w = E(e, [
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
            "anchorRef",
            "caretConfig",
            "positionKey",
            "ariaHidden",
        ]);
    let D = (0, f.c)(C),
        x = i.useId(),
        { isVisible: L, triggerProps: j } = (0, u.l)(m({ targetElementRef: D.targetElementRef }, w)),
        M = R ? void 0 : x,
        k = (0, d.Q)({ shouldShow: L }),
        { defaultLayerContext: U } = (0, o.ZFG)(),
        G = i.useMemo(
            () =>
                null != b
                    ? b
                    : null == _ || "" === _
                      ? null
                      : null != h && "" !== h
                        ? (0, r.jsxs)("div", {
                              className: p.tooltipWithShortcut,
                              children: [
                                  (0, r.jsx)(s.Text, {
                                      variant: "text-sm/medium",
                                      children: _,
                                  }),
                                  (0, r.jsx)(s.M2$, { shortcut: h }),
                              ],
                          })
                        : _,
            [_, h, b],
        );
    if (null == G || ("string" == typeof G && "" === G)) return n;
    if (null == n) return null;
    let Z = null != P ? P : (0, c.Sw)(_);
    if (y) {
        let e = R
            ? j
            : g(m({}, j), {
                  onFocus: (0, c.tS)(j.onFocus, (e) => {
                      let t = e.target;
                      if (null != t) {
                          var n;
                          let e = (0, c.QV)(null != (n = t.getAttribute("aria-describedby")) ? n : void 0, x);
                          t.setAttribute("aria-describedby", e);
                      }
                  }),
                  onBlur: (0, c.tS)(j.onBlur, (e) => {
                      let t = e.target;
                      if (null != t) {
                          let e = t.getAttribute("aria-describedby");
                          if (null != e) {
                              let n = e.split(" ").filter((e) => e !== x);
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
            triggerRef: D.triggerRef,
        });
    } else {
        if (!i.isValidElement(n)) return null;
        t = (0, c.C9)(n, j, M, D.triggerRef);
    }
    let F = k((e, t) =>
        t
            ? (0, r.jsx)(l.N, {
                  isVisible: L,
                  isRendered: !0,
                  targetElementRef: D.targetElementRef,
                  anchorRef: A,
                  id: x,
                  content: G,
                  position: v,
                  align: S,
                  spacing: I,
                  caretConfig: N,
                  layerContext: null != T ? T : U,
                  animationStyle: e,
                  positionKey: Z,
              })
            : null,
    );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t,
            R || null == G || "" === G
                ? null
                : (0, r.jsx)(a.n, {
                      id: x,
                      children: G,
                  }),
            F,
        ],
    });
}
