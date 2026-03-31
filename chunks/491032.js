n.d(t, { P: () => f, ThirdPartyPromotionsModal: () => T });
var i = n(627968);
n(64700);
var s = n(158954),
    l = n(311907),
    a = n(397927),
    r = n(597758),
    o = n(35587),
    d = n(412260),
    c = n(116011),
    u = n(881373),
    m = n(452768),
    _ = n(653624),
    g = n(985018),
    x = n(276478);
let A = {
        Logitech30P: { title: _.default.jkdhZq, titleParams: { discountPercent: u.aW }, body: _.default.Yl5ww1 },
        Logitech5PNI: {
            title: _.default.zeBjoX,
            titleParams: { discountPercent: u.y$ },
            body: _.default.fC4abC,
            bodyParams: { months: 6 },
        },
        Logitech5PGS: { title: _.default.ogcfac, titleParams: { discountPercent: u.K2 }, body: _.default.Yl5ww1 },
    },
    h = {
        logitech: {
            modalTitle: _.default["2I7nK+"],
            modalSubtitle: { message: _.default.W8jOD0, values: { termsUrl: "https://www.logitech.com/terms" } },
            landingUrl: "https://www.logitech.com/",
        },
    },
    p = (e, t) => {
        let n = A[e.outboundTitle];
        return {
            id: e.id,
            partnerId: e.partnerId ?? "",
            title: null != n ? g.intl.formatToPlainString(n.title, n.titleParams ?? {}) : "",
            body: null != n ? g.intl.formatToPlainString(n.body, n.bodyParams ?? {}) : "",
            startDate: e.startDate,
            endDate: e.endDate,
            redemptionURL: e.outboundRedemptionPageLink,
            code: t,
        };
    },
    T = (e) => {
        let { partnerId: t, transitionState: n, onClose: a } = e,
            r = h[t],
            [u, A] = (0, l.yK)([d.A], () => {
                let { recurring: e, oneTime: n } = d.A.getPromotionsByPartner(t);
                return [e, n];
            }),
            { promotionsLoaded: T, claimedOutboundPromotionCodeMap: f } = (0, o.y7)();
        if (!T) return (0, i.jsx)(s.y$y, {});
        let S = r?.modalSubtitle != null ? g.intl.format(r.modalSubtitle.message, r.modalSubtitle.values) : void 0,
            E = null == r ? t : g.intl.string(r.modalTitle);
        return (0, i.jsx)(s.Modal, {
            title: E,
            subtitle: S,
            actions: [],
            transitionState: n,
            onClose: a,
            children: (0, i.jsxs)("div", {
                className: x.kL,
                children: [
                    u.length > 0 &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(s.EYj, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: g.intl.string(_.default["9Y2p6p"]),
                                }),
                                (0, i.jsx)("div", {
                                    className: x.kR,
                                    children: u.map((e) =>
                                        (0, i.jsx)(
                                            c.wx,
                                            {
                                                recurrence: {
                                                    ...p(e, f[e.id] ?? null),
                                                    asset: c.oL[e.partnerId ?? ""]?.asset ?? "",
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
                    A.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: x.E7,
                            children: [
                                (0, i.jsx)(s.EYj, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: g.intl.string(_.default.Wm58LR),
                                }),
                                (0, i.jsx)("div", {
                                    className: x.kR,
                                    children: A.map((e) => (0, i.jsx)(m.$, { promotion: p(e, f[e.id] ?? null) }, e.id)),
                                }),
                            ],
                        }),
                ],
            }),
        });
    },
    f = (e) => {
        let { partnerId: t } = e;
        r.Ay.fetchActivePromotions(),
            (0, a.mMO)(async () => {
                let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(n.bind(n, 491032));
                return (n) => (0, i.jsx)(e, { ...n, partnerId: t });
            });
    };
