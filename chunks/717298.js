n.d(t, { Z: () => F }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(209739),
    o = n.n(a),
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
    N = n(594174),
    C = n(449224),
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
    B = n(843874),
    U = n(388032),
    z = n(321910);
function F(e) {
    var t;
    let { onClose: n, transitionState: l, sourceApplication: a, selectSource: F = !0 } = e,
        { twoClickVariant: H } = (0, I.a)({
            location: 'golivemodalv2',
            autoTrackExposure: !1
        }),
        V = i.useRef(performance.now()),
        Y = (0, f.e7)([b.Z], () => b.Z.getUseSystemScreensharePicker() && (0, y.isMac)() && o().satisfies(null === x.Z || void 0 === x.Z ? void 0 : x.Z.os.release, G.jR)),
        J = (0, f.e7)([N.default], () => N.default.getCurrentUser()),
        X = !Z.ZP.canStreamQuality(Z.ZP.StreamQuality.HIGH, J),
        { analyticsLocations: K } = (0, _.ZP)(g.Z.GO_LIVE_MODAL_V2),
        q = !F && null != a,
        Q = (0, E.Z)(),
        { state: $, dispatch: ee } = (0, R.Ti)(a, J, Q),
        et = !q && H && (!Y || $.sourceType === u.vA.CAMERA);
    (0, D.Z)(Y, ee);
    let en = i.useMemo(() => {
            let e = [
                {
                    name: U.NW.string(U.t.tHoi7u),
                    value: u.vA.WINDOW,
                    icon: m.GON
                },
                {
                    name: U.NW.string(U.t.MhJ43N),
                    value: u.vA.CAMERA,
                    icon: m.Odl
                }
            ];
            return (
                Y ||
                    e.splice(1, 0, {
                        name: U.NW.string(U.t.slM8rK),
                        value: u.vA.SCREEN,
                        icon: m.pzj
                    }),
                e
            );
        }, [Y]),
        { sourceType: er } = $,
        ei = i.useCallback(
            async (e) => {
                v.eo.updateSetting($.notifyFriends), v.I0.updateSetting($.hidePreview);
                let [t, r] = await (0, T.Z)(e.hasOwnProperty('pid') ? e.pid : e, {
                    preset: $.preset,
                    fps: $.fps,
                    resolution: $.resolution,
                    soundshareEnabled: !$.muteStreamAudio,
                    previewDisabled: $.hidePreview,
                    goLiveModalDurationMs: performance.now() - V.current,
                    audioSourceId: $.audioSourceId
                });
                if (t) return n();
                'no permission' === r &&
                    h.Z.show({
                        title: U.NW.string(U.t['X+mXen']),
                        body: U.NW.string(U.t.MIJCzs)
                    }),
                    n();
            },
            [n, $]
        );
    async function el(e) {
        (await (0, p.Z)({ channelId: e })) && null != a && ei(a);
    }
    let es = i.useCallback(() => {
        ei({
            id: 'prepicked:',
            name: U.NW.string(U.t['KKcy9/']),
            url: ''
        });
    }, [ei]);
    return (0, r.jsx)(R.Yw, {
        state: $,
        dispatch: ee,
        children: (0, r.jsxs)(m.Y0X, {
            impression: {
                impressionName: c.ImpressionNames.GO_LIVE_MODAL,
                impressionProperties: {
                    location_stack: K,
                    application_id: (0, y.isWindows)() ? (null == (t = (0, O.Z)(j.ZP, C.Z)) ? void 0 : t.id) : void 0,
                    parent_media_session_id: S.Z.getMediaSessionId()
                }
            },
            className: s()(z.root, {
                [z.nativePicker]: Y && null == a,
                [z.channelSelector]: q
            }),
            size: m.CgR.DYNAMIC,
            transitionState: l,
            children: [
                q
                    ? (0, r.jsx)(P.Z, { onSelectChannel: el })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(m.xBx, {
                                  separator: !1,
                                  className: z.header,
                                  children: (0, r.jsx)(m.sY7, {
                                      className: z.segmentedControl,
                                      value: er,
                                      look: 'pill',
                                      optionClassName: z.segmentedControlOption,
                                      onChange: (e) => {
                                          let { value: t } = e;
                                          return ee({
                                              type: 'set_source_type',
                                              sourceType: t
                                          });
                                      },
                                      options: en
                                  })
                              }),
                              (0, r.jsx)(m.hzk, {
                                  className: z.content,
                                  children:
                                      Y && er !== u.vA.CAMERA
                                          ? (0, r.jsx)(W.Z, { onSourceSelect: es })
                                          : (0, r.jsx)(k.Z, {
                                                onClick: function (e) {
                                                    if (!H) return ei(e);
                                                    ee({
                                                        type: 'set_selected_source',
                                                        source: e
                                                    });
                                                }
                                            })
                              })
                          ]
                      }),
                X && (0, r.jsx)(M.Z, { onClose: n }),
                (0, r.jsxs)(m.mzw, {
                    className: s()(z.footer, { [z.footerShadow]: !X }),
                    separator: !1,
                    justify: d.k.Justify.BETWEEN,
                    align: d.k.Align.CENTER,
                    direction: d.k.Direction.HORIZONTAL,
                    children: [
                        (0, r.jsx)(L.Z, { nativePickerEnabled: Y }),
                        (0, r.jsxs)('div', {
                            className: z.rightButtonGroup,
                            children: [
                                Y &&
                                    er !== u.vA.CAMERA &&
                                    (0, r.jsx)(m.zxk, {
                                        size: m.zxk.Sizes.LARGE,
                                        onClick: () => {
                                            (0, w.t)(), (0, w.T)('');
                                        },
                                        children: U.NW.string(U.t.FiBjwc)
                                    }),
                                et &&
                                    (0, r.jsx)(m.zxk, {
                                        size: m.zxk.Sizes.LARGE,
                                        className: z.streamButton,
                                        disabled: null == $.selectedSource,
                                        onClick: () => null != $.selectedSource && ei($.selectedSource),
                                        children: U.NW.string(B.Z['5AyH/v'])
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
