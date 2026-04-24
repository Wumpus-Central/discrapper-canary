n.d(t, { P: () => v, ThirdPartyPromotionsModal: () => I });
var a = n(627968);
n(64700);
var i = n(289873),
    r = n(189213),
    s = n(834730),
    l = n(17928),
    c = n(192308),
    o = n(793574),
    d = n(954571),
    u = n(975571),
    _ = n(597758),
    m = n(35587),
    p = n(374200),
    f = n(56225),
    A = n(881373);
let g = (e) => {
    let { promotion: t, analyticsLocations: n } = e;
    return (0, a.jsx)(f.wx, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerLogo: !1,
        showPartnerImage: !1,
        analyticsLocations: n,
    });
};
var h = n(652215),
    x = n(962995),
    b = n(985018),
    C = n(75662);
let N = {
        Logitech30P: { title: x.default.jkdhZq, titleParams: { discountPercent: A.aW }, body: x.default.Yl5ww1 },
        "Logitech G": { title: x.default.jkdhZq, titleParams: { discountPercent: A.aW }, body: x.default.Yl5ww1 },
        Logitech5PNI: {
            title: x.default.zeBjoX,
            titleParams: { discountPercent: A.y$ },
            body: x.default.fC4abC,
            bodyParams: { months: 6 },
        },
        "Logitech 5%": {
            title: x.default.zeBjoX,
            titleParams: { discountPercent: A.y$ },
            body: x.default.fC4abC,
            bodyParams: { months: 6 },
        },
        Logitech5PGS: { title: x.default.ogcfac, titleParams: { discountPercent: A.K2 } },
    },
    E = {
        logitech: {
            modalTitle: x.default["2I7nK+"],
            modalSubtitle: {
                message: x.default.W8jOD0,
                values: { termsUrl: u.A.getArticleURL(h.MVz.LOGITECH_PROMOTION) },
            },
            landingUrl: "https://www.logitech.com/",
        },
    },
    R = (e, t) => {
        let n = N[e.outboundTitle];
        return {
            id: e.id,
            partnerId: e.partnerId ?? "",
            title: null != n ? b.intl.formatToPlainString(n.title, n.titleParams ?? {}) : "",
            body: null != n && null != n.body ? b.intl.formatToPlainString(n.body, n.bodyParams ?? {}) : "",
            startDate: e.startDate,
            endDate: e.endDate,
            redemptionURL: e.outboundRedemptionPageLink,
            code: t,
        };
    },
    I = (e) => {
        let { partnerId: t, transitionState: n, onClose: c } = e,
            d = E[t],
            [u, _] = (0, l.yK)([p.A], () => {
                let { recurring: e, oneTime: n } = p.A.getPromotionsByPartner(t);
                return [e, n];
            }),
            { promotionsLoaded: A, claimedOutboundPromotionCodeMap: h } = (0, m.y7)();
        if (!A) return (0, a.jsx)(i.y, {});
        let N = d?.modalSubtitle != null ? b.intl.format(d.modalSubtitle.message, d.modalSubtitle.values) : void 0,
            I = null == d ? t : b.intl.string(d.modalTitle);
        return (0, a.jsx)(r.Modal, {
            title: I,
            subtitle: N,
            actions: [],
            transitionState: n,
            onClose: c,
            children: (0, a.jsxs)("div", {
                className: C.kL,
                children: [
                    u.length > 0 &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(s.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: b.intl.string(x.default["9Y2p6p"]),
                                }),
                                (0, a.jsx)("div", {
                                    className: C.kR,
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            f.wx,
                                            {
                                                recurrence: {
                                                    ...R(e, h[e.id] ?? null),
                                                    asset: (0, f.Cf)()[e.partnerId ?? ""]?.asset ?? "",
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
                    _.length > 0 &&
                        (0, a.jsxs)("div", {
                            className: C.E7,
                            children: [
                                (0, a.jsx)(s.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: b.intl.string(x.default.Wm58LR),
                                }),
                                (0, a.jsx)("div", {
                                    className: C.kR,
                                    children: _.map((e) =>
                                        (0, a.jsx)(
                                            g,
                                            {
                                                promotion: R(e, h[e.id] ?? null),
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
    v = (e) => {
        let { partnerId: t } = e;
        d.default.track(h.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_id: t }),
            _.Ay.fetchActivePromotions(),
            (0, c.openModalLazy)(async () => {
                let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(n.bind(n, 581921));
                return (n) => (0, a.jsx)(e, { ...n, partnerId: t });
            });
    };
