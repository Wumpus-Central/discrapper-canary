v.d(g, {
    QV: () => I,
    ZP: () => p,
    go: () => b
});
var B = v(200651),
    t = v(192379),
    e = v(442837),
    f = v(481060),
    r = v(100527),
    C = v(314852),
    h = v(65361),
    n = v(731722),
    w = v(441536),
    Q = v(494620),
    D = v(434404),
    o = v(999382),
    s = v(70086),
    i = v(835887),
    M = v(388661),
    a = v(500230),
    l = v(742409),
    E = v(981631),
    c = v(131085),
    P = v(817239),
    d = v(388032),
    H = v(602268);
let I = [c.x_.LEAF, c.x_.SWORD, c.x_.HEART, c.x_.FIRE, c.x_.WATER_DROP, c.x_.SKULL, c.x_.MOON, c.x_.LIGHTNING, c.x_.COMPASS, c.x_.TOADSTOOL],
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
    p = function () {
        var A, g, v, c;
        (0, d.useSyncMessages)(P.messagesLoader);
        let p = (0, e.e7)([o.Z], () => o.Z.getGuild()),
            y = (0, e.e7)([o.Z], () => o.Z.getGuildProfile()),
            { fetchGuildProfile: Z, fetchStatus: u } = (0, h.u)(null == p ? void 0 : p.id);
        if (
            (t.useEffect(() => {
                u === C.a.NOT_FETCHED && Z();
            }, [Z, u]),
            u !== C.a.FETCHED)
        )
            return (0, B.jsx)('div', {
                className: H.spinnerContainer,
                children: (0, B.jsx)(f.$jN, {})
            });
        if (null == p || null == y) return null;
        let O = (0, n.up)(p),
            V = !O || (null == y ? void 0 : y.tag) == null,
            j = null != (A = y.badge) ? A : I[0],
            L = null != (g = y.badgeColorPrimary) ? g : b[0].primary,
            X = null != (v = y.badgeColorSecondary) ? v : b[0].secondary,
            x = (0, B.jsxs)(B.Fragment, {
                children: [
                    (0, B.jsx)(M.Z, {
                        className: H.section,
                        guildId: p.id,
                        isDisabled: V,
                        tag: null != (c = y.tag) ? c : '',
                        badge: j,
                        primaryColor: L,
                        secondaryColor: X
                    }),
                    (0, B.jsx)(i.Z, {
                        className: H.section,
                        selectedBadge: j,
                        guildId: p.id
                    }),
                    (0, B.jsx)(a.Z, {
                        className: H.section,
                        guildId: p.id,
                        badge: j,
                        primaryColor: L,
                        secondaryColor: X
                    })
                ]
            });
        return (0, B.jsxs)('div', {
            children: [
                (0, B.jsx)(f.X6q, {
                    className: H.title,
                    variant: 'heading-lg/semibold',
                    children: d.intl.string(P.default.mf2OwM)
                }),
                (0, B.jsxs)('div', {
                    className: H.container,
                    children: [
                        (0, B.jsxs)('div', {
                            className: H.leftContent,
                            children: [
                                (0, B.jsxs)('div', {
                                    className: H.descriptionContainer,
                                    children: [
                                        (0, B.jsx)(f.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-secondary',
                                            children: d.intl.format(P.default['655Un5'], {
                                                onClickServerProfile: () => {
                                                    D.Z.setSection(E.pNK.PROFILE);
                                                },
                                                onClickApplyToJoin: () => {
                                                    D.Z.setSection(E.pNK.ACCESS);
                                                }
                                            })
                                        }),
                                        (0, B.jsx)(Q.Z, {
                                            className: H.privateProfileWarning,
                                            children: (0, B.jsx)(f.Text, {
                                                variant: 'text-xs/medium',
                                                children: d.intl.format(P.default.CRbkIy, { onClickEditSetting: () => D.Z.setSection(E.pNK.PROFILE, E.KsC.PROFILE_VISIBILITY) })
                                            })
                                        })
                                    ]
                                }),
                                O
                                    ? (0, B.jsxs)('div', {
                                          className: H.enableSwitchContainer,
                                          children: [
                                              (0, B.jsx)('label', {
                                                  htmlFor: 'enable-server-tag',
                                                  children: (0, B.jsx)(f.Text, {
                                                      variant: 'text-md/semibold',
                                                      color: 'header-primary',
                                                      children: d.intl.string(P.default['1zams7'])
                                                  })
                                              }),
                                              (0, B.jsx)(f.rsf, {
                                                  id: 'enable-server-tag',
                                                  checked: !V,
                                                  onChange: () => {
                                                      if (V) {
                                                          var A;
                                                          D.Z.updateGuildProfile(p.id, {
                                                              tag: null != (A = y.tag) ? A : '',
                                                              badge: j,
                                                              badgeColorPrimary: L,
                                                              badgeColorSecondary: X
                                                          });
                                                      } else D.Z.updateGuildProfile(p.id, { tag: null });
                                                  }
                                              })
                                          ]
                                      })
                                    : (0, B.jsx)('div', {
                                          className: H.boostingLinkContainer,
                                          children: (0, B.jsx)(s.P, {
                                              onClick: () => {
                                                  (0, w.Z)(p.id, r.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), D.Z.close();
                                              }
                                          })
                                      }),
                                V
                                    ? (0, B.jsx)(f.nuw, {
                                          children: (0, B.jsx)('div', {
                                              className: H.disabledForm,
                                              children: x
                                          })
                                      })
                                    : x
                            ]
                        }),
                        (0, B.jsx)('div', {
                            children: (0, B.jsx)(l.Z, {
                                guildId: p.id,
                                tag: y.tag,
                                badge: j,
                                primaryColor: L,
                                secondaryColor: X
                            })
                        })
                    ]
                })
            ]
        });
    };
