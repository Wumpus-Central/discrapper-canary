n.d(t, { Z: () => O }), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(533307),
    l = n(930114),
    c = n(246946),
    u = n(626135),
    d = n(669079),
    f = n(981631),
    _ = n(388032),
    p = n(954655);
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
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = "WUMP-AAAAA-BBBBB-CCCCC";
class y extends i.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return E(m({}, e), { object: f.qAy.BUTTON_CTA });
    }
    render() {
        let { obscureInput: e } = this.props,
            { codeInput: t, submitting: n, hasError: i, isPromoCode: a } = this.state;
        return (0, r.jsxs)(o.hjN, {
            tag: o.RB0.H1,
            title: _.intl.string(_.t["il+VCg"]),
            children: [
                (0, r.jsx)(o.vwX, { children: _.intl.string(_.t.SeKIoa) }),
                (0, r.jsx)("form", {
                    onSubmit: this.handleSubmit,
                    children: (0, r.jsxs)(o.Kqy, {
                        direction: "horizontal",
                        gap: 8,
                        children: [
                            (0, r.jsx)(o.oil, {
                                type: e ? "password" : "text",
                                value: t,
                                onChange: this.handleChange,
                                placeholder: b,
                                error: !a && i ? _.intl.string(_.t.Y11a2t) : null,
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(o.zxk, {
                                variant: "primary",
                                text: _.intl.string(_.t.KIpp7O),
                                type: "submit",
                                loading: n,
                            }),
                        ],
                    }),
                }),
                a
                    ? (0, r.jsx)(o.Text, {
                          className: p.errorMessage,
                          variant: "text-sm/normal",
                          children: _.intl.format(_.t.gPt3PD, {
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
                let n = (0, d.JT)(t);
                if (null == n) return void this.setState({ hasError: !0 });
                this.setState({ submitting: !0 });
                try {
                    let e = await s.Z.resolveGiftCode(n);
                    if (null != e && null != e.giftCode.promotion)
                        throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
                    u.default.track(f.rMx.OPEN_MODAL, {
                        type: "gift_accept",
                        location: E(m({}, this.analyticsLocation), { object: f.qAy.BUTTON_CTA }),
                    }),
                        (0, l.V)({ processedCode: n }),
                        this.setState({ codeInput: "" });
                } catch (e) {
                    this.setState({ hasError: !0 });
                } finally {
                    this.setState({ submitting: !1 });
                }
            });
    }
}
function O() {
    let e = i.useContext(u.AnalyticsContext),
        t = (0, a.e7)([c.Z], () => c.Z.enabled);
    return (0, r.jsx)(y, {
        analyticsContext: e,
        obscureInput: t,
    });
}
