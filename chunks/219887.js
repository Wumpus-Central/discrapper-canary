i.d(t, { A: () => S });
var n = i(627968),
    s = i(64700),
    l = i(37766),
    r = i(834730),
    a = i(887555),
    o = i(235986),
    u = i(812745),
    d = i(202613),
    c = i(739508),
    g = i(935208),
    m = i(240248),
    A = i(375708),
    h = i(743292),
    E = i(744798);
class S extends s.PureComponent {
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
        return (0, n.jsx)(r.E, { className: t, variant: "text-md/semibold", children: this.getLabel(e) });
    }
    renderSubText() {
        let { paymentSource: e, locale: t } = this.props,
            i = null;
        return (
            e instanceof d.YS && !e.isStripeLinkBankAccount
                ? (i = A.intl.formatToPlainString(A.t["8rTTuf"], {
                      month: (0, c.eS)(e.expiresMonth, t),
                      year: e.expiresYear,
                  }))
                : e instanceof d.SJ || e instanceof d.A0 || e instanceof d.Tu
                  ? (i = e.email)
                  : e instanceof d._1
                    ? (i = "@" + e.username)
                    : e instanceof d.FQ && (i = e.username),
            i
        );
    }
    renderIcon() {
        let { paymentSource: e } = this.props;
        return e instanceof d.LQ ? (0, n.jsx)(l._, { size: "lg" }) : (0, n.jsx)(u.Ay, { type: this.typeString });
    }
    render() {
        let {
                isDefault: e,
                paymentSource: t,
                showSubtext: i,
                isForSubscription: s,
                showPaymentSourceIcon: l,
                showLabels: a,
            } = this.props,
            u = this.renderSubText();
        return (0, n.jsxs)(o.A, {
            children: [
                l && this.renderIcon(),
                (0, n.jsxs)(o.A, {
                    direction: o.A.Direction.VERTICAL,
                    className: E.Wi,
                    children: [
                        (0, n.jsxs)(o.A, {
                            align: o.A.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                a && e
                                    ? (0, n.jsx)("div", { className: E.Zn, children: A.intl.string(A.t.bBvAEH) })
                                    : null,
                                s ? (0, n.jsx)("div", { className: E.NV, children: A.intl.string(A.t.YCrcPL) }) : null,
                                a && t.invalid
                                    ? (0, n.jsx)("div", { className: E.tG, children: A.intl.string(A.t["851k93"]) })
                                    : null,
                            ],
                        }),
                        i && null != u
                            ? (0, n.jsx)(r.E, {
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
