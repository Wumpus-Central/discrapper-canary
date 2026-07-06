i.d(t, { w: () => j, u: () => M }), i(321073);
var r = i(627968),
    n = i(64700),
    s = i(939249),
    a = i(834730),
    l = i(289873),
    o = i(189213),
    d = i(17928),
    c = i(192308),
    u = i(793574),
    m = i(174459),
    p = i(58703),
    f = i(975571),
    b = i(792656),
    h = i(264779),
    C = i(962644),
    g = i(35587),
    R = i(374200),
    _ = i(593687);
function P() {
    return (0, r.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 6 6",
        fill: "none",
        overflow: "visible",
        children: (0, r.jsx)("ellipse", { cx: "3.4924", cy: "3", rx: "2.86154", ry: "3", fill: "#808BFF" }),
    });
}
var x = i(75662);
let E = (e) => {
    let { percentage: t } = e;
    return (0, r.jsxs)("div", {
        className: x.hr,
        children: [
            t > 0 &&
                t < 100 &&
                (0, r.jsx)(function () {
                    return (0, r.jsx)("div", {
                        className: x.ML,
                        style: { left: `calc(${t}% - 5px)` },
                        children: (0, r.jsx)(P, {}),
                    });
                }, {}),
            (0, r.jsx)("div", { className: x.SX, style: { width: `${t}%` } }),
        ],
    });
};
var A = i(772167),
    v = i(294219),
    I = i(202541),
    S = i(652215),
    w = i(375708);
let O = (e) => {
    let { promotionRecurrences: t } = e,
        [i, l] = n.useState(t.length > 1),
        [o, d] = n.useState([]);
    return (
        n.useEffect(() => {
            d([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
        }, [t]),
        (0, r.jsxs)("div", {
            children: [
                o.map((e) =>
                    (0, r.jsx)(
                        A.wx,
                        {
                            recurrence: e,
                            showPartnerLogo: !0,
                            showPartnerImage: !0,
                            analyticsLocations: [u.A.RECURRING_3PP_MODAL],
                        },
                        e.id,
                    ),
                ),
                i &&
                    (0, r.jsx)(s.D, {
                        className: x.K8,
                        onClick: () => {
                            l(!1), d([...o, ...t.slice(1)]);
                        },
                        children: (0, r.jsx)(a.E, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: w.intl.string(w.t.rjjZxV),
                        }),
                    }),
            ],
        })
    );
};
function N(e) {
    return e.partnerId?.toLowerCase() ?? null;
}
function j(e) {
    let t,
        i,
        { transitionState: n, onClose: s, partnerIds: c, isLocked: u } = e,
        { promotionsLoaded: m, claimedOutboundPromotionCodeMap: P } = (0, g.y7)(),
        j = (0, d.yK)([R.A], () => R.A.outboundRecurringPromotions),
        M = (0, v.G)(c, { isLockedCardView: u });
    if (!1 === m) return (0, r.jsx)(l.y, {});
    let D = (function (e) {
        let { promotions: t, codesByPromotion: i, partnerIds: r } = e,
            n = {};
        return (
            t
                .filter((e) => !0 === (0, h.HB)({ promotionType: e.promotionType }))
                .forEach((e) => {
                    let t = N(e),
                        s = (function (e) {
                            let { promotion: t } = e,
                                i = N(t);
                            return null == i ? null : ((0, A.Cf)()[i] ?? null);
                        })({ promotion: e });
                    if (null == t || null == s || (null != r && !r.includes(t))) return;
                    t in n || (n[t] = []);
                    let a = {
                        id: e.id,
                        partnerId: t,
                        startDate: e.startDate,
                        endDate: e.endDate,
                        code: i[e.id] ?? null,
                        ...s,
                        title: w.intl.formatToPlainString(s.title, s.titleParams ?? {}),
                        outboundTitle: e.outboundTitle,
                        body: w.intl.formatToPlainString(s.body, s.bodyParams ?? {}),
                    };
                    n[t].push(a);
                }),
            n
        );
    })({ promotions: j, codesByPromotion: P, partnerIds: M });
    return (0, r.jsx)(o.Modal, {
        title: w.intl.string(w.t["7ioAjs"]),
        subtitle: w.intl.format(w.t.LOYRxB, { helpCenterLink: f.A.getArticleURL(S.MVz.RECURRING_PROMOTION) }),
        actions: [],
        preview: (function () {
            if (!0 === u)
                return (0, r.jsx)(b.A, {
                    subscriptionTier: I.pe.TIER_2,
                    fullWidth: !0,
                    onClick: () => {
                        s();
                    },
                    onSubscribeModalClose: (e) => {
                        if (e) return C.Ay.fetchActivePromotions();
                    },
                });
        })(),
        transitionState: n,
        onClose: s,
        children:
            ((t = (0, p.N5)()),
            (i = (0, p.P6)()),
            u
                ? (0, r.jsx)(_._, { partnerIds: M })
                : (0, r.jsxs)("div", {
                      className: x.kL,
                      children: [
                          (0, r.jsx)("div", {
                              className: x.Ps,
                              children: (0, r.jsx)(a.E, {
                                  variant: "text-md/medium",
                                  color: "text-subtle",
                                  children: w.intl.format(w.t["43kZKL"], { days: i }),
                              }),
                          }),
                          (0, r.jsx)("div", { className: x.G9, children: (0, r.jsx)(E, { percentage: t }) }),
                          (0, r.jsx)("div", {
                              className: x.kR,
                              children: Object.entries(D)
                                  .sort((e, t) => {
                                      let [i] = e,
                                          [r] = t;
                                      return r.localeCompare(i);
                                  })
                                  .map((e) => {
                                      let [t, i] = e;
                                      return (0, r.jsx)(O, { promotionRecurrences: i }, t);
                                  }),
                          }),
                      ],
                  })),
    });
}
function M(e) {
    let { analyticsLocations: t, partnerIds: n, isLocked: s } = e;
    m.default.track(S.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { location_stack: t, partner_ids: n }),
        C.Ay.fetchActivePromotions(),
        (0, c.openModalLazy)(async () => {
            let { Premium3PRewardsModalEntry: e } = await Promise.all([i.e("967"), i.e("91900")]).then(
                i.bind(i, 92375),
            );
            return (t) => (0, r.jsx)(e, { ...t, partnerIds: n, isLocked: s });
        });
}
