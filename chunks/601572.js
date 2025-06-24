n.d(t, { default: () => S }), n(388685);
var a = n(255367),
    r = n(73800),
    i = n(481060),
    o = n(846027),
    c = n(410575),
    l = n(2052),
    s = n(100527),
    u = n(906732),
    d = n(600164),
    _ = n(313201),
    p = n(695346),
    m = n(932724),
    f = n(716161),
    g = n(672339),
    b = n(898531),
    T = n(131951),
    I = n(594174),
    C = n(626135),
    O = n(747545),
    h = n(981631),
    A = n(388032),
    E = n(994950);
function S(e) {
    let { transitionState: t, videoEnabled: n, onEnable: S, onClose: y } = e,
        N = T.Z.getCameraComponent(),
        P = (0, _.Dt)(),
        R = (0, b.Z)(),
        v = p.qF.useSetting(),
        [L, k] = r.useState((0, m.P)(I.default.getCurrentUser())),
        w = (0, l.O)(),
        { analyticsLocations: D } = (0, u.ZP)(s.Z.CAMERA_PREVIEW),
        x = r.useRef(null);
    r.useEffect(() => {
        C.default.track(h.rMx.OPEN_MODAL, { type: 'Camera Preview Modal' });
    }, []),
        r.useEffect(() => {
            var e;
            null == (e = x.current) || e.scrollToTop();
        }, []);
    let G = async () => {
            await U(), o.Z.setVideoEnabled(!0), null == S || S();
        },
        U = async () => {
            try {
                await (0, g.wG)(L, {
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
                    })({ page: h.ZY5.PREVIEW_CAMERA_MODAL }, w.location)
                });
            } catch (e) {}
            await y(), (0, f.Up)(L);
        };
    return (0, a.jsx)(u.Gt, {
        value: D,
        children: (0, a.jsx)(c.Z, {
            page: h.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, a.jsxs)(i.Y0X, {
                className: E.modalRoot,
                size: i.CgR.DYNAMIC,
                'aria-labelledby': P,
                transitionState: t,
                parentComponent: 'CameraPreviewModal',
                children: [
                    (0, a.jsxs)(i.hzk, {
                        className: R ? E.contentWithVideoBackgrounds : E.content,
                        scrollerRef: x,
                        children: [
                            (0, a.jsx)(i.X6q, {
                                id: P,
                                className: E.header,
                                variant: 'heading-xl/semibold',
                                children: n ? A.intl.string(A.t.LAwwbW) : A.intl.string(A.t['/HITVF'])
                            }),
                            (0, a.jsx)(O.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: L,
                                onSelectBackgroundOption: k,
                                hideDeviceSelector: n,
                                renderCamera: (e) =>
                                    (0, a.jsxs)('div', {
                                        className: E.cameraPreview,
                                        children: [
                                            (0, a.jsx)('div', {
                                                className: E.camera,
                                                children: (0, a.jsx)(N, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207
                                                })
                                            }),
                                            (0, a.jsx)(O.S, {})
                                        ]
                                    }),
                                onLearnMore: y
                            })
                        ]
                    }),
                    (0, a.jsxs)(i.mzw, {
                        justify: d.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = n ? A.intl.string(A.t.KQENho) : A.intl.string(A.t.kgIe9f);
                                return (0, a.jsx)(i.zxk, {
                                    onClick: n ? U : G,
                                    size: i.zxk.Sizes.SMALL,
                                    autoFocus: !n,
                                    children: e
                                });
                            })(),
                            (0, a.jsx)(i.XZJ, {
                                size: 18,
                                type: i.XZJ.Types.INVERTED,
                                value: v,
                                onChange: () => {
                                    p.qF.updateSetting(!v), C.default.track(h.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !v });
                                },
                                children: (0, a.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: A.intl.string(A.t['3Ppr1t'])
                                })
                            })
                        ]
                    }),
                    (0, a.jsx)(i.olH, {
                        onClick: y,
                        className: E.modalClose
                    })
                ]
            })
        })
    });
}
