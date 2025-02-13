n.d(t, { default: () => B }), n(411104), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(392711),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(355467),
    d = n(179360),
    u = n(881052),
    h = n(128069),
    m = n(100527),
    g = n(906732),
    x = n(600164),
    _ = n(374649),
    p = n(431369),
    E = n(55610),
    C = n(653798),
    N = n(311821),
    I = n(42818),
    f = n(314884),
    T = n(509545),
    S = n(78839),
    j = n(267642),
    v = n(74538),
    b = n(937615),
    A = n(518062),
    O = n(474936),
    R = n(231338),
    D = n(388032),
    P = n(161454);
function y(e) {
    let { premiumSubscription: t, isInventory: n, onNext: s, onClose: l } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.xBx, {
                separator: !1,
                children: [
                    (0, i.jsx)(o.vwX, {
                        tag: o.RB0.H4,
                        children: n ? D.intl.string(D.t.iIoSd3) : D.intl.string(D.t.Skzv0t)
                    }),
                    (0, i.jsx)(o.olH, { onClick: l })
                ]
            }),
            (0, i.jsxs)(o.hzk, {
                className: P.body,
                children: [
                    (0, i.jsx)('div', { className: P.cancelImage }),
                    (0, i.jsx)('div', {
                        children:
                            t.isPurchasedExternally && null != t.paymentGateway
                                ? D.intl.format(D.t.HbpFLi, {
                                      paymentGatewayName: R.Vz[t.paymentGateway],
                                      subscriptionManagementLink: (0, v.JE)(t.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                                  })
                                : n
                                  ? D.intl.format(D.t.gXSnur, { endDate: t.currentPeriodEnd })
                                  : D.intl.format(D.t.otHdfX, { endDate: t.currentPeriodEnd })
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
                              children: D.intl.string(D.t.PDTjLC)
                          }),
                          (0, i.jsx)(o.zxk, {
                              look: o.zxk.Looks.LINK,
                              onClick: l,
                              children: D.intl.string(D.t['ETE/oK'])
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
                  let e = Object.values(f.Z.boostSlots),
                      t = r().sortBy(
                          e.filter((e) => !(0, j.tl)(e)),
                          (e) => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null]
                      )[0];
                  return null != t ? t.id : null;
              })();
    if (null == s) throw Error('No slot to cancel');
    await (0, d.pD)(s), await (0, c.Mg)(e, { items: (0, v.MY)(e, t) }, n);
}
function L(e) {
    var t, n, l;
    let { premiumSubscription: r, guildBoostSlotId: c, onBack: d, onNext: E, onClose: f } = e,
        [S, j] = s.useState(!1),
        [R, y] = s.useState(null),
        [L, k] = s.useMemo(() => {
            try {
                return [(0, p.g)(r, -1), !1];
            } catch {
                return [[], !0];
            }
        }, [r]),
        B = s.useRef(f);
    s.useEffect(() => {
        B.current = f;
    }),
        s.useEffect(() => {
            k && B.current();
        }, [k]);
    let { premiumSubscriptionPlan: M, premiumGuildPlan: V } = (0, a.cj)([T.Z], () => {
            let e = T.Z.get(r.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan: null != e ? T.Z.getForSkuAndInterval((0, v.Wz)(O.Si.GUILD), e.interval, e.intervalCount) : null
            };
        }),
        { analyticsLocations: w } = (0, g.ZP)(),
        [U] = (0, _.ED)({
            subscriptionId: r.id,
            renewal: !0,
            currency: r.currency,
            paymentSourceId: r.paymentSourceId,
            analyticsLocations: w,
            analyticsLocation: m.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
        }),
        G = null != V ? (0, v.Zx)(r, null !== (l = null === (t = L[0]) || void 0 === t ? void 0 : t.quantity) && void 0 !== l ? l : 0, V.id) : null,
        [F] = (0, _.ED)({
            subscriptionId: r.id,
            items: G,
            renewal: !0,
            analyticsLocations: w,
            analyticsLocation: m.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
        });
    if (null == F || null == M || null == V || null == U) return (0, i.jsx)(o.$jN, {});
    let z =
            (r.items.some((e) => {
                let { planId: t } = e;
                return !O.Z1.has(t);
            }) &&
                null == r.renewalMutations) ||
            (null === (n = r.renewalMutations) || void 0 === n
                ? void 0
                : n.items.find((e) => {
                      let { planId: t } = e;
                      return !O.Z1.has(t);
                  })) != null,
        Y = L.some((e) => {
            let { planId: t } = e;
            return O.Z1.has(t);
        }),
        H = z || Y ? F.total - U.total : -U.total,
        { interval: W, intervalCount: K } = M;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(A.Z, { onClose: f }),
            (0, i.jsxs)(o.hzk, {
                className: P.body,
                children: [
                    null !== R &&
                        (0, i.jsx)(o.kzN, {
                            className: P.error,
                            children: R
                        }),
                    (0, i.jsx)('div', { children: D.intl.format(D.t['0W23cn'], { endDate: F.subscriptionPeriodStart }) }),
                    (0, i.jsxs)(C.PO, {
                        className: P.invoiceTable,
                        children: [
                            (0, i.jsx)(C.q9, { children: D.intl.string(D.t.iqhIp6) }),
                            (0, i.jsx)(C.R$, {
                                label: D.intl.format(D.t['Vg+LRk'], { subscriptionCount: 1 }),
                                value: (0, b.og)((0, b.T4)(H, r.currency), W, K),
                                className: P.invoiceCancelRow
                            }),
                            null != G && G.length > 0
                                ? (0, i.jsxs)('div', {
                                      children: [
                                          (0, i.jsx)(C.KU, {}),
                                          (0, i.jsx)(I.nd, {
                                              premiumSubscription: r,
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
                        disabled: S,
                        onClick: async () => {
                            try {
                                j(!0), y(null), await Z(r, L, w, c), E();
                            } catch (t) {
                                let e = t instanceof u.HF ? t : new u.HF(t, t.code);
                                y(D.intl.string(e.code === h.SM.BILLING_PAUSE_INVALID_UPDATE ? D.t.dq4vq6 : D.t['5mlOCQ'])), j(!1);
                            }
                        },
                        children: D.intl.string(D.t['/AS/gI'])
                    }),
                    (0, i.jsx)(N.Z, { onClick: d })
                ]
            })
        ]
    });
}
function k(e) {
    let { premiumSubscription: t, onClose: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.xBx, {
                separator: !1,
                children: [
                    (0, i.jsx)(o.vwX, {
                        tag: o.RB0.H4,
                        children: D.intl.string(D.t['fZzV/P'])
                    }),
                    (0, i.jsx)(o.olH, { onClick: n })
                ]
            }),
            (0, i.jsxs)(o.hzk, {
                className: P.body,
                children: [(0, i.jsx)('div', { className: P.cancelImage }), (0, i.jsx)('div', { children: D.intl.format(D.t['H+z0np'], { endDate: t.currentPeriodEnd }) })]
            }),
            (0, i.jsx)(o.mzw, {
                children: (0, i.jsx)(o.zxk, {
                    onClick: n,
                    children: D.intl.string(D.t.BddRzc)
                })
            })
        ]
    });
}
function B(e) {
    let t,
        { guildBoostSlot: n, transitionState: l, onClose: r } = e;
    s.useEffect(() => {
        S.ZP.hasFetchedSubscriptions() || (0, c.jg)();
    }, []);
    let d = (0, a.e7)([S.ZP], () => S.ZP.getPremiumTypeSubscription()),
        [u, h] = s.useState(1),
        { analyticsLocations: x } = (0, g.ZP)(m.Z.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == d) t = (0, i.jsx)(o.hzk, { children: (0, i.jsx)(o.$jN, {}) });
    else
        switch (u) {
            case 1:
                t = (0, i.jsx)(y, {
                    premiumSubscription: d,
                    isInventory: null == n.premiumGuildSubscription,
                    onNext: () => h(2),
                    onClose: r
                });
                break;
            case 2:
                t = (0, i.jsx)(L, {
                    premiumSubscription: d,
                    guildBoostSlotId: n.id,
                    onBack: () => h(1),
                    onNext: () => h(3),
                    onClose: r
                });
                break;
            case 3:
                t = (0, i.jsx)(k, {
                    premiumSubscription: d,
                    onClose: r
                });
                break;
            default:
                throw Error('Unexpected step: '.concat(u));
        }
    return (0, i.jsx)(g.Gt, {
        value: x,
        children: (0, i.jsx)(o.Y0X, {
            transitionState: l,
            children: t
        })
    });
}
