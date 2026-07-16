n.d(t, { K: () => j, A: () => C });
var a = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(536001),
    i = n(140735),
    d = n(194981),
    o = n(331322),
    c = n(834730),
    u = n(297264),
    f = n(280336),
    E = n(747556),
    m = n(255434),
    g = n(710778),
    p = n(260981),
    b = n(540418),
    _ = n(907085),
    h = n(179820),
    A = n(375708),
    R = n(910621),
    x = n(175501);
function N(e) {
    let { rarity: t, className: n } = e,
        l = (function (e) {
            switch (e) {
                case s.x.COMMON:
                    return { Icon: p.p, className: x["rarity-common"], label: A.intl.string(A.t.L0K5ci) };
                case s.x.RARE:
                    return { Icon: b.A, className: x["rarity-rare"], label: A.intl.string(A.t["sTx/5z"]) };
                case s.x.EPIC:
                    return { Icon: _.b, className: x["rarity-epic"], label: A.intl.string(A.t.RD8RiN) };
                case s.x.MYTHIC:
                    return { Icon: h.O, className: x["rarity-mythic"], label: A.intl.string(A.t.vqc1ol) };
                default:
                    return null;
            }
        })(t);
    if (null == l) return null;
    let { Icon: i, className: d, label: o } = l;
    return (0, a.jsx)("div", {
        role: "img",
        "aria-label": o,
        className: r()(R.T, d, n),
        children: (0, a.jsx)(i, { size: "xxs", color: "currentColor" }),
    });
}
var v = n(140049),
    I = n(518477),
    T = n(128845);
function j(e) {
    let {
            children: t,
            title: n,
            eyebrow: l,
            body: p,
            variant: b = "default",
            badgeImage: _,
            badgeName: h,
            progressCircle: A,
            rarity: R,
            isAnimated: x = !1,
            targetElementRef: j,
            onShow: C,
            position: S = "top",
        } = e,
        D = x && null == A,
        {
            tooltipId: y,
            isVisible: M,
            targetElementRef: O,
            trigger: P,
        } = (0, d.D)({ children: t, targetElementRef: j, delay: I.In, onTooltipShow: C }),
        U = null != R && R !== s.x.COMMON,
        B = (0, a.jsxs)("div", {
            className: T.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                U && (0, a.jsx)("div", { className: T.xV, children: (0, a.jsx)(N, { rarity: R }) }),
                (0, a.jsx)("div", {
                    className: r()(T.fA, { [T.qJ]: D }),
                    "aria-hidden": !0,
                    children: (0, a.jsx)(v.BadgeImageWithProgressCircle, {
                        src: _,
                        alt: h,
                        progressCircleText: A?.text,
                        progressCirclePercent: A?.percent,
                        progressCircleUrgency: A?.urgency,
                        compact: !0,
                    }),
                }),
                (0, a.jsxs)(o.B, {
                    gap: 4,
                    align: "center",
                    className: T.i8,
                    children: [
                        null != l &&
                            (0, a.jsx)(c.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: T.UP,
                                children: l,
                            }),
                        (0, a.jsx)(u.D, {
                            variant: "display-sm",
                            color: "text-strong",
                            className: r()(T.DD, { [T.x$]: "nitro" === b }),
                            children: n,
                        }),
                        null != p &&
                            (0, a.jsx)(c.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: T.rf,
                                children: p,
                            }),
                    ],
                }),
            ],
        }),
        k = null != p ? `${h}. ${p}` : h,
        G = (0, f.j)({ shouldShow: M })((e, t) =>
            t
                ? (0, a.jsx)(E.Bc, {
                      isRichTooltip: !0,
                      children: (0, a.jsx)(m.R, {
                          isVisible: M,
                          isRendered: !0,
                          targetElementRef: O,
                          content: B,
                          position: S,
                          align: "center",
                          animationStyle: e,
                          positionKey: (0, g.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, a.jsxs)(a.Fragment, { children: [P, (0, a.jsx)(i.A, { id: y, children: k }), G] });
}
let C = j;
