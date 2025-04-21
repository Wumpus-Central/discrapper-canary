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
    e = B(999382),
    r = B(70086),
    t = B(835887),
    n = B(388661),
    d = B(500230),
    o = B(742409),
    s = B(981631),
    M = B(116175),
    L = B(817239),
    X = B(388032),
    c = B(602268);
let H = [M.ZD.LEAF, M.ZD.SWORD, M.ZD.HEART, M.ZD.FIRE, M.ZD.WATER_DROP, M.ZD.SKULL, M.ZD.MOON, M.ZD.LIGHTNING, M.ZD.COMPASS, M.ZD.TOADSTOOL],
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
        var A, g, B, M;
        (0, X.useSyncMessages)(L.messagesLoader);
        let G = (0, w.e7)([e.Z], () => e.Z.getGuild()),
            a = (0, w.e7)([e.Z], () => e.Z.getGuildProfile()),
            { fetchGuildProfile: Y, fetchStatus: i } = (0, v.u)(null == G ? void 0 : G.id);
        if (
            (Q.useEffect(() => {
                i === f.a.NOT_FETCHED && Y();
            }, [Y, i]),
            i !== f.a.FETCHED)
        )
            return (0, C.jsx)('div', {
                className: c.spinnerContainer,
                children: (0, C.jsx)(D.$jN, {})
            });
        if (null == G || null == a) return null;
        let F = (0, E.up)(G),
            N = !F || (null == a ? void 0 : a.tag) == null,
            K = null != (A = a.badge) ? A : H[0],
            y = null != (g = a.badgeColorPrimary) ? g : b[0].primary,
            u = null != (B = a.badgeColorSecondary) ? B : b[0].secondary,
            T = (0, C.jsxs)(C.Fragment, {
                children: [
                    (0, C.jsx)(n.Z, {
                        className: c.section,
                        guildId: G.id,
                        isDisabled: N,
                        tag: null != (M = a.tag) ? M : '',
                        badge: K,
                        primaryColor: y,
                        secondaryColor: u
                    }),
                    (0, C.jsx)(t.Z, {
                        className: c.section,
                        selectedBadge: K,
                        guildId: G.id
                    }),
                    (0, C.jsx)(d.Z, {
                        className: c.section,
                        guildId: G.id,
                        badge: K,
                        primaryColor: y,
                        secondaryColor: u
                    })
                ]
            });
        return (0, C.jsxs)('div', {
            children: [
                (0, C.jsx)(D.X6q, {
                    className: c.title,
                    variant: 'heading-lg/semibold',
                    children: X.intl.string(L.default.mf2OwM)
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
                                    children: X.intl.format(L.default['655Un5'], {
                                        onClickServerProfile: () => {
                                            P.Z.setSection(s.pNK.PROFILE);
                                        },
                                        onClickApplyToJoin: () => {
                                            P.Z.setSection(s.pNK.ACCESS);
                                        }
                                    })
                                }),
                                F
                                    ? (0, C.jsxs)('div', {
                                          className: c.enableSwitchContainer,
                                          children: [
                                              (0, C.jsx)('label', {
                                                  htmlFor: 'enable-server-tag',
                                                  children: (0, C.jsx)(D.Text, {
                                                      variant: 'text-md/semibold',
                                                      color: 'header-primary',
                                                      children: X.intl.string(L.default['1zams7'])
                                                  })
                                              }),
                                              (0, C.jsx)(D.rsf, {
                                                  id: 'enable-server-tag',
                                                  checked: !N,
                                                  onChange: () => {
                                                      if (N) {
                                                          var A;
                                                          P.Z.updateGuildProfile(G.id, {
                                                              tag: null != (A = a.tag) ? A : '',
                                                              badge: K,
                                                              badgeColorPrimary: y,
                                                              badgeColorSecondary: u
                                                          });
                                                      } else P.Z.updateGuildProfile(G.id, { tag: null });
                                                  }
                                              })
                                          ]
                                      })
                                    : (0, C.jsx)('div', {
                                          className: c.boostingLinkContainer,
                                          children: (0, C.jsx)(r.P, {
                                              onClick: () => {
                                                  (0, I.Z)(G.id), P.Z.close();
                                              }
                                          })
                                      }),
                                N
                                    ? (0, C.jsx)(D.nuw, {
                                          children: (0, C.jsx)('div', {
                                              className: c.disabledForm,
                                              children: T
                                          })
                                      })
                                    : T
                            ]
                        }),
                        (0, C.jsx)('div', {
                            children: (0, C.jsx)(o.Z, {
                                guildId: G.id,
                                tag: a.tag,
                                badge: K,
                                primaryColor: y,
                                secondaryColor: u
                            })
                        })
                    ]
                })
            ]
        });
    };
