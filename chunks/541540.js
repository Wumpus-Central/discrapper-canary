n.d(t, { Z: () => E }), n(388685), n(415506);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(533307),
    o = n(600164),
    c = n(930114),
    d = n(246946),
    u = n(626135),
    m = n(669079),
    p = n(981631),
    g = n(388032),
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
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                f(e, t, n[t]);
            });
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
class x extends r.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e }
        } = this.props;
        return _(b({}, e), { object: p.qAy.BUTTON_CTA });
    }
    render() {
        let { obscureInput: e } = this.props,
            { codeInput: t, submitting: n, hasError: r, isPromoCode: s } = this.state;
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
                                error: !s && r ? g.intl.string(g.t.Y11a2t) : null,
                                className: h.codeRedemptionInput
                            }),
                            (0, i.jsx)(l.zxk, {
                                type: 'submit',
                                submitting: n,
                                children: g.intl.string(g.t.KIpp7O)
                            })
                        ]
                    })
                }),
                s
                    ? (0, i.jsx)(l.Text, {
                          className: h.errorMessage,
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
                    let e = await a.Z.resolveGiftCode(n);
                    if (null != e && null != e.giftCode.promotion) throw (this.setState({ isPromoCode: !0 }), Error('Cannnot redeem promotion code as gift'));
                    u.default.track(p.rMx.OPEN_MODAL, {
                        type: 'gift_accept',
                        location: _(b({}, this.analyticsLocation), { object: p.qAy.BUTTON_CTA })
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
    let e = r.useContext(u.AnalyticsContext),
        t = (0, s.e7)([d.Z], () => d.Z.enabled);
    return (0, i.jsx)(x, {
        analyticsContext: e,
        obscureInput: t
    });
}
