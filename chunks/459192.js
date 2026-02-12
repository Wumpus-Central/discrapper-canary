"use strict";
n.d(t, { u: () => E });
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
    h = n(505679),
    p = n(747781),
    g = n(999630);
function E(e) {
    let {
            children: t,
            title: n,
            body: a,
            asset: E,
            assetSize: A = 48,
            asContainer: I = !1,
            element: T = "span",
            position: y = "top",
            align: S = "center",
            spacing: v,
            caretConfig: C,
            layerContext: b,
            targetElementRef: N,
            anchorRef: R,
            positionKey: O,
            ariaHidden: D = !1,
            ...L
        } = e,
        [w, x] = i.useState(null);
    i.useLayoutEffect(() => {
        null != R && x(R.current);
    }, [R]);
    let P = i.useCallback(
            (e) => {
                null == R && x(e), (0, f.cZ)(N, e);
            },
            [N, R],
        ),
        {
            tooltipId: M,
            isVisible: k,
            targetElementRef: U,
            trigger: G,
        } = (0, p.D)({ children: t, targetElementRef: P, asContainer: I, containerTag: T, ariaHidden: D, ...L }),
        F = null != n && ("string" != typeof n || "" !== n),
        V = null != E && !i.isValidElement(E),
        B = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: s()(g.jk, { [g.eb]: null == E }),
                    children: [
                        null != E &&
                            (0, r.jsx)("div", {
                                className: g.s,
                                style: { width: A },
                                children: V ? (0, r.jsx)(l.vYh, { ...E }) : E,
                            }),
                        (0, r.jsxs)("div", {
                            className: g.P_,
                            children: [
                                F && (0, r.jsx)(u.Text, { variant: "text-sm/medium", children: n }),
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    color: F ? "text-subtle" : "text-default",
                                    children: a,
                                }),
                            ],
                        }),
                    ],
                }),
            [E, A, n, a, F, V],
        ),
        j = O ?? `${(0, f.Xj)(n ?? "")}|${(0, f.Xj)(a)}`,
        H = (0, h.j)({ shouldShow: k });
    if (!I && !i.isValidElement(t)) return null;
    let Y = H((e, t) =>
        t
            ? (0, r.jsx)(_.Bc, {
                  isRichTooltip: !0,
                  children: (0, r.jsx)(d.R, {
                      isVisible: k,
                      isRendered: !0,
                      targetElementRef: U,
                      targetElement: w,
                      anchorRef: R,
                      id: M,
                      content: B,
                      position: y,
                      align: S,
                      spacing: v,
                      caretConfig: C,
                      layerContext: b ?? c.uY,
                      animationStyle: e,
                      positionKey: j,
                      "data-mana-component": "rich-tooltip",
                  }),
              })
            : null,
    );
    return (0, r.jsxs)(r.Fragment, {
        children: [G, D || null == B ? null : (0, r.jsx)(o.A, { id: M, children: B }), Y],
    });
}
