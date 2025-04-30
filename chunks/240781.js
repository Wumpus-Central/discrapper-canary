n.d(t, { Z: () => T }), n(314940);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(278074),
    l = n(442837),
    c = n(481060),
    u = n(884697),
    d = n(911535),
    f = n(449217),
    _ = n(905357),
    p = n(95422),
    h = n(222062),
    m = n(706454),
    g = n(158776),
    E = n(55935),
    b = n(74538),
    y = n(204418),
    O = n(388032),
    v = n(520271);
let I = [
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
        let { purchase: t, shouldHideProductDescription: n } = e,
            i = (0, l.e7)([m.default], () => m.default.locale),
            o = (0, u.qS)(t),
            a = null != t.expiresAt ? (0, E.TD)(Date.now(), t.expiresAt) : null,
            s = (0, p.a)(t),
            d = t.purchasedAt.toLocaleDateString(i, {
                month: 'long',
                year: 'numeric'
            });
        return (0, r.jsxs)('div', {
            className: v.purchaseInfo,
            children: [
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/semibold',
                    color: 'header-primary',
                    children: s
                }),
                n
                    ? null
                    : (0, r.jsx)(c.Text, {
                          variant: 'text-sm/normal',
                          children: t.summary
                      }),
                null != a &&
                    (0, r.jsx)(c.Text, {
                        variant: 'text-xxs/normal',
                        color: 'text-muted',
                        children: O.intl.format(O.t.Io7ozs, { days: a.days.toString() })
                    }),
                (0, r.jsxs)(c.Text, {
                    variant: 'text-xxs/normal',
                    color: 'text-muted',
                    children: [
                        o ? O.intl.format(O.t.LFVi6O, { dateAcquired: d }) : O.intl.format(O.t.gW9R4O, { date: d }),
                        null != t.expiresAt &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)('br', {}),
                                    O.intl.format(O.t.eZSTa2, {
                                        date: t.expiresAt.toLocaleDateString(i, {
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
                o &&
                    (0, r.jsx)(c.Text, {
                        variant: 'text-xxs/normal',
                        color: 'text-muted',
                        children: O.intl.string(O.t.nKdAlJ)
                    })
            ]
        });
    },
    T = (e) => {
        let { user: t, guildId: n, avatarDecorationOverride: o, className: p } = e,
            m = (0, d.P)('AvatarDecorationModalPreview'),
            E = (0, l.e7)([g.Z], () => g.Z.getStatus(t.id)),
            { product: T, purchase: A } = (0, f.Z)(null == o ? void 0 : o.skuId),
            N = b.ZP.canUseCollectibles(t),
            C = (0, u.qS)(A),
            R = (0, u.G1)(T),
            P = !N && C,
            w = (0, h.M)(!R || N),
            D = (0, _.k)(T),
            L = i.useMemo(
                () =>
                    P
                        ? O.intl.string(O.t['7vkeu7'])
                        : (0, s.EQ)([R, N, w])
                              .with([!0, !0, !1], () => O.intl.string(O.t.hmyYKy))
                              .with([!0, !1, !0], () => O.intl.string(O.t.q0PlFh))
                              .with([!0, !1, !1], () => O.intl.string(O.t['0xs2sL']))
                              .otherwise(() => O.intl.string(O.t.fEGjVV)),
                [P, R, N, w]
            );
        return null != T && (null == A || P)
            ? (0, r.jsxs)('div', {
                  className: a()(v.modalPreview, v.shopPreviewContainer, p),
                  children: [
                      (0, r.jsx)('div', {
                          className: v.shopPreviewBanner,
                          children: (0, r.jsx)(y.Z, {
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
                                  children: D
                              }),
                              (0, r.jsx)(c.Text, {
                                  variant: 'text-sm/normal',
                                  children: L
                              })
                          ]
                      })
                  ]
              })
            : (0, r.jsxs)('div', {
                  className: a()(v.modalPreview, p),
                  children: [
                      (0, r.jsxs)('div', {
                          className: v.previewSections,
                          children: [
                              (0, r.jsx)('div', {
                                  className: v.decorationPreview,
                                  children: (0, r.jsx)(y.Z, {
                                      user: t,
                                      guildId: n,
                                      avatarDecorationOverride: o
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: v.smallDecorationPreviewsContainer,
                                  children: I.map((e) => {
                                      let { avatarSize: i, showStatus: a } = e;
                                      return (0, r.jsx)(
                                          'div',
                                          {
                                              className: v.smallDecorationPreview,
                                              children: (0, r.jsx)(y.Z, {
                                                  user: t,
                                                  guildId: n,
                                                  avatarSize: i,
                                                  avatarDecorationOverride: o,
                                                  status: a ? E : void 0,
                                                  'aria-hidden': !0
                                              })
                                          },
                                          ''.concat(i).concat(a)
                                      );
                                  })
                              })
                          ]
                      }),
                      null != A &&
                          (0, r.jsx)(S, {
                              purchase: A,
                              shouldHideProductDescription: m
                          })
                  ]
              });
    };
