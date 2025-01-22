n.r(t),
    n.d(t, {
        default: function () {
            return w;
        }
    }),
    n(411104),
    n(47120);
var i,
    r,
    s = n(200651),
    a = n(192379),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(355467),
    m = n(179360),
    g = n(881052),
    h = n(128069),
    p = n(100527),
    x = n(906732),
    f = n(600164),
    E = n(374649),
    _ = n(431369),
    C = n(55610),
    T = n(653798),
    S = n(311821),
    b = n(42818),
    I = n(314884),
    N = n(509545),
    v = n(78839),
    A = n(267642),
    j = n(74538),
    O = n(937615),
    R = n(518062),
    P = n(474936),
    D = n(231338),
    y = n(388032),
    B = n(322389);
function Z(e) {
    let { premiumSubscription: t, isInventory: n, onNext: i, onClose: r } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(d.ModalHeader, {
                separator: !1,
                children: [
                    (0, s.jsx)(d.FormTitle, {
                        tag: d.FormTitleTags.H4,
                        children: n ? y.intl.string(y.t.iIoSd3) : y.intl.string(y.t.Skzv0t)
                    }),
                    (0, s.jsx)(d.ModalCloseButton, { onClick: r })
                ]
            }),
            (0, s.jsxs)(d.ModalContent, {
                className: B.body,
                children: [
                    (0, s.jsx)('div', { className: B.cancelImage }),
                    (0, s.jsx)('div', {
                        children:
                            t.isPurchasedExternally && null != t.paymentGateway
                                ? y.intl.format(y.t.HbpFLi, {
                                      paymentGatewayName: D.Vz[t.paymentGateway],
                                      subscriptionManagementLink: (0, j.JE)(t.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                                  })
                                : n
                                  ? y.intl.format(y.t.gXSnur, { endDate: t.currentPeriodEnd })
                                  : y.intl.format(y.t.otHdfX, { endDate: t.currentPeriodEnd })
                    }),
                    (0, s.jsx)(C.Z, { fromBoostCancelModal: !0 })
                ]
            }),
            t.isPurchasedExternally
                ? null
                : (0, s.jsxs)(d.ModalFooter, {
                      justify: f.Z.Justify.START,
                      children: [
                          (0, s.jsx)(d.Button, {
                              onClick: i,
                              children: y.intl.string(y.t.PDTjLC)
                          }),
                          (0, s.jsx)(d.Button, {
                              look: d.Button.Looks.LINK,
                              onClick: r,
                              children: y.intl.string(y.t['ETE/oK'])
                          })
                      ]
                  })
        ]
    });
}
((r = i || (i = {}))[(r.START = 1)] = 'START'), (r[(r.PREVIEW = 2)] = 'PREVIEW'), (r[(r.CONFIRM = 3)] = 'CONFIRM');
async function L(e, t, n, i) {
    let r =
        null != i
            ? i
            : (function () {
                  let e = Object.values(I.Z.boostSlots),
                      t = o().sortBy(
                          e.filter((e) => !(0, A.tl)(e)),
                          (e) => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null]
                      )[0];
                  return null != t ? t.id : null;
              })();
    if (null == r) throw Error('No slot to cancel');
    await (0, m.pD)(r), await (0, u.Mg)(e, { items: (0, j.MY)(e, t) }, n);
}
function M(e) {
    var t, n, i;
    let { premiumSubscription: r, guildBoostSlotId: l, onBack: o, onNext: u, onClose: m } = e,
        [C, I] = a.useState(!1),
        [v, A] = a.useState(null),
        [D, Z] = a.useMemo(() => {
            try {
                return [(0, _.g)(r, -1), !1];
            } catch {
                return [[], !0];
            }
        }, [r]),
        M = a.useRef(m);
    a.useEffect(() => {
        M.current = m;
    }),
        a.useEffect(() => {
            Z && M.current();
        }, [Z]);
    let { premiumSubscriptionPlan: k, premiumGuildPlan: w } = (0, c.cj)([N.Z], () => {
            let e = N.Z.get(r.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan: null != e ? N.Z.getForSkuAndInterval((0, j.Wz)(P.Si.GUILD), e.interval, e.intervalCount) : null
            };
        }),
        { analyticsLocations: F } = (0, x.ZP)(),
        [U] = (0, E.ED)({
            subscriptionId: r.id,
            renewal: !0,
            currency: r.currency,
            paymentSourceId: r.paymentSourceId,
            analyticsLocations: F,
            analyticsLocation: p.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
        }),
        V = null != w ? (0, j.Zx)(r, null !== (i = null === (t = D[0]) || void 0 === t ? void 0 : t.quantity) && void 0 !== i ? i : 0, w.id) : null,
        [G] = (0, E.ED)({
            subscriptionId: r.id,
            items: V,
            renewal: !0,
            analyticsLocations: F,
            analyticsLocation: p.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
        });
    if (null == G || null == k || null == w || null == U) return (0, s.jsx)(d.Spinner, {});
    let H =
            (r.items.some((e) => {
                let { planId: t } = e;
                return !P.Z1.has(t);
            }) &&
                null == r.renewalMutations) ||
            (null === (n = r.renewalMutations) || void 0 === n
                ? void 0
                : n.items.find((e) => {
                      let { planId: t } = e;
                      return !P.Z1.has(t);
                  })) != null,
        Y = D.some((e) => {
            let { planId: t } = e;
            return P.Z1.has(t);
        }),
        W = H || Y ? G.total - U.total : -U.total,
        { interval: z, intervalCount: K } = k;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(R.Z, { onClose: m }),
            (0, s.jsxs)(d.ModalContent, {
                className: B.body,
                children: [
                    null !== v &&
                        (0, s.jsx)(d.FormErrorBlock, {
                            className: B.error,
                            children: v
                        }),
                    (0, s.jsx)('div', { children: y.intl.format(y.t['0W23cn'], { endDate: G.subscriptionPeriodStart }) }),
                    (0, s.jsxs)(T.PO, {
                        className: B.invoiceTable,
                        children: [
                            (0, s.jsx)(T.q9, { children: y.intl.string(y.t.iqhIp6) }),
                            (0, s.jsx)(T.R$, {
                                label: y.intl.format(y.t['Vg+LRk'], { subscriptionCount: 1 }),
                                value: (0, O.og)((0, O.T4)(W, r.currency), z, K),
                                className: B.invoiceCancelRow
                            }),
                            null != V && V.length > 0
                                ? (0, s.jsxs)('div', {
                                      children: [
                                          (0, s.jsx)(T.KU, {}),
                                          (0, s.jsx)(b.nd, {
                                              premiumSubscription: r,
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
            (0, s.jsxs)(d.ModalFooter, {
                align: f.Z.Align.CENTER,
                justify: f.Z.Justify.BETWEEN,
                children: [
                    (0, s.jsx)(d.Button, {
                        color: d.Button.Colors.RED,
                        disabled: C,
                        onClick: async () => {
                            try {
                                I(!0), A(null), await L(r, D, F, l), u();
                            } catch (t) {
                                let e = t instanceof g.HF ? t : new g.HF(t, t.code);
                                A(y.intl.string(e.code === h.SM.BILLING_PAUSE_INVALID_UPDATE ? y.t.dq4vq6 : y.t['5mlOCQ'])), I(!1);
                            }
                        },
                        children: y.intl.string(y.t['/AS/gI'])
                    }),
                    (0, s.jsx)(S.Z, { onClick: o })
                ]
            })
        ]
    });
}
function k(e) {
    let { premiumSubscription: t, onClose: n } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(d.ModalHeader, {
                separator: !1,
                children: [
                    (0, s.jsx)(d.FormTitle, {
                        tag: d.FormTitleTags.H4,
                        children: y.intl.string(y.t['fZzV/P'])
                    }),
                    (0, s.jsx)(d.ModalCloseButton, { onClick: n })
                ]
            }),
            (0, s.jsxs)(d.ModalContent, {
                className: B.body,
                children: [(0, s.jsx)('div', { className: B.cancelImage }), (0, s.jsx)('div', { children: y.intl.format(y.t['H+z0np'], { endDate: t.currentPeriodEnd }) })]
            }),
            (0, s.jsx)(d.ModalFooter, {
                children: (0, s.jsx)(d.Button, {
                    onClick: n,
                    children: y.intl.string(y.t.BddRzc)
                })
            })
        ]
    });
}
function w(e) {
    let t,
        { guildBoostSlot: n, transitionState: i, onClose: r } = e;
    a.useEffect(() => {
        !v.ZP.hasFetchedSubscriptions() && (0, u.jg)();
    }, []);
    let l = (0, c.e7)([v.ZP], () => v.ZP.getPremiumTypeSubscription()),
        [o, m] = a.useState(1),
        { analyticsLocations: g } = (0, x.ZP)(p.Z.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == l) t = (0, s.jsx)(d.ModalContent, { children: (0, s.jsx)(d.Spinner, {}) });
    else
        switch (o) {
            case 1:
                t = (0, s.jsx)(Z, {
                    premiumSubscription: l,
                    isInventory: null == n.premiumGuildSubscription,
                    onNext: () => m(2),
                    onClose: r
                });
                break;
            case 2:
                t = (0, s.jsx)(M, {
                    premiumSubscription: l,
                    guildBoostSlotId: n.id,
                    onBack: () => m(1),
                    onNext: () => m(3),
                    onClose: r
                });
                break;
            case 3:
                t = (0, s.jsx)(k, {
                    premiumSubscription: l,
                    onClose: r
                });
                break;
            default:
                throw Error('Unexpected step: '.concat(o));
        }
    return (0, s.jsx)(x.Gt, {
        value: g,
        children: (0, s.jsx)(d.ModalRoot, {
            transitionState: i,
            children: t
        })
    });
}
