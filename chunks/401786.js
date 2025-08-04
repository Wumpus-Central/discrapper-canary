(n.d(t, { default: () => w }), n(415506), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(392711),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(355467),
    d = n(179360),
    u = n(100527),
    m = n(906732),
    p = n(975298),
    g = n(600164),
    h = n(374649),
    f = n(431369),
    b = n(811334),
    x = n(311821),
    _ = n(42818),
    j = n(314884),
    C = n(509545),
    E = n(78839),
    O = n(267642),
    v = n(74538),
    S = n(937615),
    T = n(518062),
    N = n(474936),
    I = n(231338),
    y = n(388032),
    A = n(363405);
function P(e) {
    let { premiumSubscription: t, fractionalPremiumInfo: n, isInventory: r, onNext: s, onClose: a } = e,
        l = y.intl.format(y.t.otHdfX, { endDate: t.currentPeriodEnd });
    return (
        t.isPurchasedExternally && null != t.paymentGateway
            ? (l = y.intl.format(y.t.HbpFLi, {
                  paymentGatewayName: I.Vz[t.paymentGateway],
                  subscriptionManagementLink: (0, v.JE)(t.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
              }))
            : t.isPausedForFractionalPremium
              ? (l = y.intl.format(y.t['Hzqe6+'], { expirationDate: n.endsAt.toDate() }))
              : r && (l = y.intl.format(y.t.gXSnur, { endDate: t.currentPeriodEnd })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(o.xBx, {
                    separator: !1,
                    children: [
                        (0, i.jsx)(o.vwX, {
                            tag: o.RB0.H4,
                            children: r ? y.intl.string(y.t.iIoSd3) : y.intl.string(y.t.Skzv0t)
                        }),
                        (0, i.jsx)(o.olH, { onClick: a })
                    ]
                }),
                (0, i.jsxs)(o.hzk, {
                    className: A.body,
                    children: [(0, i.jsx)('div', { className: A.cancelImage }), (0, i.jsx)('div', { children: l })]
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, i.jsxs)(o.mzw, {
                          justify: g.Z.Justify.START,
                          align: g.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)(o.zxk, {
                                  variant: 'primary',
                                  text: y.intl.string(y.t.PDTjLC),
                                  onClick: s
                              }),
                              (0, i.jsx)('div', {
                                  className: A.textButton,
                                  children: (0, i.jsx)(o.Avr, {
                                      variant: 'primary',
                                      text: y.intl.string(y.t['ETE/oK']),
                                      onClick: a
                                  })
                              })
                          ]
                      })
            ]
        })
    );
}
async function R(e, t, n, i) {
    let r =
        null != i
            ? i
            : (function () {
                  let e = Object.values(j.Z.boostSlots),
                      t = a().sortBy(
                          e.filter((e) => !(0, O.tl)(e)),
                          (e) => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null]
                      )[0];
                  return null != t ? t.id : null;
              })();
    if (null == r) throw Error('No slot to cancel');
    let s = (0, v.MY)(e, t);
    (await (0, d.pD)(r),
        await (0, c.Mg)(
            e,
            { items: s },
            {
                amount: 0,
                currency: e.currency
            },
            (0, v.UX)(s, e.currency, e.paymentSourceId),
            n
        ));
}
function D(e) {
    var t, n, s;
    let { premiumSubscription: a, guildBoostSlotId: c, fractionalPremiumInfo: d, onBack: p, onNext: j, onClose: E } = e,
        [O, I] = r.useState(!1),
        [P, D] = r.useState(null),
        [Z, w] = r.useMemo(() => {
            try {
                return [(0, f.g)(a, -1), !1];
            } catch (e) {
                return [[], !0];
            }
        }, [a]),
        k = r.useRef(E);
    (r.useEffect(() => {
        k.current = E;
    }),
        r.useEffect(() => {
            w && k.current();
        }, [w]));
    let { premiumSubscriptionPlan: L, premiumGuildPlan: B } = (0, l.cj)([C.Z], () => {
            let e = C.Z.get(a.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan: null != e ? C.Z.getForSkuAndInterval((0, v.Wz)(N.Si.GUILD), e.interval, e.intervalCount) : null
            };
        }),
        { analyticsLocations: M } = (0, m.ZP)(),
        [U] = (0, h.ED)({
            subscriptionId: a.id,
            renewal: !0,
            currency: a.currency,
            paymentSourceId: a.paymentSourceId,
            analyticsLocations: M,
            analyticsLocation: u.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
        }),
        V = null != B ? (0, v.Zx)(a, null != (s = null == (t = Z[0]) ? void 0 : t.quantity) ? s : 0, B.id) : null,
        [G] = (0, h.ED)({
            subscriptionId: a.id,
            items: V,
            renewal: !0,
            analyticsLocations: M,
            analyticsLocation: u.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
        });
    if (null == G || null == L || null == B || null == U) return (0, i.jsx)(o.$jN, {});
    let F =
            (a.items.some((e) => {
                let { planId: t } = e;
                return !N.Z1.has(t);
            }) &&
                null == a.renewalMutations) ||
            (null == (n = a.renewalMutations)
                ? void 0
                : n.items.find((e) => {
                      let { planId: t } = e;
                      return !N.Z1.has(t);
                  })) != null,
        H = Z.some((e) => {
            let { planId: t } = e;
            return N.Z1.has(t);
        }),
        W = F || H ? G.total - U.total : -U.total,
        { interval: z, intervalCount: Y } = L,
        K = y.intl.format(y.t['0W23cn'], { endDate: G.subscriptionPeriodStart });
    return (
        a.isPausedForFractionalPremium && d.fetched && (K = y.intl.format(y.t.eb0xgY, { expirationDate: d.endsAt.toDate() })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(T.Z, { onClose: E }),
                (0, i.jsxs)(o.hzk, {
                    className: A.body,
                    children: [
                        null !== P &&
                            (0, i.jsx)(o.kzN, {
                                className: A.error,
                                children: P
                            }),
                        (0, i.jsx)('div', { children: K }),
                        (0, i.jsxs)(b.aO, {
                            className: A.invoiceTable,
                            children: [
                                (0, i.jsx)(b.Z9, { children: y.intl.string(y.t.iqhIp6) }),
                                (0, i.jsx)(b.B1, {
                                    label: y.intl.format(y.t['Vg+LRk'], { subscriptionCount: 1 }),
                                    value: (0, S.og)((0, S.T4)(W, a.currency), z, Y),
                                    className: A.invoiceCancelRow
                                }),
                                null != V && V.length > 0
                                    ? (0, i.jsxs)('div', {
                                          children: [
                                              (0, i.jsx)(b.UN, {}),
                                              (0, i.jsx)(_.nd, {
                                                  premiumSubscription: a,
                                                  renewalInvoice: G,
                                                  isUpdate: !0
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)(o.mzw, {
                    align: g.Z.Align.CENTER,
                    justify: g.Z.Justify.BETWEEN,
                    children: [
                        (0, i.jsx)(o.zxk, {
                            variant: 'critical-primary',
                            text: y.intl.string(y.t['/AS/gI']),
                            disabled: O,
                            onClick: async () => {
                                try {
                                    (I(!0), D(null), await R(a, Z, M, c), j());
                                } catch (e) {
                                    (D(y.intl.string(y.t['5mlOCQ'])), I(!1));
                                }
                            }
                        }),
                        (0, i.jsx)(x.Z, { onClick: p })
                    ]
                })
            ]
        })
    );
}
function Z(e) {
    let { premiumSubscription: t, fractionalPremiumInfo: n, onClose: r } = e,
        s = t.currentPeriodEnd;
    return (
        t.isPausedForFractionalPremium && (s = n.endsAt.toDate()),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(o.xBx, {
                    separator: !1,
                    children: [
                        (0, i.jsx)(o.vwX, {
                            tag: o.RB0.H4,
                            children: y.intl.string(y.t['fZzV/P'])
                        }),
                        (0, i.jsx)(o.olH, { onClick: r })
                    ]
                }),
                (0, i.jsxs)(o.hzk, {
                    className: A.body,
                    children: [(0, i.jsx)('div', { className: A.cancelImage }), (0, i.jsx)('div', { children: y.intl.format(y.t['H+z0np'], { endDate: s }) })]
                }),
                (0, i.jsx)(o.mzw, {
                    children: (0, i.jsx)(o.zxk, {
                        variant: 'primary',
                        text: y.intl.string(y.t.BddRzc),
                        onClick: r
                    })
                })
            ]
        })
    );
}
function w(e) {
    let t,
        { guildBoostSlot: n, transitionState: s, onClose: a } = e;
    r.useEffect(() => {
        E.Z.hasFetchedSubscriptions() || (0, c.jg)();
    }, []);
    let d = (0, l.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
        g = (0, p.Z)(),
        [h, f] = r.useState(1),
        { analyticsLocations: b } = (0, m.ZP)(u.Z.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == d) t = (0, i.jsx)(o.hzk, { children: (0, i.jsx)(o.$jN, {}) });
    else
        switch (h) {
            case 1:
                t = (0, i.jsx)(P, {
                    premiumSubscription: d,
                    fractionalPremiumInfo: g,
                    isInventory: null == n.premiumGuildSubscription,
                    onNext: () => f(2),
                    onClose: a
                });
                break;
            case 2:
                t = (0, i.jsx)(D, {
                    premiumSubscription: d,
                    guildBoostSlotId: n.id,
                    fractionalPremiumInfo: g,
                    onBack: () => f(1),
                    onNext: () => f(3),
                    onClose: a
                });
                break;
            case 3:
                t = (0, i.jsx)(Z, {
                    premiumSubscription: d,
                    fractionalPremiumInfo: g,
                    onClose: a
                });
                break;
            default:
                throw Error('Unexpected step: '.concat(h));
        }
    return (0, i.jsx)(m.Gt, {
        value: b,
        children: (0, i.jsx)(o.Y0X, {
            transitionState: s,
            parentComponent: 'GuildBoostSlotCancellationModal',
            children: t
        })
    });
}
