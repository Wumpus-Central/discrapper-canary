n.d(t, { P: () => f, ThirdPartyPromotionsModal: () => h });
var i = n(627968);
n(64700);
var l = n(289873),
    r = n(189213),
    s = n(834730),
    a = n(17928),
    c = n(192308),
    o = n(793574),
    d = n(174459),
    u = n(975571),
    E = n(962644),
    A = n(35587),
    _ = n(374200),
    T = n(56225),
    I = n(881373);
let N = (e) => {
    let { promotion: t, analyticsLocations: n } = e;
    return (0, i.jsx)(T.wx, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerLogo: !1,
        showPartnerImage: !1,
        analyticsLocations: n,
    });
};
var R = n(652215),
    m = n(962995),
    C = n(375708),
    p = n(75662);
let S = {
        "Logitech G": { title: m.default.jkdhZq, titleParams: { discountPercent: I.aW }, body: m.default.mH30Yx },
        "Logitech 5%": {
            title: m.default.zeBjoX,
            titleParams: { discountPercent: I.y$ },
            body: m.default.fC4abC,
            bodyParams: { months: 6 },
        },
        "Logitech PRO Series Sim": {
            title: m.default.pSBCjv,
            titleParams: { discountPercent: I.K2 },
            body: m.default.lsRjfl,
        },
    },
    O = {
        logitech: {
            modalTitle: m.default["2I7nK+"],
            modalSubtitle: {
                message: m.default.W8jOD0,
                values: { termsUrl: u.A.getArticleURL(R.MVz.LOGITECH_PROMOTION) },
            },
            landingUrl: "https://www.logitech.com/",
        },
    },
    g = (e, t) => {
        let n = S[e.outboundTitle];
        return {
            id: e.id,
            partnerId: e.partnerId ?? "",
            title: null != n ? C.intl.formatToPlainString(n.title, n.titleParams ?? {}) : "",
            outboundTitle: e.outboundTitle,
            body: null != n && null != n.body ? C.intl.formatToPlainString(n.body, n.bodyParams ?? {}) : "",
            startDate: e.startDate,
            endDate: e.endDate,
            redemptionURL: e.outboundRedemptionPageLink,
            code: t,
        };
    },
    h = (e) => {
        let { partnerId: t, transitionState: n, onClose: c } = e,
            d = O[t],
            [u, E] = (0, a.yK)([_.A], () => {
                let { recurring: e, oneTime: n } = _.A.getPromotionsByPartner(t);
                return [e.filter((e) => null != S[e.outboundTitle]), n.filter((e) => null != S[e.outboundTitle])];
            }),
            { promotionsLoaded: I, claimedOutboundPromotionCodeMap: R } = (0, A.y7)();
        if (!I) return (0, i.jsx)(l.y, {});
        let h = d?.modalSubtitle != null ? C.intl.format(d.modalSubtitle.message, d.modalSubtitle.values) : void 0,
            f = null == d ? t : C.intl.string(d.modalTitle);
        return (0, i.jsx)(r.Modal, {
            title: f,
            subtitle: h,
            actions: [],
            transitionState: n,
            onClose: c,
            children: (0, i.jsxs)("div", {
                className: p.kL,
                children: [
                    u.length > 0 &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(s.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: C.intl.string(m.default["9Y2p6p"]),
                                }),
                                (0, i.jsx)("div", {
                                    className: p.kR,
                                    children: u.map((e) =>
                                        (0, i.jsx)(
                                            T.wx,
                                            {
                                                recurrence: {
                                                    ...g(e, R[e.id] ?? null),
                                                    asset: (0, T.Cf)()[e.partnerId ?? ""]?.asset ?? "",
                                                },
                                                showPartnerImage: !0,
                                                displayCTAInDedicatedFooter: !0,
                                                analyticsLocations: [o.A.THIRD_PARTY_PROMOTIONS_MODAL],
                                            },
                                            e.id,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    E.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: p.E7,
                            children: [
                                (0, i.jsx)(s.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: C.intl.string(m.default.Wm58LR),
                                }),
                                (0, i.jsx)("div", {
                                    className: p.kR,
                                    children: E.map((e) =>
                                        (0, i.jsx)(
                                            N,
                                            {
                                                promotion: g(e, R[e.id] ?? null),
                                                analyticsLocations: [o.A.THIRD_PARTY_PROMOTIONS_MODAL],
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
    f = (e) => {
        let { partnerId: t } = e;
        d.default.track(R.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_id: t }),
            E.Ay.fetchActivePromotions(),
            (0, c.openModalLazy)(async () => {
                let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(n.bind(n, 581921));
                return (n) => (0, i.jsx)(e, { ...n, partnerId: t });
            });
    };
