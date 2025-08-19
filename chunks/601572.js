n.d(t, { default: () => O }), n(388685);
var a = n(951288),
    o = n(647438),
    i = n(481060),
    r = n(846027),
    c = n(410575),
    s = n(2052),
    l = n(100527),
    d = n(906732),
    _ = n(600164),
    u = n(313201),
    p = n(695346),
    m = n(932724),
    g = n(716161),
    f = n(672339),
    b = n(898531),
    h = n(131951),
    C = n(594174),
    T = n(626135),
    y = n(747545),
    A = n(981631),
    I = n(388032),
    v = n(142768);
function O(e) {
    let { transitionState: t, videoEnabled: n, onEnable: O, onClose: S } = e,
        w = h.Z.getCameraComponent(),
        x = (0, u.Dt)(),
        N = (0, b.Z)(),
        E = p.qF.useSetting(),
        [P, k] = o.useState((0, m.P)(C.default.getCurrentUser())),
        L = (0, s.O)(),
        { analyticsLocations: M } = (0, d.ZP)(l.Z.CAMERA_PREVIEW),
        R = o.useRef(null);
    o.useEffect(() => {
        T.default.track(A.rMx.OPEN_MODAL, { type: "Camera Preview Modal" });
    }, []),
        o.useEffect(() => {
            var e;
            null == (e = R.current) || e.scrollToTop();
        }, []);
    let U = async () => {
            await D(), r.Z.setVideoEnabled(!0), null == O || O();
        },
        D = async () => {
            try {
                await (0, f.wG)(P, {
                    location: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                a.forEach(function (t) {
                                    var a;
                                    (a = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = a);
                                });
                        }
                        return e;
                    })({ page: A.ZY5.PREVIEW_CAMERA_MODAL }, L.location),
                });
            } catch (e) {}
            await S(), (0, g.Up)(P);
        };
    return (0, a.jsx)(d.Gt, {
        value: M,
        children: (0, a.jsx)(c.Z, {
            page: A.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, a.jsxs)(i.Y0X, {
                className: v.modalRoot,
                size: i.CgR.DYNAMIC,
                "aria-labelledby": x,
                transitionState: t,
                parentComponent: "CameraPreviewModal",
                children: [
                    (0, a.jsxs)(i.hzk, {
                        className: N ? v.contentWithVideoBackgrounds : v.content,
                        scrollerRef: R,
                        children: [
                            (0, a.jsx)(i.X6q, {
                                id: x,
                                className: v.header,
                                variant: "heading-xl/semibold",
                                children: n ? I.intl.string(I.t.LAwwbW) : I.intl.string(I.t["/HITVF"]),
                            }),
                            (0, a.jsx)(y.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: P,
                                onSelectBackgroundOption: k,
                                hideDeviceSelector: n,
                                renderCamera: (e) =>
                                    (0, a.jsxs)("div", {
                                        className: v.cameraPreview,
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: v.camera,
                                                children: (0, a.jsx)(w, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207,
                                                }),
                                            }),
                                            (0, a.jsx)(y.S, {}),
                                        ],
                                    }),
                                onLearnMore: S,
                            }),
                        ],
                    }),
                    (0, a.jsxs)(i.mzw, {
                        justify: _.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = n ? I.intl.string(I.t.KQENho) : I.intl.string(I.t.kgIe9f);
                                return (0, a.jsx)(i.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: e,
                                    onClick: n ? D : U,
                                    autoFocus: !n,
                                });
                            })(),
                            (0, a.jsx)(i.XZJ, {
                                size: 18,
                                type: i.XZJ.Types.INVERTED,
                                value: E,
                                onChange: () => {
                                    p.qF.updateSetting(!E),
                                        T.default.track(A.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !E });
                                },
                                children: (0, a.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    children: I.intl.string(I.t["3Ppr1t"]),
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(i.olH, {
                        onClick: S,
                        className: v.modalClose,
                    }),
                ],
            }),
        }),
    });
}
