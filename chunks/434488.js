n.d(t, { h: () => T });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(704215),
    s = n(692547),
    c = n(755721),
    u = n(481060),
    d = n(493773),
    p = n(456100),
    h = n(127255),
    f = n(5200),
    m = n(403404),
    g = n(100527),
    b = n(906732),
    _ = n(895924),
    y = n(266454),
    C = n(340541),
    x = n(448239),
    v = n(626135),
    O = n(607187),
    j = n(981631),
    E = n(388032),
    S = n(413384),
    I = n(359165);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
    let { channel: t, guild: n, width: i, inPopout: l, handleClose: a, userParticipantCount: o } = e;
    return i < 250
        ? (0, r.jsx)(N, {
              channel: t,
              guild: n,
              width: i,
              inPopout: l,
              handleClose: a,
              userParticipantCount: o
          })
        : o > 1
          ? (0, r.jsx)(w, {
                channel: t,
                guild: n,
                width: i,
                inPopout: l,
                handleClose: a,
                userParticipantCount: o
            })
          : (0, r.jsx)(A, {
                channel: t,
                guild: n,
                width: i,
                inPopout: l
            });
}
function N(e) {
    let { channel: t, inPopout: n, handleClose: i } = e,
        { analyticsLocations: l } = (0, b.ZP)(g.Z.VC_TILE_ACTIVITY_SHELF_BUTTON),
        { enabled: o } = p.c.useExperiment({ location: 'ActivityShelfButtonTile' }, { autoTrackExposure: !0 }),
        c = o ? u.iWm : u.gQj,
        d = () => {
            (0, m.Z)({
                channel: t,
                openInPopout: n,
                analyticsLocations: l
            });
        };
    return (0, r.jsx)(b.Gt, {
        value: l,
        children: (0, r.jsxs)(O.Z, {
            className: S.root,
            children: [
                (0, r.jsx)(u.ua7, {
                    text: E.intl.string(E.t.qJvTKS),
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
                                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                        return i;
                                    })(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var l = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                                }
                                return i;
                            })(e, ['onClick']);
                        return (0, r.jsx)(
                            u.P3F,
                            Z(P({}, n), {
                                className: S.clickableTile,
                                onClick: () => {
                                    (null == t || t(), d());
                                },
                                children: (0, r.jsx)('div', {
                                    className: S.iconContainer,
                                    children: (0, r.jsx)(c, {
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
                (0, r.jsx)(u.f6W, {
                    theme: j.BRd.DARK,
                    children: (e) =>
                        (0, r.jsx)(u.P3F, {
                            onClick: i,
                            className: a()(e, S.shelfButtonCloseButton),
                            children: (0, r.jsx)(u.k$p, {
                                size: 'md',
                                color: 'currentColor',
                                className: S.closeButtonIcon,
                                secondaryColor: s.Z.colors.INTERACTIVE_NORMAL.css
                            })
                        })
                })
            ]
        })
    });
}
function A(e) {
    let { channel: t, guild: l, inPopout: o } = e;
    i.useEffect(() => {
        v.default.track(j.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity invite',
            n_participants: 1
        });
    }, []);
    let { analyticsLocations: s } = (0, b.ZP)(g.Z.VC_TILE_ACTIVITY_INVITE),
        { entrypoints: d } = (0, C._k)({ location: 'single_user_tile' }),
        { enabled: h } = p.c.useExperiment({ location: 'SingleUserTile' }, { autoTrackExposure: !0 });
    function f() {
        (0, u.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('7654'), n.e('34946')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        Z(P({}, n), {
                            guild: l,
                            channel: t,
                            source: j.t4x.ACTIVITY_ENTRY_POINT_TILE
                        })
                    );
            },
            { contextKey: o ? u.u1M : u.z1l }
        );
    }
    function _() {
        (0, m.Z)({
            channel: t,
            openInPopout: o,
            analyticsLocations: s
        });
    }
    let y = h ? u.iWm : u.nG3,
        x = d ? u.oLu : u.iFz;
    return (0, r.jsx)(b.Gt, {
        value: s,
        children: (0, r.jsx)(u.f6W, {
            disableAdaptiveTheme: !0,
            theme: j.BRd.MIDNIGHT,
            children: (e) =>
                (0, r.jsxs)(O.Z, {
                    className: a()(S.root, S.singleUserRoot, e),
                    children: [
                        (0, r.jsx)('img', {
                            src: I,
                            className: S.art,
                            alt: ''
                        }),
                        (0, r.jsxs)('div', {
                            className: S.buttonContainer,
                            children: [
                                (0, r.jsxs)(c.zx, {
                                    size: c.zx.Sizes.LARGE,
                                    color: c.zx.Colors.PRIMARY,
                                    innerClassName: S.buttonContents,
                                    onClick: f,
                                    children: [
                                        (0, r.jsx)(x, {
                                            size: 'xs',
                                            color: 'currentColor'
                                        }),
                                        d ? E.intl.string(E.t['EE+P0N']) : E.intl.string(E.t['6Qgren'])
                                    ]
                                }),
                                (0, r.jsxs)(c.zx, {
                                    size: c.zx.Sizes.LARGE,
                                    color: c.zx.Colors.PRIMARY,
                                    innerClassName: S.buttonContents,
                                    onClick: _,
                                    children: [
                                        (0, r.jsx)(y, {
                                            size: 'xs',
                                            color: 'currentColor'
                                        }),
                                        E.intl.string(E.t.qnFavb)
                                    ]
                                })
                            ]
                        })
                    ]
                })
        })
    });
}
function w(e) {
    let { channel: t, guild: n, handleClose: l, width: s, userParticipantCount: c } = e;
    (0, d.ZP)(() => {
        v.default.track(j.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity suggestion',
            n_participants: c
        });
    });
    let p = (0, h.Z)({ guildId: n.id }).slice(0, 3),
        { analyticsLocations: m } = (0, b.ZP)(g.Z.VC_TILE_ACTIVITY_SUGGESTION),
        C = i.useMemo(
            () => ({
                channel: t,
                type: 'channel'
            }),
            [t]
        );
    return (0, r.jsx)(b.Gt, {
        value: m,
        children: (0, r.jsxs)(O.Z, {
            className: S.root,
            children: [
                s > 300
                    ? (0, r.jsx)(u.Text, {
                          className: S.heading,
                          variant: s > 550 ? 'text-md/semibold' : 'text-sm/semibold',
                          children: E.intl.string(E.t['7BKMcH'])
                      })
                    : null,
                (0, r.jsx)('div', {
                    className: a()(S.activitiesContainer, { [S.activitiesContainerSmol]: s <= 300 }),
                    children: p.map((e) =>
                        (0, r.jsx)(
                            f.Y,
                            {
                                context: C,
                                activityItem: e,
                                aspectRatio: f.Y.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: S.activitySuggestion,
                                commandOrigin: _.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS
                            },
                            e.application.id
                        )
                    )
                }),
                (0, r.jsxs)(u.P3F, {
                    className: S.checkboxContainer,
                    onClick: function () {
                        (v.default.track(j.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: 'activity suggestion',
                            close_type: 'permanent',
                            n_participants: c
                        }),
                            (0, y.Q3)(o.z.VC_TILE_ACTIVITIES_ENTRY_POINT));
                    },
                    children: [
                        (0, r.jsx)(x.Z, {}),
                        (0, r.jsx)(u.Text, {
                            variant: 'text-sm/medium',
                            children: E.intl.string(E.t['5E9SBw'])
                        })
                    ]
                }),
                (0, r.jsx)(u.P3F, {
                    className: S.closeButtonContainer,
                    onClick: function () {
                        (v.default.track(j.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: 'activity suggestion',
                            close_type: 'temporary',
                            n_participants: c
                        }),
                            l());
                    },
                    children: (0, r.jsx)(u.Dio, {
                        size: 'md',
                        color: 'currentColor',
                        className: S.closeButton
                    })
                })
            ]
        })
    });
}
