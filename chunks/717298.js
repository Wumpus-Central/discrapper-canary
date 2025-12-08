n.d(t, { Z: () => X }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    s = n.n(l),
    o = n(209739),
    a = n.n(o),
    c = n(990547),
    d = n(268146),
    u = n(442837),
    f = n(159691),
    p = n(481060),
    h = n(668781),
    m = n(211266),
    _ = n(579806),
    g = n(89425),
    x = n(100527),
    v = n(906732),
    j = n(594190),
    S = n(695346),
    b = n(131951),
    y = n(19780),
    C = n(594174),
    O = n(449224),
    w = n(358085),
    Z = n(74538),
    P = n(299570),
    I = n(960861),
    E = n(989941),
    T = n(562224),
    N = n(544753),
    A = n(573429),
    R = n(560749),
    M = n(485299),
    k = n(615161),
    D = n(289989),
    L = n(328242),
    B = n(565574),
    G = n(286420),
    U = n(173044),
    F = n(351911),
    H = n(577257),
    W = n(70722),
    V = n(128057),
    z = n(388032),
    J = n(468918);
function X(e) {
    var t;
    let { onClose: n, transitionState: l, sourceApplication: o, analyticsLocations: X = [], selectSource: K = !0 } = e,
        q = i.useRef(performance.now()),
        Y = (0, u.e7)(
            [b.Z],
            () =>
                (b.Z.getUseSystemScreensharePicker() || b.Z.getUseGamescopeCapture()) &&
                ((0, w.isLinux)() ||
                    ((0, w.isMac)() && a().satisfies(null === _.Z || void 0 === _.Z ? void 0 : _.Z.os.release, W.jR))),
        ),
        { analyticsLocations: Q } = (0, v.ZP)(X, x.Z.GO_LIVE_MODAL_V2),
        $ = (0, u.e7)([C.default], () => C.default.getCurrentUser()),
        ee = (0, N.Z)(),
        { state: et, dispatch: en } = (0, k.Ti)(o, $, ee),
        er = (0, m.Z)((0, w.isWindows)() && null != o && K ? "confirm" : "source_select");
    (0, H.Z)(Y, en, "confirm" === er);
    let ei = !Z.ZP.canStreamQuality(Z.ZP.StreamQuality.HIGH, $),
        el = !(0, w.isLinux)(),
        es = "confirm" === er,
        eo = !K && null != o && !es,
        ea = es || et.sourceType === d.vA.CAMERA,
        ec = Y && et.sourceType !== d.vA.CAMERA,
        ed = i.useMemo(() => {
            let e = [
                {
                    name: z.intl.string(z.t.tHoi7u),
                    value: d.vA.WINDOW,
                    icon: p.GON,
                },
                {
                    name: z.intl.string(z.t.MhJ43A),
                    value: d.vA.CAMERA,
                    icon: p.Odl,
                },
            ];
            return (
                Y ||
                    e.splice(1, 0, {
                        name: z.intl.string(z.t.slM8rG),
                        value: d.vA.SCREEN,
                        icon: p.pzj,
                    }),
                e
            );
        }, [Y]),
        { sourceType: eu } = et,
        ef = i.useCallback(
            async (e) => {
                S.eo.updateSetting(et.notifyFriends), S.I0.updateSetting(et.hidePreview);
                let [t, r] = await (0, T.Z)(e.hasOwnProperty("pid") ? e.pid : e, {
                    preset: et.preset,
                    fps: et.fps,
                    resolution: et.resolution,
                    soundshareEnabled: !et.muteStreamAudio,
                    previewDisabled: et.hidePreview,
                    goLiveModalDurationMs: performance.now() - q.current,
                    audioSourceId: et.audioSourceId,
                    analyticsLocations: Q,
                });
                if (t) return n();
                "no permission" === r &&
                    h.Z.show({
                        title: z.intl.string(z.t["X+mXeq"]),
                        body: z.intl.string(z.t.MIJCzr),
                    }),
                    n();
            },
            [n, et, Q],
        );
    async function ep(e) {
        (await (0, g.Z)({ channelId: e })) && null != o && ef(o);
    }
    let eh = i.useCallback(() => {
        var e;
        ef({
            id: ("gamescope" === et.nativeSourceType ? "screen:" : "prepicked:") + et.nativeSourceType,
            name: null != (e = I.ZP.getLastPickedContentTitle()) ? e : z.intl.string(z.t.KKcy95),
            url: "",
        });
    }, [ef, et.nativeSourceType]);
    return (0, r.jsx)(k.Yw, {
        state: et,
        dispatch: en,
        children: (0, r.jsx)(p.IX, {
            transitionState: l,
            onClose: n,
            size: "xl",
            trackingProps: {
                impression: {
                    impressionName: c.ImpressionNames.GO_LIVE_MODAL,
                    impressionProperties: {
                        location_stack: Q,
                        application_id: (0, w.isWindows)()
                            ? null == (t = (0, E.Z)(j.ZP, O.Z))
                                ? void 0
                                : t.id
                            : void 0,
                        parent_media_session_id: y.Z.getMediaSessionId(),
                    },
                },
            },
            children: (0, r.jsxs)("div", {
                className: s()(J.root, {
                    [J.nativePicker]: Y && null == o,
                    [J.channelSelector]: eo,
                    [J.confirmStep]: es,
                }),
                children: [
                    eo
                        ? (0, r.jsx)(R.Z, {
                              className: s()(J.channelSelectorComponent, J.withFooter),
                              onSelectChannel: ep,
                          })
                        : es
                          ? (0, r.jsx)(M.Z, {})
                          : (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", {
                                        className: J.header,
                                        children: (0, r.jsx)(p.sY7, {
                                            className: J.segmentedControl,
                                            value: eu,
                                            look: "pill",
                                            optionClassName: J.segmentedControlOption,
                                            onChange: (e) => {
                                                let { value: t } = e;
                                                return en({
                                                    type: "set_source_type",
                                                    sourceType: t,
                                                });
                                            },
                                            options: ed,
                                        }),
                                    }),
                                    (0, r.jsx)(f.w0Z, {
                                        className: J.content,
                                        children:
                                            Y && eu !== d.vA.CAMERA
                                                ? (0, r.jsx)(D.Z, { onSourceSelect: eh })
                                                : (0, r.jsx)(L.Z, {
                                                      onClick: function (e) {
                                                          var t;
                                                          (null == (t = e.id) ? void 0 : t.startsWith(d.vA.CAMERA))
                                                              ? en({
                                                                    type: "set_selected_source",
                                                                    source: e,
                                                                })
                                                              : ef(e);
                                                      },
                                                  }),
                                    }),
                                ],
                            }),
                    (0, r.jsxs)("div", {
                        className: J.footer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: J.footerContent,
                                children: [
                                    (0, r.jsx)(F.Z, {}),
                                    (0, r.jsxs)("div", {
                                        className: J.rightButtonGroup,
                                        children: [
                                            ei && (0, r.jsx)(G.Z, { onClose: n }),
                                            ec &&
                                                !ea &&
                                                (0, r.jsx)(A.Z, {
                                                    mainCTADisabled: !el && "" === et.nativeSourceType,
                                                    mainCTAOnClick: () => {
                                                        "gamescope" === et.nativeSourceType
                                                            ? eh()
                                                            : ((0, P.t)(), (0, P.T)(et.nativeSourceType));
                                                    },
                                                    align: "right",
                                                    ctaText: z.intl.string(
                                                        "gamescope" === et.nativeSourceType
                                                            ? V.default["5AyH/p"]
                                                            : z.t.FiBjwU,
                                                    ),
                                                    hideOptionsButton: !ei,
                                                }),
                                            ea &&
                                                !ec &&
                                                (0, r.jsx)(A.Z, {
                                                    mainCTADisabled: null == et.selectedSource,
                                                    mainCTAOnClick: () => {
                                                        null != et.selectedChannel
                                                            ? ep(et.selectedChannel)
                                                            : null != et.selectedSource && ef(et.selectedSource);
                                                    },
                                                    align: "right",
                                                    hideOptionsButton: !ei,
                                                    ctaText: z.intl.string(V.default["5AyH/p"]),
                                                }),
                                            (!ei || !(ea || ec)) && (0, r.jsx)(B.Z, { align: "right" }),
                                        ],
                                    }),
                                ],
                            }),
                            ei &&
                                (0, r.jsx)("div", {
                                    className: J.upsellRibbonContainer,
                                    children: (0, r.jsx)(U.Z, { onClose: n }),
                                }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
