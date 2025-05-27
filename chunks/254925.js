r.d(n, {
    QV: () => k,
    ZP: () => w,
    go: () => Z
});
var t = r(255367),
    a = r(73800),
    i = r(580685),
    s = r(442837),
    l = r(704215),
    o = r(481060),
    d = r(100527),
    c = r(605236),
    m = r(314852),
    f = r(65361),
    u = r(731722),
    h = r(441536),
    p = r(494620),
    x = r(434404),
    y = r(999382),
    b = r(70086),
    g = r(835887),
    j = r(388661),
    C = r(500230),
    v = r(742409),
    N = r(981631),
    S = r(921944),
    P = r(131085),
    T = r(817239),
    E = r(388032),
    O = r(602268);
let k = [P.x_.LEAF, P.x_.SWORD, P.x_.HEART, P.x_.FIRE, P.x_.WATER_DROP, P.x_.SKULL, P.x_.MOON, P.x_.LIGHTNING, P.x_.COMPASS, P.x_.TOADSTOOL],
    Z = [
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
        var e, n, r, P;
        (0, E.useSyncMessages)(T.messagesLoader);
        let w = (0, s.e7)([y.Z], () => y.Z.getGuild()),
            I = (0, s.e7)([y.Z], () => y.Z.getGuildProfile()),
            { fetchGuildProfile: R, fetchStatus: _ } = (0, f.u)(null == w ? void 0 : w.id);
        if (
            (a.useEffect(() => {
                (0, c.EW)(l.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE, { dismissAction: S.L.AUTO });
            }, []),
            a.useEffect(() => {
                _ === m.a.NOT_FETCHED && R();
            }, [R, _]),
            _ !== m.a.FETCHED)
        )
            return (0, t.jsx)('div', {
                className: O.spinnerContainer,
                children: (0, t.jsx)(o.$jN, {})
            });
        if (null == w || null == I) return null;
        let G = i.Y.VISIBLE.has(I.visibility),
            L = (0, u.up)(w),
            A = !L || (null == I ? void 0 : I.tag) == null,
            D = null != (e = I.badge) ? e : k[0],
            U = null != (n = I.badgeColorPrimary) ? n : Z[0].primary,
            F = null != (r = I.badgeColorSecondary) ? r : Z[0].secondary,
            B = (0, t.jsxs)(t.Fragment, {
                children: [
                    (0, t.jsx)(j.Z, {
                        className: O.section,
                        guildId: w.id,
                        isDisabled: A,
                        tag: null != (P = I.tag) ? P : '',
                        badge: D,
                        primaryColor: U,
                        secondaryColor: F
                    }),
                    (0, t.jsx)(g.Z, {
                        className: O.section,
                        selectedBadge: D,
                        guildId: w.id
                    }),
                    (0, t.jsx)(C.Z, {
                        className: O.section,
                        guildId: w.id,
                        badge: D,
                        primaryColor: U,
                        secondaryColor: F
                    })
                ]
            });
        return (0, t.jsxs)('div', {
            children: [
                (0, t.jsx)(o.X6q, {
                    className: O.title,
                    variant: 'heading-lg/semibold',
                    children: E.intl.string(T.default.mf2OwM)
                }),
                (0, t.jsxs)('div', {
                    className: O.container,
                    children: [
                        (0, t.jsxs)('div', {
                            className: O.leftContent,
                            children: [
                                (0, t.jsxs)('div', {
                                    className: O.descriptionContainer,
                                    children: [
                                        (0, t.jsx)(o.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-secondary',
                                            children: E.intl.format(T.default['655Un5'], {
                                                onClickServerProfile: () => {
                                                    x.Z.setSection(N.pNK.PROFILE);
                                                },
                                                onClickApplyToJoin: () => {
                                                    x.Z.setSection(N.pNK.ACCESS);
                                                }
                                            })
                                        }),
                                        !G &&
                                            (0, t.jsx)(p.Z, {
                                                className: O.privateProfileWarning,
                                                children: (0, t.jsx)(o.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: E.intl.format(T.default.CRbkIy, { onClickEditSetting: () => x.Z.setSection(N.pNK.PROFILE, N.KsC.PROFILE_VISIBILITY) })
                                                })
                                            })
                                    ]
                                }),
                                L
                                    ? (0, t.jsxs)('div', {
                                          className: O.enableSwitchContainer,
                                          children: [
                                              (0, t.jsx)('label', {
                                                  htmlFor: 'enable-server-tag',
                                                  children: (0, t.jsx)(o.Text, {
                                                      variant: 'text-md/semibold',
                                                      color: 'header-primary',
                                                      children: E.intl.string(T.default['1zams7'])
                                                  })
                                              }),
                                              (0, t.jsx)(o.rsf, {
                                                  id: 'enable-server-tag',
                                                  checked: !A,
                                                  onChange: () => {
                                                      if (A) {
                                                          var e;
                                                          x.Z.updateGuildProfile(w.id, {
                                                              tag: null != (e = I.tag) ? e : '',
                                                              badge: D,
                                                              badgeColorPrimary: U,
                                                              badgeColorSecondary: F
                                                          });
                                                      } else x.Z.updateGuildProfile(w.id, { tag: null });
                                                  }
                                              })
                                          ]
                                      })
                                    : (0, t.jsx)('div', {
                                          className: O.boostingLinkContainer,
                                          children: (0, t.jsx)(b.P, {
                                              onClick: () => {
                                                  (0, h.Z)(w.id, d.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), x.Z.close();
                                              }
                                          })
                                      }),
                                A
                                    ? (0, t.jsx)(o.nuw, {
                                          children: (0, t.jsx)('div', {
                                              className: O.disabledForm,
                                              children: B
                                          })
                                      })
                                    : B
                            ]
                        }),
                        (0, t.jsx)('div', {
                            children: (0, t.jsx)(v.Z, {
                                guildId: w.id,
                                tag: I.tag,
                                badge: D,
                                primaryColor: U,
                                secondaryColor: F
                            })
                        })
                    ]
                })
            ]
        });
    };
