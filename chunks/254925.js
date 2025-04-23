v.d(g, {
    QV: () => H,
    ZP: () => b,
    go: () => I
});
var B = v(200651),
    t = v(192379),
    e = v(442837),
    f = v(481060),
    r = v(314852),
    C = v(65361),
    h = v(731722),
    n = v(441536),
    w = v(494620),
    Q = v(434404),
    D = v(999382),
    o = v(70086),
    s = v(835887),
    i = v(388661),
    M = v(500230),
    a = v(742409),
    l = v(981631),
    E = v(131085),
    c = v(817239),
    P = v(388032),
    d = v(602268);
let H = [E.x_.LEAF, E.x_.SWORD, E.x_.HEART, E.x_.FIRE, E.x_.WATER_DROP, E.x_.SKULL, E.x_.MOON, E.x_.LIGHTNING, E.x_.COMPASS, E.x_.TOADSTOOL],
    I = [
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
        var A, g, v, E;
        (0, P.useSyncMessages)(c.messagesLoader);
        let b = (0, e.e7)([D.Z], () => D.Z.getGuild()),
            p = (0, e.e7)([D.Z], () => D.Z.getGuildProfile()),
            { fetchGuildProfile: y, fetchStatus: Z } = (0, C.u)(null == b ? void 0 : b.id);
        if (
            (t.useEffect(() => {
                Z === r.a.NOT_FETCHED && y();
            }, [y, Z]),
            Z !== r.a.FETCHED)
        )
            return (0, B.jsx)('div', {
                className: d.spinnerContainer,
                children: (0, B.jsx)(f.$jN, {})
            });
        if (null == b || null == p) return null;
        let u = (0, h.up)(b),
            O = !u || (null == p ? void 0 : p.tag) == null,
            V = null != (A = p.badge) ? A : H[0],
            j = null != (g = p.badgeColorPrimary) ? g : I[0].primary,
            L = null != (v = p.badgeColorSecondary) ? v : I[0].secondary,
            X = (0, B.jsxs)(B.Fragment, {
                children: [
                    (0, B.jsx)(i.Z, {
                        className: d.section,
                        guildId: b.id,
                        isDisabled: O,
                        tag: null != (E = p.tag) ? E : '',
                        badge: V,
                        primaryColor: j,
                        secondaryColor: L
                    }),
                    (0, B.jsx)(s.Z, {
                        className: d.section,
                        selectedBadge: V,
                        guildId: b.id
                    }),
                    (0, B.jsx)(M.Z, {
                        className: d.section,
                        guildId: b.id,
                        badge: V,
                        primaryColor: j,
                        secondaryColor: L
                    })
                ]
            });
        return (0, B.jsxs)('div', {
            children: [
                (0, B.jsx)(f.X6q, {
                    className: d.title,
                    variant: 'heading-lg/semibold',
                    children: P.intl.string(c.default.mf2OwM)
                }),
                (0, B.jsxs)('div', {
                    className: d.container,
                    children: [
                        (0, B.jsxs)('div', {
                            className: d.leftContent,
                            children: [
                                (0, B.jsxs)('div', {
                                    className: d.descriptionContainer,
                                    children: [
                                        (0, B.jsx)(f.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-secondary',
                                            children: P.intl.format(c.default['655Un5'], {
                                                onClickServerProfile: () => {
                                                    Q.Z.setSection(l.pNK.PROFILE);
                                                },
                                                onClickApplyToJoin: () => {
                                                    Q.Z.setSection(l.pNK.ACCESS);
                                                }
                                            })
                                        }),
                                        (0, B.jsx)(w.Z, {
                                            className: d.privateProfileWarning,
                                            children: (0, B.jsx)(f.Text, {
                                                variant: 'text-xs/medium',
                                                children: P.intl.format(c.default.CRbkIy, { onClickEditSetting: () => Q.Z.setSection(l.pNK.PROFILE, l.KsC.PROFILE_VISIBILITY) })
                                            })
                                        })
                                    ]
                                }),
                                u
                                    ? (0, B.jsxs)('div', {
                                          className: d.enableSwitchContainer,
                                          children: [
                                              (0, B.jsx)('label', {
                                                  htmlFor: 'enable-server-tag',
                                                  children: (0, B.jsx)(f.Text, {
                                                      variant: 'text-md/semibold',
                                                      color: 'header-primary',
                                                      children: P.intl.string(c.default['1zams7'])
                                                  })
                                              }),
                                              (0, B.jsx)(f.rsf, {
                                                  id: 'enable-server-tag',
                                                  checked: !O,
                                                  onChange: () => {
                                                      if (O) {
                                                          var A;
                                                          Q.Z.updateGuildProfile(b.id, {
                                                              tag: null != (A = p.tag) ? A : '',
                                                              badge: V,
                                                              badgeColorPrimary: j,
                                                              badgeColorSecondary: L
                                                          });
                                                      } else Q.Z.updateGuildProfile(b.id, { tag: null });
                                                  }
                                              })
                                          ]
                                      })
                                    : (0, B.jsx)('div', {
                                          className: d.boostingLinkContainer,
                                          children: (0, B.jsx)(o.P, {
                                              onClick: () => {
                                                  (0, n.Z)(b.id), Q.Z.close();
                                              }
                                          })
                                      }),
                                O
                                    ? (0, B.jsx)(f.nuw, {
                                          children: (0, B.jsx)('div', {
                                              className: d.disabledForm,
                                              children: X
                                          })
                                      })
                                    : X
                            ]
                        }),
                        (0, B.jsx)('div', {
                            children: (0, B.jsx)(a.Z, {
                                guildId: b.id,
                                tag: p.tag,
                                badge: V,
                                primaryColor: j,
                                secondaryColor: L
                            })
                        })
                    ]
                })
            ]
        });
    };
