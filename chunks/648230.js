s.d(t, { default: () => X });
var i = s(627968),
    r = s(64700),
    n = s(503698),
    l = s.n(n),
    a = s(299855),
    o = s.n(a),
    c = s(110259),
    d = s(141931),
    u = s(311907),
    f = s(573613),
    h = s(93688),
    x = s(428689),
    p = s(31300),
    _ = s(224640),
    m = s(629584),
    g = s(821609),
    j = s(157559),
    v = s(444927),
    A = s(77729),
    C = s(90804),
    S = s(793574),
    y = s(688810),
    b = s(15285),
    w = s(253932),
    E = s(430452),
    I = s(383501),
    N = s(287809),
    O = s(157257),
    R = s(723702),
    T = s(927578),
    M = s(997630),
    D = s(571044),
    G = s(905552),
    U = s(72432),
    L = s(264540),
    P = s(255481),
    k = s(688465),
    F = s(864057),
    H = s(354062),
    B = s(715587),
    W = s(280481),
    Z = s(517753),
    V = s(598032),
    z = s(997248),
    Q = s(652681),
    q = s(502075),
    K = s(710787),
    $ = s(985018),
    Y = s(456713);
function X(e) {
    let { onClose: t, transitionState: s, sourcePID: n, analyticsLocations: a = [], selectSource: X = !0 } = e,
        J = (0, u.bG)([b.Ay], () => (null != n ? (b.Ay.getGameForPID(n) ?? void 0) : void 0)),
        ee = r.useRef(performance.now()),
        et = (0, u.bG)(
            [E.Ay],
            () =>
                (E.Ay.getUseSystemScreensharePicker() || E.Ay.getUseGamescopeCapture()) &&
                ((0, R.isLinux)() || ((0, R.isMac)() && o().satisfies(A.A?.os.release, q.WZ))),
        ),
        { analyticsLocations: es } = (0, y.Ay)(a, S.A.GO_LIVE_MODAL_V2),
        ei = (0, u.bG)([N.default], () => N.default.getCurrentUser()),
        er = (0, z.A)(),
        { state: en, dispatch: el } = (0, k.yB)(J, ei, er),
        ea = (0, v.A)((0, R.isWindows)() && null != J && X ? "confirm" : "source_select");
    (0, Q.A)(et, el, "confirm" === ea);
    let eo = !T.Ay.canStreamQuality(T.Ay.StreamQuality.HIGH, ei),
        ec = !(0, R.isLinux)(),
        ed = "confirm" === ea,
        eu = !X && null != J && !ed,
        ef = ed || en.sourceType === d.fS.CAMERA,
        eh = et && en.sourceType !== d.fS.CAMERA,
        ex = r.useMemo(() => {
            let e = [
                { name: $.intl.string($.t.tHoi7u), value: d.fS.WINDOW, icon: h.W },
                { name: $.intl.string($.t.MhJ43A), value: d.fS.CAMERA, icon: x.n },
            ];
            return et || e.splice(1, 0, { name: $.intl.string($.t.slM8rG), value: d.fS.SCREEN, icon: p.k }), e;
        }, [et]),
        { sourceType: ep } = en,
        e_ = r.useCallback(
            async (e) => {
                w.wv.updateSetting(en.notifyFriends), w.uh.updateSetting(en.hidePreview);
                let [s, i] = await (0, U.A)(e.hasOwnProperty("pid") ? e.pid : e, {
                    preset: en.preset,
                    fps: en.fps,
                    resolution: en.resolution,
                    soundshareEnabled: !en.muteStreamAudio,
                    previewDisabled: en.hidePreview,
                    goLiveModalDurationMs: performance.now() - ee.current,
                    audioSourceId: en.audioSourceId,
                    analyticsLocations: es,
                });
                if (s) return t();
                "no permission" === i &&
                    j.A.show({ title: $.intl.string($.t["X+mXeq"]), body: $.intl.string($.t.MIJCzr) }),
                    t();
            },
            [t, en, es],
        );
    async function em(e) {
        (await (0, C.A)({ channelId: e })) && null != J && e_(J);
    }
    let eg = r.useCallback(() => {
        e_({
            id: ("gamescope" === en.nativeSourceType ? "screen:" : "prepicked:") + en.nativeSourceType,
            name: D.Ay.getLastPickedContentTitle() ?? $.intl.string($.t.KKcy95),
            url: "",
        });
    }, [e_, en.nativeSourceType]);
    return (0, i.jsx)(k.KL, {
        state: en,
        dispatch: el,
        children: (0, i.jsx)(_.d, {
            transitionState: s,
            onClose: t,
            size: "xl",
            trackingProps: {
                impression: {
                    impressionName: c.ImpressionNames.GO_LIVE_MODAL,
                    impressionProperties: {
                        location_stack: es,
                        application_id: (0, R.isWindows)() ? (0, G.A)(b.Ay, O.A)?.id : void 0,
                        parent_media_session_id: I.A.getMediaSessionId(),
                    },
                },
            },
            children: (0, i.jsxs)("div", {
                className: l()(Y.zr, { [Y._g]: et && null == J, [Y.Tb]: eu, [Y.Fe]: ed }),
                children: [
                    eu
                        ? (0, i.jsx)(L.A, { className: l()(Y.or, Y.Ym), onSelectChannel: em })
                        : ed
                          ? (0, i.jsx)(P.A, {})
                          : (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", {
                                        className: Y.wx,
                                        children: (0, i.jsx)(m.I, {
                                            className: Y.q0,
                                            value: ep,
                                            look: "pill",
                                            optionClassName: Y.LD,
                                            onChange: (e) => {
                                                let { value: t } = e;
                                                return el({ type: "set_source_type", sourceType: t });
                                            },
                                            options: ex,
                                        }),
                                    }),
                                    (0, i.jsx)(f.Ar, {
                                        className: Y.Qs,
                                        children:
                                            et && ep !== d.fS.CAMERA
                                                ? (0, i.jsx)(F.A, { onSourceSelect: eg })
                                                : (0, i.jsx)(H.A, {
                                                      onClick: function (e) {
                                                          e.id?.startsWith(d.fS.CAMERA)
                                                              ? el({ type: "set_selected_source", source: e })
                                                              : e_(e);
                                                      },
                                                  }),
                                    }),
                                ],
                            }),
                    (0, i.jsxs)("div", {
                        className: Y.qr,
                        children: [
                            (0, i.jsxs)("div", {
                                className: Y.z8,
                                children: [
                                    (0, i.jsx)(V.A, {}),
                                    (0, i.jsxs)("div", {
                                        className: Y.gt,
                                        children: [
                                            eo && (0, i.jsx)(W.A, { onClose: t }),
                                            (eh || ef) &&
                                                (0, i.jsx)(g.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: $.intl.string(
                                                        eh && "gamescope" !== en.nativeSourceType
                                                            ? $.t.FiBjwU
                                                            : K.default["5AyH/p"],
                                                    ),
                                                    onClick: () => {
                                                        eh
                                                            ? "gamescope" === en.nativeSourceType
                                                                ? eg()
                                                                : ((0, M.E)(), (0, M.a)(en.nativeSourceType))
                                                            : null != en.selectedChannel
                                                              ? em(en.selectedChannel)
                                                              : null != en.selectedSource && e_(en.selectedSource);
                                                    },
                                                    disabled:
                                                        (eh && !ec && "" === en.nativeSourceType) ||
                                                        (ef && null == en.selectedSource),
                                                }),
                                            (0, i.jsx)(B.A, { align: "right" }),
                                        ],
                                    }),
                                ],
                            }),
                            eo && (0, i.jsx)("div", { className: Y.rO, children: (0, i.jsx)(Z.A, { onClose: t }) }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
