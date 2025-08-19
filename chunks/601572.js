a.d(t, { default: () => S }), a(388685);
var n = a(951288),
    i = a(647438),
    r = a(481060),
    o = a(846027),
    c = a(410575),
    s = a(2052),
    l = a(100527),
    d = a(906732),
    u = a(600164),
    p = a(313201),
    _ = a(695346),
    m = a(932724),
    g = a(716161),
    f = a(672339),
    h = a(898531),
    b = a(131951),
    C = a(594174),
    y = a(626135),
    T = a(747545),
    v = a(981631),
    A = a(388032),
    O = a(142768);
function S(e) {
    let { transitionState: t, videoEnabled: a, onEnable: S, onClose: I } = e,
        w = b.Z.getCameraComponent(),
        N = (0, p.Dt)(),
        E = (0, h.Z)(),
        P = _.qF.useSetting(),
        [x, R] = i.useState((0, m.P)(C.default.getCurrentUser())),
        M = (0, s.O)(),
        { analyticsLocations: U } = (0, d.ZP)(l.Z.CAMERA_PREVIEW),
        D = i.useRef(null);
    i.useEffect(() => {
        y.default.track(v.rMx.OPEN_MODAL, { type: "Camera Preview Modal" });
    }, []),
        i.useEffect(() => {
            var e;
            null == (e = D.current) || e.scrollToTop();
        }, []);
    let L = async () => {
            await j(), o.Z.setVideoEnabled(!0), null == S || S();
        },
        j = async () => {
            try {
                await (0, f.wG)(x, {
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
                    })({ page: v.ZY5.PREVIEW_CAMERA_MODAL }, M.location),
                });
            } catch (e) {}
            await I(), (0, g.Up)(x);
        };
    return (0, n.jsx)(d.Gt, {
        value: U,
        children: (0, n.jsx)(c.Z, {
            page: v.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, n.jsxs)(r.Y0X, {
                className: O.modalRoot,
                size: r.CgR.DYNAMIC,
                "aria-labelledby": N,
                transitionState: t,
                parentComponent: "CameraPreviewModal",
                children: [
                    (0, n.jsxs)(r.hzk, {
                        className: E ? O.contentWithVideoBackgrounds : O.content,
                        scrollerRef: D,
                        children: [
                            (0, n.jsx)(r.X6q, {
                                id: N,
                                className: O.header,
                                variant: "heading-xl/semibold",
                                children: a ? A.intl.string(A.t.LAwwbW) : A.intl.string(A.t["/HITVF"]),
                            }),
                            (0, n.jsx)(T.Z, {
                                hidePreviewToggle: !0,
                                showSmallBackgroundOptions: !0,
                                hideDeviceHeader: !0,
                                hideCameraSettingsLink: !0,
                                selectedBackgroundOption: x,
                                onSelectBackgroundOption: R,
                                hideDeviceSelector: a,
                                renderCamera: (e) =>
                                    (0, n.jsxs)("div", {
                                        className: O.cameraPreview,
                                        children: [
                                            (0, n.jsx)("div", {
                                                className: O.camera,
                                                children: (0, n.jsx)(w, {
                                                    disabled: !1,
                                                    deviceId: e,
                                                    width: 368,
                                                    height: 207,
                                                }),
                                            }),
                                            (0, n.jsx)(T.S, {}),
                                        ],
                                    }),
                                onLearnMore: I,
                            }),
                        ],
                    }),
                    (0, n.jsxs)(r.mzw, {
                        justify: u.Z.Justify.BETWEEN,
                        children: [
                            (() => {
                                let e = a ? A.intl.string(A.t.KQENho) : A.intl.string(A.t.kgIe9f);
                                return (0, n.jsx)(r.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: e,
                                    onClick: a ? j : L,
                                    autoFocus: !a,
                                });
                            })(),
                            (0, n.jsx)(r.XZJ, {
                                size: 18,
                                type: r.XZJ.Types.INVERTED,
                                value: P,
                                onChange: () => {
                                    _.qF.updateSetting(!P),
                                        y.default.track(v.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !P });
                                },
                                children: (0, n.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    children: A.intl.string(A.t["3Ppr1t"]),
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)(r.olH, {
                        onClick: I,
                        className: O.modalClose,
                    }),
                ],
            }),
        }),
    });
}
