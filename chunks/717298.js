n.d(t, { Z: () => Q }), n(388685);
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
    S = n(687058),
    b = n(695346),
    C = n(131951),
    y = n(19780),
    O = n(594174),
    Z = n(449224),
    I = n(358085),
    w = n(74538),
    N = n(668519),
    T = n(299570),
    E = n(989941),
    P = n(562224),
    R = n(586290),
    k = n(544753),
    A = n(853030),
    M = n(560749),
    L = n(311924),
    D = n(485299),
    B = n(615161),
    U = n(289989),
    G = n(328242),
    W = n(565574),
    z = n(286420),
    F = n(51708),
    H = n(801604),
    V = n(577257),
    Y = n(70722),
    J = n(676462),
    X = n(388032),
    K = n(321910);
function q(e) {
    return e * (2 - e);
}
function Q(e) {
    var t;
    let { onClose: n, transitionState: l, sourceApplication: a, selectSource: Q = !0 } = e,
        {
            twoClickVariant: $,
            twoStepModal: ee,
            showSDHDUpsell: et,
            footerSlideIn: en
        } = (0, N.a)({
            location: 'golivemodalv2',
            autoTrackExposure: !1
        }),
        er = i.useRef(performance.now()),
        ei = (0, m.e7)([C.Z], () => C.Z.getUseSystemScreensharePicker() && ((0, I.isLinux)() || ((0, I.isMac)() && c().satisfies(null === x.Z || void 0 === x.Z ? void 0 : x.Z.os.release, Y.jR)))),
        { analyticsLocations: el } = (0, v.ZP)(_.Z.GO_LIVE_MODAL_V2),
        es = (0, m.e7)([O.default], () => O.default.getCurrentUser()),
        eo = (0, k.Z)(),
        { state: ea, dispatch: ec } = (0, B.Ti)(a, es, eo, (0, I.isWindows)() && null != a && Q ? 'confirm' : 'source_select'),
        ed = (0, S.Z)();
    (0, V.Z)(ei, ec, 'confirm' === ea.modalStep);
    let eu = !w.ZP.canStreamQuality(w.ZP.StreamQuality.HIGH, es),
        ef = en && !ei,
        em = (0, h.q_F)(
            {
                height: ef && null == ea.selectedSource ? 0 : 76 + 40 * !!eu,
                config: {
                    easing: q,
                    duration: 200
                }
            },
            'respect-motion-settings'
        ),
        eh = !(0, I.isLinux)(),
        ep = 'confirm' === ea.modalStep,
        ex = !Q && null != a && !ep,
        eg = ep || (!ex && $ && (!ei || ea.sourceType === f.vA.CAMERA)),
        e_ = ei && ea.sourceType !== f.vA.CAMERA,
        ev = ei || !(0, I.isWindows)() || !ee || ep,
        ej = et && eu,
        eS = ep && ee,
        eb = i.useMemo(() => {
            let e = [
                {
                    name: X.intl.string(X.t.tHoi7u),
                    value: f.vA.WINDOW,
                    icon: h.GON
                },
                {
                    name: X.intl.string(X.t.MhJ43N),
                    value: f.vA.CAMERA,
                    icon: h.Odl
                }
            ];
            return (
                ei ||
                    e.splice(1, 0, {
                        name: X.intl.string(X.t.slM8rK),
                        value: f.vA.SCREEN,
                        icon: h.pzj
                    }),
                e
            );
        }, [ei]),
        { sourceType: eC } = ea,
        ey = i.useCallback(
            async (e) => {
                b.eo.updateSetting(ea.notifyFriends), b.I0.updateSetting(ea.hidePreview);
                let [t, r] = await (0, P.Z)(e.hasOwnProperty('pid') ? e.pid : e, {
                    preset: ea.preset,
                    fps: ea.fps,
                    resolution: ea.resolution,
                    soundshareEnabled: !ea.muteStreamAudio,
                    previewDisabled: ea.hidePreview,
                    goLiveModalDurationMs: performance.now() - er.current,
                    audioSourceId: ea.audioSourceId
                });
                if (t) return n();
                'no permission' === r &&
                    p.Z.show({
                        title: X.intl.string(X.t['X+mXen']),
                        body: X.intl.string(X.t.MIJCzs)
                    }),
                    n();
            },
            [n, ea]
        );
    async function eO(e) {
        if ((0, I.isWindows)() && ee && 'source_select' === ea.modalStep) {
            ec({
                type: 'set_step',
                step: 'confirm'
            }),
                ec({
                    type: 'set_selected_channel',
                    channelId: e
                });
            return;
        }
        (await (0, g.Z)({ channelId: e })) && null != a && ey(a);
    }
    let eZ = i.useCallback(() => {
            ey({
                id: 'prepicked:' + ea.nativeSourceType,
                name: X.intl.string(X.t['KKcy9/']),
                url: ''
            });
        }, [ey, ea.nativeSourceType]),
        eI = (0, r.jsxs)(h.mzw, {
            className: s()(K.footer, { [K.footerShadow]: !eu && ep }),
            separator: !1,
            direction: u.k.Direction.VERTICAL,
            children: [
                (0, r.jsxs)('div', {
                    className: K.footerContent,
                    children: [
                        (0, r.jsx)(H.Z, { nativePickerEnabled: ei }),
                        (0, r.jsxs)('div', {
                            className: K.rightButtonGroup,
                            children: [
                                ej && (0, r.jsx)(z.Z, { onClose: n }),
                                e_ &&
                                    !eg &&
                                    (0, r.jsx)(A.Z, {
                                        mainCTADisabled: !eh && '' === ea.nativeSourceType,
                                        mainCTAOnClick: () => {
                                            (0, T.t)(), (0, T.T)(ea.nativeSourceType);
                                        },
                                        align: 'right',
                                        ctaText: X.intl.string(X.t.FiBjwc),
                                        hideOptionsButton: !ej
                                    }),
                                eg &&
                                    !e_ &&
                                    (0, r.jsx)(A.Z, {
                                        mainCTADisabled: null == ea.selectedSource,
                                        mainCTAOnClick: () => {
                                            null != ea.selectedChannel ? eO(ea.selectedChannel) : null != ea.selectedSource && ey(ea.selectedSource);
                                        },
                                        align: 'right',
                                        hideOptionsButton: !ej,
                                        ctaText: X.intl.string(J.default['5AyH/v'])
                                    }),
                                (!ej || !(eg || e_)) &&
                                    (0, r.jsx)(W.Z, {
                                        useSimplifiedMenu: eS,
                                        align: 'right'
                                    })
                            ]
                        })
                    ]
                }),
                eu && (0, r.jsx)(F.Z, { onClose: n })
            ]
        }),
        ew = ef
            ? (0, r.jsx)(o.animated.div, {
                  style: em,
                  children: eI
              })
            : eI;
    return (0, r.jsx)(B.Yw, {
        state: ea,
        dispatch: ec,
        children: (0, r.jsxs)(h.Y0X, {
            impression: {
                impressionName: d.ImpressionNames.GO_LIVE_MODAL,
                impressionProperties: {
                    location_stack: el,
                    application_id: (0, I.isWindows)() ? (null == (t = (0, E.Z)(j.ZP, Z.Z)) ? void 0 : t.id) : void 0,
                    parent_media_session_id: y.Z.getMediaSessionId()
                }
            },
            className: s()(K.root, {
                [K.nativePicker]: ei && null == a,
                [K.channelSelector]: ex,
                [K.confirmStep]: ep
            }),
            size: h.CgR.DYNAMIC,
            transitionState: l,
            parentComponent: 'GoLiveModalV2',
            children: [
                ex
                    ? (0, r.jsx)(M.Z, {
                          className: s()(K.channelSelectorComponent, { [K.withFooter]: ev }),
                          onSelectChannel: eO
                      })
                    : ep
                      ? (0, r.jsx)(D.Z, { hideBackButton: null != a })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(h.xBx, {
                                    separator: !1,
                                    className: K.header,
                                    children: (0, r.jsx)(h.sY7, {
                                        className: K.segmentedControl,
                                        value: eC,
                                        look: 'pill',
                                        optionClassName: K.segmentedControlOption,
                                        onChange: (e) => {
                                            let { value: t } = e;
                                            return ec({
                                                type: 'set_source_type',
                                                sourceType: t
                                            });
                                        },
                                        options: eb
                                    })
                                }),
                                (0, r.jsx)(h.hzk, {
                                    className: K.content,
                                    children:
                                        ei && eC !== f.vA.CAMERA
                                            ? (0, r.jsx)(U.Z, { onSourceSelect: eZ })
                                            : (0, r.jsx)(G.Z, {
                                                  onClick: function (e) {
                                                      function t() {
                                                          var t;
                                                          if (!(null == (t = e.id) ? void 0 : t.startsWith(f.vA.CAMERA))) return;
                                                          let n = (0, R.K)(e.id, ea.deviceSources, ed);
                                                          ec({
                                                              type: 'set_audio_source',
                                                              audioSourceId: null != n ? n : void 0
                                                          });
                                                      }
                                                      if (ee && (0, I.isWindows)()) {
                                                          t(),
                                                              ec({
                                                                  type: 'set_selected_source',
                                                                  source: e
                                                              }),
                                                              ec({
                                                                  type: 'set_step',
                                                                  step: 'confirm'
                                                              });
                                                          return;
                                                      }
                                                      if (!$) return ey(e);
                                                      t(),
                                                          ec({
                                                              type: 'set_selected_source',
                                                              source: e
                                                          });
                                                  }
                                              })
                                })
                            ]
                        }),
                eS && (0, r.jsx)(L.Z, {}),
                ev && ew
            ]
        })
    });
}
