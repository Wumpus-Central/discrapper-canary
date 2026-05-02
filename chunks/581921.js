i.d(t, { P: () => b, ThirdPartyPromotionsModal: () => T });
var s = i(627968);
i(64700);
var a = i(289873),
    n = i(189213),
    r = i(834730),
    l = i(17928),
    c = i(192308),
    d = i(793574),
    o = i(174459),
    u = i(975571),
    m = i(962644),
    A = i(35587),
    p = i(374200),
    g = i(56225),
    N = i(881373);
let x = (e) => {
    let { promotion: t, analyticsLocations: i } = e;
    return (0, s.jsx)(g.wx, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerLogo: !1,
        showPartnerImage: !1,
        analyticsLocations: i,
    });
};
var E = i(652215),
    h = i(962995),
    f = i(375708),
    _ = i(75662);
let R = {
        Logitech30P: { title: h.default.jkdhZq, titleParams: { discountPercent: N.aW }, body: h.default.Yl5ww1 },
        "Logitech G": { title: h.default.jkdhZq, titleParams: { discountPercent: N.aW }, body: h.default.Yl5ww1 },
        Logitech5PNI: {
            title: h.default.zeBjoX,
            titleParams: { discountPercent: N.y$ },
            body: h.default.fC4abC,
            bodyParams: { months: 6 },
        },
        "Logitech 5%": {
            title: h.default.zeBjoX,
            titleParams: { discountPercent: N.y$ },
            body: h.default.fC4abC,
            bodyParams: { months: 6 },
        },
        Logitech5PGS: { title: h.default.ogcfac, titleParams: { discountPercent: N.K2 } },
    },
    C = {
        logitech: {
            modalTitle: h.default["2I7nK+"],
            modalSubtitle: {
                message: h.default.W8jOD0,
                values: { termsUrl: u.A.getArticleURL(E.MVz.LOGITECH_PROMOTION) },
            },
            landingUrl: "https://www.logitech.com/",
        },
    },
    I = (e, t) => {
        let i = R[e.outboundTitle];
        return {
            id: e.id,
            partnerId: e.partnerId ?? "",
            title: null != i ? f.intl.formatToPlainString(i.title, i.titleParams ?? {}) : "",
            body: null != i && null != i.body ? f.intl.formatToPlainString(i.body, i.bodyParams ?? {}) : "",
            startDate: e.startDate,
            endDate: e.endDate,
            redemptionURL: e.outboundRedemptionPageLink,
            code: t,
        };
    },
    T = (e) => {
        let { partnerId: t, transitionState: i, onClose: c } = e,
            o = C[t],
            [u, m] = (0, l.yK)([p.A], () => {
                let { recurring: e, oneTime: i } = p.A.getPromotionsByPartner(t);
                return [e.filter((e) => null != R[e.outboundTitle]), i.filter((e) => null != R[e.outboundTitle])];
            }),
            { promotionsLoaded: N, claimedOutboundPromotionCodeMap: E } = (0, A.y7)();
        if (!N) return (0, s.jsx)(a.y, {});
        let T = o?.modalSubtitle != null ? f.intl.format(o.modalSubtitle.message, o.modalSubtitle.values) : void 0,
            b = null == o ? t : f.intl.string(o.modalTitle);
        return (0, s.jsx)(n.Modal, {
            title: b,
            subtitle: T,
            actions: [],
            transitionState: i,
            onClose: c,
            children: (0, s.jsxs)("div", {
                className: _.kL,
                children: [
                    u.length > 0 &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(r.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: f.intl.string(h.default["9Y2p6p"]),
                                }),
                                (0, s.jsx)("div", {
                                    className: _.kR,
                                    children: u.map((e) =>
                                        (0, s.jsx)(
                                            g.wx,
                                            {
                                                recurrence: {
                                                    ...I(e, E[e.id] ?? null),
                                                    asset: (0, g.Cf)()[e.partnerId ?? ""]?.asset ?? "",
                                                },
                                                showPartnerImage: !0,
                                                displayCTAInDedicatedFooter: !0,
                                                analyticsLocations: [d.A.THIRD_PARTY_PROMOTIONS_MODAL],
                                            },
                                            e.id,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    m.length > 0 &&
                        (0, s.jsxs)("div", {
                            className: _.E7,
                            children: [
                                (0, s.jsx)(r.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: f.intl.string(h.default.Wm58LR),
                                }),
                                (0, s.jsx)("div", {
                                    className: _.kR,
                                    children: m.map((e) =>
                                        (0, s.jsx)(
                                            x,
                                            {
                                                promotion: I(e, E[e.id] ?? null),
                                                analyticsLocations: [d.A.THIRD_PARTY_PROMOTIONS_MODAL],
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
    b = (e) => {
        let { partnerId: t } = e;
        o.default.track(E.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_id: t }),
            m.Ay.fetchActivePromotions(),
            (0, c.openModalLazy)(async () => {
                let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(i.bind(i, 581921));
                return (i) => (0, s.jsx)(e, { ...i, partnerId: t });
            });
    };
