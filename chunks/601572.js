n.d(t, { default: () => I }), n(388685);
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
    m = n(672339),
    f = n(898531),
    y = n(131951),
    S = n(594174),
    h = n(626135),
    O = n(747545),
    C = n(981631),
    v = n(388032),
    T = n(288715);
function I(e) {
    let { transitionState: t, videoEnabled: n, onEnable: I, onClose: P } = e,
        E = y.Z.getCameraComponent(),
        x = (0, _.Dt)(),
        A = (0, f.Z)(),
        w = p.qF.useSetting(),
        [L, D] = r.useState((0, g.P)(S.default.getCurrentUser())),
        k = (0, l.O)(),
        { analyticsLocations: R } = (0, u.ZP)(s.Z.CAMERA_PREVIEW),
        M = r.useRef(null);
    r.useEffect(() => {
        h.default.track(C.rMx.OPEN_MODAL, { type: 'Camera Preview Modal' });
    }, []),
        r.useEffect(() => {
            var e;
            null == (e = M.current) || e.scrollToTop();
        }, []);
    let j = async () => {
            await N(), i.Z.setVideoEnabled(!0), null == I || I();
        },
        N = async () => {
            try {
                await (0, m.wG)(L, {
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
                    })({ page: C.ZY5.PREVIEW_CAMERA_MODAL }, k.location)
                });
            } catch (e) {}
            await P(), (0, b.Up)(L);
        };
    return (0, a.jsx)(u.Gt, {
        value: R,
        children: (0, a.jsx)(c.Z, {
            page: C.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, a.jsxs)(o.Y0X, {
                className: T.modalRoot,
                size: o.CgR.DYNAMIC,
                'aria-labelledby': x,
                transitionState: t,
                children: [
                    (0, a.jsxs)(o.hzk, {
                        className: A ? T.contentWithVideoBackgrounds : T.content,
                        scrollerRef: M,
                        children: [
                            (0, a.jsx)(o.X6q, {
                                id: x,
                                className: T.header,
                                variant: 'heading-xl/semibold',
                                children: n ? v.intl.string(v.t.LAwwbW) : v.intl.string(v.t['/HITVF'])
                            }),
                            (0, a.jsx)(O.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: L,
                                onSelectBackgroundOption: D,
                                hideDeviceSelector: n,
                                renderCamera: (e) =>
                                    (0, a.jsxs)('div', {
                                        className: T.cameraPreview,
                                        children: [
                                            (0, a.jsx)('div', {
                                                className: T.camera,
                                                children: (0, a.jsx)(E, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207
                                                })
                                            }),
                                            (0, a.jsx)(O.S, {})
                                        ]
                                    }),
                                onLearnMore: P
                            })
                        ]
                    }),
                    (0, a.jsxs)(o.mzw, {
                        justify: d.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = n ? v.intl.string(v.t.KQENho) : v.intl.string(v.t.kgIe9f);
                                return (0, a.jsx)(o.zxk, {
                                    onClick: n ? N : j,
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
                                    p.qF.updateSetting(!w), h.default.track(C.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !w });
                                },
                                children: (0, a.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    children: v.intl.string(v.t['3Ppr1t'])
                                })
                            })
                        ]
                    }),
                    (0, a.jsx)(o.olH, {
                        onClick: P,
                        className: T.modalClose
                    })
                ]
            })
        })
    });
}
