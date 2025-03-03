n.d(t, { Z: () => M }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(209739),
    s = n.n(i),
    o = n(990547),
    a = n(435935),
    c = n(268146),
    d = n(442837),
    u = n(481060),
    f = n(668781),
    h = n(579806),
    m = n(89425),
    p = n(100527),
    x = n(906732),
    g = n(594190),
    _ = n(131951),
    v = n(19780),
    j = n(594174),
    b = n(449224),
    C = n(358085),
    S = n(74538),
    N = n(299570),
    y = n(989941),
    Z = n(562224),
    w = n(560749),
    O = n(615161),
    I = n(289989),
    P = n(328242),
    T = n(565574),
    E = n(51708),
    R = n(934192),
    W = n(70722),
    k = n(388032),
    A = n(312253);
function M(e) {
    var t;
    let { onClose: n, transitionState: i, sourceApplication: M } = e,
        L = l.useRef(performance.now()),
        { state: D, dispatch: G } = (0, O.Ti)(M),
        B = (0, d.e7)([_.Z], () => _.Z.getUseSystemScreensharePicker() && (0, C.isMac)() && s().satisfies(null === h.Z || void 0 === h.Z ? void 0 : h.Z.os.release, W.jR)),
        U = (0, d.e7)([j.default], () => j.default.getCurrentUser()),
        z = !S.ZP.canStreamQuality(S.ZP.StreamQuality.HIGH, U),
        { analyticsLocations: F } = (0, x.ZP)(p.Z.GO_LIVE_MODAL_V2),
        H = l.useMemo(() => {
            let e = [
                {
                    name: k.NW.string(k.t.tHoi7u),
                    value: c.vA.WINDOW,
                    icon: u.GON
                },
                {
                    name: k.NW.string(k.t.MhJ43N),
                    value: c.vA.CAMERA,
                    icon: u.Odl
                }
            ];
            return (
                B ||
                    e.splice(1, 0, {
                        name: k.NW.string(k.t.slM8rK),
                        value: c.vA.SCREEN,
                        icon: u.pzj
                    }),
                e
            );
        }, [B]),
        { sourceType: V } = D,
        J = l.useCallback(
            async (e) => {
                let [t, r] = await (0, Z.Z)(e.hasOwnProperty('pid') ? e.pid : e, {
                    preset: D.preset,
                    fps: D.fps,
                    resolution: D.resolution,
                    soundshareEnabled: !D.muteStreamAudio,
                    previewDisabled: D.hidePreview,
                    goLiveModalDurationMs: performance.now() - L.current
                });
                if (t) return n();
                'no permission' === r &&
                    f.Z.show({
                        title: k.NW.string(k.t['X+mXen']),
                        body: k.NW.string(k.t.MIJCzs)
                    }),
                    n();
            },
            [n, D]
        );
    async function X(e) {
        (await (0, m.Z)({ channelId: e })) && null != D.sourceApplication && J(D.sourceApplication);
    }
    let Y = l.useCallback(() => {
        J({
            id: 'prepicked:',
            name: k.NW.string(k.t['KKcy9/']),
            url: ''
        });
    }, [J]);
    return (0, r.jsx)(O.Yw, {
        state: D,
        dispatch: G,
        children: (0, r.jsxs)(u.Y0X, {
            impression: {
                impressionName: o.ImpressionNames.GO_LIVE_MODAL,
                impressionProperties: {
                    location_stack: F,
                    application_id: (0, C.isWindows)() ? (null === (t = (0, y.Z)(g.ZP, b.Z)) || void 0 === t ? void 0 : t.id) : void 0,
                    parent_media_session_id: v.Z.getMediaSessionId()
                }
            },
            className: A.root,
            size: u.CgR.LARGE,
            transitionState: i,
            children: [
                null != D.sourceApplication
                    ? (0, r.jsx)(w.Z, { onSelectChannel: X })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(u.xBx, {
                                  separator: !1,
                                  className: A.header,
                                  children: (0, r.jsx)(u.sY7, {
                                      className: A.segmentedControl,
                                      value: V,
                                      look: 'pill',
                                      onChange: (e) => {
                                          let { value: t } = e;
                                          return G({
                                              type: 'set_source_type',
                                              sourceType: t
                                          });
                                      },
                                      options: H
                                  })
                              }),
                              (0, r.jsx)(u.hzk, {
                                  className: A.content,
                                  children: B && V !== c.vA.CAMERA ? (0, r.jsx)(I.Z, { onSourceSelect: Y }) : (0, r.jsx)(P.Z, { onClick: J })
                              })
                          ]
                      }),
                z && (0, r.jsx)(E.Z, { onClose: n }),
                (0, r.jsxs)(u.mzw, {
                    className: A.footer,
                    separator: !1,
                    justify: a.k.Justify.BETWEEN,
                    align: a.k.Align.CENTER,
                    direction: a.k.Direction.HORIZONTAL,
                    children: [
                        (0, r.jsx)(R.Z, { onClose: n }),
                        (0, r.jsxs)('div', {
                            className: A.rightButtonGroup,
                            children: [
                                B &&
                                    V !== c.vA.CAMERA &&
                                    (0, r.jsx)(u.zxk, {
                                        size: u.zxk.Sizes.LARGE,
                                        onClick: () => {
                                            (0, N.t)(), (0, N.T)('');
                                        },
                                        children: k.NW.string(k.t.FiBjwc)
                                    }),
                                (0, r.jsx)(T.Z, {})
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
