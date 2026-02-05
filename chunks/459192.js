"use strict";
n.d(t, { u: () => g });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(140735),
    l = n(158954),
    u = n(397927),
    c = n(750506),
    d = n(717995),
    _ = n(112317),
    f = n(348275),
    p = n(505679),
    h = n(747781),
    m = n(999630);
function g(e) {
    let {
            children: t,
            title: n,
            body: a,
            asset: g,
            assetSize: E = 48,
            asContainer: A = !1,
            element: I = "span",
            position: T = "top",
            align: y = "center",
            spacing: S,
            caretConfig: v,
            layerContext: C,
            targetElementRef: b,
            anchorRef: N,
            positionKey: R,
            ariaHidden: O = !1,
            ...D
        } = e,
        [L, w] = i.useState(null);
    i.useLayoutEffect(() => {
        null != N && w(N.current);
    }, [N]);
    let x = i.useCallback(
            (e) => {
                null == N && w(e), (0, f.cZ)(b, e);
            },
            [b, N],
        ),
        {
            tooltipId: P,
            isVisible: M,
            targetElementRef: k,
            trigger: U,
        } = (0, h.D)({ children: t, targetElementRef: x, asContainer: A, containerTag: I, ariaHidden: O, ...D }),
        G = null != n && ("string" != typeof n || "" !== n),
        V = null != g && !i.isValidElement(g),
        F = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: s()(m.jk, { [m.eb]: null == g }),
                    children: [
                        null != g &&
                            (0, r.jsx)("div", {
                                className: m.s,
                                style: { width: E },
                                children: V ? (0, r.jsx)(l.vYh, { ...g }) : g,
                            }),
                        (0, r.jsxs)("div", {
                            className: m.P_,
                            children: [
                                G && (0, r.jsx)(u.Text, { variant: "text-sm/medium", children: n }),
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    color: G ? "text-subtle" : "text-default",
                                    children: a,
                                }),
                            ],
                        }),
                    ],
                }),
            [g, E, n, a, G, V],
        ),
        B = R ?? `${(0, f.Xj)(n ?? "")}|${(0, f.Xj)(a)}`,
        j = (0, p.j)({ shouldShow: M });
    if (!A && !i.isValidElement(t)) return null;
    let H = j((e, t) =>
        t
            ? (0, r.jsx)(_.Bc, {
                  isRichTooltip: !0,
                  children: (0, r.jsx)(d.R, {
                      isVisible: M,
                      isRendered: !0,
                      targetElementRef: k,
                      targetElement: L,
                      anchorRef: N,
                      id: P,
                      content: F,
                      position: T,
                      align: y,
                      spacing: S,
                      caretConfig: v,
                      layerContext: C ?? c.uY,
                      animationStyle: e,
                      positionKey: B,
                      "data-mana-component": "rich-tooltip",
                  }),
              })
            : null,
    );
    return (0, r.jsxs)(r.Fragment, {
        children: [U, O || null == F ? null : (0, r.jsx)(o.A, { id: P, children: F }), H],
    });
}
