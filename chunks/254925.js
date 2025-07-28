n.d(t, {
    Z: () => w,
    g: () => P
});
var r = n(255367),
    i = n(73800),
    l = n(580685),
    a = n(442837),
    s = n(704215),
    o = n(481060),
    c = n(100527),
    d = n(266454),
    u = n(314852),
    m = n(65361),
    g = n(731722),
    p = n(441536),
    h = n(494620),
    f = n(434404),
    x = n(999382),
    b = n(70086),
    j = n(835887),
    v = n(388661),
    _ = n(500230),
    O = n(58909),
    y = n(742409),
    C = n(981631),
    N = n(921944),
    I = n(131085),
    E = n(195196),
    S = n(388032),
    T = n(602268);
let P = [
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
    w = function () {
        var e, t, n, w;
        (0, S.useSyncMessages)(E.messagesLoader);
        let R = (0, a.e7)([x.Z], () => x.Z.getGuild()),
            Z = (0, a.e7)([x.Z], () => x.Z.getGuildProfile()),
            { fetchGuildProfile: D, fetchStatus: A } = (0, m.u)(null == R ? void 0 : R.id);
        if (
            (i.useEffect(() => {
                (0, d.Q3)(s.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE, { dismissAction: N.L.AUTO });
            }, []),
            i.useEffect(() => {
                A === u.a.NOT_FETCHED && D();
            }, [D, A]),
            A !== u.a.FETCHED)
        )
            return (0, r.jsx)('div', {
                className: T.spinnerContainer,
                children: (0, r.jsx)(o.$jN, {})
            });
        if (null == R || null == Z) return null;
        let k = l.Y.VISIBLE.has(Z.visibility),
            L = (0, g.up)(R),
            M = !L || (null == Z ? void 0 : Z.tag) == null,
            G = null != (e = Z.badge) ? e : I.QV['0'],
            U = null != (t = Z.badgeColorPrimary) ? t : P[0].primary,
            B = null != (n = Z.badgeColorSecondary) ? n : P[0].secondary,
            F = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(v.Z, {
                        className: T.section,
                        guildId: R.id,
                        isDisabled: M,
                        tag: null != (w = Z.tag) ? w : '',
                        badge: G,
                        primaryColor: U,
                        secondaryColor: B
                    }),
                    (0, r.jsx)(j.Z, {
                        className: T.section,
                        selectedBadge: G,
                        guildId: R.id
                    }),
                    (0, r.jsx)(_.Z, {
                        className: T.section,
                        guildId: R.id,
                        badge: G,
                        primaryColor: U,
                        secondaryColor: B
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(o.X6q, {
                    className: T.title,
                    variant: 'heading-lg/semibold',
                    children: S.intl.string(E.default.mf2OwM)
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
                                        (0, r.jsx)(o.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-secondary',
                                            children: S.intl.format(E.default['655Un5'], {
                                                onClickServerProfile: () => {
                                                    f.Z.setSection(C.pNK.PROFILE);
                                                },
                                                onClickApplyToJoin: () => {
                                                    f.Z.setSection(C.pNK.ACCESS);
                                                }
                                            })
                                        }),
                                        !k &&
                                            (0, r.jsx)(h.Z, {
                                                className: T.privateProfileWarning,
                                                children: (0, r.jsx)(o.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: S.intl.format(E.default.CRbkIy, { onClickEditSetting: () => f.Z.setSection(C.pNK.PROFILE, C.KsC.PROFILE_VISIBILITY) })
                                                })
                                            })
                                    ]
                                }),
                                L
                                    ? (0, r.jsxs)('div', {
                                          className: T.enableSwitchContainer,
                                          children: [
                                              (0, r.jsx)('label', {
                                                  htmlFor: 'enable-server-tag',
                                                  children: (0, r.jsx)(o.Text, {
                                                      variant: 'text-md/semibold',
                                                      color: 'header-primary',
                                                      children: S.intl.string(E.default['1zams7'])
                                                  })
                                              }),
                                              (0, r.jsx)(o.rsf, {
                                                  id: 'enable-server-tag',
                                                  checked: !M,
                                                  onChange: () => {
                                                      if (M) {
                                                          var e;
                                                          f.Z.updateGuildProfile(R.id, {
                                                              tag: null != (e = Z.tag) ? e : '',
                                                              badge: G,
                                                              badgeColorPrimary: U,
                                                              badgeColorSecondary: B
                                                          });
                                                      } else f.Z.updateGuildProfile(R.id, { tag: null });
                                                  }
                                              })
                                          ]
                                      })
                                    : (0, r.jsx)('div', {
                                          className: T.boostingLinkContainer,
                                          children: (0, r.jsx)(b.P, {
                                              onClick: () => {
                                                  ((0, p.Z)(R.id, c.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), f.Z.close());
                                              }
                                          })
                                      }),
                                M
                                    ? (0, r.jsx)(o.nuw, {
                                          children: (0, r.jsx)('div', {
                                              className: T.disabledForm,
                                              children: F
                                          })
                                      })
                                    : F
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: T.sidebarContainer,
                            children: [
                                (0, r.jsx)(y.Z, {
                                    guildId: R.id,
                                    tag: Z.tag,
                                    badge: G,
                                    primaryColor: U,
                                    secondaryColor: B
                                }),
                                !M && (0, r.jsx)(O.Z, { guildId: R.id })
                            ]
                        })
                    ]
                })
            ]
        });
    };
