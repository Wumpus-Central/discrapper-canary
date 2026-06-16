"use strict";
n.d(t, { K: () => O, A: () => b });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(536001),
    o = n(140735),
    l = n(237140),
    u = n(112317),
    c = n(348275),
    d = n(505679),
    _ = n(521754),
    h = n(331322),
    f = n(834730),
    p = n(534514),
    E = n(260981),
    m = n(540418),
    g = n(907085),
    A = n(179820),
    I = n(375708),
    T = n(910621),
    S = n(175501);
function y(e) {
    let { rarity: t, className: n } = e,
        r = (function (e) {
            switch (e) {
                case a.x.COMMON:
                    return { Icon: E.p, className: S["rarity-common"], label: I.intl.string(I.t.L0K5ci) };
                case a.x.RARE:
                    return { Icon: m.A, className: S["rarity-rare"], label: I.intl.string(I.t["sTx/5z"]) };
                case a.x.EPIC:
                    return { Icon: g.b, className: S["rarity-epic"], label: I.intl.string(I.t.RD8RiN) };
                case a.x.MYTHIC:
                    return { Icon: A.O, className: S["rarity-mythic"], label: I.intl.string(I.t.vqc1ol) };
                default:
                    return null;
            }
        })(t);
    if (null == r) return null;
    let { Icon: o, className: l, label: u } = r;
    return (0, i.jsx)("div", {
        role: "img",
        "aria-label": u,
        className: s()(T.T, l, n),
        children: (0, i.jsx)(o, { size: "xxs", color: "currentColor" }),
    });
}
var C = n(750506),
    N = n(140049),
    v = n(518477),
    R = n(128845);
function O(e) {
    let {
            children: t,
            title: n,
            eyebrow: r,
            body: E,
            variant: m = "default",
            badgeImage: g,
            badgeName: A,
            progressCircle: I,
            rarity: T,
            isAnimated: S = !1,
            targetElementRef: O,
            onShow: b,
            position: D = "top",
        } = e,
        L = S && null == I,
        {
            tooltipId: w,
            isVisible: M,
            targetElementRef: P,
            trigger: x,
        } = (0, _.D)({ children: t, targetElementRef: O, delay: v.In, onTooltipShow: b }),
        k = null != T && T !== a.x.COMMON,
        U = (0, i.jsxs)("div", {
            className: R.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                k && (0, i.jsx)("div", { className: R.xV, children: (0, i.jsx)(y, { rarity: T }) }),
                (0, i.jsx)("div", {
                    className: s()(R.fA, { [R.qJ]: L }),
                    "aria-hidden": !0,
                    children: (0, i.jsx)(N.BadgeImageWithProgressCircle, {
                        src: g,
                        alt: A,
                        progressCircleText: I?.text,
                        progressCirclePercent: I?.percent,
                        progressCircleUrgency: I?.urgency,
                        compact: !0,
                    }),
                }),
                (0, i.jsxs)(h.B, {
                    gap: 4,
                    align: "center",
                    className: R.i8,
                    children: [
                        null != r &&
                            (0, i.jsx)(f.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: R.UP,
                                children: r,
                            }),
                        (0, i.jsx)(p.D, {
                            variant: "display-sm",
                            color: "text-strong",
                            className: s()(R.DD, { [R.x$]: "nitro" === m }),
                            children: n,
                        }),
                        null != E &&
                            (0, i.jsx)(f.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: R.rf,
                                children: E,
                            }),
                    ],
                }),
            ],
        }),
        G = null != E ? `${A}. ${E}` : A,
        F = (0, d.j)({ shouldShow: M })((e, t) =>
            t
                ? (0, i.jsx)(u.Bc, {
                      isRichTooltip: !0,
                      children: (0, i.jsx)(l.R, {
                          isVisible: M,
                          isRendered: !0,
                          targetElementRef: P,
                          content: U,
                          position: D,
                          align: "center",
                          layerContext: C.uY,
                          animationStyle: e,
                          positionKey: (0, c.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, i.jsxs)(i.Fragment, { children: [x, (0, i.jsx)(o.A, { id: w, children: G }), F] });
}
let b = O;
