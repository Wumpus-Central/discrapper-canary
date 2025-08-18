n.d(t, { Z: () => _ }), n(388685), n(415506);
var i = n(951288),
    r = n(647438),
    s = n(442837),
    a = n(481060),
    l = n(533307),
    o = n(930114),
    c = n(246946),
    d = n(626135),
    u = n(669079),
    m = n(981631),
    p = n(388032),
    g = n(954655);
function h(e, t, n) {
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
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
            analyticsContext: { location: e },
        } = this.props;
        return b(f({}, e), { object: m.qAy.BUTTON_CTA });
    }
    render() {
        let { obscureInput: e } = this.props,
            { codeInput: t, submitting: n, hasError: r, isPromoCode: s } = this.state;
        return (0, i.jsxs)(a.hjN, {
            tag: a.RB0.H1,
            title: p.intl.string(p.t["il+VCg"]),
            children: [
                (0, i.jsx)(a.vwX, { children: p.intl.string(p.t.SeKIoa) }),
                (0, i.jsx)("form", {
                    onSubmit: this.handleSubmit,
                    children: (0, i.jsxs)(a.Kqy, {
                        direction: "horizontal",
                        gap: 8,
                        children: [
                            (0, i.jsx)(a.oil, {
                                type: e ? "password" : "text",
                                value: t,
                                onChange: this.handleChange,
                                placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                                error: !s && r ? p.intl.string(p.t.Y11a2t) : null,
                                fullWidth: !0,
                            }),
                            (0, i.jsx)(a.zxk, {
                                variant: "primary",
                                text: p.intl.string(p.t.KIpp7O),
                                type: "submit",
                                loading: n,
                            }),
                        ],
                    }),
                }),
                s
                    ? (0, i.jsx)(a.Text, {
                          className: g.errorMessage,
                          variant: "text-sm/normal",
                          children: p.intl.format(p.t.gPt3PD, {
                              promoLink: () => {
                                  window.open("https://discord.com/billing/promotions/".concat(t));
                              },
                          }),
                      })
                    : null,
            ],
        });
    }
    constructor(...e) {
        super(...e),
            h(this, "state", {
                codeInput: "",
                submitting: !1,
                hasError: !1,
                isPromoCode: !1,
            }),
            h(this, "handleChange", (e) => {
                this.setState({
                    codeInput: e,
                    hasError: !1,
                });
            }),
            h(this, "handleSubmit", async (e) => {
                e.preventDefault();
                let { codeInput: t } = this.state;
                if ("" === t) return;
                let n = (0, u.JT)(t);
                if (null == n) return void this.setState({ hasError: !0 });
                this.setState({ submitting: !0 });
                try {
                    let e = await l.Z.resolveGiftCode(n);
                    if (null != e && null != e.giftCode.promotion)
                        throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
                    d.default.track(m.rMx.OPEN_MODAL, {
                        type: "gift_accept",
                        location: b(f({}, this.analyticsLocation), { object: m.qAy.BUTTON_CTA }),
                    }),
                        (0, o.V)({ processedCode: n }),
                        this.setState({ codeInput: "" });
                } catch (e) {
                    this.setState({ hasError: !0 });
                } finally {
                    this.setState({ submitting: !1 });
                }
            });
    }
}
function _() {
    let e = r.useContext(d.AnalyticsContext),
        t = (0, s.e7)([c.Z], () => c.Z.enabled);
    return (0, i.jsx)(x, {
        analyticsContext: e,
        obscureInput: t,
    });
}
