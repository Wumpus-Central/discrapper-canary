n.d(t, { default: () => y }), n(388685);
var o = n(200651),
    a = n(192379),
    r = n(481060),
    i = n(846027),
    c = n(410575),
    l = n(2052),
    s = n(100527),
    _ = n(906732),
    d = n(600164),
    u = n(313201),
    b = n(695346),
    p = n(932724),
    f = n(716161),
    g = n(672339),
    m = n(898531),
    h = n(131951),
    S = n(594174),
    C = n(626135),
    v = n(747545),
    x = n(981631),
    O = n(388032),
    I = n(994950);
function y(e) {
    let { transitionState: t, videoEnabled: n, onEnable: y, onClose: T } = e,
        P = h.Z.getCameraComponent(),
        k = (0, u.Dt)(),
        B = (0, m.Z)(),
        w = b.qF.useSetting(),
        [A, E] = a.useState((0, p.P)(S.default.getCurrentUser())),
        j = (0, l.O)(),
        { analyticsLocations: D } = (0, _.ZP)(s.Z.CAMERA_PREVIEW),
        R = a.useRef(null);
    a.useEffect(() => {
        C.default.track(x.rMx.OPEN_MODAL, { type: 'Camera Preview Modal' });
    }, []),
        a.useEffect(() => {
            var e;
            null == (e = R.current) || e.scrollToTop();
        }, []);
    let N = async () => {
            await L(), i.Z.setVideoEnabled(!0), null == y || y();
        },
        L = async () => {
            try {
                await (0, g.wG)(A, {
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
                    })({ page: x.ZY5.PREVIEW_CAMERA_MODAL }, j.location)
                });
            } catch (e) {}
            await T(), (0, f.Up)(A);
        };
    return (0, o.jsx)(_.Gt, {
        value: D,
        children: (0, o.jsx)(c.Z, {
            page: x.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, o.jsxs)(r.Y0X, {
                className: I.modalRoot,
                size: r.CgR.DYNAMIC,
                'aria-labelledby': k,
                transitionState: t,
                children: [
                    (0, o.jsxs)(r.hzk, {
                        className: B ? I.contentWithVideoBackgrounds : I.content,
                        scrollerRef: R,
                        children: [
                            (0, o.jsx)(r.X6q, {
                                id: k,
                                className: I.header,
                                variant: 'heading-xl/semibold',
                                children: n ? O.NW.string(O.t.LAwwbW) : O.NW.string(O.t['/HITVF'])
                            }),
                            (0, o.jsx)(v.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: A,
                                onSelectBackgroundOption: E,
                                hideDeviceSelector: n,
                                renderCamera: (e) =>
                                    (0, o.jsxs)('div', {
                                        className: I.cameraPreview,
                                        children: [
                                            (0, o.jsx)('div', {
                                                className: I.camera,
                                                children: (0, o.jsx)(P, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207
                                                })
                                            }),
                                            (0, o.jsx)(v.S, {})
                                        ]
                                    }),
                                onLearnMore: T
                            })
                        ]
                    }),
                    (0, o.jsxs)(r.mzw, {
                        justify: d.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = n ? O.NW.string(O.t.KQENho) : O.NW.string(O.t.kgIe9f);
                                return (0, o.jsx)(r.zxk, {
                                    onClick: n ? L : N,
                                    size: r.zxk.Sizes.SMALL,
                                    autoFocus: !n,
                                    children: e
                                });
                            })(),
                            (0, o.jsx)(r.XZJ, {
                                size: 18,
                                type: r.XZJ.Types.INVERTED,
                                value: w,
                                onChange: () => {
                                    b.qF.updateSetting(!w), C.default.track(x.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !w });
                                },
                                children: (0, o.jsx)(r.Text, {
                                    variant: 'text-sm/normal',
                                    children: O.NW.string(O.t['3Ppr1t'])
                                })
                            })
                        ]
                    }),
                    (0, o.jsx)(r.olH, {
                        onClick: T,
                        className: I.modalClose
                    })
                ]
            })
        })
    });
}
