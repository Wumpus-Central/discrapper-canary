v.d(g, {
    QV: () => Z,
    ZP: () => O,
    go: () => u
});
var B = v(200651),
    t = v(192379),
    e = v(580685),
    f = v(442837),
    r = v(704215),
    C = v(481060),
    h = v(100527),
    n = v(605236),
    w = v(314852),
    Q = v(65361),
    D = v(731722),
    o = v(441536),
    s = v(494620),
    i = v(434404),
    M = v(999382),
    a = v(70086),
    l = v(835887),
    E = v(388661),
    c = v(500230),
    P = v(742409),
    d = v(981631),
    H = v(921944),
    I = v(131085),
    b = v(817239),
    p = v(388032),
    y = v(602268);
let Z = [I.x_.LEAF, I.x_.SWORD, I.x_.HEART, I.x_.FIRE, I.x_.WATER_DROP, I.x_.SKULL, I.x_.MOON, I.x_.LIGHTNING, I.x_.COMPASS, I.x_.TOADSTOOL],
    u = [
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
    O = function () {
        var A, g, v, I;
        (0, p.useSyncMessages)(b.messagesLoader);
        let O = (0, f.e7)([M.Z], () => M.Z.getGuild()),
            V = (0, f.e7)([M.Z], () => M.Z.getGuildProfile()),
            { fetchGuildProfile: j, fetchStatus: L } = (0, Q.u)(null == O ? void 0 : O.id);
        if (
            (t.useEffect(() => {
                (0, n.EW)(r.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE, { dismissAction: H.L.AUTO });
            }, []),
            t.useEffect(() => {
                L === w.a.NOT_FETCHED && j();
            }, [j, L]),
            L !== w.a.FETCHED)
        )
            return (0, B.jsx)('div', {
                className: y.spinnerContainer,
                children: (0, B.jsx)(C.$jN, {})
            });
        if (null == O || null == V) return null;
        let X = e.Y.VISIBLE.has(V.visibility),
            x = (0, D.up)(O),
            G = !x || (null == V ? void 0 : V.tag) == null,
            T = null != (A = V.badge) ? A : Z[0],
            Y = null != (g = V.badgeColorPrimary) ? g : u[0].primary,
            F = null != (v = V.badgeColorSecondary) ? v : u[0].secondary,
            m = (0, B.jsxs)(B.Fragment, {
                children: [
                    (0, B.jsx)(E.Z, {
                        className: y.section,
                        guildId: O.id,
                        isDisabled: G,
                        tag: null != (I = V.tag) ? I : '',
                        badge: T,
                        primaryColor: Y,
                        secondaryColor: F
                    }),
                    (0, B.jsx)(l.Z, {
                        className: y.section,
                        selectedBadge: T,
                        guildId: O.id
                    }),
                    (0, B.jsx)(c.Z, {
                        className: y.section,
                        guildId: O.id,
                        badge: T,
                        primaryColor: Y,
                        secondaryColor: F
                    })
                ]
            });
        return (0, B.jsxs)('div', {
            children: [
                (0, B.jsx)(C.X6q, {
                    className: y.title,
                    variant: 'heading-lg/semibold',
                    children: p.intl.string(b.default.mf2OwM)
                }),
                (0, B.jsxs)('div', {
                    className: y.container,
                    children: [
                        (0, B.jsxs)('div', {
                            className: y.leftContent,
                            children: [
                                (0, B.jsxs)('div', {
                                    className: y.descriptionContainer,
                                    children: [
                                        (0, B.jsx)(C.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-secondary',
                                            children: p.intl.format(b.default['655Un5'], {
                                                onClickServerProfile: () => {
                                                    i.Z.setSection(d.pNK.PROFILE);
                                                },
                                                onClickApplyToJoin: () => {
                                                    i.Z.setSection(d.pNK.ACCESS);
                                                }
                                            })
                                        }),
                                        !X &&
                                            (0, B.jsx)(s.Z, {
                                                className: y.privateProfileWarning,
                                                children: (0, B.jsx)(C.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: p.intl.format(b.default.CRbkIy, { onClickEditSetting: () => i.Z.setSection(d.pNK.PROFILE, d.KsC.PROFILE_VISIBILITY) })
                                                })
                                            })
                                    ]
                                }),
                                x
                                    ? (0, B.jsxs)('div', {
                                          className: y.enableSwitchContainer,
                                          children: [
                                              (0, B.jsx)('label', {
                                                  htmlFor: 'enable-server-tag',
                                                  children: (0, B.jsx)(C.Text, {
                                                      variant: 'text-md/semibold',
                                                      color: 'header-primary',
                                                      children: p.intl.string(b.default['1zams7'])
                                                  })
                                              }),
                                              (0, B.jsx)(C.rsf, {
                                                  id: 'enable-server-tag',
                                                  checked: !G,
                                                  onChange: () => {
                                                      if (G) {
                                                          var A;
                                                          i.Z.updateGuildProfile(O.id, {
                                                              tag: null != (A = V.tag) ? A : '',
                                                              badge: T,
                                                              badgeColorPrimary: Y,
                                                              badgeColorSecondary: F
                                                          });
                                                      } else i.Z.updateGuildProfile(O.id, { tag: null });
                                                  }
                                              })
                                          ]
                                      })
                                    : (0, B.jsx)('div', {
                                          className: y.boostingLinkContainer,
                                          children: (0, B.jsx)(a.P, {
                                              onClick: () => {
                                                  (0, o.Z)(O.id, h.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), i.Z.close();
                                              }
                                          })
                                      }),
                                G
                                    ? (0, B.jsx)(C.nuw, {
                                          children: (0, B.jsx)('div', {
                                              className: y.disabledForm,
                                              children: m
                                          })
                                      })
                                    : m
                            ]
                        }),
                        (0, B.jsx)('div', {
                            children: (0, B.jsx)(P.Z, {
                                guildId: O.id,
                                tag: V.tag,
                                badge: T,
                                primaryColor: Y,
                                secondaryColor: F
                            })
                        })
                    ]
                })
            ]
        });
    };
