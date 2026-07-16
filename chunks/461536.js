"use strict";
n.d(t, { K: () => L, A: () => D });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(536001),
    l = n(140735),
    o = n(194981),
    d = n(331322),
    c = n(834730),
    u = n(297264),
    _ = n(280336),
    E = n(747556),
    A = n(255434),
    h = n(710778),
    I = n(260981),
    f = n(540418),
    p = n(907085),
    T = n(179820),
    m = n(375708),
    g = n(910621),
    S = n(175501);
function N(e) {
    let { rarity: t, className: n } = e,
        r = (function (e) {
            switch (e) {
                case s.x.COMMON:
                    return { Icon: I.p, className: S["rarity-common"], label: m.intl.string(m.t.L0K5ci) };
                case s.x.RARE:
                    return { Icon: f.A, className: S["rarity-rare"], label: m.intl.string(m.t["sTx/5z"]) };
                case s.x.EPIC:
                    return { Icon: p.b, className: S["rarity-epic"], label: m.intl.string(m.t.RD8RiN) };
                case s.x.MYTHIC:
                    return { Icon: T.O, className: S["rarity-mythic"], label: m.intl.string(m.t.vqc1ol) };
                default:
                    return null;
            }
        })(t);
    if (null == r) return null;
    let { Icon: l, className: o, label: d } = r;
    return (0, i.jsx)("div", {
        role: "img",
        "aria-label": d,
        className: a()(g.T, o, n),
        children: (0, i.jsx)(l, { size: "xxs", color: "currentColor" }),
    });
}
var C = n(140049),
    R = n(518477),
    O = n(128845);
function L(e) {
    let {
            children: t,
            title: n,
            eyebrow: r,
            body: I,
            variant: f = "default",
            badgeImage: p,
            badgeName: T,
            progressCircle: m,
            rarity: g,
            isAnimated: S = !1,
            targetElementRef: L,
            onShow: D,
            position: y = "top",
        } = e,
        v = S && null == m,
        {
            tooltipId: b,
            isVisible: M,
            targetElementRef: P,
            trigger: U,
        } = (0, o.D)({ children: t, targetElementRef: L, delay: R.In, onTooltipShow: D }),
        w = null != g && g !== s.x.COMMON,
        G = (0, i.jsxs)("div", {
            className: O.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                w && (0, i.jsx)("div", { className: O.xV, children: (0, i.jsx)(N, { rarity: g }) }),
                (0, i.jsx)("div", {
                    className: a()(O.fA, { [O.qJ]: v }),
                    "aria-hidden": !0,
                    children: (0, i.jsx)(C.BadgeImageWithProgressCircle, {
                        src: p,
                        alt: T,
                        progressCircleText: m?.text,
                        progressCirclePercent: m?.percent,
                        progressCircleUrgency: m?.urgency,
                        compact: !0,
                    }),
                }),
                (0, i.jsxs)(d.B, {
                    gap: 4,
                    align: "center",
                    className: O.i8,
                    children: [
                        null != r &&
                            (0, i.jsx)(c.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: O.UP,
                                children: r,
                            }),
                        (0, i.jsx)(u.D, {
                            variant: "display-sm",
                            color: "text-strong",
                            className: a()(O.DD, { [O.x$]: "nitro" === f }),
                            children: n,
                        }),
                        null != I &&
                            (0, i.jsx)(c.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: O.rf,
                                children: I,
                            }),
                    ],
                }),
            ],
        }),
        x = null != I ? `${T}. ${I}` : T,
        k = (0, _.j)({ shouldShow: M })((e, t) =>
            t
                ? (0, i.jsx)(E.Bc, {
                      isRichTooltip: !0,
                      children: (0, i.jsx)(A.R, {
                          isVisible: M,
                          isRendered: !0,
                          targetElementRef: P,
                          content: G,
                          position: y,
                          align: "center",
                          animationStyle: e,
                          positionKey: (0, h.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, i.jsxs)(i.Fragment, { children: [U, (0, i.jsx)(l.A, { id: b, children: x }), k] });
}
let D = L;
