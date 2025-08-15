n.d(t, { Z: () => ee }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    o = n(815061),
    a = n(209739),
    c = n.n(a),
    d = n(990547),
    u = n(435935),
    f = n(268146),
    m = n(442837),
    h = n(481060),
    p = n(668781),
    x = n(579806),
    g = n(89425),
    _ = n(100527),
    v = n(906732),
    j = n(594190),
    S = n(72897),
    b = n(695346),
    C = n(131951),
    y = n(19780),
    O = n(594174),
    I = n(449224),
    Z = n(358085),
    w = n(74538),
    N = n(668519),
    T = n(299570),
    E = n(960861),
    P = n(989941),
    R = n(562224),
    A = n(586290),
    M = n(544753),
    k = n(853030),
    L = n(560749),
    D = n(311924),
    B = n(485299),
    U = n(615161),
    G = n(289989),
    W = n(328242),
    F = n(565574),
    H = n(286420),
    z = n(173044),
    V = n(801604),
    Y = n(577257),
    J = n(70722),
    X = n(65154),
    K = n(637824),
    q = n(388032),
    Q = n(468918);
function $(e) {
    return e * (2 - e);
}
function ee(e) {
    var t;
    let {
            onClose: n,
            transitionState: l,
            sourceApplication: a,
            analyticsLocations: ee = [],
            selectSource: et = !0,
        } = e,
        {
            twoClickVariant: en,
            twoStepModal: er,
            showSDHDUpsell: ei,
            footerSlideIn: el,
        } = (0, N.a)({
            location: "golivemodalv2",
            autoTrackExposure: !1,
        }),
        es = i.useRef(performance.now()),
        eo = (0, m.e7)(
            [C.Z],
            () =>
                C.Z.getUseSystemScreensharePicker() &&
                ((0, Z.isLinux)() ||
                    ((0, Z.isMac)() && c().satisfies(null === x.Z || void 0 === x.Z ? void 0 : x.Z.os.release, J.jR))),
        ),
        { analyticsLocations: ea } = (0, v.ZP)(ee, _.Z.GO_LIVE_MODAL_V2),
        ec = (0, m.e7)([O.default], () => O.default.getCurrentUser()),
        ed = (0, M.Z)(),
        { state: eu, dispatch: ef } = (0, U.Ti)(
            a,
            ec,
            ed,
            (0, Z.isWindows)() && null != a && et ? "confirm" : "source_select",
        ),
        [em, eh] = (0, S.Ls)(X.h7.AUDIO_INPUT, { location: "GoLiveModalV2" }),
        ep = em.concat(eh);
    (0, Y.Z)(eo, ef, "confirm" === eu.modalStep);
    let ex = !w.ZP.canStreamQuality(w.ZP.StreamQuality.HIGH, ec),
        eg = el && !eo,
        e_ = (0, h.q_F)(
            {
                height: eg && null == eu.selectedSource ? 0 : 76 + 40 * !!ex,
                config: {
                    easing: $,
                    duration: 200,
                },
            },
            "respect-motion-settings",
        ),
        ev = !(0, Z.isLinux)(),
        ej = "confirm" === eu.modalStep,
        eS = !et && null != a && !ej,
        eb = ej || (!eS && en && (!eo || eu.sourceType === f.vA.CAMERA)),
        eC = eo && eu.sourceType !== f.vA.CAMERA,
        ey = eo || !(0, Z.isWindows)() || !er || ej,
        eO = ei && ex,
        eI = ej && er,
        eZ = i.useMemo(() => {
            let e = [
                {
                    name: q.intl.string(q.t.tHoi7u),
                    value: f.vA.WINDOW,
                    icon: h.GON,
                },
                {
                    name: q.intl.string(q.t.MhJ43N),
                    value: f.vA.CAMERA,
                    icon: h.Odl,
                },
            ];
            return (
                eo ||
                    e.splice(1, 0, {
                        name: q.intl.string(q.t.slM8rK),
                        value: f.vA.SCREEN,
                        icon: h.pzj,
                    }),
                e
            );
        }, [eo]),
        { sourceType: ew } = eu,
        eN = i.useCallback(
            async (e) => {
                b.eo.updateSetting(eu.notifyFriends), b.I0.updateSetting(eu.hidePreview);
                let [t, r] = await (0, R.Z)(e.hasOwnProperty("pid") ? e.pid : e, {
                    preset: eu.preset,
                    fps: eu.fps,
                    resolution: eu.resolution,
                    soundshareEnabled: !eu.muteStreamAudio,
                    previewDisabled: eu.hidePreview,
                    goLiveModalDurationMs: performance.now() - es.current,
                    audioSourceId: eu.audioSourceId,
                    analyticsLocations: ea,
                });
                if (t) return n();
                "no permission" === r &&
                    p.Z.show({
                        title: q.intl.string(q.t["X+mXen"]),
                        body: q.intl.string(q.t.MIJCzs),
                    }),
                    n();
            },
            [n, eu, ea],
        );
    async function eT(e) {
        if ((0, Z.isWindows)() && er && "source_select" === eu.modalStep) {
            ef({
                type: "set_step",
                step: "confirm",
            }),
                ef({
                    type: "set_selected_channel",
                    channelId: e,
                });
            return;
        }
        (await (0, g.Z)({ channelId: e })) && null != a && eN(a);
    }
    let eE = i.useCallback(() => {
            var e;
            eN({
                id: "prepicked:" + eu.nativeSourceType,
                name: null != (e = E.ZP.getLastPickedContentTitle()) ? e : q.intl.string(q.t["KKcy9/"]),
                url: "",
            });
        }, [eN, eu.nativeSourceType]),
        eP = (0, r.jsxs)(h.mzw, {
            className: s()(Q.footer, { [Q.footerShadow]: !ex && ej }),
            separator: !1,
            direction: u.k.Direction.VERTICAL,
            children: [
                (0, r.jsxs)("div", {
                    className: Q.footerContent,
                    children: [
                        (0, r.jsx)(V.Z, { nativePickerEnabled: eo }),
                        (0, r.jsxs)("div", {
                            className: Q.rightButtonGroup,
                            children: [
                                eO && (0, r.jsx)(H.Z, { onClose: n }),
                                eC &&
                                    !eb &&
                                    (0, r.jsx)(k.Z, {
                                        mainCTADisabled: !ev && "" === eu.nativeSourceType,
                                        mainCTAOnClick: () => {
                                            (0, T.t)(), (0, T.T)(eu.nativeSourceType);
                                        },
                                        align: "right",
                                        ctaText: q.intl.string(q.t.FiBjwc),
                                        hideOptionsButton: !eO,
                                    }),
                                eb &&
                                    !eC &&
                                    (0, r.jsx)(k.Z, {
                                        mainCTADisabled: null == eu.selectedSource,
                                        mainCTAOnClick: () => {
                                            null != eu.selectedChannel
                                                ? eT(eu.selectedChannel)
                                                : null != eu.selectedSource && eN(eu.selectedSource);
                                        },
                                        align: "right",
                                        hideOptionsButton: !eO,
                                        ctaText: q.intl.string(K.default["5AyH/v"]),
                                    }),
                                (!eO || !(eb || eC)) &&
                                    (0, r.jsx)(F.Z, {
                                        useSimplifiedMenu: eI,
                                        align: "right",
                                    }),
                            ],
                        }),
                    ],
                }),
                ex && (0, r.jsx)(z.Z, { onClose: n }),
            ],
        }),
        eR = eg
            ? (0, r.jsx)(o.animated.div, {
                  style: e_,
                  children: eP,
              })
            : eP;
    return (0, r.jsx)(U.Yw, {
        state: eu,
        dispatch: ef,
        children: (0, r.jsxs)(h.Y0X, {
            impression: {
                impressionName: d.ImpressionNames.GO_LIVE_MODAL,
                impressionProperties: {
                    location_stack: ea,
                    application_id: (0, Z.isWindows)() ? (null == (t = (0, P.Z)(j.ZP, I.Z)) ? void 0 : t.id) : void 0,
                    parent_media_session_id: y.Z.getMediaSessionId(),
                },
            },
            className: s()(Q.root, {
                [Q.nativePicker]: eo && null == a,
                [Q.channelSelector]: eS,
                [Q.confirmStep]: ej,
            }),
            size: h.CgR.DYNAMIC,
            transitionState: l,
            parentComponent: "GoLiveModalV2",
            children: [
                eS
                    ? (0, r.jsx)(L.Z, {
                          className: s()(Q.channelSelectorComponent, { [Q.withFooter]: ey }),
                          onSelectChannel: eT,
                      })
                    : ej
                      ? (0, r.jsx)(B.Z, { hideBackButton: null != a })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(h.xBx, {
                                    separator: !1,
                                    className: Q.header,
                                    children: (0, r.jsx)(h.sY7, {
                                        className: Q.segmentedControl,
                                        value: ew,
                                        look: "pill",
                                        optionClassName: Q.segmentedControlOption,
                                        onChange: (e) => {
                                            let { value: t } = e;
                                            return ef({
                                                type: "set_source_type",
                                                sourceType: t,
                                            });
                                        },
                                        options: eZ,
                                    }),
                                }),
                                (0, r.jsx)(h.hzk, {
                                    className: Q.content,
                                    children:
                                        eo && ew !== f.vA.CAMERA
                                            ? (0, r.jsx)(G.Z, { onSourceSelect: eE })
                                            : (0, r.jsx)(W.Z, {
                                                  onClick: function (e) {
                                                      function t() {
                                                          var t;
                                                          if (
                                                              !(null == (t = e.id) ? void 0 : t.startsWith(f.vA.CAMERA))
                                                          )
                                                              return;
                                                          let n = (0, A.K)(e.id, eu.deviceSources, ep);
                                                          ef({
                                                              type: "set_audio_source",
                                                              audioSourceId: null != n ? n : void 0,
                                                          });
                                                      }
                                                      if (er && (0, Z.isWindows)()) {
                                                          t(),
                                                              ef({
                                                                  type: "set_selected_source",
                                                                  source: e,
                                                              }),
                                                              ef({
                                                                  type: "set_step",
                                                                  step: "confirm",
                                                              });
                                                          return;
                                                      }
                                                      if (!en) return eN(e);
                                                      t(),
                                                          ef({
                                                              type: "set_selected_source",
                                                              source: e,
                                                          });
                                                  },
                                              }),
                                }),
                            ],
                        }),
                eI && (0, r.jsx)(D.Z, {}),
                ey && eR,
            ],
        }),
    });
}
