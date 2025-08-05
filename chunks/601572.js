(n.d(t, { default: () => k }), n(388685));
var r = n(255367),
    o = n(73800),
    i = n(481060),
    a = n(846027),
    l = n(410575),
    c = n(2052),
    s = n(100527),
    d = n(906732),
    u = n(600164),
    _ = n(313201),
    f = n(695346),
    p = n(932724),
    m = n(716161),
    b = n(672339),
    g = n(898531),
    C = n(131951),
    S = n(594174),
    h = n(626135),
    T = n(747545),
    O = n(981631),
    A = n(388032),
    B = n(994950);
function k(e) {
    let { transitionState: t, videoEnabled: n, onEnable: k, onClose: y } = e,
        v = C.Z.getCameraComponent(),
        w = (0, _.Dt)(),
        x = (0, g.Z)(),
        I = f.qF.useSetting(),
        [E, N] = o.useState((0, p.P)(S.default.getCurrentUser())),
        P = (0, c.O)(),
        { analyticsLocations: R } = (0, d.ZP)(s.Z.CAMERA_PREVIEW),
        j = o.useRef(null);
    (o.useEffect(() => {
        h.default.track(O.rMx.OPEN_MODAL, { type: 'Camera Preview Modal' });
    }, []),
        o.useEffect(() => {
            var e;
            null == (e = j.current) || e.scrollToTop();
        }, []));
    let U = async () => {
            (await H(), a.Z.setVideoEnabled(!0), null == k || k());
        },
        H = async () => {
            try {
                await (0, b.wG)(E, {
                    location: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    ((r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r));
                                }));
                        }
                        return e;
                    })({ page: O.ZY5.PREVIEW_CAMERA_MODAL }, P.location)
                });
            } catch (e) {}
            (await y(), (0, m.Up)(E));
        };
    return (0, r.jsx)(d.Gt, {
        value: R,
        children: (0, r.jsx)(l.Z, {
            page: O.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, r.jsxs)(i.Y0X, {
                className: B.modalRoot,
                size: i.CgR.DYNAMIC,
                'aria-labelledby': w,
                transitionState: t,
                parentComponent: 'CameraPreviewModal',
                children: [
                    (0, r.jsxs)(i.hzk, {
                        className: x ? B.contentWithVideoBackgrounds : B.content,
                        scrollerRef: j,
                        children: [
                            (0, r.jsx)(i.X6q, {
                                id: w,
                                className: B.header,
                                variant: 'heading-xl/semibold',
                                children: n ? A.intl.string(A.t.LAwwbW) : A.intl.string(A.t['/HITVF'])
                            }),
                            (0, r.jsx)(T.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: E,
                                onSelectBackgroundOption: N,
                                hideDeviceSelector: n,
                                renderCamera: (e) =>
                                    (0, r.jsxs)('div', {
                                        className: B.cameraPreview,
                                        children: [
                                            (0, r.jsx)('div', {
                                                className: B.camera,
                                                children: (0, r.jsx)(v, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207
                                                })
                                            }),
                                            (0, r.jsx)(T.S, {})
                                        ]
                                    }),
                                onLearnMore: y
                            })
                        ]
                    }),
                    (0, r.jsxs)(i.mzw, {
                        justify: u.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = n ? A.intl.string(A.t.KQENho) : A.intl.string(A.t.kgIe9f);
                                return (0, r.jsx)(i.zxk, {
                                    variant: 'primary',
                                    size: 'sm',
                                    text: e,
                                    onClick: n ? H : U,
                                    autoFocus: !n
                                });
                            })(),
                            (0, r.jsx)(i.XZJ, {
                                size: 18,
                                type: i.XZJ.Types.INVERTED,
                                value: I,
                                onChange: () => {
                                    (f.qF.updateSetting(!I), h.default.track(O.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !I }));
                                },
                                children: (0, r.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: A.intl.string(A.t['3Ppr1t'])
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(i.olH, {
                        onClick: y,
                        className: B.modalClose
                    })
                ]
            })
        })
    });
}
