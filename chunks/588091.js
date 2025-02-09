n.d(t, { default: () => T }), n(47120);
var a = n(200651),
    r = n(192379),
    i = n(120356),
    s = n.n(i),
    l = n(512722),
    c = n.n(l),
    o = n(442837),
    d = n(693789),
    m = n(481060),
    u = n(809086),
    x = n(599456),
    h = n(430824),
    f = n(937615),
    j = n(495437),
    v = n(240864),
    p = n(942833),
    C = n(598952),
    g = n(392739),
    Z = n(400916),
    N = n(916001),
    _ = n(388032),
    y = n(947687);
function z(e) {
    let { guildProductListing: t, guildId: n, skuPricePreview: r } = e,
        i = (0, p.C)(t),
        s = (0, f.T4)(r.amount, r.currency),
        l = (0, o.e7)([h.Z], () => h.Z.getGuild(n));
    return (
        c()(null != l, 'guild cannot be null'),
        (0, a.jsxs)('div', {
            className: y.purchaseSummaryContainer,
            children: [
                (0, a.jsx)(u.Z, {
                    alt: '',
                    className: y.purchaseSummaryImage,
                    listing: t,
                    imageSize: 100
                }),
                (0, a.jsxs)('div', {
                    className: y.purchaseSummarInfo,
                    children: [
                        (0, a.jsx)(m.Text, {
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            children: t.name
                        }),
                        (0, a.jsx)(m.LZC, { size: 4 }),
                        (0, a.jsxs)('div', {
                            className: y.productTypeContainer,
                            children: [
                                (0, a.jsx)(m.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: i
                                }),
                                (0, a.jsx)('div', { className: y.dotSeparator }),
                                (0, a.jsx)(m.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    lineClamp: 2,
                                    children: l.name
                                })
                            ]
                        })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: y.purchaseSummaryPrice,
                    children: [
                        (0, a.jsx)(m.Text, {
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            children: s
                        }),
                        (0, a.jsx)(m.LZC, { size: 4 }),
                        (0, a.jsx)(m.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-muted',
                            children: _.intl.string(_.t['5dWOZW'])
                        })
                    ]
                })
            ]
        })
    );
}
function b(e) {
    var t;
    let { guildProductListing: n, guildId: r } = e,
        i = null !== (t = n.attachments) && void 0 !== t ? t : [],
        l = i.length > 1;
    return 0 === i.length
        ? null
        : (0, a.jsx)(g.Z, {
              label: _.intl.string(_.t.HOkHPD),
              children: (0, a.jsxs)('div', {
                  className: s()(y.attachmentsContainer, { [y.attachmentsContainerMultiple]: l }),
                  children: [
                      (0, a.jsx)('div', {
                          className: y.attachmentGrid,
                          children: i.map((e) => (0, a.jsx)(C.Z, { attachment: e }, e.id))
                      }),
                      (0, a.jsx)('div', {
                          children: (0, a.jsx)(Z.Z, {
                              guildId: r,
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
        : (0, a.jsx)(g.Z, {
              label: _.intl.string(_.t.gWBNen),
              children: (0, a.jsx)(N.Z, { role: t })
          });
}
function L(e) {
    return (0, a.jsx)(m.Text, {
        tag: 'span',
        variant: 'text-md/semibold',
        color: 'text-normal',
        children: e
    });
}
function T(e) {
    var t;
    let { onClose: n, transitionState: i, guildProductListingId: s, guildId: l, skuPricePreview: u } = e,
        f = (0, o.e7)([v.Z], () => v.Z.getGuildProduct(s));
    c()(null != f, 'guildProductListing cannot be null');
    let [p, C] = r.useState(!1);
    r.useEffect(() => {
        !(async function () {
            try {
                C(!0), await (0, j.cf)(l, s), C(!1);
            } catch (e) {
                n(),
                    (0, x.Z)({
                        body: _.intl.string(_.t.VQ0lXV),
                        confirmText: _.intl.string(_.t['NX+WJC']),
                        header: _.intl.string(_.t.OCwKlp),
                        confirmButtonColor: d.zx.Colors.BRAND
                    });
            }
        })();
    }, [l, s, n]);
    let g = (null !== (t = f.attachments) && void 0 !== t ? t : []).length > 0,
        Z = f.role_id,
        N = (0, o.e7)([h.Z], () => (null != Z ? h.Z.getRole(l, Z) : void 0));
    return (0, a.jsx)(m.Y0X, {
        className: y.modal,
        size: m.CgR.DYNAMIC,
        transitionState: i,
        'aria-label': f.name,
        children: (0, a.jsx)(m.hzk, {
            children: (0, a.jsx)('div', {
                className: y.container,
                children: p
                    ? (0, a.jsx)(m.$jN, {})
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsxs)('div', {
                                  className: y.header,
                                  children: [
                                      (0, a.jsx)(m.X6q, {
                                          variant: 'heading-xl/semibold',
                                          color: 'header-primary',
                                          children: _.intl.string(_.t.dhAgv7)
                                      }),
                                      (0, a.jsx)(m.P3F, {
                                          onClick: n,
                                          children: (0, a.jsx)(m.Dio, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: y.close
                                          })
                                      })
                                  ]
                              }),
                              (0, a.jsx)(m.LZC, { size: 16 }),
                              (0, a.jsx)(m.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-normal',
                                  children: _.intl.format(_.t.X6yvvr, {
                                      productName: f.name,
                                      emphasisHook: L
                                  })
                              }),
                              (0, a.jsx)(m.LZC, { size: 12 }),
                              (0, a.jsxs)(m.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-normal',
                                  children: [
                                      g ? _.intl.string(_.t['A/RnkJ']) + ' ' : '',
                                      null != N
                                          ? _.intl.format(_.t.IeJDKi, {
                                                roleName: N.name,
                                                emphasisHook: L
                                            })
                                          : ''
                                  ]
                              }),
                              (0, a.jsx)(m.LZC, { size: 12 }),
                              (0, a.jsx)(m.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-normal',
                                  children: _.intl.string(_.t['9S3QHB'])
                              }),
                              (0, a.jsx)(m.LZC, { size: 24 }),
                              (0, a.jsx)(z, {
                                  guildProductListing: f,
                                  guildId: l,
                                  skuPricePreview: u
                              }),
                              (0, a.jsx)(m.LZC, { size: 32 }),
                              (0, a.jsx)('div', { className: y.divider }),
                              (0, a.jsx)(m.LZC, { size: 32 }),
                              (0, a.jsxs)('ul', {
                                  className: y.benefitsContainer,
                                  children: [
                                      (0, a.jsx)(b, {
                                          guildProductListing: f,
                                          guildId: l
                                      }),
                                      (0, a.jsx)(S, { role: N })
                                  ]
                              })
                          ]
                      })
            })
        })
    });
}
