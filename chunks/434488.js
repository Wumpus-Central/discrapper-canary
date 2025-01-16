n.d(t, {
    h: function () {
        return S;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(704215),
    o = n(692547),
    c = n(481060),
    d = n(2052),
    u = n(493773),
    h = n(127255),
    p = n(5200),
    m = n(403404),
    f = n(100527),
    g = n(906732),
    C = n(895924),
    x = n(605236),
    v = n(448239),
    _ = n(626135),
    I = n(607187),
    E = n(981631),
    b = n(388032),
    Z = n(414360),
    N = n(334732);
function S(e) {
    let { channel: t, guild: n, width: l, inPopout: r, handleClose: a, userParticipantCount: s } = e;
    return l < 250
        ? (0, i.jsx)(T, {
              channel: t,
              guild: n,
              width: l,
              inPopout: r,
              handleClose: a,
              userParticipantCount: s
          })
        : s > 1
          ? (0, i.jsx)(A, {
                channel: t,
                guild: n,
                width: l,
                inPopout: r,
                handleClose: a,
                userParticipantCount: s
            })
          : (0, i.jsx)(j, {
                channel: t,
                guild: n,
                width: l,
                inPopout: r
            });
}
function T(e) {
    let { channel: t, inPopout: n, handleClose: l } = e,
        { analyticsLocations: r } = (0, g.ZP)(f.Z.VC_TILE_ACTIVITY_SHELF_BUTTON),
        s = (0, d.O)(),
        u = () => {
            (0, m.Z)({
                channel: t,
                guildId: t.guild_id,
                locationObject: s.location,
                openInPopout: n,
                analyticsLocations: r,
                opensAppLauncherModal: !0
            });
        };
    return (0, i.jsx)(g.Gt, {
        value: r,
        children: (0, i.jsxs)(I.Z, {
            className: Z.root,
            children: [
                (0, i.jsx)(c.Tooltip, {
                    text: b.intl.string(b.t.qJvTKS),
                    children: (e) => {
                        let { onClick: t, ...n } = e;
                        return (0, i.jsx)(c.Clickable, {
                            ...n,
                            className: Z.clickableTile,
                            onClick: () => {
                                null == t || t(), u();
                            },
                            children: (0, i.jsx)('div', {
                                className: Z.iconContainer,
                                children: (0, i.jsx)(c.ActivitiesPlusIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 40,
                                    height: 40
                                })
                            })
                        });
                    }
                }),
                (0, i.jsx)(c.ThemeProvider, {
                    theme: E.BRd.DARK,
                    children: (e) =>
                        (0, i.jsx)(c.Clickable, {
                            onClick: l,
                            className: a()(e, Z.shelfButtonCloseButton),
                            children: (0, i.jsx)(c.CircleXIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: Z.closeButtonIcon,
                                secondaryColor: o.Z.colors.INTERACTIVE_NORMAL.css
                            })
                        })
                })
            ]
        })
    });
}
function j(e) {
    let { channel: t, guild: r, inPopout: a, width: s } = e;
    l.useEffect(() => {
        _.default.track(E.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity invite',
            n_participants: 1
        });
    }, []);
    let o = (0, d.O)(),
        { analyticsLocations: u } = (0, g.ZP)(f.Z.VC_TILE_ACTIVITY_INVITE);
    return (0, i.jsx)(g.Gt, {
        value: u,
        children: (0, i.jsxs)(I.Z, {
            className: Z.root,
            children: [
                s > 400
                    ? (0, i.jsx)('img', {
                          src: N,
                          className: Z.art,
                          alt: b.intl.string(b.t['3Y9xdH'])
                      })
                    : null,
                (0, i.jsx)(c.Text, {
                    className: Z.heading,
                    variant: 'text-md/semibold',
                    color: 'always-white',
                    children: b.intl.string(b.t['6pKGKS'])
                }),
                (0, i.jsxs)('div', {
                    className: Z.buttonContainer,
                    children: [
                        (0, i.jsxs)(c.Button, {
                            size: c.Button.Sizes.LARGE,
                            color: c.Button.Colors.PRIMARY,
                            className: Z.button,
                            innerClassName: Z.buttonContents,
                            onClick: function () {
                                (0, c.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([n.e('7654'), n.e('86004')]).then(n.bind(n, 560114));
                                        return (n) =>
                                            (0, i.jsx)(e, {
                                                ...n,
                                                guild: r,
                                                channel: t,
                                                source: E.t4x.ACTIVITY_ENTRY_POINT_TILE
                                            });
                                    },
                                    { contextKey: a ? c.POPOUT_MODAL_CONTEXT : c.DEFAULT_MODAL_CONTEXT }
                                );
                            },
                            children: [
                                (0, i.jsx)(c.FriendsIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                }),
                                b.intl.string(b.t['6Qgren'])
                            ]
                        }),
                        (0, i.jsxs)(c.Button, {
                            size: c.Button.Sizes.LARGE,
                            className: Z.button,
                            innerClassName: Z.buttonContents,
                            onClick: function () {
                                (0, m.Z)({
                                    channel: t,
                                    guildId: t.guild_id,
                                    locationObject: o.location,
                                    openInPopout: a,
                                    analyticsLocations: u,
                                    opensAppLauncherModal: !0
                                });
                            },
                            children: [
                                (0, i.jsx)(c.ActivitiesIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                }),
                                b.intl.string(b.t.qaIFpq)
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function A(e) {
    let { channel: t, guild: n, handleClose: l, width: r, userParticipantCount: o } = e;
    (0, u.Z)(() => {
        _.default.track(E.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity suggestion',
            n_participants: o
        });
    });
    let d = (0, h.Z)({ guildId: n.id }).slice(0, 3),
        { analyticsLocations: m } = (0, g.ZP)(f.Z.VC_TILE_ACTIVITY_SUGGESTION);
    return (0, i.jsx)(g.Gt, {
        value: m,
        children: (0, i.jsxs)(I.Z, {
            className: Z.root,
            children: [
                r > 480
                    ? (0, i.jsx)('img', {
                          className: Z.art,
                          src: N,
                          alt: b.intl.string(b.t['3Y9xdH'])
                      })
                    : null,
                r > 300
                    ? (0, i.jsx)(c.Text, {
                          className: Z.heading,
                          variant: r > 550 ? 'text-md/semibold' : 'text-sm/semibold',
                          children: b.intl.string(b.t['7BKMcH'])
                      })
                    : null,
                (0, i.jsx)('div', {
                    className: a()(Z.activitiesContainer, { [Z.activitiesContainerSmol]: r <= 300 }),
                    children: d.map((e) =>
                        (0, i.jsx)(
                            p.Y,
                            {
                                channel: t,
                                activityItem: e,
                                aspectRatio: p.Y.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: Z.activitySuggestion,
                                commandOrigin: C.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS
                            },
                            e.application.id
                        )
                    )
                }),
                (0, i.jsxs)(c.Clickable, {
                    className: Z.checkboxContainer,
                    onClick: function () {
                        _.default.track(E.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: 'activity suggestion',
                            close_type: 'permanent',
                            n_participants: o
                        }),
                            (0, x.EW)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT);
                    },
                    children: [
                        (0, i.jsx)(v.Z, {}),
                        (0, i.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            children: b.intl.string(b.t['5E9SBw'])
                        })
                    ]
                }),
                (0, i.jsx)(c.Clickable, {
                    className: Z.closeButtonContainer,
                    onClick: function () {
                        _.default.track(E.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: 'activity suggestion',
                            close_type: 'temporary',
                            n_participants: o
                        }),
                            l();
                    },
                    children: (0, i.jsx)(c.XSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: Z.closeButton
                    })
                })
            ]
        })
    });
}
