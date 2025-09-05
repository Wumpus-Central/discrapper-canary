n.d(t, { Z: () => w });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(570140),
    l = n(355467),
    c = n(230711),
    u = n(497321),
    d = n(231428),
    f = n(390954),
    _ = n(89057),
    p = n(921801),
    h = n(246946),
    m = n(594174),
    g = n(351402),
    E = n(853872),
    b = n(78839),
    y = n(706454),
    O = n(726985),
    v = n(981631),
    I = n(388032),
    T = n(275765);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let R = () =>
    (0, r.jsx)("div", {
        className: T.syncing,
        children: (0, r.jsx)(o.$jN, {}),
    });
class P extends i.PureComponent {
    componentDidMount() {
        s.Z.wait(() => {
            l.tZ(), l.jg();
        });
    }
    handleRedemptionRedirect() {
        c.Z.setSection(v.oAB.INVENTORY);
    }
    render() {
        let {
            syncing: e,
            hide: t,
            paymentSources: n,
            defaultPaymentSourceId: i,
            locale: a,
            premiumSubscription: s,
            isRemovingPaymentSource: l,
            isUpdatingPaymentSource: c,
        } = this.props;
        return t
            ? (0, r.jsx)(u.Z, {})
            : (0, r.jsxs)("div", {
                  children: [
                      e && 0 === Object.keys(n).length
                          ? (0, r.jsx)(R, {})
                          : (0, r.jsx)(p.F, {
                                setting: O.s6.BILLING_PAYMENT_METHODS,
                                children: (0, r.jsx)(f.Z, {
                                    paymentSources: n,
                                    defaultPaymentSourceId: i,
                                    premiumSubscriptionPaymentSourceId:
                                        null != s && s.status !== v.O0b.CANCELED ? s.paymentSourceId : null,
                                    locale: a,
                                    removing: l,
                                    submitting: c,
                                }),
                            }),
                      (0, r.jsx)(p.F, {
                          setting: O.s6.BILLING_TRANSACTION_HISTORY,
                          children: (0, r.jsx)("div", {
                              className: T.paymentHistory,
                              children: (0, r.jsxs)(o.y5t, {
                                  component: (0, r.jsx)(o.vwX, {
                                      tag: "h1",
                                      children: I.intl.string(I.t.obLrcH),
                                  }),
                                  children: [(0, r.jsx)(_.oQ, {}), (0, r.jsx)(d.Z, { locale: a })],
                              }),
                          }),
                      }),
                      (0, r.jsx)(o.Wn, {
                          messageType: o.QYI.INFO,
                          className: T.codeRedemptionRedirect,
                          children: I.intl.format(I.t["8b+FXF"], { onClick: this.handleRedemptionRedirect }),
                      }),
                  ],
              });
    }
}
function w() {
    let e = (0, a.cj)([y.default, g.Z, E.Z, m.default, h.Z, b.Z], () => {
        let e = b.Z.getPremiumTypeSubscription(),
            t = m.default.getCurrentUser();
        return null == t
            ? { shouldRenderBillingSettings: !1 }
            : {
                  shouldRenderBillingSettings: !0,
                  locale: y.default.locale,
                  hide: h.Z.enabled,
                  isClaimed: t.isClaimed(),
                  isVerified: t.verified,
                  premiumSubscription: e,
                  defaultPaymentSourceId: E.Z.defaultPaymentSourceId,
                  paymentSources: E.Z.paymentSources,
                  syncing: g.Z.isSyncing,
                  isRemovingPaymentSource: g.Z.isRemovingPaymentSource,
                  isUpdatingPaymentSource: g.Z.isUpdatingPaymentSource,
              };
    });
    if (!e.shouldRenderBillingSettings) return (0, r.jsx)(R, {});
    let { shouldRenderBillingSettings: t } = e,
        n = C(e, ["shouldRenderBillingSettings"]);
    return (0, r.jsx)(P, A({}, n));
}
