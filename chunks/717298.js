n.d(t, { Z: () => K }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    o = n(683305),
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
    S = n(695346),
    b = n(131951),
    C = n(19780),
    y = n(594174),
    O = n(449224),
    Z = n(358085),
    w = n(74538),
    I = n(668519),
    N = n(299570),
    E = n(989941),
    T = n(562224),
    P = n(544753),
    R = n(853030),
    k = n(560749),
    A = n(311924),
    M = n(485299),
    L = n(615161),
    D = n(289989),
    B = n(328242),
    U = n(565574),
    G = n(286420),
    W = n(51708),
    z = n(801604),
    F = n(577257),
    H = n(70722),
    V = n(843874),
    Y = n(388032),
    J = n(321910);
function X(e) {
    return e * (2 - e);
}
function K(e) {
    var t;
    let { onClose: n, transitionState: i, sourceApplication: a, selectSource: K = !0 } = e,
        {
            twoClickVariant: q,
            twoStepModal: Q,
            showSDHDUpsell: $,
            footerSlideIn: ee
        } = (0, I.a)({
            location: 'golivemodalv2',
            autoTrackExposure: !1
        }),
        et = l.useRef(performance.now()),
        en = (0, m.e7)([b.Z], () => b.Z.getUseSystemScreensharePicker() && (0, Z.isMac)() && c().satisfies(null === x.Z || void 0 === x.Z ? void 0 : x.Z.os.release, H.jR)),
        { analyticsLocations: er } = (0, v.ZP)(_.Z.GO_LIVE_MODAL_V2),
        el = (0, m.e7)([y.default], () => y.default.getCurrentUser()),
        ei = (0, P.Z)(),
        { state: es, dispatch: eo } = (0, L.Ti)(a, el, ei, (0, Z.isWindows)() && null != a && K ? 'confirm' : 'source_select');
    (0, F.Z)(en, eo, 'confirm' === es.modalStep);
    let ea = !w.ZP.canStreamQuality(w.ZP.StreamQuality.HIGH, el),
        ec = ee && !en,
        ed = (0, h.q_F)(
            {
                height: ec && null == es.selectedSource ? 0 : 76 + 40 * !!ea,
                config: {
                    easing: X,
                    duration: 200
                }
            },
            'respect-motion-settings'
        ),
        eu = 'confirm' === es.modalStep,
        ef = !K && null != a && !eu,
        em = eu || (!ef && q && (!en || es.sourceType === f.vA.CAMERA)),
        eh = en && es.sourceType !== f.vA.CAMERA,
        ep = en || !(0, Z.isWindows)() || !Q || eu,
        ex = $ && ea,
        eg = eu && Q,
        e_ = l.useMemo(() => {
            let e = [
                {
                    name: Y.intl.string(Y.t.tHoi7u),
                    value: f.vA.WINDOW,
                    icon: h.GON
                },
                {
                    name: Y.intl.string(Y.t.MhJ43N),
                    value: f.vA.CAMERA,
                    icon: h.Odl
                }
            ];
            return (
                en ||
                    e.splice(1, 0, {
                        name: Y.intl.string(Y.t.slM8rK),
                        value: f.vA.SCREEN,
                        icon: h.pzj
                    }),
                e
            );
        }, [en]),
        { sourceType: ev } = es,
        ej = l.useCallback(
            async (e) => {
                S.eo.updateSetting(es.notifyFriends), S.I0.updateSetting(es.hidePreview);
                let [t, r] = await (0, T.Z)(e.hasOwnProperty('pid') ? e.pid : e, {
                    preset: es.preset,
                    fps: es.fps,
                    resolution: es.resolution,
                    soundshareEnabled: !es.muteStreamAudio,
                    previewDisabled: es.hidePreview,
                    goLiveModalDurationMs: performance.now() - et.current,
                    audioSourceId: es.audioSourceId
                });
                if (t) return n();
                'no permission' === r &&
                    p.Z.show({
                        title: Y.intl.string(Y.t['X+mXen']),
                        body: Y.intl.string(Y.t.MIJCzs)
                    }),
                    n();
            },
            [n, es]
        );
    async function eS(e) {
        if ((0, Z.isWindows)() && Q && 'source_select' === es.modalStep) {
            eo({
                type: 'set_step',
                step: 'confirm'
            }),
                eo({
                    type: 'set_selected_channel',
                    channelId: e
                });
            return;
        }
        (await (0, g.Z)({ channelId: e })) && null != a && ej(a);
    }
    let eb = l.useCallback(() => {
            ej({
                id: 'prepicked:',
                name: Y.intl.string(Y.t['KKcy9/']),
                url: ''
            });
        }, [ej]),
        eC = (0, r.jsxs)(h.mzw, {
            className: s()(J.footer, { [J.footerShadow]: !ea && eu }),
            separator: !1,
            direction: u.k.Direction.VERTICAL,
            children: [
                (0, r.jsxs)('div', {
                    className: J.footerContent,
                    children: [
                        (0, r.jsx)(z.Z, { nativePickerEnabled: en }),
                        (0, r.jsxs)('div', {
                            className: J.rightButtonGroup,
                            children: [
                                ex && (0, r.jsx)(G.Z, { onClose: n }),
                                eh &&
                                    !em &&
                                    (0, r.jsx)(R.Z, {
                                        mainCTADisabled: !1,
                                        mainCTAOnClick: () => {
                                            (0, N.t)(), (0, N.T)('');
                                        },
                                        align: 'right',
                                        ctaText: Y.intl.string(Y.t.FiBjwc),
                                        hideOptionsButton: !ex
                                    }),
                                em &&
                                    !eh &&
                                    (0, r.jsx)(R.Z, {
                                        mainCTADisabled: null == es.selectedSource,
                                        mainCTAOnClick: () => {
                                            null != es.selectedChannel ? eS(es.selectedChannel) : null != es.selectedSource && ej(es.selectedSource);
                                        },
                                        align: 'right',
                                        hideOptionsButton: !ex,
                                        ctaText: Y.intl.string(V.default['5AyH/v'])
                                    }),
                                (!ex || !(em || eh)) &&
                                    (0, r.jsx)(U.Z, {
                                        useSimplifiedMenu: eg,
                                        align: 'right'
                                    })
                            ]
                        })
                    ]
                }),
                ea && (0, r.jsx)(W.Z, { onClose: n })
            ]
        }),
        ey = ec
            ? (0, r.jsx)(o.animated.div, {
                  style: ed,
                  children: eC
              })
            : eC;
    return (0, r.jsx)(L.Yw, {
        state: es,
        dispatch: eo,
        children: (0, r.jsxs)(h.Y0X, {
            impression: {
                impressionName: d.ImpressionNames.GO_LIVE_MODAL,
                impressionProperties: {
                    location_stack: er,
                    application_id: (0, Z.isWindows)() ? (null == (t = (0, E.Z)(j.ZP, O.Z)) ? void 0 : t.id) : void 0,
                    parent_media_session_id: C.Z.getMediaSessionId()
                }
            },
            className: s()(J.root, {
                [J.nativePicker]: en && null == a,
                [J.channelSelector]: ef,
                [J.confirmStep]: eu
            }),
            size: h.CgR.DYNAMIC,
            transitionState: i,
            children: [
                ef
                    ? (0, r.jsx)(k.Z, {
                          className: s()(J.channelSelectorComponent, { [J.withFooter]: ep }),
                          onSelectChannel: eS
                      })
                    : eu
                      ? (0, r.jsx)(M.Z, { hideBackButton: null != a })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(h.xBx, {
                                    separator: !1,
                                    className: J.header,
                                    children: (0, r.jsx)(h.sY7, {
                                        className: J.segmentedControl,
                                        value: ev,
                                        look: 'pill',
                                        optionClassName: J.segmentedControlOption,
                                        onChange: (e) => {
                                            let { value: t } = e;
                                            return eo({
                                                type: 'set_source_type',
                                                sourceType: t
                                            });
                                        },
                                        options: e_
                                    })
                                }),
                                (0, r.jsx)(h.hzk, {
                                    className: J.content,
                                    children:
                                        en && ev !== f.vA.CAMERA
                                            ? (0, r.jsx)(D.Z, { onSourceSelect: eb })
                                            : (0, r.jsx)(B.Z, {
                                                  onClick: function (e) {
                                                      if (Q && (0, Z.isWindows)()) {
                                                          eo({
                                                              type: 'set_selected_source',
                                                              source: e
                                                          }),
                                                              eo({
                                                                  type: 'set_step',
                                                                  step: 'confirm'
                                                              });
                                                          return;
                                                      }
                                                      if (!q) return ej(e);
                                                      eo({
                                                          type: 'set_selected_source',
                                                          source: e
                                                      });
                                                  }
                                              })
                                })
                            ]
                        }),
                eg && (0, r.jsx)(A.Z, {}),
                ep && ey
            ]
        })
    });
}
