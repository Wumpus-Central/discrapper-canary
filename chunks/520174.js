n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(869038),
    o = n(459357),
    d = n(99696),
    c = n(499454),
    u = n(351906),
    m = n(954571),
    _ = n(45938),
    g = n(652215),
    x = n(985018);
class A extends s.Component {
    state = { codeInput: "", submitting: !1, hasError: !1, isPromoCode: !1 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, object: g.ZSU.BUTTON_CTA };
    }
    handleChange = (e) => {
        this.setState({ codeInput: e, hasError: !1 });
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        let { codeInput: t } = this.state;
        if ("" === t) return;
        let n = t.trim();
        this.setState({ submitting: !0 });
        try {
            if (this.props.acceptGiftCardRedemption)
                try {
                    await (0, d.Qp)(n),
                        (0, d.HF)({ initialCode: n, withRedemptionSuccessModal: !0 }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, _.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await r.A.resolveGiftCode(e);
            if (null != i && null != i.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            m.default.track(g.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: g.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: g.ZSU.BUTTON_CTA,
                },
            }),
                (0, c.h)({ processedCode: e }),
                this.setState({ codeInput: "" });
        } catch (e) {
            this.setState({ hasError: !0 });
        } finally {
            this.setState({ submitting: !1 });
        }
    };
    render() {
        let { obscureInput: e } = this.props,
            { codeInput: t, submitting: n, hasError: s, isPromoCode: l } = this.state;
        return (0, i.jsx)(a.nVY, {
            label: x.intl.string(x.t["il+VCo"]),
            children: (0, i.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, i.jsxs)(a.M_l, {
                    children: [
                        (0, i.jsx)(a.ksK, {
                            label: x.intl.string(x.t.SeKIoS),
                            type: e ? "password" : "text",
                            value: t,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !l && s ? x.intl.string(x.t.Y11a2u) : null,
                            helperText: l
                                ? x.intl.format(x.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${t}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, i.jsx)(a.Button, {
                            variant: "primary",
                            text: x.intl.string(x.t.KIpp7M),
                            type: "submit",
                            loading: n,
                        }),
                    ],
                }),
            }),
        });
    }
}
function h() {
    let { enabled: e } = (0, o.c)({ location: "UserSettingsBilling" }),
        t = s.useContext(m.AnalyticsContext),
        n = (0, l.bG)([u.A], () => u.A.enabled);
    return (0, i.jsx)(A, { analyticsContext: t, obscureInput: n, acceptGiftCardRedemption: e });
}
