n.d(t, { default: () => v }), n(388685);
var a = n(255367),
    r = n(73800),
    o = n(481060),
    i = n(846027),
    c = n(410575),
    l = n(2052),
    s = n(100527),
    u = n(906732),
    d = n(600164),
    _ = n(313201),
    p = n(695346),
    g = n(932724),
    b = n(716161),
    f = n(672339),
    m = n(898531),
    y = n(131951),
    S = n(594174),
    O = n(626135),
    h = n(747545),
    T = n(981631),
    C = n(388032),
    I = n(994950);
function v(e) {
    let { transitionState: t, videoEnabled: n, onEnable: v, onClose: A } = e,
        E = y.Z.getCameraComponent(),
        P = (0, _.Dt)(),
        x = (0, m.Z)(),
        w = p.qF.useSetting(),
        [N, L] = r.useState((0, g.P)(S.default.getCurrentUser())),
        D = (0, l.O)(),
        { analyticsLocations: R } = (0, u.ZP)(s.Z.CAMERA_PREVIEW),
        k = r.useRef(null);
    r.useEffect(() => {
        O.default.track(T.rMx.OPEN_MODAL, { type: 'Camera Preview Modal' });
    }, []),
        r.useEffect(() => {
            var e;
            null == (e = k.current) || e.scrollToTop();
        }, []);
    let M = async () => {
            await U(), i.Z.setVideoEnabled(!0), null == v || v();
        },
        U = async () => {
            try {
                await (0, f.wG)(N, {
                    location: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                a.forEach(function (t) {
                                    var a;
                                    (a = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = a);
                                });
                        }
                        return e;
                    })({ page: T.ZY5.PREVIEW_CAMERA_MODAL }, D.location)
                });
            } catch (e) {}
            await A(), (0, b.Up)(N);
        };
    return (0, a.jsx)(u.Gt, {
        value: R,
        children: (0, a.jsx)(c.Z, {
            page: T.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, a.jsxs)(o.Y0X, {
                className: I.modalRoot,
                size: o.CgR.DYNAMIC,
                'aria-labelledby': P,
                transitionState: t,
                parentComponent: 'CameraPreviewModal',
                children: [
                    (0, a.jsxs)(o.hzk, {
                        className: x ? I.contentWithVideoBackgrounds : I.content,
                        scrollerRef: k,
                        children: [
                            (0, a.jsx)(o.X6q, {
                                id: P,
                                className: I.header,
                                variant: 'heading-xl/semibold',
                                children: n ? C.intl.string(C.t.LAwwbW) : C.intl.string(C.t['/HITVF'])
                            }),
                            (0, a.jsx)(h.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: N,
                                onSelectBackgroundOption: L,
                                hideDeviceSelector: n,
                                renderCamera: (e) =>
                                    (0, a.jsxs)('div', {
                                        className: I.cameraPreview,
                                        children: [
                                            (0, a.jsx)('div', {
                                                className: I.camera,
                                                children: (0, a.jsx)(E, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207
                                                })
                                            }),
                                            (0, a.jsx)(h.S, {})
                                        ]
                                    }),
                                onLearnMore: A
                            })
                        ]
                    }),
                    (0, a.jsxs)(o.mzw, {
                        justify: d.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = n ? C.intl.string(C.t.KQENho) : C.intl.string(C.t.kgIe9f);
                                return (0, a.jsx)(o.zxk, {
                                    onClick: n ? U : M,
                                    size: o.zxk.Sizes.SMALL,
                                    autoFocus: !n,
                                    children: e
                                });
                            })(),
                            (0, a.jsx)(o.XZJ, {
                                size: 18,
                                type: o.XZJ.Types.INVERTED,
                                value: w,
                                onChange: () => {
                                    p.qF.updateSetting(!w), O.default.track(T.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !w });
                                },
                                children: (0, a.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    children: C.intl.string(C.t['3Ppr1t'])
                                })
                            })
                        ]
                    }),
                    (0, a.jsx)(o.olH, {
                        onClick: A,
                        className: I.modalClose
                    })
                ]
            })
        })
    });
}
