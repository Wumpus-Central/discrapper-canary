n.d(t, { h: () => Z });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(704215),
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
    _ = n(540059),
    C = n(605236),
    y = n(448239),
    x = n(626135),
    v = n(607187),
    j = n(981631),
    O = n(388032),
    E = n(413384),
    N = n(359165),
    I = n(334732);
function P(e) {
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
function S(e, t) {
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
    let { channel: t, guild: n, width: i, inPopout: l, handleClose: o, userParticipantCount: a } = e;
    return i < 250
        ? (0, r.jsx)(T, {
              channel: t,
              guild: n,
              width: i,
              inPopout: l,
              handleClose: o,
              userParticipantCount: a
          })
        : a > 1
          ? (0, r.jsx)(w, {
                channel: t,
                guild: n,
                width: i,
                inPopout: l,
                handleClose: o,
                userParticipantCount: a
            })
          : (0, r.jsx)(A, {
                channel: t,
                guild: n,
                width: i,
                inPopout: l
            });
}
function T(e) {
    let { channel: t, inPopout: n, handleClose: i } = e,
        { analyticsLocations: l } = (0, g.ZP)(m.Z.VC_TILE_ACTIVITY_SHELF_BUTTON),
        { enabled: a } = d.c.useExperiment({ location: 'ActivityShelfButtonTile' }, { autoTrackExposure: !0 }),
        u = a ? c.iWm : c.gQj,
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
                    text: O.NW.string(O.t.qJvTKS),
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
                            S(P({}, n), {
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
                            className: o()(e, E.shelfButtonCloseButton),
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
function A(e) {
    let { channel: t, guild: l, inPopout: a, width: s } = e;
    i.useEffect(() => {
        x.default.track(j.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity invite',
            n_participants: 1
        });
    }, []);
    let { analyticsLocations: u } = (0, g.ZP)(m.Z.VC_TILE_ACTIVITY_INVITE),
        p = (0, _.Q3)('SingleUserTile'),
        { enabled: h } = d.c.useExperiment({ location: 'SingleUserTile' }, { autoTrackExposure: !0 });
    function b() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('7654'), n.e('96814')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        S(P({}, n), {
                            guild: l,
                            channel: t,
                            source: j.t4x.ACTIVITY_ENTRY_POINT_TILE
                        })
                    );
            },
            { contextKey: a ? c.u1M : c.z1l }
        );
    }
    function C() {
        (0, f.Z)({
            channel: t,
            openInPopout: a,
            analyticsLocations: u
        });
    }
    let y = h ? c.iWm : c.nG3;
    return (0, r.jsx)(g.Gt, {
        value: u,
        children: (0, r.jsx)(c.f6W, {
            disableAdaptiveTheme: !0,
            theme: j.BRd.MIDNIGHT,
            children: (e) =>
                (0, r.jsxs)(v.Z, {
                    className: o()(E.root, E.singleUserRoot, e),
                    children: [
                        s > 400 && !p
                            ? (0, r.jsx)('img', {
                                  src: I,
                                  className: E.art,
                                  alt: O.NW.string(O.t['3Y9xdH'])
                              })
                            : (0, r.jsx)('img', {
                                  src: N,
                                  className: E.art,
                                  alt: ''
                              }),
                        p
                            ? null
                            : (0, r.jsx)(c.Text, {
                                  className: E.heading,
                                  variant: 'text-md/semibold',
                                  color: 'always-white',
                                  children: O.NW.string(O.t['6pKGKS'])
                              }),
                        (0, r.jsxs)('div', {
                            className: E.buttonContainer,
                            children: [
                                (0, r.jsxs)(c.zxk, {
                                    size: c.zxk.Sizes.LARGE,
                                    color: c.zxk.Colors.PRIMARY,
                                    className: o()({ [E.button]: !p }),
                                    innerClassName: E.buttonContents,
                                    onClick: b,
                                    children: [
                                        (0, r.jsx)(c.iFz, {
                                            size: 'xs',
                                            color: 'currentColor'
                                        }),
                                        O.NW.string(O.t['6Qgren'])
                                    ]
                                }),
                                (0, r.jsxs)(c.zxk, {
                                    size: c.zxk.Sizes.LARGE,
                                    color: c.zxk.Colors.PRIMARY,
                                    className: o()({ [E.button]: !p }),
                                    innerClassName: E.buttonContents,
                                    onClick: C,
                                    children: [
                                        (0, r.jsx)(y, {
                                            size: 'xs',
                                            color: 'currentColor'
                                        }),
                                        O.NW.string(O.t.qnFavb)
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
    let { channel: t, guild: n, handleClose: l, width: s, userParticipantCount: d } = e,
        f = (0, _.Q3)('MultiUserTile');
    (0, u.ZP)(() => {
        x.default.track(j.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity suggestion',
            n_participants: d
        });
    });
    let N = (0, p.Z)({
            guildId: n.id,
            context: {
                channel: t,
                type: 'channel'
            }
        }).slice(0, 3),
        { analyticsLocations: P } = (0, g.ZP)(m.Z.VC_TILE_ACTIVITY_SUGGESTION),
        S = i.useMemo(
            () => ({
                channel: t,
                type: 'channel'
            }),
            [t]
        );
    return (0, r.jsx)(g.Gt, {
        value: P,
        children: (0, r.jsxs)(v.Z, {
            className: E.root,
            children: [
                s > 480 && !f
                    ? (0, r.jsx)('img', {
                          className: E.art,
                          src: I,
                          alt: O.NW.string(O.t['3Y9xdH'])
                      })
                    : null,
                s > 300
                    ? (0, r.jsx)(c.Text, {
                          className: E.heading,
                          variant: s > 550 ? 'text-md/semibold' : 'text-sm/semibold',
                          children: O.NW.string(O.t['7BKMcH'])
                      })
                    : null,
                (0, r.jsx)('div', {
                    className: o()(E.activitiesContainer, { [E.activitiesContainerSmol]: s <= 300 }),
                    children: N.map((e) =>
                        (0, r.jsx)(
                            h.Y,
                            {
                                context: S,
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
                        x.default.track(j.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: 'activity suggestion',
                            close_type: 'permanent',
                            n_participants: d
                        }),
                            (0, C.EW)(a.z.VC_TILE_ACTIVITIES_ENTRY_POINT);
                    },
                    children: [
                        (0, r.jsx)(y.Z, {}),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            children: O.NW.string(O.t['5E9SBw'])
                        })
                    ]
                }),
                (0, r.jsx)(c.P3F, {
                    className: E.closeButtonContainer,
                    onClick: function () {
                        x.default.track(j.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
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
