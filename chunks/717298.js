n.d(t, { Z: () => B }), n(47120);
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
    p = n(579806),
    x = n(89425),
    g = n(100527),
    _ = n(906732),
    v = n(594190),
    j = n(695346),
    b = n(131951),
    C = n(19780),
    S = n(594174),
    N = n(449224),
    y = n(358085),
    Z = n(74538),
    w = n(299570),
    O = n(989941),
    I = n(562224),
    P = n(560749),
    T = n(615161),
    E = n(289989),
    R = n(328242),
    W = n(565574),
    k = n(51708),
    A = n(934192),
    M = n(577257),
    L = n(70722),
    D = n(388032),
    G = n(312253);
function B(e) {
    var t;
    let { onClose: n, transitionState: i, sourceApplication: o } = e,
        B = l.useRef(performance.now()),
        { state: U, dispatch: z } = (0, T.Ti)(o),
        F = (0, f.e7)([b.Z], () => b.Z.getUseSystemScreensharePicker() && (0, y.isMac)() && a().satisfies(null === p.Z || void 0 === p.Z ? void 0 : p.Z.os.release, L.jR)),
        H = (0, f.e7)([S.default], () => S.default.getCurrentUser()),
        V = !Z.ZP.canStreamQuality(Z.ZP.StreamQuality.HIGH, H),
        { analyticsLocations: J } = (0, _.ZP)(g.Z.GO_LIVE_MODAL_V2);
    (0, M.Z)(F, z);
    let X = l.useMemo(() => {
            let e = [
                {
                    name: D.NW.string(D.t.tHoi7u),
                    value: u.vA.WINDOW,
                    icon: h.GON
                },
                {
                    name: D.NW.string(D.t.MhJ43N),
                    value: u.vA.CAMERA,
                    icon: h.Odl
                }
            ];
            return (
                F ||
                    e.splice(1, 0, {
                        name: D.NW.string(D.t.slM8rK),
                        value: u.vA.SCREEN,
                        icon: h.pzj
                    }),
                e
            );
        }, [F]),
        { sourceType: Y } = U,
        K = l.useCallback(
            async (e) => {
                j.eo.updateSetting(U.notifyFriends);
                let [t, r] = await (0, I.Z)(e.hasOwnProperty('pid') ? e.pid : e, {
                    preset: U.preset,
                    fps: U.fps,
                    resolution: U.resolution,
                    soundshareEnabled: !U.muteStreamAudio,
                    previewDisabled: U.hidePreview,
                    goLiveModalDurationMs: performance.now() - B.current
                });
                if (t) return n();
                'no permission' === r &&
                    m.Z.show({
                        title: D.NW.string(D.t['X+mXen']),
                        body: D.NW.string(D.t.MIJCzs)
                    }),
                    n();
            },
            [n, U]
        );
    async function q(e) {
        (await (0, x.Z)({ channelId: e })) && null != U.sourceApplication && K(U.sourceApplication);
    }
    let Q = l.useCallback(() => {
        K({
            id: 'prepicked:',
            name: D.NW.string(D.t['KKcy9/']),
            url: ''
        });
    }, [K]);
    return (0, r.jsx)(T.Yw, {
        state: U,
        dispatch: z,
        children: (0, r.jsxs)(h.Y0X, {
            impression: {
                impressionName: c.ImpressionNames.GO_LIVE_MODAL,
                impressionProperties: {
                    location_stack: J,
                    application_id: (0, y.isWindows)() ? (null === (t = (0, O.Z)(v.ZP, N.Z)) || void 0 === t ? void 0 : t.id) : void 0,
                    parent_media_session_id: C.Z.getMediaSessionId()
                }
            },
            className: s()(G.root, F && G.nativePicker),
            size: h.CgR.LARGE,
            transitionState: i,
            children: [
                null != U.sourceApplication
                    ? (0, r.jsx)(P.Z, { onSelectChannel: q })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.xBx, {
                                  separator: !1,
                                  className: G.header,
                                  children: (0, r.jsx)(h.sY7, {
                                      className: G.segmentedControl,
                                      value: Y,
                                      look: 'pill',
                                      optionClassName: G.segmentedControlOption,
                                      onChange: (e) => {
                                          let { value: t } = e;
                                          return z({
                                              type: 'set_source_type',
                                              sourceType: t
                                          });
                                      },
                                      options: X
                                  })
                              }),
                              (0, r.jsx)(h.hzk, {
                                  className: G.content,
                                  children: F && Y !== u.vA.CAMERA ? (0, r.jsx)(E.Z, { onSourceSelect: Q }) : (0, r.jsx)(R.Z, { onClick: K })
                              })
                          ]
                      }),
                V && (0, r.jsx)(k.Z, { onClose: n }),
                (0, r.jsxs)(h.mzw, {
                    className: G.footer,
                    separator: !1,
                    justify: d.k.Justify.BETWEEN,
                    align: d.k.Align.CENTER,
                    direction: d.k.Direction.HORIZONTAL,
                    children: [
                        (0, r.jsx)(A.Z, { onClose: n }),
                        (0, r.jsxs)('div', {
                            className: G.rightButtonGroup,
                            children: [
                                F &&
                                    Y !== u.vA.CAMERA &&
                                    (0, r.jsx)(h.zxk, {
                                        size: h.zxk.Sizes.LARGE,
                                        onClick: () => {
                                            (0, w.t)(), (0, w.T)('');
                                        },
                                        children: D.NW.string(D.t.FiBjwc)
                                    }),
                                (0, r.jsx)(W.Z, {})
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
