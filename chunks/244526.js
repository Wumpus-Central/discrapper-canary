n.d(t, { Z: () => E }), n(953529);
var r,
    i = n(951288),
    a = n(647438),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    c = n(987032),
    u = n(600164),
    d = n(219929),
    f = n(46141),
    _ = n(122289),
    p = n(624138),
    h = n(388032),
    m = n(916648);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class E extends (r = a.PureComponent) {
    get typeString() {
        let { paymentSource: e } = this.props;
        if (e instanceof f.qo) return d.ZP.Types.PAYPAL;
        if (e instanceof f.Sf) return d.ZP.Types.SOFORT;
        if (e instanceof f.dm) return d.ZP.getType(e.brand);
        if (e instanceof f.fv) return d.ZP.Types.GIROPAY;
        if (e instanceof f.Vg) return d.ZP.Types.PRZELEWY24;
        else if (e instanceof f.sn) return d.ZP.Types.PAYSAFECARD;
        else if (e instanceof f.o_) return d.ZP.Types.GCASH;
        else if (e instanceof f.kX) return d.ZP.Types.GRABPAY;
        else if (e instanceof f.z) return d.ZP.Types.MOMO_WALLET;
        else if (e instanceof f.Xc) return d.ZP.Types.VENMO;
        else if (e instanceof f.Om) return d.ZP.Types.KAKAOPAY;
        else if (e instanceof f.JC) return d.ZP.Types.GOPAY_WALLET;
        else if (e instanceof f.U4) return d.ZP.Types.BANCONTACT;
        else if (e instanceof f.D0) return d.ZP.Types.EPS;
        else if (e instanceof f.jc) return d.ZP.Types.IDEAL;
        else if (e instanceof f.u_) return d.ZP.Types.CASH_APP;
        else if (e instanceof f.$z) return d.ZP.Types.APPLE;
        return d.ZP.Types.UNKNOWN;
    }
    getLabel(e) {
        return e instanceof f.dm
            ? h.intl.format(h.t["o/dsrK"], {
                  brand: (0, p.De)(e.brand),
                  last_4: e.last4,
              })
            : e instanceof f.qo
              ? h.intl.string(h.t["2dgEq6"])
              : e instanceof f.Sf
                ? h.intl.string(h.t["edKX//"])
                : e instanceof f.fv
                  ? h.intl.string(h.t["y+0MQU"])
                  : e instanceof f.Vg
                    ? h.intl.string(h.t.u25uLy)
                    : e instanceof f.sn
                      ? h.intl.string(h.t.boznHB)
                      : e instanceof f.o_
                        ? h.intl.string(h.t.PjehcH)
                        : e instanceof f.kX
                          ? h.intl.string(h.t.T5davL)
                          : e instanceof f.z
                            ? h.intl.string(h.t.J0A1Vl)
                            : e instanceof f.Xc
                              ? h.intl.string(h.t.jYOezc)
                              : e instanceof f.Om
                                ? h.intl.string(h.t.CSVexs)
                                : e instanceof f.JC
                                  ? h.intl.string(h.t["43J8JC"])
                                  : e instanceof f.U4
                                    ? h.intl.string(h.t["1ITkfn"])
                                    : e instanceof f.jc
                                      ? null == e.bank
                                          ? h.intl.string(h.t.nSbwqK)
                                          : h.intl.format(h.t["9kUlRU"], { bank: (0, c.YE)(e.bank) })
                                      : e instanceof f.D0
                                        ? h.intl.format(h.t.hSPoZ2, { bank: (0, c.Ul)(e.bank) })
                                        : e instanceof f.u_
                                          ? h.intl.string(h.t["+rbTmJ"])
                                          : e instanceof f.$z
                                            ? h.intl.string(h.t.RFi12t)
                                            : h.intl.string(h.t.jdPblp);
    }
    renderDescription() {
        let { paymentSource: e, descriptionClassName: t } = this.props;
        return (0, i.jsx)(l.Text, {
            className: s()(m.description, t),
            variant: "text-md/semibold",
            children: this.getLabel(e),
        });
    }
    renderSubText() {
        let { paymentSource: e, locale: t } = this.props,
            n = null;
        return (
            e instanceof f.dm
                ? (n = h.intl.formatToPlainString(h.t["8rTTub"], {
                      month: (0, _.E2)(e.expiresMonth, t),
                      year: e.expiresYear,
                  }))
                : e instanceof f.qo || e instanceof f.Sf || e instanceof f.Vg
                  ? (n = e.email)
                  : e instanceof f.Xc
                    ? (n = "@" + e.username)
                    : e instanceof f.u_ && (n = e.username),
            n
        );
    }
    render() {
        let {
                isDefault: e,
                paymentSource: t,
                showSubtext: n,
                isForSubscription: r,
                showPaymentSourceIcon: a,
                showLabels: o,
            } = this.props,
            s = this.renderSubText();
        return (0, i.jsxs)(u.Z, {
            children: [
                a && (0, i.jsx)(d.ZP, { type: this.typeString }),
                (0, i.jsxs)(u.Z, {
                    direction: u.Z.Direction.VERTICAL,
                    className: m.descriptionWrapper,
                    children: [
                        (0, i.jsxs)(u.Z, {
                            align: u.Z.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                o && e
                                    ? (0, i.jsx)("div", {
                                          className: m.defaultIndicator,
                                          children: h.intl.string(h.t.bBvAEB),
                                      })
                                    : null,
                                r
                                    ? (0, i.jsx)("div", {
                                          className: m.premiumIndicator,
                                          children: h.intl.string(h.t.YCrcPD),
                                      })
                                    : null,
                                o && t.invalid
                                    ? (0, i.jsx)("div", {
                                          className: m.invalidIndicator,
                                          children: h.intl.string(h.t["851k9/"]),
                                      })
                                    : null,
                            ],
                        }),
                        n && null != s
                            ? (0, i.jsx)("div", {
                                  className: m.subText,
                                  children: s,
                              })
                            : null,
                    ],
                }),
            ],
        });
    }
}
g(E, "defaultProps", {
    isForSubscription: !1,
    isDefault: !1,
    showSubtext: !1,
    showPaymentSourceIcon: !1,
    showLabels: !1,
});
