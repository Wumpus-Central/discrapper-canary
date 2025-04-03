n.d(t, { Z: () => I });
var r = n(200651),
    i = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(230711),
    m = n(497321),
    g = n(231428),
    p = n(390954),
    h = n(89057),
    f = n(921801),
    b = n(246946),
    N = n(594174),
    x = n(351402),
    _ = n(853872),
    E = n(78839),
    j = n(706454),
    O = n(726985),
    C = n(981631),
    S = n(388032),
    v = n(189435);
class T extends i.PureComponent {
    componentDidMount() {
        c.Z.wait(() => {
            d.tZ(), d.jg();
        });
    }
    handleRedemptionRedirect() {
        u.Z.setSection(C.oAB.INVENTORY);
    }
    render() {
        let { syncing: e, hide: t, paymentSources: n, defaultPaymentSourceId: i, locale: s, premiumSubscription: a, isRemovingPaymentSource: l, isUpdatingPaymentSource: c } = this.props;
        return t
            ? (0, r.jsx)(m.Z, {})
            : (0, r.jsxs)('div', {
                  className: v.__invalid_userSettingsBilling,
                  children: [
                      e && 0 === Object.keys(n).length
                          ? (0, r.jsx)('div', {
                                className: v.syncing,
                                children: (0, r.jsx)(o.$jN, {})
                            })
                          : (0, r.jsx)(f.F, {
                                setting: O.s6.BILLING_PAYMENT_METHODS,
                                children: (0, r.jsx)(p.Z, {
                                    paymentSources: n,
                                    defaultPaymentSourceId: i,
                                    premiumSubscriptionPaymentSourceId: null != a && a.status !== C.O0b.CANCELED ? a.paymentSourceId : null,
                                    locale: s,
                                    removing: l,
                                    submitting: c
                                })
                            }),
                      (0, r.jsx)(f.F, {
                          setting: O.s6.BILLING_TRANSACTION_HISTORY,
                          children: (0, r.jsx)('div', {
                              className: v.paymentHistory,
                              children: (0, r.jsxs)(o.y5t, {
                                  component: (0, r.jsx)(o.vwX, {
                                      tag: 'h1',
                                      children: S.NW.string(S.t.obLrcH)
                                  }),
                                  children: [(0, r.jsx)(h.oQ, {}), (0, r.jsx)(g.Z, { locale: s })]
                              })
                          })
                      }),
                      (0, r.jsx)(o.Zbd, {
                          className: v.codeRedemptionRedirect,
                          type: o.Zbd.Types.CUSTOM,
                          children: S.NW.format(S.t['8b+FXF'], { onClick: this.handleRedemptionRedirect })
                      })
                  ]
              });
    }
}
function I() {
    let e = (0, l.cj)([j.default, x.Z, _.Z, N.default, b.Z, E.ZP], () => {
        let e = E.ZP.getPremiumTypeSubscription(),
            t = N.default.getCurrentUser();
        return (
            a()(null != t, 'UserSettingsBilling: currentUser cannot be undefined'),
            {
                locale: j.default.locale,
                hide: b.Z.enabled,
                isClaimed: t.isClaimed(),
                isVerified: t.verified,
                premiumSubscription: e,
                defaultPaymentSourceId: _.Z.defaultPaymentSourceId,
                paymentSources: _.Z.paymentSources,
                syncing: x.Z.isSyncing,
                isRemovingPaymentSource: x.Z.isRemovingPaymentSource,
                isUpdatingPaymentSource: x.Z.isUpdatingPaymentSource
            }
        );
    });
    return (0, r.jsx)(
        T,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, e)
    );
}
