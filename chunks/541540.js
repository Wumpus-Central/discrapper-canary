n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120),
    n(411104);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(533307),
    o = n(600164),
    c = n(930114),
    d = n(246946),
    u = n(626135),
    m = n(669079),
    g = n(981631),
    h = n(388032),
    p = n(449986);
function x(e, t, n) {
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
class f extends r.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e }
        } = this.props;
        return {
            ...e,
            object: g.qAy.BUTTON_CTA
        };
    }
    render() {
        let { obscureInput: e } = this.props,
            { codeInput: t, submitting: n, hasError: r, isPromoCode: s } = this.state;
        return (0, i.jsxs)(a.FormSection, {
            tag: a.FormTitleTags.H1,
            title: h.intl.string(h.t['il+VCg']),
            children: [
                (0, i.jsx)(a.FormTitle, { children: h.intl.string(h.t.SeKIoa) }),
                (0, i.jsx)('form', {
                    onSubmit: this.handleSubmit,
                    children: (0, i.jsxs)(o.Z, {
                        children: [
                            (0, i.jsx)(a.TextInput, {
                                type: e ? 'password' : 'text',
                                value: t,
                                onChange: this.handleChange,
                                placeholder: 'WUMP-AAAAA-BBBBB-CCCCC',
                                error: !s && r ? h.intl.string(h.t.Y11a2t) : null,
                                className: p.codeRedemptionInput
                            }),
                            (0, i.jsx)(a.Button, {
                                type: 'submit',
                                submitting: n,
                                children: h.intl.string(h.t.KIpp7O)
                            })
                        ]
                    })
                }),
                s
                    ? (0, i.jsx)(a.Text, {
                          className: p.errorMessage,
                          variant: 'text-sm/normal',
                          children: h.intl.format(h.t.gPt3PD, {
                              promoLink: () => {
                                  window.open('https://discord.com/billing/promotions/'.concat(t));
                              }
                          })
                      })
                    : null
            ]
        });
    }
    constructor(...e) {
        super(...e),
            x(this, 'state', {
                codeInput: '',
                submitting: !1,
                hasError: !1,
                isPromoCode: !1
            }),
            x(this, 'handleChange', (e) => {
                this.setState({
                    codeInput: e,
                    hasError: !1
                });
            }),
            x(this, 'handleSubmit', async (e) => {
                e.preventDefault();
                let { codeInput: t } = this.state;
                if ('' === t) return;
                let n = (0, m.JT)(t);
                if (null == n) {
                    this.setState({ hasError: !0 });
                    return;
                }
                this.setState({ submitting: !0 });
                try {
                    let e = await l.Z.resolveGiftCode(n);
                    if (null != e && null != e.giftCode.promotion) throw (this.setState({ isPromoCode: !0 }), Error('Cannnot redeem promotion code as gift'));
                    u.default.track(g.rMx.OPEN_MODAL, {
                        type: 'gift_accept',
                        location: {
                            ...this.analyticsLocation,
                            object: g.qAy.BUTTON_CTA
                        }
                    }),
                        (0, c.V)({ processedCode: n }),
                        this.setState({ codeInput: '' });
                } catch (e) {
                    this.setState({ hasError: !0 });
                } finally {
                    this.setState({ submitting: !1 });
                }
            });
    }
}
function _() {
    let e = r.useContext(u.AnalyticsContext),
        t = (0, s.e7)([d.Z], () => d.Z.enabled);
    return (0, i.jsx)(f, {
        analyticsContext: e,
        obscureInput: t
    });
}
