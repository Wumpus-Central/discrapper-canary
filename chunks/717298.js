n.d(t, { Z: () => J }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    o = n(209739),
    a = n.n(o),
    c = n(990547),
    d = n(435935),
    u = n(268146),
    f = n(442837),
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
    P = n(74538),
    Z = n(299570),
    I = n(960861),
    E = n(989941),
    T = n(562224),
    N = n(544753),
    A = n(853030),
    R = n(560749),
    M = n(485299),
    k = n(615161),
    D = n(289989),
    L = n(328242),
    B = n(565574),
    G = n(286420),
    U = n(51708),
    F = n(801604),
    H = n(577257),
    W = n(70722),
    z = n(832832),
    V = n(388032),
    X = n(374079);
function J(e) {
    var t;
    let { onClose: n, transitionState: l, sourceApplication: o, analyticsLocations: J = [], selectSource: K = !0 } = e,
        Y = i.useRef(performance.now()),
        q = (0, f.e7)(
            [b.Z],
            () =>
                b.Z.getUseSystemScreensharePicker() &&
                ((0, w.isLinux)() ||
                    ((0, w.isMac)() && a().satisfies(null === _.Z || void 0 === _.Z ? void 0 : _.Z.os.release, W.jR))),
        ),
        { analyticsLocations: Q } = (0, v.ZP)(J, x.Z.GO_LIVE_MODAL_V2),
        $ = (0, f.e7)([C.default], () => C.default.getCurrentUser()),
        ee = (0, N.Z)(),
        { state: et, dispatch: en } = (0, k.Ti)(o, $, ee),
        er = (0, m.Z)((0, w.isWindows)() && null != o && K ? "confirm" : "source_select");
    (0, H.Z)(q, en, "confirm" === er);
    let ei = !P.ZP.canStreamQuality(P.ZP.StreamQuality.HIGH, $),
        el = !(0, w.isLinux)(),
        es = "confirm" === er,
        eo = !K && null != o && !es,
        ea = q && et.sourceType !== u.vA.CAMERA,
        ec = i.useMemo(() => {
            let e = [
                {
                    name: V.intl.string(V.t.tHoi7u),
                    value: u.vA.WINDOW,
                    icon: p.GON,
                },
                {
                    name: V.intl.string(V.t.MhJ43A),
                    value: u.vA.CAMERA,
                    icon: p.Odl,
                },
            ];
            return (
                q ||
                    e.splice(1, 0, {
                        name: V.intl.string(V.t.slM8rG),
                        value: u.vA.SCREEN,
                        icon: p.pzj,
                    }),
                e
            );
        }, [q]),
        { sourceType: ed } = et,
        eu = i.useCallback(
            async (e) => {
                S.eo.updateSetting(et.notifyFriends), S.I0.updateSetting(et.hidePreview);
                let [t, r] = await (0, T.Z)(e.hasOwnProperty("pid") ? e.pid : e, {
                    preset: et.preset,
                    fps: et.fps,
                    resolution: et.resolution,
                    soundshareEnabled: !et.muteStreamAudio,
                    previewDisabled: et.hidePreview,
                    goLiveModalDurationMs: performance.now() - Y.current,
                    audioSourceId: et.audioSourceId,
                    analyticsLocations: Q,
                });
                if (t) return n();
                "no permission" === r &&
                    h.Z.show({
                        title: V.intl.string(V.t["X+mXeq"]),
                        body: V.intl.string(V.t.MIJCzr),
                    }),
                    n();
            },
            [n, et, Q],
        );
    async function ef(e) {
        (await (0, g.Z)({ channelId: e })) && null != o && eu(o);
    }
    let ep = i.useCallback(() => {
        var e;
        eu({
            id: "prepicked:" + et.nativeSourceType,
            name: null != (e = I.ZP.getLastPickedContentTitle()) ? e : V.intl.string(V.t.KKcy95),
            url: "",
        });
    }, [eu, et.nativeSourceType]);
    return (0, r.jsx)(k.Yw, {
        state: et,
        dispatch: en,
        children: (0, r.jsxs)(p.Y0X, {
            impression: {
                impressionName: c.ImpressionNames.GO_LIVE_MODAL,
                impressionProperties: {
                    location_stack: Q,
                    application_id: (0, w.isWindows)() ? (null == (t = (0, E.Z)(j.ZP, O.Z)) ? void 0 : t.id) : void 0,
                    parent_media_session_id: y.Z.getMediaSessionId(),
                },
            },
            className: s()(X.root, {
                [X.nativePicker]: q && null == o,
                [X.channelSelector]: eo,
                [X.confirmStep]: es,
            }),
            size: p.CgR.DYNAMIC,
            transitionState: l,
            parentComponent: "GoLiveModalV2",
            children: [
                eo
                    ? (0, r.jsx)(R.Z, {
                          className: s()(X.channelSelectorComponent, X.withFooter),
                          onSelectChannel: ef,
                      })
                    : es
                      ? (0, r.jsx)(M.Z, {})
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(p.xBx, {
                                    separator: !1,
                                    className: X.header,
                                    children: (0, r.jsx)(p.sY7, {
                                        className: X.segmentedControl,
                                        value: ed,
                                        look: "pill",
                                        optionClassName: X.segmentedControlOption,
                                        onChange: (e) => {
                                            let { value: t } = e;
                                            return en({
                                                type: "set_source_type",
                                                sourceType: t,
                                            });
                                        },
                                        options: ec,
                                    }),
                                }),
                                (0, r.jsx)(p.hzk, {
                                    className: X.content,
                                    children:
                                        q && ed !== u.vA.CAMERA
                                            ? (0, r.jsx)(D.Z, { onSourceSelect: ep })
                                            : (0, r.jsx)(L.Z, {
                                                  onClick: function (e) {
                                                      return eu(e);
                                                  },
                                              }),
                                }),
                            ],
                        }),
                (0, r.jsxs)(p.mzw, {
                    className: s()(X.footer, { [X.footerShadow]: !ei && es }),
                    separator: !1,
                    direction: d.k.Direction.VERTICAL,
                    children: [
                        (0, r.jsxs)("div", {
                            className: X.footerContent,
                            children: [
                                (0, r.jsx)(F.Z, {}),
                                (0, r.jsxs)("div", {
                                    className: X.rightButtonGroup,
                                    children: [
                                        ei && (0, r.jsx)(G.Z, { onClose: n }),
                                        ea &&
                                            !es &&
                                            (0, r.jsx)(A.Z, {
                                                mainCTADisabled: !el && "" === et.nativeSourceType,
                                                mainCTAOnClick: () => {
                                                    (0, Z.t)(), (0, Z.T)(et.nativeSourceType);
                                                },
                                                align: "right",
                                                ctaText: V.intl.string(V.t.FiBjwU),
                                                hideOptionsButton: !ei,
                                            }),
                                        es &&
                                            !ea &&
                                            (0, r.jsx)(A.Z, {
                                                mainCTADisabled: null == et.selectedSource,
                                                mainCTAOnClick: () => {
                                                    null != et.selectedChannel
                                                        ? ef(et.selectedChannel)
                                                        : null != et.selectedSource && eu(et.selectedSource);
                                                },
                                                align: "right",
                                                hideOptionsButton: !ei,
                                                ctaText: V.intl.string(z.default["5AyH/p"]),
                                            }),
                                        (!ei || !(es || ea)) && (0, r.jsx)(B.Z, { align: "right" }),
                                    ],
                                }),
                            ],
                        }),
                        ei && (0, r.jsx)(U.Z, { onClose: n }),
                    ],
                }),
            ],
        }),
    });
}
