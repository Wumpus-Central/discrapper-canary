n.d(t, { u: () => O }), n(896048), n(65821);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(140735),
    l = n(158954),
    c = n(397927),
    u = n(750506),
    d = n(717995),
    f = n(112317),
    p = n(348275),
    _ = n(505679),
    h = n(747781),
    m = n(999630);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = y(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function O(e) {
    let {
            children: t,
            title: n,
            body: a,
            asset: g,
            assetSize: y = 48,
            asContainer: O = !1,
            element: A = "span",
            position: v = "top",
            align: S = "center",
            spacing: I,
            caretConfig: T,
            layerContext: C,
            targetElementRef: N,
            anchorRef: R,
            positionKey: w,
            ariaHidden: P = !1,
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
        ]),
        [x, L] = i.useState(null);
    i.useLayoutEffect(() => {
        null != R && L(R.current);
    }, [R]);
    let j = i.useCallback(
            (e) => {
                null == R && L(e), (0, p.cZ)(N, e);
            },
            [N, R],
        ),
        {
            tooltipId: M,
            isVisible: k,
            targetElementRef: U,
            trigger: G,
        } = (0, h.D)(
            E(
                {
                    children: t,
                    targetElementRef: j,
                    asContainer: O,
                    containerTag: A,
                    ariaHidden: P,
                },
                D,
            ),
        ),
        V = null != n && ("string" != typeof n || "" !== n),
        F = null != g && !i.isValidElement(g),
        B = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: s()(m.jk, { [m.eb]: null == g }),
                    children: [
                        null != g &&
                            (0, r.jsx)("div", {
                                className: m.s,
                                style: { width: y },
                                children: F ? (0, r.jsx)(l.vYh, E({}, g)) : g,
                            }),
                        (0, r.jsxs)("div", {
                            className: m.P_,
                            children: [
                                V &&
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-sm/medium",
                                        children: n,
                                    }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: V ? "text-subtle" : "text-default",
                                    children: a,
                                }),
                            ],
                        }),
                    ],
                }),
            [g, y, n, a, V, F],
        ),
        H = null != w ? w : "".concat((0, p.Xj)(null != n ? n : ""), "|").concat((0, p.Xj)(a)),
        Y = (0, _.j)({ shouldShow: k });
    if (!O && !i.isValidElement(t)) return null;
    let W = Y((e, t) =>
        t
            ? (0, r.jsx)(f.Bc, {
                  isRichTooltip: !0,
                  children: (0, r.jsx)(d.R, {
                      isVisible: k,
                      isRendered: !0,
                      targetElementRef: U,
                      targetElement: x,
                      anchorRef: R,
                      id: M,
                      content: B,
                      position: v,
                      align: S,
                      spacing: I,
                      caretConfig: T,
                      layerContext: null != C ? C : u.uY,
                      animationStyle: e,
                      positionKey: H,
                      "data-mana-component": "rich-tooltip",
                  }),
              })
            : null,
    );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            G,
            P || null == B
                ? null
                : (0, r.jsx)(o.A, {
                      id: M,
                      children: B,
                  }),
            W,
        ],
    });
}
