n.d(t, { Z: () => x }), n(953529);
var i,
    r,
    s,
    l = n(255367),
    a = n(73800),
    o = n(120356),
    c = n.n(o),
    d = n(481060),
    u = n(987032),
    g = n(600164),
    m = n(219929),
    p = n(46141),
    h = n(122289),
    f = n(624138),
    b = n(388032),
    _ = n(943617);
class x extends (i = a.PureComponent) {
    get typeString() {
        let { paymentSource: e } = this.props;
        if (e instanceof p.qo) return m.ZP.Types.PAYPAL;
        if (e instanceof p.Sf) return m.ZP.Types.SOFORT;
        if (e instanceof p.dm) return m.ZP.getType(e.brand);
        if (e instanceof p.fv) return m.ZP.Types.GIROPAY;
        if (e instanceof p.Vg) return m.ZP.Types.PRZELEWY24;
        else if (e instanceof p.sn) return m.ZP.Types.PAYSAFECARD;
        else if (e instanceof p.o_) return m.ZP.Types.GCASH;
        else if (e instanceof p.kX) return m.ZP.Types.GRABPAY;
        else if (e instanceof p.z) return m.ZP.Types.MOMO_WALLET;
        else if (e instanceof p.Xc) return m.ZP.Types.VENMO;
        else if (e instanceof p.Om) return m.ZP.Types.KAKAOPAY;
        else if (e instanceof p.JC) return m.ZP.Types.GOPAY_WALLET;
        else if (e instanceof p.U4) return m.ZP.Types.BANCONTACT;
        else if (e instanceof p.D0) return m.ZP.Types.EPS;
        else if (e instanceof p.jc) return m.ZP.Types.IDEAL;
        else if (e instanceof p.u_) return m.ZP.Types.CASH_APP;
        else if (e instanceof p.$z) return m.ZP.Types.APPLE;
        return m.ZP.Types.UNKNOWN;
    }
    getLabel(e) {
        return e instanceof p.dm
            ? b.intl.format(b.t['o/dsrK'], {
                  brand: (0, f.De)(e.brand),
                  last_4: e.last4
              })
            : e instanceof p.qo
              ? b.intl.string(b.t['2dgEq6'])
              : e instanceof p.Sf
                ? b.intl.string(b.t['edKX//'])
                : e instanceof p.fv
                  ? b.intl.string(b.t['y+0MQU'])
                  : e instanceof p.Vg
                    ? b.intl.string(b.t.u25uLy)
                    : e instanceof p.sn
                      ? b.intl.string(b.t.boznHB)
                      : e instanceof p.o_
                        ? b.intl.string(b.t.PjehcH)
                        : e instanceof p.kX
                          ? b.intl.string(b.t.T5davL)
                          : e instanceof p.z
                            ? b.intl.string(b.t.J0A1Vl)
                            : e instanceof p.Xc
                              ? b.intl.string(b.t.jYOezc)
                              : e instanceof p.Om
                                ? b.intl.string(b.t.CSVexs)
                                : e instanceof p.JC
                                  ? b.intl.string(b.t['43J8JC'])
                                  : e instanceof p.U4
                                    ? b.intl.string(b.t['1ITkfn'])
                                    : e instanceof p.jc
                                      ? null == e.bank
                                          ? b.intl.string(b.t.nSbwqK)
                                          : b.intl.format(b.t['9kUlRU'], { bank: (0, u.YE)(e.bank) })
                                      : e instanceof p.D0
                                        ? b.intl.format(b.t.hSPoZ2, { bank: (0, u.Ul)(e.bank) })
                                        : e instanceof p.u_
                                          ? b.intl.string(b.t['+rbTmJ'])
                                          : e instanceof p.$z
                                            ? b.intl.string(b.t.RFi12t)
                                            : b.intl.string(b.t.jdPblp);
    }
    renderDescription() {
        let { paymentSource: e, descriptionClassName: t } = this.props;
        return (0, l.jsx)(d.Text, {
            className: c()(_.description, t),
            variant: 'text-md/semibold',
            children: this.getLabel(e)
        });
    }
    renderSubText() {
        let { paymentSource: e, locale: t } = this.props,
            n = null;
        return (
            e instanceof p.dm
                ? (n = b.intl.formatToPlainString(b.t['8rTTub'], {
                      month: (0, h.E2)(e.expiresMonth, t),
                      year: e.expiresYear
                  }))
                : e instanceof p.qo || e instanceof p.Sf || e instanceof p.Vg
                  ? (n = e.email)
                  : e instanceof p.Xc
                    ? (n = '@' + e.username)
                    : e instanceof p.u_ && (n = e.username),
            n
        );
    }
    render() {
        let { isDefault: e, paymentSource: t, showSubtext: n, isForSubscription: i, showPaymentSourceIcon: r, showLabels: s } = this.props,
            a = this.renderSubText();
        return (0, l.jsxs)(g.Z, {
            children: [
                r && (0, l.jsx)(m.ZP, { type: this.typeString }),
                (0, l.jsxs)(g.Z, {
                    direction: g.Z.Direction.VERTICAL,
                    className: _.descriptionWrapper,
                    children: [
                        (0, l.jsxs)(g.Z, {
                            align: g.Z.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                s && e
                                    ? (0, l.jsx)('div', {
                                          className: _.defaultIndicator,
                                          children: b.intl.string(b.t.bBvAEB)
                                      })
                                    : null,
                                i
                                    ? (0, l.jsx)('div', {
                                          className: _.premiumIndicator,
                                          children: b.intl.string(b.t.YCrcPD)
                                      })
                                    : null,
                                s && t.invalid
                                    ? (0, l.jsx)('div', {
                                          className: _.invalidIndicator,
                                          children: b.intl.string(b.t['851k9/'])
                                      })
                                    : null
                            ]
                        }),
                        n && null != a
                            ? (0, l.jsx)('div', {
                                  className: _.subText,
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
    (r = 'defaultProps') in x
        ? Object.defineProperty(x, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (x[r] = s);
