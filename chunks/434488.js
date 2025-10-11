n.d(t, { h: () => I });
var i = n(951288),
    r = n(647438),
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
    C = n(895924),
    y = n(266454),
    _ = n(340541),
    v = n(416345),
    x = n(626135),
    O = n(607187),
    j = n(981631),
    E = n(388032),
    S = n(348130),
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
        children: (0, i.jsxs)(O.Z, {
            className: S.root,
            children: [
                (0, i.jsx)(c.u, {
                    asContainer: !0,
                    text: E.intl.string(E.t.qJvTKS),
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
                    theme: j.BRd.DARK,
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
        x.default.track(j.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity invite",
            n_participants: 1,
        });
    }, []);
    let { analyticsLocations: s, newestAnalyticsLocation: c } = (0, g.ZP)(m.Z.VC_TILE_ACTIVITY_INVITE),
        d = (0, _._k)({ location: "single_user_tile" }),
        { enabled: h } = p.c.useExperiment({ location: "SingleUserTile" }, { autoTrackExposure: !0 });
    function f() {
        (0, u.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("74318"), n.e("49049"), n.e("7654"), n.e("98953")]).then(
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
                                source: j.InstantInviteSources.ACTIVITY_ENTRY_POINT_TILE,
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
    function C() {
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
    let y = h ? u.iWm : u.nG3,
        v = d.isInCallEntrypointEnabled ? u.oLu : u.iFz;
    return (0, i.jsx)(g.Gt, {
        value: s,
        children: (0, i.jsx)(u.f6W, {
            disableAdaptiveTheme: !0,
            theme: j.BRd.MIDNIGHT,
            children: (e) =>
                (0, i.jsxs)(O.Z, {
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
                                    icon: v,
                                    text: d.isInCallEntrypointEnabled
                                        ? E.intl.string(E.t["EE+P0N"])
                                        : E.intl.string(E.t["6Qgren"]),
                                    onClick: f,
                                }),
                                (0, i.jsx)(u.Button, {
                                    variant: "secondary",
                                    icon: y,
                                    text: E.intl.string(E.t.qnFavb),
                                    onClick: C,
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
        x.default.track(j.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity suggestion",
            n_participants: c,
        });
    });
    let p = (0, h.Z)({ guildId: n.id }).slice(0, 3),
        { analyticsLocations: b } = (0, g.ZP)(m.Z.VC_TILE_ACTIVITY_SUGGESTION),
        _ = r.useMemo(
            () => ({
                channel: t,
                type: "channel",
            }),
            [t],
        );
    return (0, i.jsx)(g.Gt, {
        value: b,
        children: (0, i.jsxs)(O.Z, {
            className: S.root,
            children: [
                s > 300
                    ? (0, i.jsx)(u.Text, {
                          className: S.heading,
                          variant: s > 550 ? "text-md/semibold" : "text-sm/semibold",
                          children: E.intl.string(E.t["7BKMcH"]),
                      })
                    : null,
                (0, i.jsx)("div", {
                    className: a()(S.activitiesContainer, { [S.activitiesContainerSmol]: s <= 300 }),
                    children: p.map((e) =>
                        (0, i.jsx)(
                            f.Y,
                            {
                                context: _,
                                activityItem: e,
                                aspectRatio: f.Y.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: S.activitySuggestion,
                                commandOrigin: C.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS,
                            },
                            e.application.id,
                        ),
                    ),
                }),
                (0, i.jsxs)(u.P3F, {
                    className: S.checkboxContainer,
                    onClick: function () {
                        x.default.track(j.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "permanent",
                            n_participants: c,
                        }),
                            (0, y.Q3)(o.z.VC_TILE_ACTIVITIES_ENTRY_POINT);
                    },
                    children: [
                        (0, i.jsx)(v.Z, {}),
                        (0, i.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            children: E.intl.string(E.t["5E9SBw"]),
                        }),
                    ],
                }),
                (0, i.jsx)(u.P3F, {
                    className: S.closeButtonContainer,
                    onClick: function () {
                        x.default.track(j.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
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
