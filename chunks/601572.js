n.d(t, { default: () => S }), n(47120);
var o = n(200651),
    a = n(192379),
    i = n(481060),
    r = n(846027),
    l = n(410575),
    c = n(2052),
    s = n(100527),
    _ = n(906732),
    d = n(600164),
    u = n(313201),
    b = n(695346),
    f = n(932724),
    p = n(716161),
    g = n(672339),
    h = n(898531),
    m = n(131951),
    O = n(594174),
    C = n(626135),
    E = n(747545),
    I = n(981631),
    T = n(388032),
    v = n(313953);
function S(e) {
    let { transitionState: t, videoEnabled: n, onEnable: S, onClose: R } = e,
        A = m.Z.getCameraComponent(),
        N = (0, u.Dt)(),
        y = (0, h.Z)(),
        L = b.qF.useSetting(),
        [k, P] = a.useState((0, f.P)(O.default.getCurrentUser())),
        B = (0, c.O)(),
        { analyticsLocations: w } = (0, _.ZP)(s.Z.CAMERA_PREVIEW),
        D = a.useRef(null);
    a.useEffect(() => {
        C.default.track(I.rMx.OPEN_MODAL, { type: 'Camera Preview Modal' });
    }, []),
        a.useEffect(() => {
            var e;
            null === (e = D.current) || void 0 === e || e.scrollToTop();
        }, []);
    let x = async () => {
            await U(), r.Z.setVideoEnabled(!0), null == S || S();
        },
        U = async () => {
            try {
                await (0, g.wG)(k, {
                    location: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                o = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (o = o.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                o.forEach(function (t) {
                                    var o;
                                    (o = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: o,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = o);
                                });
                        }
                        return e;
                    })({ page: I.ZY5.PREVIEW_CAMERA_MODAL }, B.location)
                });
            } catch (e) {}
            await R(), (0, p.Up)(k);
        };
    return (0, o.jsx)(_.Gt, {
        value: w,
        children: (0, o.jsx)(l.Z, {
            page: I.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, o.jsxs)(i.Y0X, {
                className: v.modalRoot,
                size: i.CgR.DYNAMIC,
                'aria-labelledby': N,
                transitionState: t,
                children: [
                    (0, o.jsxs)(i.hzk, {
                        className: y ? v.contentWithVideoBackgrounds : v.content,
                        scrollerRef: D,
                        children: [
                            (0, o.jsx)(i.X6q, {
                                id: N,
                                className: v.header,
                                variant: 'heading-xl/semibold',
                                children: n ? T.NW.string(T.t.LAwwbW) : T.NW.string(T.t['/HITVF'])
                            }),
                            (0, o.jsx)(E.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: k,
                                onSelectBackgroundOption: P,
                                hideDeviceSelector: n,
                                renderCamera: (e) =>
                                    (0, o.jsxs)('div', {
                                        className: v.cameraPreview,
                                        children: [
                                            (0, o.jsx)('div', {
                                                className: v.camera,
                                                children: (0, o.jsx)(A, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207
                                                })
                                            }),
                                            (0, o.jsx)(E.S, {})
                                        ]
                                    }),
                                onLearnMore: R
                            })
                        ]
                    }),
                    (0, o.jsxs)(i.mzw, {
                        justify: d.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = n ? T.NW.string(T.t.KQENho) : T.NW.string(T.t.kgIe9f);
                                return (0, o.jsx)(i.zxk, {
                                    onClick: n ? U : x,
                                    size: i.zxk.Sizes.SMALL,
                                    autoFocus: !n,
                                    children: e
                                });
                            })(),
                            (0, o.jsx)(i.XZJ, {
                                size: 18,
                                type: i.XZJ.Types.INVERTED,
                                value: L,
                                onChange: () => {
                                    b.qF.updateSetting(!L), C.default.track(I.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !L });
                                },
                                children: (0, o.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: T.NW.string(T.t['3Ppr1t'])
                                })
                            })
                        ]
                    }),
                    (0, o.jsx)(i.olH, {
                        onClick: R,
                        className: v.modalClose
                    })
                ]
            })
        })
    });
}
