n.d(t, { default: () => k }), n(415506), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(392711),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(355467),
    d = n(179360),
    u = n(100527),
    m = n(906732),
    g = n(975298),
    p = n(600164),
    h = n(374649),
    f = n(431369),
    _ = n(811334),
    b = n(55610),
    N = n(311821),
    x = n(42818),
    E = n(314884),
    j = n(509545),
    C = n(78839),
    O = n(267642),
    S = n(74538),
    v = n(937615),
    T = n(518062),
    I = n(474936),
    y = n(231338),
    A = n(388032),
    P = n(363405);
function R(e) {
    let { premiumSubscription: t, fractionalPremiumInfo: n, isInventory: i, onNext: s, onClose: a } = e,
        l = A.NW.format(A.t.otHdfX, { endDate: t.currentPeriodEnd });
    return (
        t.isPurchasedExternally && null != t.paymentGateway
            ? (l = A.NW.format(A.t.HbpFLi, {
                  paymentGatewayName: y.Vz[t.paymentGateway],
                  subscriptionManagementLink: (0, S.JE)(t.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
              }))
            : t.isPausedForFractionalPremium
              ? (l = A.NW.format(A.t['Hzqe6+'], { expirationDate: n.endsAt.toDate() }))
              : i && (l = A.NW.format(A.t.gXSnur, { endDate: t.currentPeriodEnd })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(o.xBx, {
                    separator: !1,
                    children: [
                        (0, r.jsx)(o.vwX, {
                            tag: o.RB0.H4,
                            children: i ? A.NW.string(A.t.iIoSd3) : A.NW.string(A.t.Skzv0t)
                        }),
                        (0, r.jsx)(o.olH, { onClick: a })
                    ]
                }),
                (0, r.jsxs)(o.hzk, {
                    className: P.body,
                    children: [(0, r.jsx)('div', { className: P.cancelImage }), (0, r.jsx)('div', { children: l }), (0, r.jsx)(b.Z, { fromBoostCancelModal: !0 })]
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, r.jsxs)(o.mzw, {
                          justify: p.Z.Justify.START,
                          children: [
                              (0, r.jsx)(o.zxk, {
                                  onClick: s,
                                  children: A.NW.string(A.t.PDTjLC)
                              }),
                              (0, r.jsx)(o.zxk, {
                                  look: o.zxk.Looks.LINK,
                                  onClick: a,
                                  children: A.NW.string(A.t['ETE/oK'])
                              })
                          ]
                      })
            ]
        })
    );
}
async function D(e, t, n, r) {
    let i =
        null != r
            ? r
            : (function () {
                  let e = Object.values(E.Z.boostSlots),
                      t = a().sortBy(
                          e.filter((e) => !(0, O.tl)(e)),
                          (e) => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null]
                      )[0];
                  return null != t ? t.id : null;
              })();
    if (null == i) throw Error('No slot to cancel');
    await (0, d.pD)(i), await (0, c.Mg)(e, { items: (0, S.MY)(e, t) }, n);
}
function Z(e) {
    var t, n, s;
    let { premiumSubscription: a, guildBoostSlotId: c, fractionalPremiumInfo: d, onBack: g, onNext: b, onClose: E } = e,
        [C, O] = i.useState(!1),
        [y, R] = i.useState(null),
        [Z, w] = i.useMemo(() => {
            try {
                return [(0, f.g)(a, -1), !1];
            } catch (e) {
                return [[], !0];
            }
        }, [a]),
        k = i.useRef(E);
    i.useEffect(() => {
        k.current = E;
    }),
        i.useEffect(() => {
            w && k.current();
        }, [w]);
    let { premiumSubscriptionPlan: W, premiumGuildPlan: L } = (0, l.cj)([j.Z], () => {
            let e = j.Z.get(a.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan: null != e ? j.Z.getForSkuAndInterval((0, S.Wz)(I.Si.GUILD), e.interval, e.intervalCount) : null
            };
        }),
        { analyticsLocations: B } = (0, m.ZP)(),
        [M] = (0, h.ED)({
            subscriptionId: a.id,
            renewal: !0,
            currency: a.currency,
            paymentSourceId: a.paymentSourceId,
            analyticsLocations: B,
            analyticsLocation: u.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
        }),
        U = null != L ? (0, S.Zx)(a, null != (s = null == (t = Z[0]) ? void 0 : t.quantity) ? s : 0, L.id) : null,
        [V] = (0, h.ED)({
            subscriptionId: a.id,
            items: U,
            renewal: !0,
            analyticsLocations: B,
            analyticsLocation: u.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
        });
    if (null == V || null == W || null == L || null == M) return (0, r.jsx)(o.$jN, {});
    let G =
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
        F = Z.some((e) => {
            let { planId: t } = e;
            return I.Z1.has(t);
        }),
        H = G || F ? V.total - M.total : -M.total,
        { interval: z, intervalCount: Y } = W,
        K = A.NW.format(A.t['0W23cn'], { endDate: V.subscriptionPeriodStart });
    return (
        a.isPausedForFractionalPremium && d.fetched && (K = A.NW.format(A.t.eb0xgY, { expirationDate: d.endsAt.toDate() })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(T.Z, { onClose: E }),
                (0, r.jsxs)(o.hzk, {
                    className: P.body,
                    children: [
                        null !== y &&
                            (0, r.jsx)(o.kzN, {
                                className: P.error,
                                children: y
                            }),
                        (0, r.jsx)('div', { children: K }),
                        (0, r.jsxs)(_.aO, {
                            className: P.invoiceTable,
                            children: [
                                (0, r.jsx)(_.Z9, { children: A.NW.string(A.t.iqhIp6) }),
                                (0, r.jsx)(_.B1, {
                                    label: A.NW.format(A.t['Vg+LRk'], { subscriptionCount: 1 }),
                                    value: (0, v.og)((0, v.T4)(H, a.currency), z, Y),
                                    className: P.invoiceCancelRow
                                }),
                                null != U && U.length > 0
                                    ? (0, r.jsxs)('div', {
                                          children: [
                                              (0, r.jsx)(_.UN, {}),
                                              (0, r.jsx)(x.nd, {
                                                  premiumSubscription: a,
                                                  renewalInvoice: V,
                                                  isUpdate: !0
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)(o.mzw, {
                    align: p.Z.Align.CENTER,
                    justify: p.Z.Justify.BETWEEN,
                    children: [
                        (0, r.jsx)(o.zxk, {
                            color: o.zxk.Colors.RED,
                            disabled: C,
                            onClick: async () => {
                                try {
                                    O(!0), R(null), await D(a, Z, B, c), b();
                                } catch (e) {
                                    R(A.NW.string(A.t['5mlOCQ'])), O(!1);
                                }
                            },
                            children: A.NW.string(A.t['/AS/gI'])
                        }),
                        (0, r.jsx)(N.Z, { onClick: g })
                    ]
                })
            ]
        })
    );
}
function w(e) {
    let { premiumSubscription: t, fractionalPremiumInfo: n, onClose: i } = e,
        s = t.currentPeriodEnd;
    return (
        t.isPausedForFractionalPremium && (s = n.endsAt.toDate()),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(o.xBx, {
                    separator: !1,
                    children: [
                        (0, r.jsx)(o.vwX, {
                            tag: o.RB0.H4,
                            children: A.NW.string(A.t['fZzV/P'])
                        }),
                        (0, r.jsx)(o.olH, { onClick: i })
                    ]
                }),
                (0, r.jsxs)(o.hzk, {
                    className: P.body,
                    children: [(0, r.jsx)('div', { className: P.cancelImage }), (0, r.jsx)('div', { children: A.NW.format(A.t['H+z0np'], { endDate: s }) })]
                }),
                (0, r.jsx)(o.mzw, {
                    children: (0, r.jsx)(o.zxk, {
                        onClick: i,
                        children: A.NW.string(A.t.BddRzc)
                    })
                })
            ]
        })
    );
}
function k(e) {
    let t,
        { guildBoostSlot: n, transitionState: s, onClose: a } = e;
    i.useEffect(() => {
        C.ZP.hasFetchedSubscriptions() || (0, c.jg)();
    }, []);
    let d = (0, l.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()),
        p = (0, g.Z)(),
        [h, f] = i.useState(1),
        { analyticsLocations: _ } = (0, m.ZP)(u.Z.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == d) t = (0, r.jsx)(o.hzk, { children: (0, r.jsx)(o.$jN, {}) });
    else
        switch (h) {
            case 1:
                t = (0, r.jsx)(R, {
                    premiumSubscription: d,
                    fractionalPremiumInfo: p,
                    isInventory: null == n.premiumGuildSubscription,
                    onNext: () => f(2),
                    onClose: a
                });
                break;
            case 2:
                t = (0, r.jsx)(Z, {
                    premiumSubscription: d,
                    guildBoostSlotId: n.id,
                    fractionalPremiumInfo: p,
                    onBack: () => f(1),
                    onNext: () => f(3),
                    onClose: a
                });
                break;
            case 3:
                t = (0, r.jsx)(w, {
                    premiumSubscription: d,
                    fractionalPremiumInfo: p,
                    onClose: a
                });
                break;
            default:
                throw Error('Unexpected step: '.concat(h));
        }
    return (0, r.jsx)(m.Gt, {
        value: _,
        children: (0, r.jsx)(o.Y0X, {
            transitionState: s,
            children: t
        })
    });
}
