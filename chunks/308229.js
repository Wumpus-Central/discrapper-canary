a.d(t, { default: () => f });
var n = a(627968),
    i = a(64700),
    o = a(189213),
    r = a(150934),
    l = a(827343),
    c = a(820284),
    s = a(212245),
    d = a(793574),
    _ = a(688810),
    g = a(253932),
    u = a(329551),
    p = a(987384),
    A = a(413339),
    I = a(430452),
    v = a(287809),
    h = a(954571),
    E = a(745317),
    D = a(652215),
    w = a(985018),
    O = a(206362);
function f(e) {
    let { transitionState: t, videoEnabled: a, onEnable: f, onClose: m } = e,
        C = I.Ay.getCameraComponent(),
        T = g.bm.useSetting(),
        [N, R] = i.useState((0, u.i)(v.default.getCurrentUser())),
        x = (0, s.p)(),
        { analyticsLocations: k } = (0, _.Ay)(d.A.CAMERA_PREVIEW);
    i.useEffect(() => {
        h.default.track(D.HAw.OPEN_MODAL, { type: "Camera Preview Modal" });
    }, []);
    let b = i.useCallback(async () => {
            try {
                await (0, A.gB)(N, { location: { page: D.liQ.PREVIEW_CAMERA_MODAL, ...x.location } });
            } catch (e) {}
            await m(), (0, p._C)(N);
        }, [N, x.location, m]),
        M = i.useCallback(async () => {
            await b(), l.A.setVideoEnabled(!0), f?.();
        }, [b, f]),
        y = i.useMemo(
            () => [
                {
                    variant: "primary",
                    text: a ? w.intl.string(w.t.KQENhq) : w.intl.string(w.t.kgIe9a),
                    onClick: a ? b : M,
                },
            ],
            [b, M, a],
        );
    return (0, n.jsx)(_.f5, {
        value: k,
        children: (0, n.jsx)(c.A, {
            page: D.liQ.PREVIEW_CAMERA_MODAL,
            children: (0, n.jsx)(o.Modal, {
                size: "md",
                title: a ? w.intl.string(w.t.LAwwbQ) : w.intl.string(w.t["/HITVD"]),
                actionBarInput: (0, n.jsx)(r.S, {
                    label: w.intl.string(w.t["3Ppr1h"]),
                    labelType: "secondary",
                    checked: T,
                    onChange: () => {
                        g.bm.updateSetting(!T),
                            h.default.track(D.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !T });
                    },
                }),
                actions: y,
                onClose: m,
                transitionState: t,
                children: (0, n.jsx)(E.A, {
                    hidePreviewToggle: !0,
                    hideDeviceHeader: !0,
                    hideCameraSettingsLink: !0,
                    selectedBackgroundOption: N,
                    onSelectBackgroundOption: R,
                    hideDeviceSelector: a,
                    renderCamera: (e) =>
                        (0, n.jsxs)("div", {
                            className: O.S,
                            children: [
                                (0, n.jsx)("div", {
                                    className: O.U,
                                    children: (0, n.jsx)(C, { disabled: !1, deviceId: e, width: 430, height: 242 }),
                                }),
                                (0, n.jsx)(E.k, {}),
                            ],
                        }),
                    onLearnMore: m,
                }),
            }),
        }),
    });
}
