a.d(t, { default: () => k }), a(388685);
var n = a(951288),
    r = a(647438),
    i = a(481060),
    o = a(846027),
    l = a(410575),
    s = a(2052),
    c = a(100527),
    d = a(906732),
    u = a(600164),
    h = a(313201),
    m = a(695346),
    p = a(932724),
    g = a(716161),
    _ = a(672339),
    f = a(898531),
    v = a(131951),
    w = a(594174),
    x = a(626135),
    E = a(747545),
    C = a(981631),
    j = a(388032),
    b = a(142768);
function k(e) {
    let { transitionState: t, videoEnabled: a, onEnable: k, onClose: y } = e,
        P = v.Z.getCameraComponent(),
        O = (0, h.Dt)(),
        R = (0, f.Z)(),
        S = m.qF.useSetting(),
        [A, M] = r.useState((0, p.P)(w.default.getCurrentUser())),
        N = (0, s.O)(),
        { analyticsLocations: Z } = (0, d.ZP)(c.Z.CAMERA_PREVIEW),
        T = r.useRef(null);
    r.useEffect(() => {
        x.default.track(C.rMx.OPEN_MODAL, { type: "Camera Preview Modal" });
    }, []),
        r.useEffect(() => {
            var e;
            null == (e = T.current) || e.scrollToTop();
        }, []);
    let D = async () => {
            await I(), o.Z.setVideoEnabled(!0), null == k || k();
        },
        I = async () => {
            try {
                await (0, _.wG)(A, {
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
                    })({ page: C.ZY5.PREVIEW_CAMERA_MODAL }, N.location),
                });
            } catch (e) {}
            await y(), (0, g.Up)(A);
        };
    return (0, n.jsx)(d.Gt, {
        value: Z,
        children: (0, n.jsx)(l.Z, {
            page: C.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, n.jsxs)(i.Y0X, {
                className: b.modalRoot,
                size: i.CgR.DYNAMIC,
                "aria-labelledby": O,
                transitionState: t,
                parentComponent: "CameraPreviewModal",
                children: [
                    (0, n.jsxs)(i.hzk, {
                        className: R ? b.contentWithVideoBackgrounds : b.content,
                        scrollerRef: T,
                        children: [
                            (0, n.jsx)(i.X6q, {
                                id: O,
                                className: b.header,
                                variant: "heading-xl/semibold",
                                children: a ? j.intl.string(j.t.LAwwbW) : j.intl.string(j.t["/HITVF"]),
                            }),
                            (0, n.jsx)(E.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: A,
                                onSelectBackgroundOption: M,
                                hideDeviceSelector: a,
                                renderCamera: (e) =>
                                    (0, n.jsxs)("div", {
                                        className: b.cameraPreview,
                                        children: [
                                            (0, n.jsx)("div", {
                                                className: b.camera,
                                                children: (0, n.jsx)(P, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207,
                                                }),
                                            }),
                                            (0, n.jsx)(E.S, {}),
                                        ],
                                    }),
                                onLearnMore: y,
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
                                    onClick: a ? I : D,
                                    autoFocus: !a,
                                });
                            })(),
                            (0, n.jsx)(i.XZJ, {
                                size: 18,
                                type: i.XZJ.Types.INVERTED,
                                value: S,
                                onChange: () => {
                                    m.qF.updateSetting(!S),
                                        x.default.track(C.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !S });
                                },
                                children: (0, n.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    children: j.intl.string(j.t["3Ppr1t"]),
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)(i.olH, {
                        onClick: y,
                        className: b.modalClose,
                    }),
                ],
            }),
        }),
    });
}
