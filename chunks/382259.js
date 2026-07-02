i.d(t, { w: () => w, u: () => O }), i(321073);
var r = i(627968),
    s = i(64700),
    n = i(939249),
    l = i(834730),
    a = i(289873),
    o = i(189213),
    d = i(17928),
    c = i(192308),
    u = i(793574),
    m = i(174459),
    h = i(58703),
    C = i(975571),
    x = i(792656),
    p = i(264779),
    _ = i(962644),
    g = i(35587),
    f = i(374200),
    R = i(593687);
function j() {
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
var E = i(75662);
let A = (e) => {
    let { percentage: t } = e;
    return (0, r.jsxs)("div", {
        className: E.hr,
        children: [
            t > 0 &&
                t < 100 &&
                (0, r.jsx)(function () {
                    return (0, r.jsx)("div", {
                        className: E.ML,
                        style: { left: `calc(${t}% - 5px)` },
                        children: (0, r.jsx)(j, {}),
                    });
                }, {}),
            (0, r.jsx)("div", { className: E.SX, style: { width: `${t}%` } }),
        ],
    });
};
var N = i(772167),
    P = i(294219),
    v = i(202541),
    D = i(652215),
    I = i(375708);
let b = (e) => {
    let { promotionRecurrences: t } = e,
        [i, a] = s.useState(t.length > 1),
        [o, d] = s.useState([]);
    return (
        s.useEffect(() => {
            d([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
        }, [t]),
        (0, r.jsxs)("div", {
            children: [
                o.map((e) =>
                    (0, r.jsx)(
                        N.wx,
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
                    (0, r.jsx)(n.D, {
                        className: E.K8,
                        onClick: () => {
                            a(!1), d([...o, ...t.slice(1)]);
                        },
                        children: (0, r.jsx)(l.E, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: I.intl.string(I.t.rjjZxV),
                        }),
                    }),
            ],
        })
    );
};
function y(e) {
    return e.partnerId?.toLowerCase() ?? null;
}
function w(e) {
    let t,
        i,
        { transitionState: s, onClose: n, partnerIds: c, isLocked: u } = e,
        { promotionsLoaded: m, claimedOutboundPromotionCodeMap: j } = (0, g.y7)(),
        w = (0, d.yK)([f.A], () => f.A.outboundRecurringPromotions),
        O = (0, P.G)(c, { isLockedCardView: u });
    if (!1 === m) return (0, r.jsx)(a.y, {});
    let T = (function (e) {
        let { promotions: t, codesByPromotion: i, partnerIds: r } = e,
            s = {};
        return (
            t
                .filter((e) => !0 === (0, p.HB)({ promotionType: e.promotionType }))
                .forEach((e) => {
                    let t = y(e),
                        n = (function (e) {
                            let { promotion: t } = e,
                                i = y(t);
                            return null == i ? null : ((0, N.Cf)()[i] ?? null);
                        })({ promotion: e });
                    if (null == t || null == n || (null != r && !r.includes(t))) return;
                    t in s || (s[t] = []);
                    let l = {
                        id: e.id,
                        partnerId: t,
                        startDate: e.startDate,
                        endDate: e.endDate,
                        code: i[e.id] ?? null,
                        ...n,
                        title: I.intl.formatToPlainString(n.title, n.titleParams ?? {}),
                        outboundTitle: e.outboundTitle,
                        body: I.intl.formatToPlainString(n.body, n.bodyParams ?? {}),
                    };
                    s[t].push(l);
                }),
            s
        );
    })({ promotions: w, codesByPromotion: j, partnerIds: O });
    return (0, r.jsx)(o.Modal, {
        title: I.intl.string(I.t["7ioAjs"]),
        subtitle: I.intl.format(I.t.LOYRxB, { helpCenterLink: C.A.getArticleURL(D.MVz.RECURRING_PROMOTION) }),
        actions: [],
        preview: (function () {
            if (!0 === u)
                return (0, r.jsx)(x.A, {
                    subscriptionTier: v.pe.TIER_2,
                    fullWidth: !0,
                    onClick: () => {
                        n();
                    },
                    onSubscribeModalClose: (e) => {
                        if (e) return _.Ay.fetchActivePromotions();
                    },
                });
        })(),
        transitionState: s,
        onClose: n,
        children:
            ((t = (0, h.N5)()),
            (i = (0, h.P6)()),
            u
                ? (0, r.jsx)(R._, { partnerIds: O })
                : (0, r.jsxs)("div", {
                      className: E.kL,
                      children: [
                          (0, r.jsx)("div", {
                              className: E.Ps,
                              children: (0, r.jsx)(l.E, {
                                  variant: "text-md/medium",
                                  color: "text-subtle",
                                  children: I.intl.format(I.t["43kZKL"], { days: i }),
                              }),
                          }),
                          (0, r.jsx)("div", { className: E.G9, children: (0, r.jsx)(A, { percentage: t }) }),
                          (0, r.jsx)("div", {
                              className: E.kR,
                              children: Object.entries(T)
                                  .sort((e, t) => {
                                      let [i] = e,
                                          [r] = t;
                                      return r.localeCompare(i);
                                  })
                                  .map((e) => {
                                      let [t, i] = e;
                                      return (0, r.jsx)(b, { promotionRecurrences: i }, t);
                                  }),
                          }),
                      ],
                  })),
    });
}
function O(e) {
    let { analyticsLocations: t, partnerIds: s, isLocked: n } = e;
    m.default.track(D.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { location_stack: t, partner_ids: s }),
        _.Ay.fetchActivePromotions(),
        (0, c.openModalLazy)(async () => {
            let { Premium3PRewardsModalEntry: e } = await Promise.all([i.e("967"), i.e("91900")]).then(
                i.bind(i, 92375),
            );
            return (t) => (0, r.jsx)(e, { ...t, partnerIds: s, isLocked: n });
        });
}
