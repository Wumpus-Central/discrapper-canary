"use strict";
n.d(t, { A: () => G, u: () => k });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(534514),
    o = n(31502),
    l = n(562708),
    u = n(192308),
    c = n(821609),
    d = n(885574),
    _ = n(834730),
    f = n(43990),
    h = n(359778),
    p = n(139286),
    E = n(872725),
    m = n(920050),
    g = n(792656),
    A = n(985603),
    I = n(777376),
    T = n(185797),
    S = n(652215),
    N = n(788868),
    y = n(237146),
    C = n(375708),
    v = n(74776);
function O() {
    (0, u.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("16848"), n.e("30221"), n.e("10622"), n.e("77632")]).then(
            n.bind(n, 836291),
        );
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function R() {
    let e = (0, T.F)();
    if (e.kind === T.L.SUBSCRIBE)
        return (0, i.jsxs)("div", {
            className: v.R$,
            children: [
                (0, i.jsx)(g.A, {
                    defaultTextOverride: e.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: N.pe.TIER_2,
                }),
                (0, i.jsx)(c.$, { variant: "secondary", size: "md", text: C.intl.string(C.t.hvVgAZ), onClick: O }),
            ],
        });
    let t =
        e.claimStatus === I.p1.CLAIMED
            ? { text: C.intl.string(y.default.Plwzgf) }
            : { text: C.intl.string(C.t.hvVgAZ) };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: v.R$,
                children: [
                    (0, i.jsx)(c.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: e.text,
                        icon: e.icon,
                        iconPosition: e.iconPosition,
                        onClick: e.onClick,
                        disabled: e.disabled,
                        loading: e.loading,
                    }),
                    (0, i.jsx)(c.$, {
                        variant: "secondary",
                        size: "md",
                        ...t,
                        onClick: O,
                        disabled: e.requestInProgress,
                    }),
                ],
            }),
            e.claimStatus === I.p1.CLAIM_IN_PROGRESS &&
                (0, i.jsxs)("div", {
                    className: v.ed,
                    children: [
                        (0, i.jsx)(d.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, i.jsx)(_.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: C.intl.string(y.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function b(e) {
    let { glowing: t = !1 } = e;
    return (
        (0, p.A)({
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.PERK_DISCOVERABILITY_CARD,
            properties: { name: m.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: A.FZ },
        }),
        (0, i.jsx)(f.N, {
            theme: S.NJ8.DARKER,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: s()(e, v.kL),
                    children: (0, i.jsx)(E.A, {
                        cardType: h.s.CUSTOM,
                        cardClassName: v.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, i.jsxs)("div", {
                            className: v.XF,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: v.j,
                                    children: [
                                        (0, i.jsx)("div", { className: v._g }),
                                        (0, i.jsx)("div", { className: v.$h }),
                                        (0, i.jsx)("div", { className: v.Rv }),
                                        (0, i.jsx)("div", { className: v.Lw }),
                                        (0, i.jsx)("div", { className: v.mR }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: v.Qs,
                                    children: [
                                        (0, i.jsx)("img", {
                                            className: v.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, i.jsx)(a.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: v.DD,
                                            children: C.intl.string(y.default.RGT513),
                                        }),
                                        (0, i.jsx)(_.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: v.h_,
                                            children: C.intl.string(y.default["+pTnsf"]),
                                        }),
                                        (0, i.jsx)(R, {}),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
        })
    );
}
var D = n(744064);
function L(e) {
    let { className: t, containerClassName: n } = e,
        r = (0, T.F)(),
        s =
            r.kind === T.L.SUBSCRIBE
                ? { subscriptionRequired: !0 }
                : {
                      ctaText: r.text,
                      ctaIcon: r.icon,
                      ctaIconPosition: r.iconPosition,
                      ctaDisabled: r.disabled,
                      ctaLoading: r.loading,
                      onCtaClick: r.onClick,
                  };
    return (0, i.jsx)(D.S, {
        id: m.XBOX_PREMIUM_PERK_CARD_ID,
        title: C.intl.string(y.default.UVL9tD),
        description: C.intl.string(y.default["I+IXr0"]),
        ...s,
        className: t,
        containerClassName: n,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, i.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/faf904a149b90411034912085118d871e8cd3d44110f7a6ad22d84afd7bee524.png",
            width: 130,
            height: 16,
            alt: "Xbox Game Pass",
        }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: A.FZ },
    });
}
var w = n(254748),
    M = n(256358),
    P = n(367791),
    x = n(102338),
    U = n(672193);
let k = "xgpp";
function G(e) {
    let { glowingSectionId: t } = e,
        n = (0, o.l)("premium_subscriber_home_rewards"),
        { logitechCard: r, steelseriesCard: l } = (0, M.A)();
    if (!n) return null;
    let u = null != r || null != l;
    return (0, i.jsx)(w.A, {
        id: k,
        sectionClassName: s()(x.uW, x.Uv, x.qr),
        heading: (0, i.jsx)(a.D, {
            variant: "display-sm",
            className: s()(U.R_, P.U6),
            children: C.intl.string(C.t.NG1e6l),
        }),
        beforeGrid: (0, i.jsx)("div", { className: P.JE, children: (0, i.jsx)(b, { glowing: t === k }) }),
        grid: u
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(L, { containerClassName: U.Nr }),
                      null != r && (0, i.jsx)(D.S, { ...r, containerClassName: U.Nr }),
                      null != l && (0, i.jsx)(D.S, { ...l, containerClassName: U.Nr }),
                  ],
              })
            : null,
    });
}
