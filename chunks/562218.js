(n.d(t, { G: () => h }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    o = n(434333),
    a = n(82659),
    s = n(355467),
    l = n(211242),
    c = n(63063),
    u = n(74538),
    d = n(45474),
    m = n(594135),
    _ = n(474936),
    p = n(981631),
    f = n(388032);
let C = [p.O0b.PAST_DUE, p.O0b.PAUSED, p.O0b.BILLING_RETRY],
    h = () => {
        var e, t;
        let { transitionState: n, onClose: c, premiumType: p, setStep: h, premiumSubscription: y, analyticsLocations: b, analyticsLocation: g } = (0, m.a)(),
            [I, j] = (0, i.useState)(!1),
            [P, v] = (0, i.useState)(!1),
            T = async () => {
                (j(!0), v(!1));
                try {
                    if (C.includes(y.status)) await (0, s.EO)(y.id, b, g);
                    else {
                        var e, t;
                        let n = null != (t = null == (e = y.renewalMutations) ? void 0 : e.items) ? t : y.items,
                            r = (0, u.Ue)(n);
                        await (0, s.Mg)(
                            y,
                            { items: r },
                            {
                                amount: 0,
                                currency: y.currency
                            },
                            (0, u.UX)(r, y.currency, y.paymentSourceId),
                            b,
                            g
                        );
                    }
                    c();
                } catch (e) {
                    (v(!0), j(!1));
                }
            },
            E = null == (e = (0, u.Af)(y)) ? void 0 : e.planId,
            O = (0, l.Q)(),
            S =
                (y.items.some((e) => {
                    let { planId: t } = e;
                    return !_.dJ.has(t);
                }) &&
                    null == y.renewalMutations) ||
                (null == (t = y.renewalMutations)
                    ? void 0
                    : t.items.find((e) => {
                          let { planId: t } = e;
                          return !_.dJ.has(t);
                      })) != null,
            N = [];
        return (
            N.push({
                text: f.intl.string(f.t.h9tkAA),
                onClick: () => c(),
                variant: 'secondary'
            }),
            S
                ? N.push({
                      text: f.intl.string(f.t.PDTjLC),
                      onClick: () => h(d.R.PREVIEW),
                      disabled: I,
                      variant: 'critical-primary',
                      loading: I
                  })
                : N.push({
                      text: f.intl.string(f.t['cY+Ooa']),
                      onClick: () => T(),
                      disabled: I,
                      variant: 'critical-primary',
                      loading: I
                  }),
            (0, r.jsx)(a.Modal, {
                size: 'md',
                transitionState: n,
                title: ''.concat(f.intl.format(f.t.LZunzc, { planPremiumType: u.ZP.getDisplayPremiumType(''.concat(E)) })),
                subtitle: x(O, p, y),
                actions: N,
                onClose: async () => c(),
                children: P ? (0, r.jsx)(o.k, { children: f.intl.string(f.t['5mlOCQ']) }) : null
            })
        );
    },
    x = (e, t, n) => {
        switch (n.status) {
            case p.O0b.PAST_DUE:
            case p.O0b.PAUSED:
            case p.O0b.BILLING_RETRY:
                return f.intl.string(f.t.FClXh4);
            default:
                switch (t) {
                    case _.p9.TIER_0:
                        return e
                            ? f.intl.format(f.t['l+A50N'], {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: c.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS)
                              })
                            : f.intl.format(f.t.Y6Wfa2, { date: n.currentPeriodEnd });
                    case _.p9.TIER_1:
                        return e
                            ? f.intl.format(f.t.QN7eIi, {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: c.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS)
                              })
                            : f.intl.format(f.t.X7i9Dw, { date: n.currentPeriodEnd });
                    default:
                        return e
                            ? f.intl.format(f.t.vuSNho, {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: c.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS)
                              })
                            : f.intl.format(f.t.fCdmNj, { date: n.currentPeriodEnd });
                }
        }
    };
