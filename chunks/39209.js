n.d(t, { A: () => E });
var i = n(477900),
    s = n(582128),
    l = n(636537),
    r = n(28863),
    a = n(683071),
    o = n(192308);
let u = function (e, t) {
    (0, o.openModalLazy)(async () => {
        let { default: s } = await Promise.all([n.e("407755"), n.e("234138")]).then(n.bind(n, 206049));
        return (n) => (0, i.jsx)(s, { payment: e, paymentSource: t, ...n });
    });
};
var d = n(652215),
    c = n(818348),
    g = n(375708),
    m = n(460103);
async function A(e) {
    try {
        return (
            await l.Bo.get({
                url: d.Rsh.BILLING_INVOICE_BREAKDOWN,
                query: { payment_id: e },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body;
    } catch (e) {
        throw e;
    }
}
function E(e) {
    let { payment: t } = e,
        [n, l] = s.useState(null),
        [o, d] = s.useState(null);
    async function E(e) {
        try {
            let n = await A(t.id);
            l(n);
            let i = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
            (window.open(i, "_blank"), d(null));
        } catch (e) {
            d(e.body?.message);
        }
    }
    let h = null != t.paymentSource && t.status === c.__.COMPLETED,
        x = n?.invoiceLink,
        p = n?.refundInvoiceLinks;
    return t.hasInvoiceURL && null == n
        ? (0, i.jsxs)("div", {
              className: m.It,
              children: [
                  (0, i.jsx)(r.Anchor, { onClick: () => E(!1), children: g.intl.formatToPlainString(g.t.R0xzCN, {}) }),
                  t.hasRefundInvoiceURLs
                      ? (0, i.jsx)(r.Anchor, {
                            className: m.oe,
                            onClick: () => E(!0),
                            children: g.intl.formatToPlainString(g.t["3x6NGw"], {}),
                        })
                      : null,
                  null != o && "" !== o && (0, i.jsx)(a.w, { type: "critical", children: o }),
              ],
          })
        : t.hasInvoiceURL && null != n
          ? (0, i.jsxs)("div", {
                className: m.It,
                children: [
                    (0, i.jsx)(r.Anchor, { href: x, children: g.intl.formatToPlainString(g.t.R0xzCN, {}) }),
                    null != p
                        ? p.map((e, t) =>
                              (0, i.jsx)(
                                  r.Anchor,
                                  { className: m.oe, href: e, children: g.intl.formatToPlainString(g.t["3x6NGw"], {}) },
                                  t,
                              ),
                          )
                        : null,
                    null != o && "" !== o && (0, i.jsx)(a.w, { type: "critical", children: o }),
                ],
            })
          : h
            ? (0, i.jsx)("div", {
                  className: m.It,
                  children: (0, i.jsx)(r.Anchor, {
                      onClick: () => {
                          var e;
                          ((e = t.paymentSource), u(t, e));
                      },
                      children: g.intl.formatToPlainString(g.t.onRIxS, {}),
                  }),
              })
            : null;
}
