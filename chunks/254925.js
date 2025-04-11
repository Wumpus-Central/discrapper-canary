B.d(g, {
    QV: () => H,
    ZP: () => G,
    go: () => b
}),
    B(953529);
var C = B(200651),
    Q = B(192379),
    w = B(442837),
    D = B(481060),
    f = B(314852),
    E = B(997431),
    v = B(65361),
    I = B(441536),
    P = B(434404),
    r = B(999382),
    e = B(70086),
    o = B(835887),
    t = B(388661),
    d = B(500230),
    n = B(742409),
    M = B(981631),
    s = B(116175),
    L = B(817239),
    X = B(388032),
    c = B(602268);
let H = [s.ZD.LEAF, s.ZD.SWORD, s.ZD.HEART, s.ZD.FIRE, s.ZD.WATER_DROP, s.ZD.SKULL, s.ZD.MOON, s.ZD.LIGHTNING, s.ZD.COMPASS, s.ZD.TOADSTOOL],
    b = [
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
    G = function () {
        var A, g, B, s;
        (0, X.j1)(L.M);
        let G = (0, w.e7)([r.Z], () => r.Z.getGuild()),
            a = (0, w.e7)([r.Z], () => r.Z.getGuildProfile()),
            { fetchGuildProfile: Y, fetchStatus: F } = (0, v.u)(null == G ? void 0 : G.id);
        if (
            (Q.useEffect(() => {
                F === f.a.NOT_FETCHED && Y();
            }, [Y, F]),
            F !== f.a.FETCHED)
        )
            return (0, C.jsx)('div', {
                className: c.spinnerContainer,
                children: (0, C.jsx)(D.$jN, {})
            });
        if (null == G || null == a) return null;
        let N = (0, E.u)(G),
            i = !N || (null == a ? void 0 : a.tag) == null,
            K = null != (A = a.badge) ? A : H[0],
            y = null != (g = a.badgeColorPrimary) ? g : b[0].primary,
            T = null != (B = a.badgeColorSecondary) ? B : b[0].secondary,
            O = (0, C.jsxs)(C.Fragment, {
                children: [
                    (0, C.jsx)(t.Z, {
                        className: c.section,
                        guildId: G.id,
                        isDisabled: i,
                        tag: null != (s = a.tag) ? s : '',
                        badge: K,
                        primaryColor: y,
                        secondaryColor: T
                    }),
                    (0, C.jsx)(o.Z, {
                        className: c.section,
                        selectedBadge: K,
                        guildId: G.id
                    }),
                    (0, C.jsx)(d.Z, {
                        className: c.section,
                        guildId: G.id,
                        badge: K,
                        primaryColor: y,
                        secondaryColor: T
                    })
                ]
            });
        return (0, C.jsxs)('div', {
            children: [
                (0, C.jsx)(D.X6q, {
                    className: c.title,
                    variant: 'heading-lg/semibold',
                    children: X.NW.string(L.Z.mf2OwM)
                }),
                (0, C.jsxs)('div', {
                    className: c.container,
                    children: [
                        (0, C.jsxs)('div', {
                            className: c.leftContent,
                            children: [
                                (0, C.jsx)(D.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-secondary',
                                    className: c.description,
                                    children: X.NW.format(L.Z['655Un5'], {
                                        onClickServerProfile: () => {
                                            P.Z.setSection(M.pNK.PROFILE);
                                        },
                                        onClickApplyToJoin: () => {
                                            P.Z.setSection(M.pNK.ACCESS);
                                        }
                                    })
                                }),
                                N
                                    ? (0, C.jsxs)('div', {
                                          className: c.enableSwitchContainer,
                                          children: [
                                              (0, C.jsx)('label', {
                                                  htmlFor: 'enable-server-tag',
                                                  children: (0, C.jsx)(D.Text, {
                                                      variant: 'text-md/semibold',
                                                      color: 'header-primary',
                                                      children: X.NW.string(L.Z['1zams7'])
                                                  })
                                              }),
                                              (0, C.jsx)(D.rsf, {
                                                  id: 'enable-server-tag',
                                                  checked: !i,
                                                  onChange: () => {
                                                      if (i) {
                                                          var A;
                                                          P.Z.updateGuildProfile(G.id, {
                                                              tag: null != (A = a.tag) ? A : '',
                                                              badge: K,
                                                              badgeColorPrimary: y,
                                                              badgeColorSecondary: T
                                                          });
                                                      } else P.Z.updateGuildProfile(G.id, { tag: null });
                                                  }
                                              })
                                          ]
                                      })
                                    : (0, C.jsx)('div', {
                                          className: c.boostingLinkContainer,
                                          children: (0, C.jsx)(e.P, {
                                              onClick: () => {
                                                  (0, I.Z)(G.id), P.Z.close();
                                              }
                                          })
                                      }),
                                i
                                    ? (0, C.jsx)(D.nuw, {
                                          children: (0, C.jsx)('div', {
                                              className: c.disabledForm,
                                              children: O
                                          })
                                      })
                                    : O
                            ]
                        }),
                        (0, C.jsx)('div', {
                            children: (0, C.jsx)(n.Z, {
                                guildId: G.id,
                                tag: a.tag,
                                badge: K,
                                primaryColor: y,
                                secondaryColor: T
                            })
                        })
                    ]
                })
            ]
        });
    };
