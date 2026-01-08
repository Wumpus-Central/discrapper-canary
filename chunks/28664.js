n.d(t, { u: () => g }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(635041),
    o = n(793030),
    s = n(481060),
    l = n(550656),
    c = n(464281),
    u = n(342134),
    d = n(983887),
    f = n(847310);
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e) {
    var {
            children: t,
            text: n,
            keyboardShortcut: p,
            __unsupportedReactNodeAsText: h,
            asContainer: g = !1,
            tag: E = "span",
            position: b = "top",
            align: y = "center",
            spacing: O,
            layerContext: v,
            targetElementRef: S,
            anchorRef: I,
            caretConfig: T,
            positionKey: C,
            ariaHidden: A = !1,
        } = e,
        N = m(e, [
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
    let [P, R] = i.useState(null);
    i.useLayoutEffect(() => {
        null != I && R(I.current);
    }, [I]);
    let w = i.useCallback(
            (e) => {
                null == I && R(e), (0, c.k$)(S, e);
            },
            [S, I],
        ),
        {
            tooltipId: D,
            isVisible: x,
            targetElementRef: L,
            trigger: j,
        } = (0, d.Q)(
            _(
                {
                    children: t,
                    targetElementRef: w,
                    asContainer: g,
                    containerTag: E,
                    ariaHidden: A,
                },
                N,
            ),
        ),
        [M, k] = i.useState(!1),
        { defaultLayerContext: U } = (0, o.ZFG)(),
        G = i.useMemo(
            () =>
                null != h
                    ? h
                    : null == n || "" === n
                      ? null
                      : null != p && "" !== p
                        ? (0, r.jsxs)("div", {
                              className: f.tooltipWithShortcut,
                              children: [
                                  (0, r.jsx)(s.Text, {
                                      variant: "text-sm/medium",
                                      children: n,
                                  }),
                                  (0, r.jsx)(s.M2$, { shortcut: p }),
                              ],
                          })
                        : n,
            [n, p, h],
        ),
        Z = null != G && ("string" != typeof G || "" !== G),
        F = x || M;
    i.useEffect(() => {
        x && Z ? k(!0) : Z || k(!1);
    }, [x, Z]);
    let B = i.useCallback(() => {
            k(!1);
        }, []),
        V = (0, u.Q)({
            shouldShow: x,
            onExitComplete: B,
        });
    if (!Z && (x || !M)) return t;
    if (null == t || (!g && !i.isValidElement(t))) return null;
    let H = null != C ? C : (0, c.Sw)(n),
        Y = V((e, t) =>
            t
                ? (0, r.jsx)(l.N, {
                      isVisible: x,
                      isRendered: F,
                      targetElementRef: L,
                      targetElement: P,
                      anchorRef: I,
                      id: D,
                      content: G,
                      position: b,
                      align: y,
                      spacing: O,
                      caretConfig: T,
                      layerContext: null != v ? v : U,
                      animationStyle: e,
                      positionKey: H,
                  })
                : null,
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            j,
            A || null == G || "" === G
                ? null
                : (0, r.jsx)(a.n, {
                      id: D,
                      children: G,
                  }),
            Y,
        ],
    });
}
