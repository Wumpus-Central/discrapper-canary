n.d(t, { default: () => I }), n(47120);
var o = n(200651),
    r = n(192379),
    a = n(481060),
    i = n(846027),
    c = n(410575),
    l = n(2052),
    s = n(100527),
    _ = n(906732),
    d = n(600164),
    u = n(313201),
    b = n(695346),
    f = n(932724),
    p = n(716161),
    g = n(672339),
    m = n(898531),
    h = n(131951),
    S = n(594174),
    v = n(626135),
    T = n(747545),
    C = n(981631),
    x = n(388032),
    O = n(994950);
function I(e) {
    let { transitionState: t, videoEnabled: n, onEnable: I, onClose: y } = e,
        k = h.Z.getCameraComponent(),
        B = (0, u.Dt)(),
        P = (0, m.Z)(),
        w = b.qF.useSetting(),
        [A, E] = r.useState((0, f.P)(S.default.getCurrentUser())),
        L = (0, l.O)(),
        { analyticsLocations: N } = (0, _.ZP)(s.Z.CAMERA_PREVIEW),
        j = r.useRef(null);
    r.useEffect(() => {
        v.default.track(C.rMx.OPEN_MODAL, { type: 'Camera Preview Modal' });
    }, []),
        r.useEffect(() => {
            var e;
            null == (e = j.current) || e.scrollToTop();
        }, []);
    let R = async () => {
            await D(), i.Z.setVideoEnabled(!0), null == I || I();
        },
        D = async () => {
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
                    })({ page: C.ZY5.PREVIEW_CAMERA_MODAL }, L.location)
                });
            } catch (e) {}
            await y(), (0, p.Up)(A);
        };
    return (0, o.jsx)(_.Gt, {
        value: N,
        children: (0, o.jsx)(c.Z, {
            page: C.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, o.jsxs)(a.Y0X, {
                className: O.modalRoot,
                size: a.CgR.DYNAMIC,
                'aria-labelledby': B,
                transitionState: t,
                children: [
                    (0, o.jsxs)(a.hzk, {
                        className: P ? O.contentWithVideoBackgrounds : O.content,
                        scrollerRef: j,
                        children: [
                            (0, o.jsx)(a.X6q, {
                                id: B,
                                className: O.header,
                                variant: 'heading-xl/semibold',
                                children: n ? x.NW.string(x.t.LAwwbW) : x.NW.string(x.t['/HITVF'])
                            }),
                            (0, o.jsx)(T.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: A,
                                onSelectBackgroundOption: E,
                                hideDeviceSelector: n,
                                renderCamera: (e) =>
                                    (0, o.jsxs)('div', {
                                        className: O.cameraPreview,
                                        children: [
                                            (0, o.jsx)('div', {
                                                className: O.camera,
                                                children: (0, o.jsx)(k, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207
                                                })
                                            }),
                                            (0, o.jsx)(T.S, {})
                                        ]
                                    }),
                                onLearnMore: y
                            })
                        ]
                    }),
                    (0, o.jsxs)(a.mzw, {
                        justify: d.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = n ? x.NW.string(x.t.KQENho) : x.NW.string(x.t.kgIe9f);
                                return (0, o.jsx)(a.zxk, {
                                    onClick: n ? D : R,
                                    size: a.zxk.Sizes.SMALL,
                                    autoFocus: !n,
                                    children: e
                                });
                            })(),
                            (0, o.jsx)(a.XZJ, {
                                size: 18,
                                type: a.XZJ.Types.INVERTED,
                                value: w,
                                onChange: () => {
                                    b.qF.updateSetting(!w), v.default.track(C.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !w });
                                },
                                children: (0, o.jsx)(a.Text, {
                                    variant: 'text-sm/normal',
                                    children: x.NW.string(x.t['3Ppr1t'])
                                })
                            })
                        ]
                    }),
                    (0, o.jsx)(a.olH, {
                        onClick: y,
                        className: O.modalClose
                    })
                ]
            })
        })
    });
}
