n.d(t, { Z: () => A });
var i = n(200651),
    s = n(192379),
    r = n(512722),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(230711),
    m = n(497321),
    g = n(231428),
    h = n(390954),
    x = n(89057),
    _ = n(921801),
    p = n(246946),
    E = n(594174),
    C = n(351402),
    f = n(853872),
    T = n(78839),
    N = n(706454),
    S = n(726985),
    I = n(981631),
    b = n(388032),
    v = n(462476);
class j extends s.PureComponent {
    componentDidMount() {
        c.Z.wait(() => {
            d.tZ(), d.jg();
        });
    }
    handleRedemptionRedirect() {
        u.Z.setSection(I.oAB.INVENTORY);
    }
    render() {
        let { syncing: e, hide: t, paymentSources: n, defaultPaymentSourceId: s, locale: r, premiumSubscription: l, isRemovingPaymentSource: a, isUpdatingPaymentSource: c } = this.props;
        return t
            ? (0, i.jsx)(m.Z, {})
            : (0, i.jsxs)('div', {
                  className: v.__invalid_userSettingsBilling,
                  children: [
                      e && 0 === Object.keys(n).length
                          ? (0, i.jsx)('div', {
                                className: v.syncing,
                                children: (0, i.jsx)(o.$jN, {})
                            })
                          : (0, i.jsx)(_.F, {
                                setting: S.s6.BILLING_PAYMENT_METHODS,
                                children: (0, i.jsx)(h.Z, {
                                    paymentSources: n,
                                    defaultPaymentSourceId: s,
                                    premiumSubscriptionPaymentSourceId: null != l && l.status !== I.O0b.CANCELED ? l.paymentSourceId : null,
                                    locale: r,
                                    removing: a,
                                    submitting: c
                                })
                            }),
                      (0, i.jsx)(_.F, {
                          setting: S.s6.BILLING_TRANSACTION_HISTORY,
                          children: (0, i.jsx)('div', {
                              className: v.paymentHistory,
                              children: (0, i.jsxs)(o.y5t, {
                                  component: (0, i.jsx)(o.vwX, {
                                      tag: 'h1',
                                      children: b.intl.string(b.t.obLrcH)
                                  }),
                                  children: [(0, i.jsx)(x.oQ, {}), (0, i.jsx)(g.Z, { locale: r })]
                              })
                          })
                      }),
                      (0, i.jsx)(o.Zbd, {
                          className: v.codeRedemptionRedirect,
                          type: o.Zbd.Types.CUSTOM,
                          children: b.intl.format(b.t['8b+FXF'], { onClick: this.handleRedemptionRedirect })
                      })
                  ]
              });
    }
}
function A() {
    let e = (0, a.cj)([N.default, C.Z, f.Z, E.default, p.Z, T.ZP], () => {
        let e = T.ZP.getPremiumTypeSubscription(),
            t = E.default.getCurrentUser();
        return (
            l()(null != t, 'UserSettingsBilling: currentUser cannot be undefined'),
            {
                locale: N.default.locale,
                hide: p.Z.enabled,
                isClaimed: t.isClaimed(),
                isVerified: t.verified,
                premiumSubscription: e,
                defaultPaymentSourceId: f.Z.defaultPaymentSourceId,
                paymentSources: f.Z.paymentSources,
                syncing: C.Z.isSyncing,
                isRemovingPaymentSource: C.Z.isRemovingPaymentSource,
                isUpdatingPaymentSource: C.Z.isUpdatingPaymentSource
            }
        );
    });
    return (0, i.jsx)(j, { ...e });
}
