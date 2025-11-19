n.d(t, { i: () => T }), n(35282), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(635041),
    l = n(793030),
    c = n(481060),
    u = n(314910),
    d = n(550656),
    f = n(725027),
    _ = n(464281),
    p = n(102725),
    h = n(342134),
    m = n(966327),
    g = n(890955);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function T(e) {
    let t;
    var {
            children: n,
            title: a,
            body: E,
            asset: y,
            assetSize: I = 48,
            asContainer: T = !1,
            element: S = "span",
            position: A = "top",
            align: C = "center",
            spacing: N,
            caretConfig: R,
            layerContext: P,
            targetElementRef: D,
            anchorRef: w,
            positionKey: L,
            ariaHidden: x = !1,
        } = e,
        M = v(e, [
            "children",
            "title",
            "body",
            "asset",
            "assetSize",
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
    let j = (0, m.c)(D),
        k = i.useId(),
        U = x ? void 0 : k,
        G = null != a && ("string" != typeof a || "" !== a),
        B = null != y && !i.isValidElement(y),
        Z = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: o()(g.richTooltipContent, { [g.noAsset]: null == y }),
                    children: [
                        null != y &&
                            (0, r.jsx)("div", {
                                className: g.assetContainer,
                                style: { width: I },
                                children: B ? (0, r.jsx)(l.zsu, b({}, y)) : y,
                            }),
                        (0, r.jsxs)("div", {
                            className: g.textContent,
                            children: [
                                G &&
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-sm/medium",
                                        children: a,
                                    }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: G ? "text-secondary" : "text-default",
                                    children: E,
                                }),
                            ],
                        }),
                    ],
                }),
            [y, I, a, E, G, B],
        ),
        { isVisible: F, triggerProps: V } = (0, p.l)(b({ targetElementRef: j.targetElementRef }, M)),
        H = null != L ? L : "".concat((0, _.Sw)(null != a ? a : ""), "|").concat((0, _.Sw)(E)),
        Y = (0, h.Q)({ shouldShow: F });
    if (T) {
        let e = x
            ? V
            : O(b({}, V), {
                  onFocus: (0, _.tS)(V.onFocus, (e) => {
                      let t = e.target;
                      if (null != t) {
                          var n;
                          let e = (0, _.QV)(null != (n = t.getAttribute("aria-describedby")) ? n : void 0, k);
                          t.setAttribute("aria-describedby", e);
                      }
                  }),
                  onBlur: (0, _.tS)(V.onBlur, (e) => {
                      let t = e.target;
                      if (null != t) {
                          let e = t.getAttribute("aria-describedby");
                          if (null != e) {
                              let n = e.split(" ").filter((e) => e !== k);
                              n.length > 0
                                  ? t.setAttribute("aria-describedby", n.join(" "))
                                  : t.removeAttribute("aria-describedby");
                          }
                      }
                  }),
              });
        t = (0, _.FX)({
            tag: S,
            children: n,
            triggerHandlers: e,
            triggerRef: j.triggerRef,
        });
    } else {
        if (!i.isValidElement(n)) return null;
        t = (0, _.C9)(n, V, U, j.triggerRef);
    }
    let W = Y((e, t) =>
        t
            ? (0, r.jsx)(f.pn, {
                  isRichTooltip: !0,
                  children: (0, r.jsx)(d.N, {
                      isVisible: F,
                      isRendered: !0,
                      targetElementRef: j.targetElementRef,
                      anchorRef: w,
                      id: k,
                      content: Z,
                      position: A,
                      align: C,
                      spacing: N,
                      caretConfig: R,
                      layerContext: null != P ? P : u.nz,
                      animationStyle: e,
                      positionKey: H,
                      "data-mana-component": "rich-tooltip",
                  }),
              })
            : null,
    );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t,
            x || null == Z
                ? null
                : (0, r.jsx)(s.n, {
                      id: k,
                      children: Z,
                  }),
            W,
        ],
    });
}
