a.d(t, { default: () => k }), a(388685);
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
    f = a(131951),
    m = a(594174),
    w = a(626135),
    v = a(747545),
    C = a(981631),
    E = a(388032),
    P = a(125040);
function k(e) {
    let { transitionState: t, videoEnabled: a, onEnable: k, onClose: y } = e,
        O = f.Z.getCameraComponent(),
        _ = p.qF.useSetting(),
        [j, x] = n.useState((0, h.P)(m.default.getCurrentUser())),
        S = (0, s.O)(),
        { analyticsLocations: A } = (0, u.ZP)(d.Z.CAMERA_PREVIEW);
    n.useEffect(() => {
        w.default.track(C.rMx.OPEN_MODAL, { type: "Camera Preview Modal" });
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
            await y(), (0, g.Up)(j);
        }, [j, S.location, y]),
        D = n.useCallback(async () => {
            await M(), l.Z.setVideoEnabled(!0), null == k || k();
        }, [M, k]),
        I = n.useMemo(
            () => [
                {
                    variant: "primary",
                    text: a ? E.intl.string(E.t.KQENhq) : E.intl.string(E.t.kgIe9a),
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
                title: a ? E.intl.string(E.t.LAwwbQ) : E.intl.string(E.t["/HITVD"]),
                actionBarInput: (0, r.jsx)(c.Checkbox, {
                    label: E.intl.string(E.t["3Ppr1h"]),
                    labelType: "secondary",
                    checked: _,
                    onChange: () => {
                        p.qF.updateSetting(!_),
                            w.default.track(C.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !_ });
                    },
                }),
                actions: I,
                onClose: y,
                transitionState: t,
                children: (0, r.jsx)(v.Z, {
                    hidePreviewToggle: !0,
                    hideDeviceHeader: !0,
                    hideCameraSettingsLink: !0,
                    selectedBackgroundOption: j,
                    onSelectBackgroundOption: x,
                    hideDeviceSelector: a,
                    renderCamera: (e) =>
                        (0, r.jsxs)("div", {
                            className: P.cameraPreview,
                            children: [
                                (0, r.jsx)("div", {
                                    className: P.camera,
                                    children: (0, r.jsx)(O, {
                                        disabled: !1,
                                        deviceId: e,
                                        width: 430,
                                        height: 242,
                                    }),
                                }),
                                (0, r.jsx)(v.S, {}),
                            ],
                        }),
                    onLearnMore: y,
                }),
            }),
        }),
    });
}
