n.d(t, { A: () => b });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(311907),
    o = n(230109),
    c = n(397927),
    d = n(775602),
    u = n(793574),
    _ = n(688810),
    m = n(531260),
    A = n(954571),
    g = n(637073),
    h = n(975662),
    x = n(322631),
    p = n(17307),
    E = n(652495),
    C = n(960005),
    T = n(992990),
    S = n(652215),
    I = n(985018),
    f = n(865047),
    N = n(288894);
let b = (e) => {
    let t,
        n,
        { isAllPerksVisible: a, setIsAllPerksVisible: b, previousComponent: j, enablePremiumBrandRefresh: v } = e,
        O = s.useRef(null),
        R = s.useRef(null),
        y = Object.entries((0, h.A)()).reduce((e, t) => {
            let [n, i] = t;
            return !1 !== i.canReveal && "upcomingDropUntimed" !== i.name && (e[n] = i), e;
        }, {}),
        { analyticsLocations: P } = (0, _.Ay)(u.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [L, D] = s.useState(!1),
        G = (0, r.bG)([d.A], () => d.A.useReducedMotion),
        M = (0, p.LQ)(),
        { fractionalState: U } = (0, m.A)(),
        k = (0, g.d)();
    M
        ? ((t = I.intl.string(I.t["+vt7w9"])), (n = I.intl.string(I.t.LgHbnL)))
        : ((t = I.intl.string(I.t.LgHbnL)), (n = I.intl.string(I.t["+vt7w9"])));
    let V = () => {
        b(!1),
            A.default.track(S.HAw.NITRO_HOME_NAVIGATION, {
                current_component: x.A2.SEE_ALL,
                next_component: j,
                interaction_component: "Back Button",
            });
    };
    return (0, i.jsx)(c.GtU, {
        className: l()(f.NX, { [f.ho]: a, [f.LM]: G }),
        inert: !a,
        ref: O,
        children: (0, i.jsx)(c.hLv, {
            color: "nitro-pink",
            className: l()(f.kL, f.Gd, { [f.fv]: !v }),
            children: (0, i.jsxs)(_.f5, {
                value: P,
                children: [
                    v ? (0, i.jsx)(T.A, { onBackClick: V }) : (0, i.jsx)(E.A, { className: f.v1, onBackClick: V }),
                    (0, i.jsxs)("div", {
                        className: l()(f.fi, { [f._9]: v }),
                        children: [
                            (0, i.jsx)(c.Heading, {
                                variant: "heading-xxl/extrabold",
                                color: "text-strong",
                                className: f.R_,
                                children: t,
                            }),
                            (0, i.jsx)(C.A, {
                                className: f.Nm,
                                cards: (0, p.vx)({
                                    perksCards: y,
                                    variant: x.cJ.CARD_CAROUSEL_FIRST_ROW,
                                    isPremiumSubscriber: M,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: U,
                                    isInReverseTrial: k,
                                }),
                                cardType: x.cJ.CARD_CAROUSEL_FIRST_ROW,
                            }),
                            (0, i.jsx)(c.Heading, {
                                variant: "heading-xxl/extrabold",
                                color: "text-strong",
                                className: f.R_,
                                children: n,
                            }),
                            (0, i.jsx)(C.A, {
                                className: f.Nm,
                                cards: (0, p.vx)({
                                    perksCards: y,
                                    variant: x.cJ.CARD_CAROUSEL_SECOND_ROW,
                                    isPremiumSubscriber: M,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: U,
                                    isInReverseTrial: k,
                                }),
                                cardType: x.cJ.CARD_CAROUSEL_SECOND_ROW,
                            }),
                            (0, i.jsx)(c.Heading, {
                                variant: "heading-xxl/extrabold",
                                color: "text-strong",
                                className: f.R_,
                                children: I.intl.string(I.t.LTaxu9),
                            }),
                            (0, i.jsx)(C.A, {
                                className: f.Nm,
                                cards: (0, p.vx)({
                                    perksCards: y,
                                    variant: x.cJ.CARD_CAROUSEL_THIRD_ROW,
                                    isPremiumSubscriber: M,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: U,
                                    isInReverseTrial: k,
                                }),
                                cardType: x.cJ.CARD_CAROUSEL_THIRD_ROW,
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: f.hz }),
                    (0, i.jsx)(o.L, {
                        innerRef: R,
                        onChange: (e) => {
                            e &&
                                !L &&
                                (A.default.track(S.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: P }),
                                D(!0));
                        },
                        children: (0, i.jsx)("div", { ref: R, className: f._Z }),
                    }),
                    (0, i.jsx)("img", {
                        src: N,
                        className: f.Kw,
                        width: 112,
                        height: 85,
                        alt: I.intl.string(I.t.X4IxWL),
                    }),
                ],
            }),
        }),
    });
};
