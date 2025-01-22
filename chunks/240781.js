var i = r(627341);
var a = r(200651);
r(192379);
var o = r(120356),
    s = r.n(o),
    l = r(278074),
    u = r(442837),
    c = r(481060),
    d = r(884697),
    f = r(449217),
    p = r(905357),
    h = r(95422),
    _ = r(222062),
    m = r(706454),
    g = r(158776),
    E = r(55935),
    v = r(74538),
    y = r(204418),
    b = r(388032),
    I = r(622952);
let T = [
        {
            avatarSize: c.AvatarSizes.SIZE_40,
            showStatus: !1
        },
        {
            avatarSize: c.AvatarSizes.SIZE_32,
            showStatus: !1
        },
        {
            avatarSize: c.AvatarSizes.SIZE_40,
            showStatus: !0
        },
        {
            avatarSize: c.AvatarSizes.SIZE_32,
            showStatus: !0
        }
    ],
    S = (e) => {
        let { purchase: n } = e,
            r = (0, u.e7)([m.default], () => m.default.locale),
            i = (0, d.qS)(n),
            o = null != n.expiresAt ? (0, E.TD)(Date.now(), n.expiresAt) : null,
            s = (0, h.a)(n);
        return (0, a.jsxs)('div', {
            className: I.purchaseInfo,
            children: [
                (0, a.jsx)(c.Text, {
                    variant: 'text-sm/semibold',
                    color: 'header-primary',
                    children: s
                }),
                (0, a.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    children: n.summary
                }),
                null != o &&
                    (0, a.jsx)(c.Text, {
                        variant: 'text-xxs/normal',
                        color: 'text-muted',
                        children: b.intl.format(b.t.Io7ozs, { days: o.days.toString() })
                    }),
                (0, a.jsxs)(c.Text, {
                    variant: 'text-xxs/normal',
                    color: 'text-muted',
                    children: [
                        b.intl.format(b.t.gW9R4O, {
                            date: n.purchasedAt.toLocaleDateString(r, {
                                month: 'long',
                                year: 'numeric'
                            })
                        }),
                        null != n.expiresAt &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)('br', {}),
                                    b.intl.format(b.t.eZSTa2, {
                                        date: n.expiresAt.toLocaleDateString(r, {
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
                    (0, a.jsx)(c.Text, {
                        variant: 'text-xxs/normal',
                        color: 'text-muted',
                        children: b.intl.string(b.t.UewH9P)
                    })
            ]
        });
    },
    A = (e) => {
        let { user: n, guildId: r, avatarDecorationOverride: i, className: o } = e,
            h = (0, u.e7)([g.Z], () => g.Z.getStatus(n.id)),
            { product: m, purchase: E } = (0, f.Z)(null == i ? void 0 : i.skuId),
            A = v.ZP.canUseCollectibles(n),
            C = (0, d.qS)(E),
            N = (0, d.G1)(m),
            R = !A && C,
            O = (0, _.M)(!N || A),
            D = (0, p.k)(m);
        return null != m && (null == E || R)
            ? (0, a.jsxs)('div', {
                  className: s()(I.modalPreview, I.shopPreviewContainer, o),
                  children: [
                      (0, a.jsx)('div', {
                          className: I.shopPreviewBanner,
                          children: (0, a.jsx)(y.Z, {
                              user: n,
                              guildId: r,
                              avatarDecorationOverride: i
                          })
                      }),
                      (0, a.jsxs)('div', {
                          className: I.shopPreviewTextContainer,
                          children: [
                              (0, a.jsx)(c.Text, {
                                  variant: 'text-sm/semibold',
                                  children: D
                              }),
                              (0, a.jsx)(c.Text, {
                                  variant: 'text-sm/normal',
                                  children: R
                                      ? b.intl.string(b.t.zrBmQE)
                                      : (0, l.EQ)([N, A, O])
                                            .with([!0, !0, !1], () => b.intl.string(b.t.L5hyz8))
                                            .with([!0, !1, !0], () => b.intl.string(b.t.q0PlFh))
                                            .with([!0, !1, !1], () => b.intl.string(b.t.ucqOV1))
                                            .otherwise(() => b.intl.string(b.t.UROtt7))
                              })
                          ]
                      })
                  ]
              })
            : (0, a.jsxs)('div', {
                  className: s()(I.modalPreview, o),
                  children: [
                      (0, a.jsxs)('div', {
                          className: I.previewSections,
                          children: [
                              (0, a.jsx)('div', {
                                  className: I.decorationPreview,
                                  children: (0, a.jsx)(y.Z, {
                                      user: n,
                                      guildId: r,
                                      avatarDecorationOverride: i
                                  })
                              }),
                              (0, a.jsx)('div', {
                                  className: I.smallDecorationPreviewsContainer,
                                  children: T.map((e) => {
                                      let { avatarSize: o, showStatus: s } = e;
                                      return (0, a.jsx)(
                                          'div',
                                          {
                                              className: I.smallDecorationPreview,
                                              children: (0, a.jsx)(y.Z, {
                                                  user: n,
                                                  guildId: r,
                                                  avatarSize: o,
                                                  avatarDecorationOverride: i,
                                                  status: s ? h : void 0,
                                                  'aria-hidden': !0
                                              })
                                          },
                                          ''.concat(o).concat(s)
                                      );
                                  })
                              })
                          ]
                      }),
                      null != E && (0, a.jsx)(S, { purchase: E })
                  ]
              });
    };
n.Z = A;
