n.d(t, { default: () => k }), n(415506), n(388685);
var i = n(951288),
    r = n(647438),
    s = n(392711),
    a = n.n(s),
    l = n(442837),
    o = n(82659),
    c = n(481060),
    d = n(355467),
    u = n(179360),
    m = n(100527),
    p = n(906732),
    g = n(975298),
    h = n(600164),
    f = n(374649),
    b = n(431369),
    x = n(811334),
    _ = n(311821),
    j = n(42818),
    E = n(314884),
    C = n(509545),
    O = n(78839),
    v = n(267642),
    S = n(74538),
    T = n(937615),
    N = n(518062),
    I = n(474936),
    y = n(231338),
    A = n(388032),
    P = n(569319);
function R(e) {
    let {
            premiumSubscription: t,
            fractionalPremiumInfo: n,
            isInventory: r,
            onNext: s,
            onClose: a,
            transitionState: l,
        } = e,
        c = A.intl.format(A.t.otHdfX, { endDate: t.currentPeriodEnd });
    t.isPurchasedExternally && null != t.paymentGateway
        ? (c = A.intl.format(A.t.HbpFLi, {
              paymentGatewayName: y.Vz[t.paymentGateway],
              subscriptionManagementLink: (0, S.JE)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
          }))
        : t.isPausedForFractionalPremium
          ? (c = A.intl.format(A.t["Hzqe6+"], { expirationDate: n.endsAt.toDate() }))
          : r && (c = A.intl.format(A.t.gXSnur, { endDate: t.currentPeriodEnd }));
    let d = r ? A.intl.string(A.t.iIoSd3) : A.intl.string(A.t.Skzv0t),
        u = t.isPurchasedExternally
            ? []
            : [
                  {
                      variant: "secondary",
                      text: A.intl.string(A.t["ETE/oK"]),
                      onClick: a,
                  },
                  {
                      variant: "primary",
                      text: A.intl.string(A.t.PDTjLC),
                      onClick: s,
                  },
              ];
    return (0, i.jsx)(o.Modal, {
        transitionState: l,
        onClose: a,
        size: "sm",
        title: d,
        actions: u,
        children: (0, i.jsxs)("div", {
            className: P.body,
            children: [(0, i.jsx)("div", { className: P.cancelImage }), (0, i.jsx)("div", { children: c })],
        }),
    });
}
async function D(e, t, n, i) {
    let r =
        null != i
            ? i
            : (function () {
                  let e = Object.values(E.Z.boostSlots),
                      t = a().sortBy(
                          e.filter((e) => !(0, v.tl)(e)),
                          (e) => [
                              null != e.premiumGuildSubscription,
                              null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null,
                          ],
                      )[0];
                  return null != t ? t.id : null;
              })();
    if (null == r) throw Error("No slot to cancel");
    let s = (0, S.MY)(e, t);
    await (0, u.pD)(r),
        await (0, d.Mg)(
            e,
            { items: s },
            {
                amount: 0,
                currency: e.currency,
            },
            (0, S.UX)(s, e.currency, e.paymentSourceId),
            n,
        );
}
function Z(e) {
    var t, n, s;
    let { premiumSubscription: a, guildBoostSlotId: o, fractionalPremiumInfo: d, onBack: u, onNext: g, onClose: E } = e,
        [O, v] = r.useState(!1),
        [y, R] = r.useState(null),
        [Z, w] = r.useMemo(() => {
            try {
                return [(0, b.g)(a, -1), !1];
            } catch (e) {
                return [[], !0];
            }
        }, [a]),
        k = r.useRef(E);
    r.useEffect(() => {
        k.current = E;
    }),
        r.useEffect(() => {
            w && k.current();
        }, [w]);
    let { premiumSubscriptionPlan: L, premiumGuildPlan: B } = (0, l.cj)([C.Z], () => {
            let e = C.Z.get(a.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan:
                    null != e ? C.Z.getForSkuAndInterval((0, S.Wz)(I.Si.GUILD), e.interval, e.intervalCount) : null,
            };
        }),
        { analyticsLocations: M } = (0, p.ZP)(),
        [U] = (0, f.ED)({
            subscriptionId: a.id,
            renewal: !0,
            currency: a.currency,
            paymentSourceId: a.paymentSourceId,
            analyticsLocations: M,
            analyticsLocation: m.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW,
        }),
        V = null != B ? (0, S.Zx)(a, null != (s = null == (t = Z[0]) ? void 0 : t.quantity) ? s : 0, B.id) : null,
        [G] = (0, f.ED)({
            subscriptionId: a.id,
            items: V,
            renewal: !0,
            analyticsLocations: M,
            analyticsLocation: m.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW,
        });
    if (null == G || null == L || null == B || null == U) return (0, i.jsx)(c.$jN, {});
    let F =
            (a.items.some((e) => {
                let { planId: t } = e;
                return !I.Z1.has(t);
            }) &&
                null == a.renewalMutations) ||
            (null == (n = a.renewalMutations)
                ? void 0
                : n.items.find((e) => {
                      let { planId: t } = e;
                      return !I.Z1.has(t);
                  })) != null,
        H = Z.some((e) => {
            let { planId: t } = e;
            return I.Z1.has(t);
        }),
        z = F || H ? G.total - U.total : -U.total,
        { interval: W, intervalCount: Y } = L,
        K = A.intl.format(A.t["0W23cn"], { endDate: G.subscriptionPeriodStart });
    return (
        a.isPausedForFractionalPremium &&
            d.fetched &&
            (K = A.intl.format(A.t.eb0xgY, { expirationDate: d.endsAt.toDate() })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(N.Z, { onClose: E }),
                (0, i.jsxs)(c.hzk, {
                    className: P.body,
                    children: [
                        null !== y &&
                            (0, i.jsx)(c.kzN, {
                                className: P.error,
                                children: y,
                            }),
                        (0, i.jsx)("div", { children: K }),
                        (0, i.jsxs)(x.aO, {
                            className: P.invoiceTable,
                            children: [
                                (0, i.jsx)(x.Z9, { children: A.intl.string(A.t.iqhIp6) }),
                                (0, i.jsx)(x.B1, {
                                    label: A.intl.format(A.t["Vg+LRk"], { subscriptionCount: 1 }),
                                    value: (0, T.og)((0, T.T4)(z, a.currency), W, Y),
                                    className: P.invoiceCancelRow,
                                }),
                                null != V && V.length > 0
                                    ? (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(x.UN, {}),
                                              (0, i.jsx)(j.nd, {
                                                  premiumSubscription: a,
                                                  renewalInvoice: G,
                                                  isUpdate: !0,
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)(c.mzw, {
                    align: h.Z.Align.CENTER,
                    justify: h.Z.Justify.BETWEEN,
                    children: [
                        (0, i.jsx)(c.zxk, {
                            variant: "critical-primary",
                            text: A.intl.string(A.t["/AS/gI"]),
                            disabled: O,
                            onClick: async () => {
                                try {
                                    v(!0), R(null), await D(a, Z, M, o), g();
                                } catch (e) {
                                    R(A.intl.string(A.t["5mlOCQ"])), v(!1);
                                }
                            },
                        }),
                        (0, i.jsx)(_.Z, { onClick: u }),
                    ],
                }),
            ],
        })
    );
}
function w(e) {
    let { premiumSubscription: t, fractionalPremiumInfo: n, onClose: r, transitionState: s } = e,
        a = t.currentPeriodEnd;
    t.isPausedForFractionalPremium && (a = n.endsAt.toDate());
    let l = [
        {
            variant: "primary",
            text: A.intl.string(A.t.BddRzc),
            onClick: r,
        },
    ];
    return (0, i.jsx)(o.Modal, {
        transitionState: s,
        onClose: r,
        size: "sm",
        title: A.intl.string(A.t["fZzV/P"]),
        actions: l,
        children: (0, i.jsxs)("div", {
            className: P.body,
            children: [
                (0, i.jsx)("div", { className: P.cancelImage }),
                (0, i.jsx)("div", { children: A.intl.format(A.t["H+z0np"], { endDate: a }) }),
            ],
        }),
    });
}
function k(e) {
    let t,
        { guildBoostSlot: n, transitionState: s, onClose: a } = e;
    r.useEffect(() => {
        O.Z.hasFetchedSubscriptions() || (0, d.jg)();
    }, []);
    let o = (0, l.e7)([O.Z], () => O.Z.getPremiumTypeSubscription()),
        u = (0, g.Z)(),
        [h, f] = r.useState(1),
        { analyticsLocations: b } = (0, p.ZP)(m.Z.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == o) t = (0, i.jsx)(c.hzk, { children: (0, i.jsx)(c.$jN, {}) });
    else
        switch (h) {
            case 1:
                t = (0, i.jsx)(R, {
                    premiumSubscription: o,
                    fractionalPremiumInfo: u,
                    isInventory: null == n.premiumGuildSubscription,
                    onNext: () => f(2),
                    onClose: a,
                    transitionState: s,
                });
                break;
            case 2:
                t = (0, i.jsx)(c.Y0X, {
                    transitionState: s,
                    parentComponent: "GuildBoostSlotCancellationModal",
                    children: (0, i.jsx)(Z, {
                        premiumSubscription: o,
                        guildBoostSlotId: n.id,
                        fractionalPremiumInfo: u,
                        onBack: () => f(1),
                        onNext: () => f(3),
                        onClose: a,
                    }),
                });
                break;
            case 3:
                t = (0, i.jsx)(w, {
                    premiumSubscription: o,
                    fractionalPremiumInfo: u,
                    onClose: a,
                    transitionState: s,
                });
                break;
            default:
                throw Error("Unexpected step: ".concat(h));
        }
    return (0, i.jsx)(p.Gt, {
        value: b,
        children: t,
    });
}
