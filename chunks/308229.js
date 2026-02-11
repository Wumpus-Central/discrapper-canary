n.d(t, { default: () => x });
var i = n(627968),
    a = n(64700),
    o = n(158954),
    l = n(397927),
    c = n(827343),
    s = n(820284),
    r = n(212245),
    d = n(793574),
    _ = n(688810),
    u = n(253932),
    g = n(329551),
    p = n(987384),
    m = n(413339),
    v = n(430452),
    b = n(287809),
    k = n(954571),
    h = n(745317),
    C = n(652215),
    I = n(985018),
    O = n(682225);
function x(e) {
    let { transitionState: t, videoEnabled: n, onEnable: x, onClose: D } = e,
        f = v.Ay.getCameraComponent(),
        A = u.bm.useSetting(),
        [S, w] = a.useState((0, g.i)(b.default.getCurrentUser())),
        E = (0, r.p)(),
        { analyticsLocations: T } = (0, _.Ay)(d.A.CAMERA_PREVIEW);
    a.useEffect(() => {
        k.default.track(C.HAw.OPEN_MODAL, { type: "Camera Preview Modal" });
    }, []);
    let U = a.useCallback(async () => {
            try {
                await (0, m.gB)(S, { location: { page: C.liQ.PREVIEW_CAMERA_MODAL, ...E.location } });
            } catch (e) {}
            await D(), (0, p._C)(S);
        }, [S, E.location, D]),
        j = a.useCallback(async () => {
            await U(), c.A.setVideoEnabled(!0), x?.();
        }, [U, x]),
        N = a.useMemo(
            () => [
                {
                    variant: "primary",
                    text: n ? I.intl.string(I.t.KQENhq) : I.intl.string(I.t.kgIe9a),
                    onClick: n ? U : j,
                },
            ],
            [U, j, n],
        );
    return (0, i.jsx)(_.f5, {
        value: T,
        children: (0, i.jsx)(s.A, {
            page: C.liQ.PREVIEW_CAMERA_MODAL,
            children: (0, i.jsx)(o.Modal, {
                size: "md",
                title: n ? I.intl.string(I.t.LAwwbQ) : I.intl.string(I.t["/HITVD"]),
                actionBarInput: (0, i.jsx)(l.Checkbox, {
                    label: I.intl.string(I.t["3Ppr1h"]),
                    labelType: "secondary",
                    checked: A,
                    onChange: () => {
                        u.bm.updateSetting(!A),
                            k.default.track(C.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !A });
                    },
                }),
                actions: N,
                onClose: D,
                transitionState: t,
                children: (0, i.jsx)(h.A, {
                    hidePreviewToggle: !0,
                    hideDeviceHeader: !0,
                    hideCameraSettingsLink: !0,
                    selectedBackgroundOption: S,
                    onSelectBackgroundOption: w,
                    hideDeviceSelector: n,
                    renderCamera: (e) =>
                        (0, i.jsxs)("div", {
                            className: O.S,
                            children: [
                                (0, i.jsx)("div", {
                                    className: O.U,
                                    children: (0, i.jsx)(f, { disabled: !1, deviceId: e, width: 430, height: 242 }),
                                }),
                                (0, i.jsx)(h.k, {}),
                            ],
                        }),
                    onLearnMore: D,
                }),
            }),
        }),
    });
}
