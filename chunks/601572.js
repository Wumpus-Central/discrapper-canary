a.d(t, { default: () => P }), a(388685);
var r = a(951288),
    n = a(647438),
    i = a(82659),
    c = a(481060),
    l = a(846027),
    o = a(410575),
    s = a(2052),
    d = a(100527),
    u = a(906732),
    p = a(695346),
    g = a(932724),
    h = a(716161),
    m = a(672339),
    w = a(131951),
    b = a(594174),
    f = a(626135),
    v = a(747545),
    C = a(981631),
    E = a(388032),
    O = a(146371);
function P(e) {
    let { transitionState: t, videoEnabled: a, onEnable: P, onClose: _ } = e,
        k = w.Z.getCameraComponent(),
        y = p.qF.useSetting(),
        [j, S] = n.useState((0, g.P)(b.default.getCurrentUser())),
        x = (0, s.O)(),
        { analyticsLocations: A } = (0, u.ZP)(d.Z.CAMERA_PREVIEW);
    n.useEffect(() => {
        f.default.track(C.rMx.OPEN_MODAL, { type: "Camera Preview Modal" });
    }, []);
    let M = n.useCallback(async () => {
            try {
                await (0, m.wG)(j, {
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
                    })({ page: C.ZY5.PREVIEW_CAMERA_MODAL }, x.location),
                });
            } catch (e) {}
            await _(), (0, h.Up)(j);
        }, [j, x.location, _]),
        Z = n.useCallback(async () => {
            await M(), l.Z.setVideoEnabled(!0), null == P || P();
        }, [M, P]),
        I = n.useMemo(
            () => [
                {
                    variant: "primary",
                    text: a ? E.intl.string(E.t.KQENho) : E.intl.string(E.t.kgIe9f),
                    onClick: a ? M : Z,
                },
            ],
            [M, Z, a],
        );
    return (0, r.jsx)(u.Gt, {
        value: A,
        children: (0, r.jsx)(o.Z, {
            page: C.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, r.jsx)(i.Modal, {
                size: "md",
                title: a ? E.intl.string(E.t.LAwwbW) : E.intl.string(E.t["/HITVF"]),
                actionBarInput: (0, r.jsx)(c.XZJ, {
                    label: E.intl.string(E.t["3Ppr1t"]),
                    labelType: "secondary",
                    checked: y,
                    onChange: () => {
                        p.qF.updateSetting(!y),
                            f.default.track(C.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !y });
                    },
                }),
                actions: I,
                onClose: _,
                transitionState: t,
                children: (0, r.jsx)(v.Z, {
                    hidePreviewToggle: !0,
                    showSmallBackgroundOptions: !0,
                    hideDeviceHeader: !0,
                    hideCameraSettingsLink: !0,
                    selectedBackgroundOption: j,
                    onSelectBackgroundOption: S,
                    hideDeviceSelector: a,
                    renderCamera: (e) =>
                        (0, r.jsxs)("div", {
                            className: O.cameraPreview,
                            children: [
                                (0, r.jsx)("div", {
                                    className: O.camera,
                                    children: (0, r.jsx)(k, {
                                        disabled: !1,
                                        deviceId: e,
                                        width: 430,
                                        height: 242,
                                    }),
                                }),
                                (0, r.jsx)(v.S, {}),
                            ],
                        }),
                    onLearnMore: _,
                }),
            }),
        }),
    });
}
