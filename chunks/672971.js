n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    l = n.n(o),
    u = n(442837),
    c = n(481060),
    d = n(850840),
    f = n(63063),
    _ = n(74538),
    p = n(981631),
    h = n(388032),
    m = n(421842);
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
class E extends r.Component {
    componentDidMount() {
        this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state));
    }
    componentDidUpdate(e, t) {
        let n = this.hasAcceptedNeccessaryTerms(e, t),
            i = this.hasAcceptedNeccessaryTerms(this.props, this.state);
        i !== n && this.props.onChange(i);
    }
    hasAcceptedNeccessaryTerms(e, t) {
        return (null == e.eulaId || t.hasAcceptedEULA) && (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver);
    }
    render() {
        let { eulaId: e, applicationName: t, hasPreviouslyAcceptedEULA: r, forceShow: a, disabled: o, className: u, checkboxClassname: d, checkboxLabelClassname: g, finePrint: E, showPricingLink: v, showWithdrawalWaiver: y, isTrial: I, inReverseTrial: T, isDiscount: b, subscriptionPlan: S, finePrintClassname: A } = this.props,
            { hasAcceptedEULA: N, hasAcceptedWithdrawalWaiver: C } = this.state;
        return (l()(!I || null != S, 'subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true'), a || (null != e && !r) || y)
            ? (0, i.jsxs)('div', {
                  className: u,
                  children: [
                      y &&
                          (0, i.jsx)(c.vwX, {
                              className: m.formTitle,
                              children: h.intl.string(h.t.Ogvn5u)
                          }),
                      null != e && (a || !r)
                          ? (0, i.jsx)(c.XZJ, {
                                type: c.XZJ.Types.INVERTED,
                                value: N,
                                onChange: this.handleToggleEULAAcceptance,
                                disabled: o,
                                className: m.checkbox,
                                children: (0, i.jsx)('div', {
                                    className: m.checkboxLabel,
                                    children: h.intl.format(h.t.IodJKS, {
                                        applicationName: t,
                                        onClick: (t) => {
                                            (0, c.ZDy)(async () => {
                                                let { default: t } = await n.e('51868').then(n.bind(n, 796504));
                                                return (n) =>
                                                    (0, i.jsx)(t, {
                                                        eulaId: e,
                                                        ...n
                                                    });
                                            }),
                                                t.preventDefault();
                                        }
                                    })
                                })
                            })
                          : null,
                      null == E
                          ? null
                          : (0, i.jsx)('div', {
                                className: s()(m.finePrint, A),
                                children: E
                            }),
                      y
                          ? (0, i.jsxs)('div', {
                                className: u,
                                children: [
                                    (0, i.jsx)(c.XZJ, {
                                        type: c.XZJ.Types.INVERTED,
                                        value: C,
                                        onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                        disabled: o,
                                        className: s()(m.checkbox, d),
                                        children: (0, i.jsx)('div', {
                                            className: s()(m.checkboxLabel, g),
                                            children: h.intl.string(h.t.DFCVNz)
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        className: m.finePrint,
                                        children: h.intl.string(h.t.jhu6zs)
                                    })
                                ]
                            })
                          : null,
                      v &&
                          (0, i.jsxs)('div', {
                              className: m.finePrint,
                              children: ['*', h.intl.format(h.t['5zmY3N'], { documentationLink: f.Z.getArticleURL(p.BhN.LOCALIZED_PRICING) })]
                          }),
                      I &&
                          null != S &&
                          (0, i.jsx)(c.Text, {
                              variant: 'text-xs/medium',
                              color: 'interactive-normal',
                              children: h.intl.format(h.t['Hvo/Z2'], {
                                  buttonText: (0, _.W_)(null, S),
                                  interval: _.ZP.formatInterval(null == S ? void 0 : S.interval),
                                  cancelSubscriptionArticle: f.Z.getArticleURL(p.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: f.Z.getArticleURL(p.BhN.PAID_TERMS)
                              })
                          }),
                      T &&
                          null != S &&
                          (0, i.jsx)(c.Text, {
                              variant: 'text-xs/medium',
                              color: 'interactive-normal',
                              children: h.intl.format(h.t.Oo2FeX, {
                                  buttonText: (0, _.W_)(null, S),
                                  interval: _.ZP.formatInterval(null == S ? void 0 : S.interval),
                                  cancelSubscriptionArticle: f.Z.getArticleURL(p.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: f.Z.getArticleURL(p.BhN.PAID_TERMS)
                              })
                          }),
                      b &&
                          null != S &&
                          (0, i.jsx)(c.Text, {
                              variant: 'text-xs/medium',
                              color: 'interactive-normal',
                              children: h.intl.format(h.t['Z2c+aW'], {
                                  buttonText: (0, _.W_)(null, S),
                                  interval: _.ZP.formatInterval(null == S ? void 0 : S.interval),
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
let v = u.ZP.connectStores([d.Z], (e) => {
    let { eulaId: t } = e;
    return { hasPreviouslyAcceptedEULA: null != t && d.Z.hasAcceptedEULA(t) };
})(E);
