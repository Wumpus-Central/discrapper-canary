n.d(t, { i: () => O }), n(35282), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(635041),
    o = n(481060),
    s = n(314910),
    l = n(550656),
    c = n(725027),
    u = n(464281),
    d = n(102725),
    f = n(342134),
    _ = n(966327),
    p = n(890955);
function h(e, t, n) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function O(e) {
    let t;
    var {
            children: n,
            title: h,
            body: g,
            asset: y,
            asContainer: O = !1,
            element: v = "span",
            position: I = "top",
            align: S = "center",
            spacing: T,
            caretConfig: A,
            layerContext: C,
            targetElementRef: N,
            anchorRef: R,
            positionKey: P,
            ariaHidden: w = !1,
        } = e,
        D = b(e, [
            "children",
            "title",
            "body",
            "asset",
            "asContainer",
            "element",
            "position",
            "align",
            "spacing",
            "caretConfig",
            "layerContext",
            "targetElementRef",
            "anchorRef",
            "positionKey",
            "ariaHidden",
        ]);
    let x = (0, _.c)(N),
        L = i.useId(),
        M = w ? void 0 : L,
        j = null != h && ("string" != typeof h || "" !== h),
        k = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: p.richTooltipContent,
                    children: [
                        null != y &&
                            (0, r.jsx)("div", {
                                className: p.assetContainer,
                                children: y,
                            }),
                        (0, r.jsxs)("div", {
                            className: p.textContent,
                            children: [
                                j &&
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-sm/bold",
                                        children: h,
                                    }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    color: j ? "text-secondary" : "text-primary",
                                    children: g,
                                }),
                            ],
                        }),
                    ],
                }),
            [y, h, g, j],
        ),
        { isVisible: U, triggerProps: G } = (0, d.l)(m({ targetElementRef: x.targetElementRef }, D)),
        B = null != P ? P : "".concat((0, u.Sw)(null != h ? h : ""), "|").concat((0, u.Sw)(g)),
        Z = (0, f.Q)({ shouldShow: U });
    if (O) {
        let e = w
            ? G
            : E(m({}, G), {
                  onFocus: (0, u.tS)(G.onFocus, (e) => {
                      let t = e.target;
                      if (null != t) {
                          var n;
                          let e = (0, u.QV)(null != (n = t.getAttribute("aria-describedby")) ? n : void 0, L);
                          t.setAttribute("aria-describedby", e);
                      }
                  }),
                  onBlur: (0, u.tS)(G.onBlur, (e) => {
                      let t = e.target;
                      if (null != t) {
                          let e = t.getAttribute("aria-describedby");
                          if (null != e) {
                              let n = e.split(" ").filter((e) => e !== L);
                              n.length > 0
                                  ? t.setAttribute("aria-describedby", n.join(" "))
                                  : t.removeAttribute("aria-describedby");
                          }
                      }
                  }),
              });
        t = (0, u.FX)({
            tag: v,
            children: n,
            triggerHandlers: e,
            triggerRef: x.triggerRef,
        });
    } else {
        if (!i.isValidElement(n)) return null;
        t = (0, u.C9)(n, G, M, x.triggerRef);
    }
    let F = Z((e, t) =>
        t
            ? (0, r.jsx)(c.pn, {
                  isRichTooltip: !0,
                  children: (0, r.jsx)(l.N, {
                      isVisible: U,
                      isRendered: !0,
                      targetElementRef: x.targetElementRef,
                      anchorRef: R,
                      id: L,
                      content: k,
                      position: I,
                      align: S,
                      spacing: T,
                      caretConfig: A,
                      layerContext: null != C ? C : s.nz,
                      animationStyle: e,
                      positionKey: B,
                      "data-mana-component": "rich-tooltip",
                  }),
              })
            : null,
    );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t,
            w || null == k
                ? null
                : (0, r.jsx)(a.n, {
                      id: L,
                      children: k,
                  }),
            F,
        ],
    });
}
