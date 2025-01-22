n.d(t, {
    Z: function () {
        return C;
    }
});
var i,
    r,
    s,
    a,
    l = n(200651),
    o = n(192379),
    c = n(120356),
    d = n.n(c),
    u = n(481060),
    m = n(987032),
    g = n(600164),
    h = n(219929),
    p = n(46141),
    x = n(122289),
    f = n(624138),
    E = n(388032),
    _ = n(506850);
class C extends (a = o.PureComponent) {
    get typeString() {
        let { paymentSource: e } = this.props;
        if (e instanceof p.qo) return h.ZP.Types.PAYPAL;
        if (e instanceof p.Sf) return h.ZP.Types.SOFORT;
        if (e instanceof p.dm) return h.ZP.getType(e.brand);
        else if (e instanceof p.fv) return h.ZP.Types.GIROPAY;
        else if (e instanceof p.Vg) return h.ZP.Types.PRZELEWY24;
        else if (e instanceof p.sn) return h.ZP.Types.PAYSAFECARD;
        else if (e instanceof p.o_) return h.ZP.Types.GCASH;
        else if (e instanceof p.kX) return h.ZP.Types.GRABPAY;
        else if (e instanceof p.z) return h.ZP.Types.MOMO_WALLET;
        else if (e instanceof p.Xc) return h.ZP.Types.VENMO;
        else if (e instanceof p.Om) return h.ZP.Types.KAKAOPAY;
        else if (e instanceof p.JC) return h.ZP.Types.GOPAY_WALLET;
        else if (e instanceof p.U4) return h.ZP.Types.BANCONTACT;
        else if (e instanceof p.D0) return h.ZP.Types.EPS;
        else if (e instanceof p.jc) return h.ZP.Types.IDEAL;
        else if (e instanceof p.u_) return h.ZP.Types.CASH_APP;
        else if (e instanceof p.$z) return h.ZP.Types.APPLE;
        return h.ZP.Types.UNKNOWN;
    }
    getLabel(e) {
        return e instanceof p.dm
            ? E.intl.format(E.t['o/dsrK'], {
                  brand: (0, f.De)(e.brand),
                  last_4: e.last4
              })
            : e instanceof p.qo
              ? E.intl.string(E.t['2dgEq6'])
              : e instanceof p.Sf
                ? E.intl.string(E.t['edKX//'])
                : e instanceof p.fv
                  ? E.intl.string(E.t['y+0MQU'])
                  : e instanceof p.Vg
                    ? E.intl.string(E.t.u25uLy)
                    : e instanceof p.sn
                      ? E.intl.string(E.t.boznHB)
                      : e instanceof p.o_
                        ? E.intl.string(E.t.PjehcH)
                        : e instanceof p.kX
                          ? E.intl.string(E.t.T5davL)
                          : e instanceof p.z
                            ? E.intl.string(E.t.J0A1Vl)
                            : e instanceof p.Xc
                              ? E.intl.string(E.t.jYOezc)
                              : e instanceof p.Om
                                ? E.intl.string(E.t.CSVexs)
                                : e instanceof p.JC
                                  ? E.intl.string(E.t['43J8JC'])
                                  : e instanceof p.U4
                                    ? E.intl.string(E.t['1ITkfn'])
                                    : e instanceof p.jc
                                      ? E.intl.format(E.t['9kUlRU'], { bank: (0, m.YE)(e.bank) })
                                      : e instanceof p.D0
                                        ? E.intl.format(E.t.hSPoZ2, { bank: (0, m.Ul)(e.bank) })
                                        : e instanceof p.u_
                                          ? E.intl.string(E.t['+rbTmJ'])
                                          : e instanceof p.$z
                                            ? E.intl.string(E.t.RFi12t)
                                            : E.intl.string(E.t.jdPblp);
    }
    renderDescription() {
        let { paymentSource: e, descriptionClassName: t } = this.props;
        return (0, l.jsx)(u.Text, {
            className: d()(_.description, t),
            variant: 'text-md/semibold',
            children: this.getLabel(e)
        });
    }
    renderSubText() {
        let { paymentSource: e, locale: t } = this.props,
            n = null;
        return (
            e instanceof p.dm
                ? (n = E.intl.formatToPlainString(E.t['8rTTub'], {
                      month: (0, x.E2)(e.expiresMonth, t),
                      year: e.expiresYear
                  }))
                : e instanceof p.qo
                  ? (n = e.email)
                  : e instanceof p.Sf
                    ? (n = e.email)
                    : e instanceof p.Vg
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
                r && (0, l.jsx)(h.ZP, { type: this.typeString }),
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
                                          children: E.intl.string(E.t.bBvAEB)
                                      })
                                    : null,
                                i
                                    ? (0, l.jsx)('div', {
                                          className: _.premiumIndicator,
                                          children: E.intl.string(E.t.YCrcPD)
                                      })
                                    : null,
                                s && t.invalid
                                    ? (0, l.jsx)('div', {
                                          className: _.invalidIndicator,
                                          children: E.intl.string(E.t['851k9/'])
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
    (r = 'defaultProps') in (i = C)
        ? Object.defineProperty(i, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = s);
