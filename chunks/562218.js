n.d(t, { G: () => _ }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(481060),
    s = n(63063),
    l = n(74538),
    c = n(45474),
    u = n(594135),
    d = n(474936),
    f = n(981631),
    p = n(388032);
let _ = () => {
        var e;
        let {
                transitionState: t,
                onClose: n,
                premiumType: s,
                setStep: f,
                premiumSubscription: _,
                paymentsBlocked: h,
                planId: g,
                handleCancellation: E,
            } = (0, u.a)(),
            [b, y] = (0, i.useState)(!1),
            [O, v] = (0, i.useState)(!1),
            S = async () => {
                y(!0), v(!1);
                try {
                    await E(), n();
                } catch (e) {
                    v(!0), y(!1);
                }
            },
            I =
                (_.items.some((e) => {
                    let { planId: t } = e;
                    return !d.dJ.has(t);
                }) &&
                    null == _.renewalMutations) ||
                (null == (e = _.renewalMutations)
                    ? void 0
                    : e.items.find((e) => {
                          let { planId: t } = e;
                          return !d.dJ.has(t);
                      })) != null,
            T = [];
        return (
            T.push({
                text: p.intl.string(p.t.h9tkAK),
                onClick: () => n(),
                variant: "secondary",
            }),
            I
                ? T.push({
                      text: p.intl.string(p.t.PDTjLN),
                      onClick: () => f(c.R.PREVIEW),
                      disabled: b,
                      variant: "critical-primary",
                      loading: b,
                  })
                : T.push({
                      text: p.intl.string(p.t["cY+Oob"]),
                      onClick: () => S(),
                      disabled: b,
                      variant: "critical-primary",
                      loading: b,
                  }),
            (0, r.jsx)(a.Modal, {
                size: "md",
                transitionState: t,
                title: "".concat(
                    p.intl.format(p.t.LZunzZ, { planPremiumType: l.ZP.getTierDisplayNameByPlanId("".concat(g)) }),
                ),
                subtitle: m(h, s, _),
                actions: T,
                onClose: async () => n(),
                children: O
                    ? (0, r.jsx)(o.M14, {
                          type: "critical",
                          children: p.intl.string(p.t["5mlOCW"]),
                      })
                    : null,
            })
        );
    },
    m = (e, t, n) => {
        switch (n.status) {
            case f.O0b.PAST_DUE:
            case f.O0b.PAUSED:
            case f.O0b.BILLING_RETRY:
                return p.intl.string(p.t.FClXh9);
            default:
                switch (t) {
                    case d.PremiumTypes.TIER_0:
                        return e
                            ? p.intl.format(p.t["l+A50F"], {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: s.Z.getArticleURL(f.BhN.BLOCKED_PAYMENTS),
                              })
                            : p.intl.format(p.t.Y6Wfaw, { date: n.currentPeriodEnd });
                    case d.PremiumTypes.TIER_1:
                        return e
                            ? p.intl.format(p.t.QN7eIt, {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: s.Z.getArticleURL(f.BhN.BLOCKED_PAYMENTS),
                              })
                            : p.intl.format(p.t.X7i9D8, { date: n.currentPeriodEnd });
                    default:
                        return e
                            ? p.intl.format(p.t.vuSNhj, {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: s.Z.getArticleURL(f.BhN.BLOCKED_PAYMENTS),
                              })
                            : p.intl.format(p.t.fCdmNs, { date: n.currentPeriodEnd });
                }
        }
    };
