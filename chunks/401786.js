n.r(t),
    n.d(t, {
        default: function () {
            return k;
        }
    }),
    n(411104),
    n(47120);
var i,
    s,
    r = n(200651),
    l = n(192379),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(355467),
    m = n(179360),
    h = n(881052),
    g = n(128069),
    p = n(100527),
    x = n(906732),
    S = n(600164),
    T = n(374649),
    E = n(431369),
    C = n(55610),
    _ = n(653798),
    f = n(311821),
    I = n(42818),
    N = n(314884),
    A = n(509545),
    b = n(78839),
    v = n(267642),
    j = n(74538),
    O = n(937615),
    R = n(518062),
    P = n(474936),
    D = n(231338),
    y = n(388032),
    B = n(322389);
function L(e) {
    let { premiumSubscription: t, isInventory: n, onNext: i, onClose: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(d.ModalHeader, {
                separator: !1,
                children: [
                    (0, r.jsx)(d.FormTitle, {
                        tag: d.FormTitleTags.H4,
                        children: n ? y.intl.string(y.t.iIoSd3) : y.intl.string(y.t.Skzv0t)
                    }),
                    (0, r.jsx)(d.ModalCloseButton, { onClick: s })
                ]
            }),
            (0, r.jsxs)(d.ModalContent, {
                className: B.body,
                children: [
                    (0, r.jsx)('div', { className: B.cancelImage }),
                    (0, r.jsx)('div', {
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
                    (0, r.jsx)(C.Z, { fromBoostCancelModal: !0 })
                ]
            }),
            t.isPurchasedExternally
                ? null
                : (0, r.jsxs)(d.ModalFooter, {
                      justify: S.Z.Justify.START,
                      children: [
                          (0, r.jsx)(d.Button, {
                              onClick: i,
                              children: y.intl.string(y.t.PDTjLC)
                          }),
                          (0, r.jsx)(d.Button, {
                              look: d.Button.Looks.LINK,
                              onClick: s,
                              children: y.intl.string(y.t['ETE/oK'])
                          })
                      ]
                  })
        ]
    });
}
((s = i || (i = {}))[(s.START = 1)] = 'START'), (s[(s.PREVIEW = 2)] = 'PREVIEW'), (s[(s.CONFIRM = 3)] = 'CONFIRM');
async function Z(e, t, n, i) {
    let s =
        null != i
            ? i
            : (function () {
                  let e = Object.values(N.Z.boostSlots),
                      t = o().sortBy(
                          e.filter((e) => !(0, v.tl)(e)),
                          (e) => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null]
                      )[0];
                  return null != t ? t.id : null;
              })();
    if (null == s) throw Error('No slot to cancel');
    await (0, m.pD)(s), await (0, u.Mg)(e, { items: (0, j.MY)(e, t) }, n);
}
function F(e) {
    var t, n, i;
    let { premiumSubscription: s, guildBoostSlotId: a, onBack: o, onNext: u, onClose: m } = e,
        [C, N] = l.useState(!1),
        [b, v] = l.useState(null),
        [D, L] = l.useMemo(() => {
            try {
                return [(0, E.g)(s, -1), !1];
            } catch {
                return [[], !0];
            }
        }, [s]),
        F = l.useRef(m);
    l.useEffect(() => {
        F.current = m;
    }),
        l.useEffect(() => {
            L && F.current();
        }, [L]);
    let { premiumSubscriptionPlan: M, premiumGuildPlan: k } = (0, c.cj)([A.Z], () => {
            let e = A.Z.get(s.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan: null != e ? A.Z.getForSkuAndInterval((0, j.Wz)(P.Si.GUILD), e.interval, e.intervalCount) : null
            };
        }),
        { analyticsLocations: w } = (0, x.ZP)(),
        [U] = (0, T.ED)({
            subscriptionId: s.id,
            renewal: !0,
            currency: s.currency,
            paymentSourceId: s.paymentSourceId,
            analyticsLocations: w,
            analyticsLocation: p.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
        }),
        V = null != k ? (0, j.Zx)(s, null !== (i = null === (t = D[0]) || void 0 === t ? void 0 : t.quantity) && void 0 !== i ? i : 0, k.id) : null,
        [G] = (0, T.ED)({
            subscriptionId: s.id,
            items: V,
            renewal: !0,
            analyticsLocations: w,
            analyticsLocation: p.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
        });
    if (null == G || null == M || null == k || null == U) return (0, r.jsx)(d.Spinner, {});
    let Y =
            (s.items.some((e) => {
                let { planId: t } = e;
                return !P.Z1.has(t);
            }) &&
                null == s.renewalMutations) ||
            (null === (n = s.renewalMutations) || void 0 === n
                ? void 0
                : n.items.find((e) => {
                      let { planId: t } = e;
                      return !P.Z1.has(t);
                  })) != null,
        H = D.some((e) => {
            let { planId: t } = e;
            return P.Z1.has(t);
        }),
        z = Y || H ? G.total - U.total : -U.total,
        { interval: W, intervalCount: K } = M;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(R.Z, { onClose: m }),
            (0, r.jsxs)(d.ModalContent, {
                className: B.body,
                children: [
                    null !== b &&
                        (0, r.jsx)(d.FormErrorBlock, {
                            className: B.error,
                            children: b
                        }),
                    (0, r.jsx)('div', { children: y.intl.format(y.t['0W23cn'], { endDate: G.subscriptionPeriodStart }) }),
                    (0, r.jsxs)(_.PO, {
                        className: B.invoiceTable,
                        children: [
                            (0, r.jsx)(_.q9, { children: y.intl.string(y.t.iqhIp6) }),
                            (0, r.jsx)(_.R$, {
                                label: y.intl.format(y.t['Vg+LRk'], { subscriptionCount: 1 }),
                                value: (0, O.og)((0, O.T4)(z, s.currency), W, K),
                                className: B.invoiceCancelRow
                            }),
                            null != V && V.length > 0
                                ? (0, r.jsxs)('div', {
                                      children: [
                                          (0, r.jsx)(_.KU, {}),
                                          (0, r.jsx)(I.nd, {
                                              premiumSubscription: s,
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
            (0, r.jsxs)(d.ModalFooter, {
                align: S.Z.Align.CENTER,
                justify: S.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(d.Button, {
                        color: d.Button.Colors.RED,
                        disabled: C,
                        onClick: async () => {
                            try {
                                N(!0), v(null), await Z(s, D, w, a), u();
                            } catch (t) {
                                let e = t instanceof h.HF ? t : new h.HF(t, t.code);
                                v(y.intl.string(e.code === g.SM.BILLING_PAUSE_INVALID_UPDATE ? y.t.dq4vq6 : y.t['5mlOCQ'])), N(!1);
                            }
                        },
                        children: y.intl.string(y.t['/AS/gI'])
                    }),
                    (0, r.jsx)(f.Z, { onClick: o })
                ]
            })
        ]
    });
}
function M(e) {
    let { premiumSubscription: t, onClose: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(d.ModalHeader, {
                separator: !1,
                children: [
                    (0, r.jsx)(d.FormTitle, {
                        tag: d.FormTitleTags.H4,
                        children: y.intl.string(y.t['fZzV/P'])
                    }),
                    (0, r.jsx)(d.ModalCloseButton, { onClick: n })
                ]
            }),
            (0, r.jsxs)(d.ModalContent, {
                className: B.body,
                children: [(0, r.jsx)('div', { className: B.cancelImage }), (0, r.jsx)('div', { children: y.intl.format(y.t['H+z0np'], { endDate: t.currentPeriodEnd }) })]
            }),
            (0, r.jsx)(d.ModalFooter, {
                children: (0, r.jsx)(d.Button, {
                    onClick: n,
                    children: y.intl.string(y.t.BddRzc)
                })
            })
        ]
    });
}
function k(e) {
    let t,
        { guildBoostSlot: n, transitionState: i, onClose: s } = e;
    l.useEffect(() => {
        !b.ZP.hasFetchedSubscriptions() && (0, u.jg)();
    }, []);
    let a = (0, c.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
        [o, m] = l.useState(1),
        { analyticsLocations: h } = (0, x.ZP)(p.Z.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == a) t = (0, r.jsx)(d.ModalContent, { children: (0, r.jsx)(d.Spinner, {}) });
    else
        switch (o) {
            case 1:
                t = (0, r.jsx)(L, {
                    premiumSubscription: a,
                    isInventory: null == n.premiumGuildSubscription,
                    onNext: () => m(2),
                    onClose: s
                });
                break;
            case 2:
                t = (0, r.jsx)(F, {
                    premiumSubscription: a,
                    guildBoostSlotId: n.id,
                    onBack: () => m(1),
                    onNext: () => m(3),
                    onClose: s
                });
                break;
            case 3:
                t = (0, r.jsx)(M, {
                    premiumSubscription: a,
                    onClose: s
                });
                break;
            default:
                throw Error('Unexpected step: '.concat(o));
        }
    return (0, r.jsx)(x.Gt, {
        value: h,
        children: (0, r.jsx)(d.ModalRoot, {
            transitionState: i,
            children: t
        })
    });
}
