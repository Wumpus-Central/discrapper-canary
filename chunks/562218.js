n.d(t, { G: () => h }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(481060),
    s = n(63063),
    l = n(74538),
    c = n(45474),
    u = n(594135),
    d = n(474936),
    f = n(282793),
    p = n(981631),
    _ = n(96011),
    m = n(388032);
let h = () => {
        var e;
        let {
                transitionState: t,
                onClose: n,
                premiumType: s,
                setStep: f,
                premiumSubscription: p,
                paymentsBlocked: h,
                planId: E,
                handleCancellation: b,
            } = (0, u.a)(),
            [y, O] = (0, i.useState)(!1),
            [v, S] = (0, i.useState)(!1),
            I = async () => {
                O(!0), S(!1);
                try {
                    await b(), n();
                } catch (e) {
                    S(!0), O(!1);
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
            C = [];
        C.push({
            text: m.intl.string(m.t.h9tkAK),
            onClick: () => n(),
            variant: "secondary",
        }),
            T
                ? C.push({
                      text: m.intl.string(m.t.PDTjLN),
                      onClick: () => f(c.R.PREVIEW),
                      disabled: y,
                      variant: "critical-primary",
                      loading: y,
                  })
                : C.push({
                      text: m.intl.string(m.t["cY+Oob"]),
                      onClick: () => I(),
                      disabled: y,
                      variant: "critical-primary",
                      loading: y,
                  });
        let A = (0, l.Ju)(E),
            N = A
                ? m.intl.string(_.default.qbDPGM)
                : m.intl.formatToPlainString(m.t.LZunzZ, {
                      planPremiumType: l.ZP.getTierDisplayNameByPlanId("".concat(E)),
                  });
        return (0, r.jsx)(a.Modal, {
            size: "md",
            transitionState: t,
            title: N,
            subtitle: g(h, s, p, A),
            actions: C,
            onClose: async () => n(),
            children: v
                ? (0, r.jsx)(o.M14, {
                      type: "critical",
                      children: m.intl.string(m.t["5mlOCW"]),
                  })
                : null,
        });
    },
    g = (e, t, n, r) => {
        switch (n.status) {
            case p.O0b.PAST_DUE:
            case p.O0b.PAUSED:
            case p.O0b.BILLING_RETRY:
                return m.intl.string(m.t.FClXh9);
            default:
                if (r)
                    return m.intl.formatToPlainString(_.default.MI8Rml, {
                        endDate: n.currentPeriodEnd,
                        premiumGroupProductName: (0, f.sO)(),
                    });
                switch (t) {
                    case d.PremiumTypes.TIER_0:
                        return e
                            ? m.intl.format(m.t["l+A50F"], {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: s.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS),
                              })
                            : m.intl.format(m.t.Y6Wfaw, { date: n.currentPeriodEnd });
                    case d.PremiumTypes.TIER_1:
                        return e
                            ? m.intl.format(m.t.QN7eIt, {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: s.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS),
                              })
                            : m.intl.format(m.t.X7i9D8, { date: n.currentPeriodEnd });
                    default:
                        return e
                            ? m.intl.format(m.t.vuSNhj, {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: s.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS),
                              })
                            : m.intl.format(m.t.fCdmNs, { date: n.currentPeriodEnd });
                }
        }
    };
