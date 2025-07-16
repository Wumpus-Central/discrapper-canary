n.d(t, {
    QV: () => R,
    ZP: () => O,
    go: () => _
});
var r = n(255367),
    i = n(73800),
    a = n(580685),
    s = n(442837),
    l = n(704215),
    d = n(481060),
    o = n(100527),
    c = n(266454),
    u = n(314852),
    h = n(65361),
    f = n(731722),
    m = n(441536),
    p = n(494620),
    x = n(434404),
    g = n(999382),
    b = n(70086),
    y = n(835887),
    j = n(388661),
    v = n(500230),
    C = n(58909),
    N = n(742409),
    S = n(981631),
    I = n(921944),
    E = n(131085),
    P = n(195196),
    Z = n(388032),
    T = n(602268);
let R = [E.x_.LEAF, E.x_.SWORD, E.x_.HEART, E.x_.FIRE, E.x_.WATER_DROP, E.x_.SKULL, E.x_.MOON, E.x_.LIGHTNING, E.x_.COMPASS, E.x_.TOADSTOOL],
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
        var e, t, n, E;
        (0, Z.useSyncMessages)(P.messagesLoader);
        let O = (0, s.e7)([g.Z], () => g.Z.getGuild()),
            k = (0, s.e7)([g.Z], () => g.Z.getGuildProfile()),
            { fetchGuildProfile: w, fetchStatus: G } = (0, h.u)(null == O ? void 0 : O.id);
        if (
            (i.useEffect(() => {
                (0, c.Q3)(l.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE, { dismissAction: I.L.AUTO });
            }, []),
            i.useEffect(() => {
                G === u.a.NOT_FETCHED && w();
            }, [w, G]),
            G !== u.a.FETCHED)
        )
            return (0, r.jsx)('div', {
                className: T.spinnerContainer,
                children: (0, r.jsx)(d.$jN, {})
            });
        if (null == O || null == k) return null;
        let L = a.Y.VISIBLE.has(k.visibility),
            A = (0, f.up)(O),
            F = !A || (null == k ? void 0 : k.tag) == null,
            D = null != (e = k.badge) ? e : R[0],
            B = null != (t = k.badgeColorPrimary) ? t : _[0].primary,
            U = null != (n = k.badgeColorSecondary) ? n : _[0].secondary,
            M = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(j.Z, {
                        className: T.section,
                        guildId: O.id,
                        isDisabled: F,
                        tag: null != (E = k.tag) ? E : '',
                        badge: D,
                        primaryColor: B,
                        secondaryColor: U
                    }),
                    (0, r.jsx)(y.Z, {
                        className: T.section,
                        selectedBadge: D,
                        guildId: O.id
                    }),
                    (0, r.jsx)(v.Z, {
                        className: T.section,
                        guildId: O.id,
                        badge: D,
                        primaryColor: B,
                        secondaryColor: U
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(d.X6q, {
                    className: T.title,
                    variant: 'heading-lg/semibold',
                    children: Z.intl.string(P.default.mf2OwM)
                }),
                (0, r.jsxs)('div', {
                    className: T.container,
                    children: [
                        (0, r.jsxs)('div', {
                            className: T.leftContent,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: T.descriptionContainer,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-secondary',
                                            children: Z.intl.format(P.default['655Un5'], {
                                                onClickServerProfile: () => {
                                                    x.Z.setSection(S.pNK.PROFILE);
                                                },
                                                onClickApplyToJoin: () => {
                                                    x.Z.setSection(S.pNK.ACCESS);
                                                }
                                            })
                                        }),
                                        !L &&
                                            (0, r.jsx)(p.Z, {
                                                className: T.privateProfileWarning,
                                                children: (0, r.jsx)(d.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: Z.intl.format(P.default.CRbkIy, { onClickEditSetting: () => x.Z.setSection(S.pNK.PROFILE, S.KsC.PROFILE_VISIBILITY) })
                                                })
                                            })
                                    ]
                                }),
                                A
                                    ? (0, r.jsxs)('div', {
                                          className: T.enableSwitchContainer,
                                          children: [
                                              (0, r.jsx)('label', {
                                                  htmlFor: 'enable-server-tag',
                                                  children: (0, r.jsx)(d.Text, {
                                                      variant: 'text-md/semibold',
                                                      color: 'header-primary',
                                                      children: Z.intl.string(P.default['1zams7'])
                                                  })
                                              }),
                                              (0, r.jsx)(d.rsf, {
                                                  id: 'enable-server-tag',
                                                  checked: !F,
                                                  onChange: () => {
                                                      if (F) {
                                                          var e;
                                                          x.Z.updateGuildProfile(O.id, {
                                                              tag: null != (e = k.tag) ? e : '',
                                                              badge: D,
                                                              badgeColorPrimary: B,
                                                              badgeColorSecondary: U
                                                          });
                                                      } else x.Z.updateGuildProfile(O.id, { tag: null });
                                                  }
                                              })
                                          ]
                                      })
                                    : (0, r.jsx)('div', {
                                          className: T.boostingLinkContainer,
                                          children: (0, r.jsx)(b.P, {
                                              onClick: () => {
                                                  ((0, m.Z)(O.id, o.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), x.Z.close());
                                              }
                                          })
                                      }),
                                F
                                    ? (0, r.jsx)(d.nuw, {
                                          children: (0, r.jsx)('div', {
                                              className: T.disabledForm,
                                              children: M
                                          })
                                      })
                                    : M
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: T.sidebarContainer,
                            children: [
                                (0, r.jsx)(N.Z, {
                                    guildId: O.id,
                                    tag: k.tag,
                                    badge: D,
                                    primaryColor: B,
                                    secondaryColor: U
                                }),
                                !F && (0, r.jsx)(C.Z, { guildId: O.id })
                            ]
                        })
                    ]
                })
            ]
        });
    };
