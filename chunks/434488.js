n.d(t, { h: () => Z });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(704215),
    s = n(692547),
    c = n(481060),
    u = n(493773),
    d = n(456100),
    p = n(127255),
    h = n(5200),
    f = n(403404),
    m = n(100527),
    g = n(906732),
    b = n(895924),
    _ = n(605236),
    y = n(340541),
    x = n(448239),
    C = n(626135),
    v = n(607187),
    j = n(981631),
    O = n(388032),
    E = n(413384),
    I = n(359165);
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
function P(e, t) {
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
function Z(e) {
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
          ? (0, r.jsx)(A, {
                channel: t,
                guild: n,
                width: i,
                inPopout: l,
                handleClose: a,
                userParticipantCount: o
            })
          : (0, r.jsx)(T, {
                channel: t,
                guild: n,
                width: i,
                inPopout: l
            });
}
function N(e) {
    let { channel: t, inPopout: n, handleClose: i } = e,
        { analyticsLocations: l } = (0, g.ZP)(m.Z.VC_TILE_ACTIVITY_SHELF_BUTTON),
        { enabled: o } = d.c.useExperiment({ location: 'ActivityShelfButtonTile' }, { autoTrackExposure: !0 }),
        u = o ? c.iWm : c.gQj,
        p = () => {
            (0, f.Z)({
                channel: t,
                openInPopout: n,
                analyticsLocations: l
            });
        };
    return (0, r.jsx)(g.Gt, {
        value: l,
        children: (0, r.jsxs)(v.Z, {
            className: E.root,
            children: [
                (0, r.jsx)(c.ua7, {
                    text: O.intl.string(O.t.qJvTKS),
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
                            P(S({}, n), {
                                className: E.clickableTile,
                                onClick: () => {
                                    null == t || t(), p();
                                },
                                children: (0, r.jsx)('div', {
                                    className: E.iconContainer,
                                    children: (0, r.jsx)(u, {
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
                    theme: j.BRd.DARK,
                    children: (e) =>
                        (0, r.jsx)(c.P3F, {
                            onClick: i,
                            className: a()(e, E.shelfButtonCloseButton),
                            children: (0, r.jsx)(c.k$p, {
                                size: 'md',
                                color: 'currentColor',
                                className: E.closeButtonIcon,
                                secondaryColor: s.Z.colors.INTERACTIVE_NORMAL.css
                            })
                        })
                })
            ]
        })
    });
}
function T(e) {
    let { channel: t, guild: l, inPopout: o } = e;
    i.useEffect(() => {
        C.default.track(j.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity invite',
            n_participants: 1
        });
    }, []);
    let { analyticsLocations: s } = (0, g.ZP)(m.Z.VC_TILE_ACTIVITY_INVITE),
        { entrypoints: u } = (0, y._k)({ location: 'single_user_tile' }),
        { enabled: p } = d.c.useExperiment({ location: 'SingleUserTile' }, { autoTrackExposure: !0 });
    function h() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('7654'), n.e('17439')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        P(S({}, n), {
                            guild: l,
                            channel: t,
                            source: j.t4x.ACTIVITY_ENTRY_POINT_TILE
                        })
                    );
            },
            { contextKey: o ? c.u1M : c.z1l }
        );
    }
    function b() {
        (0, f.Z)({
            channel: t,
            openInPopout: o,
            analyticsLocations: s
        });
    }
    let _ = p ? c.iWm : c.nG3,
        x = u ? c.oLu : c.iFz;
    return (0, r.jsx)(g.Gt, {
        value: s,
        children: (0, r.jsx)(c.f6W, {
            disableAdaptiveTheme: !0,
            theme: j.BRd.MIDNIGHT,
            children: (e) =>
                (0, r.jsxs)(v.Z, {
                    className: a()(E.root, E.singleUserRoot, e),
                    children: [
                        (0, r.jsx)('img', {
                            src: I,
                            className: E.art,
                            alt: ''
                        }),
                        (0, r.jsxs)('div', {
                            className: E.buttonContainer,
                            children: [
                                (0, r.jsxs)(c.zxk, {
                                    size: c.zxk.Sizes.LARGE,
                                    color: c.zxk.Colors.PRIMARY,
                                    innerClassName: E.buttonContents,
                                    onClick: h,
                                    children: [
                                        (0, r.jsx)(x, {
                                            size: 'xs',
                                            color: 'currentColor'
                                        }),
                                        u ? O.intl.string(O.t['EE+P0N']) : O.intl.string(O.t['6Qgren'])
                                    ]
                                }),
                                (0, r.jsxs)(c.zxk, {
                                    size: c.zxk.Sizes.LARGE,
                                    color: c.zxk.Colors.PRIMARY,
                                    innerClassName: E.buttonContents,
                                    onClick: b,
                                    children: [
                                        (0, r.jsx)(_, {
                                            size: 'xs',
                                            color: 'currentColor'
                                        }),
                                        O.intl.string(O.t.qnFavb)
                                    ]
                                })
                            ]
                        })
                    ]
                })
        })
    });
}
function A(e) {
    let { channel: t, guild: n, handleClose: l, width: s, userParticipantCount: d } = e;
    (0, u.ZP)(() => {
        C.default.track(j.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity suggestion',
            n_participants: d
        });
    });
    let f = (0, p.Z)({ guildId: n.id }).slice(0, 3),
        { analyticsLocations: y } = (0, g.ZP)(m.Z.VC_TILE_ACTIVITY_SUGGESTION),
        I = i.useMemo(
            () => ({
                channel: t,
                type: 'channel'
            }),
            [t]
        );
    return (0, r.jsx)(g.Gt, {
        value: y,
        children: (0, r.jsxs)(v.Z, {
            className: E.root,
            children: [
                s > 300
                    ? (0, r.jsx)(c.Text, {
                          className: E.heading,
                          variant: s > 550 ? 'text-md/semibold' : 'text-sm/semibold',
                          children: O.intl.string(O.t['7BKMcH'])
                      })
                    : null,
                (0, r.jsx)('div', {
                    className: a()(E.activitiesContainer, { [E.activitiesContainerSmol]: s <= 300 }),
                    children: f.map((e) =>
                        (0, r.jsx)(
                            h.Y,
                            {
                                context: I,
                                activityItem: e,
                                aspectRatio: h.Y.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: E.activitySuggestion,
                                commandOrigin: b.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS
                            },
                            e.application.id
                        )
                    )
                }),
                (0, r.jsxs)(c.P3F, {
                    className: E.checkboxContainer,
                    onClick: function () {
                        C.default.track(j.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: 'activity suggestion',
                            close_type: 'permanent',
                            n_participants: d
                        }),
                            (0, _.EW)(o.z.VC_TILE_ACTIVITIES_ENTRY_POINT);
                    },
                    children: [
                        (0, r.jsx)(x.Z, {}),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            children: O.intl.string(O.t['5E9SBw'])
                        })
                    ]
                }),
                (0, r.jsx)(c.P3F, {
                    className: E.closeButtonContainer,
                    onClick: function () {
                        C.default.track(j.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: 'activity suggestion',
                            close_type: 'temporary',
                            n_participants: d
                        }),
                            l();
                    },
                    children: (0, r.jsx)(c.Dio, {
                        size: 'md',
                        color: 'currentColor',
                        className: E.closeButton
                    })
                })
            ]
        })
    });
}
