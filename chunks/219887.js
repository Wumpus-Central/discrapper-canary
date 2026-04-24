n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    a = n(834730),
    r = n(111159),
    l = n(109936),
    c = n(235986),
    o = n(812745),
    d = n(202613),
    u = n(739508),
    m = n(240248),
    p = n(985018),
    h = n(447774);
class _ extends s.PureComponent {
    static defaultProps = {
        isForSubscription: !1,
        isDefault: !1,
        showSubtext: !1,
        showPaymentSourceIcon: !1,
        showLabels: !1,
    };
    get typeString() {
        let { paymentSource: e } = this.props;
        if (e instanceof d.SJ) return o.Ay.Types.PAYPAL;
        if (e instanceof d.A0) return o.Ay.Types.SOFORT;
        if (e instanceof d.YS) return o.Ay.getType(e.brand);
        if (e instanceof d.Qh) return o.Ay.Types.GIROPAY;
        if (e instanceof d.Tu) return o.Ay.Types.PRZELEWY24;
        else if (e instanceof d.Ux) return o.Ay.Types.PAYSAFECARD;
        else if (e instanceof d.F_) return o.Ay.Types.GCASH;
        else if (e instanceof d.Xj) return o.Ay.Types.GRABPAY;
        else if (e instanceof d.am) return o.Ay.Types.MOMO_WALLET;
        else if (e instanceof d._1) return o.Ay.Types.VENMO;
        else if (e instanceof d.i6) return o.Ay.Types.KAKAOPAY;
        else if (e instanceof d.cg) return o.Ay.Types.GOPAY_WALLET;
        else if (e instanceof d.UG) return o.Ay.Types.BANCONTACT;
        else if (e instanceof d.rJ) return o.Ay.Types.EPS;
        else if (e instanceof d.EE) return o.Ay.Types.IDEAL;
        else if (e instanceof d.FQ) return o.Ay.Types.CASH_APP;
        else if (e instanceof d.Pw) return o.Ay.Types.APPLE;
        return o.Ay.Types.UNKNOWN;
    }
    getLabel(e) {
        return e instanceof d.YS
            ? p.intl.format(p.t["o/dsrL"], { brand: (0, m.$G)(e.brand), last_4: e.last4 })
            : e instanceof d.SJ
              ? p.intl.string(p.t["2dgEq+"])
              : e instanceof d.A0
                ? p.intl.string(p.t["edKX/1"])
                : e instanceof d.Qh
                  ? p.intl.string(p.t["y+0MQZ"])
                  : e instanceof d.Tu
                    ? p.intl.string(p.t.u25uL0)
                    : e instanceof d.Ux
                      ? p.intl.string(p.t.boznHN)
                      : e instanceof d.F_
                        ? p.intl.string(p.t.PjehcF)
                        : e instanceof d.Xj
                          ? p.intl.string(p.t.T5davE)
                          : e instanceof d.am
                            ? p.intl.string(p.t.J0A1Vk)
                            : e instanceof d._1
                              ? p.intl.string(p.t.jYOezc)
                              : e instanceof d.i6
                                ? p.intl.string(p.t.CSVexi)
                                : e instanceof d.cg
                                  ? p.intl.string(p.t["43J8JK"])
                                  : e instanceof d.UG
                                    ? p.intl.string(p.t["1ITkfq"])
                                    : e instanceof d.EE
                                      ? null == e.bank
                                          ? p.intl.string(p.t.nSbwqC)
                                          : p.intl.format(p.t["9kUlRU"], { bank: (0, l.o)(e.bank) })
                                      : e instanceof d.rJ
                                        ? p.intl.format(p.t.hSPoZw, { bank: (0, l.j)(e.bank) })
                                        : e instanceof d.FQ
                                          ? p.intl.string(p.t["+rbTmL"])
                                          : e instanceof d.Pw
                                            ? p.intl.string(p.t.RFi12i)
                                            : e instanceof d.LQ
                                              ? p.intl.string(p.t.wkFAZf)
                                              : p.intl.string(p.t.jdPblk);
    }
    renderDescription() {
        let { paymentSource: e, descriptionClassName: t } = this.props;
        return (0, i.jsx)(a.E, { className: t, variant: "text-md/semibold", children: this.getLabel(e) });
    }
    renderSubText() {
        let { paymentSource: e, locale: t } = this.props,
            n = null;
        return (
            e instanceof d.YS
                ? (n = p.intl.formatToPlainString(p.t["8rTTuf"], {
                      month: (0, u.eS)(e.expiresMonth, t),
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
        return e instanceof d.LQ
            ? (0, i.jsx)("div", { className: h.k7, children: (0, i.jsx)(r.p, { size: "xs", color: "currentColor" }) })
            : (0, i.jsx)(o.Ay, { type: this.typeString });
    }
    render() {
        let {
                isDefault: e,
                paymentSource: t,
                showSubtext: n,
                isForSubscription: s,
                showPaymentSourceIcon: r,
                showLabels: l,
            } = this.props,
            o = this.renderSubText();
        return (0, i.jsxs)(c.A, {
            children: [
                r && this.renderIcon(),
                (0, i.jsxs)(c.A, {
                    direction: c.A.Direction.VERTICAL,
                    className: h.Wi,
                    children: [
                        (0, i.jsxs)(c.A, {
                            align: c.A.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                l && e
                                    ? (0, i.jsx)("div", { className: h.Zn, children: p.intl.string(p.t.bBvAEH) })
                                    : null,
                                s ? (0, i.jsx)("div", { className: h.NV, children: p.intl.string(p.t.YCrcPL) }) : null,
                                l && t.invalid
                                    ? (0, i.jsx)("div", { className: h.tG, children: p.intl.string(p.t["851k93"]) })
                                    : null,
                            ],
                        }),
                        n && null != o
                            ? (0, i.jsx)(a.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: h.Sv,
                                  children: o,
                              })
                            : null,
                    ],
                }),
            ],
        });
    }
}
