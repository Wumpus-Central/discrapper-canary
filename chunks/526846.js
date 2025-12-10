n.d(t, { m: () => w }), n(997841), n(953529);
var i = n(54381),
    r = n(473749),
    l = n(772848),
    a = n(535655),
    o = n(973693),
    s = n(912370),
    c = n(442837),
    u = n(481060),
    d = n(100527),
    p = n(906732),
    h = n(783097),
    f = n(226026),
    m = n(397698),
    g = n(895924),
    b = n(471518),
    C = n(425986),
    y = n(216780),
    _ = n(728285),
    v = n(390322),
    O = n(857192),
    x = n(626135),
    E = n(566620),
    j = n(127255),
    S = n(5200),
    P = n(981631),
    I = n(388032),
    Z = n(201512);
let T = o.Y.APP_LAUNCHER_IN_VOICE_BANNER,
    N = "vc-activities-".concat((0, l.Z)());
function A(e) {
    var t;
    let n,
        { channel: l, openInPopout: o, onClick: p } = e,
        { fetchState: g, voiceBannerCollection: _ } = (function () {
            let e = (0, c.e7)([O.default], () => O.default.onlyShowPreviewAppCollections) ? a.E.PREVIEW : a.E.ACTIVE;
            return (
                r.useEffect(() => {
                    (0, b.XK)({
                        surface: T,
                        activeState: e,
                    });
                }, [e]),
                {
                    fetchState: (0, c.e7)([C.Z], () =>
                        C.Z.getFetchState({
                            surface: T,
                            activeState: e,
                        }),
                    ),
                    voiceBannerCollection: (0, c.e7)([C.Z], () =>
                        C.Z.getCollections({
                            surface: T,
                            activeState: e,
                        }),
                    )[0],
                }
            );
        })(),
        v = g === C.M.FETCHING,
        x = r.useMemo(() => {
            let e = null == _ ? void 0 : _.application_directory_collection_items[0];
            return null == e ? null : e.type === s.C.APPLICATION_BANNER ? e : null;
        }, [null == _ ? void 0 : _.application_directory_collection_items]),
        { trackItemImpressionRef: E } = (0, f.Z)({
            applicationId: null != (t = null == x ? void 0 : x.application.id) ? t : "",
            applicationFlags: null == x ? void 0 : x.application.flags,
            sectionName: "app_launcher_in_voice_banner",
            sectionPosition: null == x ? void 0 : x.position,
            sectionOverallPosition: 0,
            promotionalLabel: null != x ? (0, h.dF)(x.application) : void 0,
        });
    return null == x || null == _ || v
        ? null
        : (null != x.id &&
              null != x.image_hash &&
              (n = (0, y.$_)({
                  itemId: x.id,
                  hash: x.image_hash,
                  containerWidth: 584,
              })),
          (0, i.jsxs)(u.P3F, {
              className: Z.clickableBanner,
              innerRef: E,
              onClick: () => {
                  p(),
                      (0, m.Z)({
                          context: {
                              type: "channel",
                              channel: l,
                          },
                          openInPopout: o,
                          analyticsLocation: d.Z.APP_LAUNCHER_IN_VOICE_BANNER,
                          initialState: { applicationId: x.application.id },
                      });
              },
              children: [
                  (0, i.jsx)("img", {
                      alt: x.description,
                      src: n,
                      className: Z.poster,
                  }),
                  (0, i.jsx)("div", { className: Z.posterDivider }),
              ],
          }));
}
let w = r.forwardRef(function (e, t) {
    var n;
    let { channel: l, isHovered: a, closePopout: o, onMouseEnter: s, onMouseLeave: c, onClick: h, className: f } = e,
        { id: b, guild_id: C } = l;
    r.useEffect(() => {
        x.default.track(P.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
            channel_id: b,
            guild_id: C,
        });
    }, [b, C]),
        r.useEffect(() => {
            a || o();
        }, [o, a]);
    let y = (0, _.bp)(),
        { analyticsLocations: O, newestAnalyticsLocation: T } = (0, p.ZP)(d.Z.ACTIVITIES_MINI_SHELF),
        w = y === P.IlC.POPOUT,
        M = ((n = l.getGuildId()), (0, j.Z)({ guildId: n }).slice(0, 5));
    r.useEffect(() => {
        let e = setTimeout(() => E.ux(), 1000);
        return () => clearTimeout(e);
    }, []);
    let R = r.useCallback(() => {
            (0, m.Z)({
                context:
                    null != l
                        ? {
                              type: "channel",
                              channel: l,
                          }
                        : { type: "contextless" },
                openInPopout: w,
                analyticsLocation: T,
            }),
                c(),
                h();
        }, [l, T, h, c, w]),
        L = r.useCallback(
            (e) => {
                s(),
                    x.default.track(P.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: l.id,
                        guild_id: l.getGuildId(),
                    });
            },
            [s, l],
        );
    return (0, i.jsx)(p.Gt, {
        value: O,
        children: (0, i.jsx)(v.Z, {
            children: (0, i.jsxs)(u.VqE, {
                ref: t,
                "aria-labelledby": N,
                className: f,
                children: [
                    (0, i.jsx)(u.y5t, {
                        forceLevel: 2,
                        children: (0, i.jsx)(u.nn4, {
                            children: (0, i.jsx)(u.H, {
                                id: N,
                                children: I.intl.string(I.t["2lnYtB"]),
                            }),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: Z.container,
                        onMouseEnter: L,
                        onMouseLeave: c,
                        children: [
                            (0, i.jsxs)("div", {
                                className: Z.titleContainer,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: Z.titleLeft,
                                        children: [
                                            (0, i.jsx)(u.nG3, {
                                                size: "md",
                                                className: Z.titleLeftIcon,
                                                color: "var(--interactive-text-active)",
                                            }),
                                            (0, i.jsx)(u.Text, {
                                                variant: "eyebrow",
                                                children: I.intl.string(I.t.f3Cz25),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(u.P3F, {
                                        className: Z.titleRight,
                                        onClick: R,
                                        children: [
                                            (0, i.jsx)(u.Text, {
                                                variant: "eyebrow",
                                                children: I.intl.string(I.t["K8+z4S"]),
                                            }),
                                            (0, i.jsx)(u.Fbu, {
                                                size: "custom",
                                                width: 12,
                                                height: 12,
                                                color: "var(--interactive-text-active)",
                                                className: Z.titleRightIcon,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(A, {
                                openInPopout: w,
                                channel: l,
                                onClick: () => {
                                    h(), o();
                                },
                            }),
                            (0, i.jsx)("div", {
                                className: Z.activityContainer,
                                children: M.map((e) =>
                                    (0, i.jsx)(
                                        S.Y,
                                        {
                                            context: {
                                                channel: l,
                                                type: "channel",
                                            },
                                            activityItem: e,
                                            onClick: () => {
                                                o(), h();
                                            },
                                            aspectRatio: S.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
                                            animatedDivClass: Z.activitySuggestion,
                                            commandOrigin: g.bB.MINI_SHELF,
                                        },
                                        e.application.id,
                                    ),
                                ),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
