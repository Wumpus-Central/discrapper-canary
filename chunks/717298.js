(n.d(t, { Z: () => ee }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(66546),
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
    b = n(72897),
    S = n(695346),
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
    z = n(51708),
    V = n(801604),
    Y = n(577257),
    J = n(70722),
    X = n(65154),
    K = n(676462),
    q = n(388032),
    Q = n(321910);
function $(e) {
    return e * (2 - e);
}
function ee(e) {
    var t;
    let { onClose: n, transitionState: l, sourceApplication: a, selectSource: ee = !0 } = e,
        {
            twoClickVariant: et,
            twoStepModal: en,
            showSDHDUpsell: er,
            footerSlideIn: ei
        } = (0, N.a)({
            location: 'golivemodalv2',
            autoTrackExposure: !1
        }),
        el = i.useRef(performance.now()),
        es = (0, m.e7)([C.Z], () => C.Z.getUseSystemScreensharePicker() && ((0, Z.isLinux)() || ((0, Z.isMac)() && c().satisfies(null === x.Z || void 0 === x.Z ? void 0 : x.Z.os.release, J.jR)))),
        { analyticsLocations: eo } = (0, v.ZP)(_.Z.GO_LIVE_MODAL_V2),
        ea = (0, m.e7)([O.default], () => O.default.getCurrentUser()),
        ec = (0, M.Z)(),
        { state: ed, dispatch: eu } = (0, U.Ti)(a, ea, ec, (0, Z.isWindows)() && null != a && ee ? 'confirm' : 'source_select'),
        [ef, em] = (0, b.L)(X.h7.AUDIO_INPUT, { location: 'GoLiveModalV2' }),
        eh = ef.concat(em);
    (0, Y.Z)(es, eu, 'confirm' === ed.modalStep);
    let ep = !w.ZP.canStreamQuality(w.ZP.StreamQuality.HIGH, ea),
        ex = ei && !es,
        eg = (0, h.q_F)(
            {
                height: ex && null == ed.selectedSource ? 0 : 76 + 40 * !!ep,
                config: {
                    easing: $,
                    duration: 200
                }
            },
            'respect-motion-settings'
        ),
        e_ = !(0, Z.isLinux)(),
        ev = 'confirm' === ed.modalStep,
        ej = !ee && null != a && !ev,
        eb = ev || (!ej && et && (!es || ed.sourceType === f.vA.CAMERA)),
        eS = es && ed.sourceType !== f.vA.CAMERA,
        eC = es || !(0, Z.isWindows)() || !en || ev,
        ey = er && ep,
        eO = ev && en,
        eI = i.useMemo(() => {
            let e = [
                {
                    name: q.intl.string(q.t.tHoi7u),
                    value: f.vA.WINDOW,
                    icon: h.GON
                },
                {
                    name: q.intl.string(q.t.MhJ43N),
                    value: f.vA.CAMERA,
                    icon: h.Odl
                }
            ];
            return (
                es ||
                    e.splice(1, 0, {
                        name: q.intl.string(q.t.slM8rK),
                        value: f.vA.SCREEN,
                        icon: h.pzj
                    }),
                e
            );
        }, [es]),
        { sourceType: eZ } = ed,
        ew = i.useCallback(
            async (e) => {
                (S.eo.updateSetting(ed.notifyFriends), S.I0.updateSetting(ed.hidePreview));
                let [t, r] = await (0, R.Z)(e.hasOwnProperty('pid') ? e.pid : e, {
                    preset: ed.preset,
                    fps: ed.fps,
                    resolution: ed.resolution,
                    soundshareEnabled: !ed.muteStreamAudio,
                    previewDisabled: ed.hidePreview,
                    goLiveModalDurationMs: performance.now() - el.current,
                    audioSourceId: ed.audioSourceId
                });
                if (t) return n();
                ('no permission' === r &&
                    p.Z.show({
                        title: q.intl.string(q.t['X+mXen']),
                        body: q.intl.string(q.t.MIJCzs)
                    }),
                    n());
            },
            [n, ed]
        );
    async function eN(e) {
        if ((0, Z.isWindows)() && en && 'source_select' === ed.modalStep) {
            (eu({
                type: 'set_step',
                step: 'confirm'
            }),
                eu({
                    type: 'set_selected_channel',
                    channelId: e
                }));
            return;
        }
        (await (0, g.Z)({ channelId: e })) && null != a && ew(a);
    }
    let eT = i.useCallback(() => {
            var e;
            ew({
                id: 'prepicked:' + ed.nativeSourceType,
                name: null != (e = E.ZP.getLastPickedContentTitle()) ? e : q.intl.string(q.t['KKcy9/']),
                url: ''
            });
        }, [ew, ed.nativeSourceType]),
        eE = (0, r.jsxs)(h.mzw, {
            className: s()(Q.footer, { [Q.footerShadow]: !ep && ev }),
            separator: !1,
            direction: u.k.Direction.VERTICAL,
            children: [
                (0, r.jsxs)('div', {
                    className: Q.footerContent,
                    children: [
                        (0, r.jsx)(V.Z, { nativePickerEnabled: es }),
                        (0, r.jsxs)('div', {
                            className: Q.rightButtonGroup,
                            children: [
                                ey && (0, r.jsx)(H.Z, { onClose: n }),
                                eS &&
                                    !eb &&
                                    (0, r.jsx)(k.Z, {
                                        mainCTADisabled: !e_ && '' === ed.nativeSourceType,
                                        mainCTAOnClick: () => {
                                            ((0, T.t)(), (0, T.T)(ed.nativeSourceType));
                                        },
                                        align: 'right',
                                        ctaText: q.intl.string(q.t.FiBjwc),
                                        hideOptionsButton: !ey
                                    }),
                                eb &&
                                    !eS &&
                                    (0, r.jsx)(k.Z, {
                                        mainCTADisabled: null == ed.selectedSource,
                                        mainCTAOnClick: () => {
                                            null != ed.selectedChannel ? eN(ed.selectedChannel) : null != ed.selectedSource && ew(ed.selectedSource);
                                        },
                                        align: 'right',
                                        hideOptionsButton: !ey,
                                        ctaText: q.intl.string(K.default['5AyH/v'])
                                    }),
                                (!ey || !(eb || eS)) &&
                                    (0, r.jsx)(F.Z, {
                                        useSimplifiedMenu: eO,
                                        align: 'right'
                                    })
                            ]
                        })
                    ]
                }),
                ep && (0, r.jsx)(z.Z, { onClose: n })
            ]
        }),
        eP = ex
            ? (0, r.jsx)(o.animated.div, {
                  style: eg,
                  children: eE
              })
            : eE;
    return (0, r.jsx)(U.Yw, {
        state: ed,
        dispatch: eu,
        children: (0, r.jsxs)(h.Y0X, {
            impression: {
                impressionName: d.ImpressionNames.GO_LIVE_MODAL,
                impressionProperties: {
                    location_stack: eo,
                    application_id: (0, Z.isWindows)() ? (null == (t = (0, P.Z)(j.ZP, I.Z)) ? void 0 : t.id) : void 0,
                    parent_media_session_id: y.Z.getMediaSessionId()
                }
            },
            className: s()(Q.root, {
                [Q.nativePicker]: es && null == a,
                [Q.channelSelector]: ej,
                [Q.confirmStep]: ev
            }),
            size: h.CgR.DYNAMIC,
            transitionState: l,
            parentComponent: 'GoLiveModalV2',
            children: [
                ej
                    ? (0, r.jsx)(L.Z, {
                          className: s()(Q.channelSelectorComponent, { [Q.withFooter]: eC }),
                          onSelectChannel: eN
                      })
                    : ev
                      ? (0, r.jsx)(B.Z, { hideBackButton: null != a })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(h.xBx, {
                                    separator: !1,
                                    className: Q.header,
                                    children: (0, r.jsx)(h.sY7, {
                                        className: Q.segmentedControl,
                                        value: eZ,
                                        look: 'pill',
                                        optionClassName: Q.segmentedControlOption,
                                        onChange: (e) => {
                                            let { value: t } = e;
                                            return eu({
                                                type: 'set_source_type',
                                                sourceType: t
                                            });
                                        },
                                        options: eI
                                    })
                                }),
                                (0, r.jsx)(h.hzk, {
                                    className: Q.content,
                                    children:
                                        es && eZ !== f.vA.CAMERA
                                            ? (0, r.jsx)(G.Z, { onSourceSelect: eT })
                                            : (0, r.jsx)(W.Z, {
                                                  onClick: function (e) {
                                                      function t() {
                                                          var t;
                                                          if (!(null == (t = e.id) ? void 0 : t.startsWith(f.vA.CAMERA))) return;
                                                          let n = (0, A.K)(e.id, ed.deviceSources, eh);
                                                          eu({
                                                              type: 'set_audio_source',
                                                              audioSourceId: null != n ? n : void 0
                                                          });
                                                      }
                                                      if (en && (0, Z.isWindows)()) {
                                                          (t(),
                                                              eu({
                                                                  type: 'set_selected_source',
                                                                  source: e
                                                              }),
                                                              eu({
                                                                  type: 'set_step',
                                                                  step: 'confirm'
                                                              }));
                                                          return;
                                                      }
                                                      if (!et) return ew(e);
                                                      (t(),
                                                          eu({
                                                              type: 'set_selected_source',
                                                              source: e
                                                          }));
                                                  }
                                              })
                                })
                            ]
                        }),
                eO && (0, r.jsx)(D.Z, {}),
                eC && eP
            ]
        })
    });
}
