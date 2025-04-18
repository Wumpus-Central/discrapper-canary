n.d(t, { Z: () => T }), n(314940);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
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
    v = n(388032),
    O = n(520271);
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
            a = (0, u.qS)(t),
            o = null != t.expiresAt ? (0, E.TD)(Date.now(), t.expiresAt) : null,
            s = (0, p.a)(t),
            d = t.purchasedAt.toLocaleDateString(i, {
                month: 'long',
                year: 'numeric'
            });
        return (0, r.jsxs)('div', {
            className: O.purchaseInfo,
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
                null != o &&
                    (0, r.jsx)(c.Text, {
                        variant: 'text-xxs/normal',
                        color: 'text-muted',
                        children: v.NW.format(v.t.Io7ozs, { days: o.days.toString() })
                    }),
                (0, r.jsxs)(c.Text, {
                    variant: 'text-xxs/normal',
                    color: 'text-muted',
                    children: [
                        a ? v.NW.format(v.t.LFVi6O, { dateAcquired: d }) : v.NW.format(v.t.gW9R4O, { date: d }),
                        null != t.expiresAt &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)('br', {}),
                                    v.NW.format(v.t.eZSTa2, {
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
                a &&
                    (0, r.jsx)(c.Text, {
                        variant: 'text-xxs/normal',
                        color: 'text-muted',
                        children: v.NW.string(v.t.UewH9P)
                    })
            ]
        });
    },
    T = (e) => {
        let { user: t, guildId: n, avatarDecorationOverride: a, className: p } = e,
            m = (0, d.P)('AvatarDecorationModalPreview'),
            E = (0, l.e7)([g.Z], () => g.Z.getStatus(t.id)),
            { product: T, purchase: N } = (0, f.Z)(null == a ? void 0 : a.skuId),
            A = b.ZP.canUseCollectibles(t),
            C = (0, u.qS)(N),
            R = (0, u.G1)(T),
            P = !A && C,
            w = (0, h.M)(!R || A),
            D = (0, _.k)(T),
            L = i.useMemo(
                () =>
                    P
                        ? v.NW.string(v.t.zrBmQE)
                        : (0, s.EQ)([R, A, w])
                              .with([!0, !0, !1], () => v.NW.string(v.t.L5hyz8))
                              .with([!0, !1, !0], () => v.NW.string(v.t.q0PlFh))
                              .with([!0, !1, !1], () => v.NW.string(v.t.ucqOV1))
                              .otherwise(() => v.NW.string(v.t.UROtt7)),
                [P, R, A, w]
            );
        return null != T && (null == N || P)
            ? (0, r.jsxs)('div', {
                  className: o()(O.modalPreview, O.shopPreviewContainer, p),
                  children: [
                      (0, r.jsx)('div', {
                          className: O.shopPreviewBanner,
                          children: (0, r.jsx)(y.Z, {
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
                  className: o()(O.modalPreview, p),
                  children: [
                      (0, r.jsxs)('div', {
                          className: O.previewSections,
                          children: [
                              (0, r.jsx)('div', {
                                  className: O.decorationPreview,
                                  children: (0, r.jsx)(y.Z, {
                                      user: t,
                                      guildId: n,
                                      avatarDecorationOverride: a
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: O.smallDecorationPreviewsContainer,
                                  children: I.map((e) => {
                                      let { avatarSize: i, showStatus: o } = e;
                                      return (0, r.jsx)(
                                          'div',
                                          {
                                              className: O.smallDecorationPreview,
                                              children: (0, r.jsx)(y.Z, {
                                                  user: t,
                                                  guildId: n,
                                                  avatarSize: i,
                                                  avatarDecorationOverride: a,
                                                  status: o ? E : void 0,
                                                  'aria-hidden': !0
                                              })
                                          },
                                          ''.concat(i).concat(o)
                                      );
                                  })
                              })
                          ]
                      }),
                      null != N &&
                          (0, r.jsx)(S, {
                              purchase: N,
                              shouldHideProductDescription: m
                          })
                  ]
              });
    };
