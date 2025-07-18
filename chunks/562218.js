(n.d(t, { G: () => y }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    o = n(434333),
    a = n(667202),
    s = n(355467),
    l = n(211242),
    c = n(63063),
    u = n(74538),
    d = n(45474),
    m = n(594135),
    p = n(474936),
    _ = n(981631),
    f = n(388032),
    C = n(997892),
    h = n(234286);
let x = [_.O0b.PAST_DUE, _.O0b.PAUSED, _.O0b.BILLING_RETRY],
    y = () => {
        var e, t;
        let { transitionState: n, onClose: c, premiumType: _, setStep: y, premiumSubscription: g, analyticsLocations: v, analyticsLocation: j } = (0, m.a)(),
            [I, T] = (0, i.useState)(!1),
            [E, P] = (0, i.useState)(!1),
            O = async () => {
                (T(!0), P(!1));
                try {
                    if (x.includes(g.status)) await (0, s.EO)(g.id, v, j);
                    else {
                        var e, t;
                        let n = null != (t = null == (e = g.renewalMutations) ? void 0 : e.items) ? t : g.items,
                            r = (0, u.Ue)(n);
                        await (0, s.Mg)(
                            g,
                            { items: r },
                            {
                                amount: 0,
                                currency: g.currency
                            },
                            (0, u.UX)(r, g.currency, g.paymentSourceId),
                            v,
                            j
                        );
                    }
                    c();
                } catch (e) {
                    (P(!0), T(!1));
                }
            },
            S = null == (e = (0, u.Af)(g)) ? void 0 : e.planId,
            N = (0, l.Q)(),
            R = _ === p.p9.TIER_2,
            D =
                (g.items.some((e) => {
                    let { planId: t } = e;
                    return !p.dJ.has(t);
                }) &&
                    null == g.renewalMutations) ||
                (null == (t = g.renewalMutations)
                    ? void 0
                    : t.items.find((e) => {
                          let { planId: t } = e;
                          return !p.dJ.has(t);
                      })) != null,
            w = [];
        return (
            w.push({
                text: f.intl.string(f.t.h9tkAA),
                onClick: () => c(),
                variant: 'secondary'
            }),
            D
                ? w.push({
                      text: f.intl.string(f.t.PDTjLC),
                      onClick: () => y(d.R.PREVIEW),
                      disabled: I,
                      variant: 'critical-primary',
                      loading: I
                  })
                : w.push({
                      text: f.intl.string(f.t['cY+Ooa']),
                      onClick: () => O(),
                      disabled: I,
                      variant: 'critical-primary',
                      loading: I
                  }),
            (0, r.jsx)(a.I, {
                graphic: R ? h : C,
                gradientColor: R ? 'nitro-pink' : 'nitro-green',
                transitionState: n,
                title: ''.concat(f.intl.format(f.t.LZunzc, { planPremiumType: u.ZP.getDisplayPremiumType(''.concat(S)) })),
                subtitle: b(N, _, g),
                actions: w,
                onClose: async () => c(),
                children: E ? (0, r.jsx)(o.k, { children: f.intl.string(f.t['5mlOCQ']) }) : null
            })
        );
    },
    b = (e, t, n) => {
        switch (n.status) {
            case _.O0b.PAST_DUE:
            case _.O0b.PAUSED:
            case _.O0b.BILLING_RETRY:
                return f.intl.string(f.t.FClXh4);
            default:
                switch (t) {
                    case p.p9.TIER_0:
                        return e
                            ? f.intl.format(f.t['l+A50N'], {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: c.Z.getArticleURL(_.BhN.BLOCKED_PAYMENTS)
                              })
                            : f.intl.format(f.t.Y6Wfa2, { date: n.currentPeriodEnd });
                    case p.p9.TIER_1:
                        return e
                            ? f.intl.format(f.t.QN7eIi, {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: c.Z.getArticleURL(_.BhN.BLOCKED_PAYMENTS)
                              })
                            : f.intl.format(f.t.X7i9Dw, { date: n.currentPeriodEnd });
                    default:
                        return e
                            ? f.intl.format(f.t.vuSNho, {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: c.Z.getArticleURL(_.BhN.BLOCKED_PAYMENTS)
                              })
                            : f.intl.format(f.t.fCdmNj, { date: n.currentPeriodEnd });
                }
        }
    };
