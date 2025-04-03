B.d(g, {
    QV: () => H,
    ZP: () => b,
    go: () => G
}),
    B(266796);
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
    L = B(116175),
    s = B(817239),
    X = B(388032),
    c = B(602268);
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
    b = function () {
        var A, g, B, L;
        (0, X.j1)(s.M);
        let b = (0, w.e7)([r.Z], () => r.Z.getGuild()),
            Y = (0, w.e7)([r.Z], () => r.Z.getGuildProfile()),
            { fetchGuildProfile: F, fetchStatus: a } = (0, v.u)(null == b ? void 0 : b.id);
        if (
            (Q.useEffect(() => {
                a === f.a.NOT_FETCHED && F();
            }, [F, a]),
            a !== f.a.FETCHED)
        )
            return (0, C.jsx)('div', {
                className: c.spinnerContainer,
                children: (0, C.jsx)(D.$jN, {})
            });
        if (null == b || null == Y) return null;
        let N = (0, E.u)(b),
            i = !N || (null == Y ? void 0 : Y.tag) == null,
            K = null != (A = Y.badge) ? A : H[0],
            y = null != (g = Y.badgeColorPrimary) ? g : G[0].primary,
            T = null != (B = Y.badgeColorSecondary) ? B : G[0].secondary,
            O = (0, C.jsxs)(C.Fragment, {
                children: [
                    (0, C.jsx)(t.Z, {
                        className: c.section,
                        guildId: b.id,
                        isDisabled: i,
                        tag: null != (L = Y.tag) ? L : '',
                        badge: K,
                        primaryColor: y,
                        secondaryColor: T
                    }),
                    (0, C.jsx)(o.Z, {
                        className: c.section,
                        selectedBadge: K,
                        guildId: b.id
                    }),
                    (0, C.jsx)(d.Z, {
                        className: c.section,
                        guildId: b.id,
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
                    children: X.NW.string(s.Z.mf2OwM)
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
                                    children: X.NW.string(s.Z['655Un5'])
                                }),
                                N
                                    ? (0, C.jsxs)(C.Fragment, {
                                          children: [
                                              (0, C.jsxs)('div', {
                                                  className: c.enableSwitchContainer,
                                                  children: [
                                                      (0, C.jsx)('label', {
                                                          htmlFor: 'enable-server-tag',
                                                          children: (0, C.jsx)(D.Text, {
                                                              variant: 'text-md/semibold',
                                                              color: 'header-primary',
                                                              children: X.NW.string(s.Z['1zams7'])
                                                          })
                                                      }),
                                                      (0, C.jsx)(D.rsf, {
                                                          id: 'enable-server-tag',
                                                          checked: !i,
                                                          onChange: () => {
                                                              if (i) {
                                                                  var A;
                                                                  P.Z.updateGuildProfile(b.id, {
                                                                      tag: null != (A = Y.tag) ? A : '',
                                                                      badge: K,
                                                                      badgeColorPrimary: y,
                                                                      badgeColorSecondary: T
                                                                  });
                                                              } else P.Z.updateGuildProfile(b.id, { tag: null });
                                                          }
                                                      })
                                                  ]
                                              }),
                                              (0, C.jsx)(D.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'text-muted',
                                                  className: c.memberApplicationsInfo,
                                                  children: X.NW.format(s.Z.WUACVF, {
                                                      onClick: () => {
                                                          P.Z.setSection(M.pNK.ACCESS);
                                                      }
                                                  })
                                              })
                                          ]
                                      })
                                    : (0, C.jsx)('div', {
                                          className: c.boostingLinkContainer,
                                          children: (0, C.jsx)(e.P, {
                                              onClick: () => {
                                                  (0, I.Z)(b.id), P.Z.close();
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
                                guildId: b.id,
                                tag: Y.tag,
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
