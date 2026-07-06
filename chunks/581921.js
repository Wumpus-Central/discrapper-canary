s.d(t, { P: () => v, ThirdPartyPromotionsModal: () => _ });
var i = s(627968);
s(64700);
var n = s(289873),
    a = s(189213),
    l = s(834730),
    r = s(17928),
    c = s(192308),
    o = s(793574),
    d = s(174459),
    u = s(975571),
    m = s(962644),
    g = s(35587),
    x = s(374200),
    p = s(772167),
    h = s(881373);
function f(e) {
    let { promotion: t, analyticsLocations: s } = e;
    return (0, i.jsx)(p.wx, {
        recurrence: t,
        titleVariant: "secondary",
        showPartnerLogo: !1,
        showPartnerImage: !1,
        analyticsLocations: s,
    });
}
var N = s(652215),
    A = s(962995),
    j = s(375708),
    E = s(75662);
let C = {
        "Logitech G": { title: A.default.jkdhZq, titleParams: { discountPercent: h.aW }, body: A.default.mH30Yx },
        "Logitech 5%": {
            title: A.default.zeBjoX,
            titleParams: { discountPercent: h.y$ },
            body: A.default.fC4abC,
            bodyParams: { months: 6 },
        },
        "Logitech PRO Series Sim": {
            title: A.default.pSBCjv,
            titleParams: { discountPercent: h.K2 },
            body: A.default.lsRjfl,
        },
    },
    R = {
        logitech: {
            modalTitle: A.default["2I7nK+"],
            modalSubtitle: {
                message: A.default.W8jOD0,
                values: { termsUrl: u.A.getArticleURL(N.MVz.LOGITECH_PROMOTION) },
            },
            landingUrl: "https://www.logitech.com/",
        },
    };
function b(e, t) {
    let s = C[e.outboundTitle];
    return {
        id: e.id,
        partnerId: e.partnerId ?? "",
        title: null != s ? j.intl.formatToPlainString(s.title, s.titleParams ?? {}) : "",
        outboundTitle: e.outboundTitle,
        body: null != s && null != s.body ? j.intl.formatToPlainString(s.body, s.bodyParams ?? {}) : "",
        startDate: e.startDate,
        endDate: e.endDate,
        redemptionURL: e.outboundRedemptionPageLink,
        code: t,
    };
}
function _(e) {
    let { partnerId: t, transitionState: s, onClose: c } = e,
        d = R[t],
        [u, m] = (0, r.yK)([x.A], () => {
            let { recurring: e, oneTime: s } = x.A.getPromotionsByPartner(t);
            return [e.filter((e) => null != C[e.outboundTitle]), s.filter((e) => null != C[e.outboundTitle])];
        }),
        { promotionsLoaded: h, claimedOutboundPromotionCodeMap: N } = (0, g.y7)();
    if (!h) return (0, i.jsx)(n.y, {});
    let _ = d?.modalSubtitle != null ? j.intl.format(d.modalSubtitle.message, d.modalSubtitle.values) : void 0,
        v = null == d ? t : j.intl.string(d.modalTitle);
    return (0, i.jsx)(a.Modal, {
        title: v,
        subtitle: _,
        actions: [],
        transitionState: s,
        onClose: c,
        children: (0, i.jsxs)("div", {
            className: E.kL,
            children: [
                u.length > 0 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(l.E, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                children: j.intl.string(A.default["9Y2p6p"]),
                            }),
                            (0, i.jsx)("div", {
                                className: E.kR,
                                children: u.map((e) =>
                                    (0, i.jsx)(
                                        p.wx,
                                        {
                                            recurrence: {
                                                ...b(e, N[e.id] ?? null),
                                                asset: (0, p.Cf)()[e.partnerId ?? ""]?.asset ?? "",
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
                        className: E.E7,
                        children: [
                            (0, i.jsx)(l.E, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                children: j.intl.string(A.default.Wm58LR),
                            }),
                            (0, i.jsx)("div", {
                                className: E.kR,
                                children: m.map((e) =>
                                    (0, i.jsx)(
                                        f,
                                        {
                                            promotion: b(e, N[e.id] ?? null),
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
function v(e) {
    let { partnerId: t, analyticsLocations: n } = e;
    d.default.track(N.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { partner_ids: [t], partner_id: t, location_stack: n }),
        m.Ay.fetchActivePromotions(),
        (0, c.openModalLazy)(async () => {
            let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(s.bind(s, 581921));
            return (s) => (0, i.jsx)(e, { ...s, partnerId: t });
        });
}
