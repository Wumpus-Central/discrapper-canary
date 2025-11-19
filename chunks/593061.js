n.d(t, { Z: () => _ }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(544891),
    o = n(481060),
    s = n(357841),
    l = n(981631),
    c = n(231338),
    u = n(388032),
    d = n(708016);
async function f(e) {
    try {
        return (
            await a.tn.get({
                url: l.ANM.BILLING_INVOICE_BREAKDOWN,
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
        [n, a] = i.useState(null),
        [l, _] = i.useState(null),
        p = async (e) => {
            try {
                let n = await f(t.id);
                a(n);
                let r = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
                window.open(r, "_blank"), _(null);
            } catch (e) {
                var n;
                _(null == (n = e.body) ? void 0 : n.message);
            }
        };
    function h(e, t) {
        s.Z.open(e, t);
    }
    let m = null != t.paymentSource && t.status === c.Py.COMPLETED,
        g = null == n ? void 0 : n.invoiceLink,
        E = null == n ? void 0 : n.refundInvoiceLinks;
    return t.hasInvoiceURL && null == n
        ? (0, r.jsxs)("div", {
              className: d.downloadInvoice,
              children: [
                  (0, r.jsx)(o.Anchor, {
                      onClick: () => p(!1),
                      children: u.intl.formatToPlainString(u.t.R0xzCN, {}),
                  }),
                  t.hasRefundInvoiceURLs
                      ? (0, r.jsx)(o.Anchor, {
                            className: d.downloadRefundInvoice,
                            onClick: () => p(!0),
                            children: u.intl.formatToPlainString(u.t["3x6NGw"], {}),
                        })
                      : null,
                  null != l &&
                      "" !== l &&
                      (0, r.jsx)(o.M14, {
                          type: "critical",
                          children: l,
                      }),
              ],
          })
        : t.hasInvoiceURL && null != n
          ? (0, r.jsxs)("div", {
                className: d.downloadInvoice,
                children: [
                    (0, r.jsx)(o.Anchor, {
                        href: g,
                        children: u.intl.formatToPlainString(u.t.R0xzCN, {}),
                    }),
                    null != E
                        ? E.map((e, t) =>
                              (0, r.jsx)(
                                  o.Anchor,
                                  {
                                      className: d.downloadRefundInvoice,
                                      href: e,
                                      children: u.intl.formatToPlainString(u.t["3x6NGw"], {}),
                                  },
                                  t,
                              ),
                          )
                        : null,
                    null != l &&
                        "" !== l &&
                        (0, r.jsx)(o.M14, {
                            type: "critical",
                            children: l,
                        }),
                ],
            })
          : m
            ? (0, r.jsx)("div", {
                  className: d.downloadInvoice,
                  children: (0, r.jsx)(o.Anchor, {
                      onClick: () => {
                          h(t, t.paymentSource);
                      },
                      children: u.intl.formatToPlainString(u.t.onRIxS, {}),
                  }),
              })
            : null;
}
