a.d(t, { default: () => x });
var i = a(627968),
    n = a(64700),
    r = a(189213),
    l = a(17928),
    s = a(150934),
    d = a(827343),
    c = a(820284),
    o = a(212245),
    u = a(793574),
    h = a(688810),
    A = a(885386),
    g = a(329551),
    p = a(285918),
    C = a(912630),
    E = a(413339),
    k = a(394459),
    v = a(287809),
    w = a(174459),
    _ = a(745317),
    b = a(652215),
    m = a(375708),
    S = a(206362);
function x(e) {
    let { transitionState: t, videoEnabled: a, onEnable: x, onClose: y } = e,
        j = k.Ay.getCameraComponent(),
        M = A.bm.useSetting(),
        [f, P] = n.useState((0, g.i)(v.default.getCurrentUser())),
        I = (0, o.p)(),
        { analyticsLocations: L } = (0, h.Ay)(u.A.CAMERA_PREVIEW),
        D = (0, l.bG)([C.A], () => C.A.videoBackgroundPreviewUnavailable);
    n.useEffect(() => {
        w.default.track(b.HAw.OPEN_MODAL, { type: "Camera Preview Modal" });
    }, []);
    let O = n.useCallback(async () => {
            try {
                await (0, E.gB)(f, { location: { page: b.liQ.PREVIEW_CAMERA_MODAL, ...I.location } });
            } catch (e) {}
            await y(), (0, p._C)(f);
        }, [f, I.location, y]),
        R = n.useCallback(async () => {
            await O(), d.A.setVideoEnabled(!0), x?.();
        }, [O, x]),
        T = n.useMemo(
            () => [
                {
                    variant: "primary",
                    text: a ? m.intl.string(m.t.KQENhq) : m.intl.string(m.t.kgIe9a),
                    onClick: a ? O : R,
                    disabled: D,
                },
            ],
            [O, R, a, D],
        );
    return (0, i.jsx)(h.f5, {
        value: L,
        children: (0, i.jsx)(c.A, {
            page: b.liQ.PREVIEW_CAMERA_MODAL,
            children: (0, i.jsx)(r.Modal, {
                size: "md",
                title: a ? m.intl.string(m.t.LAwwbQ) : m.intl.string(m.t["/HITVD"]),
                actionBarInput: (0, i.jsx)(s.S, {
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
                transitionState: t,
                children: (0, i.jsx)(_.Ay, {
                    hidePreviewToggle: !0,
                    hideDeviceHeader: !0,
                    hideCameraSettingsLink: !0,
                    selectedBackgroundOption: f,
                    onSelectBackgroundOption: P,
                    hideDeviceSelector: a,
                    renderCamera: function (e) {
                        return (0, i.jsxs)("div", {
                            className: S.S,
                            children: [
                                (0, i.jsx)("div", {
                                    className: S.U,
                                    children: (0, i.jsx)(j, { disabled: !1, deviceId: e, width: 430, height: 242 }),
                                }),
                                (0, i.jsx)(_.kE, {}),
                                (0, i.jsx)(_.eK, {}),
                            ],
                        });
                    },
                    onLearnMore: y,
                }),
            }),
        }),
    });
}
