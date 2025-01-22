var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(512722),
    c = r.n(u),
    d = r(442837),
    f = r(481060),
    p = r(850840),
    h = r(63063),
    _ = r(74538),
    m = r(981631),
    g = r(388032),
    E = r(175782);
function v(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class y extends o.Component {
    componentDidMount() {
        this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state));
    }
    componentDidUpdate(e, n) {
        let r = this.hasAcceptedNeccessaryTerms(e, n),
            i = this.hasAcceptedNeccessaryTerms(this.props, this.state);
        i !== r && this.props.onChange(i);
    }
    hasAcceptedNeccessaryTerms(e, n) {
        return (null == e.eulaId || n.hasAcceptedEULA) && (!e.showWithdrawalWaiver || n.hasAcceptedWithdrawalWaiver);
    }
    render() {
        let { eulaId: e, applicationName: n, hasPreviouslyAcceptedEULA: i, forceShow: o, disabled: s, className: u, checkboxClassname: d, checkboxLabelClassname: p, finePrint: v, showPricingLink: y, showWithdrawalWaiver: b, isTrial: I, inReverseTrial: T, isDiscount: S, subscriptionPlan: A, finePrintClassname: C } = this.props,
            { hasAcceptedEULA: N, hasAcceptedWithdrawalWaiver: R } = this.state;
        return (c()(!I || null != A, 'subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true'), o || (null != e && !i) || b)
            ? (0, a.jsxs)('div', {
                  className: u,
                  children: [
                      b &&
                          (0, a.jsx)(f.FormTitle, {
                              className: E.formTitle,
                              children: g.intl.string(g.t.Ogvn5u)
                          }),
                      null != e && (o || !i)
                          ? (0, a.jsx)(f.Checkbox, {
                                type: f.Checkbox.Types.INVERTED,
                                value: N,
                                onChange: this.handleToggleEULAAcceptance,
                                disabled: s,
                                className: E.checkbox,
                                children: (0, a.jsx)('div', {
                                    className: E.checkboxLabel,
                                    children: g.intl.format(g.t.IodJKS, {
                                        applicationName: n,
                                        onClick: (n) => {
                                            (0, f.openModalLazy)(async () => {
                                                let { default: n } = await r.e('51868').then(r.bind(r, 796504));
                                                return (r) =>
                                                    (0, a.jsx)(n, {
                                                        eulaId: e,
                                                        ...r
                                                    });
                                            }),
                                                n.preventDefault();
                                        }
                                    })
                                })
                            })
                          : null,
                      null == v
                          ? null
                          : (0, a.jsx)('div', {
                                className: l()(E.finePrint, C),
                                children: v
                            }),
                      b
                          ? (0, a.jsxs)('div', {
                                className: u,
                                children: [
                                    (0, a.jsx)(f.Checkbox, {
                                        type: f.Checkbox.Types.INVERTED,
                                        value: R,
                                        onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                        disabled: s,
                                        className: l()(E.checkbox, d),
                                        children: (0, a.jsx)('div', {
                                            className: l()(E.checkboxLabel, p),
                                            children: g.intl.string(g.t.DFCVNz)
                                        })
                                    }),
                                    (0, a.jsx)('div', {
                                        className: E.finePrint,
                                        children: g.intl.string(g.t.jhu6zs)
                                    })
                                ]
                            })
                          : null,
                      y &&
                          (0, a.jsxs)('div', {
                              className: E.finePrint,
                              children: ['*', g.intl.format(g.t['5zmY3N'], { documentationLink: h.Z.getArticleURL(m.BhN.LOCALIZED_PRICING) })]
                          }),
                      I &&
                          null != A &&
                          (0, a.jsx)(f.Text, {
                              variant: 'text-xs/medium',
                              color: 'interactive-normal',
                              children: g.intl.format(g.t['Hvo/Z2'], {
                                  buttonText: (0, _.W_)(null, A),
                                  interval: _.ZP.formatInterval(null == A ? void 0 : A.interval),
                                  cancelSubscriptionArticle: h.Z.getArticleURL(m.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: h.Z.getArticleURL(m.BhN.PAID_TERMS)
                              })
                          }),
                      T &&
                          null != A &&
                          (0, a.jsx)(f.Text, {
                              variant: 'text-xs/medium',
                              color: 'interactive-normal',
                              children: g.intl.format(g.t.Oo2FeX, {
                                  buttonText: (0, _.W_)(null, A),
                                  interval: _.ZP.formatInterval(null == A ? void 0 : A.interval),
                                  cancelSubscriptionArticle: h.Z.getArticleURL(m.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: h.Z.getArticleURL(m.BhN.PAID_TERMS)
                              })
                          }),
                      S &&
                          null != A &&
                          (0, a.jsx)(f.Text, {
                              variant: 'text-xs/medium',
                              color: 'interactive-normal',
                              children: g.intl.format(g.t['Z2c+aW'], {
                                  buttonText: (0, _.W_)(null, A),
                                  interval: _.ZP.formatInterval(null == A ? void 0 : A.interval),
                                  cancelSubscriptionArticle: h.Z.getArticleURL(m.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: h.Z.getArticleURL(m.BhN.PAID_TERMS)
                              })
                          })
                  ]
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            v(this, 'state', {
                hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
                hasAcceptedWithdrawalWaiver: !1
            }),
            v(this, 'handleToggleEUWithdralWaiverAcceptance', (e, n) => {
                this.setState({ hasAcceptedWithdrawalWaiver: n });
            }),
            v(this, 'handleToggleEULAAcceptance', (e, n) => {
                this.setState({ hasAcceptedEULA: n });
            });
    }
}
n.Z = d.ZP.connectStores([p.Z], (e) => {
    let { eulaId: n } = e;
    return { hasPreviouslyAcceptedEULA: null != n && p.Z.hasAcceptedEULA(n) };
})(y);
