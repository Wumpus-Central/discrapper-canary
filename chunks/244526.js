n.d(t, { Z: () => C });
var i,
    s,
    l,
    r = n(200651),
    a = n(192379),
    o = n(120356),
    c = n.n(o),
    d = n(481060),
    u = n(987032),
    h = n(600164),
    m = n(219929),
    g = n(46141),
    x = n(122289),
    _ = n(624138),
    p = n(388032),
    E = n(222504);
class C extends (l = a.PureComponent) {
    get typeString() {
        let { paymentSource: e } = this.props;
        if (e instanceof g.qo) return m.ZP.Types.PAYPAL;
        if (e instanceof g.Sf) return m.ZP.Types.SOFORT;
        if (e instanceof g.dm) return m.ZP.getType(e.brand);
        if (e instanceof g.fv) return m.ZP.Types.GIROPAY;
        if (e instanceof g.Vg) return m.ZP.Types.PRZELEWY24;
        else if (e instanceof g.sn) return m.ZP.Types.PAYSAFECARD;
        else if (e instanceof g.o_) return m.ZP.Types.GCASH;
        else if (e instanceof g.kX) return m.ZP.Types.GRABPAY;
        else if (e instanceof g.z) return m.ZP.Types.MOMO_WALLET;
        else if (e instanceof g.Xc) return m.ZP.Types.VENMO;
        else if (e instanceof g.Om) return m.ZP.Types.KAKAOPAY;
        else if (e instanceof g.JC) return m.ZP.Types.GOPAY_WALLET;
        else if (e instanceof g.U4) return m.ZP.Types.BANCONTACT;
        else if (e instanceof g.D0) return m.ZP.Types.EPS;
        else if (e instanceof g.jc) return m.ZP.Types.IDEAL;
        else if (e instanceof g.u_) return m.ZP.Types.CASH_APP;
        else if (e instanceof g.$z) return m.ZP.Types.APPLE;
        return m.ZP.Types.UNKNOWN;
    }
    getLabel(e) {
        return e instanceof g.dm
            ? p.intl.format(p.t['o/dsrK'], {
                  brand: (0, _.De)(e.brand),
                  last_4: e.last4
              })
            : e instanceof g.qo
              ? p.intl.string(p.t['2dgEq6'])
              : e instanceof g.Sf
                ? p.intl.string(p.t['edKX//'])
                : e instanceof g.fv
                  ? p.intl.string(p.t['y+0MQU'])
                  : e instanceof g.Vg
                    ? p.intl.string(p.t.u25uLy)
                    : e instanceof g.sn
                      ? p.intl.string(p.t.boznHB)
                      : e instanceof g.o_
                        ? p.intl.string(p.t.PjehcH)
                        : e instanceof g.kX
                          ? p.intl.string(p.t.T5davL)
                          : e instanceof g.z
                            ? p.intl.string(p.t.J0A1Vl)
                            : e instanceof g.Xc
                              ? p.intl.string(p.t.jYOezc)
                              : e instanceof g.Om
                                ? p.intl.string(p.t.CSVexs)
                                : e instanceof g.JC
                                  ? p.intl.string(p.t['43J8JC'])
                                  : e instanceof g.U4
                                    ? p.intl.string(p.t['1ITkfn'])
                                    : e instanceof g.jc
                                      ? p.intl.format(p.t['9kUlRU'], { bank: (0, u.YE)(e.bank) })
                                      : e instanceof g.D0
                                        ? p.intl.format(p.t.hSPoZ2, { bank: (0, u.Ul)(e.bank) })
                                        : e instanceof g.u_
                                          ? p.intl.string(p.t['+rbTmJ'])
                                          : e instanceof g.$z
                                            ? p.intl.string(p.t.RFi12t)
                                            : p.intl.string(p.t.jdPblp);
    }
    renderDescription() {
        let { paymentSource: e, descriptionClassName: t } = this.props;
        return (0, r.jsx)(d.Text, {
            className: c()(E.description, t),
            variant: 'text-md/semibold',
            children: this.getLabel(e)
        });
    }
    renderSubText() {
        let { paymentSource: e, locale: t } = this.props,
            n = null;
        return (
            e instanceof g.dm
                ? (n = p.intl.formatToPlainString(p.t['8rTTub'], {
                      month: (0, x.E2)(e.expiresMonth, t),
                      year: e.expiresYear
                  }))
                : e instanceof g.qo
                  ? (n = e.email)
                  : e instanceof g.Sf
                    ? (n = e.email)
                    : e instanceof g.Vg
                      ? (n = e.email)
                      : e instanceof g.Xc
                        ? (n = '@' + e.username)
                        : e instanceof g.u_ && (n = e.username),
            n
        );
    }
    render() {
        let { isDefault: e, paymentSource: t, showSubtext: n, isForSubscription: i, showPaymentSourceIcon: s, showLabels: l } = this.props,
            a = this.renderSubText();
        return (0, r.jsxs)(h.Z, {
            children: [
                s && (0, r.jsx)(m.ZP, { type: this.typeString }),
                (0, r.jsxs)(h.Z, {
                    direction: h.Z.Direction.VERTICAL,
                    className: E.descriptionWrapper,
                    children: [
                        (0, r.jsxs)(h.Z, {
                            align: h.Z.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                l && e
                                    ? (0, r.jsx)('div', {
                                          className: E.defaultIndicator,
                                          children: p.intl.string(p.t.bBvAEB)
                                      })
                                    : null,
                                i
                                    ? (0, r.jsx)('div', {
                                          className: E.premiumIndicator,
                                          children: p.intl.string(p.t.YCrcPD)
                                      })
                                    : null,
                                l && t.invalid
                                    ? (0, r.jsx)('div', {
                                          className: E.invalidIndicator,
                                          children: p.intl.string(p.t['851k9/'])
                                      })
                                    : null
                            ]
                        }),
                        n && null != a
                            ? (0, r.jsx)('div', {
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
