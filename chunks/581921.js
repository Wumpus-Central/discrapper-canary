"use strict";
n.d(t, { P: () => v, ThirdPartyPromotionsModal: () => C });
var i = n(627968);
n(64700);
var r = n(289873),
    s = n(189213),
    a = n(834730),
    o = n(17928),
    l = n(192308),
    u = n(793574),
    c = n(174459),
    d = n(975571),
    _ = n(962644),
    f = n(35587),
    h = n(374200),
    p = n(56225),
    E = n(881373);
let m = (e) => {
    let { promotion: t, analyticsLocations: n } = e;
    return (0, i.jsx)(p.wx, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerLogo: !1,
        showPartnerImage: !1,
        analyticsLocations: n,
    });
};
var g = n(652215),
    A = n(962995),
    I = n(375708),
    T = n(75662);
let S = {
        "Logitech G": { title: A.default.jkdhZq, titleParams: { discountPercent: E.aW }, body: A.default.mH30Yx },
        "Logitech 5%": {
            title: A.default.zeBjoX,
            titleParams: { discountPercent: E.y$ },
            body: A.default.fC4abC,
            bodyParams: { months: 6 },
        },
        "Logitech PRO Series Sim": {
            title: A.default.pSBCjv,
            titleParams: { discountPercent: E.K2 },
            body: A.default.lsRjfl,
        },
    },
    N = {
        logitech: {
            modalTitle: A.default["2I7nK+"],
            modalSubtitle: {
                message: A.default.W8jOD0,
                values: { termsUrl: d.A.getArticleURL(g.MVz.LOGITECH_PROMOTION) },
            },
            landingUrl: "https://www.logitech.com/",
        },
    },
    y = (e, t) => {
        let n = S[e.outboundTitle];
        return {
            id: e.id,
            partnerId: e.partnerId ?? "",
            title: null != n ? I.intl.formatToPlainString(n.title, n.titleParams ?? {}) : "",
            outboundTitle: e.outboundTitle,
            body: null != n && null != n.body ? I.intl.formatToPlainString(n.body, n.bodyParams ?? {}) : "",
            startDate: e.startDate,
            endDate: e.endDate,
            redemptionURL: e.outboundRedemptionPageLink,
            code: t,
        };
    },
    C = (e) => {
        let { partnerId: t, transitionState: n, onClose: l } = e,
            c = N[t],
            [d, _] = (0, o.yK)([h.A], () => {
                let { recurring: e, oneTime: n } = h.A.getPromotionsByPartner(t);
                return [e.filter((e) => null != S[e.outboundTitle]), n.filter((e) => null != S[e.outboundTitle])];
            }),
            { promotionsLoaded: E, claimedOutboundPromotionCodeMap: g } = (0, f.y7)();
        if (!E) return (0, i.jsx)(r.y, {});
        let C = c?.modalSubtitle != null ? I.intl.format(c.modalSubtitle.message, c.modalSubtitle.values) : void 0,
            v = null == c ? t : I.intl.string(c.modalTitle);
        return (0, i.jsx)(s.Modal, {
            title: v,
            subtitle: C,
            actions: [],
            transitionState: n,
            onClose: l,
            children: (0, i.jsxs)("div", {
                className: T.kL,
                children: [
                    d.length > 0 &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(a.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: I.intl.string(A.default["9Y2p6p"]),
                                }),
                                (0, i.jsx)("div", {
                                    className: T.kR,
                                    children: d.map((e) =>
                                        (0, i.jsx)(
                                            p.wx,
                                            {
                                                recurrence: {
                                                    ...y(e, g[e.id] ?? null),
                                                    asset: (0, p.Cf)()[e.partnerId ?? ""]?.asset ?? "",
                                                },
                                                showPartnerImage: !0,
                                                displayCTAInDedicatedFooter: !0,
                                                analyticsLocations: [u.A.THIRD_PARTY_PROMOTIONS_MODAL],
                                            },
                                            e.id,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    _.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: T.E7,
                            children: [
                                (0, i.jsx)(a.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: I.intl.string(A.default.Wm58LR),
                                }),
                                (0, i.jsx)("div", {
                                    className: T.kR,
                                    children: _.map((e) =>
                                        (0, i.jsx)(
                                            m,
                                            {
                                                promotion: y(e, g[e.id] ?? null),
                                                analyticsLocations: [u.A.THIRD_PARTY_PROMOTIONS_MODAL],
                                            },
                                            e.id,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                ],
            }),
        });
    },
    v = (e) => {
        let { partnerId: t } = e;
        c.default.track(g.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_id: t }),
            _.Ay.fetchActivePromotions(),
            (0, l.openModalLazy)(async () => {
                let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(n.bind(n, 581921));
                return (n) => (0, i.jsx)(e, { ...n, partnerId: t });
            });
    };
