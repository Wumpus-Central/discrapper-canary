n.d(t, { Z: () => _ }), n(47120), n(411104);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(533307),
    o = n(600164),
    c = n(930114),
    d = n(246946),
    u = n(626135),
    m = n(669079),
    g = n(981631),
    p = n(388032),
    h = n(423953);
function f(e, t, n) {
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
function b(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class x extends i.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e }
        } = this.props;
        return N(b({}, e), { object: g.qAy.BUTTON_CTA });
    }
    render() {
        let { obscureInput: e } = this.props,
            { codeInput: t, submitting: n, hasError: i, isPromoCode: s } = this.state;
        return (0, r.jsxs)(a.hjN, {
            tag: a.RB0.H1,
            title: p.NW.string(p.t['il+VCg']),
            children: [
                (0, r.jsx)(a.vwX, { children: p.NW.string(p.t.SeKIoa) }),
                (0, r.jsx)('form', {
                    onSubmit: this.handleSubmit,
                    children: (0, r.jsxs)(o.Z, {
                        children: [
                            (0, r.jsx)(a.oil, {
                                type: e ? 'password' : 'text',
                                value: t,
                                onChange: this.handleChange,
                                placeholder: 'WUMP-AAAAA-BBBBB-CCCCC',
                                error: !s && i ? p.NW.string(p.t.Y11a2t) : null,
                                className: h.codeRedemptionInput
                            }),
                            (0, r.jsx)(a.zxk, {
                                type: 'submit',
                                submitting: n,
                                children: p.NW.string(p.t.KIpp7O)
                            })
                        ]
                    })
                }),
                s
                    ? (0, r.jsx)(a.Text, {
                          className: h.errorMessage,
                          variant: 'text-sm/normal',
                          children: p.NW.format(p.t.gPt3PD, {
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
            f(this, 'state', {
                codeInput: '',
                submitting: !1,
                hasError: !1,
                isPromoCode: !1
            }),
            f(this, 'handleChange', (e) => {
                this.setState({
                    codeInput: e,
                    hasError: !1
                });
            }),
            f(this, 'handleSubmit', async (e) => {
                e.preventDefault();
                let { codeInput: t } = this.state;
                if ('' === t) return;
                let n = (0, m.JT)(t);
                if (null == n) return void this.setState({ hasError: !0 });
                this.setState({ submitting: !0 });
                try {
                    let e = await l.Z.resolveGiftCode(n);
                    if (null != e && null != e.giftCode.promotion) throw (this.setState({ isPromoCode: !0 }), Error('Cannnot redeem promotion code as gift'));
                    u.default.track(g.rMx.OPEN_MODAL, {
                        type: 'gift_accept',
                        location: N(b({}, this.analyticsLocation), { object: g.qAy.BUTTON_CTA })
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
    let e = i.useContext(u.AnalyticsContext),
        t = (0, s.e7)([d.Z], () => d.Z.enabled);
    return (0, r.jsx)(x, {
        analyticsContext: e,
        obscureInput: t
    });
}
