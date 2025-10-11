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
    m = n(579806),
    _ = n(89425),
    g = n(100527),
    x = n(906732),
    v = n(594190),
    j = n(695346),
    b = n(131951),
    S = n(19780),
    y = n(594174),
    O = n(449224),
    C = n(358085),
    w = n(74538),
    P = n(299570),
    Z = n(960861),
    I = n(989941),
    E = n(562224),
    T = n(544753),
    N = n(853030),
    A = n(560749),
    R = n(485299),
    M = n(615161),
    k = n(289989),
    D = n(328242),
    B = n(565574),
    L = n(286420),
    G = n(173044),
    U = n(801604),
    F = n(577257),
    H = n(70722),
    W = n(637824),
    z = n(388032),
    V = n(468918);
function J(e) {
    var t;
    let { onClose: n, transitionState: l, sourceApplication: o, analyticsLocations: J = [], selectSource: X = !0 } = e,
        K = i.useRef(performance.now()),
        Y = (0, f.e7)(
            [b.Z],
            () =>
                b.Z.getUseSystemScreensharePicker() &&
                ((0, C.isLinux)() ||
                    ((0, C.isMac)() && a().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, H.jR))),
        ),
        { analyticsLocations: q } = (0, x.ZP)(J, g.Z.GO_LIVE_MODAL_V2),
        Q = (0, f.e7)([y.default], () => y.default.getCurrentUser()),
        $ = (0, T.Z)(),
        { state: ee, dispatch: et } = (0, M.Ti)(
            o,
            Q,
            $,
            (0, C.isWindows)() && null != o && X ? "confirm" : "source_select",
        );
    (0, F.Z)(Y, et, "confirm" === ee.modalStep);
    let en = !w.ZP.canStreamQuality(w.ZP.StreamQuality.HIGH, Q),
        er = !(0, C.isLinux)(),
        ei = "confirm" === ee.modalStep,
        el = !X && null != o && !ei,
        es = Y && ee.sourceType !== u.vA.CAMERA,
        eo = i.useMemo(() => {
            let e = [
                {
                    name: z.intl.string(z.t.tHoi7u),
                    value: u.vA.WINDOW,
                    icon: p.GON,
                },
                {
                    name: z.intl.string(z.t.MhJ43N),
                    value: u.vA.CAMERA,
                    icon: p.Odl,
                },
            ];
            return (
                Y ||
                    e.splice(1, 0, {
                        name: z.intl.string(z.t.slM8rK),
                        value: u.vA.SCREEN,
                        icon: p.pzj,
                    }),
                e
            );
        }, [Y]),
        { sourceType: ea } = ee,
        ec = i.useCallback(
            async (e) => {
                j.eo.updateSetting(ee.notifyFriends), j.I0.updateSetting(ee.hidePreview);
                let [t, r] = await (0, E.Z)(e.hasOwnProperty("pid") ? e.pid : e, {
                    preset: ee.preset,
                    fps: ee.fps,
                    resolution: ee.resolution,
                    soundshareEnabled: !ee.muteStreamAudio,
                    previewDisabled: ee.hidePreview,
                    goLiveModalDurationMs: performance.now() - K.current,
                    audioSourceId: ee.audioSourceId,
                    analyticsLocations: q,
                });
                if (t) return n();
                "no permission" === r &&
                    h.Z.show({
                        title: z.intl.string(z.t["X+mXen"]),
                        body: z.intl.string(z.t.MIJCzs),
                    }),
                    n();
            },
            [n, ee, q],
        );
    async function ed(e) {
        (await (0, _.Z)({ channelId: e })) && null != o && ec(o);
    }
    let eu = i.useCallback(() => {
        var e;
        ec({
            id: "prepicked:" + ee.nativeSourceType,
            name: null != (e = Z.ZP.getLastPickedContentTitle()) ? e : z.intl.string(z.t["KKcy9/"]),
            url: "",
        });
    }, [ec, ee.nativeSourceType]);
    return (0, r.jsx)(M.Yw, {
        state: ee,
        dispatch: et,
        children: (0, r.jsxs)(p.Y0X, {
            impression: {
                impressionName: c.ImpressionNames.GO_LIVE_MODAL,
                impressionProperties: {
                    location_stack: q,
                    application_id: (0, C.isWindows)() ? (null == (t = (0, I.Z)(v.ZP, O.Z)) ? void 0 : t.id) : void 0,
                    parent_media_session_id: S.Z.getMediaSessionId(),
                },
            },
            className: s()(V.root, {
                [V.nativePicker]: Y && null == o,
                [V.channelSelector]: el,
                [V.confirmStep]: ei,
            }),
            size: p.CgR.DYNAMIC,
            transitionState: l,
            parentComponent: "GoLiveModalV2",
            children: [
                el
                    ? (0, r.jsx)(A.Z, {
                          className: s()(V.channelSelectorComponent, V.withFooter),
                          onSelectChannel: ed,
                      })
                    : ei
                      ? (0, r.jsx)(R.Z, { hideBackButton: null != o })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(p.xBx, {
                                    separator: !1,
                                    className: V.header,
                                    children: (0, r.jsx)(p.sY7, {
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
                                (0, r.jsx)(p.hzk, {
                                    className: V.content,
                                    children:
                                        Y && ea !== u.vA.CAMERA
                                            ? (0, r.jsx)(k.Z, { onSourceSelect: eu })
                                            : (0, r.jsx)(D.Z, {
                                                  onClick: function (e) {
                                                      return ec(e);
                                                  },
                                              }),
                                }),
                            ],
                        }),
                (0, r.jsxs)(p.mzw, {
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
                                        en && (0, r.jsx)(L.Z, { onClose: n }),
                                        es &&
                                            !ei &&
                                            (0, r.jsx)(N.Z, {
                                                mainCTADisabled: !er && "" === ee.nativeSourceType,
                                                mainCTAOnClick: () => {
                                                    (0, P.t)(), (0, P.T)(ee.nativeSourceType);
                                                },
                                                align: "right",
                                                ctaText: z.intl.string(z.t.FiBjwc),
                                                hideOptionsButton: !en,
                                            }),
                                        ei &&
                                            !es &&
                                            (0, r.jsx)(N.Z, {
                                                mainCTADisabled: null == ee.selectedSource,
                                                mainCTAOnClick: () => {
                                                    null != ee.selectedChannel
                                                        ? ed(ee.selectedChannel)
                                                        : null != ee.selectedSource && ec(ee.selectedSource);
                                                },
                                                align: "right",
                                                hideOptionsButton: !en,
                                                ctaText: z.intl.string(W.default["5AyH/v"]),
                                            }),
                                        (!en || !(ei || es)) && (0, r.jsx)(B.Z, { align: "right" }),
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
