t.d(a, { default: () => x });
var i = t(627968),
    n = t(64700),
    l = t(189213),
    s = t(17928),
    r = t(150934),
    d = t(827343),
    c = t(820284),
    o = t(212245),
    u = t(793574),
    h = t(688810),
    A = t(885386),
    g = t(329551),
    p = t(285918),
    C = t(912630),
    E = t(413339),
    k = t(941327),
    v = t(287809),
    w = t(174459),
    _ = t(745317),
    b = t(652215),
    m = t(375708),
    S = t(206362);
function x(e) {
    let { transitionState: a, videoEnabled: t, onEnable: x, onClose: y } = e,
        j = k.Ay.getCameraComponent(),
        M = A.bm.useSetting(),
        [P, f] = n.useState((0, g.i)(v.default.getCurrentUser())),
        I = (0, o.p)(),
        { analyticsLocations: L } = (0, h.Ay)(u.A.CAMERA_PREVIEW),
        D = (0, s.bG)([C.A], () => C.A.videoBackgroundPreviewUnavailable);
    n.useEffect(() => {
        w.default.track(b.HAw.OPEN_MODAL, { type: "Camera Preview Modal" });
    }, []);
    let O = n.useCallback(async () => {
            try {
                await (0, E.gB)(P, { location: { page: b.liQ.PREVIEW_CAMERA_MODAL, ...I.location } });
            } catch (e) {}
            await y(), (0, p._C)(P);
        }, [P, I.location, y]),
        R = n.useCallback(async () => {
            await O(), d.A.setVideoEnabled(!0), x?.();
        }, [O, x]),
        T = n.useMemo(
            () => [
                {
                    variant: "primary",
                    text: t ? m.intl.string(m.t.KQENhq) : m.intl.string(m.t.kgIe9a),
                    onClick: t ? O : R,
                    disabled: D,
                },
            ],
            [O, R, t, D],
        );
    return (0, i.jsx)(h.f5, {
        value: L,
        children: (0, i.jsx)(c.A, {
            page: b.liQ.PREVIEW_CAMERA_MODAL,
            children: (0, i.jsx)(l.Modal, {
                size: "md",
                title: t ? m.intl.string(m.t.LAwwbQ) : m.intl.string(m.t["/HITVD"]),
                actionBarInput: (0, i.jsx)(r.S, {
                    label: m.intl.string(m.t["3Ppr1h"]),
                    labelType: "secondary",
                    checked: M,
                    onChange: () => {
                        A.bm.updateSetting(!M),
                            w.default.track(b.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !M });
                    },
                }),
                actions: T,
                onClose: y,
                transitionState: a,
                children: (0, i.jsx)(_.Ay, {
                    hidePreviewToggle: !0,
                    hideDeviceHeader: !0,
                    hideCameraSettingsLink: !0,
                    selectedBackgroundOption: P,
                    onSelectBackgroundOption: f,
                    hideDeviceSelector: t,
                    renderCamera: (e) =>
                        (0, i.jsxs)("div", {
                            className: S.S,
                            children: [
                                (0, i.jsx)("div", {
                                    className: S.U,
                                    children: (0, i.jsx)(j, { disabled: !1, deviceId: e, width: 430, height: 242 }),
                                }),
                                (0, i.jsx)(_.kE, {}),
                                (0, i.jsx)(_.eK, {}),
                            ],
                        }),
                    onLearnMore: y,
                }),
            }),
        }),
    });
}
