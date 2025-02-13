n.d(t, { Z: () => m }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(544891),
    r = n(481060),
    a = n(357841),
    o = n(981631),
    c = n(231338),
    d = n(388032),
    u = n(594944);
async function h(e) {
    try {
        return (
            await l.tn.get({
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
function m(e) {
    let { payment: t } = e,
        [n, l] = s.useState(null),
        [o, m] = s.useState(null),
        g = async (e) => {
            try {
                let n = await h(t.id);
                l(n);
                let i = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
                window.open(i, '_blank'), m(null);
            } catch (e) {
                var n;
                m(null === (n = e.body) || void 0 === n ? void 0 : n.message);
            }
        },
        x = null != t.paymentSource && t.status === c.Py.COMPLETED,
        _ = null == n ? void 0 : n.invoiceLink,
        p = null == n ? void 0 : n.refundInvoiceLinks;
    return t.hasInvoiceURL && null == n
        ? (0, i.jsxs)('div', {
              className: u.downloadInvoice,
              children: [
                  (0, i.jsx)(r.eee, {
                      onClick: () => g(!1),
                      children: d.intl.string(d.t.R0xzCA)
                  }),
                  t.hasRefundInvoiceURLs
                      ? (0, i.jsx)(r.eee, {
                            className: u.downloadRefundInvoice,
                            onClick: () => g(!0),
                            children: d.intl.string(d.t['3x6NGx'])
                        })
                      : null,
                  (0, i.jsx)(r.Text, {
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
                    (0, i.jsx)(r.eee, {
                        href: _,
                        children: d.intl.string(d.t.R0xzCA)
                    }),
                    null != p
                        ? p.map((e, t) =>
                              (0, i.jsx)(
                                  r.eee,
                                  {
                                      className: u.downloadRefundInvoice,
                                      href: e,
                                      children: d.intl.string(d.t['3x6NGx'])
                                  },
                                  t
                              )
                          )
                        : null,
                    (0, i.jsx)(r.Text, {
                        color: 'text-danger',
                        variant: 'text-sm/semibold',
                        children: o
                    })
                ]
            })
          : x
            ? (0, i.jsx)('div', {
                  className: u.downloadInvoice,
                  children: (0, i.jsx)(r.eee, {
                      onClick: () => {
                          var e;
                          (e = t.paymentSource), a.Z.open(t, e);
                      },
                      children: d.intl.string(d.t.onRIxc)
                  })
              })
            : null;
}
