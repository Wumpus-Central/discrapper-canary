a.d(t, { default: () => m }), a(896048);
var n = a(627968),
    i = a(64700),
    r = a(158954),
    l = a(397927),
    c = a(827343),
    o = a(820284),
    s = a(212245),
    d = a(793574),
    u = a(688810),
    p = a(253932),
    b = a(329551),
    g = a(987384),
    h = a(413339),
    f = a(430452),
    A = a(287809),
    C = a(954571),
    w = a(745317),
    k = a(652215),
    y = a(985018),
    E = a(682225);
function m(e) {
    let { transitionState: t, videoEnabled: a, onEnable: m, onClose: v } = e,
        O = f.A.getCameraComponent(),
        _ = p.bm.useSetting(),
        [j, S] = i.useState((0, b.i)(A.default.getCurrentUser())),
        x = (0, s.p)(),
        { analyticsLocations: P } = (0, u.Ay)(d.A.CAMERA_PREVIEW);
    i.useEffect(() => {
        C.default.track(k.HAw.OPEN_MODAL, { type: "Camera Preview Modal" });
    }, []);
    let M = i.useCallback(async () => {
            try {
                await (0, h.gB)(j, {
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
                    })({ page: k.liQ.PREVIEW_CAMERA_MODAL }, x.location),
                });
            } catch (e) {}
            await v(), (0, g._C)(j);
        }, [j, x.location, v]),
        D = i.useCallback(async () => {
            await M(), c.A.setVideoEnabled(!0), null == m || m();
        }, [M, m]),
        I = i.useMemo(
            () => [
                {
                    variant: "primary",
                    text: a ? y.intl.string(y.t.KQENhq) : y.intl.string(y.t.kgIe9a),
                    onClick: a ? M : D,
                },
            ],
            [M, D, a],
        );
    return (0, n.jsx)(u.f5, {
        value: P,
        children: (0, n.jsx)(o.A, {
            page: k.liQ.PREVIEW_CAMERA_MODAL,
            children: (0, n.jsx)(r.Modal, {
                size: "md",
                title: a ? y.intl.string(y.t.LAwwbQ) : y.intl.string(y.t["/HITVD"]),
                actionBarInput: (0, n.jsx)(l.Checkbox, {
                    label: y.intl.string(y.t["3Ppr1h"]),
                    labelType: "secondary",
                    checked: _,
                    onChange: () => {
                        p.bm.updateSetting(!_),
                            C.default.track(k.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !_ });
                    },
                }),
                actions: I,
                onClose: v,
                transitionState: t,
                children: (0, n.jsx)(w.A, {
                    hidePreviewToggle: !0,
                    hideDeviceHeader: !0,
                    hideCameraSettingsLink: !0,
                    selectedBackgroundOption: j,
                    onSelectBackgroundOption: S,
                    hideDeviceSelector: a,
                    renderCamera: (e) =>
                        (0, n.jsxs)("div", {
                            className: E.S,
                            children: [
                                (0, n.jsx)("div", {
                                    className: E.U,
                                    children: (0, n.jsx)(O, {
                                        disabled: !1,
                                        deviceId: e,
                                        width: 430,
                                        height: 242,
                                    }),
                                }),
                                (0, n.jsx)(w.k, {}),
                            ],
                        }),
                    onLearnMore: v,
                }),
            }),
        }),
    });
}
