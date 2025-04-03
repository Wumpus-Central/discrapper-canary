n.d(t, { Z: () => F }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    o = n(209739),
    a = n.n(o),
    c = n(990547),
    d = n(435935),
    u = n(268146),
    f = n(442837),
    m = n(481060),
    h = n(668781),
    x = n(579806),
    p = n(89425),
    g = n(100527),
    _ = n(906732),
    j = n(594190),
    v = n(695346),
    b = n(131951),
    S = n(19780),
    C = n(594174),
    N = n(449224),
    y = n(358085),
    Z = n(74538),
    I = n(668519),
    w = n(299570),
    O = n(989941),
    T = n(562224),
    E = n(544753),
    P = n(560749),
    R = n(615161),
    W = n(289989),
    k = n(328242),
    A = n(565574),
    M = n(51708),
    L = n(801604),
    D = n(577257),
    G = n(70722),
    U = n(843874),
    B = n(388032),
    z = n(321910);
function F(e) {
    var t;
    let { onClose: n, transitionState: i, sourceApplication: o } = e,
        { twoClickVariant: F } = (0, I.a)({
            location: 'golivemodalv2',
            autoTrackExposure: !1
        }),
        H = l.useRef(performance.now()),
        V = (0, f.e7)([b.Z], () => b.Z.getUseSystemScreensharePicker() && (0, y.isMac)() && a().satisfies(null === x.Z || void 0 === x.Z ? void 0 : x.Z.os.release, G.jR)),
        Y = (0, f.e7)([C.default], () => C.default.getCurrentUser()),
        J = !Z.ZP.canStreamQuality(Z.ZP.StreamQuality.HIGH, Y),
        { analyticsLocations: X } = (0, _.ZP)(g.Z.GO_LIVE_MODAL_V2),
        K = null != o,
        q = (0, E.Z)(),
        { state: Q, dispatch: $ } = (0, R.Ti)(o, Y, q),
        ee = !K && F && (!V || Q.sourceType === u.vA.CAMERA);
    (0, D.Z)(V, $);
    let et = l.useMemo(() => {
            let e = [
                {
                    name: B.NW.string(B.t.tHoi7u),
                    value: u.vA.WINDOW,
                    icon: m.GON
                },
                {
                    name: B.NW.string(B.t.MhJ43N),
                    value: u.vA.CAMERA,
                    icon: m.Odl
                }
            ];
            return (
                V ||
                    e.splice(1, 0, {
                        name: B.NW.string(B.t.slM8rK),
                        value: u.vA.SCREEN,
                        icon: m.pzj
                    }),
                e
            );
        }, [V]),
        { sourceType: en } = Q,
        er = l.useCallback(
            async (e) => {
                v.eo.updateSetting(Q.notifyFriends), v.I0.updateSetting(Q.hidePreview);
                let [t, r] = await (0, T.Z)(e.hasOwnProperty('pid') ? e.pid : e, {
                    preset: Q.preset,
                    fps: Q.fps,
                    resolution: Q.resolution,
                    soundshareEnabled: !Q.muteStreamAudio,
                    previewDisabled: Q.hidePreview,
                    goLiveModalDurationMs: performance.now() - H.current,
                    audioSourceId: Q.audioSourceId
                });
                if (t) return n();
                'no permission' === r &&
                    h.Z.show({
                        title: B.NW.string(B.t['X+mXen']),
                        body: B.NW.string(B.t.MIJCzs)
                    }),
                    n();
            },
            [n, Q]
        );
    async function el(e) {
        (await (0, p.Z)({ channelId: e })) && null != o && er(o);
    }
    let ei = l.useCallback(() => {
        er({
            id: 'prepicked:',
            name: B.NW.string(B.t['KKcy9/']),
            url: ''
        });
    }, [er]);
    return (0, r.jsx)(R.Yw, {
        state: Q,
        dispatch: $,
        children: (0, r.jsxs)(m.Y0X, {
            impression: {
                impressionName: c.ImpressionNames.GO_LIVE_MODAL,
                impressionProperties: {
                    location_stack: X,
                    application_id: (0, y.isWindows)() ? (null == (t = (0, O.Z)(j.ZP, N.Z)) ? void 0 : t.id) : void 0,
                    parent_media_session_id: S.ZP.getMediaSessionId()
                }
            },
            className: s()(z.root, {
                [z.nativePicker]: V && null == o,
                [z.channelSelector]: K
            }),
            size: m.CgR.DYNAMIC,
            transitionState: i,
            children: [
                K
                    ? (0, r.jsx)(P.Z, { onSelectChannel: el })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(m.xBx, {
                                  separator: !1,
                                  className: z.header,
                                  children: (0, r.jsx)(m.sY7, {
                                      className: z.segmentedControl,
                                      value: en,
                                      look: 'pill',
                                      optionClassName: z.segmentedControlOption,
                                      onChange: (e) => {
                                          let { value: t } = e;
                                          return $({
                                              type: 'set_source_type',
                                              sourceType: t
                                          });
                                      },
                                      options: et
                                  })
                              }),
                              (0, r.jsx)(m.hzk, {
                                  className: z.content,
                                  children:
                                      V && en !== u.vA.CAMERA
                                          ? (0, r.jsx)(W.Z, { onSourceSelect: ei })
                                          : (0, r.jsx)(k.Z, {
                                                onClick: function (e) {
                                                    if (!F) return er(e);
                                                    $({
                                                        type: 'set_selected_source',
                                                        source: e
                                                    });
                                                }
                                            })
                              })
                          ]
                      }),
                J && (0, r.jsx)(M.Z, { onClose: n }),
                (0, r.jsxs)(m.mzw, {
                    className: s()(z.footer, { [z.footerShadow]: !J }),
                    separator: !1,
                    justify: d.k.Justify.BETWEEN,
                    align: d.k.Align.CENTER,
                    direction: d.k.Direction.HORIZONTAL,
                    children: [
                        (0, r.jsx)(L.Z, { nativePickerEnabled: V }),
                        (0, r.jsxs)('div', {
                            className: z.rightButtonGroup,
                            children: [
                                V &&
                                    en !== u.vA.CAMERA &&
                                    (0, r.jsx)(m.zxk, {
                                        size: m.zxk.Sizes.LARGE,
                                        onClick: () => {
                                            (0, w.t)(), (0, w.T)('');
                                        },
                                        children: B.NW.string(B.t.FiBjwc)
                                    }),
                                ee &&
                                    (0, r.jsx)(m.zxk, {
                                        size: m.zxk.Sizes.LARGE,
                                        className: z.streamButton,
                                        disabled: null == Q.selectedSource,
                                        onClick: () => null != Q.selectedSource && er(Q.selectedSource),
                                        children: B.NW.string(U.Z['5AyH/v'])
                                    }),
                                (0, r.jsx)(A.Z, { align: 'right' })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
