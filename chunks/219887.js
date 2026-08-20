n.d(t, { A: () => S });
var i = n(477900),
    l = n(582128),
    s = n(37766),
    r = n(834730),
    a = n(887555),
    o = n(235986),
    u = n(812745),
    d = n(202613),
    c = n(739508),
    g = n(935208),
    m = n(240248),
    A = n(375708),
    h = n(832505),
    E = n(849405);
class S extends l.PureComponent {
    static defaultProps = {
        isForSubscription: !1,
        isDefault: !1,
        showSubtext: !1,
        showPaymentSourceIcon: !1,
        showLabels: !1,
    };
    get typeString() {
        let { paymentSource: e } = this.props;
        if (e instanceof d.SJ) return u.Ay.Types.PAYPAL;
        if (e instanceof d.A0) return u.Ay.Types.SOFORT;
        if (e instanceof d.YS) return e.isStripeLinkBankAccount ? u.Ay.Types.BANK : u.Ay.getType(e.brand);
        if (e instanceof d.Qh) return u.Ay.Types.GIROPAY;
        if (e instanceof d.Tu) return u.Ay.Types.PRZELEWY24;
        else if (e instanceof d.Ux) return u.Ay.Types.PAYSAFECARD;
        else if (e instanceof d.F_) return u.Ay.Types.GCASH;
        else if (e instanceof d.Xj) return u.Ay.Types.GRABPAY;
        else if (e instanceof d.am) return u.Ay.Types.MOMO_WALLET;
        else if (e instanceof d._1) return u.Ay.Types.VENMO;
        else if (e instanceof d.i6) return u.Ay.Types.KAKAOPAY;
        else if (e instanceof d.cg) return u.Ay.Types.GOPAY_WALLET;
        else if (e instanceof d.UG) return u.Ay.Types.BANCONTACT;
        else if (e instanceof d.rJ) return u.Ay.Types.EPS;
        else if (e instanceof d.EE) return u.Ay.Types.IDEAL;
        else if (e instanceof d.FQ) return u.Ay.Types.CASH_APP;
        else if (e instanceof d.Pw) return u.Ay.Types.APPLE;
        else if (e instanceof d.IE) return u.Ay.Types.PIX;
        return u.Ay.Types.UNKNOWN;
    }
    getLabel(e) {
        return e instanceof d.YS
            ? e.isStripeLinkBankAccount
                ? A.intl.formatToPlainString(A.t.ixNwPL, {
                      date: new Date(g.default.extractTimestamp(e.id)).toLocaleDateString(),
                  })
                : A.intl.format(A.t["o/dsrL"], { brand: (0, m.$G)(e.brand), last_4: e.last4 })
            : e instanceof d.SJ
              ? A.intl.string(A.t["2dgEq+"])
              : e instanceof d.A0
                ? A.intl.string(A.t["edKX/1"])
                : e instanceof d.Qh
                  ? A.intl.string(A.t["y+0MQZ"])
                  : e instanceof d.Tu
                    ? A.intl.string(A.t.u25uL0)
                    : e instanceof d.Ux
                      ? A.intl.string(A.t.boznHN)
                      : e instanceof d.F_
                        ? A.intl.string(A.t.PjehcF)
                        : e instanceof d.Xj
                          ? A.intl.string(A.t.T5davE)
                          : e instanceof d.am
                            ? A.intl.string(A.t.J0A1Vk)
                            : e instanceof d._1
                              ? A.intl.string(A.t.jYOezc)
                              : e instanceof d.i6
                                ? A.intl.string(A.t.CSVexi)
                                : e instanceof d.cg
                                  ? A.intl.string(A.t["43J8JK"])
                                  : e instanceof d.UG
                                    ? A.intl.string(A.t["1ITkfq"])
                                    : e instanceof d.EE
                                      ? null == e.bank
                                          ? A.intl.string(A.t.nSbwqC)
                                          : A.intl.format(A.t["9kUlRU"], { bank: (0, a.o)(e.bank) })
                                      : e instanceof d.rJ
                                        ? A.intl.format(A.t.hSPoZw, { bank: (0, a.j)(e.bank) })
                                        : e instanceof d.FQ
                                          ? A.intl.string(A.t["+rbTmL"])
                                          : e instanceof d.Pw
                                            ? A.intl.string(A.t.RFi12i)
                                            : e instanceof d.LQ
                                              ? A.intl.string(h.default["/FQWfA"])
                                              : e instanceof d.IE
                                                ? A.intl.string(A.t.JG3WQU)
                                                : A.intl.string(A.t.jdPblk);
    }
    renderDescription() {
        let { paymentSource: e, descriptionClassName: t } = this.props;
        return (0, i.jsx)(r.E, { className: t, variant: "text-md/semibold", children: this.getLabel(e) });
    }
    renderSubText() {
        let { paymentSource: e, locale: t } = this.props,
            n = null;
        return (
            e instanceof d.YS && !e.isStripeLinkBankAccount
                ? (n = A.intl.formatToPlainString(A.t["8rTTuf"], {
                      month: (0, c.eS)(e.expiresMonth, t),
                      year: e.expiresYear,
                  }))
                : e instanceof d.SJ || e instanceof d.A0 || e instanceof d.Tu
                  ? (n = e.email)
                  : e instanceof d._1
                    ? (n = "@" + e.username)
                    : e instanceof d.FQ && (n = e.username),
            n
        );
    }
    renderIcon() {
        let { paymentSource: e } = this.props;
        return e instanceof d.LQ ? (0, i.jsx)(s._, { size: "lg" }) : (0, i.jsx)(u.Ay, { type: this.typeString });
    }
    render() {
        let {
                isDefault: e,
                paymentSource: t,
                showSubtext: n,
                isForSubscription: l,
                showPaymentSourceIcon: s,
                showLabels: a,
            } = this.props,
            u = this.renderSubText();
        return (0, i.jsxs)(o.A, {
            children: [
                s && this.renderIcon(),
                (0, i.jsxs)(o.A, {
                    direction: o.A.Direction.VERTICAL,
                    className: E.Wi,
                    children: [
                        (0, i.jsxs)(o.A, {
                            align: o.A.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                a && e
                                    ? (0, i.jsx)("div", { className: E.Zn, children: A.intl.string(A.t.bBvAEH) })
                                    : null,
                                l ? (0, i.jsx)("div", { className: E.NV, children: A.intl.string(A.t.YCrcPL) }) : null,
                                a && t.invalid
                                    ? (0, i.jsx)("div", { className: E.tG, children: A.intl.string(A.t["851k93"]) })
                                    : null,
                            ],
                        }),
                        n && null != u
                            ? (0, i.jsx)(r.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: E.Sv,
                                  children: u,
                              })
                            : null,
                    ],
                }),
            ],
        });
    }
}
