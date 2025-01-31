n.d(t, { Z: () => E }), n(47120), n(411104);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(533307),
    o = n(600164),
    c = n(930114),
    d = n(246946),
    u = n(626135),
    m = n(669079),
    h = n(981631),
    g = n(388032),
    _ = n(621550);
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
class p extends s.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e }
        } = this.props;
        return {
            ...e,
            object: h.qAy.BUTTON_CTA
        };
    }
    render() {
        let { obscureInput: e } = this.props,
            { codeInput: t, submitting: n, hasError: s, isPromoCode: r } = this.state;
        return (0, i.jsxs)(l.hjN, {
            tag: l.RB0.H1,
            title: g.intl.string(g.t['il+VCg']),
            children: [
                (0, i.jsx)(l.vwX, { children: g.intl.string(g.t.SeKIoa) }),
                (0, i.jsx)('form', {
                    onSubmit: this.handleSubmit,
                    children: (0, i.jsxs)(o.Z, {
                        children: [
                            (0, i.jsx)(l.oil, {
                                type: e ? 'password' : 'text',
                                value: t,
                                onChange: this.handleChange,
                                placeholder: 'WUMP-AAAAA-BBBBB-CCCCC',
                                error: !r && s ? g.intl.string(g.t.Y11a2t) : null,
                                className: _.codeRedemptionInput
                            }),
                            (0, i.jsx)(l.zxk, {
                                type: 'submit',
                                submitting: n,
                                children: g.intl.string(g.t.KIpp7O)
                            })
                        ]
                    })
                }),
                r
                    ? (0, i.jsx)(l.Text, {
                          className: _.errorMessage,
                          variant: 'text-sm/normal',
                          children: g.intl.format(g.t.gPt3PD, {
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
                    let e = await a.Z.resolveGiftCode(n);
                    if (null != e && null != e.giftCode.promotion) throw (this.setState({ isPromoCode: !0 }), Error('Cannnot redeem promotion code as gift'));
                    u.default.track(h.rMx.OPEN_MODAL, {
                        type: 'gift_accept',
                        location: {
                            ...this.analyticsLocation,
                            object: h.qAy.BUTTON_CTA
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
function E() {
    let e = s.useContext(u.AnalyticsContext),
        t = (0, r.e7)([d.Z], () => d.Z.enabled);
    return (0, i.jsx)(p, {
        analyticsContext: e,
        obscureInput: t
    });
}
