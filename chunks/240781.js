n.d(t, { Z: () => S }), n(314940);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
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
    O = n(520271);
let v = [
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
            a = null != t.expiresAt ? (0, g.TD)(Date.now(), t.expiresAt) : null,
            o = (0, _.a)(t),
            s = t.purchasedAt.toLocaleDateString(n, {
                month: 'long',
                year: 'numeric'
            });
        return (0, r.jsxs)('div', {
            className: O.purchaseInfo,
            children: [
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/semibold',
                    color: 'header-primary',
                    children: o
                }),
                null != a &&
                    (0, r.jsx)(c.Text, {
                        variant: 'text-xxs/normal',
                        color: 'text-muted',
                        children: y.intl.format(y.t.Io7ozs, { days: a.days.toString() })
                    }),
                (0, r.jsxs)(c.Text, {
                    variant: 'text-xxs/normal',
                    color: 'text-muted',
                    children: [
                        i ? y.intl.format(y.t['req+eX'], { dateAcquired: s }) : y.intl.format(y.t.gW9R4O, { date: s }),
                        null != t.expiresAt &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)('br', {}),
                                    y.intl.format(y.t.eZSTa2, {
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
                        children: y.intl.string(y.t.nKdAlJ)
                    })
            ]
        });
    },
    S = (e) => {
        let { user: t, guildId: n, avatarDecorationOverride: a, className: _ } = e,
            h = (0, l.e7)([m.Z], () => m.Z.getStatus(t.id)),
            { product: g, purchase: S } = (0, d.Z)(null == a ? void 0 : a.skuId),
            T = E.ZP.canUseCollectibles(t),
            A = (0, u.qS)(S),
            N = (0, u.G1)(g),
            C = !T && A,
            P = (0, p.M)(!N || T),
            R = (0, f.k)(g),
            w = i.useMemo(
                () =>
                    C
                        ? y.intl.string(y.t['7vkeu7'])
                        : (0, s.EQ)([N, T, P])
                              .with([!0, !0, !1], () => y.intl.string(y.t.hmyYKy))
                              .with([!0, !1, !0], () => y.intl.string(y.t.q0PlFh))
                              .with([!0, !1, !1], () => y.intl.string(y.t['0xs2sL']))
                              .otherwise(() => y.intl.string(y.t.fEGjVV)),
                [C, N, T, P]
            );
        return null != g && (null == S || C)
            ? (0, r.jsxs)('div', {
                  className: o()(O.modalPreview, O.shopPreviewContainer, _),
                  children: [
                      (0, r.jsx)('div', {
                          className: O.shopPreviewBanner,
                          children: (0, r.jsx)(b.Z, {
                              user: t,
                              guildId: n,
                              avatarDecorationOverride: a
                          })
                      }),
                      (0, r.jsxs)('div', {
                          className: O.shopPreviewTextContainer,
                          children: [
                              (0, r.jsx)(c.Text, {
                                  variant: 'text-sm/semibold',
                                  children: R
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
                  className: o()(O.modalPreview, _),
                  children: [
                      (0, r.jsxs)('div', {
                          className: O.previewSections,
                          children: [
                              (0, r.jsx)('div', {
                                  className: O.decorationPreview,
                                  children: (0, r.jsx)(b.Z, {
                                      user: t,
                                      guildId: n,
                                      avatarDecorationOverride: a
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: O.smallDecorationPreviewsContainer,
                                  children: v.map((e) => {
                                      let { avatarSize: i, showStatus: o } = e;
                                      return (0, r.jsx)(
                                          'div',
                                          {
                                              className: O.smallDecorationPreview,
                                              children: (0, r.jsx)(b.Z, {
                                                  user: t,
                                                  guildId: n,
                                                  avatarSize: i,
                                                  avatarDecorationOverride: a,
                                                  status: o ? h : void 0,
                                                  'aria-hidden': !0
                                              })
                                          },
                                          ''.concat(i).concat(o)
                                      );
                                  })
                              })
                          ]
                      }),
                      null != S && (0, r.jsx)(I, { purchase: S })
                  ]
              });
    };
