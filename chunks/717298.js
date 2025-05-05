n.d(t, { Z: () => F }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
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
    C = n(594174),
    y = n(449224),
    Z = n(358085),
    I = n(74538),
    w = n(668519),
    O = n(299570),
    N = n(989941),
    T = n(562224),
    E = n(544753),
    P = n(560749),
    R = n(615161),
    k = n(289989),
    A = n(328242),
    M = n(565574),
    L = n(51708),
    D = n(801604),
    G = n(577257),
    B = n(70722),
    U = n(843874),
    z = n(388032),
    W = n(321910);
function F(e) {
    var t;
    let { onClose: n, transitionState: i, sourceApplication: a, selectSource: F = !0 } = e,
        { twoClickVariant: H } = (0, w.a)({
            location: 'golivemodalv2',
            autoTrackExposure: !1
        }),
        V = l.useRef(performance.now()),
        Y = (0, f.e7)([b.Z], () => b.Z.getUseSystemScreensharePicker() && (0, Z.isMac)() && o().satisfies(null === x.Z || void 0 === x.Z ? void 0 : x.Z.os.release, B.jR)),
        J = (0, f.e7)([C.default], () => C.default.getCurrentUser()),
        X = !I.ZP.canStreamQuality(I.ZP.StreamQuality.HIGH, J),
        { analyticsLocations: K } = (0, _.ZP)(g.Z.GO_LIVE_MODAL_V2),
        q = !F && null != a,
        Q = (0, E.Z)(),
        { state: $, dispatch: ee } = (0, R.Ti)(a, J, Q),
        et = !q && H && (!Y || $.sourceType === u.vA.CAMERA);
    (0, G.Z)(Y, ee);
    let en = l.useMemo(() => {
            let e = [
                {
                    name: z.intl.string(z.t.tHoi7u),
                    value: u.vA.WINDOW,
                    icon: m.GON
                },
                {
                    name: z.intl.string(z.t.MhJ43N),
                    value: u.vA.CAMERA,
                    icon: m.Odl
                }
            ];
            return (
                Y ||
                    e.splice(1, 0, {
                        name: z.intl.string(z.t.slM8rK),
                        value: u.vA.SCREEN,
                        icon: m.pzj
                    }),
                e
            );
        }, [Y]),
        { sourceType: er } = $,
        el = l.useCallback(
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
                        title: z.intl.string(z.t['X+mXen']),
                        body: z.intl.string(z.t.MIJCzs)
                    }),
                    n();
            },
            [n, $]
        );
    async function ei(e) {
        (await (0, p.Z)({ channelId: e })) && null != a && el(a);
    }
    let es = l.useCallback(() => {
        el({
            id: 'prepicked:',
            name: z.intl.string(z.t['KKcy9/']),
            url: ''
        });
    }, [el]);
    return (0, r.jsx)(R.Yw, {
        state: $,
        dispatch: ee,
        children: (0, r.jsxs)(m.Y0X, {
            impression: {
                impressionName: c.ImpressionNames.GO_LIVE_MODAL,
                impressionProperties: {
                    location_stack: K,
                    application_id: (0, Z.isWindows)() ? (null == (t = (0, N.Z)(j.ZP, y.Z)) ? void 0 : t.id) : void 0,
                    parent_media_session_id: S.Z.getMediaSessionId()
                }
            },
            className: s()(W.root, {
                [W.nativePicker]: Y && null == a,
                [W.channelSelector]: q
            }),
            size: m.CgR.DYNAMIC,
            transitionState: i,
            children: [
                q
                    ? (0, r.jsx)(P.Z, { onSelectChannel: ei })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(m.xBx, {
                                  separator: !1,
                                  className: W.header,
                                  children: (0, r.jsx)(m.sY7, {
                                      className: W.segmentedControl,
                                      value: er,
                                      look: 'pill',
                                      optionClassName: W.segmentedControlOption,
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
                                  className: W.content,
                                  children:
                                      Y && er !== u.vA.CAMERA
                                          ? (0, r.jsx)(k.Z, { onSourceSelect: es })
                                          : (0, r.jsx)(A.Z, {
                                                onClick: function (e) {
                                                    if (!H) return el(e);
                                                    ee({
                                                        type: 'set_selected_source',
                                                        source: e
                                                    });
                                                }
                                            })
                              })
                          ]
                      }),
                X && (0, r.jsx)(L.Z, { onClose: n }),
                (0, r.jsxs)(m.mzw, {
                    className: s()(W.footer, { [W.footerShadow]: !X }),
                    separator: !1,
                    justify: d.k.Justify.BETWEEN,
                    align: d.k.Align.CENTER,
                    direction: d.k.Direction.HORIZONTAL,
                    children: [
                        (0, r.jsx)(D.Z, { nativePickerEnabled: Y }),
                        (0, r.jsxs)('div', {
                            className: W.rightButtonGroup,
                            children: [
                                Y &&
                                    er !== u.vA.CAMERA &&
                                    (0, r.jsx)(m.zxk, {
                                        size: m.zxk.Sizes.LARGE,
                                        onClick: () => {
                                            (0, O.t)(), (0, O.T)('');
                                        },
                                        children: z.intl.string(z.t.FiBjwc)
                                    }),
                                et &&
                                    (0, r.jsx)(m.zxk, {
                                        size: m.zxk.Sizes.LARGE,
                                        className: W.streamButton,
                                        disabled: null == $.selectedSource,
                                        onClick: () => null != $.selectedSource && el($.selectedSource),
                                        children: z.intl.string(U.default['5AyH/v'])
                                    }),
                                (0, r.jsx)(M.Z, { align: 'right' })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
