n.d(t, { default: () => P }), n(388685);
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
    f = n(485386),
    h = n(430824),
    j = n(937615),
    p = n(495437),
    v = n(240864),
    C = n(942833),
    g = n(598952),
    b = n(392739),
    Z = n(400916),
    y = n(916001),
    N = n(388032),
    _ = n(165209);
function z(e) {
    let { guildProductListing: t, guildId: n, skuPricePreview: a } = e,
        i = (0, C.C)(t),
        l = (0, j.T4)(a.amount, a.currency),
        s = (0, o.e7)([h.Z], () => h.Z.getGuild(n));
    return (
        c()(null != s, 'guild cannot be null'),
        (0, r.jsxs)('div', {
            className: _.purchaseSummaryContainer,
            children: [
                (0, r.jsx)(m.Z, {
                    alt: '',
                    className: _.purchaseSummaryImage,
                    listing: t,
                    imageSize: 100
                }),
                (0, r.jsxs)('div', {
                    className: _.purchaseSummarInfo,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            children: t.name
                        }),
                        (0, r.jsx)(u.LZC, { size: 4 }),
                        (0, r.jsxs)('div', {
                            className: _.productTypeContainer,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: i
                                }),
                                (0, r.jsx)('div', { className: _.dotSeparator }),
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
                    className: _.purchaseSummaryPrice,
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
                            children: N.intl.string(N.t['5dWOZW'])
                        })
                    ]
                })
            ]
        })
    );
}
function S(e) {
    var t;
    let { guildProductListing: n, guildId: a } = e,
        i = null != (t = n.attachments) ? t : [],
        s = i.length > 1;
    return 0 === i.length
        ? null
        : (0, r.jsx)(b.Z, {
              label: N.intl.string(N.t.HOkHPD),
              children: (0, r.jsxs)('div', {
                  className: l()(_.attachmentsContainer, { [_.attachmentsContainerMultiple]: s }),
                  children: [
                      (0, r.jsx)('div', {
                          className: _.attachmentGrid,
                          children: i.map((e) => (0, r.jsx)(g.Z, { attachment: e }, e.id))
                      }),
                      (0, r.jsx)('div', {
                          children: (0, r.jsx)(Z.Z, {
                              guildId: a,
                              productId: n.id
                          })
                      })
                  ]
              })
          });
}
function L(e) {
    let { role: t } = e;
    return null == t
        ? null
        : (0, r.jsx)(b.Z, {
              label: N.intl.string(N.t.gWBNen),
              children: (0, r.jsx)(y.Z, { role: t })
          });
}
function T(e) {
    return (0, r.jsx)(u.Text, {
        tag: 'span',
        variant: 'text-md/semibold',
        color: 'text-default',
        children: e
    });
}
function P(e) {
    var t;
    let { onClose: n, transitionState: i, guildProductListingId: l, guildId: s, skuPricePreview: m } = e,
        h = (0, o.e7)([v.Z], () => v.Z.getGuildProduct(l));
    c()(null != h, 'guildProductListing cannot be null');
    let [j, C] = a.useState(!1);
    a.useEffect(() => {
        !(async function () {
            try {
                C(!0), await (0, p.cf)(s, l), C(!1);
            } catch (e) {
                n(),
                    (0, x.Z)({
                        body: N.intl.string(N.t.VQ0lXV),
                        confirmText: N.intl.string(N.t['NX+WJC']),
                        header: N.intl.string(N.t.OCwKlp),
                        confirmButtonColor: d.zx.Colors.BRAND
                    });
            }
        })();
    }, [s, l, n]);
    let g = (null != (t = h.attachments) ? t : []).length > 0,
        b = h.role_id,
        Z = (0, o.e7)([f.Z], () => (null != b ? f.Z.getRole(s, b) : void 0));
    return (0, r.jsx)(u.Y0X, {
        className: _.modal,
        size: u.CgR.DYNAMIC,
        transitionState: i,
        'aria-label': h.name,
        parentComponent: 'GuildProductPurchaseConfirmationModal',
        children: (0, r.jsx)(u.hzk, {
            children: (0, r.jsx)('div', {
                className: _.container,
                children: j
                    ? (0, r.jsx)(u.$jN, {})
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsxs)('div', {
                                  className: _.header,
                                  children: [
                                      (0, r.jsx)(u.X6q, {
                                          variant: 'heading-xl/semibold',
                                          color: 'header-primary',
                                          children: N.intl.string(N.t.dhAgv7)
                                      }),
                                      (0, r.jsx)(u.P3F, {
                                          onClick: n,
                                          children: (0, r.jsx)(u.Dio, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: _.close
                                          })
                                      })
                                  ]
                              }),
                              (0, r.jsx)(u.LZC, { size: 16 }),
                              (0, r.jsx)(u.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-default',
                                  children: N.intl.format(N.t.X6yvvr, {
                                      productName: h.name,
                                      emphasisHook: T
                                  })
                              }),
                              (0, r.jsx)(u.LZC, { size: 12 }),
                              (0, r.jsxs)(u.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-default',
                                  children: [
                                      g ? N.intl.string(N.t['A/RnkJ']) + ' ' : '',
                                      null != Z
                                          ? N.intl.format(N.t.IeJDKi, {
                                                roleName: Z.name,
                                                emphasisHook: T
                                            })
                                          : ''
                                  ]
                              }),
                              (0, r.jsx)(u.LZC, { size: 12 }),
                              (0, r.jsx)(u.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-default',
                                  children: N.intl.string(N.t['9S3QHB'])
                              }),
                              (0, r.jsx)(u.LZC, { size: 24 }),
                              (0, r.jsx)(z, {
                                  guildProductListing: h,
                                  guildId: s,
                                  skuPricePreview: m
                              }),
                              (0, r.jsx)(u.LZC, { size: 32 }),
                              (0, r.jsx)('div', { className: _.divider }),
                              (0, r.jsx)(u.LZC, { size: 32 }),
                              (0, r.jsxs)('ul', {
                                  className: _.benefitsContainer,
                                  children: [
                                      (0, r.jsx)(S, {
                                          guildProductListing: h,
                                          guildId: s
                                      }),
                                      (0, r.jsx)(L, { role: Z })
                                  ]
                              })
                          ]
                      })
            })
        })
    });
}
