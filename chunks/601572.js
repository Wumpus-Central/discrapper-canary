a.d(t, { default: () => x }), a(388685);
var n = a(951288),
    r = a(647438),
    i = a(481060),
    o = a(846027),
    l = a(410575),
    c = a(2052),
    s = a(100527),
    d = a(906732),
    u = a(600164),
    h = a(313201),
    m = a(695346),
    g = a(932724),
    p = a(716161),
    _ = a(672339),
    f = a(898531),
    w = a(131951),
    v = a(594174),
    C = a(626135),
    b = a(747545),
    E = a(981631),
    j = a(388032),
    k = a(142768);
function x(e) {
    let { transitionState: t, videoEnabled: a, onEnable: x, onClose: P } = e,
        y = w.Z.getCameraComponent(),
        O = (0, h.Dt)(),
        S = (0, f.Z)(),
        A = m.qF.useSetting(),
        [R, M] = r.useState((0, g.P)(v.default.getCurrentUser())),
        N = (0, c.O)(),
        { analyticsLocations: Z } = (0, d.ZP)(s.Z.CAMERA_PREVIEW),
        D = r.useRef(null);
    r.useEffect(() => {
        C.default.track(E.rMx.OPEN_MODAL, { type: "Camera Preview Modal" });
    }, []),
        r.useEffect(() => {
            var e;
            null == (e = D.current) || e.scrollToTop();
        }, []);
    let I = async () => {
            await L(), o.Z.setVideoEnabled(!0), null == x || x();
        },
        L = async () => {
            try {
                await (0, _.wG)(R, {
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
                    })({ page: E.ZY5.PREVIEW_CAMERA_MODAL }, N.location),
                });
            } catch (e) {}
            await P(), (0, p.Up)(R);
        };
    return (0, n.jsx)(d.Gt, {
        value: Z,
        children: (0, n.jsx)(l.Z, {
            page: E.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, n.jsxs)(i.Y0X, {
                className: k.modalRoot,
                size: i.CgR.DYNAMIC,
                "aria-labelledby": O,
                transitionState: t,
                parentComponent: "CameraPreviewModal",
                children: [
                    (0, n.jsxs)(i.hzk, {
                        className: S ? k.contentWithVideoBackgrounds : k.content,
                        scrollerRef: D,
                        children: [
                            (0, n.jsx)(i.X6q, {
                                id: O,
                                className: k.header,
                                variant: "heading-xl/semibold",
                                children: a ? j.intl.string(j.t.LAwwbW) : j.intl.string(j.t["/HITVF"]),
                            }),
                            (0, n.jsx)(b.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: R,
                                onSelectBackgroundOption: M,
                                hideDeviceSelector: a,
                                renderCamera: (e) =>
                                    (0, n.jsxs)("div", {
                                        className: k.cameraPreview,
                                        children: [
                                            (0, n.jsx)("div", {
                                                className: k.camera,
                                                children: (0, n.jsx)(y, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207,
                                                }),
                                            }),
                                            (0, n.jsx)(b.S, {}),
                                        ],
                                    }),
                                onLearnMore: P,
                            }),
                        ],
                    }),
                    (0, n.jsxs)(i.mzw, {
                        justify: u.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = a ? j.intl.string(j.t.KQENho) : j.intl.string(j.t.kgIe9f);
                                return (0, n.jsx)(i.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: e,
                                    onClick: a ? L : I,
                                    autoFocus: !a,
                                });
                            })(),
                            (0, n.jsx)(i.XZJ, {
                                label: j.intl.string(j.t["3Ppr1t"]),
                                labelSize: "small",
                                checked: A,
                                onChange: () => {
                                    m.qF.updateSetting(!A),
                                        C.default.track(E.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !A });
                                },
                            }),
                        ],
                    }),
                    (0, n.jsx)(i.olH, {
                        onClick: P,
                        className: k.modalClose,
                    }),
                ],
            }),
        }),
    });
}
