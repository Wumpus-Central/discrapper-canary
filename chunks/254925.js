t.d(n, {
    QV: () => I,
    ZP: () => w,
    go: () => O
});
var r = t(255367),
    i = t(73800),
    a = t(580685),
    l = t(442837),
    s = t(704215),
    d = t(481060),
    o = t(100527),
    c = t(605236),
    u = t(314852),
    m = t(65361),
    f = t(731722),
    h = t(441536),
    x = t(494620),
    p = t(434404),
    g = t(999382),
    b = t(70086),
    y = t(835887),
    j = t(388661),
    v = t(500230),
    C = t(58909),
    N = t(742409),
    S = t(981631),
    P = t(921944),
    T = t(131085),
    E = t(912518),
    Z = t(388032),
    k = t(602268);
let I = [T.x_.LEAF, T.x_.SWORD, T.x_.HEART, T.x_.FIRE, T.x_.WATER_DROP, T.x_.SKULL, T.x_.MOON, T.x_.LIGHTNING, T.x_.COMPASS, T.x_.TOADSTOOL],
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
    w = function () {
        var e, n, t, T;
        (0, Z.useSyncMessages)(E.messagesLoader);
        let w = (0, l.e7)([g.Z], () => g.Z.getGuild()),
            R = (0, l.e7)([g.Z], () => g.Z.getGuildProfile()),
            { fetchGuildProfile: _, fetchStatus: G } = (0, m.u)(null == w ? void 0 : w.id);
        if (
            (i.useEffect(() => {
                (0, c.EW)(s.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE, { dismissAction: P.L.AUTO });
            }, []),
            i.useEffect(() => {
                G === u.a.NOT_FETCHED && _();
            }, [_, G]),
            G !== u.a.FETCHED)
        )
            return (0, r.jsx)('div', {
                className: k.spinnerContainer,
                children: (0, r.jsx)(d.$jN, {})
            });
        if (null == w || null == R) return null;
        let L = a.Y.VISIBLE.has(R.visibility),
            D = (0, f.up)(w),
            A = !D || (null == R ? void 0 : R.tag) == null,
            U = null != (e = R.badge) ? e : I[0],
            F = null != (n = R.badgeColorPrimary) ? n : O[0].primary,
            B = null != (t = R.badgeColorSecondary) ? t : O[0].secondary,
            K = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(j.Z, {
                        className: k.section,
                        guildId: w.id,
                        isDisabled: A,
                        tag: null != (T = R.tag) ? T : '',
                        badge: U,
                        primaryColor: F,
                        secondaryColor: B
                    }),
                    (0, r.jsx)(y.Z, {
                        className: k.section,
                        selectedBadge: U,
                        guildId: w.id
                    }),
                    (0, r.jsx)(v.Z, {
                        className: k.section,
                        guildId: w.id,
                        badge: U,
                        primaryColor: F,
                        secondaryColor: B
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(d.X6q, {
                    className: k.title,
                    variant: 'heading-lg/semibold',
                    children: Z.intl.string(E.default.mf2OwM)
                }),
                (0, r.jsxs)('div', {
                    className: k.container,
                    children: [
                        (0, r.jsxs)('div', {
                            className: k.leftContent,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: k.descriptionContainer,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-secondary',
                                            children: Z.intl.format(E.default['655Un5'], {
                                                onClickServerProfile: () => {
                                                    p.Z.setSection(S.pNK.PROFILE);
                                                },
                                                onClickApplyToJoin: () => {
                                                    p.Z.setSection(S.pNK.ACCESS);
                                                }
                                            })
                                        }),
                                        !L &&
                                            (0, r.jsx)(x.Z, {
                                                className: k.privateProfileWarning,
                                                children: (0, r.jsx)(d.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: Z.intl.format(E.default.CRbkIy, { onClickEditSetting: () => p.Z.setSection(S.pNK.PROFILE, S.KsC.PROFILE_VISIBILITY) })
                                                })
                                            })
                                    ]
                                }),
                                D
                                    ? (0, r.jsxs)('div', {
                                          className: k.enableSwitchContainer,
                                          children: [
                                              (0, r.jsx)('label', {
                                                  htmlFor: 'enable-server-tag',
                                                  children: (0, r.jsx)(d.Text, {
                                                      variant: 'text-md/semibold',
                                                      color: 'header-primary',
                                                      children: Z.intl.string(E.default['1zams7'])
                                                  })
                                              }),
                                              (0, r.jsx)(d.rsf, {
                                                  id: 'enable-server-tag',
                                                  checked: !A,
                                                  onChange: () => {
                                                      if (A) {
                                                          var e;
                                                          p.Z.updateGuildProfile(w.id, {
                                                              tag: null != (e = R.tag) ? e : '',
                                                              badge: U,
                                                              badgeColorPrimary: F,
                                                              badgeColorSecondary: B
                                                          });
                                                      } else p.Z.updateGuildProfile(w.id, { tag: null });
                                                  }
                                              })
                                          ]
                                      })
                                    : (0, r.jsx)('div', {
                                          className: k.boostingLinkContainer,
                                          children: (0, r.jsx)(b.P, {
                                              onClick: () => {
                                                  (0, h.Z)(w.id, o.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), p.Z.close();
                                              }
                                          })
                                      }),
                                A
                                    ? (0, r.jsx)(d.nuw, {
                                          children: (0, r.jsx)('div', {
                                              className: k.disabledForm,
                                              children: K
                                          })
                                      })
                                    : K
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: k.sidebarContainer,
                            children: [
                                (0, r.jsx)(N.Z, {
                                    guildId: w.id,
                                    tag: R.tag,
                                    badge: U,
                                    primaryColor: F,
                                    secondaryColor: B
                                }),
                                !A && (0, r.jsx)(C.Z, { guildId: w.id })
                            ]
                        })
                    ]
                })
            ]
        });
    };
