n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(834730),
    a = n(111159),
    r = n(887555),
    o = n(235986),
    d = n(812745),
    u = n(202613),
    c = n(739508),
    g = n(240248),
    m = n(985018),
    _ = n(447774);
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
        if (e instanceof u.SJ) return d.Ay.Types.PAYPAL;
        if (e instanceof u.A0) return d.Ay.Types.SOFORT;
        if (e instanceof u.YS) return d.Ay.getType(e.brand);
        if (e instanceof u.Qh) return d.Ay.Types.GIROPAY;
        if (e instanceof u.Tu) return d.Ay.Types.PRZELEWY24;
        else if (e instanceof u.Ux) return d.Ay.Types.PAYSAFECARD;
        else if (e instanceof u.F_) return d.Ay.Types.GCASH;
        else if (e instanceof u.Xj) return d.Ay.Types.GRABPAY;
        else if (e instanceof u.am) return d.Ay.Types.MOMO_WALLET;
        else if (e instanceof u._1) return d.Ay.Types.VENMO;
        else if (e instanceof u.i6) return d.Ay.Types.KAKAOPAY;
        else if (e instanceof u.cg) return d.Ay.Types.GOPAY_WALLET;
        else if (e instanceof u.UG) return d.Ay.Types.BANCONTACT;
        else if (e instanceof u.rJ) return d.Ay.Types.EPS;
        else if (e instanceof u.EE) return d.Ay.Types.IDEAL;
        else if (e instanceof u.FQ) return d.Ay.Types.CASH_APP;
        else if (e instanceof u.Pw) return d.Ay.Types.APPLE;
        return d.Ay.Types.UNKNOWN;
    }
    getLabel(e) {
        return e instanceof u.YS
            ? m.intl.format(m.t["o/dsrL"], { brand: (0, g.$G)(e.brand), last_4: e.last4 })
            : e instanceof u.SJ
              ? m.intl.string(m.t["2dgEq+"])
              : e instanceof u.A0
                ? m.intl.string(m.t["edKX/1"])
                : e instanceof u.Qh
                  ? m.intl.string(m.t["y+0MQZ"])
                  : e instanceof u.Tu
                    ? m.intl.string(m.t.u25uL0)
                    : e instanceof u.Ux
                      ? m.intl.string(m.t.boznHN)
                      : e instanceof u.F_
                        ? m.intl.string(m.t.PjehcF)
                        : e instanceof u.Xj
                          ? m.intl.string(m.t.T5davE)
                          : e instanceof u.am
                            ? m.intl.string(m.t.J0A1Vk)
                            : e instanceof u._1
                              ? m.intl.string(m.t.jYOezc)
                              : e instanceof u.i6
                                ? m.intl.string(m.t.CSVexi)
                                : e instanceof u.cg
                                  ? m.intl.string(m.t["43J8JK"])
                                  : e instanceof u.UG
                                    ? m.intl.string(m.t["1ITkfq"])
                                    : e instanceof u.EE
                                      ? null == e.bank
                                          ? m.intl.string(m.t.nSbwqC)
                                          : m.intl.format(m.t["9kUlRU"], { bank: (0, r.o)(e.bank) })
                                      : e instanceof u.rJ
                                        ? m.intl.format(m.t.hSPoZw, { bank: (0, r.j)(e.bank) })
                                        : e instanceof u.FQ
                                          ? m.intl.string(m.t["+rbTmL"])
                                          : e instanceof u.Pw
                                            ? m.intl.string(m.t.RFi12i)
                                            : e instanceof u.LQ
                                              ? m.intl.string(m.t["6EEgNt"])
                                              : m.intl.string(m.t.jdPblk);
    }
    renderDescription() {
        let { paymentSource: e, descriptionClassName: t } = this.props;
        return (0, i.jsx)(l.E, { className: t, variant: "text-md/semibold", children: this.getLabel(e) });
    }
    renderSubText() {
        let { paymentSource: e, locale: t } = this.props,
            n = null;
        return (
            e instanceof u.YS
                ? (n = m.intl.formatToPlainString(m.t["8rTTuf"], {
                      month: (0, c.eS)(e.expiresMonth, t),
                      year: e.expiresYear,
                  }))
                : e instanceof u.SJ || e instanceof u.A0 || e instanceof u.Tu
                  ? (n = e.email)
                  : e instanceof u._1
                    ? (n = "@" + e.username)
                    : e instanceof u.FQ && (n = e.username),
            n
        );
    }
    renderIcon() {
        let { paymentSource: e } = this.props;
        return e instanceof u.LQ
            ? (0, i.jsx)("div", { className: _.k7, children: (0, i.jsx)(a.p, { size: "xs", color: "currentColor" }) })
            : (0, i.jsx)(d.Ay, { type: this.typeString });
    }
    render() {
        let {
                isDefault: e,
                paymentSource: t,
                showSubtext: n,
                isForSubscription: s,
                showPaymentSourceIcon: a,
                showLabels: r,
            } = this.props,
            d = this.renderSubText();
        return (0, i.jsxs)(o.A, {
            children: [
                a && this.renderIcon(),
                (0, i.jsxs)(o.A, {
                    direction: o.A.Direction.VERTICAL,
                    className: _.Wi,
                    children: [
                        (0, i.jsxs)(o.A, {
                            align: o.A.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                r && e
                                    ? (0, i.jsx)("div", { className: _.Zn, children: m.intl.string(m.t.bBvAEH) })
                                    : null,
                                s ? (0, i.jsx)("div", { className: _.NV, children: m.intl.string(m.t.YCrcPL) }) : null,
                                r && t.invalid
                                    ? (0, i.jsx)("div", { className: _.tG, children: m.intl.string(m.t["851k93"]) })
                                    : null,
                            ],
                        }),
                        n && null != d
                            ? (0, i.jsx)(l.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: _.Sv,
                                  children: d,
                              })
                            : null,
                    ],
                }),
            ],
        });
    }
}
