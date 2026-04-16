n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(562465),
    r = n(397927),
    a = n(279280),
    o = n(652215),
    d = n(818348),
    c = n(985018),
    u = n(12762);
async function m(e) {
    try {
        return (
            await l.Bo.get({
                url: o.Rsh.BILLING_INVOICE_BREAKDOWN,
                query: { payment_id: e },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body;
    } catch (e) {
        throw e;
    }
}
function g(e) {
    let { payment: t } = e,
        [n, l] = s.useState(null),
        [o, g] = s.useState(null),
        _ = async (e) => {
            try {
                let n = await m(t.id);
                l(n);
                let i = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
                window.open(i, "_blank"), g(null);
            } catch (e) {
                g(e.body?.message);
            }
        },
        x = null != t.paymentSource && t.status === d.__.COMPLETED,
        h = n?.invoiceLink,
        A = n?.refundInvoiceLinks;
    return t.hasInvoiceURL && null == n
        ? (0, i.jsxs)("div", {
              className: u.It,
              children: [
                  (0, i.jsx)(r.MzZ, { onClick: () => _(!1), children: c.intl.formatToPlainString(c.t.R0xzCN, {}) }),
                  t.hasRefundInvoiceURLs
                      ? (0, i.jsx)(r.MzZ, {
                            className: u.oe,
                            onClick: () => _(!0),
                            children: c.intl.formatToPlainString(c.t["3x6NGw"], {}),
                        })
                      : null,
                  null != o && "" !== o && (0, i.jsx)(r.wx6, { type: "critical", children: o }),
              ],
          })
        : t.hasInvoiceURL && null != n
          ? (0, i.jsxs)("div", {
                className: u.It,
                children: [
                    (0, i.jsx)(r.MzZ, { href: h, children: c.intl.formatToPlainString(c.t.R0xzCN, {}) }),
                    null != A
                        ? A.map((e, t) =>
                              (0, i.jsx)(
                                  r.MzZ,
                                  { className: u.oe, href: e, children: c.intl.formatToPlainString(c.t["3x6NGw"], {}) },
                                  t,
                              ),
                          )
                        : null,
                    null != o && "" !== o && (0, i.jsx)(r.wx6, { type: "critical", children: o }),
                ],
            })
          : x
            ? (0, i.jsx)("div", {
                  className: u.It,
                  children: (0, i.jsx)(r.MzZ, {
                      onClick: () => {
                          var e;
                          (e = t.paymentSource), a.A.open(t, e);
                      },
                      children: c.intl.formatToPlainString(c.t.onRIxS, {}),
                  }),
              })
            : null;
}
