n.d(t, {
    A: () => f,
});
var r,
    i,
    l,
    s = n(627968),
    a = n(64700),
    o = n(397927),
    c = n(887555),
    d = n(235986),
    u = n(812745),
    _ = n(202613),
    p = n(739508),
    m = n(240248),
    g = n(985018),
    A = n(789863);
class f extends (l = a.PureComponent) {
    get typeString() {
        let { paymentSource: e } = this.props;
        if (e instanceof _.SJ) return u.Ay.Types.PAYPAL;
        if (e instanceof _.A0) return u.Ay.Types.SOFORT;
        if (e instanceof _.YS) return u.Ay.getType(e.brand);
        if (e instanceof _.Qh) return u.Ay.Types.GIROPAY;
        if (e instanceof _.Tu) return u.Ay.Types.PRZELEWY24;
        else if (e instanceof _.Ux) return u.Ay.Types.PAYSAFECARD;
        else if (e instanceof _.F_) return u.Ay.Types.GCASH;
        else if (e instanceof _.Xj) return u.Ay.Types.GRABPAY;
        else if (e instanceof _.am) return u.Ay.Types.MOMO_WALLET;
        else if (e instanceof _._1) return u.Ay.Types.VENMO;
        else if (e instanceof _.i6) return u.Ay.Types.KAKAOPAY;
        else if (e instanceof _.cg) return u.Ay.Types.GOPAY_WALLET;
        else if (e instanceof _.UG) return u.Ay.Types.BANCONTACT;
        else if (e instanceof _.rJ) return u.Ay.Types.EPS;
        else if (e instanceof _.EE) return u.Ay.Types.IDEAL;
        else if (e instanceof _.FQ) return u.Ay.Types.CASH_APP;
        else if (e instanceof _.Pw) return u.Ay.Types.APPLE;
        return u.Ay.Types.UNKNOWN;
    }
    getLabel(e) {
        return e instanceof _.YS
            ? g.intl.format(g.t["o/dsrL"], {
                  brand: (0, m.$G)(e.brand),
                  last_4: e.last4,
              })
            : e instanceof _.SJ
              ? g.intl.string(g.t["2dgEq+"])
              : e instanceof _.A0
                ? g.intl.string(g.t["edKX/1"])
                : e instanceof _.Qh
                  ? g.intl.string(g.t["y+0MQZ"])
                  : e instanceof _.Tu
                    ? g.intl.string(g.t.u25uL0)
                    : e instanceof _.Ux
                      ? g.intl.string(g.t.boznHN)
                      : e instanceof _.F_
                        ? g.intl.string(g.t.PjehcF)
                        : e instanceof _.Xj
                          ? g.intl.string(g.t.T5davE)
                          : e instanceof _.am
                            ? g.intl.string(g.t.J0A1Vk)
                            : e instanceof _._1
                              ? g.intl.string(g.t.jYOezc)
                              : e instanceof _.i6
                                ? g.intl.string(g.t.CSVexi)
                                : e instanceof _.cg
                                  ? g.intl.string(g.t["43J8JK"])
                                  : e instanceof _.UG
                                    ? g.intl.string(g.t["1ITkfq"])
                                    : e instanceof _.EE
                                      ? null == e.bank
                                          ? g.intl.string(g.t.nSbwqC)
                                          : g.intl.format(g.t["9kUlRU"], {
                                                bank: (0, c.o0)(e.bank),
                                            })
                                      : e instanceof _.rJ
                                        ? g.intl.format(g.t.hSPoZw, {
                                              bank: (0, c.jK)(e.bank),
                                          })
                                        : e instanceof _.FQ
                                          ? g.intl.string(g.t["+rbTmL"])
                                          : e instanceof _.Pw
                                            ? g.intl.string(g.t.RFi12i)
                                            : g.intl.string(g.t.jdPblk);
    }
    renderDescription() {
        let { paymentSource: e, descriptionClassName: t } = this.props;
        return (0, s.jsx)(o.Text, {
            className: t,
            variant: "text-md/semibold",
            children: this.getLabel(e),
        });
    }
    renderSubText() {
        let { paymentSource: e, locale: t } = this.props,
            n = null;
        return (
            e instanceof _.YS
                ? (n = g.intl.formatToPlainString(g.t["8rTTuf"], {
                      month: (0, p.eS)(e.expiresMonth, t),
                      year: e.expiresYear,
                  }))
                : e instanceof _.SJ || e instanceof _.A0 || e instanceof _.Tu
                  ? (n = e.email)
                  : e instanceof _._1
                    ? (n = "@" + e.username)
                    : e instanceof _.FQ && (n = e.username),
            n
        );
    }
    render() {
        let {
                isDefault: e,
                paymentSource: t,
                showSubtext: n,
                isForSubscription: r,
                showPaymentSourceIcon: i,
                showLabels: l,
            } = this.props,
            a = this.renderSubText();
        return (0, s.jsxs)(d.A, {
            children: [
                i &&
                    (0, s.jsx)(u.Ay, {
                        type: this.typeString,
                    }),
                (0, s.jsxs)(d.A, {
                    direction: d.A.Direction.VERTICAL,
                    className: A.Wi,
                    children: [
                        (0, s.jsxs)(d.A, {
                            align: d.A.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                l && e
                                    ? (0, s.jsx)("div", {
                                          className: A.Zn,
                                          children: g.intl.string(g.t.bBvAEH),
                                      })
                                    : null,
                                r
                                    ? (0, s.jsx)("div", {
                                          className: A.NV,
                                          children: g.intl.string(g.t.YCrcPL),
                                      })
                                    : null,
                                l && t.invalid
                                    ? (0, s.jsx)("div", {
                                          className: A.tG,
                                          children: g.intl.string(g.t["851k93"]),
                                      })
                                    : null,
                            ],
                        }),
                        n && null != a
                            ? (0, s.jsx)(o.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: A.Sv,
                                  children: a,
                              })
                            : null,
                    ],
                }),
            ],
        });
    }
}
(i = {
    isForSubscription: !1,
    isDefault: !1,
    showSubtext: !1,
    showPaymentSourceIcon: !1,
    showLabels: !1,
}),
    (r = "defaultProps") in f
        ? Object.defineProperty(f, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
          })
        : (f[r] = i);
