n.d(t, {
    Z: function () {
        return j;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(230711),
    m = n(497321),
    g = n(231428),
    h = n(390954),
    p = n(89057),
    x = n(921801),
    f = n(246946),
    E = n(594174),
    _ = n(351402),
    C = n(853872),
    T = n(78839),
    S = n(706454),
    b = n(726985),
    I = n(981631),
    N = n(388032),
    v = n(729061);
class A extends r.PureComponent {
    componentDidMount() {
        c.Z.wait(() => {
            d.tZ(), d.jg();
        });
    }
    handleRedemptionRedirect() {
        u.Z.setSection(I.oAB.INVENTORY);
    }
    render() {
        let { syncing: e, hide: t, paymentSources: n, defaultPaymentSourceId: r, locale: s, premiumSubscription: a, isRemovingPaymentSource: l, isUpdatingPaymentSource: c } = this.props;
        return t
            ? (0, i.jsx)(m.Z, {})
            : (0, i.jsxs)('div', {
                  className: v.__invalid_userSettingsBilling,
                  children: [
                      e && 0 === Object.keys(n).length
                          ? (0, i.jsx)('div', {
                                className: v.syncing,
                                children: (0, i.jsx)(o.Spinner, {})
                            })
                          : (0, i.jsx)(x.F, {
                                setting: b.s6.BILLING_PAYMENT_METHODS,
                                children: (0, i.jsx)(h.Z, {
                                    paymentSources: n,
                                    defaultPaymentSourceId: r,
                                    premiumSubscriptionPaymentSourceId: null != a && a.status !== I.O0b.CANCELED ? a.paymentSourceId : null,
                                    locale: s,
                                    removing: l,
                                    submitting: c
                                })
                            }),
                      (0, i.jsx)(x.F, {
                          setting: b.s6.BILLING_TRANSACTION_HISTORY,
                          children: (0, i.jsx)('div', {
                              className: v.paymentHistory,
                              children: (0, i.jsxs)(o.HeadingLevel, {
                                  component: (0, i.jsx)(o.FormTitle, {
                                      tag: 'h1',
                                      children: N.intl.string(N.t.obLrcH)
                                  }),
                                  children: [(0, i.jsx)(p.oQ, {}), (0, i.jsx)(g.Z, { locale: s })]
                              })
                          })
                      }),
                      (0, i.jsx)(o.Card, {
                          className: v.codeRedemptionRedirect,
                          type: o.Card.Types.CUSTOM,
                          children: N.intl.format(N.t['8b+FXF'], { onClick: this.handleRedemptionRedirect })
                      })
                  ]
              });
    }
}
function j() {
    let e = (0, l.cj)([S.default, _.Z, C.Z, E.default, f.Z, T.ZP], () => {
        let e = T.ZP.getPremiumTypeSubscription(),
            t = E.default.getCurrentUser();
        return (
            a()(null != t, 'UserSettingsBilling: currentUser cannot be undefined'),
            {
                locale: S.default.locale,
                hide: f.Z.enabled,
                isClaimed: t.isClaimed(),
                isVerified: t.verified,
                premiumSubscription: e,
                defaultPaymentSourceId: C.Z.defaultPaymentSourceId,
                paymentSources: C.Z.paymentSources,
                syncing: _.Z.isSyncing,
                isRemovingPaymentSource: _.Z.isRemovingPaymentSource,
                isUpdatingPaymentSource: _.Z.isUpdatingPaymentSource
            }
        );
    });
    return (0, i.jsx)(A, { ...e });
}
