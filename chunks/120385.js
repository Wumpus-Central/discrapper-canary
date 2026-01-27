n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(562465),
    s = n(397927),
    a = n(279280),
    o = n(652215),
    c = n(818348),
    d = n(985018),
    u = n(124953);
async function _(e) {
    try {
        return (
            await l.Bo.get({
                url: o.Rsh.BILLING_INVOICE_BREAKDOWN,
                query: {
                    payment_id: e,
                },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body;
    } catch (e) {
        throw e;
    }
}

function p(e) {
    let { payment: t } = e,
        [n, l] = i.useState(null),
        [o, p] = i.useState(null),
        m = async (e) => {
            try {
                let n = await _(t.id);
                l(n);
                let r = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
                window.open(r, "_blank"), p(null);
            } catch (e) {
                var n;
                p(null == (n = e.body) ? void 0 : n.message);
            }
        },
        g = null != t.paymentSource && t.status === c.__.COMPLETED,
        A = null == n ? void 0 : n.invoiceLink,
        f = null == n ? void 0 : n.refundInvoiceLinks;
    return t.hasInvoiceURL && null == n
        ? (0, r.jsxs)("div", {
              className: u.It,
              children: [
                  (0, r.jsx)(s.MzZ, {
                      onClick: () => m(!1),
                      children: d.intl.formatToPlainString(d.t.R0xzCN, {}),
                  }),
                  t.hasRefundInvoiceURLs
                      ? (0, r.jsx)(s.MzZ, {
                            className: u.oe,
                            onClick: () => m(!0),
                            children: d.intl.formatToPlainString(d.t["3x6NGw"], {}),
                        })
                      : null,
                  null != o &&
                      "" !== o &&
                      (0, r.jsx)(s.wx6, {
                          type: "critical",
                          children: o,
                      }),
              ],
          })
        : t.hasInvoiceURL && null != n
          ? (0, r.jsxs)("div", {
                className: u.It,
                children: [
                    (0, r.jsx)(s.MzZ, {
                        href: A,
                        children: d.intl.formatToPlainString(d.t.R0xzCN, {}),
                    }),
                    null != f
                        ? f.map((e, t) =>
                              (0, r.jsx)(
                                  s.MzZ,
                                  {
                                      className: u.oe,
                                      href: e,
                                      children: d.intl.formatToPlainString(d.t["3x6NGw"], {}),
                                  },
                                  t,
                              ),
                          )
                        : null,
                    null != o &&
                        "" !== o &&
                        (0, r.jsx)(s.wx6, {
                            type: "critical",
                            children: o,
                        }),
                ],
            })
          : g
            ? (0, r.jsx)("div", {
                  className: u.It,
                  children: (0, r.jsx)(s.MzZ, {
                      onClick: () => {
                          var e;
                          (e = t.paymentSource), a.A.open(t, e);
                      },
                      children: d.intl.formatToPlainString(d.t.onRIxS, {}),
                  }),
              })
            : null;
}
