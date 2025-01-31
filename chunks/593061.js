n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(544891),
    l = n(481060),
    a = n(357841),
    o = n(981631),
    c = n(231338),
    d = n(388032),
    u = n(943857);
async function m(e) {
    try {
        return (
            await r.tn.get({
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
function h(e) {
    let { payment: t } = e,
        [n, r] = s.useState(null),
        [o, h] = s.useState(null),
        g = async (e) => {
            try {
                let n = await m(t.id);
                r(n);
                let i = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
                window.open(i, '_blank'), h(null);
            } catch (e) {
                var n;
                h(null === (n = e.body) || void 0 === n ? void 0 : n.message);
            }
        },
        _ = null != t.paymentSource && t.status === c.Py.COMPLETED,
        x = null == n ? void 0 : n.invoiceLink,
        p = null == n ? void 0 : n.refundInvoiceLinks;
    return t.hasInvoiceURL && null == n
        ? (0, i.jsxs)('div', {
              className: u.downloadInvoice,
              children: [
                  (0, i.jsx)(l.eee, {
                      onClick: () => g(!1),
                      children: d.intl.string(d.t.R0xzCA)
                  }),
                  t.hasRefundInvoiceURLs
                      ? (0, i.jsx)(l.eee, {
                            className: u.downloadRefundInvoice,
                            onClick: () => g(!0),
                            children: d.intl.string(d.t['3x6NGx'])
                        })
                      : null,
                  (0, i.jsx)(l.Text, {
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
                    (0, i.jsx)(l.eee, {
                        href: x,
                        children: d.intl.string(d.t.R0xzCA)
                    }),
                    null != p
                        ? p.map((e, t) =>
                              (0, i.jsx)(
                                  l.eee,
                                  {
                                      className: u.downloadRefundInvoice,
                                      href: e,
                                      children: d.intl.string(d.t['3x6NGx'])
                                  },
                                  t
                              )
                          )
                        : null,
                    (0, i.jsx)(l.Text, {
                        color: 'text-danger',
                        variant: 'text-sm/semibold',
                        children: o
                    })
                ]
            })
          : _
            ? (0, i.jsx)('div', {
                  className: u.downloadInvoice,
                  children: (0, i.jsx)(l.eee, {
                      onClick: () => {
                          var e;
                          (e = t.paymentSource), a.Z.open(t, e);
                      },
                      children: d.intl.string(d.t.onRIxc)
                  })
              })
            : null;
}
