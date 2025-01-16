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
    _ = n(388032),
    E = n(506850);
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
            ? _.intl.format(_.t['o/dsrK'], {
                  brand: (0, f.De)(e.brand),
                  last_4: e.last4
              })
            : e instanceof p.qo
              ? _.intl.string(_.t['2dgEq6'])
              : e instanceof p.Sf
                ? _.intl.string(_.t['edKX//'])
                : e instanceof p.fv
                  ? _.intl.string(_.t['y+0MQU'])
                  : e instanceof p.Vg
                    ? _.intl.string(_.t.u25uLy)
                    : e instanceof p.sn
                      ? _.intl.string(_.t.boznHB)
                      : e instanceof p.o_
                        ? _.intl.string(_.t.PjehcH)
                        : e instanceof p.kX
                          ? _.intl.string(_.t.T5davL)
                          : e instanceof p.z
                            ? _.intl.string(_.t.J0A1Vl)
                            : e instanceof p.Xc
                              ? _.intl.string(_.t.jYOezc)
                              : e instanceof p.Om
                                ? _.intl.string(_.t.CSVexs)
                                : e instanceof p.JC
                                  ? _.intl.string(_.t['43J8JC'])
                                  : e instanceof p.U4
                                    ? _.intl.string(_.t['1ITkfn'])
                                    : e instanceof p.jc
                                      ? _.intl.format(_.t['9kUlRU'], { bank: (0, m.YE)(e.bank) })
                                      : e instanceof p.D0
                                        ? _.intl.format(_.t.hSPoZ2, { bank: (0, m.Ul)(e.bank) })
                                        : e instanceof p.u_
                                          ? _.intl.string(_.t['+rbTmJ'])
                                          : e instanceof p.$z
                                            ? _.intl.string(_.t.RFi12t)
                                            : _.intl.string(_.t.jdPblp);
    }
    renderDescription() {
        let { paymentSource: e, descriptionClassName: t } = this.props;
        return (0, l.jsx)(u.Text, {
            className: d()(E.description, t),
            variant: 'text-md/semibold',
            children: this.getLabel(e)
        });
    }
    renderSubText() {
        let { paymentSource: e, locale: t } = this.props,
            n = null;
        return (
            e instanceof p.dm
                ? (n = _.intl.formatToPlainString(_.t['8rTTub'], {
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
                    className: E.descriptionWrapper,
                    children: [
                        (0, l.jsxs)(g.Z, {
                            align: g.Z.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                s && e
                                    ? (0, l.jsx)('div', {
                                          className: E.defaultIndicator,
                                          children: _.intl.string(_.t.bBvAEB)
                                      })
                                    : null,
                                i
                                    ? (0, l.jsx)('div', {
                                          className: E.premiumIndicator,
                                          children: _.intl.string(_.t.YCrcPD)
                                      })
                                    : null,
                                s && t.invalid
                                    ? (0, l.jsx)('div', {
                                          className: E.invalidIndicator,
                                          children: _.intl.string(_.t['851k9/'])
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
    (r = 'defaultProps') in (i = C)
        ? Object.defineProperty(i, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = s);
