n.d(t, { default: () => j }), n(415506), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(481060),
    u = n(355467),
    d = n(179360),
    f = n(100527),
    _ = n(906732),
    p = n(975298),
    h = n(600164),
    m = n(374649),
    g = n(431369),
    E = n(811334),
    b = n(311821),
    y = n(42818),
    O = n(314884),
    v = n(509545),
    I = n(78839),
    T = n(267642),
    S = n(74538),
    A = n(937615),
    C = n(518062),
    N = n(474936),
    R = n(231338),
    P = n(388032),
    D = n(569319);
function w(e) {
    let {
            premiumSubscription: t,
            fractionalPremiumInfo: n,
            isInventory: i,
            onNext: a,
            onClose: o,
            transitionState: l,
        } = e,
        c = P.intl.format(P.t.otHdfR, { endDate: t.currentPeriodEnd });
    t.isPurchasedExternally && null != t.paymentGateway
        ? (c = P.intl.format(P.t.HbpFLg, {
              paymentGatewayName: R.Vz[t.paymentGateway],
              subscriptionManagementLink: (0, S.JE)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
          }))
        : t.isPausedForFractionalPremium
          ? (c = P.intl.format(P.t.Hzqe6y, { expirationDate: n.endsAt.toDate() }))
          : i && (c = P.intl.format(P.t.gXSnul, { endDate: t.currentPeriodEnd }));
    let u = i ? P.intl.string(P.t.iIoSd6) : P.intl.string(P.t.Skzv0u),
        d = t.isPurchasedExternally
            ? []
            : [
                  {
                      variant: "secondary",
                      text: P.intl.string(P.t["ETE/oC"]),
                      onClick: o,
                  },
                  {
                      variant: "primary",
                      text: P.intl.string(P.t.PDTjLN),
                      onClick: a,
                  },
              ];
    return (0, r.jsx)(s.Modal, {
        transitionState: l,
        onClose: o,
        size: "sm",
        title: u,
        actions: d,
        children: (0, r.jsxs)("div", {
            className: D.body,
            children: [(0, r.jsx)("div", { className: D.cancelImage }), (0, r.jsx)("div", { children: c })],
        }),
    });
}
function L() {
    let e = Object.values(O.Z.boostSlots),
        t = o().sortBy(
            e.filter((e) => !(0, T.tl)(e)),
            (e) => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null],
        )[0];
    return null != t ? t.id : null;
}
async function x(e, t, n, r) {
    let i = null != r ? r : L();
    if (null == i) throw Error("No slot to cancel");
    let a = (0, S.MY)(e, t);
    await (0, d.pD)(i),
        await (0, u.Mg)(
            e,
            { items: a },
            {
                amount: 0,
                currency: e.currency,
            },
            (0, S.UX)(a, e.currency, e.paymentSourceId),
            n,
        );
}
function M(e) {
    var t, n, a;
    let { premiumSubscription: o, guildBoostSlotId: s, fractionalPremiumInfo: u, onBack: d, onNext: p, onClose: O } = e,
        [I, T] = i.useState(!1),
        [R, w] = i.useState(null),
        [L, M] = i.useMemo(() => {
            try {
                return [(0, g.g)(o, -1), !1];
            } catch (e) {
                return [[], !0];
            }
        }, [o]),
        k = i.useRef(O);
    i.useEffect(() => {
        k.current = O;
    }),
        i.useEffect(() => {
            M && k.current();
        }, [M]);
    let { premiumSubscriptionPlan: j, premiumGuildPlan: U } = (0, l.cj)([v.Z], () => {
            let e = v.Z.get(o.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan:
                    null != e ? v.Z.getForSkuAndInterval((0, S.Wz)(N.Si.GUILD), e.interval, e.intervalCount) : null,
            };
        }),
        { analyticsLocations: G } = (0, _.ZP)(),
        [B] = (0, m.ED)({
            subscriptionId: o.id,
            renewal: !0,
            currency: o.currency,
            paymentSourceId: o.paymentSourceId,
            analyticsLocations: G,
            analyticsLocation: f.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW,
        }),
        Z = null != U ? (0, S.Zx)(o, null != (a = null == (t = L[0]) ? void 0 : t.quantity) ? a : 0, U.id) : null,
        [F] = (0, m.ED)({
            subscriptionId: o.id,
            items: Z,
            renewal: !0,
            analyticsLocations: G,
            analyticsLocation: f.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW,
        });
    if (null == F || null == j || null == U || null == B) return (0, r.jsx)(c.$jN, {});
    let V =
            (o.items.some((e) => {
                let { planId: t } = e;
                return !N.Z1.has(t);
            }) &&
                null == o.renewalMutations) ||
            (null == (n = o.renewalMutations)
                ? void 0
                : n.items.find((e) => {
                      let { planId: t } = e;
                      return !N.Z1.has(t);
                  })) != null,
        H = L.some((e) => {
            let { planId: t } = e;
            return N.Z1.has(t);
        }),
        Y = V || H ? F.total - B.total : -B.total,
        { interval: W, intervalCount: K } = j,
        z = P.intl.format(P.t["0W23cu"], { endDate: F.subscriptionPeriodStart });
    return (
        o.isPausedForFractionalPremium &&
            u.fetched &&
            (z = P.intl.format(P.t.eb0xgS, { expirationDate: u.endsAt.toDate() })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(C.Z, {
                    "data-migration-pending": !0,
                    onClose: O,
                }),
                (0, r.jsxs)(c.hzk, {
                    "data-migration-pending": !0,
                    className: D.body,
                    children: [
                        null !== R &&
                            (0, r.jsx)("div", {
                                className: D.error,
                                children: (0, r.jsx)(c.M14, {
                                    type: "critical",
                                    children: R,
                                }),
                            }),
                        (0, r.jsx)("div", { children: z }),
                        (0, r.jsxs)(E.aO, {
                            className: D.invoiceTable,
                            children: [
                                (0, r.jsx)(E.Z9, { children: P.intl.string(P.t.iqhIp4) }),
                                (0, r.jsx)(E.B1, {
                                    label: P.intl.format(P.t["Vg+LRr"], { subscriptionCount: 1 }),
                                    value: (0, A.og)((0, A.T4)(Y, o.currency), W, K),
                                    className: D.invoiceCancelRow,
                                }),
                                null != Z && Z.length > 0
                                    ? (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(E.UN, {}),
                                              (0, r.jsx)(y.nd, {
                                                  premiumSubscription: o,
                                                  renewalInvoice: F,
                                                  isUpdate: !0,
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(c.mzw, {
                    "data-migration-pending": !0,
                    align: h.Z.Align.CENTER,
                    justify: h.Z.Justify.BETWEEN,
                    children: [
                        (0, r.jsx)(c.Button, {
                            variant: "critical-primary",
                            text: P.intl.string(P.t["/AS/gM"]),
                            disabled: I,
                            onClick: async () => {
                                try {
                                    T(!0), w(null), await x(o, L, G, s), p();
                                } catch (e) {
                                    w(P.intl.string(P.t["5mlOCW"])), T(!1);
                                }
                            },
                        }),
                        (0, r.jsx)(b.Z, { onClick: d }),
                    ],
                }),
            ],
        })
    );
}
function k(e) {
    let { premiumSubscription: t, fractionalPremiumInfo: n, onClose: i, transitionState: a } = e,
        o = t.currentPeriodEnd;
    t.isPausedForFractionalPremium && (o = n.endsAt.toDate());
    let l = [
        {
            variant: "primary",
            text: P.intl.string(P.t.BddRzS),
            onClick: i,
        },
    ];
    return (0, r.jsx)(s.Modal, {
        transitionState: a,
        onClose: i,
        size: "sm",
        title: P.intl.string(P.t["fZzV/B"]),
        actions: l,
        children: (0, r.jsxs)("div", {
            className: D.body,
            children: [
                (0, r.jsx)("div", { className: D.cancelImage }),
                (0, r.jsx)("div", { children: P.intl.format(P.t["H+z0ns"], { endDate: o }) }),
            ],
        }),
    });
}
function j(e) {
    let t,
        { guildBoostSlot: n, transitionState: a, onClose: o } = e;
    i.useEffect(() => {
        I.Z.hasFetchedSubscriptions() || (0, u.jg)();
    }, []);
    let s = (0, l.e7)([I.Z], () => I.Z.getPremiumTypeSubscription()),
        d = (0, p.Z)(),
        [h, m] = i.useState(1),
        { analyticsLocations: g } = (0, _.ZP)(f.Z.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == s)
        t = (0, r.jsx)(c.hzk, {
            "data-migration-pending": !0,
            children: (0, r.jsx)(c.$jN, {}),
        });
    else
        switch (h) {
            case 1:
                t = (0, r.jsx)(w, {
                    premiumSubscription: s,
                    fractionalPremiumInfo: d,
                    isInventory: null == n.premiumGuildSubscription,
                    onNext: () => m(2),
                    onClose: o,
                    transitionState: a,
                });
                break;
            case 2:
                t = (0, r.jsx)(c.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: a,
                    parentComponent: "GuildBoostSlotCancellationModal",
                    children: (0, r.jsx)(M, {
                        premiumSubscription: s,
                        guildBoostSlotId: n.id,
                        fractionalPremiumInfo: d,
                        onBack: () => m(1),
                        onNext: () => m(3),
                        onClose: o,
                    }),
                });
                break;
            case 3:
                t = (0, r.jsx)(k, {
                    premiumSubscription: s,
                    fractionalPremiumInfo: d,
                    onClose: o,
                    transitionState: a,
                });
                break;
            default:
                throw Error("Unexpected step: ".concat(h));
        }
    return (0, r.jsx)(_.Gt, {
        value: g,
        children: t,
    });
}
