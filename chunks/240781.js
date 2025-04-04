n.d(t, { Z: () => S }), n(627341);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(278074),
    l = n(442837),
    c = n(481060),
    u = n(884697),
    d = n(449217),
    f = n(905357),
    _ = n(95422),
    p = n(222062),
    h = n(706454),
    m = n(158776),
    g = n(55935),
    E = n(74538),
    b = n(204418),
    y = n(388032),
    v = n(520271);
let O = [
        {
            avatarSize: c.EFr.SIZE_40,
            showStatus: !1
        },
        {
            avatarSize: c.EFr.SIZE_32,
            showStatus: !1
        },
        {
            avatarSize: c.EFr.SIZE_40,
            showStatus: !0
        },
        {
            avatarSize: c.EFr.SIZE_32,
            showStatus: !0
        }
    ],
    I = (e) => {
        let { purchase: t } = e,
            n = (0, l.e7)([h.default], () => h.default.locale),
            i = (0, u.qS)(t),
            o = null != t.expiresAt ? (0, g.TD)(Date.now(), t.expiresAt) : null,
            a = (0, _.a)(t),
            s = t.purchasedAt.toLocaleDateString(n, {
                month: 'long',
                year: 'numeric'
            });
        return (0, r.jsxs)('div', {
            className: v.purchaseInfo,
            children: [
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/semibold',
                    color: 'header-primary',
                    children: a
                }),
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    children: t.summary
                }),
                null != o &&
                    (0, r.jsx)(c.Text, {
                        variant: 'text-xxs/normal',
                        color: 'text-muted',
                        children: y.NW.format(y.t.Io7ozs, { days: o.days.toString() })
                    }),
                (0, r.jsxs)(c.Text, {
                    variant: 'text-xxs/normal',
                    color: 'text-muted',
                    children: [
                        i ? y.NW.format(y.t.LFVi6O, { dateAcquired: s }) : y.NW.format(y.t.gW9R4O, { date: s }),
                        null != t.expiresAt &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)('br', {}),
                                    y.NW.format(y.t.eZSTa2, {
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
                    (0, r.jsx)(c.Text, {
                        variant: 'text-xxs/normal',
                        color: 'text-muted',
                        children: y.NW.string(y.t.UewH9P)
                    })
            ]
        });
    },
    S = (e) => {
        let { user: t, guildId: n, avatarDecorationOverride: o, className: _ } = e,
            h = (0, l.e7)([m.Z], () => m.Z.getStatus(t.id)),
            { product: g, purchase: S } = (0, d.Z)(null == o ? void 0 : o.skuId),
            T = E.ZP.canUseCollectibles(t),
            N = (0, u.qS)(S),
            A = (0, u.G1)(g),
            C = !T && N,
            R = (0, p.M)(!A || T),
            P = (0, f.k)(g),
            w = i.useMemo(
                () =>
                    C
                        ? y.NW.string(y.t.zrBmQE)
                        : (0, s.EQ)([A, T, R])
                              .with([!0, !0, !1], () => y.NW.string(y.t.L5hyz8))
                              .with([!0, !1, !0], () => y.NW.string(y.t.q0PlFh))
                              .with([!0, !1, !1], () => y.NW.string(y.t.ucqOV1))
                              .otherwise(() => y.NW.string(y.t.UROtt7)),
                [C, A, T, R]
            );
        return null != g && (null == S || C)
            ? (0, r.jsxs)('div', {
                  className: a()(v.modalPreview, v.shopPreviewContainer, _),
                  children: [
                      (0, r.jsx)('div', {
                          className: v.shopPreviewBanner,
                          children: (0, r.jsx)(b.Z, {
                              user: t,
                              guildId: n,
                              avatarDecorationOverride: o
                          })
                      }),
                      (0, r.jsxs)('div', {
                          className: v.shopPreviewTextContainer,
                          children: [
                              (0, r.jsx)(c.Text, {
                                  variant: 'text-sm/semibold',
                                  children: P
                              }),
                              (0, r.jsx)(c.Text, {
                                  variant: 'text-sm/normal',
                                  children: w
                              })
                          ]
                      })
                  ]
              })
            : (0, r.jsxs)('div', {
                  className: a()(v.modalPreview, _),
                  children: [
                      (0, r.jsxs)('div', {
                          className: v.previewSections,
                          children: [
                              (0, r.jsx)('div', {
                                  className: v.decorationPreview,
                                  children: (0, r.jsx)(b.Z, {
                                      user: t,
                                      guildId: n,
                                      avatarDecorationOverride: o
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: v.smallDecorationPreviewsContainer,
                                  children: O.map((e) => {
                                      let { avatarSize: i, showStatus: a } = e;
                                      return (0, r.jsx)(
                                          'div',
                                          {
                                              className: v.smallDecorationPreview,
                                              children: (0, r.jsx)(b.Z, {
                                                  user: t,
                                                  guildId: n,
                                                  avatarSize: i,
                                                  avatarDecorationOverride: o,
                                                  status: a ? h : void 0,
                                                  'aria-hidden': !0
                                              })
                                          },
                                          ''.concat(i).concat(a)
                                      );
                                  })
                              })
                          ]
                      }),
                      null != S && (0, r.jsx)(I, { purchase: S })
                  ]
              });
    };
