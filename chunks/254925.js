B.d(g, {
    QV: () => H,
    ZP: () => a,
    go: () => G
});
var C = B(200651),
    Q = B(192379),
    w = B(442837),
    D = B(481060),
    f = B(314852),
    E = B(997431),
    v = B(65361),
    I = B(441536),
    P = B(494620),
    e = B(434404),
    t = B(999382),
    r = B(70086),
    n = B(835887),
    d = B(388661),
    o = B(500230),
    s = B(742409),
    M = B(981631),
    L = B(116175),
    X = B(817239),
    c = B(388032),
    b = B(602268);
let H = [L.ZD.LEAF, L.ZD.SWORD, L.ZD.HEART, L.ZD.FIRE, L.ZD.WATER_DROP, L.ZD.SKULL, L.ZD.MOON, L.ZD.LIGHTNING, L.ZD.COMPASS, L.ZD.TOADSTOOL],
    G = [
        {
            primary: '#ff1c90',
            secondary: '#ff7fc0'
        },
        {
            primary: '#ff8f1c',
            secondary: '#ffae77'
        },
        {
            primary: '#eebe1a',
            secondary: '#fffc7f'
        },
        {
            primary: '#32a070',
            secondary: '#57b59e'
        },
        {
            primary: '#32839a',
            secondary: '#71c2d9'
        },
        {
            primary: '#8a43ff',
            secondary: '#bd95ff'
        },
        {
            primary: '#9b3fe5',
            secondary: '#cc8dff'
        },
        {
            primary: '#942e8f',
            secondary: '#d46cb5'
        },
        {
            primary: '#d14242',
            secondary: '#ff8989'
        },
        {
            primary: '#814300',
            secondary: '#a88a6c'
        },
        {
            primary: '#717224',
            secondary: '#c3c3c3'
        },
        {
            primary: '#5d1d47',
            secondary: '#c58fbb'
        },
        {
            primary: '#222222',
            secondary: '#cccccc'
        }
    ],
    a = function () {
        var A, g, B, L;
        (0, c.useSyncMessages)(X.messagesLoader);
        let a = (0, w.e7)([t.Z], () => t.Z.getGuild()),
            i = (0, w.e7)([t.Z], () => t.Z.getGuildProfile()),
            { fetchGuildProfile: Y, fetchStatus: F } = (0, v.u)(null == a ? void 0 : a.id);
        if (
            (Q.useEffect(() => {
                F === f.a.NOT_FETCHED && Y();
            }, [Y, F]),
            F !== f.a.FETCHED)
        )
            return (0, C.jsx)('div', {
                className: b.spinnerContainer,
                children: (0, C.jsx)(D.$jN, {})
            });
        if (null == a || null == i) return null;
        let N = (0, E.up)(a),
            K = !N || (null == i ? void 0 : i.tag) == null,
            y = null != (A = i.badge) ? A : H[0],
            u = null != (g = i.badgeColorPrimary) ? g : G[0].primary,
            T = null != (B = i.badgeColorSecondary) ? B : G[0].secondary,
            O = (0, C.jsxs)(C.Fragment, {
                children: [
                    (0, C.jsx)(d.Z, {
                        className: b.section,
                        guildId: a.id,
                        isDisabled: K,
                        tag: null != (L = i.tag) ? L : '',
                        badge: y,
                        primaryColor: u,
                        secondaryColor: T
                    }),
                    (0, C.jsx)(n.Z, {
                        className: b.section,
                        selectedBadge: y,
                        guildId: a.id
                    }),
                    (0, C.jsx)(o.Z, {
                        className: b.section,
                        guildId: a.id,
                        badge: y,
                        primaryColor: u,
                        secondaryColor: T
                    })
                ]
            });
        return (0, C.jsxs)('div', {
            children: [
                (0, C.jsx)(D.X6q, {
                    className: b.title,
                    variant: 'heading-lg/semibold',
                    children: c.intl.string(X.default.mf2OwM)
                }),
                (0, C.jsxs)('div', {
                    className: b.container,
                    children: [
                        (0, C.jsxs)('div', {
                            className: b.leftContent,
                            children: [
                                (0, C.jsxs)('div', {
                                    className: b.descriptionContainer,
                                    children: [
                                        (0, C.jsx)(D.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-secondary',
                                            children: c.intl.format(X.default['655Un5'], {
                                                onClickServerProfile: () => {
                                                    e.Z.setSection(M.pNK.PROFILE);
                                                },
                                                onClickApplyToJoin: () => {
                                                    e.Z.setSection(M.pNK.ACCESS);
                                                }
                                            })
                                        }),
                                        (0, C.jsx)(P.Z, {
                                            className: b.privateProfileWarning,
                                            children: (0, C.jsx)(D.Text, {
                                                variant: 'text-xs/medium',
                                                children: c.intl.format(X.default.CRbkIy, { onClickEditSetting: () => e.Z.setSection(M.pNK.PROFILE, M.KsC.PROFILE_VISIBILITY) })
                                            })
                                        })
                                    ]
                                }),
                                N
                                    ? (0, C.jsxs)('div', {
                                          className: b.enableSwitchContainer,
                                          children: [
                                              (0, C.jsx)('label', {
                                                  htmlFor: 'enable-server-tag',
                                                  children: (0, C.jsx)(D.Text, {
                                                      variant: 'text-md/semibold',
                                                      color: 'header-primary',
                                                      children: c.intl.string(X.default['1zams7'])
                                                  })
                                              }),
                                              (0, C.jsx)(D.rsf, {
                                                  id: 'enable-server-tag',
                                                  checked: !K,
                                                  onChange: () => {
                                                      if (K) {
                                                          var A;
                                                          e.Z.updateGuildProfile(a.id, {
                                                              tag: null != (A = i.tag) ? A : '',
                                                              badge: y,
                                                              badgeColorPrimary: u,
                                                              badgeColorSecondary: T
                                                          });
                                                      } else e.Z.updateGuildProfile(a.id, { tag: null });
                                                  }
                                              })
                                          ]
                                      })
                                    : (0, C.jsx)('div', {
                                          className: b.boostingLinkContainer,
                                          children: (0, C.jsx)(r.P, {
                                              onClick: () => {
                                                  (0, I.Z)(a.id), e.Z.close();
                                              }
                                          })
                                      }),
                                K
                                    ? (0, C.jsx)(D.nuw, {
                                          children: (0, C.jsx)('div', {
                                              className: b.disabledForm,
                                              children: O
                                          })
                                      })
                                    : O
                            ]
                        }),
                        (0, C.jsx)('div', {
                            children: (0, C.jsx)(s.Z, {
                                guildId: a.id,
                                tag: i.tag,
                                badge: y,
                                primaryColor: u,
                                secondaryColor: T
                            })
                        })
                    ]
                })
            ]
        });
    };
