n.d(t, { h: () => I });
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(704215),
    s = n(692547),
    c = n(28664),
    u = n(481060),
    d = n(493773),
    p = n(456100),
    h = n(127255),
    f = n(5200),
    m = n(100527),
    g = n(906732),
    b = n(397698),
    y = n(895924),
    C = n(266454),
    v = n(340541),
    _ = n(448239),
    x = n(626135),
    j = n(607187),
    O = n(981631),
    E = n(388032),
    S = n(954289),
    P = n(359165);
function I(e) {
    let { channel: t, guild: n, width: r, inPopout: l, handleClose: a, userParticipantCount: o } = e;
    return r < 250
        ? (0, i.jsx)(Z, {
              channel: t,
              guild: n,
              width: r,
              inPopout: l,
              handleClose: a,
              userParticipantCount: o,
          })
        : o > 1
          ? (0, i.jsx)(N, {
                channel: t,
                guild: n,
                width: r,
                inPopout: l,
                handleClose: a,
                userParticipantCount: o,
            })
          : (0, i.jsx)(T, {
                channel: t,
                guild: n,
                width: r,
                inPopout: l,
            });
}
function Z(e) {
    let { channel: t, inPopout: n, handleClose: r } = e,
        { analyticsLocations: l, newestAnalyticsLocation: o } = (0, g.ZP)(m.Z.VC_TILE_ACTIVITY_SHELF_BUTTON),
        { enabled: d } = p.c.useExperiment({ location: "ActivityShelfButtonTile" }, { autoTrackExposure: !0 }),
        h = d ? u.iWm : u.gQj;
    return (0, i.jsx)(g.Gt, {
        value: l,
        children: (0, i.jsxs)(j.Z, {
            className: S.root,
            children: [
                (0, i.jsx)(c.u, {
                    asContainer: !0,
                    text: E.intl.string(E.t.qJvTKQ),
                    children: (0, i.jsx)(u.P3F, {
                        onClick: () => {
                            (0, b.Z)({
                                context:
                                    null != t
                                        ? {
                                              type: "channel",
                                              channel: t,
                                          }
                                        : { type: "contextless" },
                                openInPopout: n,
                                analyticsLocation: o,
                            });
                        },
                        className: S.clickableTile,
                        children: (0, i.jsx)("div", {
                            className: S.iconContainer,
                            children: (0, i.jsx)(h, {
                                size: "custom",
                                color: "currentColor",
                                width: 40,
                                height: 40,
                            }),
                        }),
                    }),
                }),
                (0, i.jsx)(u.f6W, {
                    theme: O.BRd.DARK,
                    children: (e) =>
                        (0, i.jsx)(u.P3F, {
                            onClick: r,
                            className: a()(e, S.shelfButtonCloseButton),
                            children: (0, i.jsx)(u.k$p, {
                                size: "md",
                                color: "currentColor",
                                className: S.closeButtonIcon,
                                secondaryColor: s.Z.colors.INTERACTIVE_NORMAL.css,
                            }),
                        }),
                }),
            ],
        }),
    });
}
function T(e) {
    let { channel: t, guild: l, inPopout: o } = e;
    r.useEffect(() => {
        x.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity invite",
            n_participants: 1,
        });
    }, []);
    let { analyticsLocations: s, newestAnalyticsLocation: c } = (0, g.ZP)(m.Z.VC_TILE_ACTIVITY_INVITE),
        d = (0, v._k)({ location: "single_user_tile" }),
        { enabled: h } = p.c.useExperiment({ location: "SingleUserTile" }, { autoTrackExposure: !0 });
    function f() {
        (0, u.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("49049"), n.e("7654"), n.e("89334")]).then(
                    n.bind(n, 560114),
                );
                return (n) => {
                    var r, a;
                    return (0, i.jsx)(
                        e,
                        ((r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (a = a =
                            {
                                guild: l,
                                channel: t,
                                source: O.t4x.ACTIVITY_ENTRY_POINT_TILE,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        r),
                    );
                };
            },
            { contextKey: o ? u.u1M : u.z1l },
        );
    }
    function y() {
        (0, b.Z)({
            context:
                null != t
                    ? {
                          type: "channel",
                          channel: t,
                      }
                    : { type: "contextless" },
            openInPopout: o,
            analyticsLocation: c,
        });
    }
    let C = h ? u.iWm : u.nG3,
        _ = d.isInCallEntrypointEnabled ? u.oLu : u.iFz;
    return (0, i.jsx)(g.Gt, {
        value: s,
        children: (0, i.jsx)(u.f6W, {
            disableAdaptiveTheme: !0,
            theme: O.BRd.MIDNIGHT,
            children: (e) =>
                (0, i.jsxs)(j.Z, {
                    className: a()(S.root, S.singleUserRoot, e),
                    children: [
                        (0, i.jsx)("img", {
                            src: P,
                            className: S.art,
                            alt: "",
                        }),
                        (0, i.jsxs)(u.ButtonGroup, {
                            justify: "center",
                            align: "center",
                            children: [
                                (0, i.jsx)(u.Button, {
                                    variant: "secondary",
                                    icon: _,
                                    text: d.isInCallEntrypointEnabled
                                        ? E.intl.string(E.t["EE+P0H"])
                                        : E.intl.string(E.t["6Qgrev"]),
                                    onClick: f,
                                }),
                                (0, i.jsx)(u.Button, {
                                    variant: "secondary",
                                    icon: C,
                                    text: E.intl.string(E.t.qnFavR),
                                    onClick: y,
                                }),
                            ],
                        }),
                    ],
                }),
        }),
    });
}
function N(e) {
    let { channel: t, guild: n, handleClose: l, width: s, userParticipantCount: c } = e;
    (0, d.ZP)(() => {
        x.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity suggestion",
            n_participants: c,
        });
    });
    let p = (0, h.Z)({ guildId: n.id }).slice(0, 3),
        { analyticsLocations: b } = (0, g.ZP)(m.Z.VC_TILE_ACTIVITY_SUGGESTION),
        v = r.useMemo(
            () => ({
                channel: t,
                type: "channel",
            }),
            [t],
        );
    return (0, i.jsx)(g.Gt, {
        value: b,
        children: (0, i.jsxs)(j.Z, {
            className: S.root,
            children: [
                s > 300
                    ? (0, i.jsx)(u.Text, {
                          className: S.heading,
                          variant: s > 550 ? "text-md/semibold" : "text-sm/semibold",
                          children: E.intl.string(E.t["7BKMcG"]),
                      })
                    : null,
                (0, i.jsx)("div", {
                    className: a()(S.activitiesContainer, { [S.activitiesContainerSmol]: s <= 300 }),
                    children: p.map((e) =>
                        (0, i.jsx)(
                            f.Y,
                            {
                                context: v,
                                activityItem: e,
                                aspectRatio: f.Y.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: S.activitySuggestion,
                                commandOrigin: y.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS,
                            },
                            e.application.id,
                        ),
                    ),
                }),
                (0, i.jsxs)(u.P3F, {
                    className: S.checkboxContainer,
                    onClick: function () {
                        x.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "permanent",
                            n_participants: c,
                        }),
                            (0, C.Q3)(o.z.VC_TILE_ACTIVITIES_ENTRY_POINT);
                    },
                    children: [
                        (0, i.jsx)(_.Z, {}),
                        (0, i.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            children: E.intl.string(E.t["5E9SB9"]),
                        }),
                    ],
                }),
                (0, i.jsx)(u.P3F, {
                    className: S.closeButtonContainer,
                    onClick: function () {
                        x.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "temporary",
                            n_participants: c,
                        }),
                            l();
                    },
                    children: (0, i.jsx)(u.Dio, {
                        size: "md",
                        color: "currentColor",
                        className: S.closeButton,
                    }),
                }),
            ],
        }),
    });
}
