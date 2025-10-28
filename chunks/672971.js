n.d(t, { Z: () => O }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(442837),
    u = n(755721),
    d = n(481060),
    f = n(850840),
    _ = n(63063),
    p = n(74538),
    h = n(981631),
    m = n(388032),
    g = n(209857);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
class y extends i.Component {
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
                checkboxClassname: f,
                checkboxLabelClassname: E,
                finePrint: y,
                showPricingLink: O,
                showWithdrawalWaiver: v,
                isTrial: I,
                inReverseTrial: T,
                isDiscount: S,
                subscriptionPlan: A,
                finePrintClassname: C,
            } = this.props,
            { hasAcceptedEULA: N, hasAcceptedWithdrawalWaiver: R } = this.state;
        return (l()(!I || null != A, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"),
        a || (null != e && !i) || v)
            ? (0, r.jsxs)("div", {
                  className: c,
                  children: [
                      v &&
                          (0, r.jsx)(d.Heading, {
                              variant: "heading-md/semibold",
                              className: g.formTitle,
                              children: m.intl.string(m.t.Ogvn5o),
                          }),
                      null != e && (a || !i)
                          ? (0, r.jsx)(u.$q, {
                                type: u.M0.INVERTED,
                                value: N,
                                onChange: this.handleToggleEULAAcceptance,
                                disabled: s,
                                className: g.checkbox,
                                children: (0, r.jsx)("div", {
                                    className: g.checkboxLabel,
                                    children: m.intl.format(m.t.IodJKT, {
                                        applicationName: t,
                                        onClick: (t) => {
                                            (0, d.ZDy)(async () => {
                                                let { default: t } = await n.e("78662").then(n.bind(n, 949391));
                                                return (n) => (0, r.jsx)(t, b({ eulaId: e }, n));
                                            }),
                                                t.preventDefault();
                                        },
                                    }),
                                }),
                            })
                          : null,
                      null == y
                          ? null
                          : (0, r.jsx)("div", {
                                className: o()(g.finePrint, C),
                                children: y,
                            }),
                      v
                          ? (0, r.jsxs)("div", {
                                className: c,
                                children: [
                                    (0, r.jsx)(u.$q, {
                                        type: u.M0.INVERTED,
                                        value: R,
                                        onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                        disabled: s,
                                        className: o()(g.checkbox, f),
                                        children: (0, r.jsx)("div", {
                                            className: o()(g.checkboxLabel, E),
                                            children: m.intl.string(m.t["DFCVN+"]),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: g.finePrint,
                                        children: m.intl.string(m.t.jhu6zm),
                                    }),
                                ],
                            })
                          : null,
                      O &&
                          (0, r.jsxs)("div", {
                              className: g.finePrint,
                              children: [
                                  "*",
                                  m.intl.format(m.t["5zmY3F"], {
                                      documentationLink: _.Z.getArticleURL(h.BhN.LOCALIZED_PRICING),
                                  }),
                              ],
                          }),
                      I &&
                          null != A &&
                          (0, r.jsx)(d.Text, {
                              variant: "text-xs/medium",
                              color: "interactive-normal",
                              children: m.intl.format(m.t["Hvo/Z5"], {
                                  buttonText: (0, p.W_)(null, A),
                                  interval: p.ZP.formatInterval(null == A ? void 0 : A.interval),
                                  cancelSubscriptionArticle: _.Z.getArticleURL(h.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: _.Z.getArticleURL(h.BhN.PAID_TERMS),
                              }),
                          }),
                      T &&
                          null != A &&
                          (0, r.jsx)(d.Text, {
                              variant: "text-xs/medium",
                              color: "interactive-normal",
                              children: m.intl.format(m.t.Oo2FeS, {
                                  buttonText: (0, p.W_)(null, A),
                                  interval: p.ZP.formatInterval(null == A ? void 0 : A.interval),
                                  cancelSubscriptionArticle: _.Z.getArticleURL(h.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: _.Z.getArticleURL(h.BhN.PAID_TERMS),
                              }),
                          }),
                      S &&
                          null != A &&
                          (0, r.jsx)(d.Text, {
                              variant: "text-xs/medium",
                              color: "interactive-normal",
                              children: m.intl.format(m.t["Z2c+aV"], {
                                  buttonText: (0, p.W_)(null, A),
                                  interval: p.ZP.formatInterval(null == A ? void 0 : A.interval),
                                  cancelSubscriptionArticle: _.Z.getArticleURL(h.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: _.Z.getArticleURL(h.BhN.PAID_TERMS),
                              }),
                          }),
                  ],
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            E(this, "state", {
                hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
                hasAcceptedWithdrawalWaiver: !1,
            }),
            E(this, "handleToggleEUWithdralWaiverAcceptance", (e, t) => {
                this.setState({ hasAcceptedWithdrawalWaiver: t });
            }),
            E(this, "handleToggleEULAAcceptance", (e, t) => {
                this.setState({ hasAcceptedEULA: t });
            });
    }
}
let O = c.ZP.connectStores([f.Z], (e) => {
    let { eulaId: t } = e;
    return { hasPreviouslyAcceptedEULA: null != t && f.Z.hasAcceptedEULA(t) };
})(y);
