n.d(t, { default: () => k }), n(415506), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(82659),
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
    w = n(569319);
function D(e) {
    let {
            premiumSubscription: t,
            fractionalPremiumInfo: n,
            isInventory: i,
            onNext: a,
            onClose: o,
            transitionState: s,
        } = e,
        c = P.intl.format(P.t.otHdfX, { endDate: t.currentPeriodEnd });
    t.isPurchasedExternally && null != t.paymentGateway
        ? (c = P.intl.format(P.t.HbpFLi, {
              paymentGatewayName: R.Vz[t.paymentGateway],
              subscriptionManagementLink: (0, S.JE)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
          }))
        : t.isPausedForFractionalPremium
          ? (c = P.intl.format(P.t["Hzqe6+"], { expirationDate: n.endsAt.toDate() }))
          : i && (c = P.intl.format(P.t.gXSnur, { endDate: t.currentPeriodEnd }));
    let u = i ? P.intl.string(P.t.iIoSd3) : P.intl.string(P.t.Skzv0t),
        d = t.isPurchasedExternally
            ? []
            : [
                  {
                      variant: "secondary",
                      text: P.intl.string(P.t["ETE/oK"]),
                      onClick: o,
                  },
                  {
                      variant: "primary",
                      text: P.intl.string(P.t.PDTjLC),
                      onClick: a,
                  },
              ];
    return (0, r.jsx)(l.Modal, {
        transitionState: s,
        onClose: o,
        size: "sm",
        title: u,
        actions: d,
        children: (0, r.jsxs)("div", {
            className: w.body,
            children: [(0, r.jsx)("div", { className: w.cancelImage }), (0, r.jsx)("div", { children: c })],
        }),
    });
}
function x() {
    let e = Object.values(O.Z.boostSlots),
        t = o().sortBy(
            e.filter((e) => !(0, T.tl)(e)),
            (e) => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null],
        )[0];
    return null != t ? t.id : null;
}
async function L(e, t, n, r) {
    let i = null != r ? r : x();
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
function j(e) {
    var t, n, a;
    let { premiumSubscription: o, guildBoostSlotId: l, fractionalPremiumInfo: u, onBack: d, onNext: p, onClose: O } = e,
        [I, T] = i.useState(!1),
        [R, D] = i.useState(null),
        [x, j] = i.useMemo(() => {
            try {
                return [(0, g.g)(o, -1), !1];
            } catch (e) {
                return [[], !0];
            }
        }, [o]),
        M = i.useRef(O);
    i.useEffect(() => {
        M.current = O;
    }),
        i.useEffect(() => {
            j && M.current();
        }, [j]);
    let { premiumSubscriptionPlan: k, premiumGuildPlan: U } = (0, s.cj)([v.Z], () => {
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
        Z = null != U ? (0, S.Zx)(o, null != (a = null == (t = x[0]) ? void 0 : t.quantity) ? a : 0, U.id) : null,
        [V] = (0, m.ED)({
            subscriptionId: o.id,
            items: Z,
            renewal: !0,
            analyticsLocations: G,
            analyticsLocation: f.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW,
        });
    if (null == V || null == k || null == U || null == B) return (0, r.jsx)(c.$jN, {});
    let F =
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
        H = x.some((e) => {
            let { planId: t } = e;
            return N.Z1.has(t);
        }),
        Y = F || H ? V.total - B.total : -B.total,
        { interval: W, intervalCount: K } = k,
        z = P.intl.format(P.t["0W23cn"], { endDate: V.subscriptionPeriodStart });
    return (
        o.isPausedForFractionalPremium &&
            u.fetched &&
            (z = P.intl.format(P.t.eb0xgY, { expirationDate: u.endsAt.toDate() })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(C.Z, {
                    "data-migration-pending": !0,
                    onClose: O,
                }),
                (0, r.jsxs)(c.hzk, {
                    "data-migration-pending": !0,
                    className: w.body,
                    children: [
                        null !== R &&
                            (0, r.jsx)(c.kzN, {
                                className: w.error,
                                children: R,
                            }),
                        (0, r.jsx)("div", { children: z }),
                        (0, r.jsxs)(E.aO, {
                            className: w.invoiceTable,
                            children: [
                                (0, r.jsx)(E.Z9, { children: P.intl.string(P.t.iqhIp6) }),
                                (0, r.jsx)(E.B1, {
                                    label: P.intl.format(P.t["Vg+LRk"], { subscriptionCount: 1 }),
                                    value: (0, A.og)((0, A.T4)(Y, o.currency), W, K),
                                    className: w.invoiceCancelRow,
                                }),
                                null != Z && Z.length > 0
                                    ? (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(E.UN, {}),
                                              (0, r.jsx)(y.nd, {
                                                  premiumSubscription: o,
                                                  renewalInvoice: V,
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
                        (0, r.jsx)(c.zxk, {
                            variant: "critical-primary",
                            text: P.intl.string(P.t["/AS/gI"]),
                            disabled: I,
                            onClick: async () => {
                                try {
                                    T(!0), D(null), await L(o, x, G, l), p();
                                } catch (e) {
                                    D(P.intl.string(P.t["5mlOCQ"])), T(!1);
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
function M(e) {
    let { premiumSubscription: t, fractionalPremiumInfo: n, onClose: i, transitionState: a } = e,
        o = t.currentPeriodEnd;
    t.isPausedForFractionalPremium && (o = n.endsAt.toDate());
    let s = [
        {
            variant: "primary",
            text: P.intl.string(P.t.BddRzc),
            onClick: i,
        },
    ];
    return (0, r.jsx)(l.Modal, {
        transitionState: a,
        onClose: i,
        size: "sm",
        title: P.intl.string(P.t["fZzV/P"]),
        actions: s,
        children: (0, r.jsxs)("div", {
            className: w.body,
            children: [
                (0, r.jsx)("div", { className: w.cancelImage }),
                (0, r.jsx)("div", { children: P.intl.format(P.t["H+z0np"], { endDate: o }) }),
            ],
        }),
    });
}
function k(e) {
    let t,
        { guildBoostSlot: n, transitionState: a, onClose: o } = e;
    i.useEffect(() => {
        I.Z.hasFetchedSubscriptions() || (0, u.jg)();
    }, []);
    let l = (0, s.e7)([I.Z], () => I.Z.getPremiumTypeSubscription()),
        d = (0, p.Z)(),
        [h, m] = i.useState(1),
        { analyticsLocations: g } = (0, _.ZP)(f.Z.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == l)
        t = (0, r.jsx)(c.hzk, {
            "data-migration-pending": !0,
            children: (0, r.jsx)(c.$jN, {}),
        });
    else
        switch (h) {
            case 1:
                t = (0, r.jsx)(D, {
                    premiumSubscription: l,
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
                    children: (0, r.jsx)(j, {
                        premiumSubscription: l,
                        guildBoostSlotId: n.id,
                        fractionalPremiumInfo: d,
                        onBack: () => m(1),
                        onNext: () => m(3),
                        onClose: o,
                    }),
                });
                break;
            case 3:
                t = (0, r.jsx)(M, {
                    premiumSubscription: l,
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
