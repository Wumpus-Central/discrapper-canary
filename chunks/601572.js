n.d(t, { default: () => w }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(481060),
    a = n(846027),
    o = n(410575),
    c = n(2052),
    u = n(100527),
    s = n(906732),
    d = n(600164),
    f = n(313201),
    b = n(695346),
    O = n(932724),
    g = n(716161),
    p = n(672339),
    S = n(898531),
    y = n(131951),
    E = n(594174),
    P = n(626135),
    v = n(747545),
    _ = n(981631),
    h = n(388032),
    m = n(994950);
function w(e) {
    let { transitionState: t, videoEnabled: n, onEnable: w, onClose: D } = e,
        A = y.Z.getCameraComponent(),
        j = (0, f.Dt)(),
        L = (0, S.Z)(),
        T = b.qF.useSetting(),
        [R, I] = l.useState((0, O.P)(E.default.getCurrentUser())),
        Z = (0, c.O)(),
        { analyticsLocations: C } = (0, s.ZP)(u.Z.CAMERA_PREVIEW),
        N = l.useRef(null);
    l.useEffect(() => {
        P.default.track(_.rMx.OPEN_MODAL, { type: 'Camera Preview Modal' });
    }, []),
        l.useEffect(() => {
            var e;
            null == (e = N.current) || e.scrollToTop();
        }, []);
    let G = async () => {
            await U(), a.Z.setVideoEnabled(!0), null == w || w();
        },
        U = async () => {
            try {
                await (0, p.wG)(R, {
                    location: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({ page: _.ZY5.PREVIEW_CAMERA_MODAL }, Z.location)
                });
            } catch (e) {}
            await D(), (0, g.Up)(R);
        };
    return (0, r.jsx)(s.Gt, {
        value: C,
        children: (0, r.jsx)(o.Z, {
            page: _.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, r.jsxs)(i.Y0X, {
                className: m.modalRoot,
                size: i.CgR.DYNAMIC,
                'aria-labelledby': j,
                transitionState: t,
                children: [
                    (0, r.jsxs)(i.hzk, {
                        className: L ? m.contentWithVideoBackgrounds : m.content,
                        scrollerRef: N,
                        children: [
                            (0, r.jsx)(i.X6q, {
                                id: j,
                                className: m.header,
                                variant: 'heading-xl/semibold',
                                children: n ? h.intl.string(h.t.LAwwbW) : h.intl.string(h.t['/HITVF'])
                            }),
                            (0, r.jsx)(v.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: R,
                                onSelectBackgroundOption: I,
                                hideDeviceSelector: n,
                                renderCamera: (e) =>
                                    (0, r.jsxs)('div', {
                                        className: m.cameraPreview,
                                        children: [
                                            (0, r.jsx)('div', {
                                                className: m.camera,
                                                children: (0, r.jsx)(A, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207
                                                })
                                            }),
                                            (0, r.jsx)(v.S, {})
                                        ]
                                    }),
                                onLearnMore: D
                            })
                        ]
                    }),
                    (0, r.jsxs)(i.mzw, {
                        justify: d.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = n ? h.intl.string(h.t.KQENho) : h.intl.string(h.t.kgIe9f);
                                return (0, r.jsx)(i.zxk, {
                                    onClick: n ? U : G,
                                    size: i.zxk.Sizes.SMALL,
                                    autoFocus: !n,
                                    children: e
                                });
                            })(),
                            (0, r.jsx)(i.XZJ, {
                                size: 18,
                                type: i.XZJ.Types.INVERTED,
                                value: T,
                                onChange: () => {
                                    b.qF.updateSetting(!T), P.default.track(_.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !T });
                                },
                                children: (0, r.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: h.intl.string(h.t['3Ppr1t'])
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(i.olH, {
                        onClick: D,
                        className: m.modalClose
                    })
                ]
            })
        })
    });
}
