n.d(t, { Z: () => y }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(512722),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(850840),
    f = n(63063),
    _ = n(74538),
    p = n(981631),
    h = n(388032),
    m = n(247382);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
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
        let { eulaId: e, applicationName: t, hasPreviouslyAcceptedEULA: i, forceShow: o, disabled: s, className: c, checkboxClassname: d, checkboxLabelClassname: g, finePrint: b, showPricingLink: y, showWithdrawalWaiver: v, isTrial: O, inReverseTrial: I, isDiscount: S, subscriptionPlan: T, finePrintClassname: N } = this.props,
            { hasAcceptedEULA: A, hasAcceptedWithdrawalWaiver: C } = this.state;
        return (l()(!O || null != T, 'subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true'), o || (null != e && !i) || v)
            ? (0, r.jsxs)('div', {
                  className: c,
                  children: [
                      v &&
                          (0, r.jsx)(u.vwX, {
                              className: m.formTitle,
                              children: h.NW.string(h.t.Ogvn5u)
                          }),
                      null != e && (o || !i)
                          ? (0, r.jsx)(u.XZJ, {
                                type: u.XZJ.Types.INVERTED,
                                value: A,
                                onChange: this.handleToggleEULAAcceptance,
                                disabled: s,
                                className: m.checkbox,
                                children: (0, r.jsx)('div', {
                                    className: m.checkboxLabel,
                                    children: h.NW.format(h.t.IodJKS, {
                                        applicationName: t,
                                        onClick: (t) => {
                                            (0, u.ZDy)(async () => {
                                                let { default: t } = await n.e('51868').then(n.bind(n, 796504));
                                                return (n) => (0, r.jsx)(t, E({ eulaId: e }, n));
                                            }),
                                                t.preventDefault();
                                        }
                                    })
                                })
                            })
                          : null,
                      null == b
                          ? null
                          : (0, r.jsx)('div', {
                                className: a()(m.finePrint, N),
                                children: b
                            }),
                      v
                          ? (0, r.jsxs)('div', {
                                className: c,
                                children: [
                                    (0, r.jsx)(u.XZJ, {
                                        type: u.XZJ.Types.INVERTED,
                                        value: C,
                                        onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                        disabled: s,
                                        className: a()(m.checkbox, d),
                                        children: (0, r.jsx)('div', {
                                            className: a()(m.checkboxLabel, g),
                                            children: h.NW.string(h.t.DFCVNz)
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: m.finePrint,
                                        children: h.NW.string(h.t.jhu6zs)
                                    })
                                ]
                            })
                          : null,
                      y &&
                          (0, r.jsxs)('div', {
                              className: m.finePrint,
                              children: ['*', h.NW.format(h.t['5zmY3N'], { documentationLink: f.Z.getArticleURL(p.BhN.LOCALIZED_PRICING) })]
                          }),
                      O &&
                          null != T &&
                          (0, r.jsx)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'interactive-normal',
                              children: h.NW.format(h.t['Hvo/Z2'], {
                                  buttonText: (0, _.W_)(null, T),
                                  interval: _.ZP.formatInterval(null == T ? void 0 : T.interval),
                                  cancelSubscriptionArticle: f.Z.getArticleURL(p.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: f.Z.getArticleURL(p.BhN.PAID_TERMS)
                              })
                          }),
                      I &&
                          null != T &&
                          (0, r.jsx)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'interactive-normal',
                              children: h.NW.format(h.t.Oo2FeX, {
                                  buttonText: (0, _.W_)(null, T),
                                  interval: _.ZP.formatInterval(null == T ? void 0 : T.interval),
                                  cancelSubscriptionArticle: f.Z.getArticleURL(p.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: f.Z.getArticleURL(p.BhN.PAID_TERMS)
                              })
                          }),
                      S &&
                          null != T &&
                          (0, r.jsx)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'interactive-normal',
                              children: h.NW.format(h.t['Z2c+aW'], {
                                  buttonText: (0, _.W_)(null, T),
                                  interval: _.ZP.formatInterval(null == T ? void 0 : T.interval),
                                  cancelSubscriptionArticle: f.Z.getArticleURL(p.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: f.Z.getArticleURL(p.BhN.PAID_TERMS)
                              })
                          })
                  ]
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            g(this, 'state', {
                hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
                hasAcceptedWithdrawalWaiver: !1
            }),
            g(this, 'handleToggleEUWithdralWaiverAcceptance', (e, t) => {
                this.setState({ hasAcceptedWithdrawalWaiver: t });
            }),
            g(this, 'handleToggleEULAAcceptance', (e, t) => {
                this.setState({ hasAcceptedEULA: t });
            });
    }
}
let y = c.ZP.connectStores([d.Z], (e) => {
    let { eulaId: t } = e;
    return { hasPreviouslyAcceptedEULA: null != t && d.Z.hasAcceptedEULA(t) };
})(b);
