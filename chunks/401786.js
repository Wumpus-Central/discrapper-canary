n.d(t, { default: () => B }), n(411104), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(392711),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(355467),
    d = n(179360),
    u = n(881052),
    m = n(128069),
    h = n(100527),
    g = n(906732),
    x = n(600164),
    _ = n(374649),
    p = n(431369),
    E = n(55610),
    C = n(653798),
    f = n(311821),
    T = n(42818),
    N = n(314884),
    S = n(509545),
    I = n(78839),
    b = n(267642),
    v = n(74538),
    j = n(937615),
    A = n(518062),
    O = n(474936),
    R = n(231338),
    P = n(388032),
    D = n(522203);
function y(e) {
    let { premiumSubscription: t, isInventory: n, onNext: s, onClose: r } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.xBx, {
                separator: !1,
                children: [
                    (0, i.jsx)(o.vwX, {
                        tag: o.RB0.H4,
                        children: n ? P.intl.string(P.t.iIoSd3) : P.intl.string(P.t.Skzv0t)
                    }),
                    (0, i.jsx)(o.olH, { onClick: r })
                ]
            }),
            (0, i.jsxs)(o.hzk, {
                className: D.body,
                children: [
                    (0, i.jsx)('div', { className: D.cancelImage }),
                    (0, i.jsx)('div', {
                        children:
                            t.isPurchasedExternally && null != t.paymentGateway
                                ? P.intl.format(P.t.HbpFLi, {
                                      paymentGatewayName: R.Vz[t.paymentGateway],
                                      subscriptionManagementLink: (0, v.JE)(t.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                                  })
                                : n
                                  ? P.intl.format(P.t.gXSnur, { endDate: t.currentPeriodEnd })
                                  : P.intl.format(P.t.otHdfX, { endDate: t.currentPeriodEnd })
                    }),
                    (0, i.jsx)(E.Z, { fromBoostCancelModal: !0 })
                ]
            }),
            t.isPurchasedExternally
                ? null
                : (0, i.jsxs)(o.mzw, {
                      justify: x.Z.Justify.START,
                      children: [
                          (0, i.jsx)(o.zxk, {
                              onClick: s,
                              children: P.intl.string(P.t.PDTjLC)
                          }),
                          (0, i.jsx)(o.zxk, {
                              look: o.zxk.Looks.LINK,
                              onClick: r,
                              children: P.intl.string(P.t['ETE/oK'])
                          })
                      ]
                  })
        ]
    });
}
async function Z(e, t, n, i) {
    let s =
        null != i
            ? i
            : (function () {
                  let e = Object.values(N.Z.boostSlots),
                      t = l().sortBy(
                          e.filter((e) => !(0, b.tl)(e)),
                          (e) => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null]
                      )[0];
                  return null != t ? t.id : null;
              })();
    if (null == s) throw Error('No slot to cancel');
    await (0, d.pD)(s), await (0, c.Mg)(e, { items: (0, v.MY)(e, t) }, n);
}
function k(e) {
    var t, n, r;
    let { premiumSubscription: l, guildBoostSlotId: c, onBack: d, onNext: E, onClose: N } = e,
        [I, b] = s.useState(!1),
        [R, y] = s.useState(null),
        [k, L] = s.useMemo(() => {
            try {
                return [(0, p.g)(l, -1), !1];
            } catch {
                return [[], !0];
            }
        }, [l]),
        B = s.useRef(N);
    s.useEffect(() => {
        B.current = N;
    }),
        s.useEffect(() => {
            L && B.current();
        }, [L]);
    let { premiumSubscriptionPlan: M, premiumGuildPlan: w } = (0, a.cj)([S.Z], () => {
            let e = S.Z.get(l.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan: null != e ? S.Z.getForSkuAndInterval((0, v.Wz)(O.Si.GUILD), e.interval, e.intervalCount) : null
            };
        }),
        { analyticsLocations: V } = (0, g.ZP)(),
        [U] = (0, _.ED)({
            subscriptionId: l.id,
            renewal: !0,
            currency: l.currency,
            paymentSourceId: l.paymentSourceId,
            analyticsLocations: V,
            analyticsLocation: h.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
        }),
        G = null != w ? (0, v.Zx)(l, null !== (r = null === (t = k[0]) || void 0 === t ? void 0 : t.quantity) && void 0 !== r ? r : 0, w.id) : null,
        [F] = (0, _.ED)({
            subscriptionId: l.id,
            items: G,
            renewal: !0,
            analyticsLocations: V,
            analyticsLocation: h.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
        });
    if (null == F || null == M || null == w || null == U) return (0, i.jsx)(o.$jN, {});
    let H =
            (l.items.some((e) => {
                let { planId: t } = e;
                return !O.Z1.has(t);
            }) &&
                null == l.renewalMutations) ||
            (null === (n = l.renewalMutations) || void 0 === n
                ? void 0
                : n.items.find((e) => {
                      let { planId: t } = e;
                      return !O.Z1.has(t);
                  })) != null,
        z = k.some((e) => {
            let { planId: t } = e;
            return O.Z1.has(t);
        }),
        Y = H || z ? F.total - U.total : -U.total,
        { interval: W, intervalCount: K } = M;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(A.Z, { onClose: N }),
            (0, i.jsxs)(o.hzk, {
                className: D.body,
                children: [
                    null !== R &&
                        (0, i.jsx)(o.kzN, {
                            className: D.error,
                            children: R
                        }),
                    (0, i.jsx)('div', { children: P.intl.format(P.t['0W23cn'], { endDate: F.subscriptionPeriodStart }) }),
                    (0, i.jsxs)(C.PO, {
                        className: D.invoiceTable,
                        children: [
                            (0, i.jsx)(C.q9, { children: P.intl.string(P.t.iqhIp6) }),
                            (0, i.jsx)(C.R$, {
                                label: P.intl.format(P.t['Vg+LRk'], { subscriptionCount: 1 }),
                                value: (0, j.og)((0, j.T4)(Y, l.currency), W, K),
                                className: D.invoiceCancelRow
                            }),
                            null != G && G.length > 0
                                ? (0, i.jsxs)('div', {
                                      children: [
                                          (0, i.jsx)(C.KU, {}),
                                          (0, i.jsx)(T.nd, {
                                              premiumSubscription: l,
                                              renewalInvoice: F,
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
                align: x.Z.Align.CENTER,
                justify: x.Z.Justify.BETWEEN,
                children: [
                    (0, i.jsx)(o.zxk, {
                        color: o.zxk.Colors.RED,
                        disabled: I,
                        onClick: async () => {
                            try {
                                b(!0), y(null), await Z(l, k, V, c), E();
                            } catch (t) {
                                let e = t instanceof u.HF ? t : new u.HF(t, t.code);
                                y(P.intl.string(e.code === m.SM.BILLING_PAUSE_INVALID_UPDATE ? P.t.dq4vq6 : P.t['5mlOCQ'])), b(!1);
                            }
                        },
                        children: P.intl.string(P.t['/AS/gI'])
                    }),
                    (0, i.jsx)(f.Z, { onClick: d })
                ]
            })
        ]
    });
}
function L(e) {
    let { premiumSubscription: t, onClose: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.xBx, {
                separator: !1,
                children: [
                    (0, i.jsx)(o.vwX, {
                        tag: o.RB0.H4,
                        children: P.intl.string(P.t['fZzV/P'])
                    }),
                    (0, i.jsx)(o.olH, { onClick: n })
                ]
            }),
            (0, i.jsxs)(o.hzk, {
                className: D.body,
                children: [(0, i.jsx)('div', { className: D.cancelImage }), (0, i.jsx)('div', { children: P.intl.format(P.t['H+z0np'], { endDate: t.currentPeriodEnd }) })]
            }),
            (0, i.jsx)(o.mzw, {
                children: (0, i.jsx)(o.zxk, {
                    onClick: n,
                    children: P.intl.string(P.t.BddRzc)
                })
            })
        ]
    });
}
function B(e) {
    let t,
        { guildBoostSlot: n, transitionState: r, onClose: l } = e;
    s.useEffect(() => {
        I.ZP.hasFetchedSubscriptions() || (0, c.jg)();
    }, []);
    let d = (0, a.e7)([I.ZP], () => I.ZP.getPremiumTypeSubscription()),
        [u, m] = s.useState(1),
        { analyticsLocations: x } = (0, g.ZP)(h.Z.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == d) t = (0, i.jsx)(o.hzk, { children: (0, i.jsx)(o.$jN, {}) });
    else
        switch (u) {
            case 1:
                t = (0, i.jsx)(y, {
                    premiumSubscription: d,
                    isInventory: null == n.premiumGuildSubscription,
                    onNext: () => m(2),
                    onClose: l
                });
                break;
            case 2:
                t = (0, i.jsx)(k, {
                    premiumSubscription: d,
                    guildBoostSlotId: n.id,
                    onBack: () => m(1),
                    onNext: () => m(3),
                    onClose: l
                });
                break;
            case 3:
                t = (0, i.jsx)(L, {
                    premiumSubscription: d,
                    onClose: l
                });
                break;
            default:
                throw Error('Unexpected step: '.concat(u));
        }
    return (0, i.jsx)(g.Gt, {
        value: x,
        children: (0, i.jsx)(o.Y0X, {
            transitionState: r,
            children: t
        })
    });
}
