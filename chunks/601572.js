a.d(t, { default: () => y }), a(388685);
var n = a(951288),
    r = a(647438),
    i = a(755721),
    o = a(481060),
    l = a(846027),
    s = a(410575),
    c = a(2052),
    d = a(100527),
    u = a(906732),
    h = a(600164),
    m = a(313201),
    g = a(695346),
    p = a(932724),
    _ = a(716161),
    f = a(672339),
    v = a(898531),
    w = a(131951),
    x = a(594174),
    E = a(626135),
    C = a(747545),
    j = a(981631),
    b = a(388032),
    k = a(142768);
function y(e) {
    let { transitionState: t, videoEnabled: a, onEnable: y, onClose: P } = e,
        O = w.Z.getCameraComponent(),
        R = (0, m.Dt)(),
        S = (0, v.Z)(),
        A = g.qF.useSetting(),
        [M, N] = r.useState((0, p.P)(x.default.getCurrentUser())),
        D = (0, c.O)(),
        { analyticsLocations: T } = (0, u.ZP)(d.Z.CAMERA_PREVIEW),
        Z = r.useRef(null);
    r.useEffect(() => {
        E.default.track(j.rMx.OPEN_MODAL, { type: "Camera Preview Modal" });
    }, []),
        r.useEffect(() => {
            var e;
            null == (e = Z.current) || e.scrollToTop();
        }, []);
    let I = async () => {
            await V(), l.Z.setVideoEnabled(!0), null == y || y();
        },
        V = async () => {
            try {
                await (0, f.wG)(M, {
                    location: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(a);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(a).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = a[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })({ page: j.ZY5.PREVIEW_CAMERA_MODAL }, D.location),
                });
            } catch (e) {}
            await P(), (0, _.Up)(M);
        };
    return (0, n.jsx)(u.Gt, {
        value: T,
        children: (0, n.jsx)(s.Z, {
            page: j.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, n.jsxs)(o.Y0X, {
                className: k.modalRoot,
                size: o.CgR.DYNAMIC,
                "aria-labelledby": R,
                transitionState: t,
                parentComponent: "CameraPreviewModal",
                children: [
                    (0, n.jsxs)(o.hzk, {
                        className: S ? k.contentWithVideoBackgrounds : k.content,
                        scrollerRef: Z,
                        children: [
                            (0, n.jsx)(o.X6q, {
                                id: R,
                                className: k.header,
                                variant: "heading-xl/semibold",
                                children: a ? b.intl.string(b.t.LAwwbW) : b.intl.string(b.t["/HITVF"]),
                            }),
                            (0, n.jsx)(C.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: M,
                                onSelectBackgroundOption: N,
                                hideDeviceSelector: a,
                                renderCamera: (e) =>
                                    (0, n.jsxs)("div", {
                                        className: k.cameraPreview,
                                        children: [
                                            (0, n.jsx)("div", {
                                                className: k.camera,
                                                children: (0, n.jsx)(O, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207,
                                                }),
                                            }),
                                            (0, n.jsx)(C.S, {}),
                                        ],
                                    }),
                                onLearnMore: P,
                            }),
                        ],
                    }),
                    (0, n.jsxs)(o.mzw, {
                        justify: h.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = a ? b.intl.string(b.t.KQENho) : b.intl.string(b.t.kgIe9f);
                                return (0, n.jsx)(o.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: e,
                                    onClick: a ? V : I,
                                    autoFocus: !a,
                                });
                            })(),
                            (0, n.jsx)(i.$q, {
                                size: 18,
                                type: i.M0.INVERTED,
                                value: A,
                                onChange: () => {
                                    g.qF.updateSetting(!A),
                                        E.default.track(j.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !A });
                                },
                                children: (0, n.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    children: b.intl.string(b.t["3Ppr1t"]),
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)(o.olH, {
                        onClick: P,
                        className: k.modalClose,
                    }),
                ],
            }),
        }),
    });
}
