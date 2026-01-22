r.d(t, {
    default: () => Q,
}),
    r(896048);
var n = r(627968),
    l = r(64700),
    s = r(503698),
    i = r.n(s),
    a = r(299855),
    c = r.n(a),
    o = r(110259),
    d = r(141931),
    f = r(311907),
    u = r(732955),
    h = r(397927),
    p = r(157559),
    x = r(444927),
    j = r(77729),
    m = r(90804),
    g = r(793574),
    b = r(688810),
    v = r(15285),
    y = r(253932),
    S = r(430452),
    A = r(383501),
    _ = r(287809),
    O = r(157257),
    C = r(723702),
    w = r(927578),
    E = r(997630),
    N = r(571044),
    I = r(905552),
    T = r(72432),
    R = r(264540),
    P = r(255481),
    M = r(688465),
    D = r(864057),
    U = r(354062),
    L = r(715587),
    G = r(280481),
    k = r(517753),
    F = r(598032),
    Z = r(997248),
    H = r(652681),
    B = r(502075),
    V = r(191850),
    z = r(985018),
    W = r(580340);

function Q(e) {
    var t;
    let { onClose: r, transitionState: s, sourcePID: a, analyticsLocations: Q = [], selectSource: q = !0 } = e,
        K = (0, f.bG)([v.Ay], () => {
            var e;
            return null != a && null != (e = v.Ay.getGameForPID(a)) ? e : void 0;
        }),
        Y = l.useRef(performance.now()),
        X = (0, f.bG)(
            [S.A],
            () =>
                (S.A.getUseSystemScreensharePicker() || S.A.getUseGamescopeCapture()) &&
                ((0, C.isLinux)() ||
                    ((0, C.isMac)() && c().satisfies(null === j.A || void 0 === j.A ? void 0 : j.A.os.release, B.WZ))),
        ),
        { analyticsLocations: J } = (0, b.Ay)(Q, g.A.GO_LIVE_MODAL_V2),
        $ = (0, f.bG)([_.default], () => _.default.getCurrentUser()),
        ee = (0, Z.A)(),
        { state: et, dispatch: er } = (0, M.yB)(K, $, ee),
        en = (0, x.A)((0, C.isWindows)() && null != K && q ? "confirm" : "source_select");
    (0, H.A)(X, er, "confirm" === en);
    let el = !w.Ay.canStreamQuality(w.Ay.StreamQuality.HIGH, $),
        es = !(0, C.isLinux)(),
        ei = "confirm" === en,
        ea = !q && null != K && !ei,
        ec = ei || et.sourceType === d.fS.CAMERA,
        eo = X && et.sourceType !== d.fS.CAMERA,
        ed = l.useMemo(() => {
            let e = [
                {
                    name: z.intl.string(z.t.tHoi7u),
                    value: d.fS.WINDOW,
                    icon: h.WxK,
                },
                {
                    name: z.intl.string(z.t.MhJ43A),
                    value: d.fS.CAMERA,
                    icon: h.npA,
                },
            ];
            return (
                X ||
                    e.splice(1, 0, {
                        name: z.intl.string(z.t.slM8rG),
                        value: d.fS.SCREEN,
                        icon: h.kN9,
                    }),
                e
            );
        }, [X]),
        { sourceType: ef } = et,
        eu = l.useCallback(
            async (e) => {
                y.wv.updateSetting(et.notifyFriends), y.uh.updateSetting(et.hidePreview);
                let [t, n] = await (0, T.A)(e.hasOwnProperty("pid") ? e.pid : e, {
                    preset: et.preset,
                    fps: et.fps,
                    resolution: et.resolution,
                    soundshareEnabled: !et.muteStreamAudio,
                    previewDisabled: et.hidePreview,
                    goLiveModalDurationMs: performance.now() - Y.current,
                    audioSourceId: et.audioSourceId,
                    analyticsLocations: J,
                });
                if (t) return r();
                "no permission" === n &&
                    p.A.show({
                        title: z.intl.string(z.t["X+mXeq"]),
                        body: z.intl.string(z.t.MIJCzr),
                    }),
                    r();
            },
            [r, et, J],
        );
    async function eh(e) {
        (await (0, m.A)({
            channelId: e,
        })) &&
            null != K &&
            eu(K);
    }
    let ep = l.useCallback(() => {
        var e;
        eu({
            id: ("gamescope" === et.nativeSourceType ? "screen:" : "prepicked:") + et.nativeSourceType,
            name: null != (e = N.Ay.getLastPickedContentTitle()) ? e : z.intl.string(z.t.KKcy95),
            url: "",
        });
    }, [eu, et.nativeSourceType]);
    return (0, n.jsx)(M.KL, {
        state: et,
        dispatch: er,
        children: (0, n.jsx)(h.dWK, {
            transitionState: s,
            onClose: r,
            size: "xl",
            trackingProps: {
                impression: {
                    impressionName: o.ImpressionNames.GO_LIVE_MODAL,
                    impressionProperties: {
                        location_stack: J,
                        application_id: (0, C.isWindows)()
                            ? null == (t = (0, I.A)(v.Ay, O.A))
                                ? void 0
                                : t.id
                            : void 0,
                        parent_media_session_id: A.A.getMediaSessionId(),
                    },
                },
            },
            children: (0, n.jsxs)("div", {
                className: i()(W.zr, {
                    [W._g]: X && null == K,
                    [W.Tb]: ea,
                    [W.Fe]: ei,
                }),
                children: [
                    ea
                        ? (0, n.jsx)(R.A, {
                              className: i()(W.or, W.Ym),
                              onSelectChannel: eh,
                          })
                        : ei
                          ? (0, n.jsx)(P.A, {})
                          : (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("div", {
                                        className: W.wx,
                                        children: (0, n.jsx)(h.IzF, {
                                            className: W.q0,
                                            value: ef,
                                            look: "pill",
                                            optionClassName: W.LD,
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
                                    (0, n.jsx)(u.ArX, {
                                        className: W.Qs,
                                        children:
                                            X && ef !== d.fS.CAMERA
                                                ? (0, n.jsx)(D.A, {
                                                      onSourceSelect: ep,
                                                  })
                                                : (0, n.jsx)(U.A, {
                                                      onClick: function (e) {
                                                          var t;
                                                          (null == (t = e.id) ? void 0 : t.startsWith(d.fS.CAMERA))
                                                              ? er({
                                                                    type: "set_selected_source",
                                                                    source: e,
                                                                })
                                                              : eu(e);
                                                      },
                                                  }),
                                    }),
                                ],
                            }),
                    (0, n.jsxs)("div", {
                        className: W.qr,
                        children: [
                            (0, n.jsxs)("div", {
                                className: W.z8,
                                children: [
                                    (0, n.jsx)(F.A, {}),
                                    (0, n.jsxs)("div", {
                                        className: W.gt,
                                        children: [
                                            el &&
                                                (0, n.jsx)(G.A, {
                                                    onClose: r,
                                                }),
                                            (eo || ec) &&
                                                (0, n.jsx)(h.Button, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: z.intl.string(
                                                        eo && "gamescope" !== et.nativeSourceType
                                                            ? z.t.FiBjwU
                                                            : V.default["5AyH/p"],
                                                    ),
                                                    onClick: () => {
                                                        eo
                                                            ? "gamescope" === et.nativeSourceType
                                                                ? ep()
                                                                : ((0, E.E)(), (0, E.a)(et.nativeSourceType))
                                                            : null != et.selectedChannel
                                                              ? eh(et.selectedChannel)
                                                              : null != et.selectedSource && eu(et.selectedSource);
                                                    },
                                                    disabled:
                                                        (eo && !es && "" === et.nativeSourceType) ||
                                                        (ec && null == et.selectedSource),
                                                }),
                                            (0, n.jsx)(L.A, {
                                                align: "right",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            el &&
                                (0, n.jsx)("div", {
                                    className: W.rO,
                                    children: (0, n.jsx)(k.A, {
                                        onClose: r,
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
