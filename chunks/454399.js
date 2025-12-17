n.d(t, { i: () => O }), n(415506);
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
    p = n(464281),
    _ = n(342134),
    m = n(983887),
    h = n(945845);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
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
    var {
            children: t,
            title: n,
            body: a,
            asset: g,
            assetSize: y = 48,
            asContainer: O = !1,
            element: v = "span",
            position: S = "top",
            align: I = "center",
            spacing: T,
            caretConfig: C,
            layerContext: A,
            targetElementRef: N,
            anchorRef: P,
            positionKey: R,
            ariaHidden: w = !1,
        } = e,
        D = b(e, [
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
    let {
            tooltipId: x,
            isVisible: L,
            targetElementRef: j,
            trigger: M,
        } = (0, m.Q)(
            E(
                {
                    children: t,
                    targetElementRef: N,
                    asContainer: O,
                    containerTag: v,
                    ariaHidden: w,
                },
                D,
            ),
        ),
        k = null != n && ("string" != typeof n || "" !== n),
        U = null != g && !i.isValidElement(g),
        G = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: o()(h.richTooltipContent, { [h.noAsset]: null == g }),
                    children: [
                        null != g &&
                            (0, r.jsx)("div", {
                                className: h.assetContainer,
                                style: { width: y },
                                children: U ? (0, r.jsx)(l.zsu, E({}, g)) : g,
                            }),
                        (0, r.jsxs)("div", {
                            className: h.textContent,
                            children: [
                                k &&
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-sm/medium",
                                        children: n,
                                    }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: k ? "text-subtle" : "text-default",
                                    children: a,
                                }),
                            ],
                        }),
                    ],
                }),
            [g, y, n, a, k, U],
        ),
        Z = null != R ? R : "".concat((0, p.Sw)(null != n ? n : ""), "|").concat((0, p.Sw)(a)),
        F = (0, _.Q)({ shouldShow: L });
    if (!O && !i.isValidElement(t)) return null;
    let B = F((e, t) =>
        t
            ? (0, r.jsx)(f.pn, {
                  isRichTooltip: !0,
                  children: (0, r.jsx)(d.N, {
                      isVisible: L,
                      isRendered: !0,
                      targetElementRef: j,
                      anchorRef: P,
                      id: x,
                      content: G,
                      position: S,
                      align: I,
                      spacing: T,
                      caretConfig: C,
                      layerContext: null != A ? A : u.nz,
                      animationStyle: e,
                      positionKey: Z,
                      "data-mana-component": "rich-tooltip",
                  }),
              })
            : null,
    );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            M,
            w || null == G
                ? null
                : (0, r.jsx)(s.n, {
                      id: x,
                      children: G,
                  }),
            B,
        ],
    });
}
