n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(562465),
    s = n(397927),
    o = n(279280),
    l = n(652215),
    c = n(818348),
    u = n(985018),
    d = n(124953);
async function f(e) {
    try {
        return (
            await a.Bo.get({
                url: l.Rsh.BILLING_INVOICE_BREAKDOWN,
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
        [n, a] = i.useState(null),
        [l, p] = i.useState(null),
        _ = async (e) => {
            try {
                let n = await f(t.id);
                a(n);
                let r = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
                window.open(r, "_blank"), p(null);
            } catch (e) {
                var n;
                p(null == (n = e.body) ? void 0 : n.message);
            }
        };

    function h(e, t) {
        o.A.open(e, t);
    }
    let m = null != t.paymentSource && t.status === c.__.COMPLETED,
        g = null == n ? void 0 : n.invoiceLink,
        E = null == n ? void 0 : n.refundInvoiceLinks;
    return t.hasInvoiceURL && null == n
        ? (0, r.jsxs)("div", {
              className: d.It,
              children: [
                  (0, r.jsx)(s.MzZ, {
                      onClick: () => _(!1),
                      children: u.intl.formatToPlainString(u.t.R0xzCN, {}),
                  }),
                  t.hasRefundInvoiceURLs
                      ? (0, r.jsx)(s.MzZ, {
                            className: d.oe,
                            onClick: () => _(!0),
                            children: u.intl.formatToPlainString(u.t["3x6NGw"], {}),
                        })
                      : null,
                  null != l &&
                      "" !== l &&
                      (0, r.jsx)(s.wx6, {
                          type: "critical",
                          children: l,
                      }),
              ],
          })
        : t.hasInvoiceURL && null != n
          ? (0, r.jsxs)("div", {
                className: d.It,
                children: [
                    (0, r.jsx)(s.MzZ, {
                        href: g,
                        children: u.intl.formatToPlainString(u.t.R0xzCN, {}),
                    }),
                    null != E
                        ? E.map((e, t) =>
                              (0, r.jsx)(
                                  s.MzZ,
                                  {
                                      className: d.oe,
                                      href: e,
                                      children: u.intl.formatToPlainString(u.t["3x6NGw"], {}),
                                  },
                                  t,
                              ),
                          )
                        : null,
                    null != l &&
                        "" !== l &&
                        (0, r.jsx)(s.wx6, {
                            type: "critical",
                            children: l,
                        }),
                ],
            })
          : m
            ? (0, r.jsx)("div", {
                  className: d.It,
                  children: (0, r.jsx)(s.MzZ, {
                      onClick: () => {
                          h(t, t.paymentSource);
                      },
                      children: u.intl.formatToPlainString(u.t.onRIxS, {}),
                  }),
              })
            : null;
}
