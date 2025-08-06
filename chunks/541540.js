(n.d(t, { Z: () => E }), n(388685), n(415506));
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(755721),
    l = n(481060),
    o = n(533307),
    c = n(600164),
    d = n(930114),
    u = n(246946),
    m = n(626135),
    p = n(669079),
    g = n(981631),
    h = n(388032),
    f = n(423953);
function b(e, t, n) {
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
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                b(e, t, n[t]);
            }));
    }
    return e;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class j extends r.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e }
        } = this.props;
        return _(x({}, e), { object: g.qAy.BUTTON_CTA });
    }
    render() {
        let { obscureInput: e } = this.props,
            { codeInput: t, submitting: n, hasError: r, isPromoCode: s } = this.state;
        return (0, i.jsxs)(l.hjN, {
            tag: l.RB0.H1,
            title: h.intl.string(h.t['il+VCg']),
            children: [
                (0, i.jsx)(l.vwX, { children: h.intl.string(h.t.SeKIoa) }),
                (0, i.jsx)('form', {
                    onSubmit: this.handleSubmit,
                    children: (0, i.jsxs)(c.Z, {
                        children: [
                            (0, i.jsx)(a.Is, {
                                type: e ? 'password' : 'text',
                                value: t,
                                onChange: this.handleChange,
                                placeholder: 'WUMP-AAAAA-BBBBB-CCCCC',
                                error: !s && r ? h.intl.string(h.t.Y11a2t) : null,
                                className: f.codeRedemptionInput
                            }),
                            (0, i.jsx)(l.zxk, {
                                variant: 'primary',
                                text: h.intl.string(h.t.KIpp7O),
                                type: 'submit',
                                loading: n
                            })
                        ]
                    })
                }),
                s
                    ? (0, i.jsx)(l.Text, {
                          className: f.errorMessage,
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
        (super(...e),
            b(this, 'state', {
                codeInput: '',
                submitting: !1,
                hasError: !1,
                isPromoCode: !1
            }),
            b(this, 'handleChange', (e) => {
                this.setState({
                    codeInput: e,
                    hasError: !1
                });
            }),
            b(this, 'handleSubmit', async (e) => {
                e.preventDefault();
                let { codeInput: t } = this.state;
                if ('' === t) return;
                let n = (0, p.JT)(t);
                if (null == n) return void this.setState({ hasError: !0 });
                this.setState({ submitting: !0 });
                try {
                    let e = await o.Z.resolveGiftCode(n);
                    if (null != e && null != e.giftCode.promotion) throw (this.setState({ isPromoCode: !0 }), Error('Cannnot redeem promotion code as gift'));
                    (m.default.track(g.rMx.OPEN_MODAL, {
                        type: 'gift_accept',
                        location: _(x({}, this.analyticsLocation), { object: g.qAy.BUTTON_CTA })
                    }),
                        (0, d.V)({ processedCode: n }),
                        this.setState({ codeInput: '' }));
                } catch (e) {
                    this.setState({ hasError: !0 });
                } finally {
                    this.setState({ submitting: !1 });
                }
            }));
    }
}
function E() {
    let e = r.useContext(m.AnalyticsContext),
        t = (0, s.e7)([u.Z], () => u.Z.enabled);
    return (0, i.jsx)(j, {
        analyticsContext: e,
        obscureInput: t
    });
}
