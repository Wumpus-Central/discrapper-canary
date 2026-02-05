n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    r = n(562465),
    a = n(397927),
    l = n(279280),
    o = n(652215),
    c = n(818348),
    d = n(985018),
    u = n(124953);
async function _(e) {
    try {
        return (
            await r.Bo.get({
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
function m(e) {
    let { payment: t } = e,
        [n, r] = s.useState(null),
        [o, m] = s.useState(null),
        A = async (e) => {
            try {
                let n = await _(t.id);
                r(n);
                let i = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
                window.open(i, "_blank"), m(null);
            } catch (e) {
                m(e.body?.message);
            }
        },
        g = null != t.paymentSource && t.status === c.__.COMPLETED,
        E = n?.invoiceLink,
        h = n?.refundInvoiceLinks;
    return t.hasInvoiceURL && null == n
        ? (0, i.jsxs)("div", {
              className: u.It,
              children: [
                  (0, i.jsx)(a.MzZ, { onClick: () => A(!1), children: d.intl.formatToPlainString(d.t.R0xzCN, {}) }),
                  t.hasRefundInvoiceURLs
                      ? (0, i.jsx)(a.MzZ, {
                            className: u.oe,
                            onClick: () => A(!0),
                            children: d.intl.formatToPlainString(d.t["3x6NGw"], {}),
                        })
                      : null,
                  null != o && "" !== o && (0, i.jsx)(a.wx6, { type: "critical", children: o }),
              ],
          })
        : t.hasInvoiceURL && null != n
          ? (0, i.jsxs)("div", {
                className: u.It,
                children: [
                    (0, i.jsx)(a.MzZ, { href: E, children: d.intl.formatToPlainString(d.t.R0xzCN, {}) }),
                    null != h
                        ? h.map((e, t) =>
                              (0, i.jsx)(
                                  a.MzZ,
                                  { className: u.oe, href: e, children: d.intl.formatToPlainString(d.t["3x6NGw"], {}) },
                                  t,
                              ),
                          )
                        : null,
                    null != o && "" !== o && (0, i.jsx)(a.wx6, { type: "critical", children: o }),
                ],
            })
          : g
            ? (0, i.jsx)("div", {
                  className: u.It,
                  children: (0, i.jsx)(a.MzZ, {
                      onClick: () => {
                          var e;
                          (e = t.paymentSource), l.A.open(t, e);
                      },
                      children: d.intl.formatToPlainString(d.t.onRIxS, {}),
                  }),
              })
            : null;
}
