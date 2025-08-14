n.d(t, { h: () => x });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(704215),
    l = n(692547),
    c = n(481060),
    u = n(493773),
    d = n(456100),
    f = n(127255),
    _ = n(5200),
    p = n(100527),
    h = n(906732),
    m = n(397698),
    g = n(895924),
    E = n(266454),
    b = n(340541),
    y = n(416345),
    O = n(626135),
    v = n(607187),
    I = n(981631),
    T = n(388032),
    S = n(348130),
    A = n(359165);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = D(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let L = 250;
function x(e) {
    let { channel: t, guild: n, width: i, inPopout: o, handleClose: a, userParticipantCount: s } = e;
    return i < L
        ? (0, r.jsx)(M, {
              channel: t,
              guild: n,
              width: i,
              inPopout: o,
              handleClose: a,
              userParticipantCount: s,
          })
        : s > 1
          ? (0, r.jsx)(j, {
                channel: t,
                guild: n,
                width: i,
                inPopout: o,
                handleClose: a,
                userParticipantCount: s,
            })
          : (0, r.jsx)(k, {
                channel: t,
                guild: n,
                width: i,
                inPopout: o,
            });
}
function M(e) {
    let { channel: t, inPopout: n, handleClose: i } = e,
        { analyticsLocations: o, newestAnalyticsLocation: s } = (0, h.ZP)(p.Z.VC_TILE_ACTIVITY_SHELF_BUTTON),
        { enabled: u } = d.c.useExperiment({ location: "ActivityShelfButtonTile" }, { autoTrackExposure: !0 }),
        f = u ? c.iWm : c.gQj,
        _ = () => {
            (0, m.Z)({
                context:
                    null != t
                        ? {
                              type: "channel",
                              channel: t,
                          }
                        : { type: "contextless" },
                openInPopout: n,
                analyticsLocation: s,
            });
        };
    return (0, r.jsx)(h.Gt, {
        value: o,
        children: (0, r.jsxs)(v.Z, {
            className: S.root,
            children: [
                (0, r.jsx)(c.ua7, {
                    text: T.intl.string(T.t.qJvTKS),
                    children: (e) => {
                        var { onClick: t } = e,
                            n = w(e, ["onClick"]);
                        return (0, r.jsx)(
                            c.P3F,
                            P(C({}, n), {
                                className: S.clickableTile,
                                onClick: () => {
                                    null == t || t(), _();
                                },
                                children: (0, r.jsx)("div", {
                                    className: S.iconContainer,
                                    children: (0, r.jsx)(f, {
                                        size: "custom",
                                        color: "currentColor",
                                        width: 40,
                                        height: 40,
                                    }),
                                }),
                            }),
                        );
                    },
                }),
                (0, r.jsx)(c.f6W, {
                    theme: I.BRd.DARK,
                    children: (e) =>
                        (0, r.jsx)(c.P3F, {
                            onClick: i,
                            className: a()(e, S.shelfButtonCloseButton),
                            children: (0, r.jsx)(c.k$p, {
                                size: "md",
                                color: "currentColor",
                                className: S.closeButtonIcon,
                                secondaryColor: l.Z.colors.INTERACTIVE_NORMAL.css,
                            }),
                        }),
                }),
            ],
        }),
    });
}
function k(e) {
    let { channel: t, guild: o, inPopout: s } = e;
    i.useEffect(() => {
        O.default.track(I.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity invite",
            n_participants: 1,
        });
    }, []);
    let { analyticsLocations: l, newestAnalyticsLocation: u } = (0, h.ZP)(p.Z.VC_TILE_ACTIVITY_INVITE),
        { entrypoints: f } = (0, b._k)({ location: "single_user_tile" }),
        { enabled: _ } = d.c.useExperiment({ location: "SingleUserTile" }, { autoTrackExposure: !0 });
    function g() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("7654"), n.e("49049"), n.e("53020")]).then(
                    n.bind(n, 560114),
                );
                return (n) =>
                    (0, r.jsx)(
                        e,
                        P(C({}, n), {
                            guild: o,
                            channel: t,
                            source: I.t4x.ACTIVITY_ENTRY_POINT_TILE,
                        }),
                    );
            },
            { contextKey: s ? c.u1M : c.z1l },
        );
    }
    function E() {
        (0, m.Z)({
            context:
                null != t
                    ? {
                          type: "channel",
                          channel: t,
                      }
                    : { type: "contextless" },
            openInPopout: s,
            analyticsLocation: u,
        });
    }
    let y = _ ? c.iWm : c.nG3,
        N = f ? c.oLu : c.iFz;
    return (0, r.jsx)(h.Gt, {
        value: l,
        children: (0, r.jsx)(c.f6W, {
            disableAdaptiveTheme: !0,
            theme: I.BRd.MIDNIGHT,
            children: (e) =>
                (0, r.jsxs)(v.Z, {
                    className: a()(S.root, S.singleUserRoot, e),
                    children: [
                        (0, r.jsx)("img", {
                            src: A,
                            className: S.art,
                            alt: "",
                        }),
                        (0, r.jsxs)(c.hE2, {
                            justify: "center",
                            align: "center",
                            children: [
                                (0, r.jsx)(c.zxk, {
                                    variant: "secondary",
                                    icon: N,
                                    text: f ? T.intl.string(T.t["EE+P0N"]) : T.intl.string(T.t["6Qgren"]),
                                    onClick: g,
                                }),
                                (0, r.jsx)(c.zxk, {
                                    variant: "secondary",
                                    icon: y,
                                    text: T.intl.string(T.t.qnFavb),
                                    onClick: E,
                                }),
                            ],
                        }),
                    ],
                }),
        }),
    });
}
function j(e) {
    let { channel: t, guild: n, handleClose: o, width: l, userParticipantCount: d } = e;
    (0, u.ZP)(() => {
        O.default.track(I.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity suggestion",
            n_participants: d,
        });
    });
    let m = (0, f.Z)({ guildId: n.id }).slice(0, 3);
    function b() {
        O.default.track(I.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "permanent",
            n_participants: d,
        }),
            (0, E.Q3)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT);
    }
    function A() {
        O.default.track(I.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "temporary",
            n_participants: d,
        }),
            o();
    }
    let { analyticsLocations: N } = (0, h.ZP)(p.Z.VC_TILE_ACTIVITY_SUGGESTION),
        C = i.useMemo(
            () => ({
                channel: t,
                type: "channel",
            }),
            [t],
        );
    return (0, r.jsx)(h.Gt, {
        value: N,
        children: (0, r.jsxs)(v.Z, {
            className: S.root,
            children: [
                l > 300
                    ? (0, r.jsx)(c.Text, {
                          className: S.heading,
                          variant: l > 550 ? "text-md/semibold" : "text-sm/semibold",
                          children: T.intl.string(T.t["7BKMcH"]),
                      })
                    : null,
                (0, r.jsx)("div", {
                    className: a()(S.activitiesContainer, { [S.activitiesContainerSmol]: l <= 300 }),
                    children: m.map((e) =>
                        (0, r.jsx)(
                            _.Y,
                            {
                                context: C,
                                activityItem: e,
                                aspectRatio: _.Y.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: S.activitySuggestion,
                                commandOrigin: g.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS,
                            },
                            e.application.id,
                        ),
                    ),
                }),
                (0, r.jsxs)(c.P3F, {
                    className: S.checkboxContainer,
                    onClick: b,
                    children: [
                        (0, r.jsx)(y.Z, {}),
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/medium",
                            children: T.intl.string(T.t["5E9SBw"]),
                        }),
                    ],
                }),
                (0, r.jsx)(c.P3F, {
                    className: S.closeButtonContainer,
                    onClick: A,
                    children: (0, r.jsx)(c.Dio, {
                        size: "md",
                        color: "currentColor",
                        className: S.closeButton,
                    }),
                }),
            ],
        }),
    });
}
