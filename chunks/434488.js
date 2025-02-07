n.d(t, { h: () => j });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
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
    _ = n(895924),
    C = n(540059),
    x = n(605236),
    v = n(448239),
    E = n(626135),
    I = n(607187),
    b = n(981631),
    Z = n(388032),
    N = n(414360),
    T = n(359165),
    S = n(334732);
function j(e) {
    let { channel: t, guild: n, width: l, inPopout: a, handleClose: r, userParticipantCount: s } = e;
    return l < 250
        ? (0, i.jsx)(y, {
              channel: t,
              guild: n,
              width: l,
              inPopout: a,
              handleClose: r,
              userParticipantCount: s
          })
        : s > 1
          ? (0, i.jsx)(P, {
                channel: t,
                guild: n,
                width: l,
                inPopout: a,
                handleClose: r,
                userParticipantCount: s
            })
          : (0, i.jsx)(A, {
                channel: t,
                guild: n,
                width: l,
                inPopout: a
            });
}
function y(e) {
    let { channel: t, inPopout: n, handleClose: l } = e,
        { analyticsLocations: a } = (0, g.ZP)(f.Z.VC_TILE_ACTIVITY_SHELF_BUTTON),
        s = (0, d.O)(),
        u = () => {
            (0, m.Z)({
                channel: t,
                guildId: t.guild_id,
                locationObject: s.location,
                openInPopout: n,
                analyticsLocations: a,
                opensAppLauncherModal: !0
            });
        };
    return (0, i.jsx)(g.Gt, {
        value: a,
        children: (0, i.jsxs)(I.Z, {
            className: N.root,
            children: [
                (0, i.jsx)(c.ua7, {
                    text: Z.intl.string(Z.t.qJvTKS),
                    children: (e) => {
                        let { onClick: t, ...n } = e;
                        return (0, i.jsx)(c.P3F, {
                            ...n,
                            className: N.clickableTile,
                            onClick: () => {
                                null == t || t(), u();
                            },
                            children: (0, i.jsx)('div', {
                                className: N.iconContainer,
                                children: (0, i.jsx)(c.gQj, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 40,
                                    height: 40
                                })
                            })
                        });
                    }
                }),
                (0, i.jsx)(c.f6W, {
                    theme: b.BRd.DARK,
                    children: (e) =>
                        (0, i.jsx)(c.P3F, {
                            onClick: l,
                            className: r()(e, N.shelfButtonCloseButton),
                            children: (0, i.jsx)(c.k$p, {
                                size: 'md',
                                color: 'currentColor',
                                className: N.closeButtonIcon,
                                secondaryColor: o.Z.colors.INTERACTIVE_NORMAL.css
                            })
                        })
                })
            ]
        })
    });
}
function A(e) {
    let { channel: t, guild: a, inPopout: s, width: o } = e;
    l.useEffect(() => {
        E.default.track(b.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity invite',
            n_participants: 1
        });
    }, []);
    let u = (0, d.O)(),
        { analyticsLocations: h } = (0, g.ZP)(f.Z.VC_TILE_ACTIVITY_INVITE),
        p = (0, C.Q3)('SingleUserTile');
    function _() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('7654'), n.e('86004')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guild: a,
                        channel: t,
                        source: b.t4x.ACTIVITY_ENTRY_POINT_TILE
                    });
            },
            { contextKey: s ? c.u1M : c.z1l }
        );
    }
    function x() {
        (0, m.Z)({
            channel: t,
            guildId: t.guild_id,
            locationObject: u.location,
            openInPopout: s,
            analyticsLocations: h,
            opensAppLauncherModal: !0
        });
    }
    return (0, i.jsx)(g.Gt, {
        value: h,
        children: (0, i.jsx)(c.f6W, {
            disableAdaptiveTheme: !0,
            theme: b.BRd.MIDNIGHT,
            children: (e) =>
                (0, i.jsxs)(I.Z, {
                    className: r()(N.root, N.singleUserRoot, e),
                    children: [
                        o > 400 && !p
                            ? (0, i.jsx)('img', {
                                  src: S,
                                  className: N.art,
                                  alt: Z.intl.string(Z.t['3Y9xdH'])
                              })
                            : (0, i.jsx)('img', {
                                  src: T,
                                  className: N.art,
                                  alt: ''
                              }),
                        p
                            ? null
                            : (0, i.jsx)(c.Text, {
                                  className: N.heading,
                                  variant: 'text-md/semibold',
                                  color: 'always-white',
                                  children: Z.intl.string(Z.t['6pKGKS'])
                              }),
                        (0, i.jsxs)('div', {
                            className: N.buttonContainer,
                            children: [
                                (0, i.jsxs)(c.zxk, {
                                    size: c.zxk.Sizes.LARGE,
                                    color: c.zxk.Colors.PRIMARY,
                                    className: r()({ [N.button]: !p }),
                                    innerClassName: N.buttonContents,
                                    onClick: _,
                                    children: [
                                        (0, i.jsx)(c.iFz, {
                                            size: 'xs',
                                            color: 'currentColor'
                                        }),
                                        Z.intl.string(Z.t['6Qgren'])
                                    ]
                                }),
                                (0, i.jsxs)(c.zxk, {
                                    size: c.zxk.Sizes.LARGE,
                                    color: c.zxk.Colors.PRIMARY,
                                    className: r()({ [N.button]: !p }),
                                    innerClassName: N.buttonContents,
                                    onClick: x,
                                    children: [
                                        (0, i.jsx)(c.nG3, {
                                            size: 'xs',
                                            color: 'currentColor'
                                        }),
                                        Z.intl.string(Z.t.qnFavb)
                                    ]
                                })
                            ]
                        })
                    ]
                })
        })
    });
}
function P(e) {
    let { channel: t, guild: n, handleClose: a, width: o, userParticipantCount: d } = e,
        m = (0, C.Q3)('MultiUserTile');
    (0, u.ZP)(() => {
        E.default.track(b.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity suggestion',
            n_participants: d
        });
    });
    let T = (0, h.Z)({ guildId: n.id }).slice(0, 3),
        { analyticsLocations: j } = (0, g.ZP)(f.Z.VC_TILE_ACTIVITY_SUGGESTION),
        y = l.useMemo(
            () => ({
                channel: t,
                type: 'channel'
            }),
            [t]
        );
    return (0, i.jsx)(g.Gt, {
        value: j,
        children: (0, i.jsxs)(I.Z, {
            className: N.root,
            children: [
                o > 480 && !m
                    ? (0, i.jsx)('img', {
                          className: N.art,
                          src: S,
                          alt: Z.intl.string(Z.t['3Y9xdH'])
                      })
                    : null,
                o > 300
                    ? (0, i.jsx)(c.Text, {
                          className: N.heading,
                          variant: o > 550 ? 'text-md/semibold' : 'text-sm/semibold',
                          children: Z.intl.string(Z.t['7BKMcH'])
                      })
                    : null,
                (0, i.jsx)('div', {
                    className: r()(N.activitiesContainer, { [N.activitiesContainerSmol]: o <= 300 }),
                    children: T.map((e) =>
                        (0, i.jsx)(
                            p.Y,
                            {
                                context: y,
                                activityItem: e,
                                aspectRatio: p.Y.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: N.activitySuggestion,
                                commandOrigin: _.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS
                            },
                            e.application.id
                        )
                    )
                }),
                (0, i.jsxs)(c.P3F, {
                    className: N.checkboxContainer,
                    onClick: function () {
                        E.default.track(b.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: 'activity suggestion',
                            close_type: 'permanent',
                            n_participants: d
                        }),
                            (0, x.EW)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT);
                    },
                    children: [
                        (0, i.jsx)(v.Z, {}),
                        (0, i.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            children: Z.intl.string(Z.t['5E9SBw'])
                        })
                    ]
                }),
                (0, i.jsx)(c.P3F, {
                    className: N.closeButtonContainer,
                    onClick: function () {
                        E.default.track(b.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: 'activity suggestion',
                            close_type: 'temporary',
                            n_participants: d
                        }),
                            a();
                    },
                    children: (0, i.jsx)(c.Dio, {
                        size: 'md',
                        color: 'currentColor',
                        className: N.closeButton
                    })
                })
            ]
        })
    });
}
