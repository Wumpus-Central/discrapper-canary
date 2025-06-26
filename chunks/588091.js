n.d(t, { default: () => T }), n(388685);
var r = n(255367),
    a = n(73800),
    i = n(120356),
    l = n.n(i),
    s = n(512722),
    c = n.n(s),
    o = n(442837),
    d = n(693789),
    u = n(481060),
    m = n(809086),
    x = n(599456),
    f = n(430824),
    h = n(937615),
    j = n(495437),
    p = n(240864),
    v = n(942833),
    C = n(598952),
    g = n(392739),
    b = n(400916),
    Z = n(916001),
    y = n(388032),
    N = n(165209);
function _(e) {
    let { guildProductListing: t, guildId: n, skuPricePreview: a } = e,
        i = (0, v.C)(t),
        l = (0, h.T4)(a.amount, a.currency),
        s = (0, o.e7)([f.Z], () => f.Z.getGuild(n));
    return (
        c()(null != s, 'guild cannot be null'),
        (0, r.jsxs)('div', {
            className: N.purchaseSummaryContainer,
            children: [
                (0, r.jsx)(m.Z, {
                    alt: '',
                    className: N.purchaseSummaryImage,
                    listing: t,
                    imageSize: 100
                }),
                (0, r.jsxs)('div', {
                    className: N.purchaseSummarInfo,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            children: t.name
                        }),
                        (0, r.jsx)(u.LZC, { size: 4 }),
                        (0, r.jsxs)('div', {
                            className: N.productTypeContainer,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: i
                                }),
                                (0, r.jsx)('div', { className: N.dotSeparator }),
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    lineClamp: 2,
                                    children: s.name
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: N.purchaseSummaryPrice,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            children: l
                        }),
                        (0, r.jsx)(u.LZC, { size: 4 }),
                        (0, r.jsx)(u.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-muted',
                            children: y.intl.string(y.t['5dWOZW'])
                        })
                    ]
                })
            ]
        })
    );
}
function z(e) {
    var t;
    let { guildProductListing: n, guildId: a } = e,
        i = null != (t = n.attachments) ? t : [],
        s = i.length > 1;
    return 0 === i.length
        ? null
        : (0, r.jsx)(g.Z, {
              label: y.intl.string(y.t.HOkHPD),
              children: (0, r.jsxs)('div', {
                  className: l()(N.attachmentsContainer, { [N.attachmentsContainerMultiple]: s }),
                  children: [
                      (0, r.jsx)('div', {
                          className: N.attachmentGrid,
                          children: i.map((e) => (0, r.jsx)(C.Z, { attachment: e }, e.id))
                      }),
                      (0, r.jsx)('div', {
                          children: (0, r.jsx)(b.Z, {
                              guildId: a,
                              productId: n.id
                          })
                      })
                  ]
              })
          });
}
function S(e) {
    let { role: t } = e;
    return null == t
        ? null
        : (0, r.jsx)(g.Z, {
              label: y.intl.string(y.t.gWBNen),
              children: (0, r.jsx)(Z.Z, { role: t })
          });
}
function L(e) {
    return (0, r.jsx)(u.Text, {
        tag: 'span',
        variant: 'text-md/semibold',
        color: 'text-default',
        children: e
    });
}
function T(e) {
    var t;
    let { onClose: n, transitionState: i, guildProductListingId: l, guildId: s, skuPricePreview: m } = e,
        h = (0, o.e7)([p.Z], () => p.Z.getGuildProduct(l));
    c()(null != h, 'guildProductListing cannot be null');
    let [v, C] = a.useState(!1);
    a.useEffect(() => {
        !(async function () {
            try {
                C(!0), await (0, j.cf)(s, l), C(!1);
            } catch (e) {
                n(),
                    (0, x.Z)({
                        body: y.intl.string(y.t.VQ0lXV),
                        confirmText: y.intl.string(y.t['NX+WJC']),
                        header: y.intl.string(y.t.OCwKlp),
                        confirmButtonColor: d.zx.Colors.BRAND
                    });
            }
        })();
    }, [s, l, n]);
    let g = (null != (t = h.attachments) ? t : []).length > 0,
        b = h.role_id,
        Z = (0, o.e7)([f.Z], () => (null != b ? f.Z.getRole(s, b) : void 0));
    return (0, r.jsx)(u.Y0X, {
        className: N.modal,
        size: u.CgR.DYNAMIC,
        transitionState: i,
        'aria-label': h.name,
        parentComponent: 'GuildProductPurchaseConfirmationModal',
        children: (0, r.jsx)(u.hzk, {
            children: (0, r.jsx)('div', {
                className: N.container,
                children: v
                    ? (0, r.jsx)(u.$jN, {})
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsxs)('div', {
                                  className: N.header,
                                  children: [
                                      (0, r.jsx)(u.X6q, {
                                          variant: 'heading-xl/semibold',
                                          color: 'header-primary',
                                          children: y.intl.string(y.t.dhAgv7)
                                      }),
                                      (0, r.jsx)(u.P3F, {
                                          onClick: n,
                                          children: (0, r.jsx)(u.Dio, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: N.close
                                          })
                                      })
                                  ]
                              }),
                              (0, r.jsx)(u.LZC, { size: 16 }),
                              (0, r.jsx)(u.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-default',
                                  children: y.intl.format(y.t.X6yvvr, {
                                      productName: h.name,
                                      emphasisHook: L
                                  })
                              }),
                              (0, r.jsx)(u.LZC, { size: 12 }),
                              (0, r.jsxs)(u.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-default',
                                  children: [
                                      g ? y.intl.string(y.t['A/RnkJ']) + ' ' : '',
                                      null != Z
                                          ? y.intl.format(y.t.IeJDKi, {
                                                roleName: Z.name,
                                                emphasisHook: L
                                            })
                                          : ''
                                  ]
                              }),
                              (0, r.jsx)(u.LZC, { size: 12 }),
                              (0, r.jsx)(u.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-default',
                                  children: y.intl.string(y.t['9S3QHB'])
                              }),
                              (0, r.jsx)(u.LZC, { size: 24 }),
                              (0, r.jsx)(_, {
                                  guildProductListing: h,
                                  guildId: s,
                                  skuPricePreview: m
                              }),
                              (0, r.jsx)(u.LZC, { size: 32 }),
                              (0, r.jsx)('div', { className: N.divider }),
                              (0, r.jsx)(u.LZC, { size: 32 }),
                              (0, r.jsxs)('ul', {
                                  className: N.benefitsContainer,
                                  children: [
                                      (0, r.jsx)(z, {
                                          guildProductListing: h,
                                          guildId: s
                                      }),
                                      (0, r.jsx)(S, { role: Z })
                                  ]
                              })
                          ]
                      })
            })
        })
    });
}
