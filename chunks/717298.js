n.d(t, { Z: () => z }), n(47120);
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
    h = n(481060),
    m = n(668781),
    x = n(579806),
    g = n(89425),
    p = n(100527),
    _ = n(906732),
    v = n(594190),
    j = n(695346),
    b = n(131951),
    C = n(19780),
    S = n(594174),
    N = n(449224),
    y = n(358085),
    Z = n(74538),
    w = n(668519),
    O = n(299570),
    I = n(989941),
    P = n(562224),
    T = n(560749),
    E = n(615161),
    R = n(289989),
    W = n(328242),
    k = n(565574),
    A = n(51708),
    M = n(801604),
    L = n(577257),
    D = n(70722),
    G = n(889150),
    B = n(388032),
    U = n(312253);
function z(e) {
    var t;
    let { onClose: n, transitionState: i, sourceApplication: o } = e,
        { twoClickVariant: z } = (0, w.a)({
            location: 'golivemodalv2',
            autoTrackExposure: !1
        }),
        F = l.useRef(performance.now()),
        { state: H, dispatch: V } = (0, E.Ti)(o),
        J = (0, f.e7)([b.Z], () => b.Z.getUseSystemScreensharePicker() && (0, y.isMac)() && a().satisfies(null === x.Z || void 0 === x.Z ? void 0 : x.Z.os.release, D.jR)),
        X = (0, f.e7)([S.default], () => S.default.getCurrentUser()),
        Y = !Z.ZP.canStreamQuality(Z.ZP.StreamQuality.HIGH, X),
        { analyticsLocations: K } = (0, _.ZP)(p.Z.GO_LIVE_MODAL_V2);
    (0, L.Z)(J, V);
    let q = l.useMemo(() => {
            let e = [
                {
                    name: B.NW.string(B.t.tHoi7u),
                    value: u.vA.WINDOW,
                    icon: h.GON
                },
                {
                    name: B.NW.string(B.t.MhJ43N),
                    value: u.vA.CAMERA,
                    icon: h.Odl
                }
            ];
            return (
                J ||
                    e.splice(1, 0, {
                        name: B.NW.string(B.t.slM8rK),
                        value: u.vA.SCREEN,
                        icon: h.pzj
                    }),
                e
            );
        }, [J]),
        { sourceType: Q } = H,
        $ = l.useCallback(
            async (e) => {
                j.eo.updateSetting(H.notifyFriends);
                let [t, r] = await (0, P.Z)(e.hasOwnProperty('pid') ? e.pid : e, {
                    preset: H.preset,
                    fps: H.fps,
                    resolution: H.resolution,
                    soundshareEnabled: !H.muteStreamAudio,
                    previewDisabled: H.hidePreview,
                    goLiveModalDurationMs: performance.now() - F.current
                });
                if (t) return n();
                'no permission' === r &&
                    m.Z.show({
                        title: B.NW.string(B.t['X+mXen']),
                        body: B.NW.string(B.t.MIJCzs)
                    }),
                    n();
            },
            [n, H]
        );
    async function ee(e) {
        (await (0, g.Z)({ channelId: e })) && null != o && $(o);
    }
    let et = l.useCallback(() => {
        $({
            id: 'prepicked:',
            name: B.NW.string(B.t['KKcy9/']),
            url: ''
        });
    }, [$]);
    return (0, r.jsx)(E.Yw, {
        state: H,
        dispatch: V,
        children: (0, r.jsxs)(h.Y0X, {
            impression: {
                impressionName: c.ImpressionNames.GO_LIVE_MODAL,
                impressionProperties: {
                    location_stack: K,
                    application_id: (0, y.isWindows)() ? (null === (t = (0, I.Z)(v.ZP, N.Z)) || void 0 === t ? void 0 : t.id) : void 0,
                    parent_media_session_id: C.Z.getMediaSessionId()
                }
            },
            className: s()(U.root, J && U.nativePicker),
            size: h.CgR.LARGE,
            transitionState: i,
            children: [
                null != o
                    ? (0, r.jsx)(T.Z, { onSelectChannel: ee })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.xBx, {
                                  separator: !1,
                                  className: U.header,
                                  children: (0, r.jsx)(h.sY7, {
                                      className: U.segmentedControl,
                                      value: Q,
                                      look: 'pill',
                                      optionClassName: U.segmentedControlOption,
                                      onChange: (e) => {
                                          let { value: t } = e;
                                          return V({
                                              type: 'set_source_type',
                                              sourceType: t
                                          });
                                      },
                                      options: q
                                  })
                              }),
                              (0, r.jsx)(h.hzk, {
                                  className: U.content,
                                  children:
                                      J && Q !== u.vA.CAMERA
                                          ? (0, r.jsx)(R.Z, { onSourceSelect: et })
                                          : (0, r.jsx)(W.Z, {
                                                onClick: function (e) {
                                                    if (!z) return $(e);
                                                    V({
                                                        type: 'set_selected_source',
                                                        source: e
                                                    });
                                                }
                                            })
                              })
                          ]
                      }),
                Y && (0, r.jsx)(A.Z, { onClose: n }),
                (0, r.jsxs)(h.mzw, {
                    className: U.footer,
                    separator: !1,
                    justify: d.k.Justify.BETWEEN,
                    align: d.k.Align.CENTER,
                    direction: d.k.Direction.HORIZONTAL,
                    children: [
                        (0, r.jsx)(M.Z, {}),
                        (0, r.jsxs)('div', {
                            className: U.rightButtonGroup,
                            children: [
                                J &&
                                    Q !== u.vA.CAMERA &&
                                    (0, r.jsx)(h.zxk, {
                                        size: h.zxk.Sizes.LARGE,
                                        onClick: () => {
                                            (0, O.t)(), (0, O.T)('');
                                        },
                                        children: B.NW.string(B.t.FiBjwc)
                                    }),
                                z &&
                                    (0, r.jsx)(h.zxk, {
                                        size: h.zxk.Sizes.LARGE,
                                        className: U.streamButton,
                                        disabled: null == H.selectedSource,
                                        onClick: () => null != H.selectedSource && $(H.selectedSource),
                                        children: B.NW.string(G.Z['5AyH/v'])
                                    }),
                                (null != o || z) && (0, r.jsx)(k.Z, { align: 'right' })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
