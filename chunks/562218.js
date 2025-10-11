n.d(e, { G: () => p }), n(388685), n(539854);
var i = n(951288),
    r = n(647438),
    a = n(793030),
    l = n(481060),
    s = n(63063),
    o = n(74538),
    c = n(45474),
    u = n(594135),
    d = n(474936),
    m = n(981631),
    f = n(388032);
let p = () => {
        var t;
        let {
                transitionState: e,
                onClose: n,
                premiumType: s,
                setStep: m,
                premiumSubscription: p,
                paymentsBlocked: h,
                planId: x,
                handleCancellation: P,
            } = (0, u.a)(),
            [C, y] = (0, r.useState)(!1),
            [v, T] = (0, r.useState)(!1),
            E = async () => {
                y(!0), T(!1);
                try {
                    await P(), n();
                } catch (t) {
                    T(!0), y(!1);
                }
            },
            S =
                (p.items.some((t) => {
                    let { planId: e } = t;
                    return !d.dJ.has(e);
                }) &&
                    null == p.renewalMutations) ||
                (null == (t = p.renewalMutations)
                    ? void 0
                    : t.items.find((t) => {
                          let { planId: e } = t;
                          return !d.dJ.has(e);
                      })) != null,
            _ = [];
        return (
            _.push({
                text: f.intl.string(f.t.h9tkAA),
                onClick: () => n(),
                variant: "secondary",
            }),
            S
                ? _.push({
                      text: f.intl.string(f.t.PDTjLC),
                      onClick: () => m(c.R.PREVIEW),
                      disabled: C,
                      variant: "critical-primary",
                      loading: C,
                  })
                : _.push({
                      text: f.intl.string(f.t["cY+Ooa"]),
                      onClick: () => E(),
                      disabled: C,
                      variant: "critical-primary",
                      loading: C,
                  }),
            (0, i.jsx)(a.Modal, {
                size: "md",
                transitionState: e,
                title: "".concat(
                    f.intl.format(f.t.LZunzc, { planPremiumType: o.ZP.getDisplayPremiumType("".concat(x)) }),
                ),
                subtitle: g(h, s, p),
                actions: _,
                onClose: async () => n(),
                children: v
                    ? (0, i.jsx)(l.M14, {
                          type: "critical",
                          children: f.intl.string(f.t["5mlOCQ"]),
                      })
                    : null,
            })
        );
    },
    g = (t, e, n) => {
        switch (n.status) {
            case m.O0b.PAST_DUE:
            case m.O0b.PAUSED:
            case m.O0b.BILLING_RETRY:
                return f.intl.string(f.t.FClXh4);
            default:
                switch (e) {
                    case d.PremiumTypes.TIER_0:
                        return t
                            ? f.intl.format(f.t["l+A50N"], {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: s.Z.getArticleURL(m.BhN.BLOCKED_PAYMENTS),
                              })
                            : f.intl.format(f.t.Y6Wfa2, { date: n.currentPeriodEnd });
                    case d.PremiumTypes.TIER_1:
                        return t
                            ? f.intl.format(f.t.QN7eIi, {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: s.Z.getArticleURL(m.BhN.BLOCKED_PAYMENTS),
                              })
                            : f.intl.format(f.t.X7i9Dw, { date: n.currentPeriodEnd });
                    default:
                        return t
                            ? f.intl.format(f.t.vuSNho, {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: s.Z.getArticleURL(m.BhN.BLOCKED_PAYMENTS),
                              })
                            : f.intl.format(f.t.fCdmNj, { date: n.currentPeriodEnd });
                }
        }
    };
