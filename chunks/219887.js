i.d(t, { A: () => E });
var n = i(627968),
    s = i(64700),
    l = i(834730),
    r = i(111159),
    a = i(109936),
    o = i(235986),
    u = i(812745),
    d = i(202613),
    c = i(739508),
    g = i(240248),
    m = i(375708),
    A = i(776409),
    h = i(447774);
class E extends s.PureComponent {
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
        if (e instanceof d.YS) return u.Ay.getType(e.brand);
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
        return u.Ay.Types.UNKNOWN;
    }
    getLabel(e) {
        return e instanceof d.YS
            ? m.intl.format(m.t["o/dsrL"], { brand: (0, g.$G)(e.brand), last_4: e.last4 })
            : e instanceof d.SJ
              ? m.intl.string(m.t["2dgEq+"])
              : e instanceof d.A0
                ? m.intl.string(m.t["edKX/1"])
                : e instanceof d.Qh
                  ? m.intl.string(m.t["y+0MQZ"])
                  : e instanceof d.Tu
                    ? m.intl.string(m.t.u25uL0)
                    : e instanceof d.Ux
                      ? m.intl.string(m.t.boznHN)
                      : e instanceof d.F_
                        ? m.intl.string(m.t.PjehcF)
                        : e instanceof d.Xj
                          ? m.intl.string(m.t.T5davE)
                          : e instanceof d.am
                            ? m.intl.string(m.t.J0A1Vk)
                            : e instanceof d._1
                              ? m.intl.string(m.t.jYOezc)
                              : e instanceof d.i6
                                ? m.intl.string(m.t.CSVexi)
                                : e instanceof d.cg
                                  ? m.intl.string(m.t["43J8JK"])
                                  : e instanceof d.UG
                                    ? m.intl.string(m.t["1ITkfq"])
                                    : e instanceof d.EE
                                      ? null == e.bank
                                          ? m.intl.string(m.t.nSbwqC)
                                          : m.intl.format(m.t["9kUlRU"], { bank: (0, a.o)(e.bank) })
                                      : e instanceof d.rJ
                                        ? m.intl.format(m.t.hSPoZw, { bank: (0, a.j)(e.bank) })
                                        : e instanceof d.FQ
                                          ? m.intl.string(m.t["+rbTmL"])
                                          : e instanceof d.Pw
                                            ? m.intl.string(m.t.RFi12i)
                                            : e instanceof d.LQ
                                              ? m.intl.string(A.default["/FQWfA"])
                                              : m.intl.string(m.t.jdPblk);
    }
    renderDescription() {
        let { paymentSource: e, descriptionClassName: t } = this.props;
        return (0, n.jsx)(l.E, { className: t, variant: "text-md/semibold", children: this.getLabel(e) });
    }
    renderSubText() {
        let { paymentSource: e, locale: t } = this.props,
            i = null;
        return (
            e instanceof d.YS
                ? (i = m.intl.formatToPlainString(m.t["8rTTuf"], {
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
        return e instanceof d.LQ
            ? (0, n.jsx)("div", { className: h.k7, children: (0, n.jsx)(r.p, { size: "xs", color: "currentColor" }) })
            : (0, n.jsx)(u.Ay, { type: this.typeString });
    }
    render() {
        let {
                isDefault: e,
                paymentSource: t,
                showSubtext: i,
                isForSubscription: s,
                showPaymentSourceIcon: r,
                showLabels: a,
            } = this.props,
            u = this.renderSubText();
        return (0, n.jsxs)(o.A, {
            children: [
                r && this.renderIcon(),
                (0, n.jsxs)(o.A, {
                    direction: o.A.Direction.VERTICAL,
                    className: h.Wi,
                    children: [
                        (0, n.jsxs)(o.A, {
                            align: o.A.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                a && e
                                    ? (0, n.jsx)("div", { className: h.Zn, children: m.intl.string(m.t.bBvAEH) })
                                    : null,
                                s ? (0, n.jsx)("div", { className: h.NV, children: m.intl.string(m.t.YCrcPL) }) : null,
                                a && t.invalid
                                    ? (0, n.jsx)("div", { className: h.tG, children: m.intl.string(m.t["851k93"]) })
                                    : null,
                            ],
                        }),
                        i && null != u
                            ? (0, n.jsx)(l.E, {
                                  variant: "text-sm/normal",
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
