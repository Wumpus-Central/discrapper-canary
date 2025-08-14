n.d(t, { default: () => B }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(846027),
    l = n(410575),
    c = n(2052),
    s = n(100527),
    d = n(906732),
    u = n(600164),
    _ = n(313201),
    f = n(695346),
    p = n(932724),
    m = n(716161),
    b = n(672339),
    g = n(898531),
    C = n(131951),
    S = n(594174),
    h = n(626135),
    O = n(747545),
    A = n(981631),
    T = n(388032),
    y = n(142768);
function B(e) {
    let { transitionState: t, videoEnabled: n, onEnable: B, onClose: k } = e,
        v = C.Z.getCameraComponent(),
        w = (0, _.Dt)(),
        x = (0, g.Z)(),
        I = f.qF.useSetting(),
        [E, N] = i.useState((0, p.P)(S.default.getCurrentUser())),
        P = (0, c.O)(),
        { analyticsLocations: R } = (0, d.ZP)(s.Z.CAMERA_PREVIEW),
        j = i.useRef(null);
    i.useEffect(() => {
        h.default.track(A.rMx.OPEN_MODAL, { type: "Camera Preview Modal" });
    }, []),
        i.useEffect(() => {
            var e;
            null == (e = j.current) || e.scrollToTop();
        }, []);
    let U = async () => {
            await H(), a.Z.setVideoEnabled(!0), null == B || B();
        },
        H = async () => {
            try {
                await (0, b.wG)(E, {
                    location: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({ page: A.ZY5.PREVIEW_CAMERA_MODAL }, P.location),
                });
            } catch (e) {}
            await k(), (0, m.Up)(E);
        };
    return (0, r.jsx)(d.Gt, {
        value: R,
        children: (0, r.jsx)(l.Z, {
            page: A.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, r.jsxs)(o.Y0X, {
                className: y.modalRoot,
                size: o.CgR.DYNAMIC,
                "aria-labelledby": w,
                transitionState: t,
                parentComponent: "CameraPreviewModal",
                children: [
                    (0, r.jsxs)(o.hzk, {
                        className: x ? y.contentWithVideoBackgrounds : y.content,
                        scrollerRef: j,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                id: w,
                                className: y.header,
                                variant: "heading-xl/semibold",
                                children: n ? T.intl.string(T.t.LAwwbW) : T.intl.string(T.t["/HITVF"]),
                            }),
                            (0, r.jsx)(O.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: E,
                                onSelectBackgroundOption: N,
                                hideDeviceSelector: n,
                                renderCamera: (e) =>
                                    (0, r.jsxs)("div", {
                                        className: y.cameraPreview,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: y.camera,
                                                children: (0, r.jsx)(v, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207,
                                                }),
                                            }),
                                            (0, r.jsx)(O.S, {}),
                                        ],
                                    }),
                                onLearnMore: k,
                            }),
                        ],
                    }),
                    (0, r.jsxs)(o.mzw, {
                        justify: u.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = n ? T.intl.string(T.t.KQENho) : T.intl.string(T.t.kgIe9f);
                                return (0, r.jsx)(o.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: e,
                                    onClick: n ? H : U,
                                    autoFocus: !n,
                                });
                            })(),
                            (0, r.jsx)(o.XZJ, {
                                size: 18,
                                type: o.XZJ.Types.INVERTED,
                                value: I,
                                onChange: () => {
                                    f.qF.updateSetting(!I),
                                        h.default.track(A.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !I });
                                },
                                children: (0, r.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    children: T.intl.string(T.t["3Ppr1t"]),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(o.olH, {
                        onClick: k,
                        className: y.modalClose,
                    }),
                ],
            }),
        }),
    });
}
