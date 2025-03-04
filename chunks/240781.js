n.d(t, { Z: () => I }), n(627341);
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
    g = n(158776),
    m = n(55935),
    E = n(74538),
    v = n(204418),
    b = n(388032),
    y = n(970033);
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
    S = (e) => {
        let { purchase: t } = e,
            n = (0, l.e7)([h.default], () => h.default.locale),
            i = (0, u.qS)(t),
            o = null != t.expiresAt ? (0, m.TD)(Date.now(), t.expiresAt) : null,
            a = (0, _.a)(t),
            s = t.purchasedAt.toLocaleDateString(n, {
                month: 'long',
                year: 'numeric'
            });
        return (0, r.jsxs)('div', {
            className: y.purchaseInfo,
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
                        children: b.NW.format(b.t.Io7ozs, { days: o.days.toString() })
                    }),
                (0, r.jsxs)(c.Text, {
                    variant: 'text-xxs/normal',
                    color: 'text-muted',
                    children: [
                        i ? b.NW.format(b.t.LFVi6O, { dateAcquired: s }) : b.NW.format(b.t.gW9R4O, { date: s }),
                        null != t.expiresAt &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)('br', {}),
                                    b.NW.format(b.t.eZSTa2, {
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
                        children: b.NW.string(b.t.UewH9P)
                    })
            ]
        });
    },
    I = (e) => {
        let { user: t, guildId: n, avatarDecorationOverride: o, className: _ } = e,
            h = (0, l.e7)([g.Z], () => g.Z.getStatus(t.id)),
            { product: m, purchase: I } = (0, d.Z)(null == o ? void 0 : o.skuId),
            T = E.ZP.canUseCollectibles(t),
            N = (0, u.qS)(I),
            A = (0, u.G1)(m),
            C = !T && N,
            R = (0, p.M)(!A || T),
            P = (0, f.k)(m),
            D = i.useMemo(
                () =>
                    C
                        ? b.NW.string(b.t.zrBmQE)
                        : (0, s.EQ)([A, T, R])
                              .with([!0, !0, !1], () => b.NW.string(b.t.L5hyz8))
                              .with([!0, !1, !0], () => b.NW.string(b.t.q0PlFh))
                              .with([!0, !1, !1], () => b.NW.string(b.t.ucqOV1))
                              .otherwise(() => b.NW.string(b.t.UROtt7)),
                [C, A, T, R]
            );
        return null != m && (null == I || C)
            ? (0, r.jsxs)('div', {
                  className: a()(y.modalPreview, y.shopPreviewContainer, _),
                  children: [
                      (0, r.jsx)('div', {
                          className: y.shopPreviewBanner,
                          children: (0, r.jsx)(v.Z, {
                              user: t,
                              guildId: n,
                              avatarDecorationOverride: o
                          })
                      }),
                      (0, r.jsxs)('div', {
                          className: y.shopPreviewTextContainer,
                          children: [
                              (0, r.jsx)(c.Text, {
                                  variant: 'text-sm/semibold',
                                  children: P
                              }),
                              (0, r.jsx)(c.Text, {
                                  variant: 'text-sm/normal',
                                  children: D
                              })
                          ]
                      })
                  ]
              })
            : (0, r.jsxs)('div', {
                  className: a()(y.modalPreview, _),
                  children: [
                      (0, r.jsxs)('div', {
                          className: y.previewSections,
                          children: [
                              (0, r.jsx)('div', {
                                  className: y.decorationPreview,
                                  children: (0, r.jsx)(v.Z, {
                                      user: t,
                                      guildId: n,
                                      avatarDecorationOverride: o
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: y.smallDecorationPreviewsContainer,
                                  children: O.map((e) => {
                                      let { avatarSize: i, showStatus: a } = e;
                                      return (0, r.jsx)(
                                          'div',
                                          {
                                              className: y.smallDecorationPreview,
                                              children: (0, r.jsx)(v.Z, {
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
                      null != I && (0, r.jsx)(S, { purchase: I })
                  ]
              });
    };
