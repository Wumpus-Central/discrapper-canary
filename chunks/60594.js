r.d(t, { default: () => Y }), r(388685);
var n = r(54381),
    i = r(473749),
    s = r(120356),
    l = r.n(s),
    o = r(209739),
    c = r.n(o),
    a = r(990547),
    d = r(268146),
    u = r(442837),
    f = r(159691),
    h = r(481060),
    p = r(668781),
    x = r(211266),
    m = r(579806),
    g = r(89425),
    v = r(100527),
    j = r(906732),
    _ = r(594190),
    b = r(695346),
    y = r(131951),
    w = r(19780),
    O = r(594174),
    C = r(449224),
    S = r(358085),
    I = r(74538),
    Z = r(299570),
    E = r(960861),
    P = r(989941),
    N = r(562224),
    T = r(183326),
    R = r(914241),
    M = r(443762),
    A = r(741127),
    L = r(530626),
    U = r(492627),
    G = r(741731),
    D = r(562518),
    H = r(208552),
    B = r(544753),
    k = r(195436),
    F = r(70722),
    W = r(715689),
    V = r(388032),
    z = r(123795);
function Y(e) {
    var t;
    let { onClose: r, transitionState: s, sourcePID: o, analyticsLocations: Y = [], selectSource: X = !0 } = e,
        q = (0, u.e7)([_.ZP], () => {
            var e;
            return null != o && null != (e = _.ZP.getGameForPID(o)) ? e : void 0;
        }),
        J = i.useRef(performance.now()),
        Q = (0, u.e7)(
            [y.Z],
            () =>
                (y.Z.getUseSystemScreensharePicker() || y.Z.getUseGamescopeCapture()) &&
                ((0, S.isLinux)() ||
                    ((0, S.isMac)() && c().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, F.jR))),
        ),
        { analyticsLocations: K } = (0, j.ZP)(Y, v.Z.GO_LIVE_MODAL_V2),
        $ = (0, u.e7)([O.default], () => O.default.getCurrentUser()),
        ee = (0, B.Z)(),
        { state: et, dispatch: er } = (0, M.Ti)(q, $, ee),
        en = (0, x.Z)((0, S.isWindows)() && null != q && X ? "confirm" : "source_select");
    (0, k.Z)(Q, er, "confirm" === en);
    let ei = !I.ZP.canStreamQuality(I.ZP.StreamQuality.HIGH, $),
        es = !(0, S.isLinux)(),
        el = "confirm" === en,
        eo = !X && null != q && !el,
        ec = el || et.sourceType === d.vA.CAMERA,
        ea = Q && et.sourceType !== d.vA.CAMERA,
        ed = i.useMemo(() => {
            let e = [
                {
                    name: V.intl.string(V.t.tHoi7u),
                    value: d.vA.WINDOW,
                    icon: h.GON,
                },
                {
                    name: V.intl.string(V.t.MhJ43A),
                    value: d.vA.CAMERA,
                    icon: h.Odl,
                },
            ];
            return (
                Q ||
                    e.splice(1, 0, {
                        name: V.intl.string(V.t.slM8rG),
                        value: d.vA.SCREEN,
                        icon: h.pzj,
                    }),
                e
            );
        }, [Q]),
        { sourceType: eu } = et,
        ef = i.useCallback(
            async (e) => {
                b.eo.updateSetting(et.notifyFriends), b.I0.updateSetting(et.hidePreview);
                let [t, n] = await (0, N.Z)(e.hasOwnProperty("pid") ? e.pid : e, {
                    preset: et.preset,
                    fps: et.fps,
                    resolution: et.resolution,
                    soundshareEnabled: !et.muteStreamAudio,
                    previewDisabled: et.hidePreview,
                    goLiveModalDurationMs: performance.now() - J.current,
                    audioSourceId: et.audioSourceId,
                    analyticsLocations: K,
                });
                if (t) return r();
                "no permission" === n &&
                    p.Z.show({
                        title: V.intl.string(V.t["X+mXeq"]),
                        body: V.intl.string(V.t.MIJCzr),
                    }),
                    r();
            },
            [r, et, K],
        );
    async function eh(e) {
        (await (0, g.Z)({ channelId: e })) && null != q && ef(q);
    }
    let ep = i.useCallback(() => {
        var e;
        ef({
            id: ("gamescope" === et.nativeSourceType ? "screen:" : "prepicked:") + et.nativeSourceType,
            name: null != (e = E.ZP.getLastPickedContentTitle()) ? e : V.intl.string(V.t.KKcy95),
            url: "",
        });
    }, [ef, et.nativeSourceType]);
    return (0, n.jsx)(M.Yw, {
        state: et,
        dispatch: er,
        children: (0, n.jsx)(h.IX, {
            transitionState: s,
            onClose: r,
            size: "xl",
            trackingProps: {
                impression: {
                    impressionName: a.ImpressionNames.GO_LIVE_MODAL,
                    impressionProperties: {
                        location_stack: K,
                        application_id: (0, S.isWindows)()
                            ? null == (t = (0, P.Z)(_.ZP, C.Z))
                                ? void 0
                                : t.id
                            : void 0,
                        parent_media_session_id: w.Z.getMediaSessionId(),
                    },
                },
            },
            children: (0, n.jsxs)("div", {
                className: l()(z.root, {
                    [z.nativePicker]: Q && null == q,
                    [z.channelSelector]: eo,
                    [z.confirmStep]: el,
                }),
                children: [
                    eo
                        ? (0, n.jsx)(T.Z, {
                              className: l()(z.channelSelectorComponent, z.withFooter),
                              onSelectChannel: eh,
                          })
                        : el
                          ? (0, n.jsx)(R.Z, {})
                          : (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("div", {
                                        className: z.header,
                                        children: (0, n.jsx)(h.sY7, {
                                            className: z.segmentedControl,
                                            value: eu,
                                            look: "pill",
                                            optionClassName: z.segmentedControlOption,
                                            onChange: (e) => {
                                                let { value: t } = e;
                                                return er({
                                                    type: "set_source_type",
                                                    sourceType: t,
                                                });
                                            },
                                            options: ed,
                                        }),
                                    }),
                                    (0, n.jsx)(f.w0Z, {
                                        className: z.content,
                                        children:
                                            Q && eu !== d.vA.CAMERA
                                                ? (0, n.jsx)(A.Z, { onSourceSelect: ep })
                                                : (0, n.jsx)(L.Z, {
                                                      onClick: function (e) {
                                                          var t;
                                                          (null == (t = e.id) ? void 0 : t.startsWith(d.vA.CAMERA))
                                                              ? er({
                                                                    type: "set_selected_source",
                                                                    source: e,
                                                                })
                                                              : ef(e);
                                                      },
                                                  }),
                                    }),
                                ],
                            }),
                    (0, n.jsxs)("div", {
                        className: z.footer,
                        children: [
                            (0, n.jsxs)("div", {
                                className: z.footerContent,
                                children: [
                                    (0, n.jsx)(H.Z, {}),
                                    (0, n.jsxs)("div", {
                                        className: z.rightButtonGroup,
                                        children: [
                                            ei && (0, n.jsx)(G.Z, { onClose: r }),
                                            (ea || ec) &&
                                                (0, n.jsx)(h.Button, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: V.intl.string(
                                                        ea && "gamescope" !== et.nativeSourceType
                                                            ? V.t.FiBjwU
                                                            : W.default["5AyH/p"],
                                                    ),
                                                    onClick: () => {
                                                        ea
                                                            ? "gamescope" === et.nativeSourceType
                                                                ? ep()
                                                                : ((0, Z.t)(), (0, Z.T)(et.nativeSourceType))
                                                            : null != et.selectedChannel
                                                              ? eh(et.selectedChannel)
                                                              : null != et.selectedSource && ef(et.selectedSource);
                                                    },
                                                    disabled:
                                                        (ea && !es && "" === et.nativeSourceType) ||
                                                        (ec && null == et.selectedSource),
                                                }),
                                            (0, n.jsx)(U.Z, { align: "right" }),
                                        ],
                                    }),
                                ],
                            }),
                            ei &&
                                (0, n.jsx)("div", {
                                    className: z.upsellRibbonContainer,
                                    children: (0, n.jsx)(D.Z, { onClose: r }),
                                }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
