i.d(t, { A: () => k, u: () => G });
var s = i(627968);
i(64700);
var a = i(503698),
    n = i.n(a),
    r = i(534514),
    l = i(31502),
    c = i(562708),
    d = i(192308),
    o = i(821609),
    u = i(885574),
    m = i(834730),
    A = i(43990),
    p = i(359778),
    g = i(139286),
    N = i(872725),
    x = i(920050),
    E = i(792656),
    h = i(985603),
    f = i(777376),
    _ = i(185797),
    R = i(652215),
    C = i(788868),
    I = i(237146),
    T = i(375708),
    b = i(74776);
function S() {
    (0, d.openModalLazy)(async () => {
        let { default: e } = await Promise.all([i.e("16848"), i.e("30221"), i.e("10622"), i.e("77632")]).then(
            i.bind(i, 836291),
        );
        return (t) => (0, s.jsx)(e, { ...t });
    });
}
function j() {
    let e = (0, _.F)();
    if (e.kind === _.L.SUBSCRIBE)
        return (0, s.jsxs)("div", {
            className: b.R$,
            children: [
                (0, s.jsx)(E.A, {
                    defaultTextOverride: e.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: C.pe.TIER_2,
                }),
                (0, s.jsx)(o.$, { variant: "secondary", size: "md", text: T.intl.string(T.t.hvVgAZ), onClick: S }),
            ],
        });
    let t =
        e.claimStatus === f.p1.CLAIMED
            ? { text: T.intl.string(I.default.Plwzgf) }
            : { text: T.intl.string(T.t.hvVgAZ) };
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: b.R$,
                children: [
                    (0, s.jsx)(o.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: e.text,
                        icon: e.icon,
                        iconPosition: e.iconPosition,
                        onClick: e.onClick,
                        disabled: e.disabled,
                        loading: e.loading,
                    }),
                    (0, s.jsx)(o.$, {
                        variant: "secondary",
                        size: "md",
                        ...t,
                        onClick: S,
                        disabled: e.requestInProgress,
                    }),
                ],
            }),
            e.claimStatus === f.p1.CLAIM_IN_PROGRESS &&
                (0, s.jsxs)("div", {
                    className: b.ed,
                    children: [
                        (0, s.jsx)(u.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, s.jsx)(m.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: T.intl.string(I.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function v(e) {
    let { glowing: t = !1 } = e;
    return (
        (0, g.A)({
            type: c.ImpressionTypes.VIEW,
            name: c.ImpressionNames.PERK_DISCOVERABILITY_CARD,
            properties: { name: x.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: h.FZ },
        }),
        (0, s.jsx)(A.N, {
            theme: R.NJ8.DARKER,
            children: (e) =>
                (0, s.jsx)("div", {
                    className: n()(e, b.kL),
                    children: (0, s.jsx)(N.A, {
                        cardType: p.s.CUSTOM,
                        cardClassName: b.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, s.jsxs)("div", {
                            className: b.XF,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: b.j,
                                    children: [
                                        (0, s.jsx)("div", { className: b._g }),
                                        (0, s.jsx)("div", { className: b.$h }),
                                        (0, s.jsx)("div", { className: b.Rv }),
                                        (0, s.jsx)("div", { className: b.Lw }),
                                        (0, s.jsx)("div", { className: b.mR }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: b.Qs,
                                    children: [
                                        (0, s.jsx)("img", {
                                            className: b.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, s.jsx)(r.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: b.DD,
                                            children: T.intl.string(I.default.RGT513),
                                        }),
                                        (0, s.jsx)(m.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: b.h_,
                                            children: T.intl.string(I.default["+pTnsf"]),
                                        }),
                                        (0, s.jsx)(j, {}),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
        })
    );
}
var P = i(744064);
function O(e) {
    let { className: t, containerClassName: i } = e,
        a = (0, _.F)(),
        n =
            a.kind === _.L.SUBSCRIBE
                ? { subscriptionRequired: !0 }
                : {
                      ctaText: a.text,
                      ctaIcon: a.icon,
                      ctaIconPosition: a.iconPosition,
                      ctaDisabled: a.disabled,
                      ctaLoading: a.loading,
                      onCtaClick: a.onClick,
                  };
    return (0, s.jsx)(P.S, {
        id: x.XBOX_PREMIUM_PERK_CARD_ID,
        title: T.intl.string(I.default.UVL9tD),
        description: T.intl.string(I.default["I+IXr0"]),
        ...n,
        className: t,
        containerClassName: i,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, s.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/faf904a149b90411034912085118d871e8cd3d44110f7a6ad22d84afd7bee524.png",
            width: 130,
            height: 16,
            alt: "Xbox Game Pass",
        }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: h.FZ },
    });
}
var y = i(254748),
    M = i(256358),
    L = i(367791),
    D = i(102338),
    U = i(672193);
let G = "xgpp";
function k(e) {
    let { glowingSectionId: t } = e,
        i = (0, l.l)("premium_subscriber_home_rewards"),
        { logitechCard: a, steelseriesCard: c } = (0, M.A)();
    if (!i) return null;
    let d = null != a || null != c;
    return (0, s.jsx)(y.A, {
        id: G,
        sectionClassName: n()(D.uW, D.Uv, D.qr),
        heading: (0, s.jsx)(r.D, {
            variant: "display-sm",
            className: n()(U.R_, L.U6),
            children: T.intl.string(T.t.NG1e6l),
        }),
        beforeGrid: (0, s.jsx)("div", { className: L.JE, children: (0, s.jsx)(v, { glowing: t === G }) }),
        grid: d
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(O, { containerClassName: U.Nr }),
                      null != a && (0, s.jsx)(P.S, { ...a, containerClassName: U.Nr }),
                      null != c && (0, s.jsx)(P.S, { ...c, containerClassName: U.Nr }),
                  ],
              })
            : null,
    });
}
