"use strict";
n.d(t, { w: () => L, u: () => w }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(939249),
    a = n(834730),
    o = n(289873),
    l = n(189213),
    u = n(17928),
    c = n(192308),
    d = n(793574),
    _ = n(174459),
    h = n(58703),
    f = n(975571),
    p = n(792656),
    E = n(264779),
    m = n(962644),
    g = n(35587),
    A = n(374200),
    I = n(593687);
function T() {
    return (0, i.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 6 6",
        fill: "none",
        overflow: "visible",
        children: (0, i.jsx)("ellipse", { cx: "3.4924", cy: "3", rx: "2.86154", ry: "3", fill: "#808BFF" }),
    });
}
var S = n(738894);
let y = (e) => {
    let { percentage: t } = e;
    return (0, i.jsxs)("div", {
        className: S.hr,
        children: [
            t > 0 &&
                t < 100 &&
                (0, i.jsx)(function () {
                    return (0, i.jsx)("div", {
                        className: S.ML,
                        style: { left: `calc(${t}% - 5px)` },
                        children: (0, i.jsx)(T, {}),
                    });
                }, {}),
            (0, i.jsx)("div", { className: S.SX, style: { width: `${t}%` } }),
        ],
    });
};
var C = n(772167),
    N = n(294219),
    v = n(788868),
    R = n(652215),
    O = n(375708);
let b = (e) => {
    let { promotionRecurrences: t } = e,
        [n, o] = r.useState(t.length > 1),
        [l, u] = r.useState([]);
    return (
        r.useEffect(() => {
            u([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
        }, [t]),
        (0, i.jsxs)("div", {
            children: [
                l.map((e) =>
                    (0, i.jsx)(
                        C.wx,
                        {
                            recurrence: e,
                            showPartnerLogo: !0,
                            showPartnerImage: !0,
                            analyticsLocations: [d.A.RECURRING_3PP_MODAL],
                        },
                        e.id,
                    ),
                ),
                n &&
                    (0, i.jsx)(s.D, {
                        className: S.K8,
                        onClick: () => {
                            o(!1), u([...l, ...t.slice(1)]);
                        },
                        children: (0, i.jsx)(a.E, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: O.intl.string(O.t.rjjZxV),
                        }),
                    }),
            ],
        })
    );
};
function D(e) {
    return e.partnerId?.toLowerCase() ?? null;
}
function L(e) {
    let t,
        n,
        { transitionState: r, onClose: s, partnerIds: c, isLocked: d } = e,
        { promotionsLoaded: _, claimedOutboundPromotionCodeMap: T } = (0, g.y7)(),
        L = (0, u.yK)([A.A], () => A.A.outboundRecurringPromotions),
        w = (0, N.G)(c, { isLockedCardView: d });
    if (!1 === _) return (0, i.jsx)(o.y, {});
    let M = (function (e) {
        let { promotions: t, codesByPromotion: n, partnerIds: i } = e,
            r = {};
        return (
            t
                .filter((e) => !0 === (0, E.HB)({ promotionType: e.promotionType }))
                .forEach((e) => {
                    let t = D(e),
                        s = (function (e) {
                            let { promotion: t } = e,
                                n = D(t);
                            return null == n ? null : ((0, C.Cf)()[n] ?? null);
                        })({ promotion: e });
                    if (null == t || null == s || (null != i && !i.includes(t))) return;
                    t in r || (r[t] = []);
                    let a = {
                        id: e.id,
                        partnerId: t,
                        startDate: e.startDate,
                        endDate: e.endDate,
                        code: n[e.id] ?? null,
                        ...s,
                        title: O.intl.formatToPlainString(s.title, s.titleParams ?? {}),
                        outboundTitle: e.outboundTitle,
                        body: O.intl.formatToPlainString(s.body, s.bodyParams ?? {}),
                    };
                    r[t].push(a);
                }),
            r
        );
    })({ promotions: L, codesByPromotion: T, partnerIds: w });
    return (0, i.jsx)(l.Modal, {
        title: O.intl.string(O.t["7ioAjs"]),
        subtitle: O.intl.format(O.t.LOYRxB, { helpCenterLink: f.A.getArticleURL(R.MVz.RECURRING_PROMOTION) }),
        actions: [],
        preview: (function () {
            if (!0 === d)
                return (0, i.jsx)(p.A, {
                    subscriptionTier: v.pe.TIER_2,
                    fullWidth: !0,
                    onClick: () => {
                        s();
                    },
                    onSubscribeModalClose: (e) => {
                        if (e) return m.Ay.fetchActivePromotions();
                    },
                });
        })(),
        transitionState: r,
        onClose: s,
        children:
            ((t = (0, h.N5)()),
            (n = (0, h.P6)()),
            d
                ? (0, i.jsx)(I._, { partnerIds: w })
                : (0, i.jsxs)("div", {
                      className: S.kL,
                      children: [
                          (0, i.jsx)("div", {
                              className: S.Ps,
                              children: (0, i.jsx)(a.E, {
                                  variant: "text-md/medium",
                                  color: "text-subtle",
                                  children: O.intl.format(O.t["43kZKL"], { days: n }),
                              }),
                          }),
                          (0, i.jsx)("div", { className: S.G9, children: (0, i.jsx)(y, { percentage: t }) }),
                          (0, i.jsx)("div", {
                              className: S.kR,
                              children: Object.entries(M)
                                  .sort((e, t) => {
                                      let [n] = e,
                                          [i] = t;
                                      return i.localeCompare(n);
                                  })
                                  .map((e) => {
                                      let [t, n] = e;
                                      return (0, i.jsx)(b, { promotionRecurrences: n }, t);
                                  }),
                          }),
                      ],
                  })),
    });
}
function w(e) {
    let { analyticsLocations: t, partnerIds: r, isLocked: s } = e;
    _.default.track(R.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { location_stack: t, partner_ids: r }),
        m.Ay.fetchActivePromotions(),
        (0, c.openModalLazy)(async () => {
            let { Premium3PRewardsModalEntry: e } = await Promise.all([n.e("13762"), n.e("91900")]).then(
                n.bind(n, 92375),
            );
            return (t) => (0, i.jsx)(e, { ...t, partnerIds: r, isLocked: s });
        });
}
