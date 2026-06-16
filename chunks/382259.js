r.d(t, { w: () => O, u: () => S }), r(321073);
var i = r(627968),
    s = r(64700),
    l = r(939249),
    a = r(834730),
    n = r(289873),
    o = r(189213),
    d = r(17928),
    c = r(192308),
    u = r(793574),
    m = r(287809),
    C = r(174459),
    h = r(58703),
    x = r(975571),
    p = r(792656),
    _ = r(264779),
    g = r(962644),
    R = r(35587),
    f = r(374200),
    j = r(593687);
let E = () =>
    (0, i.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 6 6",
        fill: "none",
        overflow: "visible",
        children: (0, i.jsx)("ellipse", { cx: "3.4924", cy: "3", rx: "2.86154", ry: "3", fill: "#808BFF" }),
    });
var A = r(75662);
let v = (e) => {
    let { percentage: t } = e;
    return (0, i.jsxs)("div", {
        className: A.hr,
        children: [
            t > 0 &&
                t < 100 &&
                (0, i.jsx)(
                    () =>
                        (0, i.jsx)("div", {
                            className: A.ML,
                            style: { left: `calc(${t}% - 5px)` },
                            children: (0, i.jsx)(E, {}),
                        }),
                    {},
                ),
            (0, i.jsx)("div", { className: A.SX, style: { width: `${t}%` } }),
        ],
    });
};
var N = r(772167),
    P = r(294219),
    D = r(788868),
    I = r(652215),
    b = r(375708);
let y = (e) => {
        let { promotionRecurrences: t } = e,
            [r, n] = s.useState(t.length > 1),
            [o, d] = s.useState([]);
        return (
            s.useEffect(() => {
                d([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
            }, [t]),
            (0, i.jsxs)("div", {
                children: [
                    o.map((e) =>
                        (0, i.jsx)(
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
                    r &&
                        (0, i.jsx)(l.D, {
                            className: A.K8,
                            onClick: () => {
                                n(!1), d([...o, ...t.slice(1)]);
                            },
                            children: (0, i.jsx)(a.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: b.intl.string(b.t.rjjZxV),
                            }),
                        }),
                ],
            })
        );
    },
    w = (e) => e.partnerId?.toLowerCase() ?? null,
    O = (e) => {
        let t,
            r,
            { transitionState: s, onClose: l, partnerIds: c } = e,
            { promotionsLoaded: u, claimedOutboundPromotionCodeMap: C } = (0, R.y7)(),
            E = (0, d.yK)([f.A], () => f.A.outboundRecurringPromotions),
            O = (0, d.bG)([m.default], () => m.default.getCurrentUser()),
            S = (0, _.$_)(O),
            T = (0, P.G)(c, { isLockedCardView: S });
        if (!1 === u) return (0, i.jsx)(n.y, {});
        let M = ((e) => {
            let { promotions: t, codesByPromotion: r, partnerIds: i } = e,
                s = {};
            return (
                t
                    .filter((e) => !0 === (0, _.HB)({ promotionType: e.promotionType }))
                    .forEach((e) => {
                        let t = w(e),
                            l = ((e) => {
                                let { promotion: t } = e,
                                    r = w(t);
                                return null == r ? null : ((0, N.Cf)()[r] ?? null);
                            })({ promotion: e });
                        if (null == t || null == l || (null != i && !i.includes(t))) return;
                        t in s || (s[t] = []);
                        let a = {
                            id: e.id,
                            partnerId: t,
                            startDate: e.startDate,
                            endDate: e.endDate,
                            code: r[e.id] ?? null,
                            ...l,
                            title: b.intl.formatToPlainString(l.title, l.titleParams ?? {}),
                            outboundTitle: e.outboundTitle,
                            body: b.intl.formatToPlainString(l.body, l.bodyParams ?? {}),
                        };
                        s[t].push(a);
                    }),
                s
            );
        })({ promotions: E, codesByPromotion: C, partnerIds: T });
        return (0, i.jsx)(o.Modal, {
            title: b.intl.string(b.t["7ioAjs"]),
            subtitle: b.intl.format(b.t.LOYRxB, { helpCenterLink: x.A.getArticleURL(I.MVz.RECURRING_PROMOTION) }),
            actions: [],
            preview: (() => {
                if (!0 === S)
                    return (0, i.jsx)(p.A, {
                        subscriptionTier: D.pe.TIER_2,
                        fullWidth: !0,
                        onClick: () => {
                            l();
                        },
                        onSubscribeModalClose: (e) => {
                            if (e) return g.Ay.fetchActivePromotions();
                        },
                    });
            })(),
            transitionState: s,
            onClose: l,
            children:
                ((t = (0, h.N5)()),
                (r = (0, h.P6)()),
                S
                    ? (0, i.jsx)(j._, { partnerIds: T })
                    : (0, i.jsxs)("div", {
                          className: A.kL,
                          children: [
                              (0, i.jsx)("div", {
                                  className: A.Ps,
                                  children: (0, i.jsx)(a.E, {
                                      variant: "text-md/medium",
                                      color: "text-subtle",
                                      children: b.intl.format(b.t["43kZKL"], { days: r }),
                                  }),
                              }),
                              (0, i.jsx)("div", { className: A.G9, children: (0, i.jsx)(v, { percentage: t }) }),
                              (0, i.jsx)("div", {
                                  className: A.kR,
                                  children: Object.entries(M)
                                      .sort((e, t) => {
                                          let [r] = e,
                                              [i] = t;
                                          return i.localeCompare(r);
                                      })
                                      .map((e) => {
                                          let [t, r] = e;
                                          return (0, i.jsx)(y, { promotionRecurrences: r }, t);
                                      }),
                              }),
                          ],
                      })),
        });
    },
    S = (e) => {
        let { analyticsLocations: t, partnerIds: s } = e;
        C.default.track(I.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { location_stack: t, partner_ids: s }),
            g.Ay.fetchActivePromotions(),
            (0, c.openModalLazy)(async () => {
                let { Premium3PRewardsModalEntry: e } = await Promise.all([r.e("967"), r.e("91900")]).then(
                    r.bind(r, 92375),
                );
                return (t) => (0, i.jsx)(e, { ...t, partnerIds: s });
            });
    };
