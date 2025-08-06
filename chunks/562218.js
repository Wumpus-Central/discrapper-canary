(n.d(t, { G: () => g }), n(388685), n(539854));
var i = n(255367),
    r = n(73800),
    s = n(434333),
    a = n(82659),
    l = n(63063),
    o = n(74538),
    c = n(45474),
    d = n(594135),
    u = n(474936),
    m = n(981631),
    p = n(388032);
let g = () => {
        var e;
        let { transitionState: t, onClose: n, premiumType: l, setStep: m, premiumSubscription: g, paymentsBlocked: f, planId: b, handleCancellation: x } = (0, d.a)(),
            [_, j] = (0, r.useState)(!1),
            [E, C] = (0, r.useState)(!1),
            O = async () => {
                (j(!0), C(!1));
                try {
                    (await x(), n());
                } catch (e) {
                    (C(!0), j(!1));
                }
            },
            v =
                (g.items.some((e) => {
                    let { planId: t } = e;
                    return !u.dJ.has(t);
                }) &&
                    null == g.renewalMutations) ||
                (null == (e = g.renewalMutations)
                    ? void 0
                    : e.items.find((e) => {
                          let { planId: t } = e;
                          return !u.dJ.has(t);
                      })) != null,
            S = [];
        return (
            S.push({
                text: p.intl.string(p.t.h9tkAA),
                onClick: () => n(),
                variant: 'secondary'
            }),
            v
                ? S.push({
                      text: p.intl.string(p.t.PDTjLC),
                      onClick: () => m(c.R.PREVIEW),
                      disabled: _,
                      variant: 'critical-primary',
                      loading: _
                  })
                : S.push({
                      text: p.intl.string(p.t['cY+Ooa']),
                      onClick: () => O(),
                      disabled: _,
                      variant: 'critical-primary',
                      loading: _
                  }),
            (0, i.jsx)(a.Modal, {
                size: 'md',
                transitionState: t,
                title: ''.concat(p.intl.format(p.t.LZunzc, { planPremiumType: o.ZP.getDisplayPremiumType(''.concat(b)) })),
                subtitle: h(f, l, g),
                actions: S,
                onClose: async () => n(),
                children: E ? (0, i.jsx)(s.k, { children: p.intl.string(p.t['5mlOCQ']) }) : null
            })
        );
    },
    h = (e, t, n) => {
        switch (n.status) {
            case m.O0b.PAST_DUE:
            case m.O0b.PAUSED:
            case m.O0b.BILLING_RETRY:
                return p.intl.string(p.t.FClXh4);
            default:
                switch (t) {
                    case u.p9.TIER_0:
                        return e
                            ? p.intl.format(p.t['l+A50N'], {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: l.Z.getArticleURL(m.BhN.BLOCKED_PAYMENTS)
                              })
                            : p.intl.format(p.t.Y6Wfa2, { date: n.currentPeriodEnd });
                    case u.p9.TIER_1:
                        return e
                            ? p.intl.format(p.t.QN7eIi, {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: l.Z.getArticleURL(m.BhN.BLOCKED_PAYMENTS)
                              })
                            : p.intl.format(p.t.X7i9Dw, { date: n.currentPeriodEnd });
                    default:
                        return e
                            ? p.intl.format(p.t.vuSNho, {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: l.Z.getArticleURL(m.BhN.BLOCKED_PAYMENTS)
                              })
                            : p.intl.format(p.t.fCdmNj, { date: n.currentPeriodEnd });
                }
        }
    };
