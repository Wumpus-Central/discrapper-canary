r.d(t, { default: () => w }), r(388685);
var n = r(200651),
    a = r(192379),
    l = r(481060),
    i = r(846027),
    o = r(410575),
    c = r(2052),
    u = r(100527),
    s = r(906732),
    d = r(600164),
    f = r(313201),
    b = r(695346),
    O = r(932724),
    g = r(716161),
    p = r(672339),
    S = r(898531),
    y = r(131951),
    E = r(594174),
    P = r(626135),
    v = r(747545),
    _ = r(981631),
    h = r(388032),
    m = r(288715);
function w(e) {
    let { transitionState: t, videoEnabled: r, onEnable: w, onClose: D } = e,
        A = y.Z.getCameraComponent(),
        j = (0, f.Dt)(),
        L = (0, S.Z)(),
        T = b.qF.useSetting(),
        [N, R] = a.useState((0, O.P)(E.default.getCurrentUser())),
        I = (0, c.O)(),
        { analyticsLocations: Z } = (0, s.ZP)(u.Z.CAMERA_PREVIEW),
        C = a.useRef(null);
    a.useEffect(() => {
        P.default.track(_.rMx.OPEN_MODAL, { type: 'Camera Preview Modal' });
    }, []),
        a.useEffect(() => {
            var e;
            null == (e = C.current) || e.scrollToTop();
        }, []);
    let G = async () => {
            await U(), i.Z.setVideoEnabled(!0), null == w || w();
        },
        U = async () => {
            try {
                await (0, p.wG)(N, {
                    location: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    })
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })({ page: _.ZY5.PREVIEW_CAMERA_MODAL }, I.location)
                });
            } catch (e) {}
            await D(), (0, g.Up)(N);
        };
    return (0, n.jsx)(s.Gt, {
        value: Z,
        children: (0, n.jsx)(o.Z, {
            page: _.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, n.jsxs)(l.Y0X, {
                className: m.modalRoot,
                size: l.CgR.DYNAMIC,
                'aria-labelledby': j,
                transitionState: t,
                children: [
                    (0, n.jsxs)(l.hzk, {
                        className: L ? m.contentWithVideoBackgrounds : m.content,
                        scrollerRef: C,
                        children: [
                            (0, n.jsx)(l.X6q, {
                                id: j,
                                className: m.header,
                                variant: 'heading-xl/semibold',
                                children: r ? h.NW.string(h.t.LAwwbW) : h.NW.string(h.t['/HITVF'])
                            }),
                            (0, n.jsx)(v.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: N,
                                onSelectBackgroundOption: R,
                                hideDeviceSelector: r,
                                renderCamera: (e) =>
                                    (0, n.jsxs)('div', {
                                        className: m.cameraPreview,
                                        children: [
                                            (0, n.jsx)('div', {
                                                className: m.camera,
                                                children: (0, n.jsx)(A, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207
                                                })
                                            }),
                                            (0, n.jsx)(v.S, {})
                                        ]
                                    }),
                                onLearnMore: D
                            })
                        ]
                    }),
                    (0, n.jsxs)(l.mzw, {
                        justify: d.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = r ? h.NW.string(h.t.KQENho) : h.NW.string(h.t.kgIe9f);
                                return (0, n.jsx)(l.zxk, {
                                    onClick: r ? U : G,
                                    size: l.zxk.Sizes.SMALL,
                                    autoFocus: !r,
                                    children: e
                                });
                            })(),
                            (0, n.jsx)(l.XZJ, {
                                size: 18,
                                type: l.XZJ.Types.INVERTED,
                                value: T,
                                onChange: () => {
                                    b.qF.updateSetting(!T), P.default.track(_.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !T });
                                },
                                children: (0, n.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    children: h.NW.string(h.t['3Ppr1t'])
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)(l.olH, {
                        onClick: D,
                        className: m.modalClose
                    })
                ]
            })
        })
    });
}
