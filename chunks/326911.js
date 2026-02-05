n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    a = n(397927),
    l = n(869038),
    o = n(499454),
    c = n(351906),
    d = n(954571),
    u = n(45938),
    _ = n(652215),
    m = n(985018);
class A extends s.Component {
    state = { codeInput: "", submitting: !1, hasError: !1, isPromoCode: !1 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, object: _.ZSU.BUTTON_CTA };
    }
    handleChange = (e) => {
        this.setState({ codeInput: e, hasError: !1 });
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        let { codeInput: t } = this.state;
        if ("" === t) return;
        let n = (0, u.Vd)(t);
        if (null == n) return void this.setState({ hasError: !0 });
        this.setState({ submitting: !0 });
        try {
            let e = await l.A.resolveGiftCode(n);
            if (null != e && null != e.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            d.default.track(_.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: _.ZSU.BUTTON_CTA },
            }),
                (0, o.h)({ processedCode: n }),
                this.setState({ codeInput: "" });
        } catch (e) {
            this.setState({ hasError: !0 });
        } finally {
            this.setState({ submitting: !1 });
        }
    };
    render() {
        let { obscureInput: e } = this.props,
            { codeInput: t, submitting: n, hasError: s, isPromoCode: r } = this.state;
        return (0, i.jsx)(a.nVY, {
            label: m.intl.string(m.t["il+VCo"]),
            children: (0, i.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, i.jsxs)(a.M_l, {
                    children: [
                        (0, i.jsx)(a.ksK, {
                            label: m.intl.string(m.t.SeKIoS),
                            type: e ? "password" : "text",
                            value: t,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !r && s ? m.intl.string(m.t.Y11a2u) : null,
                            helperText: r
                                ? m.intl.format(m.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${t}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, i.jsx)(a.Button, {
                            variant: "primary",
                            text: m.intl.string(m.t.KIpp7M),
                            type: "submit",
                            loading: n,
                        }),
                    ],
                }),
            }),
        });
    }
}
function g() {
    let e = s.useContext(d.AnalyticsContext),
        t = (0, r.bG)([c.A], () => c.A.enabled);
    return (0, i.jsx)(A, { analyticsContext: e, obscureInput: t });
}
