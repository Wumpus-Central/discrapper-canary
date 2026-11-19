var i = n(477900),
    l = n(582128),
    s = n(834730),
    r = n(37766),
    a = n(887555),
    o = n(235986),
    u = n(812745),
    c = n(202613),
    d = n(949192),
    m = n(661191),
    g = n(240248),
    A = n(792996),
    E = n(140624),
    h = n(849405);
function f(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)(s.E, { variant: "body-xs/semibold", color: "none", className: n, children: t });
}
class p extends l.PureComponent {
    static defaultProps = {
        isForSubscription: !1,
        isDefault: !1,
        showSubtext: !1,
        showPaymentSourceIcon: !1,
        showLabels: !1,
    };
    get typeString() {
        let { paymentSource: e } = this.props;
        if (e instanceof c.SJ) return u.Ay.Types.PAYPAL;
        if (e instanceof c.A0) return u.Ay.Types.SOFORT;
        if (e instanceof c.YS) return e.isStripeLinkBankAccount ? u.Ay.Types.BANK : u.Ay.getType(e.brand);
        if (e instanceof c.Qh) return u.Ay.Types.GIROPAY;
        if (e instanceof c.Tu) return u.Ay.Types.PRZELEWY24;
        else if (e instanceof c.Ux) return u.Ay.Types.PAYSAFECARD;
        else if (e instanceof c.F_) return u.Ay.Types.GCASH;
        else if (e instanceof c.Xj) return u.Ay.Types.GRABPAY;
        else if (e instanceof c.am) return u.Ay.Types.MOMO_WALLET;
        else if (e instanceof c._1) return u.Ay.Types.VENMO;
        else if (e instanceof c.i6) return u.Ay.Types.KAKAOPAY;
        else if (e instanceof c.cg) return u.Ay.Types.GOPAY_WALLET;
        else if (e instanceof c.UG) return u.Ay.Types.BANCONTACT;
        else if (e instanceof c.rJ) return u.Ay.Types.EPS;
        else if (e instanceof c.EE) return u.Ay.Types.IDEAL;
        else if (e instanceof c.FQ) return u.Ay.Types.CASH_APP;
        else if (e instanceof c.Pw) return u.Ay.Types.APPLE;
        else if (e instanceof c.IE) return u.Ay.Types.PIX;
        else if (e instanceof c.WV) return u.Ay.Types.PIX;
        return u.Ay.Types.UNKNOWN;
    }
    getLabel(e) {
        return e instanceof c.YS
            ? e.isStripeLinkBankAccount
                ? A.intl.formatToPlainString(A.t.ixNwPL, {
                      date: new Date(m.default.extractTimestamp(e.id)).toLocaleDateString(),
                  })
                : A.intl.format(A.t["o/dsrL"], { brand: (0, g.$G)(e.brand), last_4: e.last4 })
            : e instanceof c.SJ
              ? A.intl.string(A.t["2dgEq+"])
              : e instanceof c.A0
                ? A.intl.string(A.t["edKX/1"])
                : e instanceof c.Qh
                  ? A.intl.string(A.t["y+0MQZ"])
                  : e instanceof c.Tu
                    ? A.intl.string(A.t.u25uL0)
                    : e instanceof c.Ux
                      ? A.intl.string(A.t.boznHN)
                      : e instanceof c.F_
                        ? A.intl.string(A.t.PjehcF)
                        : e instanceof c.Xj
                          ? A.intl.string(A.t.T5davE)
                          : e instanceof c.am
                            ? A.intl.string(A.t.J0A1Vk)
                            : e instanceof c._1
                              ? A.intl.string(A.t.jYOezc)
                              : e instanceof c.i6
                                ? A.intl.string(A.t.CSVexi)
                                : e instanceof c.cg
                                  ? A.intl.string(A.t["43J8JK"])
                                  : e instanceof c.UG
                                    ? A.intl.string(A.t["1ITkfq"])
                                    : e instanceof c.EE
                                      ? null == e.bank
                                          ? A.intl.string(A.t.nSbwqC)
                                          : A.intl.format(A.t["9kUlRU"], { bank: (0, a.o)(e.bank) })
                                      : e instanceof c.rJ
                                        ? A.intl.format(A.t.hSPoZw, { bank: (0, a.j)(e.bank) })
                                        : e instanceof c.FQ
                                          ? A.intl.string(A.t["+rbTmL"])
                                          : e instanceof c.Pw
                                            ? A.intl.string(A.t.RFi12i)
                                            : e instanceof c.LQ
                                              ? A.intl.string(E.default["/FQWfA"])
                                              : e instanceof c.IE
                                                ? A.intl.string(A.t.JG3WQU)
                                                : e instanceof c.WV
                                                  ? A.intl.string(A.t.JkKNss)
                                                  : A.intl.string(A.t.jdPblk);
    }
    renderDescription() {
        let { paymentSource: e, descriptionClassName: t } = this.props;
        return (0, i.jsx)(s.E, { className: t, variant: "body-md/semibold", children: this.getLabel(e) });
    }
    renderSubText() {
        let { paymentSource: e, locale: t } = this.props,
            n = null;
        return (
            e instanceof c.YS && !e.isStripeLinkBankAccount
                ? (n = A.intl.formatToPlainString(A.t["8rTTuf"], {
                      month: (0, d.eS)(e.expiresMonth, t),
                      year: e.expiresYear,
                  }))
                : e instanceof c.SJ || e instanceof c.A0 || e instanceof c.Tu
                  ? (n = e.email)
                  : e instanceof c._1
                    ? (n = "@" + e.username)
                    : e instanceof c.FQ && (n = e.username),
            n
        );
    }
    renderIcon() {
        let { paymentSource: e } = this.props;
        return e instanceof c.LQ
            ? (0, i.jsx)(r.PaymentTypeGiftCardIcon, { size: "lg" })
            : (0, i.jsx)(u.Ay, { type: this.typeString });
    }
    render() {
        let {
                isDefault: e,
                paymentSource: t,
                showSubtext: n,
                isForSubscription: l,
                showPaymentSourceIcon: r,
                showLabels: a,
            } = this.props,
            u = this.renderSubText();
        return (0, i.jsxs)(o.A, {
            children: [
                r && this.renderIcon(),
                (0, i.jsxs)(o.A, {
                    direction: o.A.Direction.VERTICAL,
                    className: h.Wi,
                    children: [
                        (0, i.jsxs)(o.A, {
                            align: o.A.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                a && e ? (0, i.jsx)(f, { className: h.Zn, children: A.intl.string(A.t.bBvAEH) }) : null,
                                l ? (0, i.jsx)(f, { className: h.NV, children: A.intl.string(A.t.YCrcPL) }) : null,
                                a && t.invalid
                                    ? (0, i.jsx)(f, { className: h.tG, children: A.intl.string(A.t["851k93"]) })
                                    : null,
                            ],
                        }),
                        n && null != u
                            ? (0, i.jsx)(s.E, {
                                  variant: "body-sm/normal",
                                  color: "text-subtle",
                                  className: h.Sv,
                                  children: u,
                              })
                            : null,
                    ],
                }),
            ],
        });
    }
}
n.d(t, {}, { A: p });
