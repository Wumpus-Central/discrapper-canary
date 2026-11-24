n.d(t, { K: () => y, A: () => I });
var a = n(477900);
n(582128);
var l = n(503698),
    r = n.n(l),
    s = n(536001),
    i = n(402883),
    o = n(331322),
    d = n(834730),
    c = n(534514),
    u = n(329921),
    m = n(280336),
    f = n(747556),
    g = n(160733),
    p = n(710778),
    E = n(140735),
    h = n(260981),
    b = n(540418),
    x = n(907085),
    _ = n(179820),
    A = n(792996),
    N = n(381134);
function v(e) {
    let { rarity: t, className: n } = e,
        l = (function (e) {
            switch (e) {
                case s.x.COMMON:
                    return { Icon: h.ExperimentalCommonIcon, className: N.e8, label: A.intl.string(A.t.L0K5ci) };
                case s.x.RARE:
                    return { Icon: b.ExperimentalRareIcon, className: N.D3, label: A.intl.string(A.t["sTx/5z"]) };
                case s.x.EPIC:
                    return { Icon: x.ExperimentalEpicIcon, className: N.mk, label: A.intl.string(A.t.RD8RiN) };
                case s.x.MYTHIC:
                    return { Icon: _.ExperimentalMythicIcon, className: N.nM, label: A.intl.string(A.t.vqc1ol) };
                default:
                    return null;
            }
        })(t);
    if (null == l) return null;
    let { Icon: i, className: o, label: d } = l;
    return (0, a.jsx)("div", {
        role: "img",
        "aria-label": d,
        className: r()(N.Tc, o, n),
        children: (0, a.jsx)(i, { size: "xxs", color: "currentColor" }),
    });
}
var R = n(460969);
n(518477);
var j = n(881518);
function y(e) {
    let {
            children: t,
            title: n,
            eyebrow: l,
            body: h,
            screenReaderBody: b = h,
            variant: x = "default",
            badgeImage: _,
            badgeName: A,
            progressCircle: N,
            rarity: y,
            isAnimated: I = !1,
            unlock: T,
            isUnlockPending: S = !1,
            targetElementRef: C,
            onShow: D,
            position: M = "top",
            shouldShow: P,
        } = e,
        O = I && null == N && null == T,
        U = r()({ [j.ce]: null != T || S, [j.Yb]: T?.isStarted }),
        {
            tooltipId: B,
            isVisible: G,
            targetElementRef: k,
            trigger: w,
        } = (0, i.D)({ children: t, targetElementRef: C, delay: 300, onTooltipShow: D, shouldShow: P }),
        L = null != y && y !== s.x.COMMON,
        H = (0, a.jsxs)(
            "div",
            {
                className: j.Qs,
                style: T?.timingStyle,
                "data-mana-component": "mini-premium-tooltip",
                children: [
                    L && (0, a.jsx)("div", { className: j.xV, children: (0, a.jsx)(v, { rarity: y }) }),
                    (0, a.jsx)("div", {
                        className: r()(j.fA, { [j.qJ]: O, [j.yH]: S }),
                        "aria-hidden": !0,
                        children:
                            null != T
                                ? T.graphic
                                : (0, a.jsx)(R.BadgeImageWithProgressCircle, {
                                      src: _,
                                      alt: A,
                                      progressCircleText: N?.text,
                                      progressCirclePercent: N?.percent,
                                      progressCircleUrgency: N?.urgency,
                                      compact: !0,
                                  }),
                    }),
                    (0, a.jsxs)(o.B, {
                        gap: 4,
                        align: "center",
                        className: j.i8,
                        children: [
                            null != l &&
                                (0, a.jsx)(d.E, {
                                    variant: "body-sm/medium",
                                    color: "text-subtle",
                                    className: r()(j.UP, U),
                                    children: l,
                                }),
                            (0, a.jsx)(c.D, {
                                variant: "display-sm",
                                color: "text-strong",
                                className: r()(j.DD, { [j.x$]: "nitro" === x }, U),
                                children: n,
                            }),
                            null != h &&
                                (0, a.jsx)(d.E, {
                                    variant: "body-sm/medium",
                                    color: "text-subtle",
                                    className: r()(j.rf, U),
                                    children: h,
                                }),
                            null != T &&
                                (0, a.jsx)("div", {
                                    className: r()(j.BI, { [j.Dp]: T.isStarted }),
                                    children: (0, a.jsx)(d.E, {
                                        variant: "body-sm/normal",
                                        color: "text-default",
                                        children: T.label,
                                    }),
                                }),
                        ],
                    }),
                    null != T &&
                        (0, a.jsxs)("div", {
                            className: j.VU,
                            children: [
                                (0, a.jsx)(u.N, {}),
                                (0, a.jsx)(d.E, {
                                    variant: "body-xs/medium",
                                    color: "text-default",
                                    children: T.label,
                                }),
                            ],
                        }),
                ],
            },
            T?.id,
        ),
        V = null != b ? `${A}. ${b}` : A,
        $ = (0, m.j)({ shouldShow: G })((e, t) =>
            t
                ? (0, a.jsx)(f.Bc, {
                      isRichTooltip: !0,
                      children: (0, a.jsx)(g.R, {
                          isVisible: G,
                          isRendered: !0,
                          targetElementRef: k,
                          content: H,
                          position: M,
                          align: "center",
                          animationStyle: e,
                          positionKey: (0, p.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, a.jsxs)(a.Fragment, { children: [w, (0, a.jsx)(E.A, { id: B, children: V }), $] });
}
let I = y;
