n.d(t, { h: () => T });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(704215),
    s = n(692547),
    c = n(481060),
    u = n(2052),
    d = n(493773),
    p = n(456100),
    h = n(127255),
    f = n(5200),
    m = n(403404),
    g = n(100527),
    b = n(906732),
    _ = n(895924),
    C = n(540059),
    v = n(605236),
    y = n(448239),
    x = n(626135),
    j = n(607187),
    O = n(981631),
    E = n(388032),
    N = n(889742),
    I = n(359165),
    P = n(334732);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e) {
    let { channel: t, guild: n, width: i, inPopout: l, handleClose: o, userParticipantCount: a } = e;
    return i < 250
        ? (0, r.jsx)(A, {
              channel: t,
              guild: n,
              width: i,
              inPopout: l,
              handleClose: o,
              userParticipantCount: a
          })
        : a > 1
          ? (0, r.jsx)(R, {
                channel: t,
                guild: n,
                width: i,
                inPopout: l,
                handleClose: o,
                userParticipantCount: a
            })
          : (0, r.jsx)(w, {
                channel: t,
                guild: n,
                width: i,
                inPopout: l
            });
}
function A(e) {
    let { channel: t, inPopout: n, handleClose: i } = e,
        { analyticsLocations: l } = (0, b.ZP)(g.Z.VC_TILE_ACTIVITY_SHELF_BUTTON),
        a = (0, u.O)(),
        { enabled: d } = p.c.useExperiment({ location: 'ActivityShelfButtonTile' }, { autoTrackExposure: !0 }),
        h = d ? c.iWm : c.gQj,
        f = () => {
            (0, m.Z)({
                channel: t,
                guildId: t.guild_id,
                locationObject: a.location,
                openInPopout: n,
                analyticsLocations: l,
                opensAppLauncherModal: !0
            });
        };
    return (0, r.jsx)(b.Gt, {
        value: l,
        children: (0, r.jsxs)(j.Z, {
            className: N.root,
            children: [
                (0, r.jsx)(c.ua7, {
                    text: E.NW.string(E.t.qJvTKS),
                    children: (e) => {
                        var { onClick: t } = e,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            r,
                                            i = {},
                                            l = Object.keys(e);
                                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                        return i;
                                    })(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var l = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                }
                                return i;
                            })(e, ['onClick']);
                        return (0, r.jsx)(
                            c.P3F,
                            Z(S({}, n), {
                                className: N.clickableTile,
                                onClick: () => {
                                    null == t || t(), f();
                                },
                                children: (0, r.jsx)('div', {
                                    className: N.iconContainer,
                                    children: (0, r.jsx)(h, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 40,
                                        height: 40
                                    })
                                })
                            })
                        );
                    }
                }),
                (0, r.jsx)(c.f6W, {
                    theme: O.BRd.DARK,
                    children: (e) =>
                        (0, r.jsx)(c.P3F, {
                            onClick: i,
                            className: o()(e, N.shelfButtonCloseButton),
                            children: (0, r.jsx)(c.k$p, {
                                size: 'md',
                                color: 'currentColor',
                                className: N.closeButtonIcon,
                                secondaryColor: s.Z.colors.INTERACTIVE_NORMAL.css
                            })
                        })
                })
            ]
        })
    });
}
function w(e) {
    let { channel: t, guild: l, inPopout: a, width: s } = e;
    i.useEffect(() => {
        x.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity invite',
            n_participants: 1
        });
    }, []);
    let d = (0, u.O)(),
        { analyticsLocations: h } = (0, b.ZP)(g.Z.VC_TILE_ACTIVITY_INVITE),
        f = (0, C.Q3)('SingleUserTile'),
        { enabled: _ } = p.c.useExperiment({ location: 'SingleUserTile' }, { autoTrackExposure: !0 });
    function v() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('7654'), n.e('6680')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        Z(S({}, n), {
                            guild: l,
                            channel: t,
                            source: O.t4x.ACTIVITY_ENTRY_POINT_TILE
                        })
                    );
            },
            { contextKey: a ? c.u1M : c.z1l }
        );
    }
    function y() {
        (0, m.Z)({
            channel: t,
            guildId: t.guild_id,
            locationObject: d.location,
            openInPopout: a,
            analyticsLocations: h,
            opensAppLauncherModal: !0
        });
    }
    let T = _ ? c.iWm : c.nG3;
    return (0, r.jsx)(b.Gt, {
        value: h,
        children: (0, r.jsx)(c.f6W, {
            disableAdaptiveTheme: !0,
            theme: O.BRd.MIDNIGHT,
            children: (e) =>
                (0, r.jsxs)(j.Z, {
                    className: o()(N.root, N.singleUserRoot, e),
                    children: [
                        s > 400 && !f
                            ? (0, r.jsx)('img', {
                                  src: P,
                                  className: N.art,
                                  alt: E.NW.string(E.t['3Y9xdH'])
                              })
                            : (0, r.jsx)('img', {
                                  src: I,
                                  className: N.art,
                                  alt: ''
                              }),
                        f
                            ? null
                            : (0, r.jsx)(c.Text, {
                                  className: N.heading,
                                  variant: 'text-md/semibold',
                                  color: 'always-white',
                                  children: E.NW.string(E.t['6pKGKS'])
                              }),
                        (0, r.jsxs)('div', {
                            className: N.buttonContainer,
                            children: [
                                (0, r.jsxs)(c.zxk, {
                                    size: c.zxk.Sizes.LARGE,
                                    color: c.zxk.Colors.PRIMARY,
                                    className: o()({ [N.button]: !f }),
                                    innerClassName: N.buttonContents,
                                    onClick: v,
                                    children: [
                                        (0, r.jsx)(c.iFz, {
                                            size: 'xs',
                                            color: 'currentColor'
                                        }),
                                        E.NW.string(E.t['6Qgren'])
                                    ]
                                }),
                                (0, r.jsxs)(c.zxk, {
                                    size: c.zxk.Sizes.LARGE,
                                    color: c.zxk.Colors.PRIMARY,
                                    className: o()({ [N.button]: !f }),
                                    innerClassName: N.buttonContents,
                                    onClick: y,
                                    children: [
                                        (0, r.jsx)(T, {
                                            size: 'xs',
                                            color: 'currentColor'
                                        }),
                                        E.NW.string(E.t.qnFavb)
                                    ]
                                })
                            ]
                        })
                    ]
                })
        })
    });
}
function R(e) {
    let { channel: t, guild: n, handleClose: l, width: s, userParticipantCount: u } = e,
        p = (0, C.Q3)('MultiUserTile');
    (0, d.ZP)(() => {
        x.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity suggestion',
            n_participants: u
        });
    });
    let m = (0, h.Z)({
            guildId: n.id,
            context: {
                channel: t,
                type: 'channel'
            }
        }).slice(0, 3),
        { analyticsLocations: I } = (0, b.ZP)(g.Z.VC_TILE_ACTIVITY_SUGGESTION),
        S = i.useMemo(
            () => ({
                channel: t,
                type: 'channel'
            }),
            [t]
        );
    return (0, r.jsx)(b.Gt, {
        value: I,
        children: (0, r.jsxs)(j.Z, {
            className: N.root,
            children: [
                s > 480 && !p
                    ? (0, r.jsx)('img', {
                          className: N.art,
                          src: P,
                          alt: E.NW.string(E.t['3Y9xdH'])
                      })
                    : null,
                s > 300
                    ? (0, r.jsx)(c.Text, {
                          className: N.heading,
                          variant: s > 550 ? 'text-md/semibold' : 'text-sm/semibold',
                          children: E.NW.string(E.t['7BKMcH'])
                      })
                    : null,
                (0, r.jsx)('div', {
                    className: o()(N.activitiesContainer, { [N.activitiesContainerSmol]: s <= 300 }),
                    children: m.map((e) =>
                        (0, r.jsx)(
                            f.Y,
                            {
                                context: S,
                                activityItem: e,
                                aspectRatio: f.Y.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: N.activitySuggestion,
                                commandOrigin: _.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS
                            },
                            e.application.id
                        )
                    )
                }),
                (0, r.jsxs)(c.P3F, {
                    className: N.checkboxContainer,
                    onClick: function () {
                        x.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: 'activity suggestion',
                            close_type: 'permanent',
                            n_participants: u
                        }),
                            (0, v.EW)(a.z.VC_TILE_ACTIVITIES_ENTRY_POINT);
                    },
                    children: [
                        (0, r.jsx)(y.Z, {}),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            children: E.NW.string(E.t['5E9SBw'])
                        })
                    ]
                }),
                (0, r.jsx)(c.P3F, {
                    className: N.closeButtonContainer,
                    onClick: function () {
                        x.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: 'activity suggestion',
                            close_type: 'temporary',
                            n_participants: u
                        }),
                            l();
                    },
                    children: (0, r.jsx)(c.Dio, {
                        size: 'md',
                        color: 'currentColor',
                        className: N.closeButton
                    })
                })
            ]
        })
    });
}
