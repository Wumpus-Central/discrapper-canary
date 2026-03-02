n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    a = n(397927),
    l = n(887555),
    r = n(235986),
    o = n(812745),
    c = n(202613),
    d = n(739508),
    u = n(240248),
    _ = n(985018),
    m = n(789863);
class A extends s.PureComponent {
    static defaultProps = {
        isForSubscription: !1,
        isDefault: !1,
        showSubtext: !1,
        showPaymentSourceIcon: !1,
        showLabels: !1,
    };
    get typeString() {
        let { paymentSource: e } = this.props;
        if (e instanceof c.SJ) return o.Ay.Types.PAYPAL;
        if (e instanceof c.A0) return o.Ay.Types.SOFORT;
        if (e instanceof c.YS) return o.Ay.getType(e.brand);
        if (e instanceof c.Qh) return o.Ay.Types.GIROPAY;
        if (e instanceof c.Tu) return o.Ay.Types.PRZELEWY24;
        else if (e instanceof c.Ux) return o.Ay.Types.PAYSAFECARD;
        else if (e instanceof c.F_) return o.Ay.Types.GCASH;
        else if (e instanceof c.Xj) return o.Ay.Types.GRABPAY;
        else if (e instanceof c.am) return o.Ay.Types.MOMO_WALLET;
        else if (e instanceof c._1) return o.Ay.Types.VENMO;
        else if (e instanceof c.i6) return o.Ay.Types.KAKAOPAY;
        else if (e instanceof c.cg) return o.Ay.Types.GOPAY_WALLET;
        else if (e instanceof c.UG) return o.Ay.Types.BANCONTACT;
        else if (e instanceof c.rJ) return o.Ay.Types.EPS;
        else if (e instanceof c.EE) return o.Ay.Types.IDEAL;
        else if (e instanceof c.FQ) return o.Ay.Types.CASH_APP;
        else if (e instanceof c.Pw) return o.Ay.Types.APPLE;
        return o.Ay.Types.UNKNOWN;
    }
    getLabel(e) {
        return e instanceof c.YS
            ? _.intl.format(_.t["o/dsrL"], { brand: (0, u.$G)(e.brand), last_4: e.last4 })
            : e instanceof c.SJ
              ? _.intl.string(_.t["2dgEq+"])
              : e instanceof c.A0
                ? _.intl.string(_.t["edKX/1"])
                : e instanceof c.Qh
                  ? _.intl.string(_.t["y+0MQZ"])
                  : e instanceof c.Tu
                    ? _.intl.string(_.t.u25uL0)
                    : e instanceof c.Ux
                      ? _.intl.string(_.t.boznHN)
                      : e instanceof c.F_
                        ? _.intl.string(_.t.PjehcF)
                        : e instanceof c.Xj
                          ? _.intl.string(_.t.T5davE)
                          : e instanceof c.am
                            ? _.intl.string(_.t.J0A1Vk)
                            : e instanceof c._1
                              ? _.intl.string(_.t.jYOezc)
                              : e instanceof c.i6
                                ? _.intl.string(_.t.CSVexi)
                                : e instanceof c.cg
                                  ? _.intl.string(_.t["43J8JK"])
                                  : e instanceof c.UG
                                    ? _.intl.string(_.t["1ITkfq"])
                                    : e instanceof c.EE
                                      ? null == e.bank
                                          ? _.intl.string(_.t.nSbwqC)
                                          : _.intl.format(_.t["9kUlRU"], { bank: (0, l.o)(e.bank) })
                                      : e instanceof c.rJ
                                        ? _.intl.format(_.t.hSPoZw, { bank: (0, l.j)(e.bank) })
                                        : e instanceof c.FQ
                                          ? _.intl.string(_.t["+rbTmL"])
                                          : e instanceof c.Pw
                                            ? _.intl.string(_.t.RFi12i)
                                            : e instanceof c.LQ
                                              ? _.intl.string(_.t["6EEgNt"])
                                              : _.intl.string(_.t.jdPblk);
    }
    renderDescription() {
        let { paymentSource: e, descriptionClassName: t } = this.props;
        return (0, i.jsx)(a.Text, { className: t, variant: "text-md/semibold", children: this.getLabel(e) });
    }
    renderSubText() {
        let { paymentSource: e, locale: t } = this.props,
            n = null;
        return (
            e instanceof c.YS
                ? (n = _.intl.formatToPlainString(_.t["8rTTuf"], {
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
            ? (0, i.jsx)("div", { className: m.k7, children: (0, i.jsx)(a.pVd, { size: "xs", color: "currentColor" }) })
            : (0, i.jsx)(o.Ay, { type: this.typeString });
    }
    render() {
        let {
                isDefault: e,
                paymentSource: t,
                showSubtext: n,
                isForSubscription: s,
                showPaymentSourceIcon: l,
                showLabels: o,
            } = this.props,
            c = this.renderSubText();
        return (0, i.jsxs)(r.A, {
            children: [
                l && this.renderIcon(),
                (0, i.jsxs)(r.A, {
                    direction: r.A.Direction.VERTICAL,
                    className: m.Wi,
                    children: [
                        (0, i.jsxs)(r.A, {
                            align: r.A.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                o && e
                                    ? (0, i.jsx)("div", { className: m.Zn, children: _.intl.string(_.t.bBvAEH) })
                                    : null,
                                s ? (0, i.jsx)("div", { className: m.NV, children: _.intl.string(_.t.YCrcPL) }) : null,
                                o && t.invalid
                                    ? (0, i.jsx)("div", { className: m.tG, children: _.intl.string(_.t["851k93"]) })
                                    : null,
                            ],
                        }),
                        n && null != c
                            ? (0, i.jsx)(a.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: m.Sv,
                                  children: c,
                              })
                            : null,
                    ],
                }),
            ],
        });
    }
}
