n.d(t, { A: () => I });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(37766),
    o = n(85463),
    u = n(834730),
    d = n(887555),
    c = n(235986),
    g = n(37537),
    m = n(812745),
    A = n(202613),
    E = n(739508),
    h = n(935208),
    S = n(240248),
    T = n(375708),
    p = n(986485),
    x = n(849405);
function f(e) {
    let { children: t, className: n } = e,
        l = (0, g.c)("PaymentDescriptionIndicator"),
        s = (0, o.N)();
    return l
        ? (0, i.jsx)(u.E, { variant: s, color: "none", className: n, children: t })
        : (0, i.jsx)("div", { className: r()(n, x.Sv), children: t });
}
class I extends l.PureComponent {
    static defaultProps = {
        isForSubscription: !1,
        isDefault: !1,
        showSubtext: !1,
        showPaymentSourceIcon: !1,
        showLabels: !1,
    };
    get typeString() {
        let { paymentSource: e } = this.props;
        if (e instanceof A.SJ) return m.Ay.Types.PAYPAL;
        if (e instanceof A.A0) return m.Ay.Types.SOFORT;
        if (e instanceof A.YS) return e.isStripeLinkBankAccount ? m.Ay.Types.BANK : m.Ay.getType(e.brand);
        if (e instanceof A.Qh) return m.Ay.Types.GIROPAY;
        if (e instanceof A.Tu) return m.Ay.Types.PRZELEWY24;
        else if (e instanceof A.Ux) return m.Ay.Types.PAYSAFECARD;
        else if (e instanceof A.F_) return m.Ay.Types.GCASH;
        else if (e instanceof A.Xj) return m.Ay.Types.GRABPAY;
        else if (e instanceof A.am) return m.Ay.Types.MOMO_WALLET;
        else if (e instanceof A._1) return m.Ay.Types.VENMO;
        else if (e instanceof A.i6) return m.Ay.Types.KAKAOPAY;
        else if (e instanceof A.cg) return m.Ay.Types.GOPAY_WALLET;
        else if (e instanceof A.UG) return m.Ay.Types.BANCONTACT;
        else if (e instanceof A.rJ) return m.Ay.Types.EPS;
        else if (e instanceof A.EE) return m.Ay.Types.IDEAL;
        else if (e instanceof A.FQ) return m.Ay.Types.CASH_APP;
        else if (e instanceof A.Pw) return m.Ay.Types.APPLE;
        else if (e instanceof A.IE) return m.Ay.Types.PIX;
        else if (e instanceof A.WV) return m.Ay.Types.PIX;
        return m.Ay.Types.UNKNOWN;
    }
    getLabel(e) {
        return e instanceof A.YS
            ? e.isStripeLinkBankAccount
                ? T.intl.formatToPlainString(T.t.ixNwPL, {
                      date: new Date(h.default.extractTimestamp(e.id)).toLocaleDateString(),
                  })
                : T.intl.format(T.t["o/dsrL"], { brand: (0, S.$G)(e.brand), last_4: e.last4 })
            : e instanceof A.SJ
              ? T.intl.string(T.t["2dgEq+"])
              : e instanceof A.A0
                ? T.intl.string(T.t["edKX/1"])
                : e instanceof A.Qh
                  ? T.intl.string(T.t["y+0MQZ"])
                  : e instanceof A.Tu
                    ? T.intl.string(T.t.u25uL0)
                    : e instanceof A.Ux
                      ? T.intl.string(T.t.boznHN)
                      : e instanceof A.F_
                        ? T.intl.string(T.t.PjehcF)
                        : e instanceof A.Xj
                          ? T.intl.string(T.t.T5davE)
                          : e instanceof A.am
                            ? T.intl.string(T.t.J0A1Vk)
                            : e instanceof A._1
                              ? T.intl.string(T.t.jYOezc)
                              : e instanceof A.i6
                                ? T.intl.string(T.t.CSVexi)
                                : e instanceof A.cg
                                  ? T.intl.string(T.t["43J8JK"])
                                  : e instanceof A.UG
                                    ? T.intl.string(T.t["1ITkfq"])
                                    : e instanceof A.EE
                                      ? null == e.bank
                                          ? T.intl.string(T.t.nSbwqC)
                                          : T.intl.format(T.t["9kUlRU"], { bank: (0, d.o)(e.bank) })
                                      : e instanceof A.rJ
                                        ? T.intl.format(T.t.hSPoZw, { bank: (0, d.j)(e.bank) })
                                        : e instanceof A.FQ
                                          ? T.intl.string(T.t["+rbTmL"])
                                          : e instanceof A.Pw
                                            ? T.intl.string(T.t.RFi12i)
                                            : e instanceof A.LQ
                                              ? T.intl.string(p.default["/FQWfA"])
                                              : e instanceof A.IE
                                                ? T.intl.string(T.t.JG3WQU)
                                                : e instanceof A.WV
                                                  ? T.intl.string(T.t.JkKNss)
                                                  : T.intl.string(T.t.jdPblk);
    }
    renderDescription() {
        let { paymentSource: e, descriptionClassName: t } = this.props;
        return (0, i.jsx)(u.E, { className: t, variant: "text-md/semibold", children: this.getLabel(e) });
    }
    renderSubText() {
        let { paymentSource: e, locale: t } = this.props,
            n = null;
        return (
            e instanceof A.YS && !e.isStripeLinkBankAccount
                ? (n = T.intl.formatToPlainString(T.t["8rTTuf"], {
                      month: (0, E.eS)(e.expiresMonth, t),
                      year: e.expiresYear,
                  }))
                : e instanceof A.SJ || e instanceof A.A0 || e instanceof A.Tu
                  ? (n = e.email)
                  : e instanceof A._1
                    ? (n = "@" + e.username)
                    : e instanceof A.FQ && (n = e.username),
            n
        );
    }
    renderIcon() {
        let { paymentSource: e } = this.props;
        return e instanceof A.LQ ? (0, i.jsx)(a._, { size: "lg" }) : (0, i.jsx)(m.Ay, { type: this.typeString });
    }
    render() {
        let {
                isDefault: e,
                paymentSource: t,
                showSubtext: n,
                isForSubscription: l,
                showPaymentSourceIcon: s,
                showLabels: r,
            } = this.props,
            a = this.renderSubText();
        return (0, i.jsxs)(c.A, {
            children: [
                s && this.renderIcon(),
                (0, i.jsxs)(c.A, {
                    direction: c.A.Direction.VERTICAL,
                    className: x.Wi,
                    children: [
                        (0, i.jsxs)(c.A, {
                            align: c.A.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                r && e ? (0, i.jsx)(f, { className: x.Zn, children: T.intl.string(T.t.bBvAEH) }) : null,
                                l ? (0, i.jsx)(f, { className: x.NV, children: T.intl.string(T.t.YCrcPL) }) : null,
                                r && t.invalid
                                    ? (0, i.jsx)(f, { className: x.tG, children: T.intl.string(T.t["851k93"]) })
                                    : null,
                            ],
                        }),
                        n && null != a
                            ? (0, i.jsx)(u.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: x.z_,
                                  children: a,
                              })
                            : null,
                    ],
                }),
            ],
        });
    }
}
