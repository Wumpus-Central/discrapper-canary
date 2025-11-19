a.d(t, { default: () => O }), a(388685);
var r = a(54381),
    n = a(473749),
    i = a(793030),
    c = a(481060),
    l = a(846027),
    o = a(410575),
    s = a(2052),
    d = a(100527),
    u = a(906732),
    p = a(695346),
    h = a(932724),
    g = a(716161),
    b = a(672339),
    m = a(131951),
    w = a(594174),
    f = a(626135),
    v = a(747545),
    C = a(981631),
    k = a(388032),
    E = a(146371);
function O(e) {
    let { transitionState: t, videoEnabled: a, onEnable: O, onClose: P } = e,
        _ = m.Z.getCameraComponent(),
        y = p.qF.useSetting(),
        [j, x] = n.useState((0, h.P)(w.default.getCurrentUser())),
        S = (0, s.O)(),
        { analyticsLocations: A } = (0, u.ZP)(d.Z.CAMERA_PREVIEW);
    n.useEffect(() => {
        f.default.track(C.rMx.OPEN_MODAL, { type: "Camera Preview Modal" });
    }, []);
    let M = n.useCallback(async () => {
            try {
                await (0, b.wG)(j, {
                    location: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(a);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(a).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = a[t]),
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
                    })({ page: C.ZY5.PREVIEW_CAMERA_MODAL }, S.location),
                });
            } catch (e) {}
            await P(), (0, g.Up)(j);
        }, [j, S.location, P]),
        D = n.useCallback(async () => {
            await M(), l.Z.setVideoEnabled(!0), null == O || O();
        }, [M, O]),
        I = n.useMemo(
            () => [
                {
                    variant: "primary",
                    text: a ? k.intl.string(k.t.KQENhq) : k.intl.string(k.t.kgIe9a),
                    onClick: a ? M : D,
                },
            ],
            [M, D, a],
        );
    return (0, r.jsx)(u.Gt, {
        value: A,
        children: (0, r.jsx)(o.Z, {
            page: C.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, r.jsx)(i.Modal, {
                size: "md",
                title: a ? k.intl.string(k.t.LAwwbQ) : k.intl.string(k.t["/HITVD"]),
                actionBarInput: (0, r.jsx)(c.Checkbox, {
                    label: k.intl.string(k.t["3Ppr1h"]),
                    labelType: "secondary",
                    checked: y,
                    onChange: () => {
                        p.qF.updateSetting(!y),
                            f.default.track(C.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !y });
                    },
                }),
                actions: I,
                onClose: P,
                transitionState: t,
                children: (0, r.jsx)(v.Z, {
                    hidePreviewToggle: !0,
                    showSmallBackgroundOptions: !0,
                    hideDeviceHeader: !0,
                    hideCameraSettingsLink: !0,
                    selectedBackgroundOption: j,
                    onSelectBackgroundOption: x,
                    hideDeviceSelector: a,
                    renderCamera: (e) =>
                        (0, r.jsxs)("div", {
                            className: E.cameraPreview,
                            children: [
                                (0, r.jsx)("div", {
                                    className: E.camera,
                                    children: (0, r.jsx)(_, {
                                        disabled: !1,
                                        deviceId: e,
                                        width: 430,
                                        height: 242,
                                    }),
                                }),
                                (0, r.jsx)(v.S, {}),
                            ],
                        }),
                    onLearnMore: P,
                }),
            }),
        }),
    });
}
