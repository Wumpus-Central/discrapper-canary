(a.d(t, { default: () => A }), a(388685));
var n = a(255367),
    r = a(73800),
    i = a(481060),
    o = a(846027),
    c = a(410575),
    l = a(2052),
    s = a(100527),
    u = a(906732),
    d = a(600164),
    p = a(313201),
    _ = a(695346),
    g = a(932724),
    f = a(716161),
    m = a(672339),
    b = a(898531),
    y = a(131951),
    O = a(594174),
    h = a(626135),
    S = a(747545),
    C = a(981631),
    T = a(388032),
    v = a(994950);
function A(e) {
    let { transitionState: t, videoEnabled: a, onEnable: A, onClose: I } = e,
        P = y.Z.getCameraComponent(),
        E = (0, p.Dt)(),
        w = (0, b.Z)(),
        N = _.qF.useSetting(),
        [R, D] = r.useState((0, g.P)(O.default.getCurrentUser())),
        L = (0, l.O)(),
        { analyticsLocations: x } = (0, u.ZP)(s.Z.CAMERA_PREVIEW),
        j = r.useRef(null);
    (r.useEffect(() => {
        h.default.track(C.rMx.OPEN_MODAL, { type: 'Camera Preview Modal' });
    }, []),
        r.useEffect(() => {
            var e;
            null == (e = j.current) || e.scrollToTop();
        }, []));
    let M = async () => {
            (await U(), o.Z.setVideoEnabled(!0), null == A || A());
        },
        U = async () => {
            try {
                await (0, m.wG)(R, {
                    location: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(a);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(a).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                    })
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    ((n = a[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = n));
                                }));
                        }
                        return e;
                    })({ page: C.ZY5.PREVIEW_CAMERA_MODAL }, L.location)
                });
            } catch (e) {}
            (await I(), (0, f.Up)(R));
        };
    return (0, n.jsx)(u.Gt, {
        value: x,
        children: (0, n.jsx)(c.Z, {
            page: C.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, n.jsxs)(i.Y0X, {
                className: v.modalRoot,
                size: i.CgR.DYNAMIC,
                'aria-labelledby': E,
                transitionState: t,
                parentComponent: 'CameraPreviewModal',
                children: [
                    (0, n.jsxs)(i.hzk, {
                        className: w ? v.contentWithVideoBackgrounds : v.content,
                        scrollerRef: j,
                        children: [
                            (0, n.jsx)(i.X6q, {
                                id: E,
                                className: v.header,
                                variant: 'heading-xl/semibold',
                                children: a ? T.intl.string(T.t.LAwwbW) : T.intl.string(T.t['/HITVF'])
                            }),
                            (0, n.jsx)(S.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: R,
                                onSelectBackgroundOption: D,
                                hideDeviceSelector: a,
                                renderCamera: (e) =>
                                    (0, n.jsxs)('div', {
                                        className: v.cameraPreview,
                                        children: [
                                            (0, n.jsx)('div', {
                                                className: v.camera,
                                                children: (0, n.jsx)(P, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207
                                                })
                                            }),
                                            (0, n.jsx)(S.S, {})
                                        ]
                                    }),
                                onLearnMore: I
                            })
                        ]
                    }),
                    (0, n.jsxs)(i.mzw, {
                        justify: d.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = a ? T.intl.string(T.t.KQENho) : T.intl.string(T.t.kgIe9f);
                                return (0, n.jsx)(i.zxk, {
                                    variant: 'primary',
                                    size: 'sm',
                                    text: e,
                                    onClick: a ? U : M,
                                    autoFocus: !a
                                });
                            })(),
                            (0, n.jsx)(i.XZJ, {
                                size: 18,
                                type: i.XZJ.Types.INVERTED,
                                value: N,
                                onChange: () => {
                                    (_.qF.updateSetting(!N), h.default.track(C.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !N }));
                                },
                                children: (0, n.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: T.intl.string(T.t['3Ppr1t'])
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)(i.olH, {
                        onClick: I,
                        className: v.modalClose
                    })
                ]
            })
        })
    });
}
