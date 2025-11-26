n.d(t, { G: () => p }), n(388685), n(539854);
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
    _ = n(388032);
let p = () => {
        var e;
        let {
                transitionState: t,
                onClose: n,
                premiumType: s,
                setStep: f,
                premiumSubscription: p,
                paymentsBlocked: m,
                planId: g,
                handleCancellation: E,
            } = (0, u.a)(),
            [b, y] = (0, i.useState)(!1),
            [O, v] = (0, i.useState)(!1),
            I = async () => {
                y(!0), v(!1);
                try {
                    await E(), n();
                } catch (e) {
                    v(!0), y(!1);
                }
            },
            T =
                (p.items.some((e) => {
                    let { planId: t } = e;
                    return !d.dJ.has(t);
                }) &&
                    null == p.renewalMutations) ||
                (null == (e = p.renewalMutations)
                    ? void 0
                    : e.items.find((e) => {
                          let { planId: t } = e;
                          return !d.dJ.has(t);
                      })) != null,
            S = [];
        return (
            S.push({
                text: _.intl.string(_.t.h9tkAK),
                onClick: () => n(),
                variant: "secondary",
            }),
            T
                ? S.push({
                      text: _.intl.string(_.t.PDTjLN),
                      onClick: () => f(c.R.PREVIEW),
                      disabled: b,
                      variant: "critical-primary",
                      loading: b,
                  })
                : S.push({
                      text: _.intl.string(_.t["cY+Oob"]),
                      onClick: () => I(),
                      disabled: b,
                      variant: "critical-primary",
                      loading: b,
                  }),
            (0, r.jsx)(a.Modal, {
                size: "md",
                transitionState: t,
                title: "".concat(
                    _.intl.format(_.t.LZunzZ, { planPremiumType: l.ZP.getTierDisplayNameByPlanId("".concat(g)) }),
                ),
                subtitle: h(m, s, p),
                actions: S,
                onClose: async () => n(),
                children: O
                    ? (0, r.jsx)(o.M14, {
                          type: "critical",
                          children: _.intl.string(_.t["5mlOCW"]),
                      })
                    : null,
            })
        );
    },
    h = (e, t, n) => {
        switch (n.status) {
            case f.O0b.PAST_DUE:
            case f.O0b.PAUSED:
            case f.O0b.BILLING_RETRY:
                return _.intl.string(_.t.FClXh9);
            default:
                switch (t) {
                    case d.PremiumTypes.TIER_0:
                        return e
                            ? _.intl.format(_.t["l+A50F"], {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: s.Z.getArticleURL(f.BhN.BLOCKED_PAYMENTS),
                              })
                            : _.intl.format(_.t.Y6Wfaw, { date: n.currentPeriodEnd });
                    case d.PremiumTypes.TIER_1:
                        return e
                            ? _.intl.format(_.t.QN7eIt, {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: s.Z.getArticleURL(f.BhN.BLOCKED_PAYMENTS),
                              })
                            : _.intl.format(_.t.X7i9D8, { date: n.currentPeriodEnd });
                    default:
                        return e
                            ? _.intl.format(_.t.vuSNhj, {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: s.Z.getArticleURL(f.BhN.BLOCKED_PAYMENTS),
                              })
                            : _.intl.format(_.t.fCdmNs, { date: n.currentPeriodEnd });
                }
        }
    };
