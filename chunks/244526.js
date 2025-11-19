n.d(t, { Z: () => m });
var r,
    i = n(54381),
    a = n(473749),
    o = n(481060),
    s = n(987032),
    l = n(600164),
    c = n(219929),
    u = n(46141),
    d = n(122289),
    f = n(624138),
    _ = n(388032),
    p = n(942957);
function h(e, t, n) {
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
class m extends (r = a.PureComponent) {
    get typeString() {
        let { paymentSource: e } = this.props;
        if (e instanceof u.qo) return c.ZP.Types.PAYPAL;
        if (e instanceof u.Sf) return c.ZP.Types.SOFORT;
        if (e instanceof u.dm) return c.ZP.getType(e.brand);
        if (e instanceof u.fv) return c.ZP.Types.GIROPAY;
        if (e instanceof u.Vg) return c.ZP.Types.PRZELEWY24;
        else if (e instanceof u.sn) return c.ZP.Types.PAYSAFECARD;
        else if (e instanceof u.o_) return c.ZP.Types.GCASH;
        else if (e instanceof u.kX) return c.ZP.Types.GRABPAY;
        else if (e instanceof u.z) return c.ZP.Types.MOMO_WALLET;
        else if (e instanceof u.Xc) return c.ZP.Types.VENMO;
        else if (e instanceof u.Om) return c.ZP.Types.KAKAOPAY;
        else if (e instanceof u.JC) return c.ZP.Types.GOPAY_WALLET;
        else if (e instanceof u.U4) return c.ZP.Types.BANCONTACT;
        else if (e instanceof u.D0) return c.ZP.Types.EPS;
        else if (e instanceof u.jc) return c.ZP.Types.IDEAL;
        else if (e instanceof u.u_) return c.ZP.Types.CASH_APP;
        else if (e instanceof u.$z) return c.ZP.Types.APPLE;
        return c.ZP.Types.UNKNOWN;
    }
    getLabel(e) {
        return e instanceof u.dm
            ? _.intl.format(_.t["o/dsrL"], {
                  brand: (0, f.De)(e.brand),
                  last_4: e.last4,
              })
            : e instanceof u.qo
              ? _.intl.string(_.t["2dgEq+"])
              : e instanceof u.Sf
                ? _.intl.string(_.t["edKX/1"])
                : e instanceof u.fv
                  ? _.intl.string(_.t["y+0MQZ"])
                  : e instanceof u.Vg
                    ? _.intl.string(_.t.u25uL0)
                    : e instanceof u.sn
                      ? _.intl.string(_.t.boznHN)
                      : e instanceof u.o_
                        ? _.intl.string(_.t.PjehcF)
                        : e instanceof u.kX
                          ? _.intl.string(_.t.T5davE)
                          : e instanceof u.z
                            ? _.intl.string(_.t.J0A1Vk)
                            : e instanceof u.Xc
                              ? _.intl.string(_.t.jYOezc)
                              : e instanceof u.Om
                                ? _.intl.string(_.t.CSVexi)
                                : e instanceof u.JC
                                  ? _.intl.string(_.t["43J8JK"])
                                  : e instanceof u.U4
                                    ? _.intl.string(_.t["1ITkfq"])
                                    : e instanceof u.jc
                                      ? null == e.bank
                                          ? _.intl.string(_.t.nSbwqC)
                                          : _.intl.format(_.t["9kUlRU"], { bank: (0, s.YE)(e.bank) })
                                      : e instanceof u.D0
                                        ? _.intl.format(_.t.hSPoZw, { bank: (0, s.Ul)(e.bank) })
                                        : e instanceof u.u_
                                          ? _.intl.string(_.t["+rbTmL"])
                                          : e instanceof u.$z
                                            ? _.intl.string(_.t.RFi12i)
                                            : _.intl.string(_.t.jdPblk);
    }
    renderDescription() {
        let { paymentSource: e, descriptionClassName: t } = this.props;
        return (0, i.jsx)(o.Text, {
            className: t,
            variant: "text-md/semibold",
            children: this.getLabel(e),
        });
    }
    renderSubText() {
        let { paymentSource: e, locale: t } = this.props,
            n = null;
        return (
            e instanceof u.dm
                ? (n = _.intl.formatToPlainString(_.t["8rTTuf"], {
                      month: (0, d.E2)(e.expiresMonth, t),
                      year: e.expiresYear,
                  }))
                : e instanceof u.qo || e instanceof u.Sf || e instanceof u.Vg
                  ? (n = e.email)
                  : e instanceof u.Xc
                    ? (n = "@" + e.username)
                    : e instanceof u.u_ && (n = e.username),
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
                showLabels: s,
            } = this.props,
            u = this.renderSubText();
        return (0, i.jsxs)(l.Z, {
            children: [
                a && (0, i.jsx)(c.ZP, { type: this.typeString }),
                (0, i.jsxs)(l.Z, {
                    direction: l.Z.Direction.VERTICAL,
                    className: p.descriptionWrapper,
                    children: [
                        (0, i.jsxs)(l.Z, {
                            align: l.Z.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                s && e
                                    ? (0, i.jsx)("div", {
                                          className: p.defaultIndicator,
                                          children: _.intl.string(_.t.bBvAEH),
                                      })
                                    : null,
                                r
                                    ? (0, i.jsx)("div", {
                                          className: p.premiumIndicator,
                                          children: _.intl.string(_.t.YCrcPL),
                                      })
                                    : null,
                                s && t.invalid
                                    ? (0, i.jsx)("div", {
                                          className: p.invalidIndicator,
                                          children: _.intl.string(_.t["851k93"]),
                                      })
                                    : null,
                            ],
                        }),
                        n && null != u
                            ? (0, i.jsx)(o.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-secondary",
                                  className: p.subText,
                                  children: u,
                              })
                            : null,
                    ],
                }),
            ],
        });
    }
}
h(m, "defaultProps", {
    isForSubscription: !1,
    isDefault: !1,
    showSubtext: !1,
    showPaymentSourceIcon: !1,
    showLabels: !1,
});
