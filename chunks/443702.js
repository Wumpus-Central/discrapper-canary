n.d(t, { Z: () => D });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(570140),
    l = n(355467),
    c = n(497321),
    u = n(231428),
    d = n(390954),
    f = n(89057),
    p = n(921801),
    _ = n(246946),
    m = n(594174),
    h = n(351402),
    g = n(853872),
    E = n(78839),
    b = n(706454),
    y = n(313789),
    O = n(518596),
    v = n(726985),
    S = n(981631),
    I = n(388032),
    T = n(61365);
function A(e, t, n) {
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
function C(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function P(e, t) {
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
class w extends i.PureComponent {
    componentDidMount() {
        s.Z.wait(() => {
            l.tZ(), l.jg();
        });
    }
    handleRedemptionRedirect() {
        (0, O.openUserSettings)(y.n.GIFT_PANEL, { section: S.oAB.INVENTORY });
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
            isUpdatingPaymentSource: _,
        } = this.props;
        return t
            ? (0, r.jsx)(c.Z, {})
            : (0, r.jsxs)("div", {
                  children: [
                      e && 0 === Object.keys(n).length
                          ? (0, r.jsx)(R, {})
                          : (0, r.jsx)(p.F, {
                                setting: v.s6.BILLING_PAYMENT_METHODS,
                                children: (0, r.jsx)(d.Z, {
                                    paymentSources: n,
                                    defaultPaymentSourceId: i,
                                    premiumSubscriptionPaymentSourceId:
                                        null != s && s.status !== S.O0b.CANCELED ? s.paymentSourceId : null,
                                    locale: a,
                                    removing: l,
                                    submitting: _,
                                }),
                            }),
                      (0, r.jsx)(p.F, {
                          setting: v.s6.BILLING_TRANSACTION_HISTORY,
                          children: (0, r.jsx)("div", {
                              className: T.paymentHistory,
                              children: (0, r.jsxs)(o.Kqy, {
                                  gap: 16,
                                  children: [
                                      (0, r.jsx)(o.Heading, {
                                          variant: "heading-lg/semibold",
                                          children: I.intl.string(I.t.obLrcK),
                                      }),
                                      (0, r.jsx)(f.oQ, {}),
                                      (0, r.jsx)(u.Z, { locale: a }),
                                  ],
                              }),
                          }),
                      }),
                      (0, r.jsx)(o.Wn, {
                          messageType: o.QYI.INFO,
                          className: T.codeRedemptionRedirect,
                          children: I.intl.format(I.t["8b+FXG"], { onClick: () => this.handleRedemptionRedirect() }),
                      }),
                  ],
              });
    }
}
function D() {
    let e = (0, a.cj)([b.default, h.Z, g.Z, m.default, _.Z, E.Z], () => {
        let e = E.Z.getPremiumTypeSubscription(),
            t = m.default.getCurrentUser();
        return null == t
            ? { shouldRenderBillingSettings: !1 }
            : {
                  shouldRenderBillingSettings: !0,
                  locale: b.default.locale,
                  hide: _.Z.enabled,
                  isClaimed: t.isClaimed(),
                  isVerified: t.verified,
                  premiumSubscription: e,
                  defaultPaymentSourceId: g.Z.defaultPaymentSourceId,
                  paymentSources: g.Z.paymentSources,
                  syncing: h.Z.isSyncing,
                  isRemovingPaymentSource: h.Z.isRemovingPaymentSource,
                  isUpdatingPaymentSource: h.Z.isUpdatingPaymentSource,
              };
    });
    if (!e.shouldRenderBillingSettings) return (0, r.jsx)(R, {});
    let { shouldRenderBillingSettings: t } = e,
        n = N(e, ["shouldRenderBillingSettings"]);
    return (0, r.jsx)(w, C({}, n));
}
