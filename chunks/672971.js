t(47120);
var i = t(200651),
    r = t(192379),
    a = t(120356),
    l = t.n(a),
    s = t(512722),
    o = t.n(s),
    c = t(442837),
    u = t(481060),
    d = t(850840),
    p = t(63063),
    f = t(74538),
    m = t(981631),
    b = t(388032),
    v = t(175782);
function h(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
class P extends r.Component {
    componentDidMount() {
        this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state));
    }
    componentDidUpdate(e, n) {
        let t = this.hasAcceptedNeccessaryTerms(e, n),
            i = this.hasAcceptedNeccessaryTerms(this.props, this.state);
        i !== t && this.props.onChange(i);
    }
    hasAcceptedNeccessaryTerms(e, n) {
        return (null == e.eulaId || n.hasAcceptedEULA) && (!e.showWithdrawalWaiver || n.hasAcceptedWithdrawalWaiver);
    }
    render() {
        let { eulaId: e, applicationName: n, hasPreviouslyAcceptedEULA: r, forceShow: a, disabled: s, className: c, checkboxClassname: d, checkboxLabelClassname: h, finePrint: P, showPricingLink: A, showWithdrawalWaiver: T, isTrial: g, inReverseTrial: y, isDiscount: E, subscriptionPlan: I, finePrintClassname: x } = this.props,
            { hasAcceptedEULA: _, hasAcceptedWithdrawalWaiver: N } = this.state;
        return (o()(!g || null != I, 'subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true'), a || (null != e && !r) || T)
            ? (0, i.jsxs)('div', {
                  className: c,
                  children: [
                      T &&
                          (0, i.jsx)(u.FormTitle, {
                              className: v.formTitle,
                              children: b.intl.string(b.t.Ogvn5u)
                          }),
                      null != e && (a || !r)
                          ? (0, i.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                value: _,
                                onChange: this.handleToggleEULAAcceptance,
                                disabled: s,
                                className: v.checkbox,
                                children: (0, i.jsx)('div', {
                                    className: v.checkboxLabel,
                                    children: b.intl.format(b.t.IodJKS, {
                                        applicationName: n,
                                        onClick: (n) => {
                                            (0, u.openModalLazy)(async () => {
                                                let { default: n } = await t.e('51868').then(t.bind(t, 796504));
                                                return (t) =>
                                                    (0, i.jsx)(n, {
                                                        eulaId: e,
                                                        ...t
                                                    });
                                            }),
                                                n.preventDefault();
                                        }
                                    })
                                })
                            })
                          : null,
                      null == P
                          ? null
                          : (0, i.jsx)('div', {
                                className: l()(v.finePrint, x),
                                children: P
                            }),
                      T
                          ? (0, i.jsxs)('div', {
                                className: c,
                                children: [
                                    (0, i.jsx)(u.Checkbox, {
                                        type: u.Checkbox.Types.INVERTED,
                                        value: N,
                                        onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                        disabled: s,
                                        className: l()(v.checkbox, d),
                                        children: (0, i.jsx)('div', {
                                            className: l()(v.checkboxLabel, h),
                                            children: b.intl.string(b.t.DFCVNz)
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        className: v.finePrint,
                                        children: b.intl.string(b.t.jhu6zs)
                                    })
                                ]
                            })
                          : null,
                      A &&
                          (0, i.jsxs)('div', {
                              className: v.finePrint,
                              children: ['*', b.intl.format(b.t['5zmY3N'], { documentationLink: p.Z.getArticleURL(m.BhN.LOCALIZED_PRICING) })]
                          }),
                      g &&
                          null != I &&
                          (0, i.jsx)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'interactive-normal',
                              children: b.intl.format(b.t['Hvo/Z2'], {
                                  buttonText: (0, f.W_)(null, I),
                                  interval: f.ZP.formatInterval(null == I ? void 0 : I.interval),
                                  cancelSubscriptionArticle: p.Z.getArticleURL(m.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: p.Z.getArticleURL(m.BhN.PAID_TERMS)
                              })
                          }),
                      y &&
                          null != I &&
                          (0, i.jsx)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'interactive-normal',
                              children: b.intl.format(b.t.Oo2FeX, {
                                  buttonText: (0, f.W_)(null, I),
                                  interval: f.ZP.formatInterval(null == I ? void 0 : I.interval),
                                  cancelSubscriptionArticle: p.Z.getArticleURL(m.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: p.Z.getArticleURL(m.BhN.PAID_TERMS)
                              })
                          }),
                      E &&
                          null != I &&
                          (0, i.jsx)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'interactive-normal',
                              children: b.intl.format(b.t['Z2c+aW'], {
                                  buttonText: (0, f.W_)(null, I),
                                  interval: f.ZP.formatInterval(null == I ? void 0 : I.interval),
                                  cancelSubscriptionArticle: p.Z.getArticleURL(m.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: p.Z.getArticleURL(m.BhN.PAID_TERMS)
                              })
                          })
                  ]
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            h(this, 'state', {
                hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
                hasAcceptedWithdrawalWaiver: !1
            }),
            h(this, 'handleToggleEUWithdralWaiverAcceptance', (e, n) => {
                this.setState({ hasAcceptedWithdrawalWaiver: n });
            }),
            h(this, 'handleToggleEULAAcceptance', (e, n) => {
                this.setState({ hasAcceptedEULA: n });
            });
    }
}
n.Z = c.ZP.connectStores([d.Z], (e) => {
    let { eulaId: n } = e;
    return { hasPreviouslyAcceptedEULA: null != n && d.Z.hasAcceptedEULA(n) };
})(P);
