(a.d(t, { default: () => v }), a(388685));
var n = a(255367),
    r = a(73800),
    i = a(481060),
    o = a(846027),
    c = a(410575),
    s = a(2052),
    l = a(100527),
    u = a(906732),
    d = a(600164),
    p = a(313201),
    _ = a(695346),
    g = a(932724),
    f = a(716161),
    m = a(672339),
    b = a(898531),
    h = a(131951),
    y = a(594174),
    S = a(626135),
    O = a(747545),
    C = a(981631),
    T = a(388032),
    I = a(994950);
function v(e) {
    let { transitionState: t, videoEnabled: a, onEnable: v, onClose: A } = e,
        P = h.Z.getCameraComponent(),
        E = (0, p.Dt)(),
        R = (0, b.Z)(),
        w = _.qF.useSetting(),
        [N, L] = r.useState((0, g.P)(y.default.getCurrentUser())),
        x = (0, s.O)(),
        { analyticsLocations: D } = (0, u.ZP)(l.Z.CAMERA_PREVIEW),
        j = r.useRef(null);
    (r.useEffect(() => {
        S.default.track(C.rMx.OPEN_MODAL, { type: 'Camera Preview Modal' });
    }, []),
        r.useEffect(() => {
            var e;
            null == (e = j.current) || e.scrollToTop();
        }, []));
    let M = async () => {
            (await U(), o.Z.setVideoEnabled(!0), null == v || v());
        },
        U = async () => {
            try {
                await (0, m.wG)(N, {
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
                    })({ page: C.ZY5.PREVIEW_CAMERA_MODAL }, x.location)
                });
            } catch (e) {}
            (await A(), (0, f.Up)(N));
        };
    return (0, n.jsx)(u.Gt, {
        value: D,
        children: (0, n.jsx)(c.Z, {
            page: C.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, n.jsxs)(i.Y0X, {
                className: I.modalRoot,
                size: i.CgR.DYNAMIC,
                'aria-labelledby': E,
                transitionState: t,
                parentComponent: 'CameraPreviewModal',
                children: [
                    (0, n.jsxs)(i.hzk, {
                        className: R ? I.contentWithVideoBackgrounds : I.content,
                        scrollerRef: j,
                        children: [
                            (0, n.jsx)(i.X6q, {
                                id: E,
                                className: I.header,
                                variant: 'heading-xl/semibold',
                                children: a ? T.intl.string(T.t.LAwwbW) : T.intl.string(T.t['/HITVF'])
                            }),
                            (0, n.jsx)(O.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: N,
                                onSelectBackgroundOption: L,
                                hideDeviceSelector: a,
                                renderCamera: (e) =>
                                    (0, n.jsxs)('div', {
                                        className: I.cameraPreview,
                                        children: [
                                            (0, n.jsx)('div', {
                                                className: I.camera,
                                                children: (0, n.jsx)(P, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207
                                                })
                                            }),
                                            (0, n.jsx)(O.S, {})
                                        ]
                                    }),
                                onLearnMore: A
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
                                value: w,
                                onChange: () => {
                                    (_.qF.updateSetting(!w), S.default.track(C.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !w }));
                                },
                                children: (0, n.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: T.intl.string(T.t['3Ppr1t'])
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)(i.olH, {
                        onClick: A,
                        className: I.modalClose
                    })
                ]
            })
        })
    });
}
