n.d(t, { Z: () => X }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    s = n(209739),
    a = n.n(s),
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
    b = n(695346),
    S = n(131951),
    y = n(19780),
    C = n(594174),
    O = n(449224),
    w = n(358085),
    P = n(74538),
    T = n(299570),
    Z = n(960861),
    I = n(989941),
    E = n(562224),
    N = n(544753),
    A = n(853030),
    R = n(560749),
    M = n(485299),
    k = n(615161),
    D = n(289989),
    B = n(328242),
    L = n(565574),
    G = n(286420),
    U = n(173044),
    F = n(801604),
    H = n(577257),
    W = n(70722),
    z = n(604415),
    V = n(388032),
    J = n(468918);
function X(e) {
    var t;
    let { onClose: n, transitionState: l, sourceApplication: s, analyticsLocations: X = [], selectSource: K = !0 } = e,
        Y = i.useRef(performance.now()),
        q = (0, f.e7)(
            [S.Z],
            () =>
                S.Z.getUseSystemScreensharePicker() &&
                ((0, w.isLinux)() ||
                    ((0, w.isMac)() && a().satisfies(null === _.Z || void 0 === _.Z ? void 0 : _.Z.os.release, W.jR))),
        ),
        { analyticsLocations: Q } = (0, v.ZP)(X, x.Z.GO_LIVE_MODAL_V2),
        $ = (0, f.e7)([C.default], () => C.default.getCurrentUser()),
        ee = (0, N.Z)(),
        { state: et, dispatch: en } = (0, k.Ti)(s, $, ee),
        er = (0, m.Z)((0, w.isWindows)() && null != s && K ? "confirm" : "source_select");
    (0, H.Z)(q, en, "confirm" === er);
    let ei = !P.ZP.canStreamQuality(P.ZP.StreamQuality.HIGH, $),
        el = !(0, w.isLinux)(),
        eo = "confirm" === er,
        es = !K && null != s && !eo,
        ea = eo || et.sourceType === u.vA.CAMERA,
        ec = q && et.sourceType !== u.vA.CAMERA,
        ed = i.useMemo(() => {
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
        { sourceType: eu } = et,
        ef = i.useCallback(
            async (e) => {
                b.eo.updateSetting(et.notifyFriends), b.I0.updateSetting(et.hidePreview);
                let [t, r] = await (0, E.Z)(e.hasOwnProperty("pid") ? e.pid : e, {
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
    async function ep(e) {
        (await (0, g.Z)({ channelId: e })) && null != s && ef(s);
    }
    let eh = i.useCallback(() => {
        var e;
        ef({
            id: "prepicked:" + et.nativeSourceType,
            name: null != (e = Z.ZP.getLastPickedContentTitle()) ? e : V.intl.string(V.t.KKcy95),
            url: "",
        });
    }, [ef, et.nativeSourceType]);
    return (0, r.jsx)(k.Yw, {
        state: et,
        dispatch: en,
        children: (0, r.jsxs)(p.Y0X, {
            impression: {
                impressionName: c.ImpressionNames.GO_LIVE_MODAL,
                impressionProperties: {
                    location_stack: Q,
                    application_id: (0, w.isWindows)() ? (null == (t = (0, I.Z)(j.ZP, O.Z)) ? void 0 : t.id) : void 0,
                    parent_media_session_id: y.Z.getMediaSessionId(),
                },
            },
            className: o()(J.root, {
                [J.nativePicker]: q && null == s,
                [J.channelSelector]: es,
                [J.confirmStep]: eo,
            }),
            size: p.CgR.DYNAMIC,
            transitionState: l,
            parentComponent: "GoLiveModalV2",
            children: [
                es
                    ? (0, r.jsx)(R.Z, {
                          className: o()(J.channelSelectorComponent, J.withFooter),
                          onSelectChannel: ep,
                      })
                    : eo
                      ? (0, r.jsx)(M.Z, {})
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(p.xBx, {
                                    separator: !1,
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
                                (0, r.jsx)(p.hzk, {
                                    className: J.content,
                                    children:
                                        q && eu !== u.vA.CAMERA
                                            ? (0, r.jsx)(D.Z, { onSourceSelect: eh })
                                            : (0, r.jsx)(B.Z, {
                                                  onClick: function (e) {
                                                      var t;
                                                      (null == (t = e.id) ? void 0 : t.startsWith(u.vA.CAMERA))
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
                (0, r.jsxs)(p.mzw, {
                    className: o()(J.footer, { [J.footerShadow]: !ei && eo }),
                    separator: !1,
                    direction: d.k.Direction.VERTICAL,
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
                                                    (0, T.t)(), (0, T.T)(et.nativeSourceType);
                                                },
                                                align: "right",
                                                ctaText: V.intl.string(V.t.FiBjwU),
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
                                                ctaText: V.intl.string(z.default["5AyH/p"]),
                                            }),
                                        (!ei || !(ea || ec)) && (0, r.jsx)(L.Z, { align: "right" }),
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
