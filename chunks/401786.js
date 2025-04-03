n.d(t, { default: () => W }), n(411104), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(392711),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(355467),
    d = n(179360),
    u = n(881052),
    m = n(128069),
    g = n(100527),
    p = n(906732),
    h = n(600164),
    f = n(374649),
    b = n(431369),
    N = n(55610),
    x = n(653798),
    _ = n(311821),
    E = n(42818),
    j = n(314884),
    O = n(509545),
    C = n(78839),
    S = n(267642),
    v = n(74538),
    T = n(937615),
    I = n(518062),
    y = n(474936),
    A = n(231338),
    P = n(388032),
    R = n(363405);
function D(e) {
    let { premiumSubscription: t, isInventory: n, onNext: i, onClose: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.xBx, {
                separator: !1,
                children: [
                    (0, r.jsx)(o.vwX, {
                        tag: o.RB0.H4,
                        children: n ? P.NW.string(P.t.iIoSd3) : P.NW.string(P.t.Skzv0t)
                    }),
                    (0, r.jsx)(o.olH, { onClick: s })
                ]
            }),
            (0, r.jsxs)(o.hzk, {
                className: R.body,
                children: [
                    (0, r.jsx)('div', { className: R.cancelImage }),
                    (0, r.jsx)('div', {
                        children:
                            t.isPurchasedExternally && null != t.paymentGateway
                                ? P.NW.format(P.t.HbpFLi, {
                                      paymentGatewayName: A.Vz[t.paymentGateway],
                                      subscriptionManagementLink: (0, v.JE)(t.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                                  })
                                : n
                                  ? P.NW.format(P.t.gXSnur, { endDate: t.currentPeriodEnd })
                                  : P.NW.format(P.t.otHdfX, { endDate: t.currentPeriodEnd })
                    }),
                    (0, r.jsx)(N.Z, { fromBoostCancelModal: !0 })
                ]
            }),
            t.isPurchasedExternally
                ? null
                : (0, r.jsxs)(o.mzw, {
                      justify: h.Z.Justify.START,
                      children: [
                          (0, r.jsx)(o.zxk, {
                              onClick: i,
                              children: P.NW.string(P.t.PDTjLC)
                          }),
                          (0, r.jsx)(o.zxk, {
                              look: o.zxk.Looks.LINK,
                              onClick: s,
                              children: P.NW.string(P.t['ETE/oK'])
                          })
                      ]
                  })
        ]
    });
}
async function Z(e, t, n, r) {
    let i =
        null != r
            ? r
            : (function () {
                  let e = Object.values(j.Z.boostSlots),
                      t = a().sortBy(
                          e.filter((e) => !(0, S.tl)(e)),
                          (e) => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null]
                      )[0];
                  return null != t ? t.id : null;
              })();
    if (null == i) throw Error('No slot to cancel');
    await (0, d.pD)(i), await (0, c.Mg)(e, { items: (0, v.MY)(e, t) }, n);
}
function w(e) {
    var t, n, s;
    let { premiumSubscription: a, guildBoostSlotId: c, onBack: d, onNext: N, onClose: j } = e,
        [C, S] = i.useState(!1),
        [A, D] = i.useState(null),
        [w, k] = i.useMemo(() => {
            try {
                return [(0, b.g)(a, -1), !1];
            } catch (e) {
                return [[], !0];
            }
        }, [a]),
        W = i.useRef(j);
    i.useEffect(() => {
        W.current = j;
    }),
        i.useEffect(() => {
            k && W.current();
        }, [k]);
    let { premiumSubscriptionPlan: L, premiumGuildPlan: B } = (0, l.cj)([O.Z], () => {
            let e = O.Z.get(a.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan: null != e ? O.Z.getForSkuAndInterval((0, v.Wz)(y.Si.GUILD), e.interval, e.intervalCount) : null
            };
        }),
        { analyticsLocations: M } = (0, p.ZP)(),
        [U] = (0, f.ED)({
            subscriptionId: a.id,
            renewal: !0,
            currency: a.currency,
            paymentSourceId: a.paymentSourceId,
            analyticsLocations: M,
            analyticsLocation: g.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
        }),
        V = null != B ? (0, v.Zx)(a, null != (s = null == (t = w[0]) ? void 0 : t.quantity) ? s : 0, B.id) : null,
        [G] = (0, f.ED)({
            subscriptionId: a.id,
            items: V,
            renewal: !0,
            analyticsLocations: M,
            analyticsLocation: g.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
        });
    if (null == G || null == L || null == B || null == U) return (0, r.jsx)(o.$jN, {});
    let F =
            (a.items.some((e) => {
                let { planId: t } = e;
                return !y.Z1.has(t);
            }) &&
                null == a.renewalMutations) ||
            (null == (n = a.renewalMutations)
                ? void 0
                : n.items.find((e) => {
                      let { planId: t } = e;
                      return !y.Z1.has(t);
                  })) != null,
        H = w.some((e) => {
            let { planId: t } = e;
            return y.Z1.has(t);
        }),
        z = F || H ? G.total - U.total : -U.total,
        { interval: Y, intervalCount: K } = L;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(I.Z, { onClose: j }),
            (0, r.jsxs)(o.hzk, {
                className: R.body,
                children: [
                    null !== A &&
                        (0, r.jsx)(o.kzN, {
                            className: R.error,
                            children: A
                        }),
                    (0, r.jsx)('div', { children: P.NW.format(P.t['0W23cn'], { endDate: G.subscriptionPeriodStart }) }),
                    (0, r.jsxs)(x.PO, {
                        className: R.invoiceTable,
                        children: [
                            (0, r.jsx)(x.q9, { children: P.NW.string(P.t.iqhIp6) }),
                            (0, r.jsx)(x.R$, {
                                label: P.NW.format(P.t['Vg+LRk'], { subscriptionCount: 1 }),
                                value: (0, T.og)((0, T.T4)(z, a.currency), Y, K),
                                className: R.invoiceCancelRow
                            }),
                            null != V && V.length > 0
                                ? (0, r.jsxs)('div', {
                                      children: [
                                          (0, r.jsx)(x.KU, {}),
                                          (0, r.jsx)(E.nd, {
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
            (0, r.jsxs)(o.mzw, {
                align: h.Z.Align.CENTER,
                justify: h.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(o.zxk, {
                        color: o.zxk.Colors.RED,
                        disabled: C,
                        onClick: async () => {
                            try {
                                S(!0), D(null), await Z(a, w, M, c), N();
                            } catch (t) {
                                let e = t instanceof u.HF ? t : new u.HF(t, t.code);
                                D(P.NW.string(e.code === m.SM.BILLING_PAUSE_INVALID_UPDATE ? P.t.dq4vq6 : P.t['5mlOCQ'])), S(!1);
                            }
                        },
                        children: P.NW.string(P.t['/AS/gI'])
                    }),
                    (0, r.jsx)(_.Z, { onClick: d })
                ]
            })
        ]
    });
}
function k(e) {
    let { premiumSubscription: t, onClose: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.xBx, {
                separator: !1,
                children: [
                    (0, r.jsx)(o.vwX, {
                        tag: o.RB0.H4,
                        children: P.NW.string(P.t['fZzV/P'])
                    }),
                    (0, r.jsx)(o.olH, { onClick: n })
                ]
            }),
            (0, r.jsxs)(o.hzk, {
                className: R.body,
                children: [(0, r.jsx)('div', { className: R.cancelImage }), (0, r.jsx)('div', { children: P.NW.format(P.t['H+z0np'], { endDate: t.currentPeriodEnd }) })]
            }),
            (0, r.jsx)(o.mzw, {
                children: (0, r.jsx)(o.zxk, {
                    onClick: n,
                    children: P.NW.string(P.t.BddRzc)
                })
            })
        ]
    });
}
function W(e) {
    let t,
        { guildBoostSlot: n, transitionState: s, onClose: a } = e;
    i.useEffect(() => {
        C.ZP.hasFetchedSubscriptions() || (0, c.jg)();
    }, []);
    let d = (0, l.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()),
        [u, m] = i.useState(1),
        { analyticsLocations: h } = (0, p.ZP)(g.Z.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == d) t = (0, r.jsx)(o.hzk, { children: (0, r.jsx)(o.$jN, {}) });
    else
        switch (u) {
            case 1:
                t = (0, r.jsx)(D, {
                    premiumSubscription: d,
                    isInventory: null == n.premiumGuildSubscription,
                    onNext: () => m(2),
                    onClose: a
                });
                break;
            case 2:
                t = (0, r.jsx)(w, {
                    premiumSubscription: d,
                    guildBoostSlotId: n.id,
                    onBack: () => m(1),
                    onNext: () => m(3),
                    onClose: a
                });
                break;
            case 3:
                t = (0, r.jsx)(k, {
                    premiumSubscription: d,
                    onClose: a
                });
                break;
            default:
                throw Error('Unexpected step: '.concat(u));
        }
    return (0, r.jsx)(p.Gt, {
        value: h,
        children: (0, r.jsx)(o.Y0X, {
            transitionState: s,
            children: t
        })
    });
}
