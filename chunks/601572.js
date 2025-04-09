n.d(t, { default: () => I }), n(388685);
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
    f = n(932724),
    p = n(716161),
    g = n(672339),
    m = n(898531),
    h = n(131951),
    S = n(594174),
    v = n(626135),
    C = n(747545),
    x = n(981631),
    O = n(388032),
    T = n(994950);
function I(e) {
    let { transitionState: t, videoEnabled: n, onEnable: I, onClose: y } = e,
        P = h.Z.getCameraComponent(),
        k = (0, u.Dt)(),
        B = (0, m.Z)(),
        w = b.qF.useSetting(),
        [A, E] = a.useState((0, f.P)(S.default.getCurrentUser())),
        L = (0, l.O)(),
        { analyticsLocations: N } = (0, _.ZP)(s.Z.CAMERA_PREVIEW),
        j = a.useRef(null);
    a.useEffect(() => {
        v.default.track(x.rMx.OPEN_MODAL, { type: 'Camera Preview Modal' });
    }, []),
        a.useEffect(() => {
            var e;
            null == (e = j.current) || e.scrollToTop();
        }, []);
    let D = async () => {
            await R(), i.Z.setVideoEnabled(!0), null == I || I();
        },
        R = async () => {
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
                    })({ page: x.ZY5.PREVIEW_CAMERA_MODAL }, L.location)
                });
            } catch (e) {}
            await y(), (0, p.Up)(A);
        };
    return (0, o.jsx)(_.Gt, {
        value: N,
        children: (0, o.jsx)(c.Z, {
            page: x.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, o.jsxs)(r.Y0X, {
                className: T.modalRoot,
                size: r.CgR.DYNAMIC,
                'aria-labelledby': k,
                transitionState: t,
                children: [
                    (0, o.jsxs)(r.hzk, {
                        className: B ? T.contentWithVideoBackgrounds : T.content,
                        scrollerRef: j,
                        children: [
                            (0, o.jsx)(r.X6q, {
                                id: k,
                                className: T.header,
                                variant: 'heading-xl/semibold',
                                children: n ? O.NW.string(O.t.LAwwbW) : O.NW.string(O.t['/HITVF'])
                            }),
                            (0, o.jsx)(C.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: A,
                                onSelectBackgroundOption: E,
                                hideDeviceSelector: n,
                                renderCamera: (e) =>
                                    (0, o.jsxs)('div', {
                                        className: T.cameraPreview,
                                        children: [
                                            (0, o.jsx)('div', {
                                                className: T.camera,
                                                children: (0, o.jsx)(P, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207
                                                })
                                            }),
                                            (0, o.jsx)(C.S, {})
                                        ]
                                    }),
                                onLearnMore: y
                            })
                        ]
                    }),
                    (0, o.jsxs)(r.mzw, {
                        justify: d.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = n ? O.NW.string(O.t.KQENho) : O.NW.string(O.t.kgIe9f);
                                return (0, o.jsx)(r.zxk, {
                                    onClick: n ? R : D,
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
                                    b.qF.updateSetting(!w), v.default.track(x.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !w });
                                },
                                children: (0, o.jsx)(r.Text, {
                                    variant: 'text-sm/normal',
                                    children: O.NW.string(O.t['3Ppr1t'])
                                })
                            })
                        ]
                    }),
                    (0, o.jsx)(r.olH, {
                        onClick: y,
                        className: T.modalClose
                    })
                ]
            })
        })
    });
}
