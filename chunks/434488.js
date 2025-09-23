n.d(t, { h: () => Z });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(704215),
    s = n(692547),
    c = n(481060),
    u = n(493773),
    d = n(456100),
    p = n(127255),
    h = n(5200),
    f = n(100527),
    m = n(906732),
    g = n(397698),
    b = n(895924),
    y = n(266454),
    C = n(340541),
    _ = n(416345),
    v = n(626135),
    x = n(607187),
    O = n(981631),
    j = n(388032),
    E = n(348130),
    S = n(359165);
function P(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function I(e, t) {
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
        ? (0, r.jsx)(T, {
              channel: t,
              guild: n,
              width: i,
              inPopout: l,
              handleClose: a,
              userParticipantCount: o,
          })
        : o > 1
          ? (0, r.jsx)(A, {
                channel: t,
                guild: n,
                width: i,
                inPopout: l,
                handleClose: a,
                userParticipantCount: o,
            })
          : (0, r.jsx)(N, {
                channel: t,
                guild: n,
                width: i,
                inPopout: l,
            });
}
function T(e) {
    let { channel: t, inPopout: n, handleClose: i } = e,
        { analyticsLocations: l, newestAnalyticsLocation: o } = (0, m.ZP)(f.Z.VC_TILE_ACTIVITY_SHELF_BUTTON),
        { enabled: u } = d.c.useExperiment({ location: "ActivityShelfButtonTile" }, { autoTrackExposure: !0 }),
        p = u ? c.iWm : c.gQj;
    return (0, r.jsx)(m.Gt, {
        value: l,
        children: (0, r.jsxs)(x.Z, {
            className: E.root,
            children: [
                (0, r.jsx)(c.ua7, {
                    text: j.intl.string(j.t.qJvTKS),
                    children: (e) => {
                        var { onClick: i } = e,
                            l = (function (e, t) {
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
                                    for (r = 0; r < l.length; r++)
                                        (n = l[r]),
                                            !(t.indexOf(n) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                (i[n] = e[n]);
                                }
                                return i;
                            })(e, ["onClick"]);
                        return (0, r.jsx)(
                            c.P3F,
                            I(P({}, l), {
                                className: E.clickableTile,
                                onClick: () => {
                                    null == i || i(),
                                        (0, g.Z)({
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
                                children: (0, r.jsx)("div", {
                                    className: E.iconContainer,
                                    children: (0, r.jsx)(p, {
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
                    theme: O.BRd.DARK,
                    children: (e) =>
                        (0, r.jsx)(c.P3F, {
                            onClick: i,
                            className: a()(e, E.shelfButtonCloseButton),
                            children: (0, r.jsx)(c.k$p, {
                                size: "md",
                                color: "currentColor",
                                className: E.closeButtonIcon,
                                secondaryColor: s.Z.colors.INTERACTIVE_NORMAL.css,
                            }),
                        }),
                }),
            ],
        }),
    });
}
function N(e) {
    let { channel: t, guild: l, inPopout: o } = e;
    i.useEffect(() => {
        v.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity invite",
            n_participants: 1,
        });
    }, []);
    let { analyticsLocations: s, newestAnalyticsLocation: u } = (0, m.ZP)(f.Z.VC_TILE_ACTIVITY_INVITE),
        p = (0, C._k)({ location: "single_user_tile" }),
        { enabled: h } = d.c.useExperiment({ location: "SingleUserTile" }, { autoTrackExposure: !0 });
    function b() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("7654"), n.e("49049"), n.e("98953")]).then(
                    n.bind(n, 560114),
                );
                return (n) =>
                    (0, r.jsx)(
                        e,
                        I(P({}, n), {
                            guild: l,
                            channel: t,
                            source: O.t4x.ACTIVITY_ENTRY_POINT_TILE,
                        }),
                    );
            },
            { contextKey: o ? c.u1M : c.z1l },
        );
    }
    function y() {
        (0, g.Z)({
            context:
                null != t
                    ? {
                          type: "channel",
                          channel: t,
                      }
                    : { type: "contextless" },
            openInPopout: o,
            analyticsLocation: u,
        });
    }
    let _ = h ? c.iWm : c.nG3,
        Z = p.isInCallEntrypointEnabled ? c.oLu : c.iFz;
    return (0, r.jsx)(m.Gt, {
        value: s,
        children: (0, r.jsx)(c.f6W, {
            disableAdaptiveTheme: !0,
            theme: O.BRd.MIDNIGHT,
            children: (e) =>
                (0, r.jsxs)(x.Z, {
                    className: a()(E.root, E.singleUserRoot, e),
                    children: [
                        (0, r.jsx)("img", {
                            src: S,
                            className: E.art,
                            alt: "",
                        }),
                        (0, r.jsxs)(c.hE2, {
                            justify: "center",
                            align: "center",
                            children: [
                                (0, r.jsx)(c.zxk, {
                                    variant: "secondary",
                                    icon: Z,
                                    text: p.isInCallEntrypointEnabled
                                        ? j.intl.string(j.t["EE+P0N"])
                                        : j.intl.string(j.t["6Qgren"]),
                                    onClick: b,
                                }),
                                (0, r.jsx)(c.zxk, {
                                    variant: "secondary",
                                    icon: _,
                                    text: j.intl.string(j.t.qnFavb),
                                    onClick: y,
                                }),
                            ],
                        }),
                    ],
                }),
        }),
    });
}
function A(e) {
    let { channel: t, guild: n, handleClose: l, width: s, userParticipantCount: d } = e;
    (0, u.ZP)(() => {
        v.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity suggestion",
            n_participants: d,
        });
    });
    let g = (0, p.Z)({ guildId: n.id }).slice(0, 3),
        { analyticsLocations: C } = (0, m.ZP)(f.Z.VC_TILE_ACTIVITY_SUGGESTION),
        S = i.useMemo(
            () => ({
                channel: t,
                type: "channel",
            }),
            [t],
        );
    return (0, r.jsx)(m.Gt, {
        value: C,
        children: (0, r.jsxs)(x.Z, {
            className: E.root,
            children: [
                s > 300
                    ? (0, r.jsx)(c.Text, {
                          className: E.heading,
                          variant: s > 550 ? "text-md/semibold" : "text-sm/semibold",
                          children: j.intl.string(j.t["7BKMcH"]),
                      })
                    : null,
                (0, r.jsx)("div", {
                    className: a()(E.activitiesContainer, { [E.activitiesContainerSmol]: s <= 300 }),
                    children: g.map((e) =>
                        (0, r.jsx)(
                            h.Y,
                            {
                                context: S,
                                activityItem: e,
                                aspectRatio: h.Y.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: E.activitySuggestion,
                                commandOrigin: b.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS,
                            },
                            e.application.id,
                        ),
                    ),
                }),
                (0, r.jsxs)(c.P3F, {
                    className: E.checkboxContainer,
                    onClick: function () {
                        v.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "permanent",
                            n_participants: d,
                        }),
                            (0, y.Q3)(o.z.VC_TILE_ACTIVITIES_ENTRY_POINT);
                    },
                    children: [
                        (0, r.jsx)(_.Z, {}),
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/medium",
                            children: j.intl.string(j.t["5E9SBw"]),
                        }),
                    ],
                }),
                (0, r.jsx)(c.P3F, {
                    className: E.closeButtonContainer,
                    onClick: function () {
                        v.default.track(O.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "temporary",
                            n_participants: d,
                        }),
                            l();
                    },
                    children: (0, r.jsx)(c.Dio, {
                        size: "md",
                        color: "currentColor",
                        className: E.closeButton,
                    }),
                }),
            ],
        }),
    });
}
