var i = r(627341);
var a = r(200651);
r(192379);
var s = r(120356),
    o = r.n(s),
    l = r(278074),
    u = r(442837),
    c = r(481060),
    d = r(884697),
    f = r(449217),
    _ = r(905357),
    h = r(95422),
    p = r(222062),
    m = r(706454),
    g = r(158776),
    E = r(55935),
    v = r(74538),
    I = r(204418),
    T = r(388032),
    b = r(622952);
let y = [
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
            s = null != n.expiresAt ? (0, E.TD)(Date.now(), n.expiresAt) : null,
            o = (0, h.a)(n);
        return (0, a.jsxs)('div', {
            className: b.purchaseInfo,
            children: [
                (0, a.jsx)(c.Text, {
                    variant: 'text-sm/semibold',
                    color: 'header-primary',
                    children: o
                }),
                (0, a.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    children: n.summary
                }),
                null != s &&
                    (0, a.jsx)(c.Text, {
                        variant: 'text-xxs/normal',
                        color: 'text-muted',
                        children: T.intl.format(T.t.Io7ozs, { days: s.days.toString() })
                    }),
                (0, a.jsxs)(c.Text, {
                    variant: 'text-xxs/normal',
                    color: 'text-muted',
                    children: [
                        T.intl.format(T.t.gW9R4O, {
                            date: n.purchasedAt.toLocaleDateString(r, {
                                month: 'long',
                                year: 'numeric'
                            })
                        }),
                        null != n.expiresAt &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)('br', {}),
                                    T.intl.format(T.t.eZSTa2, {
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
                        children: T.intl.string(T.t.UewH9P)
                    })
            ]
        });
    },
    A = (e) => {
        let { user: n, guildId: r, avatarDecorationOverride: i, className: s } = e,
            h = (0, u.e7)([g.Z], () => g.Z.getStatus(n.id)),
            { product: m, purchase: E } = (0, f.Z)(null == i ? void 0 : i.skuId),
            A = v.ZP.canUseCollectibles(n),
            N = (0, d.qS)(E),
            C = (0, d.G1)(m),
            R = !A && N,
            O = (0, p.M)(!C || A),
            D = (0, _.k)(m);
        return null != m && (null == E || R)
            ? (0, a.jsxs)('div', {
                  className: o()(b.modalPreview, b.shopPreviewContainer, s),
                  children: [
                      (0, a.jsx)('div', {
                          className: b.shopPreviewBanner,
                          children: (0, a.jsx)(I.Z, {
                              user: n,
                              guildId: r,
                              avatarDecorationOverride: i
                          })
                      }),
                      (0, a.jsxs)('div', {
                          className: b.shopPreviewTextContainer,
                          children: [
                              (0, a.jsx)(c.Text, {
                                  variant: 'text-sm/semibold',
                                  children: D
                              }),
                              (0, a.jsx)(c.Text, {
                                  variant: 'text-sm/normal',
                                  children: R
                                      ? T.intl.string(T.t.zrBmQE)
                                      : (0, l.EQ)([C, A, O])
                                            .with([!0, !0, !1], () => T.intl.string(T.t.L5hyz8))
                                            .with([!0, !1, !0], () => T.intl.string(T.t.q0PlFh))
                                            .with([!0, !1, !1], () => T.intl.string(T.t.ucqOV1))
                                            .otherwise(() => T.intl.string(T.t.UROtt7))
                              })
                          ]
                      })
                  ]
              })
            : (0, a.jsxs)('div', {
                  className: o()(b.modalPreview, s),
                  children: [
                      (0, a.jsxs)('div', {
                          className: b.previewSections,
                          children: [
                              (0, a.jsx)('div', {
                                  className: b.decorationPreview,
                                  children: (0, a.jsx)(I.Z, {
                                      user: n,
                                      guildId: r,
                                      avatarDecorationOverride: i
                                  })
                              }),
                              (0, a.jsx)('div', {
                                  className: b.smallDecorationPreviewsContainer,
                                  children: y.map((e) => {
                                      let { avatarSize: s, showStatus: o } = e;
                                      return (0, a.jsx)(
                                          'div',
                                          {
                                              className: b.smallDecorationPreview,
                                              children: (0, a.jsx)(I.Z, {
                                                  user: n,
                                                  guildId: r,
                                                  avatarSize: s,
                                                  avatarDecorationOverride: i,
                                                  status: o ? h : void 0,
                                                  'aria-hidden': !0
                                              })
                                          },
                                          ''.concat(s).concat(o)
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
