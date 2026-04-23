n.d(t, { P: () => j, ThirdPartyPromotionsModal: () => E });
var r = n(627968);
n(64700);
var a = n(289873),
    i = n(189213),
    s = n(834730),
    l = n(311907),
    c = n(192308),
    o = n(793574),
    d = n(954571),
    u = n(975571),
    _ = n(597758),
    m = n(35587),
    p = n(412260),
    f = n(116011),
    A = n(881373),
    g = n(125877),
    h = n(652215),
    b = n(962995),
    x = n(985018),
    C = n(75662);
let v = {
        Logitech30P: { title: b.default.jkdhZq, titleParams: { discountPercent: A.aW }, body: b.default.Yl5ww1 },
        "Logitech G": { title: b.default.jkdhZq, titleParams: { discountPercent: A.aW }, body: b.default.Yl5ww1 },
        Logitech5PNI: {
            title: b.default.zeBjoX,
            titleParams: { discountPercent: A.y$ },
            body: b.default.fC4abC,
            bodyParams: { months: 6 },
        },
        "Logitech 5%": {
            title: b.default.zeBjoX,
            titleParams: { discountPercent: A.y$ },
            body: b.default.fC4abC,
            bodyParams: { months: 6 },
        },
        Logitech5PGS: { title: b.default.ogcfac, titleParams: { discountPercent: A.K2 } },
    },
    R = {
        logitech: {
            modalTitle: b.default["2I7nK+"],
            modalSubtitle: {
                message: b.default.W8jOD0,
                values: { termsUrl: u.A.getArticleURL(h.MVz.LOGITECH_PROMOTION) },
            },
            landingUrl: "https://www.logitech.com/",
        },
    },
    N = (e, t) => {
        let n = v[e.outboundTitle];
        return {
            id: e.id,
            partnerId: e.partnerId ?? "",
            title: null != n ? x.intl.formatToPlainString(n.title, n.titleParams ?? {}) : "",
            body: null != n && null != n.body ? x.intl.formatToPlainString(n.body, n.bodyParams ?? {}) : "",
            startDate: e.startDate,
            endDate: e.endDate,
            redemptionURL: e.outboundRedemptionPageLink,
            code: t,
        };
    },
    E = (e) => {
        let { partnerId: t, transitionState: n, onClose: c } = e,
            d = R[t],
            [u, _] = (0, l.yK)([p.A], () => {
                let { recurring: e, oneTime: n } = p.A.getPromotionsByPartner(t);
                return [e, n];
            }),
            { promotionsLoaded: A, claimedOutboundPromotionCodeMap: h } = (0, m.y7)();
        if (!A) return (0, r.jsx)(a.y, {});
        let v = d?.modalSubtitle != null ? x.intl.format(d.modalSubtitle.message, d.modalSubtitle.values) : void 0,
            E = null == d ? t : x.intl.string(d.modalTitle);
        return (0, r.jsx)(i.Modal, {
            title: E,
            subtitle: v,
            actions: [],
            transitionState: n,
            onClose: c,
            children: (0, r.jsxs)("div", {
                className: C.kL,
                children: [
                    u.length > 0 &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(s.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: x.intl.string(b.default["9Y2p6p"]),
                                }),
                                (0, r.jsx)("div", {
                                    className: C.kR,
                                    children: u.map((e) =>
                                        (0, r.jsx)(
                                            f.wx,
                                            {
                                                recurrence: {
                                                    ...N(e, h[e.id] ?? null),
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
                        (0, r.jsxs)("div", {
                            className: C.E7,
                            children: [
                                (0, r.jsx)(s.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: x.intl.string(b.default.Wm58LR),
                                }),
                                (0, r.jsx)("div", {
                                    className: C.kR,
                                    children: _.map((e) =>
                                        (0, r.jsx)(
                                            g.$,
                                            {
                                                promotion: N(e, h[e.id] ?? null),
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
    j = (e) => {
        let { partnerId: t } = e;
        d.default.track(h.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_id: t }),
            _.Ay.fetchActivePromotions(),
            (0, c.openModalLazy)(async () => {
                let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(n.bind(n, 152815));
                return (n) => (0, r.jsx)(e, { ...n, partnerId: t });
            });
    };
