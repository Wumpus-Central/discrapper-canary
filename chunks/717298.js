n.d(t, { Z: () => $ }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(524979),
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
    b = n(679613),
    S = n(72897),
    C = n(695346),
    y = n(131951),
    O = n(19780),
    Z = n(594174),
    I = n(449224),
    w = n(358085),
    N = n(74538),
    T = n(668519),
    E = n(299570),
    P = n(989941),
    R = n(562224),
    k = n(586290),
    A = n(544753),
    M = n(853030),
    L = n(560749),
    D = n(311924),
    B = n(485299),
    U = n(615161),
    G = n(289989),
    W = n(328242),
    z = n(565574),
    F = n(286420),
    H = n(51708),
    V = n(801604),
    Y = n(577257),
    X = n(70722),
    J = n(676462),
    K = n(388032),
    q = n(321910);
function Q(e) {
    return e * (2 - e);
}
function $(e) {
    var t;
    let { onClose: n, transitionState: l, sourceApplication: a, selectSource: $ = !0 } = e,
        {
            twoClickVariant: ee,
            twoStepModal: et,
            showSDHDUpsell: en,
            footerSlideIn: er
        } = (0, T.a)({
            location: 'golivemodalv2',
            autoTrackExposure: !1
        }),
        ei = i.useRef(performance.now()),
        el = (0, m.e7)([y.Z], () => y.Z.getUseSystemScreensharePicker() && ((0, w.isLinux)() || ((0, w.isMac)() && c().satisfies(null === x.Z || void 0 === x.Z ? void 0 : x.Z.os.release, X.jR)))),
        { analyticsLocations: es } = (0, v.ZP)(_.Z.GO_LIVE_MODAL_V2),
        eo = (0, m.e7)([Z.default], () => Z.default.getCurrentUser()),
        ea = (0, A.Z)(),
        { state: ec, dispatch: ed } = (0, U.Ti)(a, eo, ea, (0, w.isWindows)() && null != a && $ ? 'confirm' : 'source_select'),
        { sortDevicesByFrecency: eu } = (0, b._)({ location: 'GoLiveModalV2' }),
        ef = (0, S.zX)({ sortDevicesByFrecency: eu });
    (0, Y.Z)(el, ed, 'confirm' === ec.modalStep);
    let em = !N.ZP.canStreamQuality(N.ZP.StreamQuality.HIGH, eo),
        eh = er && !el,
        ep = (0, h.q_F)(
            {
                height: eh && null == ec.selectedSource ? 0 : 76 + 40 * !!em,
                config: {
                    easing: Q,
                    duration: 200
                }
            },
            'respect-motion-settings'
        ),
        ex = !(0, w.isLinux)(),
        eg = 'confirm' === ec.modalStep,
        e_ = !$ && null != a && !eg,
        ev = eg || (!e_ && ee && (!el || ec.sourceType === f.vA.CAMERA)),
        ej = el && ec.sourceType !== f.vA.CAMERA,
        eb = el || !(0, w.isWindows)() || !et || eg,
        eS = en && em,
        eC = eg && et,
        ey = i.useMemo(() => {
            let e = [
                {
                    name: K.intl.string(K.t.tHoi7u),
                    value: f.vA.WINDOW,
                    icon: h.GON
                },
                {
                    name: K.intl.string(K.t.MhJ43N),
                    value: f.vA.CAMERA,
                    icon: h.Odl
                }
            ];
            return (
                el ||
                    e.splice(1, 0, {
                        name: K.intl.string(K.t.slM8rK),
                        value: f.vA.SCREEN,
                        icon: h.pzj
                    }),
                e
            );
        }, [el]),
        { sourceType: eO } = ec,
        eZ = i.useCallback(
            async (e) => {
                C.eo.updateSetting(ec.notifyFriends), C.I0.updateSetting(ec.hidePreview);
                let [t, r] = await (0, R.Z)(e.hasOwnProperty('pid') ? e.pid : e, {
                    preset: ec.preset,
                    fps: ec.fps,
                    resolution: ec.resolution,
                    soundshareEnabled: !ec.muteStreamAudio,
                    previewDisabled: ec.hidePreview,
                    goLiveModalDurationMs: performance.now() - ei.current,
                    audioSourceId: ec.audioSourceId
                });
                if (t) return n();
                'no permission' === r &&
                    p.Z.show({
                        title: K.intl.string(K.t['X+mXen']),
                        body: K.intl.string(K.t.MIJCzs)
                    }),
                    n();
            },
            [n, ec]
        );
    async function eI(e) {
        if ((0, w.isWindows)() && et && 'source_select' === ec.modalStep) {
            ed({
                type: 'set_step',
                step: 'confirm'
            }),
                ed({
                    type: 'set_selected_channel',
                    channelId: e
                });
            return;
        }
        (await (0, g.Z)({ channelId: e })) && null != a && eZ(a);
    }
    let ew = i.useCallback(() => {
            eZ({
                id: 'prepicked:' + ec.nativeSourceType,
                name: K.intl.string(K.t['KKcy9/']),
                url: ''
            });
        }, [eZ, ec.nativeSourceType]),
        eN = (0, r.jsxs)(h.mzw, {
            className: s()(q.footer, { [q.footerShadow]: !em && eg }),
            separator: !1,
            direction: u.k.Direction.VERTICAL,
            children: [
                (0, r.jsxs)('div', {
                    className: q.footerContent,
                    children: [
                        (0, r.jsx)(V.Z, { nativePickerEnabled: el }),
                        (0, r.jsxs)('div', {
                            className: q.rightButtonGroup,
                            children: [
                                eS && (0, r.jsx)(F.Z, { onClose: n }),
                                ej &&
                                    !ev &&
                                    (0, r.jsx)(M.Z, {
                                        mainCTADisabled: !ex && '' === ec.nativeSourceType,
                                        mainCTAOnClick: () => {
                                            (0, E.t)(), (0, E.T)(ec.nativeSourceType);
                                        },
                                        align: 'right',
                                        ctaText: K.intl.string(K.t.FiBjwc),
                                        hideOptionsButton: !eS
                                    }),
                                ev &&
                                    !ej &&
                                    (0, r.jsx)(M.Z, {
                                        mainCTADisabled: null == ec.selectedSource,
                                        mainCTAOnClick: () => {
                                            null != ec.selectedChannel ? eI(ec.selectedChannel) : null != ec.selectedSource && eZ(ec.selectedSource);
                                        },
                                        align: 'right',
                                        hideOptionsButton: !eS,
                                        ctaText: K.intl.string(J.default['5AyH/v'])
                                    }),
                                (!eS || !(ev || ej)) &&
                                    (0, r.jsx)(z.Z, {
                                        useSimplifiedMenu: eC,
                                        align: 'right'
                                    })
                            ]
                        })
                    ]
                }),
                em && (0, r.jsx)(H.Z, { onClose: n })
            ]
        }),
        eT = eh
            ? (0, r.jsx)(o.animated.div, {
                  style: ep,
                  children: eN
              })
            : eN;
    return (0, r.jsx)(U.Yw, {
        state: ec,
        dispatch: ed,
        children: (0, r.jsxs)(h.Y0X, {
            impression: {
                impressionName: d.ImpressionNames.GO_LIVE_MODAL,
                impressionProperties: {
                    location_stack: es,
                    application_id: (0, w.isWindows)() ? (null == (t = (0, P.Z)(j.ZP, I.Z)) ? void 0 : t.id) : void 0,
                    parent_media_session_id: O.Z.getMediaSessionId()
                }
            },
            className: s()(q.root, {
                [q.nativePicker]: el && null == a,
                [q.channelSelector]: e_,
                [q.confirmStep]: eg
            }),
            size: h.CgR.DYNAMIC,
            transitionState: l,
            parentComponent: 'GoLiveModalV2',
            children: [
                e_
                    ? (0, r.jsx)(L.Z, {
                          className: s()(q.channelSelectorComponent, { [q.withFooter]: eb }),
                          onSelectChannel: eI
                      })
                    : eg
                      ? (0, r.jsx)(B.Z, { hideBackButton: null != a })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(h.xBx, {
                                    separator: !1,
                                    className: q.header,
                                    children: (0, r.jsx)(h.sY7, {
                                        className: q.segmentedControl,
                                        value: eO,
                                        look: 'pill',
                                        optionClassName: q.segmentedControlOption,
                                        onChange: (e) => {
                                            let { value: t } = e;
                                            return ed({
                                                type: 'set_source_type',
                                                sourceType: t
                                            });
                                        },
                                        options: ey
                                    })
                                }),
                                (0, r.jsx)(h.hzk, {
                                    className: q.content,
                                    children:
                                        el && eO !== f.vA.CAMERA
                                            ? (0, r.jsx)(G.Z, { onSourceSelect: ew })
                                            : (0, r.jsx)(W.Z, {
                                                  onClick: function (e) {
                                                      function t() {
                                                          var t;
                                                          if (!(null == (t = e.id) ? void 0 : t.startsWith(f.vA.CAMERA))) return;
                                                          let n = (0, k.K)(e.id, ec.deviceSources, ef);
                                                          ed({
                                                              type: 'set_audio_source',
                                                              audioSourceId: null != n ? n : void 0
                                                          });
                                                      }
                                                      if (et && (0, w.isWindows)()) {
                                                          t(),
                                                              ed({
                                                                  type: 'set_selected_source',
                                                                  source: e
                                                              }),
                                                              ed({
                                                                  type: 'set_step',
                                                                  step: 'confirm'
                                                              });
                                                          return;
                                                      }
                                                      if (!ee) return eZ(e);
                                                      t(),
                                                          ed({
                                                              type: 'set_selected_source',
                                                              source: e
                                                          });
                                                  }
                                              })
                                })
                            ]
                        }),
                eC && (0, r.jsx)(D.Z, {}),
                eb && eT
            ]
        })
    });
}
