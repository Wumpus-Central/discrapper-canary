n.d(t, { default: () => T }), n(47120);
var r = n(200651),
    a = n(192379),
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
    p = n(240864),
    v = n(942833),
    g = n(598952),
    C = n(392739),
    N = n(400916),
    b = n(916001),
    Z = n(388032),
    y = n(165209);
function _(e) {
    let { guildProductListing: t, guildId: n, skuPricePreview: a } = e,
        i = (0, v.C)(t),
        s = (0, f.T4)(a.amount, a.currency),
        l = (0, o.e7)([h.Z], () => h.Z.getGuild(n));
    return (
        c()(null != l, 'guild cannot be null'),
        (0, r.jsxs)('div', {
            className: y.purchaseSummaryContainer,
            children: [
                (0, r.jsx)(u.Z, {
                    alt: '',
                    className: y.purchaseSummaryImage,
                    listing: t,
                    imageSize: 100
                }),
                (0, r.jsxs)('div', {
                    className: y.purchaseSummarInfo,
                    children: [
                        (0, r.jsx)(m.Text, {
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            children: t.name
                        }),
                        (0, r.jsx)(m.LZC, { size: 4 }),
                        (0, r.jsxs)('div', {
                            className: y.productTypeContainer,
                            children: [
                                (0, r.jsx)(m.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: i
                                }),
                                (0, r.jsx)('div', { className: y.dotSeparator }),
                                (0, r.jsx)(m.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    lineClamp: 2,
                                    children: l.name
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: y.purchaseSummaryPrice,
                    children: [
                        (0, r.jsx)(m.Text, {
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            children: s
                        }),
                        (0, r.jsx)(m.LZC, { size: 4 }),
                        (0, r.jsx)(m.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-muted',
                            children: Z.NW.string(Z.t['5dWOZW'])
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
        l = i.length > 1;
    return 0 === i.length
        ? null
        : (0, r.jsx)(C.Z, {
              label: Z.NW.string(Z.t.HOkHPD),
              children: (0, r.jsxs)('div', {
                  className: s()(y.attachmentsContainer, { [y.attachmentsContainerMultiple]: l }),
                  children: [
                      (0, r.jsx)('div', {
                          className: y.attachmentGrid,
                          children: i.map((e) => (0, r.jsx)(g.Z, { attachment: e }, e.id))
                      }),
                      (0, r.jsx)('div', {
                          children: (0, r.jsx)(N.Z, {
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
        : (0, r.jsx)(C.Z, {
              label: Z.NW.string(Z.t.gWBNen),
              children: (0, r.jsx)(b.Z, { role: t })
          });
}
function L(e) {
    return (0, r.jsx)(m.Text, {
        tag: 'span',
        variant: 'text-md/semibold',
        color: 'text-normal',
        children: e
    });
}
function T(e) {
    var t;
    let { onClose: n, transitionState: i, guildProductListingId: s, guildId: l, skuPricePreview: u } = e,
        f = (0, o.e7)([p.Z], () => p.Z.getGuildProduct(s));
    c()(null != f, 'guildProductListing cannot be null');
    let [v, g] = a.useState(!1);
    a.useEffect(() => {
        !(async function () {
            try {
                g(!0), await (0, j.cf)(l, s), g(!1);
            } catch (e) {
                n(),
                    (0, x.Z)({
                        body: Z.NW.string(Z.t.VQ0lXV),
                        confirmText: Z.NW.string(Z.t['NX+WJC']),
                        header: Z.NW.string(Z.t.OCwKlp),
                        confirmButtonColor: d.zx.Colors.BRAND
                    });
            }
        })();
    }, [l, s, n]);
    let C = (null != (t = f.attachments) ? t : []).length > 0,
        N = f.role_id,
        b = (0, o.e7)([h.Z], () => (null != N ? h.Z.getRole(l, N) : void 0));
    return (0, r.jsx)(m.Y0X, {
        className: y.modal,
        size: m.CgR.DYNAMIC,
        transitionState: i,
        'aria-label': f.name,
        children: (0, r.jsx)(m.hzk, {
            children: (0, r.jsx)('div', {
                className: y.container,
                children: v
                    ? (0, r.jsx)(m.$jN, {})
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsxs)('div', {
                                  className: y.header,
                                  children: [
                                      (0, r.jsx)(m.X6q, {
                                          variant: 'heading-xl/semibold',
                                          color: 'header-primary',
                                          children: Z.NW.string(Z.t.dhAgv7)
                                      }),
                                      (0, r.jsx)(m.P3F, {
                                          onClick: n,
                                          children: (0, r.jsx)(m.Dio, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: y.close
                                          })
                                      })
                                  ]
                              }),
                              (0, r.jsx)(m.LZC, { size: 16 }),
                              (0, r.jsx)(m.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-normal',
                                  children: Z.NW.format(Z.t.X6yvvr, {
                                      productName: f.name,
                                      emphasisHook: L
                                  })
                              }),
                              (0, r.jsx)(m.LZC, { size: 12 }),
                              (0, r.jsxs)(m.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-normal',
                                  children: [
                                      C ? Z.NW.string(Z.t['A/RnkJ']) + ' ' : '',
                                      null != b
                                          ? Z.NW.format(Z.t.IeJDKi, {
                                                roleName: b.name,
                                                emphasisHook: L
                                            })
                                          : ''
                                  ]
                              }),
                              (0, r.jsx)(m.LZC, { size: 12 }),
                              (0, r.jsx)(m.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-normal',
                                  children: Z.NW.string(Z.t['9S3QHB'])
                              }),
                              (0, r.jsx)(m.LZC, { size: 24 }),
                              (0, r.jsx)(_, {
                                  guildProductListing: f,
                                  guildId: l,
                                  skuPricePreview: u
                              }),
                              (0, r.jsx)(m.LZC, { size: 32 }),
                              (0, r.jsx)('div', { className: y.divider }),
                              (0, r.jsx)(m.LZC, { size: 32 }),
                              (0, r.jsxs)('ul', {
                                  className: y.benefitsContainer,
                                  children: [
                                      (0, r.jsx)(z, {
                                          guildProductListing: f,
                                          guildId: l
                                      }),
                                      (0, r.jsx)(S, { role: b })
                                  ]
                              })
                          ]
                      })
            })
        })
    });
}
