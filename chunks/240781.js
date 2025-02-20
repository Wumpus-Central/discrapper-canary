n.d(t, { Z: () => S }), n(627341);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(278074),
    s = n(442837),
    l = n(481060),
    c = n(884697),
    u = n(449217),
    d = n(905357),
    f = n(95422),
    p = n(222062),
    _ = n(706454),
    h = n(158776),
    m = n(55935),
    g = n(74538),
    E = n(204418),
    v = n(388032),
    b = n(387868);
let y = [
        {
            avatarSize: l.EFr.SIZE_40,
            showStatus: !1
        },
        {
            avatarSize: l.EFr.SIZE_32,
            showStatus: !1
        },
        {
            avatarSize: l.EFr.SIZE_40,
            showStatus: !0
        },
        {
            avatarSize: l.EFr.SIZE_32,
            showStatus: !0
        }
    ],
    O = (e) => {
        let { purchase: t } = e,
            n = (0, s.e7)([_.default], () => _.default.locale),
            i = (0, c.qS)(t),
            o = null != t.expiresAt ? (0, m.TD)(Date.now(), t.expiresAt) : null,
            a = (0, f.a)(t);
        return (0, r.jsxs)('div', {
            className: b.purchaseInfo,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: 'text-sm/semibold',
                    color: 'header-primary',
                    children: a
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    children: t.summary
                }),
                null != o &&
                    (0, r.jsx)(l.Text, {
                        variant: 'text-xxs/normal',
                        color: 'text-muted',
                        children: v.NW.format(v.t.Io7ozs, { days: o.days.toString() })
                    }),
                (0, r.jsxs)(l.Text, {
                    variant: 'text-xxs/normal',
                    color: 'text-muted',
                    children: [
                        v.NW.format(v.t.gW9R4O, {
                            date: t.purchasedAt.toLocaleDateString(n, {
                                month: 'long',
                                year: 'numeric'
                            })
                        }),
                        null != t.expiresAt &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)('br', {}),
                                    v.NW.format(v.t.eZSTa2, {
                                        date: t.expiresAt.toLocaleDateString(n, {
                                            minute: 'numeric',
                                            hour: 'numeric',
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })
                                    })
                                ]
                            })
                    ]
                }),
                i &&
                    (0, r.jsx)(l.Text, {
                        variant: 'text-xxs/normal',
                        color: 'text-muted',
                        children: v.NW.string(v.t.UewH9P)
                    })
            ]
        });
    },
    S = (e) => {
        let { user: t, guildId: n, avatarDecorationOverride: i, className: f } = e,
            _ = (0, s.e7)([h.Z], () => h.Z.getStatus(t.id)),
            { product: m, purchase: S } = (0, u.Z)(null == i ? void 0 : i.skuId),
            I = g.ZP.canUseCollectibles(t),
            T = (0, c.qS)(S),
            N = (0, c.G1)(m),
            A = !I && T,
            C = (0, p.M)(!N || I),
            R = (0, d.k)(m);
        return null != m && (null == S || A)
            ? (0, r.jsxs)('div', {
                  className: o()(b.modalPreview, b.shopPreviewContainer, f),
                  children: [
                      (0, r.jsx)('div', {
                          className: b.shopPreviewBanner,
                          children: (0, r.jsx)(E.Z, {
                              user: t,
                              guildId: n,
                              avatarDecorationOverride: i
                          })
                      }),
                      (0, r.jsxs)('div', {
                          className: b.shopPreviewTextContainer,
                          children: [
                              (0, r.jsx)(l.Text, {
                                  variant: 'text-sm/semibold',
                                  children: R
                              }),
                              (0, r.jsx)(l.Text, {
                                  variant: 'text-sm/normal',
                                  children: A
                                      ? v.NW.string(v.t.zrBmQE)
                                      : (0, a.EQ)([N, I, C])
                                            .with([!0, !0, !1], () => v.NW.string(v.t.L5hyz8))
                                            .with([!0, !1, !0], () => v.NW.string(v.t.q0PlFh))
                                            .with([!0, !1, !1], () => v.NW.string(v.t.ucqOV1))
                                            .otherwise(() => v.NW.string(v.t.UROtt7))
                              })
                          ]
                      })
                  ]
              })
            : (0, r.jsxs)('div', {
                  className: o()(b.modalPreview, f),
                  children: [
                      (0, r.jsxs)('div', {
                          className: b.previewSections,
                          children: [
                              (0, r.jsx)('div', {
                                  className: b.decorationPreview,
                                  children: (0, r.jsx)(E.Z, {
                                      user: t,
                                      guildId: n,
                                      avatarDecorationOverride: i
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: b.smallDecorationPreviewsContainer,
                                  children: y.map((e) => {
                                      let { avatarSize: o, showStatus: a } = e;
                                      return (0, r.jsx)(
                                          'div',
                                          {
                                              className: b.smallDecorationPreview,
                                              children: (0, r.jsx)(E.Z, {
                                                  user: t,
                                                  guildId: n,
                                                  avatarSize: o,
                                                  avatarDecorationOverride: i,
                                                  status: a ? _ : void 0,
                                                  'aria-hidden': !0
                                              })
                                          },
                                          ''.concat(o).concat(a)
                                      );
                                  })
                              })
                          ]
                      }),
                      null != S && (0, r.jsx)(O, { purchase: S })
                  ]
              });
    };
