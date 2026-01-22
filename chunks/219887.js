n.d(t, {
    A: () => m,
});
var r,
    i = n(627968),
    a = n(64700),
    s = n(397927),
    o = n(887555),
    l = n(235986),
    c = n(812745),
    u = n(202613),
    d = n(739508),
    f = n(240248),
    p = n(985018),
    _ = n(789863);

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
        if (e instanceof u.SJ) return c.Ay.Types.PAYPAL;
        if (e instanceof u.A0) return c.Ay.Types.SOFORT;
        if (e instanceof u.YS) return c.Ay.getType(e.brand);
        if (e instanceof u.Qh) return c.Ay.Types.GIROPAY;
        if (e instanceof u.Tu) return c.Ay.Types.PRZELEWY24;
        else if (e instanceof u.Ux) return c.Ay.Types.PAYSAFECARD;
        else if (e instanceof u.F_) return c.Ay.Types.GCASH;
        else if (e instanceof u.Xj) return c.Ay.Types.GRABPAY;
        else if (e instanceof u.am) return c.Ay.Types.MOMO_WALLET;
        else if (e instanceof u._1) return c.Ay.Types.VENMO;
        else if (e instanceof u.i6) return c.Ay.Types.KAKAOPAY;
        else if (e instanceof u.cg) return c.Ay.Types.GOPAY_WALLET;
        else if (e instanceof u.UG) return c.Ay.Types.BANCONTACT;
        else if (e instanceof u.rJ) return c.Ay.Types.EPS;
        else if (e instanceof u.EE) return c.Ay.Types.IDEAL;
        else if (e instanceof u.FQ) return c.Ay.Types.CASH_APP;
        else if (e instanceof u.Pw) return c.Ay.Types.APPLE;
        return c.Ay.Types.UNKNOWN;
    }
    getLabel(e) {
        return e instanceof u.YS
            ? p.intl.format(p.t["o/dsrL"], {
                  brand: (0, f.$G)(e.brand),
                  last_4: e.last4,
              })
            : e instanceof u.SJ
              ? p.intl.string(p.t["2dgEq+"])
              : e instanceof u.A0
                ? p.intl.string(p.t["edKX/1"])
                : e instanceof u.Qh
                  ? p.intl.string(p.t["y+0MQZ"])
                  : e instanceof u.Tu
                    ? p.intl.string(p.t.u25uL0)
                    : e instanceof u.Ux
                      ? p.intl.string(p.t.boznHN)
                      : e instanceof u.F_
                        ? p.intl.string(p.t.PjehcF)
                        : e instanceof u.Xj
                          ? p.intl.string(p.t.T5davE)
                          : e instanceof u.am
                            ? p.intl.string(p.t.J0A1Vk)
                            : e instanceof u._1
                              ? p.intl.string(p.t.jYOezc)
                              : e instanceof u.i6
                                ? p.intl.string(p.t.CSVexi)
                                : e instanceof u.cg
                                  ? p.intl.string(p.t["43J8JK"])
                                  : e instanceof u.UG
                                    ? p.intl.string(p.t["1ITkfq"])
                                    : e instanceof u.EE
                                      ? null == e.bank
                                          ? p.intl.string(p.t.nSbwqC)
                                          : p.intl.format(p.t["9kUlRU"], {
                                                bank: (0, o.o0)(e.bank),
                                            })
                                      : e instanceof u.rJ
                                        ? p.intl.format(p.t.hSPoZw, {
                                              bank: (0, o.jK)(e.bank),
                                          })
                                        : e instanceof u.FQ
                                          ? p.intl.string(p.t["+rbTmL"])
                                          : e instanceof u.Pw
                                            ? p.intl.string(p.t.RFi12i)
                                            : p.intl.string(p.t.jdPblk);
    }
    renderDescription() {
        let { paymentSource: e, descriptionClassName: t } = this.props;
        return (0, i.jsx)(s.Text, {
            className: t,
            variant: "text-md/semibold",
            children: this.getLabel(e),
        });
    }
    renderSubText() {
        let { paymentSource: e, locale: t } = this.props,
            n = null;
        return (
            e instanceof u.YS
                ? (n = p.intl.formatToPlainString(p.t["8rTTuf"], {
                      month: (0, d.eS)(e.expiresMonth, t),
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
    render() {
        let {
                isDefault: e,
                paymentSource: t,
                showSubtext: n,
                isForSubscription: r,
                showPaymentSourceIcon: a,
                showLabels: o,
            } = this.props,
            u = this.renderSubText();
        return (0, i.jsxs)(l.A, {
            children: [
                a &&
                    (0, i.jsx)(c.Ay, {
                        type: this.typeString,
                    }),
                (0, i.jsxs)(l.A, {
                    direction: l.A.Direction.VERTICAL,
                    className: _.Wi,
                    children: [
                        (0, i.jsxs)(l.A, {
                            align: l.A.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                o && e
                                    ? (0, i.jsx)("div", {
                                          className: _.Zn,
                                          children: p.intl.string(p.t.bBvAEH),
                                      })
                                    : null,
                                r
                                    ? (0, i.jsx)("div", {
                                          className: _.NV,
                                          children: p.intl.string(p.t.YCrcPL),
                                      })
                                    : null,
                                o && t.invalid
                                    ? (0, i.jsx)("div", {
                                          className: _.tG,
                                          children: p.intl.string(p.t["851k93"]),
                                      })
                                    : null,
                            ],
                        }),
                        n && null != u
                            ? (0, i.jsx)(s.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: _.Sv,
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
