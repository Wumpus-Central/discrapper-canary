n.d(t, { Z: () => N });
var i = n(200651),
    r = n(192379),
    s = n(512722),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(230711),
    m = n(497321),
    p = n(231428),
    g = n(390954),
    h = n(89057),
    f = n(921801),
    b = n(246946),
    _ = n(594174),
    x = n(351402),
    E = n(853872),
    j = n(78839),
    C = n(706454),
    O = n(726985),
    S = n(981631),
    v = n(388032),
    T = n(189435);
class I extends r.PureComponent {
    componentDidMount() {
        c.Z.wait(() => {
            d.tZ(), d.jg();
        });
    }
    handleRedemptionRedirect() {
        u.Z.setSection(S.oAB.INVENTORY);
    }
    render() {
        let { syncing: e, hide: t, paymentSources: n, defaultPaymentSourceId: r, locale: s, premiumSubscription: l, isRemovingPaymentSource: a, isUpdatingPaymentSource: c } = this.props;
        return t
            ? (0, i.jsx)(m.Z, {})
            : (0, i.jsxs)('div', {
                  className: T.__invalid_userSettingsBilling,
                  children: [
                      e && 0 === Object.keys(n).length
                          ? (0, i.jsx)('div', {
                                className: T.syncing,
                                children: (0, i.jsx)(o.$jN, {})
                            })
                          : (0, i.jsx)(f.F, {
                                setting: O.s6.BILLING_PAYMENT_METHODS,
                                children: (0, i.jsx)(g.Z, {
                                    paymentSources: n,
                                    defaultPaymentSourceId: r,
                                    premiumSubscriptionPaymentSourceId: null != l && l.status !== S.O0b.CANCELED ? l.paymentSourceId : null,
                                    locale: s,
                                    removing: a,
                                    submitting: c
                                })
                            }),
                      (0, i.jsx)(f.F, {
                          setting: O.s6.BILLING_TRANSACTION_HISTORY,
                          children: (0, i.jsx)('div', {
                              className: T.paymentHistory,
                              children: (0, i.jsxs)(o.y5t, {
                                  component: (0, i.jsx)(o.vwX, {
                                      tag: 'h1',
                                      children: v.intl.string(v.t.obLrcH)
                                  }),
                                  children: [(0, i.jsx)(h.oQ, {}), (0, i.jsx)(p.Z, { locale: s })]
                              })
                          })
                      }),
                      (0, i.jsx)(o.Zbd, {
                          className: T.codeRedemptionRedirect,
                          type: o.Zbd.Types.CUSTOM,
                          children: v.intl.format(v.t['8b+FXF'], { onClick: this.handleRedemptionRedirect })
                      })
                  ]
              });
    }
}
function N() {
    let e = (0, a.cj)([C.default, x.Z, E.Z, _.default, b.Z, j.ZP], () => {
        let e = j.ZP.getPremiumTypeSubscription(),
            t = _.default.getCurrentUser();
        return (
            l()(null != t, 'UserSettingsBilling: currentUser cannot be undefined'),
            {
                locale: C.default.locale,
                hide: b.Z.enabled,
                isClaimed: t.isClaimed(),
                isVerified: t.verified,
                premiumSubscription: e,
                defaultPaymentSourceId: E.Z.defaultPaymentSourceId,
                paymentSources: E.Z.paymentSources,
                syncing: x.Z.isSyncing,
                isRemovingPaymentSource: x.Z.isRemovingPaymentSource,
                isUpdatingPaymentSource: x.Z.isUpdatingPaymentSource
            }
        );
    });
    return (0, i.jsx)(
        I,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })({}, e)
    );
}
