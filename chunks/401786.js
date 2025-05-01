n.d(t, { default: () => k }), n(415506), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(392711),
    l = n.n(s),
    a = n(442837),
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
    _ = n(55610),
    x = n(311821),
    E = n(42818),
    j = n(314884),
    C = n(509545),
    O = n(78839),
    S = n(267642),
    v = n(74538),
    T = n(937615),
    I = n(518062),
    N = n(474936),
    y = n(231338),
    A = n(388032),
    P = n(363405);
function R(e) {
    let { premiumSubscription: t, fractionalPremiumInfo: n, isInventory: r, onNext: s, onClose: l } = e,
        a = A.intl.format(A.t.otHdfX, { endDate: t.currentPeriodEnd });
    return (
        t.isPurchasedExternally && null != t.paymentGateway
            ? (a = A.intl.format(A.t.HbpFLi, {
                  paymentGatewayName: y.Vz[t.paymentGateway],
                  subscriptionManagementLink: (0, v.JE)(t.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
              }))
            : t.isPausedForFractionalPremium
              ? (a = A.intl.format(A.t['Hzqe6+'], { expirationDate: n.endsAt.toDate() }))
              : r && (a = A.intl.format(A.t.gXSnur, { endDate: t.currentPeriodEnd })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(o.xBx, {
                    separator: !1,
                    children: [
                        (0, i.jsx)(o.vwX, {
                            tag: o.RB0.H4,
                            children: r ? A.intl.string(A.t.iIoSd3) : A.intl.string(A.t.Skzv0t)
                        }),
                        (0, i.jsx)(o.olH, { onClick: l })
                    ]
                }),
                (0, i.jsxs)(o.hzk, {
                    className: P.body,
                    children: [(0, i.jsx)('div', { className: P.cancelImage }), (0, i.jsx)('div', { children: a }), (0, i.jsx)(_.Z, { fromBoostCancelModal: !0 })]
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, i.jsxs)(o.mzw, {
                          justify: g.Z.Justify.START,
                          children: [
                              (0, i.jsx)(o.zxk, {
                                  onClick: s,
                                  children: A.intl.string(A.t.PDTjLC)
                              }),
                              (0, i.jsx)(o.zxk, {
                                  look: o.zxk.Looks.LINK,
                                  onClick: l,
                                  children: A.intl.string(A.t['ETE/oK'])
                              })
                          ]
                      })
            ]
        })
    );
}
async function D(e, t, n, i) {
    let r =
        null != i
            ? i
            : (function () {
                  let e = Object.values(j.Z.boostSlots),
                      t = l().sortBy(
                          e.filter((e) => !(0, S.tl)(e)),
                          (e) => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null]
                      )[0];
                  return null != t ? t.id : null;
              })();
    if (null == r) throw Error('No slot to cancel');
    let s = (0, v.MY)(e, t);
    await (0, d.pD)(r),
        await (0, c.Mg)(
            e,
            { items: s },
            {
                amount: 0,
                currency: e.currency
            },
            (0, v.UX)(s, e.currency, e.paymentSourceId),
            n
        );
}
function Z(e) {
    var t, n, s;
    let { premiumSubscription: l, guildBoostSlotId: c, fractionalPremiumInfo: d, onBack: p, onNext: _, onClose: j } = e,
        [O, S] = r.useState(!1),
        [y, R] = r.useState(null),
        [Z, w] = r.useMemo(() => {
            try {
                return [(0, f.g)(l, -1), !1];
            } catch (e) {
                return [[], !0];
            }
        }, [l]),
        k = r.useRef(j);
    r.useEffect(() => {
        k.current = j;
    }),
        r.useEffect(() => {
            w && k.current();
        }, [w]);
    let { premiumSubscriptionPlan: L, premiumGuildPlan: M } = (0, a.cj)([C.Z], () => {
            let e = C.Z.get(l.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan: null != e ? C.Z.getForSkuAndInterval((0, v.Wz)(N.Si.GUILD), e.interval, e.intervalCount) : null
            };
        }),
        { analyticsLocations: B } = (0, m.ZP)(),
        [U] = (0, h.ED)({
            subscriptionId: l.id,
            renewal: !0,
            currency: l.currency,
            paymentSourceId: l.paymentSourceId,
            analyticsLocations: B,
            analyticsLocation: u.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
        }),
        V = null != M ? (0, v.Zx)(l, null != (s = null == (t = Z[0]) ? void 0 : t.quantity) ? s : 0, M.id) : null,
        [G] = (0, h.ED)({
            subscriptionId: l.id,
            items: V,
            renewal: !0,
            analyticsLocations: B,
            analyticsLocation: u.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
        });
    if (null == G || null == L || null == M || null == U) return (0, i.jsx)(o.$jN, {});
    let F =
            (l.items.some((e) => {
                let { planId: t } = e;
                return !N.Z1.has(t);
            }) &&
                null == l.renewalMutations) ||
            (null == (n = l.renewalMutations)
                ? void 0
                : n.items.find((e) => {
                      let { planId: t } = e;
                      return !N.Z1.has(t);
                  })) != null,
        H = Z.some((e) => {
            let { planId: t } = e;
            return N.Z1.has(t);
        }),
        z = F || H ? G.total - U.total : -U.total,
        { interval: W, intervalCount: Y } = L,
        K = A.intl.format(A.t['0W23cn'], { endDate: G.subscriptionPeriodStart });
    return (
        l.isPausedForFractionalPremium && d.fetched && (K = A.intl.format(A.t.eb0xgY, { expirationDate: d.endsAt.toDate() })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(I.Z, { onClose: j }),
                (0, i.jsxs)(o.hzk, {
                    className: P.body,
                    children: [
                        null !== y &&
                            (0, i.jsx)(o.kzN, {
                                className: P.error,
                                children: y
                            }),
                        (0, i.jsx)('div', { children: K }),
                        (0, i.jsxs)(b.aO, {
                            className: P.invoiceTable,
                            children: [
                                (0, i.jsx)(b.Z9, { children: A.intl.string(A.t.iqhIp6) }),
                                (0, i.jsx)(b.B1, {
                                    label: A.intl.format(A.t['Vg+LRk'], { subscriptionCount: 1 }),
                                    value: (0, T.og)((0, T.T4)(z, l.currency), W, Y),
                                    className: P.invoiceCancelRow
                                }),
                                null != V && V.length > 0
                                    ? (0, i.jsxs)('div', {
                                          children: [
                                              (0, i.jsx)(b.UN, {}),
                                              (0, i.jsx)(E.nd, {
                                                  premiumSubscription: l,
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
                            color: o.zxk.Colors.RED,
                            disabled: O,
                            onClick: async () => {
                                try {
                                    S(!0), R(null), await D(l, Z, B, c), _();
                                } catch (e) {
                                    R(A.intl.string(A.t['5mlOCQ'])), S(!1);
                                }
                            },
                            children: A.intl.string(A.t['/AS/gI'])
                        }),
                        (0, i.jsx)(x.Z, { onClick: p })
                    ]
                })
            ]
        })
    );
}
function w(e) {
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
                            children: A.intl.string(A.t['fZzV/P'])
                        }),
                        (0, i.jsx)(o.olH, { onClick: r })
                    ]
                }),
                (0, i.jsxs)(o.hzk, {
                    className: P.body,
                    children: [(0, i.jsx)('div', { className: P.cancelImage }), (0, i.jsx)('div', { children: A.intl.format(A.t['H+z0np'], { endDate: s }) })]
                }),
                (0, i.jsx)(o.mzw, {
                    children: (0, i.jsx)(o.zxk, {
                        onClick: r,
                        children: A.intl.string(A.t.BddRzc)
                    })
                })
            ]
        })
    );
}
function k(e) {
    let t,
        { guildBoostSlot: n, transitionState: s, onClose: l } = e;
    r.useEffect(() => {
        O.ZP.hasFetchedSubscriptions() || (0, c.jg)();
    }, []);
    let d = (0, a.e7)([O.ZP], () => O.ZP.getPremiumTypeSubscription()),
        g = (0, p.Z)(),
        [h, f] = r.useState(1),
        { analyticsLocations: b } = (0, m.ZP)(u.Z.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == d) t = (0, i.jsx)(o.hzk, { children: (0, i.jsx)(o.$jN, {}) });
    else
        switch (h) {
            case 1:
                t = (0, i.jsx)(R, {
                    premiumSubscription: d,
                    fractionalPremiumInfo: g,
                    isInventory: null == n.premiumGuildSubscription,
                    onNext: () => f(2),
                    onClose: l
                });
                break;
            case 2:
                t = (0, i.jsx)(Z, {
                    premiumSubscription: d,
                    guildBoostSlotId: n.id,
                    fractionalPremiumInfo: g,
                    onBack: () => f(1),
                    onNext: () => f(3),
                    onClose: l
                });
                break;
            case 3:
                t = (0, i.jsx)(w, {
                    premiumSubscription: d,
                    fractionalPremiumInfo: g,
                    onClose: l
                });
                break;
            default:
                throw Error('Unexpected step: '.concat(h));
        }
    return (0, i.jsx)(m.Gt, {
        value: b,
        children: (0, i.jsx)(o.Y0X, {
            transitionState: s,
            children: t
        })
    });
}
