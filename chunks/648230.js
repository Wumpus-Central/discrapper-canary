s.d(t, { default: () => Q });
var r = s(627968),
    i = s(64700),
    n = s(503698),
    l = s.n(n),
    a = s(299855),
    o = s.n(a),
    c = s(110259),
    d = s(141931),
    u = s(311907),
    f = s(732955),
    h = s(397927),
    x = s(157559),
    p = s(444927),
    m = s(77729),
    _ = s(90804),
    g = s(793574),
    j = s(688810),
    v = s(15285),
    A = s(253932),
    y = s(430452),
    S = s(383501),
    C = s(287809),
    b = s(157257),
    w = s(723702),
    I = s(927578),
    E = s(997630),
    N = s(571044),
    O = s(905552),
    T = s(72432),
    R = s(264540),
    M = s(255481),
    U = s(688465),
    G = s(864057),
    D = s(354062),
    L = s(715587),
    P = s(280481),
    F = s(517753),
    k = s(598032),
    H = s(997248),
    B = s(652681),
    W = s(502075),
    Z = s(332800),
    V = s(985018),
    z = s(95062);
function Q(e) {
    let { onClose: t, transitionState: s, sourcePID: n, analyticsLocations: a = [], selectSource: Q = !0 } = e,
        q = (0, u.bG)([v.Ay], () => (null != n ? (v.Ay.getGameForPID(n) ?? void 0) : void 0)),
        K = i.useRef(performance.now()),
        Y = (0, u.bG)(
            [y.Ay],
            () =>
                (y.Ay.getUseSystemScreensharePicker() || y.Ay.getUseGamescopeCapture()) &&
                ((0, w.isLinux)() || ((0, w.isMac)() && o().satisfies(m.A?.os.release, W.WZ))),
        ),
        { analyticsLocations: $ } = (0, j.Ay)(a, g.A.GO_LIVE_MODAL_V2),
        X = (0, u.bG)([C.default], () => C.default.getCurrentUser()),
        J = (0, H.A)(),
        { state: ee, dispatch: et } = (0, U.yB)(q, X, J),
        es = (0, p.A)((0, w.isWindows)() && null != q && Q ? "confirm" : "source_select");
    (0, B.A)(Y, et, "confirm" === es);
    let er = !I.Ay.canStreamQuality(I.Ay.StreamQuality.HIGH, X),
        ei = !(0, w.isLinux)(),
        en = "confirm" === es,
        el = !Q && null != q && !en,
        ea = en || ee.sourceType === d.fS.CAMERA,
        eo = Y && ee.sourceType !== d.fS.CAMERA,
        ec = i.useMemo(() => {
            let e = [
                { name: V.intl.string(V.t.tHoi7u), value: d.fS.WINDOW, icon: h.WxK },
                { name: V.intl.string(V.t.MhJ43A), value: d.fS.CAMERA, icon: h.npA },
            ];
            return Y || e.splice(1, 0, { name: V.intl.string(V.t.slM8rG), value: d.fS.SCREEN, icon: h.kN9 }), e;
        }, [Y]),
        { sourceType: ed } = ee,
        eu = i.useCallback(
            async (e) => {
                A.wv.updateSetting(ee.notifyFriends), A.uh.updateSetting(ee.hidePreview);
                let [s, r] = await (0, T.A)(e.hasOwnProperty("pid") ? e.pid : e, {
                    preset: ee.preset,
                    fps: ee.fps,
                    resolution: ee.resolution,
                    soundshareEnabled: !ee.muteStreamAudio,
                    previewDisabled: ee.hidePreview,
                    goLiveModalDurationMs: performance.now() - K.current,
                    audioSourceId: ee.audioSourceId,
                    analyticsLocations: $,
                });
                if (s) return t();
                "no permission" === r &&
                    x.A.show({ title: V.intl.string(V.t["X+mXeq"]), body: V.intl.string(V.t.MIJCzr) }),
                    t();
            },
            [t, ee, $],
        );
    async function ef(e) {
        (await (0, _.A)({ channelId: e })) && null != q && eu(q);
    }
    let eh = i.useCallback(() => {
        eu({
            id: ("gamescope" === ee.nativeSourceType ? "screen:" : "prepicked:") + ee.nativeSourceType,
            name: N.Ay.getLastPickedContentTitle() ?? V.intl.string(V.t.KKcy95),
            url: "",
        });
    }, [eu, ee.nativeSourceType]);
    return (0, r.jsx)(U.KL, {
        state: ee,
        dispatch: et,
        children: (0, r.jsx)(h.dWK, {
            transitionState: s,
            onClose: t,
            size: "xl",
            trackingProps: {
                impression: {
                    impressionName: c.ImpressionNames.GO_LIVE_MODAL,
                    impressionProperties: {
                        location_stack: $,
                        application_id: (0, w.isWindows)() ? (0, O.A)(v.Ay, b.A)?.id : void 0,
                        parent_media_session_id: S.A.getMediaSessionId(),
                    },
                },
            },
            children: (0, r.jsxs)("div", {
                className: l()(z.zr, { [z._g]: Y && null == q, [z.Tb]: el, [z.Fe]: en }),
                children: [
                    el
                        ? (0, r.jsx)(R.A, { className: l()(z.or, z.Ym), onSelectChannel: ef })
                        : en
                          ? (0, r.jsx)(M.A, {})
                          : (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", {
                                        className: z.wx,
                                        children: (0, r.jsx)(h.IzF, {
                                            className: z.q0,
                                            value: ed,
                                            look: "pill",
                                            optionClassName: z.LD,
                                            onChange: (e) => {
                                                let { value: t } = e;
                                                return et({ type: "set_source_type", sourceType: t });
                                            },
                                            options: ec,
                                        }),
                                    }),
                                    (0, r.jsx)(f.ArX, {
                                        className: z.Qs,
                                        children:
                                            Y && ed !== d.fS.CAMERA
                                                ? (0, r.jsx)(G.A, { onSourceSelect: eh })
                                                : (0, r.jsx)(D.A, {
                                                      onClick: function (e) {
                                                          e.id?.startsWith(d.fS.CAMERA)
                                                              ? et({ type: "set_selected_source", source: e })
                                                              : eu(e);
                                                      },
                                                  }),
                                    }),
                                ],
                            }),
                    (0, r.jsxs)("div", {
                        className: z.qr,
                        children: [
                            (0, r.jsxs)("div", {
                                className: z.z8,
                                children: [
                                    (0, r.jsx)(k.A, {}),
                                    (0, r.jsxs)("div", {
                                        className: z.gt,
                                        children: [
                                            er && (0, r.jsx)(P.A, { onClose: t }),
                                            (eo || ea) &&
                                                (0, r.jsx)(h.Button, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: V.intl.string(
                                                        eo && "gamescope" !== ee.nativeSourceType
                                                            ? V.t.FiBjwU
                                                            : Z.default["5AyH/p"],
                                                    ),
                                                    onClick: () => {
                                                        eo
                                                            ? "gamescope" === ee.nativeSourceType
                                                                ? eh()
                                                                : ((0, E.E)(), (0, E.a)(ee.nativeSourceType))
                                                            : null != ee.selectedChannel
                                                              ? ef(ee.selectedChannel)
                                                              : null != ee.selectedSource && eu(ee.selectedSource);
                                                    },
                                                    disabled:
                                                        (eo && !ei && "" === ee.nativeSourceType) ||
                                                        (ea && null == ee.selectedSource),
                                                }),
                                            (0, r.jsx)(L.A, { align: "right" }),
                                        ],
                                    }),
                                ],
                            }),
                            er && (0, r.jsx)("div", { className: z.rO, children: (0, r.jsx)(F.A, { onClose: t }) }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
