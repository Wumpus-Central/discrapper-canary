n.d(t, { default: () => X }), n(388685);
var r = n(54381),
    i = n(473749),
    s = n(120356),
    l = n.n(s),
    o = n(209739),
    c = n.n(o),
    a = n(990547),
    d = n(268146),
    u = n(442837),
    f = n(159691),
    h = n(481060),
    p = n(668781),
    x = n(211266),
    m = n(579806),
    g = n(89425),
    v = n(100527),
    j = n(906732),
    _ = n(594190),
    b = n(695346),
    y = n(131951),
    w = n(19780),
    O = n(594174),
    C = n(449224),
    S = n(358085),
    I = n(74538),
    Z = n(299570),
    E = n(960861),
    P = n(989941),
    N = n(562224),
    T = n(21072),
    R = n(183326),
    M = n(914241),
    A = n(443762),
    L = n(741127),
    U = n(530626),
    D = n(492627),
    G = n(741731),
    H = n(562518),
    B = n(208552),
    k = n(544753),
    F = n(195436),
    W = n(70722),
    V = n(715689),
    z = n(388032),
    Y = n(123795);
function X(e) {
    var t;
    let { onClose: n, transitionState: s, sourcePID: o, analyticsLocations: X = [], selectSource: q = !0 } = e,
        J = (0, u.e7)([_.ZP], () => {
            var e;
            return null != o && null != (e = _.ZP.getGameForPID(o)) ? e : void 0;
        }),
        Q = i.useRef(performance.now()),
        K = (0, u.e7)(
            [y.Z],
            () =>
                (y.Z.getUseSystemScreensharePicker() || y.Z.getUseGamescopeCapture()) &&
                ((0, S.isLinux)() ||
                    ((0, S.isMac)() && c().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, W.jR))),
        ),
        { analyticsLocations: $ } = (0, j.ZP)(X, v.Z.GO_LIVE_MODAL_V2),
        ee = (0, u.e7)([O.default], () => O.default.getCurrentUser()),
        et = (0, k.Z)(),
        { state: en, dispatch: er } = (0, A.Ti)(J, ee, et),
        ei = (0, x.Z)((0, S.isWindows)() && null != J && q ? "confirm" : "source_select");
    (0, F.Z)(K, er, "confirm" === ei);
    let es = !I.ZP.canStreamQuality(I.ZP.StreamQuality.HIGH, ee),
        el = !(0, S.isLinux)(),
        eo = "confirm" === ei,
        ec = !q && null != J && !eo,
        ea = eo || en.sourceType === d.vA.CAMERA,
        ed = K && en.sourceType !== d.vA.CAMERA,
        eu = i.useMemo(() => {
            let e = [
                {
                    name: z.intl.string(z.t.tHoi7u),
                    value: d.vA.WINDOW,
                    icon: h.GON,
                },
                {
                    name: z.intl.string(z.t.MhJ43A),
                    value: d.vA.CAMERA,
                    icon: h.Odl,
                },
            ];
            return (
                K ||
                    e.splice(1, 0, {
                        name: z.intl.string(z.t.slM8rG),
                        value: d.vA.SCREEN,
                        icon: h.pzj,
                    }),
                e
            );
        }, [K]),
        { sourceType: ef } = en,
        eh = i.useCallback(
            async (e) => {
                b.eo.updateSetting(en.notifyFriends), b.I0.updateSetting(en.hidePreview);
                let [t, r] = await (0, N.Z)(e.hasOwnProperty("pid") ? e.pid : e, {
                    preset: en.preset,
                    fps: en.fps,
                    resolution: en.resolution,
                    soundshareEnabled: !en.muteStreamAudio,
                    previewDisabled: en.hidePreview,
                    goLiveModalDurationMs: performance.now() - Q.current,
                    audioSourceId: en.audioSourceId,
                    analyticsLocations: $,
                });
                if (t) return n();
                "no permission" === r &&
                    p.Z.show({
                        title: z.intl.string(z.t["X+mXeq"]),
                        body: z.intl.string(z.t.MIJCzr),
                    }),
                    n();
            },
            [n, en, $],
        );
    async function ep(e) {
        (await (0, g.Z)({ channelId: e })) && null != J && eh(J);
    }
    let ex = i.useCallback(() => {
        var e;
        eh({
            id: ("gamescope" === en.nativeSourceType ? "screen:" : "prepicked:") + en.nativeSourceType,
            name: null != (e = E.ZP.getLastPickedContentTitle()) ? e : z.intl.string(z.t.KKcy95),
            url: "",
        });
    }, [eh, en.nativeSourceType]);
    return (0, r.jsx)(A.Yw, {
        state: en,
        dispatch: er,
        children: (0, r.jsx)(h.IX, {
            transitionState: s,
            onClose: n,
            size: "xl",
            trackingProps: {
                impression: {
                    impressionName: a.ImpressionNames.GO_LIVE_MODAL,
                    impressionProperties: {
                        location_stack: $,
                        application_id: (0, S.isWindows)()
                            ? null == (t = (0, P.Z)(_.ZP, C.Z))
                                ? void 0
                                : t.id
                            : void 0,
                        parent_media_session_id: w.Z.getMediaSessionId(),
                    },
                },
            },
            children: (0, r.jsxs)("div", {
                className: l()(Y.root, {
                    [Y.nativePicker]: K && null == J,
                    [Y.channelSelector]: ec,
                    [Y.confirmStep]: eo,
                }),
                children: [
                    ec
                        ? (0, r.jsx)(R.Z, {
                              className: l()(Y.channelSelectorComponent, Y.withFooter),
                              onSelectChannel: ep,
                          })
                        : eo
                          ? (0, r.jsx)(M.Z, {})
                          : (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", {
                                        className: Y.header,
                                        children: (0, r.jsx)(h.sY7, {
                                            className: Y.segmentedControl,
                                            value: ef,
                                            look: "pill",
                                            optionClassName: Y.segmentedControlOption,
                                            onChange: (e) => {
                                                let { value: t } = e;
                                                return er({
                                                    type: "set_source_type",
                                                    sourceType: t,
                                                });
                                            },
                                            options: eu,
                                        }),
                                    }),
                                    (0, r.jsx)(f.w0Z, {
                                        className: Y.content,
                                        children:
                                            K && ef !== d.vA.CAMERA
                                                ? (0, r.jsx)(L.Z, { onSourceSelect: ex })
                                                : (0, r.jsx)(U.Z, {
                                                      onClick: function (e) {
                                                          var t;
                                                          (null == (t = e.id) ? void 0 : t.startsWith(d.vA.CAMERA))
                                                              ? er({
                                                                    type: "set_selected_source",
                                                                    source: e,
                                                                })
                                                              : eh(e);
                                                      },
                                                  }),
                                    }),
                                ],
                            }),
                    (0, r.jsxs)("div", {
                        className: Y.footer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: Y.footerContent,
                                children: [
                                    (0, r.jsx)(B.Z, {}),
                                    (0, r.jsxs)("div", {
                                        className: Y.rightButtonGroup,
                                        children: [
                                            es && (0, r.jsx)(G.Z, { onClose: n }),
                                            ed &&
                                                !ea &&
                                                (0, r.jsx)(T.Z, {
                                                    mainCTADisabled: !el && "" === en.nativeSourceType,
                                                    mainCTAOnClick: () => {
                                                        "gamescope" === en.nativeSourceType
                                                            ? ex()
                                                            : ((0, Z.t)(), (0, Z.T)(en.nativeSourceType));
                                                    },
                                                    align: "right",
                                                    ctaText: z.intl.string(
                                                        "gamescope" === en.nativeSourceType
                                                            ? V.default["5AyH/p"]
                                                            : z.t.FiBjwU,
                                                    ),
                                                    hideOptionsButton: !es,
                                                }),
                                            ea &&
                                                !ed &&
                                                (0, r.jsx)(T.Z, {
                                                    mainCTADisabled: null == en.selectedSource,
                                                    mainCTAOnClick: () => {
                                                        null != en.selectedChannel
                                                            ? ep(en.selectedChannel)
                                                            : null != en.selectedSource && eh(en.selectedSource);
                                                    },
                                                    align: "right",
                                                    hideOptionsButton: !es,
                                                    ctaText: z.intl.string(V.default["5AyH/p"]),
                                                }),
                                            (!es || !(ea || ed)) && (0, r.jsx)(D.Z, { align: "right" }),
                                        ],
                                    }),
                                ],
                            }),
                            es &&
                                (0, r.jsx)("div", {
                                    className: Y.upsellRibbonContainer,
                                    children: (0, r.jsx)(H.Z, { onClose: n }),
                                }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
