n.d(t, { P: () => b, ThirdPartyPromotionsModal: () => T });
var i = n(627968);
n(64700);
var a = n(289873),
    s = n(189213),
    r = n(834730),
    l = n(17928),
    c = n(192308),
    o = n(793574),
    d = n(174459),
    u = n(975571),
    m = n(962644),
    A = n(35587),
    g = n(374200),
    N = n(772167),
    p = n(881373);
function f(e) {
    let { promotion: t, analyticsLocations: n } = e;
    return (0, i.jsx)(N.wx, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerLogo: !1,
        showPartnerImage: !1,
        analyticsLocations: n,
    });
}
var E = n(652215),
    x = n(962995),
    h = n(375708),
    C = n(75662);
let R = {
        "Logitech G": { title: x.default.jkdhZq, titleParams: { discountPercent: p.aW }, body: x.default.mH30Yx },
        "Logitech 5%": {
            title: x.default.zeBjoX,
            titleParams: { discountPercent: p.y$ },
            body: x.default.fC4abC,
            bodyParams: { months: 6 },
        },
        "Logitech PRO Series Sim": {
            title: x.default.pSBCjv,
            titleParams: { discountPercent: p.K2 },
            body: x.default.lsRjfl,
        },
    },
    _ = {
        logitech: {
            modalTitle: x.default["2I7nK+"],
            modalSubtitle: {
                message: x.default.W8jOD0,
                values: { termsUrl: u.A.getArticleURL(E.MVz.LOGITECH_PROMOTION) },
            },
            landingUrl: "https://www.logitech.com/",
        },
    };
function I(e, t) {
    let n = R[e.outboundTitle];
    return {
        id: e.id,
        partnerId: e.partnerId ?? "",
        title: null != n ? h.intl.formatToPlainString(n.title, n.titleParams ?? {}) : "",
        outboundTitle: e.outboundTitle,
        body: null != n && null != n.body ? h.intl.formatToPlainString(n.body, n.bodyParams ?? {}) : "",
        startDate: e.startDate,
        endDate: e.endDate,
        redemptionURL: e.outboundRedemptionPageLink,
        code: t,
    };
}
function T(e) {
    let { partnerId: t, transitionState: n, onClose: c } = e,
        d = _[t],
        [u, m] = (0, l.yK)([g.A], () => {
            let { recurring: e, oneTime: n } = g.A.getPromotionsByPartner(t);
            return [e.filter((e) => null != R[e.outboundTitle]), n.filter((e) => null != R[e.outboundTitle])];
        }),
        { promotionsLoaded: p, claimedOutboundPromotionCodeMap: E } = (0, A.y7)();
    if (!p) return (0, i.jsx)(a.y, {});
    let T = d?.modalSubtitle != null ? h.intl.format(d.modalSubtitle.message, d.modalSubtitle.values) : void 0,
        b = null == d ? t : h.intl.string(d.modalTitle);
    return (0, i.jsx)(s.Modal, {
        title: b,
        subtitle: T,
        actions: [],
        transitionState: n,
        onClose: c,
        children: (0, i.jsxs)("div", {
            className: C.kL,
            children: [
                u.length > 0 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(r.E, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                children: h.intl.string(x.default["9Y2p6p"]),
                            }),
                            (0, i.jsx)("div", {
                                className: C.kR,
                                children: u.map((e) =>
                                    (0, i.jsx)(
                                        N.wx,
                                        {
                                            recurrence: {
                                                ...I(e, E[e.id] ?? null),
                                                asset: (0, N.Cf)()[e.partnerId ?? ""]?.asset ?? "",
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
                    (0, i.jsxs)("div", {
                        className: C.E7,
                        children: [
                            (0, i.jsx)(r.E, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                children: h.intl.string(x.default.Wm58LR),
                            }),
                            (0, i.jsx)("div", {
                                className: C.kR,
                                children: m.map((e) =>
                                    (0, i.jsx)(
                                        f,
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
}
function b(e) {
    let { partnerId: t, analyticsLocations: a } = e;
    d.default.track(E.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: [t], partner_id: t, location_stack: a }),
        m.Ay.fetchActivePromotions(),
        (0, c.openModalLazy)(async () => {
            let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(n.bind(n, 581921));
            return (n) => (0, i.jsx)(e, { ...n, partnerId: t });
        });
}
