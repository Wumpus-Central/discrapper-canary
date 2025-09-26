n.d(t, { Z: () => Y }), n(388685);
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
    m = n(481060),
    h = n(668781),
    p = n(579806),
    x = n(89425),
    g = n(100527),
    _ = n(906732),
    v = n(594190),
    j = n(695346),
    b = n(131951),
    y = n(19780),
    S = n(594174),
    C = n(449224),
    O = n(358085),
    w = n(74538),
    Z = n(299570),
    I = n(960861),
    N = n(989941),
    P = n(562224),
    T = n(544753),
    E = n(853030),
    R = n(560749),
    A = n(485299),
    k = n(615161),
    M = n(289989),
    D = n(328242),
    L = n(565574),
    B = n(286420),
    G = n(173044),
    U = n(801604),
    W = n(577257),
    z = n(70722),
    F = n(637824),
    H = n(388032),
    V = n(468918);
function Y(e) {
    var t;
    let { onClose: n, transitionState: l, sourceApplication: o, analyticsLocations: Y = [], selectSource: J = !0 } = e,
        X = i.useRef(performance.now()),
        K = (0, f.e7)(
            [b.Z],
            () =>
                b.Z.getUseSystemScreensharePicker() &&
                ((0, O.isLinux)() ||
                    ((0, O.isMac)() && a().satisfies(null === p.Z || void 0 === p.Z ? void 0 : p.Z.os.release, z.jR))),
        ),
        { analyticsLocations: q } = (0, _.ZP)(Y, g.Z.GO_LIVE_MODAL_V2),
        Q = (0, f.e7)([S.default], () => S.default.getCurrentUser()),
        $ = (0, T.Z)(),
        { state: ee, dispatch: et } = (0, k.Ti)(
            o,
            Q,
            $,
            (0, O.isWindows)() && null != o && J ? "confirm" : "source_select",
        );
    (0, W.Z)(K, et, "confirm" === ee.modalStep);
    let en = !w.ZP.canStreamQuality(w.ZP.StreamQuality.HIGH, Q),
        er = !(0, O.isLinux)(),
        ei = "confirm" === ee.modalStep,
        el = !J && null != o && !ei,
        es = K && ee.sourceType !== u.vA.CAMERA,
        eo = i.useMemo(() => {
            let e = [
                {
                    name: H.intl.string(H.t.tHoi7u),
                    value: u.vA.WINDOW,
                    icon: m.GON,
                },
                {
                    name: H.intl.string(H.t.MhJ43N),
                    value: u.vA.CAMERA,
                    icon: m.Odl,
                },
            ];
            return (
                K ||
                    e.splice(1, 0, {
                        name: H.intl.string(H.t.slM8rK),
                        value: u.vA.SCREEN,
                        icon: m.pzj,
                    }),
                e
            );
        }, [K]),
        { sourceType: ea } = ee,
        ec = i.useCallback(
            async (e) => {
                j.eo.updateSetting(ee.notifyFriends), j.I0.updateSetting(ee.hidePreview);
                let [t, r] = await (0, P.Z)(e.hasOwnProperty("pid") ? e.pid : e, {
                    preset: ee.preset,
                    fps: ee.fps,
                    resolution: ee.resolution,
                    soundshareEnabled: !ee.muteStreamAudio,
                    previewDisabled: ee.hidePreview,
                    goLiveModalDurationMs: performance.now() - X.current,
                    audioSourceId: ee.audioSourceId,
                    analyticsLocations: q,
                });
                if (t) return n();
                "no permission" === r &&
                    h.Z.show({
                        title: H.intl.string(H.t["X+mXen"]),
                        body: H.intl.string(H.t.MIJCzs),
                    }),
                    n();
            },
            [n, ee, q],
        );
    async function ed(e) {
        (await (0, x.Z)({ channelId: e })) && null != o && ec(o);
    }
    let eu = i.useCallback(() => {
        var e;
        ec({
            id: "prepicked:" + ee.nativeSourceType,
            name: null != (e = I.ZP.getLastPickedContentTitle()) ? e : H.intl.string(H.t["KKcy9/"]),
            url: "",
        });
    }, [ec, ee.nativeSourceType]);
    return (0, r.jsx)(k.Yw, {
        state: ee,
        dispatch: et,
        children: (0, r.jsxs)(m.Y0X, {
            impression: {
                impressionName: c.ImpressionNames.GO_LIVE_MODAL,
                impressionProperties: {
                    location_stack: q,
                    application_id: (0, O.isWindows)() ? (null == (t = (0, N.Z)(v.ZP, C.Z)) ? void 0 : t.id) : void 0,
                    parent_media_session_id: y.Z.getMediaSessionId(),
                },
            },
            className: s()(V.root, {
                [V.nativePicker]: K && null == o,
                [V.channelSelector]: el,
                [V.confirmStep]: ei,
            }),
            size: m.CgR.DYNAMIC,
            transitionState: l,
            parentComponent: "GoLiveModalV2",
            children: [
                el
                    ? (0, r.jsx)(R.Z, {
                          className: s()(V.channelSelectorComponent, V.withFooter),
                          onSelectChannel: ed,
                      })
                    : ei
                      ? (0, r.jsx)(A.Z, { hideBackButton: null != o })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(m.xBx, {
                                    separator: !1,
                                    className: V.header,
                                    children: (0, r.jsx)(m.sY7, {
                                        className: V.segmentedControl,
                                        value: ea,
                                        look: "pill",
                                        optionClassName: V.segmentedControlOption,
                                        onChange: (e) => {
                                            let { value: t } = e;
                                            return et({
                                                type: "set_source_type",
                                                sourceType: t,
                                            });
                                        },
                                        options: eo,
                                    }),
                                }),
                                (0, r.jsx)(m.hzk, {
                                    className: V.content,
                                    children:
                                        K && ea !== u.vA.CAMERA
                                            ? (0, r.jsx)(M.Z, { onSourceSelect: eu })
                                            : (0, r.jsx)(D.Z, {
                                                  onClick: function (e) {
                                                      return ec(e);
                                                  },
                                              }),
                                }),
                            ],
                        }),
                (0, r.jsxs)(m.mzw, {
                    className: s()(V.footer, { [V.footerShadow]: !en && ei }),
                    separator: !1,
                    direction: d.k.Direction.VERTICAL,
                    children: [
                        (0, r.jsxs)("div", {
                            className: V.footerContent,
                            children: [
                                (0, r.jsx)(U.Z, {}),
                                (0, r.jsxs)("div", {
                                    className: V.rightButtonGroup,
                                    children: [
                                        en && (0, r.jsx)(B.Z, { onClose: n }),
                                        es &&
                                            !ei &&
                                            (0, r.jsx)(E.Z, {
                                                mainCTADisabled: !er && "" === ee.nativeSourceType,
                                                mainCTAOnClick: () => {
                                                    (0, Z.t)(), (0, Z.T)(ee.nativeSourceType);
                                                },
                                                align: "right",
                                                ctaText: H.intl.string(H.t.FiBjwc),
                                                hideOptionsButton: !en,
                                            }),
                                        ei &&
                                            !es &&
                                            (0, r.jsx)(E.Z, {
                                                mainCTADisabled: null == ee.selectedSource,
                                                mainCTAOnClick: () => {
                                                    null != ee.selectedChannel
                                                        ? ed(ee.selectedChannel)
                                                        : null != ee.selectedSource && ec(ee.selectedSource);
                                                },
                                                align: "right",
                                                hideOptionsButton: !en,
                                                ctaText: H.intl.string(F.default["5AyH/v"]),
                                            }),
                                        (!en || !(ei || es)) && (0, r.jsx)(L.Z, { align: "right" }),
                                    ],
                                }),
                            ],
                        }),
                        en && (0, r.jsx)(G.Z, { onClose: n }),
                    ],
                }),
            ],
        }),
    });
}
