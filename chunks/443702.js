n.d(t, { Z: () => I });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(481060),
    a = n(570140),
    o = n(355467),
    c = n(230711),
    d = n(497321),
    u = n(231428),
    m = n(390954),
    g = n(89057),
    p = n(921801),
    h = n(246946),
    f = n(594174),
    b = n(351402),
    _ = n(853872),
    x = n(78839),
    E = n(706454),
    C = n(726985),
    j = n(981631),
    O = n(388032),
    S = n(189435);
let v = () =>
    (0, i.jsx)('div', {
        className: S.syncing,
        children: (0, i.jsx)(l.$jN, {})
    });
class T extends r.PureComponent {
    componentDidMount() {
        a.Z.wait(() => {
            o.tZ(), o.jg();
        });
    }
    handleRedemptionRedirect() {
        c.Z.setSection(j.oAB.INVENTORY);
    }
    render() {
        let { syncing: e, hide: t, paymentSources: n, defaultPaymentSourceId: r, locale: s, premiumSubscription: a, isRemovingPaymentSource: o, isUpdatingPaymentSource: c } = this.props;
        return t
            ? (0, i.jsx)(d.Z, {})
            : (0, i.jsxs)('div', {
                  className: S.__invalid_userSettingsBilling,
                  children: [
                      e && 0 === Object.keys(n).length
                          ? (0, i.jsx)(v, {})
                          : (0, i.jsx)(p.F, {
                                setting: C.s6.BILLING_PAYMENT_METHODS,
                                children: (0, i.jsx)(m.Z, {
                                    paymentSources: n,
                                    defaultPaymentSourceId: r,
                                    premiumSubscriptionPaymentSourceId: null != a && a.status !== j.O0b.CANCELED ? a.paymentSourceId : null,
                                    locale: s,
                                    removing: o,
                                    submitting: c
                                })
                            }),
                      (0, i.jsx)(p.F, {
                          setting: C.s6.BILLING_TRANSACTION_HISTORY,
                          children: (0, i.jsx)('div', {
                              className: S.paymentHistory,
                              children: (0, i.jsxs)(l.y5t, {
                                  component: (0, i.jsx)(l.vwX, {
                                      tag: 'h1',
                                      children: O.intl.string(O.t.obLrcH)
                                  }),
                                  children: [(0, i.jsx)(g.oQ, {}), (0, i.jsx)(u.Z, { locale: s })]
                              })
                          })
                      }),
                      (0, i.jsx)(l.Zbd, {
                          className: S.codeRedemptionRedirect,
                          type: l.Zbd.Types.CUSTOM,
                          children: O.intl.format(O.t['8b+FXF'], { onClick: this.handleRedemptionRedirect })
                      })
                  ]
              });
    }
}
function I() {
    let e = (0, s.cj)([E.default, b.Z, _.Z, f.default, h.Z, x.ZP], () => {
        let e = x.ZP.getPremiumTypeSubscription(),
            t = f.default.getCurrentUser();
        return null == t
            ? { shouldRenderBillingSettings: !1 }
            : {
                  shouldRenderBillingSettings: !0,
                  locale: E.default.locale,
                  hide: h.Z.enabled,
                  isClaimed: t.isClaimed(),
                  isVerified: t.verified,
                  premiumSubscription: e,
                  defaultPaymentSourceId: _.Z.defaultPaymentSourceId,
                  paymentSources: _.Z.paymentSources,
                  syncing: b.Z.isSyncing,
                  isRemovingPaymentSource: b.Z.isRemovingPaymentSource,
                  isUpdatingPaymentSource: b.Z.isUpdatingPaymentSource
              };
    });
    if (!e.shouldRenderBillingSettings) return (0, i.jsx)(v, {});
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
                    for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['shouldRenderBillingSettings']);
    return (0, i.jsx)(
        T,
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
        })({}, n)
    );
}
