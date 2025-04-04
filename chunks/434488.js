n.d(t, { h: () => T });
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
    y = n(340541),
    x = n(448239),
    v = n(626135),
    j = n(607187),
    O = n(981631),
    E = n(388032),
    N = n(413384),
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
                                    null == t || t(), p();
                                },
                                children: (0, r.jsx)('div', {
                                    className: N.iconContainer,
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
        v.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity invite',
            n_participants: 1
        });
    }, []);
    let { analyticsLocations: u } = (0, g.ZP)(m.Z.VC_TILE_ACTIVITY_INVITE),
        p = (0, _.Q3)('SingleUserTile'),
        { enabled: h } = (0, y._k)({ location: 'single_user_tile' }),
        { enabled: b } = d.c.useExperiment({ location: 'SingleUserTile' }, { autoTrackExposure: !0 });
    function C() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('7654'), n.e('96814')]).then(n.bind(n, 560114));
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
    function x() {
        (0, f.Z)({
            channel: t,
            openInPopout: a,
            analyticsLocations: u
        });
    }
    let T = b ? c.iWm : c.nG3,
        A = h ? c.oLu : c.iFz;
    return (0, r.jsx)(g.Gt, {
        value: u,
        children: (0, r.jsx)(c.f6W, {
            disableAdaptiveTheme: !0,
            theme: O.BRd.MIDNIGHT,
            children: (e) =>
                (0, r.jsxs)(j.Z, {
                    className: o()(N.root, N.singleUserRoot, e),
                    children: [
                        s > 400 && !p
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
                        p
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
                                    className: o()({ [N.button]: !p }),
                                    innerClassName: N.buttonContents,
                                    onClick: C,
                                    children: [
                                        (0, r.jsx)(A, {
                                            size: 'xs',
                                            color: 'currentColor'
                                        }),
                                        h ? E.NW.string(E.t['EE+P0N']) : E.NW.string(E.t['6Qgren'])
                                    ]
                                }),
                                (0, r.jsxs)(c.zxk, {
                                    size: c.zxk.Sizes.LARGE,
                                    color: c.zxk.Colors.PRIMARY,
                                    className: o()({ [N.button]: !p }),
                                    innerClassName: N.buttonContents,
                                    onClick: x,
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
    let { channel: t, guild: n, handleClose: l, width: s, userParticipantCount: d } = e,
        f = (0, _.Q3)('MultiUserTile');
    (0, u.ZP)(() => {
        v.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity suggestion',
            n_participants: d
        });
    });
    let y = (0, p.Z)({
            guildId: n.id,
            context: {
                channel: t,
                type: 'channel'
            }
        }).slice(0, 3),
        { analyticsLocations: I } = (0, g.ZP)(m.Z.VC_TILE_ACTIVITY_SUGGESTION),
        S = i.useMemo(
            () => ({
                channel: t,
                type: 'channel'
            }),
            [t]
        );
    return (0, r.jsx)(g.Gt, {
        value: I,
        children: (0, r.jsxs)(j.Z, {
            className: N.root,
            children: [
                s > 480 && !f
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
                    children: y.map((e) =>
                        (0, r.jsx)(
                            h.Y,
                            {
                                context: S,
                                activityItem: e,
                                aspectRatio: h.Y.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: N.activitySuggestion,
                                commandOrigin: b.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS
                            },
                            e.application.id
                        )
                    )
                }),
                (0, r.jsxs)(c.P3F, {
                    className: N.checkboxContainer,
                    onClick: function () {
                        v.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: 'activity suggestion',
                            close_type: 'permanent',
                            n_participants: d
                        }),
                            (0, C.EW)(a.z.VC_TILE_ACTIVITIES_ENTRY_POINT);
                    },
                    children: [
                        (0, r.jsx)(x.Z, {}),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            children: E.NW.string(E.t['5E9SBw'])
                        })
                    ]
                }),
                (0, r.jsx)(c.P3F, {
                    className: N.closeButtonContainer,
                    onClick: function () {
                        v.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: 'activity suggestion',
                            close_type: 'temporary',
                            n_participants: d
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
