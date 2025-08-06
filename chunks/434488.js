n.d(t, { h: () => M });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(704215),
    l = n(692547),
    c = n(755721),
    u = n(481060),
    d = n(493773),
    f = n(456100),
    _ = n(127255),
    p = n(5200),
    h = n(100527),
    m = n(906732),
    g = n(397698),
    E = n(895924),
    b = n(266454),
    y = n(340541),
    O = n(448239),
    v = n(626135),
    I = n(607187),
    T = n(981631),
    S = n(388032),
    A = n(413384),
    N = n(359165);
function C(e, t, n) {
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
function R(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = L(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let x = 250;
function M(e) {
    let { channel: t, guild: n, width: i, inPopout: o, handleClose: a, userParticipantCount: s } = e;
    return i < x
        ? (0, r.jsx)(k, {
              channel: t,
              guild: n,
              width: i,
              inPopout: o,
              handleClose: a,
              userParticipantCount: s,
          })
        : s > 1
          ? (0, r.jsx)(U, {
                channel: t,
                guild: n,
                width: i,
                inPopout: o,
                handleClose: a,
                userParticipantCount: s,
            })
          : (0, r.jsx)(j, {
                channel: t,
                guild: n,
                width: i,
                inPopout: o,
            });
}
function k(e) {
    let { channel: t, inPopout: n, handleClose: i } = e,
        { analyticsLocations: o, newestAnalyticsLocation: s } = (0, m.ZP)(h.Z.VC_TILE_ACTIVITY_SHELF_BUTTON),
        { enabled: c } = f.c.useExperiment({ location: "ActivityShelfButtonTile" }, { autoTrackExposure: !0 }),
        d = c ? u.iWm : u.gQj,
        _ = () => {
            (0, g.Z)({
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
    return (0, r.jsx)(m.Gt, {
        value: o,
        children: (0, r.jsxs)(I.Z, {
            className: A.root,
            children: [
                (0, r.jsx)(u.ua7, {
                    text: S.intl.string(S.t.qJvTKS),
                    children: (e) => {
                        var { onClick: t } = e,
                            n = D(e, ["onClick"]);
                        return (0, r.jsx)(
                            u.P3F,
                            w(R({}, n), {
                                className: A.clickableTile,
                                onClick: () => {
                                    null == t || t(), _();
                                },
                                children: (0, r.jsx)("div", {
                                    className: A.iconContainer,
                                    children: (0, r.jsx)(d, {
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
                (0, r.jsx)(u.f6W, {
                    theme: T.BRd.DARK,
                    children: (e) =>
                        (0, r.jsx)(u.P3F, {
                            onClick: i,
                            className: a()(e, A.shelfButtonCloseButton),
                            children: (0, r.jsx)(u.k$p, {
                                size: "md",
                                color: "currentColor",
                                className: A.closeButtonIcon,
                                secondaryColor: l.Z.colors.INTERACTIVE_NORMAL.css,
                            }),
                        }),
                }),
            ],
        }),
    });
}
function j(e) {
    let { channel: t, guild: o, inPopout: s } = e;
    i.useEffect(() => {
        v.default.track(T.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity invite",
            n_participants: 1,
        });
    }, []);
    let { analyticsLocations: l, newestAnalyticsLocation: d } = (0, m.ZP)(h.Z.VC_TILE_ACTIVITY_INVITE),
        { entrypoints: _ } = (0, y._k)({ location: "single_user_tile" }),
        { enabled: p } = f.c.useExperiment({ location: "SingleUserTile" }, { autoTrackExposure: !0 });
    function E() {
        (0, u.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("7654"), n.e("49049"), n.e("29328")]).then(
                    n.bind(n, 560114),
                );
                return (n) =>
                    (0, r.jsx)(
                        e,
                        w(R({}, n), {
                            guild: o,
                            channel: t,
                            source: T.t4x.ACTIVITY_ENTRY_POINT_TILE,
                        }),
                    );
            },
            { contextKey: s ? u.u1M : u.z1l },
        );
    }
    function b() {
        (0, g.Z)({
            context:
                null != t
                    ? {
                          type: "channel",
                          channel: t,
                      }
                    : { type: "contextless" },
            openInPopout: s,
            analyticsLocation: d,
        });
    }
    let O = p ? u.iWm : u.nG3,
        C = _ ? u.oLu : u.iFz;
    return (0, r.jsx)(m.Gt, {
        value: l,
        children: (0, r.jsx)(u.f6W, {
            disableAdaptiveTheme: !0,
            theme: T.BRd.MIDNIGHT,
            children: (e) =>
                (0, r.jsxs)(I.Z, {
                    className: a()(A.root, A.singleUserRoot, e),
                    children: [
                        (0, r.jsx)("img", {
                            src: N,
                            className: A.art,
                            alt: "",
                        }),
                        (0, r.jsxs)("div", {
                            className: A.buttonContainer,
                            children: [
                                (0, r.jsxs)(c.zx, {
                                    size: c.zx.Sizes.LARGE,
                                    color: c.zx.Colors.PRIMARY,
                                    innerClassName: A.buttonContents,
                                    onClick: E,
                                    children: [
                                        (0, r.jsx)(C, {
                                            size: "xs",
                                            color: "currentColor",
                                        }),
                                        _ ? S.intl.string(S.t["EE+P0N"]) : S.intl.string(S.t["6Qgren"]),
                                    ],
                                }),
                                (0, r.jsxs)(c.zx, {
                                    size: c.zx.Sizes.LARGE,
                                    color: c.zx.Colors.PRIMARY,
                                    innerClassName: A.buttonContents,
                                    onClick: b,
                                    children: [
                                        (0, r.jsx)(O, {
                                            size: "xs",
                                            color: "currentColor",
                                        }),
                                        S.intl.string(S.t.qnFavb),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
        }),
    });
}
function U(e) {
    let { channel: t, guild: n, handleClose: o, width: l, userParticipantCount: c } = e;
    (0, d.ZP)(() => {
        v.default.track(T.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity suggestion",
            n_participants: c,
        });
    });
    let f = (0, _.Z)({ guildId: n.id }).slice(0, 3);
    function g() {
        v.default.track(T.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "permanent",
            n_participants: c,
        }),
            (0, b.Q3)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT);
    }
    function y() {
        v.default.track(T.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "temporary",
            n_participants: c,
        }),
            o();
    }
    let { analyticsLocations: N } = (0, m.ZP)(h.Z.VC_TILE_ACTIVITY_SUGGESTION),
        C = i.useMemo(
            () => ({
                channel: t,
                type: "channel",
            }),
            [t],
        );
    return (0, r.jsx)(m.Gt, {
        value: N,
        children: (0, r.jsxs)(I.Z, {
            className: A.root,
            children: [
                l > 300
                    ? (0, r.jsx)(u.Text, {
                          className: A.heading,
                          variant: l > 550 ? "text-md/semibold" : "text-sm/semibold",
                          children: S.intl.string(S.t["7BKMcH"]),
                      })
                    : null,
                (0, r.jsx)("div", {
                    className: a()(A.activitiesContainer, { [A.activitiesContainerSmol]: l <= 300 }),
                    children: f.map((e) =>
                        (0, r.jsx)(
                            p.Y,
                            {
                                context: C,
                                activityItem: e,
                                aspectRatio: p.Y.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: A.activitySuggestion,
                                commandOrigin: E.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS,
                            },
                            e.application.id,
                        ),
                    ),
                }),
                (0, r.jsxs)(u.P3F, {
                    className: A.checkboxContainer,
                    onClick: g,
                    children: [
                        (0, r.jsx)(O.Z, {}),
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            children: S.intl.string(S.t["5E9SBw"]),
                        }),
                    ],
                }),
                (0, r.jsx)(u.P3F, {
                    className: A.closeButtonContainer,
                    onClick: y,
                    children: (0, r.jsx)(u.Dio, {
                        size: "md",
                        color: "currentColor",
                        className: A.closeButton,
                    }),
                }),
            ],
        }),
    });
}
