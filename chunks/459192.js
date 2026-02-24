"use strict";
n.d(t, { u: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(140735),
    l = n(158954),
    u = n(397927),
    c = n(750506),
    d = n(717995),
    _ = n(112317),
    f = n(348275),
    p = n(505679),
    h = n(747781),
    m = n(93476);
function E(e) {
    let {
            children: t,
            title: n,
            body: s,
            asset: E,
            assetSize: g = 48,
            padding: A = "default",
            asContainer: I = !1,
            element: T = "span",
            position: S = "top",
            align: y = "center",
            spacing: v,
            caretConfig: N,
            layerContext: C,
            targetElementRef: b,
            anchorRef: R,
            positionKey: O,
            ariaHidden: D = !1,
            ...L
        } = e,
        [w, x] = i.useState(null);
    i.useLayoutEffect(() => {
        null != R && x(R.current);
    }, [R]);
    let M = i.useCallback(
            (e) => {
                null == R && x(e), (0, f.cZ)(b, e);
            },
            [b, R],
        ),
        {
            tooltipId: P,
            isVisible: k,
            targetElementRef: U,
            trigger: G,
        } = (0, h.D)({ children: t, targetElementRef: M, asContainer: I, containerTag: T, ariaHidden: D, ...L }),
        F = null != n && ("string" != typeof n || "" !== n),
        V = null != E && !i.isValidElement(E),
        B = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: a()(m.jk, { [m.eb]: null == E, [m.Sx]: "lg" === A }),
                    children: [
                        null != E &&
                            (0, r.jsx)("div", {
                                className: m.s,
                                style: { width: g },
                                children: V ? (0, r.jsx)(l.vYh, { ...E }) : E,
                            }),
                        (0, r.jsxs)("div", {
                            className: m.P_,
                            children: [
                                F && (0, r.jsx)(u.Text, { variant: "text-sm/medium", children: n }),
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    color: F ? "text-subtle" : "text-default",
                                    children: s,
                                }),
                            ],
                        }),
                    ],
                }),
            [E, g, A, n, s, F, V],
        ),
        H = O ?? `${(0, f.Xj)(n ?? "")}|${(0, f.Xj)(s)}`,
        j = (0, p.j)({ shouldShow: k });
    if (!I && !i.isValidElement(t)) return null;
    let Y = j((e, t) =>
        t
            ? (0, r.jsx)(_.Bc, {
                  isRichTooltip: !0,
                  richTooltipPadding: A,
                  children: (0, r.jsx)(d.R, {
                      isVisible: k,
                      isRendered: !0,
                      targetElementRef: U,
                      targetElement: w,
                      anchorRef: R,
                      id: P,
                      content: B,
                      position: S,
                      align: y,
                      spacing: v,
                      caretConfig: N,
                      layerContext: C ?? c.uY,
                      animationStyle: e,
                      positionKey: H,
                      "data-mana-component": "rich-tooltip",
                  }),
              })
            : null,
    );
    return (0, r.jsxs)(r.Fragment, {
        children: [G, D || null == B ? null : (0, r.jsx)(o.A, { id: P, children: B }), Y],
    });
}
