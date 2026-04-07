n.d(t, { P: () => C, ThirdPartyPromotionsModal: () => E });
var i = n(627968);
n(64700);
var s = n(158954),
    l = n(311907),
    a = n(397927),
    r = n(793574),
    o = n(954571),
    d = n(975571),
    c = n(597758),
    u = n(35587),
    m = n(412260),
    g = n(116011),
    _ = n(881373),
    x = n(125877),
    A = n(652215),
    h = n(653624),
    p = n(985018),
    T = n(276478);
let f = {
        Logitech30P: { title: h.default.jkdhZq, titleParams: { discountPercent: _.aW }, body: h.default.Yl5ww1 },
        "Logitech G": { title: h.default.jkdhZq, titleParams: { discountPercent: _.aW }, body: h.default.Yl5ww1 },
        Logitech5PNI: {
            title: h.default.zeBjoX,
            titleParams: { discountPercent: _.y$ },
            body: h.default.fC4abC,
            bodyParams: { months: 6 },
        },
        "Logitech 5%": {
            title: h.default.zeBjoX,
            titleParams: { discountPercent: _.y$ },
            body: h.default.fC4abC,
            bodyParams: { months: 6 },
        },
        Logitech5PGS: { title: h.default.ogcfac, titleParams: { discountPercent: _.K2 } },
    },
    S = {
        logitech: {
            modalTitle: h.default["2I7nK+"],
            modalSubtitle: {
                message: h.default.W8jOD0,
                values: { termsUrl: d.A.getArticleURL(A.MVz.LOGITECH_PROMOTION) },
            },
            landingUrl: "https://www.logitech.com/",
        },
    },
    b = (e, t) => {
        let n = f[e.outboundTitle];
        return {
            id: e.id,
            partnerId: e.partnerId ?? "",
            title: null != n ? p.intl.formatToPlainString(n.title, n.titleParams ?? {}) : "",
            body: null != n && null != n.body ? p.intl.formatToPlainString(n.body, n.bodyParams ?? {}) : "",
            startDate: e.startDate,
            endDate: e.endDate,
            redemptionURL: e.outboundRedemptionPageLink,
            code: t,
        };
    },
    E = (e) => {
        let { partnerId: t, transitionState: n, onClose: a } = e,
            o = S[t],
            [d, c] = (0, l.yK)([m.A], () => {
                let { recurring: e, oneTime: n } = m.A.getPromotionsByPartner(t);
                return [e, n];
            }),
            { promotionsLoaded: _, claimedOutboundPromotionCodeMap: A } = (0, u.y7)();
        if (!_) return (0, i.jsx)(s.y$y, {});
        let f = o?.modalSubtitle != null ? p.intl.format(o.modalSubtitle.message, o.modalSubtitle.values) : void 0,
            E = null == o ? t : p.intl.string(o.modalTitle);
        return (0, i.jsx)(s.Modal, {
            title: E,
            subtitle: f,
            actions: [],
            transitionState: n,
            onClose: a,
            children: (0, i.jsxs)("div", {
                className: T.kL,
                children: [
                    d.length > 0 &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(s.EYj, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: p.intl.string(h.default["9Y2p6p"]),
                                }),
                                (0, i.jsx)("div", {
                                    className: T.kR,
                                    children: d.map((e) =>
                                        (0, i.jsx)(
                                            g.wx,
                                            {
                                                recurrence: {
                                                    ...b(e, A[e.id] ?? null),
                                                    asset: g.oL[e.partnerId ?? ""]?.asset ?? "",
                                                },
                                                showPartnerImage: !0,
                                                displayCTAInDedicatedFooter: !0,
                                                analyticsLocations: [r.A.THIRD_PARTY_PROMOTIONS_MODAL],
                                            },
                                            e.id,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    c.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: T.E7,
                            children: [
                                (0, i.jsx)(s.EYj, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: p.intl.string(h.default.Wm58LR),
                                }),
                                (0, i.jsx)("div", {
                                    className: T.kR,
                                    children: c.map((e) =>
                                        (0, i.jsx)(
                                            x.$,
                                            {
                                                promotion: b(e, A[e.id] ?? null),
                                                analyticsLocations: [r.A.THIRD_PARTY_PROMOTIONS_MODAL],
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
    C = (e) => {
        let { partnerId: t } = e;
        o.default.track(A.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_id: t }),
            c.Ay.fetchActivePromotions(),
            (0, a.mMO)(async () => {
                let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(n.bind(n, 152815));
                return (n) => (0, i.jsx)(e, { ...n, partnerId: t });
            });
    };
