n.d(t, { Z: () => A });
var i = n(200651),
    s = n(192379),
    l = n(512722),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(230711),
    h = n(497321),
    m = n(231428),
    g = n(390954),
    x = n(89057),
    _ = n(921801),
    p = n(246946),
    E = n(594174),
    C = n(351402),
    N = n(853872),
    f = n(78839),
    I = n(706454),
    T = n(726985),
    S = n(981631),
    j = n(388032),
    v = n(402621);
class b extends s.PureComponent {
    componentDidMount() {
        c.Z.wait(() => {
            d.tZ(), d.jg();
        });
    }
    handleRedemptionRedirect() {
        u.Z.setSection(S.oAB.INVENTORY);
    }
    render() {
        let { syncing: e, hide: t, paymentSources: n, defaultPaymentSourceId: s, locale: l, premiumSubscription: r, isRemovingPaymentSource: a, isUpdatingPaymentSource: c } = this.props;
        return t
            ? (0, i.jsx)(h.Z, {})
            : (0, i.jsxs)('div', {
                  className: v.__invalid_userSettingsBilling,
                  children: [
                      e && 0 === Object.keys(n).length
                          ? (0, i.jsx)('div', {
                                className: v.syncing,
                                children: (0, i.jsx)(o.$jN, {})
                            })
                          : (0, i.jsx)(_.F, {
                                setting: T.s6.BILLING_PAYMENT_METHODS,
                                children: (0, i.jsx)(g.Z, {
                                    paymentSources: n,
                                    defaultPaymentSourceId: s,
                                    premiumSubscriptionPaymentSourceId: null != r && r.status !== S.O0b.CANCELED ? r.paymentSourceId : null,
                                    locale: l,
                                    removing: a,
                                    submitting: c
                                })
                            }),
                      (0, i.jsx)(_.F, {
                          setting: T.s6.BILLING_TRANSACTION_HISTORY,
                          children: (0, i.jsx)('div', {
                              className: v.paymentHistory,
                              children: (0, i.jsxs)(o.y5t, {
                                  component: (0, i.jsx)(o.vwX, {
                                      tag: 'h1',
                                      children: j.intl.string(j.t.obLrcH)
                                  }),
                                  children: [(0, i.jsx)(x.oQ, {}), (0, i.jsx)(m.Z, { locale: l })]
                              })
                          })
                      }),
                      (0, i.jsx)(o.Zbd, {
                          className: v.codeRedemptionRedirect,
                          type: o.Zbd.Types.CUSTOM,
                          children: j.intl.format(j.t['8b+FXF'], { onClick: this.handleRedemptionRedirect })
                      })
                  ]
              });
    }
}
function A() {
    let e = (0, a.cj)([I.default, C.Z, N.Z, E.default, p.Z, f.ZP], () => {
        let e = f.ZP.getPremiumTypeSubscription(),
            t = E.default.getCurrentUser();
        return (
            r()(null != t, 'UserSettingsBilling: currentUser cannot be undefined'),
            {
                locale: I.default.locale,
                hide: p.Z.enabled,
                isClaimed: t.isClaimed(),
                isVerified: t.verified,
                premiumSubscription: e,
                defaultPaymentSourceId: N.Z.defaultPaymentSourceId,
                paymentSources: N.Z.paymentSources,
                syncing: C.Z.isSyncing,
                isRemovingPaymentSource: C.Z.isRemovingPaymentSource,
                isUpdatingPaymentSource: C.Z.isUpdatingPaymentSource
            }
        );
    });
    return (0, i.jsx)(b, { ...e });
}
