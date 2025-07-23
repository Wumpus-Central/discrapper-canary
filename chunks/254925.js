t.d(r, {
    QV: () => R,
    ZP: () => k,
    go: () => O
});
var n = t(255367),
    i = t(73800),
    a = t(580685),
    s = t(442837),
    l = t(704215),
    o = t(481060),
    c = t(100527),
    d = t(266454),
    u = t(314852),
    m = t(65361),
    p = t(731722),
    h = t(441536),
    f = t(494620),
    g = t(434404),
    x = t(999382),
    y = t(70086),
    j = t(835887),
    v = t(388661),
    C = t(500230),
    b = t(58909),
    N = t(742409),
    S = t(981631),
    I = t(921944),
    P = t(131085),
    E = t(195196),
    Z = t(388032),
    T = t(602268);
let R = [P.x_.LEAF, P.x_.SWORD, P.x_.HEART, P.x_.FIRE, P.x_.WATER_DROP, P.x_.SKULL, P.x_.MOON, P.x_.LIGHTNING, P.x_.COMPASS, P.x_.TOADSTOOL],
    O = [
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
    k = function () {
        var e, r, t, P;
        (0, Z.useSyncMessages)(E.messagesLoader);
        let k = (0, s.e7)([x.Z], () => x.Z.getGuild()),
            _ = (0, s.e7)([x.Z], () => x.Z.getGuildProfile()),
            { fetchGuildProfile: w, fetchStatus: G } = (0, m.u)(null == k ? void 0 : k.id);
        if (
            (i.useEffect(() => {
                (0, d.Q3)(l.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE, { dismissAction: I.L.AUTO });
            }, []),
            i.useEffect(() => {
                G === u.a.NOT_FETCHED && w();
            }, [w, G]),
            G !== u.a.FETCHED)
        )
            return (0, n.jsx)('div', {
                className: T.spinnerContainer,
                children: (0, n.jsx)(o.$jN, {})
            });
        if (null == k || null == _) return null;
        let A = a.Y.VISIBLE.has(_.visibility),
            F = (0, p.up)(k),
            L = !F || (null == _ ? void 0 : _.tag) == null,
            D = null != (e = _.badge) ? e : R[0],
            B = null != (r = _.badgeColorPrimary) ? r : O[0].primary,
            M = null != (t = _.badgeColorSecondary) ? t : O[0].secondary,
            U = (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(v.Z, {
                        className: T.section,
                        guildId: k.id,
                        isDisabled: L,
                        tag: null != (P = _.tag) ? P : '',
                        badge: D,
                        primaryColor: B,
                        secondaryColor: M
                    }),
                    (0, n.jsx)(j.Z, {
                        className: T.section,
                        selectedBadge: D,
                        guildId: k.id
                    }),
                    (0, n.jsx)(C.Z, {
                        className: T.section,
                        guildId: k.id,
                        badge: D,
                        primaryColor: B,
                        secondaryColor: M
                    })
                ]
            });
        return (0, n.jsxs)('div', {
            children: [
                (0, n.jsx)(o.X6q, {
                    className: T.title,
                    variant: 'heading-lg/semibold',
                    children: Z.intl.string(E.default.mf2OwM)
                }),
                (0, n.jsxs)('div', {
                    className: T.container,
                    children: [
                        (0, n.jsxs)('div', {
                            className: T.leftContent,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: T.descriptionContainer,
                                    children: [
                                        (0, n.jsx)(o.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-secondary',
                                            children: Z.intl.format(E.default['655Un5'], {
                                                onClickServerProfile: () => {
                                                    g.Z.setSection(S.pNK.PROFILE);
                                                },
                                                onClickApplyToJoin: () => {
                                                    g.Z.setSection(S.pNK.ACCESS);
                                                }
                                            })
                                        }),
                                        !A &&
                                            (0, n.jsx)(f.Z, {
                                                className: T.privateProfileWarning,
                                                children: (0, n.jsx)(o.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: Z.intl.format(E.default.CRbkIy, { onClickEditSetting: () => g.Z.setSection(S.pNK.PROFILE, S.KsC.PROFILE_VISIBILITY) })
                                                })
                                            })
                                    ]
                                }),
                                F
                                    ? (0, n.jsxs)('div', {
                                          className: T.enableSwitchContainer,
                                          children: [
                                              (0, n.jsx)('label', {
                                                  htmlFor: 'enable-server-tag',
                                                  children: (0, n.jsx)(o.Text, {
                                                      variant: 'text-md/semibold',
                                                      color: 'header-primary',
                                                      children: Z.intl.string(E.default['1zams7'])
                                                  })
                                              }),
                                              (0, n.jsx)(o.rsf, {
                                                  id: 'enable-server-tag',
                                                  checked: !L,
                                                  onChange: () => {
                                                      if (L) {
                                                          var e;
                                                          g.Z.updateGuildProfile(k.id, {
                                                              tag: null != (e = _.tag) ? e : '',
                                                              badge: D,
                                                              badgeColorPrimary: B,
                                                              badgeColorSecondary: M
                                                          });
                                                      } else g.Z.updateGuildProfile(k.id, { tag: null });
                                                  }
                                              })
                                          ]
                                      })
                                    : (0, n.jsx)('div', {
                                          className: T.boostingLinkContainer,
                                          children: (0, n.jsx)(y.P, {
                                              onClick: () => {
                                                  ((0, h.Z)(k.id, c.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), g.Z.close());
                                              }
                                          })
                                      }),
                                L
                                    ? (0, n.jsx)(o.nuw, {
                                          children: (0, n.jsx)('div', {
                                              className: T.disabledForm,
                                              children: U
                                          })
                                      })
                                    : U
                            ]
                        }),
                        (0, n.jsxs)('div', {
                            className: T.sidebarContainer,
                            children: [
                                (0, n.jsx)(N.Z, {
                                    guildId: k.id,
                                    tag: _.tag,
                                    badge: D,
                                    primaryColor: B,
                                    secondaryColor: M
                                }),
                                !L && (0, n.jsx)(b.Z, { guildId: k.id })
                            ]
                        })
                    ]
                })
            ]
        });
    };
