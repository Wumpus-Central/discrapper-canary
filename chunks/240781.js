n.d(t, { Z: () => b }), n(627341);
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(278074),
    o = n(442837),
    l = n(481060),
    u = n(884697),
    c = n(449217),
    d = n(905357),
    f = n(95422),
    _ = n(222062),
    p = n(706454),
    h = n(158776),
    m = n(55935),
    g = n(74538),
    E = n(204418),
    v = n(388032),
    y = n(754025);
let I = [
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
    T = (e) => {
        let { purchase: t } = e,
            n = (0, o.e7)([p.default], () => p.default.locale),
            r = (0, u.qS)(t),
            a = null != t.expiresAt ? (0, m.TD)(Date.now(), t.expiresAt) : null,
            s = (0, f.a)(t);
        return (0, i.jsxs)('div', {
            className: y.purchaseInfo,
            children: [
                (0, i.jsx)(l.Text, {
                    variant: 'text-sm/semibold',
                    color: 'header-primary',
                    children: s
                }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    children: t.summary
                }),
                null != a &&
                    (0, i.jsx)(l.Text, {
                        variant: 'text-xxs/normal',
                        color: 'text-muted',
                        children: v.intl.format(v.t.Io7ozs, { days: a.days.toString() })
                    }),
                (0, i.jsxs)(l.Text, {
                    variant: 'text-xxs/normal',
                    color: 'text-muted',
                    children: [
                        v.intl.format(v.t.gW9R4O, {
                            date: t.purchasedAt.toLocaleDateString(n, {
                                month: 'long',
                                year: 'numeric'
                            })
                        }),
                        null != t.expiresAt &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('br', {}),
                                    v.intl.format(v.t.eZSTa2, {
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
                r &&
                    (0, i.jsx)(l.Text, {
                        variant: 'text-xxs/normal',
                        color: 'text-muted',
                        children: v.intl.string(v.t.UewH9P)
                    })
            ]
        });
    },
    b = (e) => {
        let { user: t, guildId: n, avatarDecorationOverride: r, className: f } = e,
            p = (0, o.e7)([h.Z], () => h.Z.getStatus(t.id)),
            { product: m, purchase: b } = (0, c.Z)(null == r ? void 0 : r.skuId),
            S = g.ZP.canUseCollectibles(t),
            A = (0, u.qS)(b),
            N = (0, u.G1)(m),
            C = !S && A,
            R = (0, _.M)(!N || S),
            O = (0, d.k)(m);
        return null != m && (null == b || C)
            ? (0, i.jsxs)('div', {
                  className: a()(y.modalPreview, y.shopPreviewContainer, f),
                  children: [
                      (0, i.jsx)('div', {
                          className: y.shopPreviewBanner,
                          children: (0, i.jsx)(E.Z, {
                              user: t,
                              guildId: n,
                              avatarDecorationOverride: r
                          })
                      }),
                      (0, i.jsxs)('div', {
                          className: y.shopPreviewTextContainer,
                          children: [
                              (0, i.jsx)(l.Text, {
                                  variant: 'text-sm/semibold',
                                  children: O
                              }),
                              (0, i.jsx)(l.Text, {
                                  variant: 'text-sm/normal',
                                  children: C
                                      ? v.intl.string(v.t.zrBmQE)
                                      : (0, s.EQ)([N, S, R])
                                            .with([!0, !0, !1], () => v.intl.string(v.t.L5hyz8))
                                            .with([!0, !1, !0], () => v.intl.string(v.t.q0PlFh))
                                            .with([!0, !1, !1], () => v.intl.string(v.t.ucqOV1))
                                            .otherwise(() => v.intl.string(v.t.UROtt7))
                              })
                          ]
                      })
                  ]
              })
            : (0, i.jsxs)('div', {
                  className: a()(y.modalPreview, f),
                  children: [
                      (0, i.jsxs)('div', {
                          className: y.previewSections,
                          children: [
                              (0, i.jsx)('div', {
                                  className: y.decorationPreview,
                                  children: (0, i.jsx)(E.Z, {
                                      user: t,
                                      guildId: n,
                                      avatarDecorationOverride: r
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: y.smallDecorationPreviewsContainer,
                                  children: I.map((e) => {
                                      let { avatarSize: a, showStatus: s } = e;
                                      return (0, i.jsx)(
                                          'div',
                                          {
                                              className: y.smallDecorationPreview,
                                              children: (0, i.jsx)(E.Z, {
                                                  user: t,
                                                  guildId: n,
                                                  avatarSize: a,
                                                  avatarDecorationOverride: r,
                                                  status: s ? p : void 0,
                                                  'aria-hidden': !0
                                              })
                                          },
                                          ''.concat(a).concat(s)
                                      );
                                  })
                              })
                          ]
                      }),
                      null != b && (0, i.jsx)(T, { purchase: b })
                  ]
              });
    };
