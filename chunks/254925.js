t.d(r, {
    QV: () => R,
    ZP: () => O,
    go: () => _
});
var n = t(255367),
    a = t(73800),
    i = t(580685),
    s = t(442837),
    l = t(704215),
    o = t(481060),
    d = t(100527),
    c = t(266454),
    u = t(314852),
    f = t(65361),
    m = t(731722),
    p = t(441536),
    h = t(494620),
    x = t(434404),
    g = t(999382),
    y = t(70086),
    j = t(835887),
    v = t(388661),
    b = t(500230),
    C = t(58909),
    N = t(742409),
    S = t(981631),
    I = t(921944),
    P = t(131085),
    E = t(195196),
    Z = t(388032),
    T = t(602268);
let R = [P.x_.LEAF, P.x_.SWORD, P.x_.HEART, P.x_.FIRE, P.x_.WATER_DROP, P.x_.SKULL, P.x_.MOON, P.x_.LIGHTNING, P.x_.COMPASS, P.x_.TOADSTOOL],
    _ = [
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
        var e, r, t, P;
        (0, Z.useSyncMessages)(E.messagesLoader);
        let O = (0, s.e7)([g.Z], () => g.Z.getGuild()),
            k = (0, s.e7)([g.Z], () => g.Z.getGuildProfile()),
            { fetchGuildProfile: w, fetchStatus: G } = (0, f.u)(null == O ? void 0 : O.id);
        if (
            (a.useEffect(() => {
                (0, c.Q3)(l.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE, { dismissAction: I.L.AUTO });
            }, []),
            a.useEffect(() => {
                G === u.a.NOT_FETCHED && w();
            }, [w, G]),
            G !== u.a.FETCHED)
        )
            return (0, n.jsx)('div', {
                className: T.spinnerContainer,
                children: (0, n.jsx)(o.$jN, {})
            });
        if (null == O || null == k) return null;
        let A = i.Y.VISIBLE.has(k.visibility),
            L = (0, m.up)(O),
            F = !L || (null == k ? void 0 : k.tag) == null,
            D = null != (e = k.badge) ? e : R[0],
            B = null != (r = k.badgeColorPrimary) ? r : _[0].primary,
            M = null != (t = k.badgeColorSecondary) ? t : _[0].secondary,
            U = (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(v.Z, {
                        className: T.section,
                        guildId: O.id,
                        isDisabled: F,
                        tag: null != (P = k.tag) ? P : '',
                        badge: D,
                        primaryColor: B,
                        secondaryColor: M
                    }),
                    (0, n.jsx)(j.Z, {
                        className: T.section,
                        selectedBadge: D,
                        guildId: O.id
                    }),
                    (0, n.jsx)(b.Z, {
                        className: T.section,
                        guildId: O.id,
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
                                                    x.Z.setSection(S.pNK.PROFILE);
                                                },
                                                onClickApplyToJoin: () => {
                                                    x.Z.setSection(S.pNK.ACCESS);
                                                }
                                            })
                                        }),
                                        !A &&
                                            (0, n.jsx)(h.Z, {
                                                className: T.privateProfileWarning,
                                                children: (0, n.jsx)(o.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: Z.intl.format(E.default.CRbkIy, { onClickEditSetting: () => x.Z.setSection(S.pNK.PROFILE, S.KsC.PROFILE_VISIBILITY) })
                                                })
                                            })
                                    ]
                                }),
                                L
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
                                                  checked: !F,
                                                  onChange: () => {
                                                      if (F) {
                                                          var e;
                                                          x.Z.updateGuildProfile(O.id, {
                                                              tag: null != (e = k.tag) ? e : '',
                                                              badge: D,
                                                              badgeColorPrimary: B,
                                                              badgeColorSecondary: M
                                                          });
                                                      } else x.Z.updateGuildProfile(O.id, { tag: null });
                                                  }
                                              })
                                          ]
                                      })
                                    : (0, n.jsx)('div', {
                                          className: T.boostingLinkContainer,
                                          children: (0, n.jsx)(y.P, {
                                              onClick: () => {
                                                  ((0, p.Z)(O.id, d.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), x.Z.close());
                                              }
                                          })
                                      }),
                                F
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
                                    guildId: O.id,
                                    tag: k.tag,
                                    badge: D,
                                    primaryColor: B,
                                    secondaryColor: M
                                }),
                                !F && (0, n.jsx)(C.Z, { guildId: O.id })
                            ]
                        })
                    ]
                })
            ]
        });
    };
