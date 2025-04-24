n.d(t, { default: () => w }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(846027),
    o = n(410575),
    u = n(2052),
    c = n(100527),
    s = n(906732),
    d = n(600164),
    f = n(313201),
    g = n(695346),
    O = n(932724),
    b = n(716161),
    p = n(672339),
    S = n(898531),
    y = n(131951),
    _ = n(594174),
    v = n(626135),
    E = n(747545),
    m = n(981631),
    P = n(388032),
    h = n(994950);
function w(e) {
    let { transitionState: t, videoEnabled: n, onEnable: w, onClose: D } = e,
        j = y.Z.getCameraComponent(),
        R = (0, f.Dt)(),
        Z = (0, S.Z)(),
        A = g.qF.useSetting(),
        [L, T] = i.useState((0, O.P)(_.default.getCurrentUser())),
        I = (0, u.O)(),
        { analyticsLocations: C } = (0, s.ZP)(c.Z.CAMERA_PREVIEW),
        U = i.useRef(null);
    i.useEffect(() => {
        v.default.track(m.rMx.OPEN_MODAL, { type: 'Camera Preview Modal' });
    }, []),
        i.useEffect(() => {
            var e;
            null == (e = U.current) || e.scrollToTop();
        }, []);
    let N = async () => {
            await G(), a.Z.setVideoEnabled(!0), null == w || w();
        },
        G = async () => {
            try {
                await (0, p.wG)(L, {
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
                    })({ page: m.ZY5.PREVIEW_CAMERA_MODAL }, I.location)
                });
            } catch (e) {}
            await D(), (0, b.Up)(L);
        };
    return (0, r.jsx)(s.Gt, {
        value: C,
        children: (0, r.jsx)(o.Z, {
            page: m.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, r.jsxs)(l.Y0X, {
                className: h.modalRoot,
                size: l.CgR.DYNAMIC,
                'aria-labelledby': R,
                transitionState: t,
                children: [
                    (0, r.jsxs)(l.hzk, {
                        className: Z ? h.contentWithVideoBackgrounds : h.content,
                        scrollerRef: U,
                        children: [
                            (0, r.jsx)(l.X6q, {
                                id: R,
                                className: h.header,
                                variant: 'heading-xl/semibold',
                                children: n ? P.intl.string(P.t.LAwwbW) : P.intl.string(P.t['/HITVF'])
                            }),
                            (0, r.jsx)(E.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: L,
                                onSelectBackgroundOption: T,
                                hideDeviceSelector: n,
                                renderCamera: (e) =>
                                    (0, r.jsxs)('div', {
                                        className: h.cameraPreview,
                                        children: [
                                            (0, r.jsx)('div', {
                                                className: h.camera,
                                                children: (0, r.jsx)(j, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207
                                                })
                                            }),
                                            (0, r.jsx)(E.S, {})
                                        ]
                                    }),
                                onLearnMore: D
                            })
                        ]
                    }),
                    (0, r.jsxs)(l.mzw, {
                        justify: d.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = n ? P.intl.string(P.t.KQENho) : P.intl.string(P.t.kgIe9f);
                                return (0, r.jsx)(l.zxk, {
                                    onClick: n ? G : N,
                                    size: l.zxk.Sizes.SMALL,
                                    autoFocus: !n,
                                    children: e
                                });
                            })(),
                            (0, r.jsx)(l.XZJ, {
                                size: 18,
                                type: l.XZJ.Types.INVERTED,
                                value: A,
                                onChange: () => {
                                    g.qF.updateSetting(!A), v.default.track(m.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !A });
                                },
                                children: (0, r.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    children: P.intl.string(P.t['3Ppr1t'])
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(l.olH, {
                        onClick: D,
                        className: h.modalClose
                    })
                ]
            })
        })
    });
}
