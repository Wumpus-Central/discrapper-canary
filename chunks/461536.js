n.d(t, { K: () => N, A: () => k });
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    a = n(536001),
    s = n(140735),
    o = n(237140),
    d = n(112317),
    u = n(348275),
    c = n(505679),
    m = n(521754),
    g = n(331322),
    f = n(834730),
    p = n(534514),
    h = n(260981),
    _ = n(540418),
    x = n(907085),
    v = n(179820),
    b = n(375708),
    E = n(910621),
    j = n(175501);
function y(e) {
    let { rarity: t, className: n } = e,
        r = (function (e) {
            switch (e) {
                case a.x.COMMON:
                    return { Icon: h.p, className: j["rarity-common"], label: b.intl.string(b.t.L0K5ci) };
                case a.x.RARE:
                    return { Icon: _.A, className: j["rarity-rare"], label: b.intl.string(b.t["sTx/5z"]) };
                case a.x.EPIC:
                    return { Icon: x.b, className: j["rarity-epic"], label: b.intl.string(b.t.RD8RiN) };
                case a.x.MYTHIC:
                    return { Icon: v.O, className: j["rarity-mythic"], label: b.intl.string(b.t.vqc1ol) };
                default:
                    return null;
            }
        })(t);
    if (null == r) return null;
    let { Icon: s, className: o, label: d } = r;
    return (0, l.jsx)("div", {
        role: "img",
        "aria-label": d,
        className: i()(E.T, o, n),
        children: (0, l.jsx)(s, { size: "xxs", color: "currentColor" }),
    });
}
var C = n(750506),
    A = n(140049),
    I = n(518477),
    R = n(128845);
function N(e) {
    let {
            children: t,
            title: n,
            eyebrow: r,
            body: h,
            variant: _ = "default",
            badgeImage: x,
            badgeName: v,
            progressCircle: b,
            rarity: E,
            isAnimated: j = !1,
            targetElementRef: N,
            onShow: k,
            position: T = "top",
        } = e,
        S = j && null == b,
        {
            tooltipId: B,
            isVisible: D,
            targetElementRef: O,
            trigger: w,
        } = (0, m.D)({ children: t, targetElementRef: N, delay: I.In, onTooltipShow: k }),
        U = null != E && E !== a.x.COMMON,
        M = (0, l.jsxs)("div", {
            className: R.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                U && (0, l.jsx)("div", { className: R.xV, children: (0, l.jsx)(y, { rarity: E }) }),
                (0, l.jsx)("div", {
                    className: i()(R.fA, { [R.qJ]: S }),
                    "aria-hidden": !0,
                    children: (0, l.jsx)(A.BadgeImageWithProgressCircle, {
                        src: x,
                        alt: v,
                        progressCircleText: b?.text,
                        progressCirclePercent: b?.percent,
                        progressCircleUrgency: b?.urgency,
                        compact: !0,
                    }),
                }),
                (0, l.jsxs)(g.B, {
                    gap: 4,
                    align: "center",
                    className: R.i8,
                    children: [
                        null != r &&
                            (0, l.jsx)(f.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: R.UP,
                                children: r,
                            }),
                        (0, l.jsx)(p.D, {
                            variant: "display-sm",
                            color: "text-strong",
                            className: i()(R.DD, { [R.x$]: "nitro" === _ }),
                            children: n,
                        }),
                        null != h &&
                            (0, l.jsx)(f.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: R.rf,
                                children: h,
                            }),
                    ],
                }),
            ],
        }),
        P = null != h ? `${v}. ${h}` : v,
        L = (0, c.j)({ shouldShow: D })((e, t) =>
            t
                ? (0, l.jsx)(d.Bc, {
                      isRichTooltip: !0,
                      children: (0, l.jsx)(o.R, {
                          isVisible: D,
                          isRendered: !0,
                          targetElementRef: O,
                          content: M,
                          position: T,
                          align: "center",
                          layerContext: C.uY,
                          animationStyle: e,
                          positionKey: (0, u.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, l.jsxs)(l.Fragment, { children: [w, (0, l.jsx)(s.A, { id: B, children: P }), L] });
}
let k = N;
