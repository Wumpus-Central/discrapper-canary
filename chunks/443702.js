n.d(t, { Z: () => N });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(481060),
    l = n(570140),
    o = n(355467),
    c = n(230711),
    d = n(497321),
    u = n(231428),
    m = n(390954),
    p = n(89057),
    g = n(921801),
    h = n(246946),
    f = n(594174),
    b = n(351402),
    x = n(853872),
    _ = n(78839),
    j = n(706454),
    C = n(726985),
    O = n(981631),
    E = n(388032),
    v = n(189435);
let S = () =>
    (0, i.jsx)('div', {
        className: v.syncing,
        children: (0, i.jsx)(a.$jN, {})
    });
class T extends r.PureComponent {
    componentDidMount() {
        l.Z.wait(() => {
            (o.tZ(), o.jg());
        });
    }
    handleRedemptionRedirect() {
        c.Z.setSection(O.oAB.INVENTORY);
    }
    render() {
        let { syncing: e, hide: t, paymentSources: n, defaultPaymentSourceId: r, locale: s, premiumSubscription: l, isRemovingPaymentSource: o, isUpdatingPaymentSource: c } = this.props;
        return t
            ? (0, i.jsx)(d.Z, {})
            : (0, i.jsxs)('div', {
                  className: v.__invalid_userSettingsBilling,
                  children: [
                      e && 0 === Object.keys(n).length
                          ? (0, i.jsx)(S, {})
                          : (0, i.jsx)(g.F, {
                                setting: C.s6.BILLING_PAYMENT_METHODS,
                                children: (0, i.jsx)(m.Z, {
                                    paymentSources: n,
                                    defaultPaymentSourceId: r,
                                    premiumSubscriptionPaymentSourceId: null != l && l.status !== O.O0b.CANCELED ? l.paymentSourceId : null,
                                    locale: s,
                                    removing: o,
                                    submitting: c
                                })
                            }),
                      (0, i.jsx)(g.F, {
                          setting: C.s6.BILLING_TRANSACTION_HISTORY,
                          children: (0, i.jsx)('div', {
                              className: v.paymentHistory,
                              children: (0, i.jsxs)(a.y5t, {
                                  component: (0, i.jsx)(a.vwX, {
                                      tag: 'h1',
                                      children: E.intl.string(E.t.obLrcH)
                                  }),
                                  children: [(0, i.jsx)(p.oQ, {}), (0, i.jsx)(u.Z, { locale: s })]
                              })
                          })
                      }),
                      (0, i.jsx)(a.Zbd, {
                          className: v.codeRedemptionRedirect,
                          type: a.Zbd.Types.CUSTOM,
                          children: E.intl.format(E.t['8b+FXF'], { onClick: this.handleRedemptionRedirect })
                      })
                  ]
              });
    }
}
function N() {
    let e = (0, s.cj)([j.default, b.Z, x.Z, f.default, h.Z, _.Z], () => {
        let e = _.Z.getPremiumTypeSubscription(),
            t = f.default.getCurrentUser();
        return null == t
            ? { shouldRenderBillingSettings: !1 }
            : {
                  shouldRenderBillingSettings: !0,
                  locale: j.default.locale,
                  hide: h.Z.enabled,
                  isClaimed: t.isClaimed(),
                  isVerified: t.verified,
                  premiumSubscription: e,
                  defaultPaymentSourceId: x.Z.defaultPaymentSourceId,
                  paymentSources: x.Z.paymentSources,
                  syncing: b.Z.isSyncing,
                  isRemovingPaymentSource: b.Z.isRemovingPaymentSource,
                  isUpdatingPaymentSource: b.Z.isUpdatingPaymentSource
              };
    });
    if (!e.shouldRenderBillingSettings) return (0, i.jsx)(S, {});
    let { shouldRenderBillingSettings: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(e, ['shouldRenderBillingSettings']);
    return (0, i.jsx)(
        T,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        var i;
                        ((i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = i));
                    }));
            }
            return e;
        })({}, n)
    );
}
