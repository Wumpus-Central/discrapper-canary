n.d(t, { Z: () => C });
var i,
    s,
    r,
    l = n(200651),
    a = n(192379),
    o = n(120356),
    c = n.n(o),
    d = n(481060),
    u = n(987032),
    m = n(600164),
    g = n(219929),
    h = n(46141),
    x = n(122289),
    _ = n(624138),
    p = n(388032),
    E = n(72201);
class C extends (r = a.PureComponent) {
    get typeString() {
        let { paymentSource: e } = this.props;
        if (e instanceof h.qo) return g.ZP.Types.PAYPAL;
        if (e instanceof h.Sf) return g.ZP.Types.SOFORT;
        if (e instanceof h.dm) return g.ZP.getType(e.brand);
        if (e instanceof h.fv) return g.ZP.Types.GIROPAY;
        if (e instanceof h.Vg) return g.ZP.Types.PRZELEWY24;
        else if (e instanceof h.sn) return g.ZP.Types.PAYSAFECARD;
        else if (e instanceof h.o_) return g.ZP.Types.GCASH;
        else if (e instanceof h.kX) return g.ZP.Types.GRABPAY;
        else if (e instanceof h.z) return g.ZP.Types.MOMO_WALLET;
        else if (e instanceof h.Xc) return g.ZP.Types.VENMO;
        else if (e instanceof h.Om) return g.ZP.Types.KAKAOPAY;
        else if (e instanceof h.JC) return g.ZP.Types.GOPAY_WALLET;
        else if (e instanceof h.U4) return g.ZP.Types.BANCONTACT;
        else if (e instanceof h.D0) return g.ZP.Types.EPS;
        else if (e instanceof h.jc) return g.ZP.Types.IDEAL;
        else if (e instanceof h.u_) return g.ZP.Types.CASH_APP;
        else if (e instanceof h.$z) return g.ZP.Types.APPLE;
        return g.ZP.Types.UNKNOWN;
    }
    getLabel(e) {
        return e instanceof h.dm
            ? p.intl.format(p.t['o/dsrK'], {
                  brand: (0, _.De)(e.brand),
                  last_4: e.last4
              })
            : e instanceof h.qo
              ? p.intl.string(p.t['2dgEq6'])
              : e instanceof h.Sf
                ? p.intl.string(p.t['edKX//'])
                : e instanceof h.fv
                  ? p.intl.string(p.t['y+0MQU'])
                  : e instanceof h.Vg
                    ? p.intl.string(p.t.u25uLy)
                    : e instanceof h.sn
                      ? p.intl.string(p.t.boznHB)
                      : e instanceof h.o_
                        ? p.intl.string(p.t.PjehcH)
                        : e instanceof h.kX
                          ? p.intl.string(p.t.T5davL)
                          : e instanceof h.z
                            ? p.intl.string(p.t.J0A1Vl)
                            : e instanceof h.Xc
                              ? p.intl.string(p.t.jYOezc)
                              : e instanceof h.Om
                                ? p.intl.string(p.t.CSVexs)
                                : e instanceof h.JC
                                  ? p.intl.string(p.t['43J8JC'])
                                  : e instanceof h.U4
                                    ? p.intl.string(p.t['1ITkfn'])
                                    : e instanceof h.jc
                                      ? p.intl.format(p.t['9kUlRU'], { bank: (0, u.YE)(e.bank) })
                                      : e instanceof h.D0
                                        ? p.intl.format(p.t.hSPoZ2, { bank: (0, u.Ul)(e.bank) })
                                        : e instanceof h.u_
                                          ? p.intl.string(p.t['+rbTmJ'])
                                          : e instanceof h.$z
                                            ? p.intl.string(p.t.RFi12t)
                                            : p.intl.string(p.t.jdPblp);
    }
    renderDescription() {
        let { paymentSource: e, descriptionClassName: t } = this.props;
        return (0, l.jsx)(d.Text, {
            className: c()(E.description, t),
            variant: 'text-md/semibold',
            children: this.getLabel(e)
        });
    }
    renderSubText() {
        let { paymentSource: e, locale: t } = this.props,
            n = null;
        return (
            e instanceof h.dm
                ? (n = p.intl.formatToPlainString(p.t['8rTTub'], {
                      month: (0, x.E2)(e.expiresMonth, t),
                      year: e.expiresYear
                  }))
                : e instanceof h.qo
                  ? (n = e.email)
                  : e instanceof h.Sf
                    ? (n = e.email)
                    : e instanceof h.Vg
                      ? (n = e.email)
                      : e instanceof h.Xc
                        ? (n = '@' + e.username)
                        : e instanceof h.u_ && (n = e.username),
            n
        );
    }
    render() {
        let { isDefault: e, paymentSource: t, showSubtext: n, isForSubscription: i, showPaymentSourceIcon: s, showLabels: r } = this.props,
            a = this.renderSubText();
        return (0, l.jsxs)(m.Z, {
            children: [
                s && (0, l.jsx)(g.ZP, { type: this.typeString }),
                (0, l.jsxs)(m.Z, {
                    direction: m.Z.Direction.VERTICAL,
                    className: E.descriptionWrapper,
                    children: [
                        (0, l.jsxs)(m.Z, {
                            align: m.Z.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                r && e
                                    ? (0, l.jsx)('div', {
                                          className: E.defaultIndicator,
                                          children: p.intl.string(p.t.bBvAEB)
                                      })
                                    : null,
                                i
                                    ? (0, l.jsx)('div', {
                                          className: E.premiumIndicator,
                                          children: p.intl.string(p.t.YCrcPD)
                                      })
                                    : null,
                                r && t.invalid
                                    ? (0, l.jsx)('div', {
                                          className: E.invalidIndicator,
                                          children: p.intl.string(p.t['851k9/'])
                                      })
                                    : null
                            ]
                        }),
                        n && null != a
                            ? (0, l.jsx)('div', {
                                  className: E.subText,
                                  children: a
                              })
                            : null
                    ]
                })
            ]
        });
    }
}
(s = {
    isForSubscription: !1,
    isDefault: !1,
    showSubtext: !1,
    showPaymentSourceIcon: !1,
    showLabels: !1
}),
    (i = 'defaultProps') in C
        ? Object.defineProperty(C, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (C[i] = s);
