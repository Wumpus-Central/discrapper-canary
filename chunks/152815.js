n.d(t, { P: () => b, ThirdPartyPromotionsModal: () => S });
var i = n(627968);
n(64700);
var s = n(158954),
    l = n(311907),
    a = n(397927),
    r = n(975571),
    o = n(597758),
    d = n(35587),
    c = n(412260),
    u = n(116011),
    m = n(881373),
    g = n(125877),
    _ = n(652215),
    x = n(653624),
    A = n(985018),
    h = n(276478);
let p = {
        Logitech30P: { title: x.default.jkdhZq, titleParams: { discountPercent: m.aW }, body: x.default.Yl5ww1 },
        "Logitech G": { title: x.default.jkdhZq, titleParams: { discountPercent: m.aW }, body: x.default.Yl5ww1 },
        Logitech5PNI: {
            title: x.default.zeBjoX,
            titleParams: { discountPercent: m.y$ },
            body: x.default.fC4abC,
            bodyParams: { months: 6 },
        },
        "Logitech 5%": {
            title: x.default.zeBjoX,
            titleParams: { discountPercent: m.y$ },
            body: x.default.fC4abC,
            bodyParams: { months: 6 },
        },
        Logitech5PGS: { title: x.default.ogcfac, titleParams: { discountPercent: m.K2 } },
    },
    T = {
        logitech: {
            modalTitle: x.default["2I7nK+"],
            modalSubtitle: {
                message: x.default.W8jOD0,
                values: { termsUrl: r.A.getArticleURL(_.MVz.LOGITECH_PROMOTION) },
            },
            landingUrl: "https://www.logitech.com/",
        },
    },
    f = (e, t) => {
        let n = p[e.outboundTitle];
        return {
            id: e.id,
            partnerId: e.partnerId ?? "",
            title: null != n ? A.intl.formatToPlainString(n.title, n.titleParams ?? {}) : "",
            body: null != n && null != n.body ? A.intl.formatToPlainString(n.body, n.bodyParams ?? {}) : "",
            startDate: e.startDate,
            endDate: e.endDate,
            redemptionURL: e.outboundRedemptionPageLink,
            code: t,
        };
    },
    S = (e) => {
        let { partnerId: t, transitionState: n, onClose: a } = e,
            r = T[t],
            [o, m] = (0, l.yK)([c.A], () => {
                let { recurring: e, oneTime: n } = c.A.getPromotionsByPartner(t);
                return [e, n];
            }),
            { promotionsLoaded: _, claimedOutboundPromotionCodeMap: p } = (0, d.y7)();
        if (!_) return (0, i.jsx)(s.y$y, {});
        let S = r?.modalSubtitle != null ? A.intl.format(r.modalSubtitle.message, r.modalSubtitle.values) : void 0,
            b = null == r ? t : A.intl.string(r.modalTitle);
        return (0, i.jsx)(s.Modal, {
            title: b,
            subtitle: S,
            actions: [],
            transitionState: n,
            onClose: a,
            children: (0, i.jsxs)("div", {
                className: h.kL,
                children: [
                    o.length > 0 &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(s.EYj, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: A.intl.string(x.default["9Y2p6p"]),
                                }),
                                (0, i.jsx)("div", {
                                    className: h.kR,
                                    children: o.map((e) =>
                                        (0, i.jsx)(
                                            u.wx,
                                            {
                                                recurrence: {
                                                    ...f(e, p[e.id] ?? null),
                                                    asset: u.oL[e.partnerId ?? ""]?.asset ?? "",
                                                },
                                                showPartnerImage: !0,
                                                displayCTAInDedicatedFooter: !0,
                                            },
                                            e.id,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    m.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: h.E7,
                            children: [
                                (0, i.jsx)(s.EYj, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: A.intl.string(x.default.Wm58LR),
                                }),
                                (0, i.jsx)("div", {
                                    className: h.kR,
                                    children: m.map((e) => (0, i.jsx)(g.$, { promotion: f(e, p[e.id] ?? null) }, e.id)),
                                }),
                            ],
                        }),
                ],
            }),
        });
    },
    b = (e) => {
        let { partnerId: t } = e;
        o.Ay.fetchActivePromotions(),
            (0, a.mMO)(async () => {
                let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(n.bind(n, 152815));
                return (n) => (0, i.jsx)(e, { ...n, partnerId: t });
            });
    };
