n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(270003),
    r = n(532446),
    o = n(292666),
    d = n(821609),
    u = n(869038),
    c = n(459357),
    g = n(99696),
    m = n(499454),
    _ = n(351906),
    A = n(954571),
    h = n(45938),
    p = n(652215),
    x = n(985018);
class E extends s.Component {
    state = { codeInput: "", submitting: !1, hasError: !1, isPromoCode: !1 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, object: p.ZSU.BUTTON_CTA };
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
                    await (0, g.Qp)(n),
                        (0, g.HF)({ initialCode: n, withRedemptionSuccessModal: !0 }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, h.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await u.A.resolveGiftCode(e);
            if (null != i && null != i.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            A.default.track(p.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: p.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: p.ZSU.BUTTON_CTA,
                },
            }),
                (0, m.h)({ processedCode: e }),
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
        return (0, i.jsx)(a.n, {
            label: x.intl.string(x.t["il+VCo"]),
            children: (0, i.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, i.jsxs)(r.M, {
                    children: [
                        (0, i.jsx)(o.k, {
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
                        (0, i.jsx)(d.$, {
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
function T() {
    let { enabled: e } = (0, c.c)({ location: "UserSettingsBilling" }),
        t = s.useContext(A.AnalyticsContext),
        n = (0, l.bG)([_.A], () => _.A.enabled);
    return (0, i.jsx)(E, { analyticsContext: t, obscureInput: n, acceptGiftCardRedemption: e });
}
