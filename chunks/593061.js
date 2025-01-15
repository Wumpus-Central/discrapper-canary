n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(544891),
    a = n(481060),
    l = n(357841),
    o = n(981631),
    c = n(231338),
    d = n(388032),
    u = n(712226);
async function m(e) {
    try {
        return (
            await s.tn.get({
                url: o.ANM.BILLING_INVOICE_BREAKDOWN,
                query: { payment_id: e },
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body;
    } catch (e) {
        throw e;
    }
}
function g(e) {
    let { payment: t } = e,
        [n, s] = r.useState(null),
        [o, g] = r.useState(null),
        h = async (e) => {
            try {
                let n = await m(t.id);
                s(n);
                let i = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
                window.open(i, '_blank'), g(null);
            } catch (e) {
                var n;
                g(null === (n = e.body) || void 0 === n ? void 0 : n.message);
            }
        },
        p = null != t.paymentSource && t.status === c.Py.COMPLETED,
        x = null == n ? void 0 : n.invoiceLink,
        f = null == n ? void 0 : n.refundInvoiceLinks;
    return t.hasInvoiceURL && null == n
        ? (0, i.jsxs)('div', {
              className: u.downloadInvoice,
              children: [
                  (0, i.jsx)(a.Anchor, {
                      onClick: () => h(!1),
                      children: d.intl.string(d.t.R0xzCA)
                  }),
                  t.hasRefundInvoiceURLs
                      ? (0, i.jsx)(a.Anchor, {
                            className: u.downloadRefundInvoice,
                            onClick: () => h(!0),
                            children: d.intl.string(d.t['3x6NGx'])
                        })
                      : null,
                  (0, i.jsx)(a.Text, {
                      color: 'text-danger',
                      variant: 'text-sm/semibold',
                      children: o
                  })
              ]
          })
        : t.hasInvoiceURL && null != n
          ? (0, i.jsxs)('div', {
                className: u.downloadInvoice,
                children: [
                    (0, i.jsx)(a.Anchor, {
                        href: x,
                        children: d.intl.string(d.t.R0xzCA)
                    }),
                    null != f
                        ? f.map((e, t) =>
                              (0, i.jsx)(
                                  a.Anchor,
                                  {
                                      className: u.downloadRefundInvoice,
                                      href: e,
                                      children: d.intl.string(d.t['3x6NGx'])
                                  },
                                  t
                              )
                          )
                        : null,
                    (0, i.jsx)(a.Text, {
                        color: 'text-danger',
                        variant: 'text-sm/semibold',
                        children: o
                    })
                ]
            })
          : p
            ? (0, i.jsx)('div', {
                  className: u.downloadInvoice,
                  children: (0, i.jsx)(a.Anchor, {
                      onClick: () => {
                          var e, n;
                          (e = t), (n = t.paymentSource), l.Z.open(e, n);
                      },
                      children: d.intl.string(d.t.onRIxc)
                  })
              })
            : null;
}
