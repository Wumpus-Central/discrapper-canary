a.d(t, { P: () => b, ThirdPartyPromotionsModal: () => T });
var s = a(627968);
a(64700);
var i = a(289873),
    n = a(189213),
    r = a(834730),
    l = a(17928),
    c = a(192308),
    o = a(793574),
    d = a(174459),
    u = a(975571),
    m = a(962644),
    A = a(35587),
    N = a(374200),
    g = a(772167),
    p = a(881373);
let x = (e) => {
    let { promotion: t, analyticsLocations: a } = e;
    return (0, s.jsx)(g.wx, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerLogo: !1,
        showPartnerImage: !1,
        analyticsLocations: a,
    });
};
var E = a(652215),
    h = a(962995),
    f = a(375708),
    C = a(75662);
let R = {
        "Logitech G": { title: h.default.jkdhZq, titleParams: { discountPercent: p.aW }, body: h.default.mH30Yx },
        "Logitech 5%": {
            title: h.default.zeBjoX,
            titleParams: { discountPercent: p.y$ },
            body: h.default.fC4abC,
            bodyParams: { months: 6 },
        },
        "Logitech PRO Series Sim": {
            title: h.default.pSBCjv,
            titleParams: { discountPercent: p.K2 },
            body: h.default.lsRjfl,
        },
    },
    _ = {
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
        let a = R[e.outboundTitle];
        return {
            id: e.id,
            partnerId: e.partnerId ?? "",
            title: null != a ? f.intl.formatToPlainString(a.title, a.titleParams ?? {}) : "",
            outboundTitle: e.outboundTitle,
            body: null != a && null != a.body ? f.intl.formatToPlainString(a.body, a.bodyParams ?? {}) : "",
            startDate: e.startDate,
            endDate: e.endDate,
            redemptionURL: e.outboundRedemptionPageLink,
            code: t,
        };
    },
    T = (e) => {
        let { partnerId: t, transitionState: a, onClose: c } = e,
            d = _[t],
            [u, m] = (0, l.yK)([N.A], () => {
                let { recurring: e, oneTime: a } = N.A.getPromotionsByPartner(t);
                return [e.filter((e) => null != R[e.outboundTitle]), a.filter((e) => null != R[e.outboundTitle])];
            }),
            { promotionsLoaded: p, claimedOutboundPromotionCodeMap: E } = (0, A.y7)();
        if (!p) return (0, s.jsx)(i.y, {});
        let T = d?.modalSubtitle != null ? f.intl.format(d.modalSubtitle.message, d.modalSubtitle.values) : void 0,
            b = null == d ? t : f.intl.string(d.modalTitle);
        return (0, s.jsx)(n.Modal, {
            title: b,
            subtitle: T,
            actions: [],
            transitionState: a,
            onClose: c,
            children: (0, s.jsxs)("div", {
                className: C.kL,
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
                                    className: C.kR,
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
                                                analyticsLocations: [o.A.THIRD_PARTY_PROMOTIONS_MODAL],
                                            },
                                            e.id,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    m.length > 0 &&
                        (0, s.jsxs)("div", {
                            className: C.E7,
                            children: [
                                (0, s.jsx)(r.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: f.intl.string(h.default.Wm58LR),
                                }),
                                (0, s.jsx)("div", {
                                    className: C.kR,
                                    children: m.map((e) =>
                                        (0, s.jsx)(
                                            x,
                                            {
                                                promotion: I(e, E[e.id] ?? null),
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
    b = (e) => {
        let { partnerId: t, analyticsLocations: i } = e;
        d.default.track(E.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, {
            partner_ids: [t],
            partner_id: t,
            location_stack: i,
        }),
            m.Ay.fetchActivePromotions(),
            (0, c.openModalLazy)(async () => {
                let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(a.bind(a, 581921));
                return (a) => (0, s.jsx)(e, { ...a, partnerId: t });
            });
    };
