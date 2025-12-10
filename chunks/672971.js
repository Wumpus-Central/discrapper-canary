n.d(t, { Z: () => y }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(850840),
    f = n(63063),
    p = n(74538),
    _ = n(981631),
    m = n(388032),
    h = n(209857);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
class b extends i.Component {
    componentDidMount() {
        this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state));
    }
    componentDidUpdate(e, t) {
        let n = this.hasAcceptedNeccessaryTerms(e, t),
            r = this.hasAcceptedNeccessaryTerms(this.props, this.state);
        r !== n && this.props.onChange(r);
    }
    hasAcceptedNeccessaryTerms(e, t) {
        return (null == e.eulaId || t.hasAcceptedEULA) && (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver);
    }
    render() {
        let {
                eulaId: e,
                applicationName: t,
                hasPreviouslyAcceptedEULA: i,
                forceShow: a,
                disabled: s,
                className: c,
                finePrint: d,
                showPricingLink: g,
                showWithdrawalWaiver: b,
                isTrial: y,
                inReverseTrial: O,
                isDiscount: v,
                subscriptionPlan: S,
                finePrintClassname: I,
            } = this.props,
            { hasAcceptedEULA: T, hasAcceptedWithdrawalWaiver: C } = this.state;
        return (l()(!y || null != S, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"),
        a || (null != e && !i) || b)
            ? (0, r.jsxs)("div", {
                  className: c,
                  children: [
                      b &&
                          (0, r.jsx)(u.Heading, {
                              variant: "heading-md/semibold",
                              className: h.formTitle,
                              children: m.intl.string(m.t.Ogvn5o),
                          }),
                      null != e && (a || !i)
                          ? (0, r.jsx)(u.Checkbox, {
                                checked: T,
                                onChange: (e) => this.setState({ hasAcceptedEULA: e }),
                                disabled: s,
                                label: m.intl.format(m.t.IodJKT, {
                                    applicationName: t,
                                    onClick: (t) => {
                                        (0, u.ZDy)(async () => {
                                            let { default: t } = await n.e("78662").then(n.bind(n, 949391));
                                            return (n) => (0, r.jsx)(t, E({ eulaId: e }, n));
                                        }),
                                            t.preventDefault();
                                    },
                                }),
                            })
                          : null,
                      null == d
                          ? null
                          : (0, r.jsx)("div", {
                                className: o()(h.finePrint, I),
                                children: d,
                            }),
                      b
                          ? (0, r.jsxs)("div", {
                                className: c,
                                children: [
                                    (0, r.jsx)(u.Checkbox, {
                                        checked: C,
                                        onChange: (e) => this.setState({ hasAcceptedWithdrawalWaiver: e }),
                                        disabled: s,
                                        label: m.intl.string(m.t["DFCVN+"]),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: h.finePrint,
                                        children: m.intl.string(m.t.jhu6zm),
                                    }),
                                ],
                            })
                          : null,
                      g &&
                          (0, r.jsxs)("div", {
                              className: h.finePrint,
                              children: [
                                  "*",
                                  m.intl.format(m.t["5zmY3F"], {
                                      documentationLink: f.Z.getArticleURL(_.BhN.LOCALIZED_PRICING),
                                  }),
                              ],
                          }),
                      y &&
                          null != S &&
                          (0, r.jsx)(u.Text, {
                              variant: "text-xs/medium",
                              color: "interactive-text-default",
                              children: m.intl.format(m.t["Hvo/Z5"], {
                                  buttonText: (0, p.W_)(null, S),
                                  interval: p.ZP.formatInterval(null == S ? void 0 : S.interval),
                                  cancelSubscriptionArticle: f.Z.getArticleURL(_.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: f.Z.getArticleURL(_.BhN.PAID_TERMS),
                              }),
                          }),
                      O &&
                          null != S &&
                          (0, r.jsx)(u.Text, {
                              variant: "text-xs/medium",
                              color: "interactive-text-default",
                              children: m.intl.format(m.t.Oo2FeS, {
                                  buttonText: (0, p.W_)(null, S),
                                  interval: p.ZP.formatInterval(null == S ? void 0 : S.interval),
                                  cancelSubscriptionArticle: f.Z.getArticleURL(_.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: f.Z.getArticleURL(_.BhN.PAID_TERMS),
                              }),
                          }),
                      v &&
                          null != S &&
                          (0, r.jsx)(u.Text, {
                              variant: "text-xs/medium",
                              color: "interactive-text-default",
                              children: m.intl.format(m.t["Z2c+aV"], {
                                  buttonText: (0, p.W_)(null, S),
                                  interval: p.ZP.formatInterval(null == S ? void 0 : S.interval),
                                  cancelSubscriptionArticle: f.Z.getArticleURL(_.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: f.Z.getArticleURL(_.BhN.PAID_TERMS),
                              }),
                          }),
                  ],
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            g(this, "state", {
                hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
                hasAcceptedWithdrawalWaiver: !1,
            });
    }
}
let y = c.ZP.connectStores([d.Z], (e) => {
    let { eulaId: t } = e;
    return { hasPreviouslyAcceptedEULA: null != t && d.Z.hasAcceptedEULA(t) };
})(b);
