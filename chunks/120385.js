n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(562465),
    a = n(349288),
    r = n(683071),
    o = n(279280),
    d = n(652215),
    u = n(818348),
    c = n(985018),
    g = n(600410);
async function m(e) {
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
function _(e) {
    let { payment: t } = e,
        [n, l] = s.useState(null),
        [d, _] = s.useState(null),
        A = async (e) => {
            try {
                let n = await m(t.id);
                l(n);
                let i = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
                window.open(i, "_blank"), _(null);
            } catch (e) {
                _(e.body?.message);
            }
        },
        h = null != t.paymentSource && t.status === u.__.COMPLETED,
        p = n?.invoiceLink,
        x = n?.refundInvoiceLinks;
    return t.hasInvoiceURL && null == n
        ? (0, i.jsxs)("div", {
              className: g.It,
              children: [
                  (0, i.jsx)(a.Anchor, { onClick: () => A(!1), children: c.intl.formatToPlainString(c.t.R0xzCN, {}) }),
                  t.hasRefundInvoiceURLs
                      ? (0, i.jsx)(a.Anchor, {
                            className: g.oe,
                            onClick: () => A(!0),
                            children: c.intl.formatToPlainString(c.t["3x6NGw"], {}),
                        })
                      : null,
                  null != d && "" !== d && (0, i.jsx)(r.w, { type: "critical", children: d }),
              ],
          })
        : t.hasInvoiceURL && null != n
          ? (0, i.jsxs)("div", {
                className: g.It,
                children: [
                    (0, i.jsx)(a.Anchor, { href: p, children: c.intl.formatToPlainString(c.t.R0xzCN, {}) }),
                    null != x
                        ? x.map((e, t) =>
                              (0, i.jsx)(
                                  a.Anchor,
                                  { className: g.oe, href: e, children: c.intl.formatToPlainString(c.t["3x6NGw"], {}) },
                                  t,
                              ),
                          )
                        : null,
                    null != d && "" !== d && (0, i.jsx)(r.w, { type: "critical", children: d }),
                ],
            })
          : h
            ? (0, i.jsx)("div", {
                  className: g.It,
                  children: (0, i.jsx)(a.Anchor, {
                      onClick: () => {
                          var e;
                          (e = t.paymentSource), o.A.open(t, e);
                      },
                      children: c.intl.formatToPlainString(c.t.onRIxS, {}),
                  }),
              })
            : null;
}
