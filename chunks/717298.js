(n.d(t, { Z: () => $ }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(564854),
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
    E = n(989941),
    P = n(562224),
    R = n(586290),
    A = n(544753),
    M = n(853030),
    k = n(560749),
    L = n(311924),
    D = n(485299),
    B = n(615161),
    U = n(289989),
    G = n(328242),
    W = n(565574),
    F = n(286420),
    z = n(51708),
    H = n(801604),
    V = n(577257),
    Y = n(70722),
    J = n(65154),
    X = n(676462),
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
        } = (0, N.a)({
            location: 'golivemodalv2',
            autoTrackExposure: !1
        }),
        ei = i.useRef(performance.now()),
        el = (0, m.e7)([C.Z], () => C.Z.getUseSystemScreensharePicker() && ((0, Z.isLinux)() || ((0, Z.isMac)() && c().satisfies(null === x.Z || void 0 === x.Z ? void 0 : x.Z.os.release, Y.jR)))),
        { analyticsLocations: es } = (0, v.ZP)(_.Z.GO_LIVE_MODAL_V2),
        eo = (0, m.e7)([O.default], () => O.default.getCurrentUser()),
        ea = (0, A.Z)(),
        { state: ec, dispatch: ed } = (0, B.Ti)(a, eo, ea, (0, Z.isWindows)() && null != a && $ ? 'confirm' : 'source_select'),
        [eu, ef] = (0, S.L)(J.h7.AUDIO_INPUT, { location: 'GoLiveModalV2' }),
        em = eu.concat(ef);
    (0, V.Z)(el, ed, 'confirm' === ec.modalStep);
    let eh = !w.ZP.canStreamQuality(w.ZP.StreamQuality.HIGH, eo),
        ep = er && !el,
        ex = (0, h.q_F)(
            {
                height: ep && null == ec.selectedSource ? 0 : 76 + 40 * !!eh,
                config: {
                    easing: Q,
                    duration: 200
                }
            },
            'respect-motion-settings'
        ),
        eg = !(0, Z.isLinux)(),
        e_ = 'confirm' === ec.modalStep,
        ev = !$ && null != a && !e_,
        ej = e_ || (!ev && ee && (!el || ec.sourceType === f.vA.CAMERA)),
        eS = el && ec.sourceType !== f.vA.CAMERA,
        eb = el || !(0, Z.isWindows)() || !et || e_,
        eC = en && eh,
        ey = e_ && et,
        eO = i.useMemo(() => {
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
        { sourceType: eI } = ec,
        eZ = i.useCallback(
            async (e) => {
                (b.eo.updateSetting(ec.notifyFriends), b.I0.updateSetting(ec.hidePreview));
                let [t, r] = await (0, P.Z)(e.hasOwnProperty('pid') ? e.pid : e, {
                    preset: ec.preset,
                    fps: ec.fps,
                    resolution: ec.resolution,
                    soundshareEnabled: !ec.muteStreamAudio,
                    previewDisabled: ec.hidePreview,
                    goLiveModalDurationMs: performance.now() - ei.current,
                    audioSourceId: ec.audioSourceId
                });
                if (t) return n();
                ('no permission' === r &&
                    p.Z.show({
                        title: K.intl.string(K.t['X+mXen']),
                        body: K.intl.string(K.t.MIJCzs)
                    }),
                    n());
            },
            [n, ec]
        );
    async function ew(e) {
        if ((0, Z.isWindows)() && et && 'source_select' === ec.modalStep) {
            (ed({
                type: 'set_step',
                step: 'confirm'
            }),
                ed({
                    type: 'set_selected_channel',
                    channelId: e
                }));
            return;
        }
        (await (0, g.Z)({ channelId: e })) && null != a && eZ(a);
    }
    let eN = i.useCallback(() => {
            eZ({
                id: 'prepicked:' + ec.nativeSourceType,
                name: K.intl.string(K.t['KKcy9/']),
                url: ''
            });
        }, [eZ, ec.nativeSourceType]),
        eT = (0, r.jsxs)(h.mzw, {
            className: s()(q.footer, { [q.footerShadow]: !eh && e_ }),
            separator: !1,
            direction: u.k.Direction.VERTICAL,
            children: [
                (0, r.jsxs)('div', {
                    className: q.footerContent,
                    children: [
                        (0, r.jsx)(H.Z, { nativePickerEnabled: el }),
                        (0, r.jsxs)('div', {
                            className: q.rightButtonGroup,
                            children: [
                                eC && (0, r.jsx)(F.Z, { onClose: n }),
                                eS &&
                                    !ej &&
                                    (0, r.jsx)(M.Z, {
                                        mainCTADisabled: !eg && '' === ec.nativeSourceType,
                                        mainCTAOnClick: () => {
                                            ((0, T.t)(), (0, T.T)(ec.nativeSourceType));
                                        },
                                        align: 'right',
                                        ctaText: K.intl.string(K.t.FiBjwc),
                                        hideOptionsButton: !eC
                                    }),
                                ej &&
                                    !eS &&
                                    (0, r.jsx)(M.Z, {
                                        mainCTADisabled: null == ec.selectedSource,
                                        mainCTAOnClick: () => {
                                            null != ec.selectedChannel ? ew(ec.selectedChannel) : null != ec.selectedSource && eZ(ec.selectedSource);
                                        },
                                        align: 'right',
                                        hideOptionsButton: !eC,
                                        ctaText: K.intl.string(X.default['5AyH/v'])
                                    }),
                                (!eC || !(ej || eS)) &&
                                    (0, r.jsx)(W.Z, {
                                        useSimplifiedMenu: ey,
                                        align: 'right'
                                    })
                            ]
                        })
                    ]
                }),
                eh && (0, r.jsx)(z.Z, { onClose: n })
            ]
        }),
        eE = ep
            ? (0, r.jsx)(o.animated.div, {
                  style: ex,
                  children: eT
              })
            : eT;
    return (0, r.jsx)(B.Yw, {
        state: ec,
        dispatch: ed,
        children: (0, r.jsxs)(h.Y0X, {
            impression: {
                impressionName: d.ImpressionNames.GO_LIVE_MODAL,
                impressionProperties: {
                    location_stack: es,
                    application_id: (0, Z.isWindows)() ? (null == (t = (0, E.Z)(j.ZP, I.Z)) ? void 0 : t.id) : void 0,
                    parent_media_session_id: y.Z.getMediaSessionId()
                }
            },
            className: s()(q.root, {
                [q.nativePicker]: el && null == a,
                [q.channelSelector]: ev,
                [q.confirmStep]: e_
            }),
            size: h.CgR.DYNAMIC,
            transitionState: l,
            parentComponent: 'GoLiveModalV2',
            children: [
                ev
                    ? (0, r.jsx)(k.Z, {
                          className: s()(q.channelSelectorComponent, { [q.withFooter]: eb }),
                          onSelectChannel: ew
                      })
                    : e_
                      ? (0, r.jsx)(D.Z, { hideBackButton: null != a })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(h.xBx, {
                                    separator: !1,
                                    className: q.header,
                                    children: (0, r.jsx)(h.sY7, {
                                        className: q.segmentedControl,
                                        value: eI,
                                        look: 'pill',
                                        optionClassName: q.segmentedControlOption,
                                        onChange: (e) => {
                                            let { value: t } = e;
                                            return ed({
                                                type: 'set_source_type',
                                                sourceType: t
                                            });
                                        },
                                        options: eO
                                    })
                                }),
                                (0, r.jsx)(h.hzk, {
                                    className: q.content,
                                    children:
                                        el && eI !== f.vA.CAMERA
                                            ? (0, r.jsx)(U.Z, { onSourceSelect: eN })
                                            : (0, r.jsx)(G.Z, {
                                                  onClick: function (e) {
                                                      function t() {
                                                          var t;
                                                          if (!(null == (t = e.id) ? void 0 : t.startsWith(f.vA.CAMERA))) return;
                                                          let n = (0, R.K)(e.id, ec.deviceSources, em);
                                                          ed({
                                                              type: 'set_audio_source',
                                                              audioSourceId: null != n ? n : void 0
                                                          });
                                                      }
                                                      if (et && (0, Z.isWindows)()) {
                                                          (t(),
                                                              ed({
                                                                  type: 'set_selected_source',
                                                                  source: e
                                                              }),
                                                              ed({
                                                                  type: 'set_step',
                                                                  step: 'confirm'
                                                              }));
                                                          return;
                                                      }
                                                      if (!ee) return eZ(e);
                                                      (t(),
                                                          ed({
                                                              type: 'set_selected_source',
                                                              source: e
                                                          }));
                                                  }
                                              })
                                })
                            ]
                        }),
                ey && (0, r.jsx)(L.Z, {}),
                eb && eE
            ]
        })
    });
}
