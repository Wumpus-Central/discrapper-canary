a.d(t, { default: () => S });
var i = a(627968),
    n = a(64700),
    s = a(189213),
    l = a(150934),
    r = a(827343),
    c = a(820284),
    d = a(212245),
    o = a(793574),
    h = a(688810),
    u = a(885386),
    g = a(329551),
    p = a(285918),
    A = a(413339),
    C = a(235058),
    E = a(287809),
    k = a(174459),
    _ = a(745317),
    w = a(652215),
    m = a(375708),
    v = a(206362);
function S(e) {
    let { transitionState: t, videoEnabled: a, onEnable: S, onClose: b } = e,
        x = C.Ay.getCameraComponent(),
        y = u.bm.useSetting(),
        [M, j] = n.useState((0, g.i)(E.default.getCurrentUser())),
        f = (0, d.p)(),
        { analyticsLocations: I } = (0, h.Ay)(o.A.CAMERA_PREVIEW);
    n.useEffect(() => {
        k.default.track(w.HAw.OPEN_MODAL, { type: "Camera Preview Modal" });
    }, []);
    let L = n.useCallback(async () => {
            try {
                await (0, A.gB)(M, { location: { page: w.liQ.PREVIEW_CAMERA_MODAL, ...f.location } });
            } catch (e) {}
            await b(), (0, p._C)(M);
        }, [M, f.location, b]),
        P = n.useCallback(async () => {
            await L(), r.A.setVideoEnabled(!0), S?.();
        }, [L, S]),
        D = n.useMemo(
            () => [
                {
                    variant: "primary",
                    text: a ? m.intl.string(m.t.KQENhq) : m.intl.string(m.t.kgIe9a),
                    onClick: a ? L : P,
                },
            ],
            [L, P, a],
        );
    return (0, i.jsx)(h.f5, {
        value: I,
        children: (0, i.jsx)(c.A, {
            page: w.liQ.PREVIEW_CAMERA_MODAL,
            children: (0, i.jsx)(s.Modal, {
                size: "md",
                title: a ? m.intl.string(m.t.LAwwbQ) : m.intl.string(m.t["/HITVD"]),
                actionBarInput: (0, i.jsx)(l.S, {
                    label: m.intl.string(m.t["3Ppr1h"]),
                    labelType: "secondary",
                    checked: y,
                    onChange: () => {
                        u.bm.updateSetting(!y),
                            k.default.track(w.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !y });
                    },
                }),
                actions: D,
                onClose: b,
                transitionState: t,
                children: (0, i.jsx)(_.A, {
                    hidePreviewToggle: !0,
                    hideDeviceHeader: !0,
                    hideCameraSettingsLink: !0,
                    selectedBackgroundOption: M,
                    onSelectBackgroundOption: j,
                    hideDeviceSelector: a,
                    renderCamera: (e) =>
                        (0, i.jsxs)("div", {
                            className: v.S,
                            children: [
                                (0, i.jsx)("div", {
                                    className: v.U,
                                    children: (0, i.jsx)(x, { disabled: !1, deviceId: e, width: 430, height: 242 }),
                                }),
                                (0, i.jsx)(_.k, {}),
                            ],
                        }),
                    onLearnMore: b,
                }),
            }),
        }),
    });
}
