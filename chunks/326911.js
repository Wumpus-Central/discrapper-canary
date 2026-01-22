n.d(t, { A: () => y }), n(896048), n(65821);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(869038),
    l = n(499454),
    c = n(351906),
    u = n(954571),
    d = n(45938),
    f = n(652215),
    p = n(985018);
function _(e, t, n) {
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
function h(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = "WUMP-AAAAA-BBBBB-CCCCC";
class b extends i.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return g(h({}, e), { object: f.ZSU.BUTTON_CTA });
    }
    render() {
        let { obscureInput: e } = this.props,
            { codeInput: t, submitting: n, hasError: i, isPromoCode: a } = this.state;
        return (0, r.jsx)(s.nVY, {
            label: p.intl.string(p.t["il+VCo"]),
            children: (0, r.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, r.jsxs)(s.M_l, {
                    children: [
                        (0, r.jsx)(s.ksK, {
                            label: p.intl.string(p.t.SeKIoS),
                            type: e ? "password" : "text",
                            value: t,
                            onChange: this.handleChange,
                            placeholder: E,
                            error: !a && i ? p.intl.string(p.t.Y11a2u) : null,
                            helperText: a
                                ? p.intl.format(p.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open("https://discord.com/billing/promotions/".concat(t));
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, r.jsx)(s.Button, {
                            variant: "primary",
                            text: p.intl.string(p.t.KIpp7M),
                            type: "submit",
                            loading: n,
                        }),
                    ],
                }),
            }),
        });
    }
    constructor(...e) {
        super(...e),
            _(this, "state", {
                codeInput: "",
                submitting: !1,
                hasError: !1,
                isPromoCode: !1,
            }),
            _(this, "handleChange", (e) => {
                this.setState({
                    codeInput: e,
                    hasError: !1,
                });
            }),
            _(this, "handleSubmit", async (e) => {
                e.preventDefault();
                let { codeInput: t } = this.state;
                if ("" === t) return;
                let n = (0, d.Vd)(t);
                if (null == n) return void this.setState({ hasError: !0 });
                this.setState({ submitting: !0 });
                try {
                    let e = await o.A.resolveGiftCode(n);
                    if (null != e && null != e.giftCode.promotion)
                        throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
                    u.default.track(f.HAw.OPEN_MODAL, {
                        type: "gift_accept",
                        location: g(h({}, this.analyticsLocation), { object: f.ZSU.BUTTON_CTA }),
                    }),
                        (0, l.h)({ processedCode: n }),
                        this.setState({ codeInput: "" });
                } catch (e) {
                    this.setState({ hasError: !0 });
                } finally {
                    this.setState({ submitting: !1 });
                }
            });
    }
}
function y() {
    let e = i.useContext(u.AnalyticsContext),
        t = (0, a.bG)([c.A], () => c.A.enabled);
    return (0, r.jsx)(b, {
        analyticsContext: e,
        obscureInput: t,
    });
}
