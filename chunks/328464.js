n.d(t, { K: () => j, A: () => y });
var a = n(477900);
n(582128);
var l = n(503698),
    r = n.n(l),
    s = n(536001),
    i = n(402883),
    o = n(331322),
    d = n(834730),
    c = n(534514),
    u = n(280336),
    m = n(747556),
    f = n(160733),
    g = n(710778),
    p = n(140735),
    E = n(260981),
    h = n(540418),
    b = n(907085),
    x = n(179820),
    A = n(792996),
    _ = n(381134);
function R(e) {
    let { rarity: t, className: n } = e,
        l = (function (e) {
            switch (e) {
                case s.x.COMMON:
                    return { Icon: E.ExperimentalCommonIcon, className: _.e8, label: A.intl.string(A.t.L0K5ci) };
                case s.x.RARE:
                    return { Icon: h.ExperimentalRareIcon, className: _.D3, label: A.intl.string(A.t["sTx/5z"]) };
                case s.x.EPIC:
                    return { Icon: b.ExperimentalEpicIcon, className: _.mk, label: A.intl.string(A.t.RD8RiN) };
                case s.x.MYTHIC:
                    return { Icon: x.ExperimentalMythicIcon, className: _.nM, label: A.intl.string(A.t.vqc1ol) };
                default:
                    return null;
            }
        })(t);
    if (null == l) return null;
    let { Icon: i, className: o, label: d } = l;
    return (0, a.jsx)("div", {
        role: "img",
        "aria-label": d,
        className: r()(_.Tc, o, n),
        children: (0, a.jsx)(i, { size: "xxs", color: "currentColor" }),
    });
}
var N = n(460969);
n(518477);
var v = n(881518);
function j(e) {
    let {
            children: t,
            title: n,
            eyebrow: l,
            body: E,
            screenReaderBody: h = E,
            variant: b = "default",
            badgeImage: x,
            badgeName: A,
            progressCircle: _,
            rarity: j,
            isAnimated: y = !1,
            targetElementRef: I,
            onShow: T,
            position: C = "top",
            shouldShow: S,
        } = e,
        D = y && null == _,
        {
            tooltipId: O,
            isVisible: P,
            targetElementRef: M,
            trigger: U,
        } = (0, i.D)({ children: t, targetElementRef: I, delay: 300, onTooltipShow: T, shouldShow: S }),
        B = null != j && j !== s.x.COMMON,
        G = (0, a.jsxs)("div", {
            className: v.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                B && (0, a.jsx)("div", { className: v.xV, children: (0, a.jsx)(R, { rarity: j }) }),
                (0, a.jsx)("div", {
                    className: r()(v.fA, { [v.qJ]: D }),
                    "aria-hidden": !0,
                    children: (0, a.jsx)(N.BadgeImageWithProgressCircle, {
                        src: x,
                        alt: A,
                        progressCircleText: _?.text,
                        progressCirclePercent: _?.percent,
                        progressCircleUrgency: _?.urgency,
                        compact: !0,
                    }),
                }),
                (0, a.jsxs)(o.B, {
                    gap: 4,
                    align: "center",
                    className: v.i8,
                    children: [
                        null != l &&
                            (0, a.jsx)(d.E, {
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                className: v.UP,
                                children: l,
                            }),
                        (0, a.jsx)(c.D, {
                            variant: "display-sm",
                            color: "text-strong",
                            className: r()(v.DD, { [v.x$]: "nitro" === b }),
                            children: n,
                        }),
                        null != E &&
                            (0, a.jsx)(d.E, {
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                className: v.rf,
                                children: E,
                            }),
                    ],
                }),
            ],
        }),
        w = null != h ? `${A}. ${h}` : A,
        k = (0, u.j)({ shouldShow: P })((e, t) =>
            t
                ? (0, a.jsx)(m.Bc, {
                      isRichTooltip: !0,
                      children: (0, a.jsx)(f.R, {
                          isVisible: P,
                          isRendered: !0,
                          targetElementRef: M,
                          content: G,
                          position: C,
                          align: "center",
                          animationStyle: e,
                          positionKey: (0, g.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, a.jsxs)(a.Fragment, { children: [U, (0, a.jsx)(p.A, { id: O, children: w }), k] });
}
let y = j;
