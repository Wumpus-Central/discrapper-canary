s.d(t, { A: () => v, k: () => I });
var n = s(627968),
    l = s(64700),
    i = s(17928),
    a = s(451988),
    o = s(289873),
    r = s(331322),
    c = s(834730),
    d = s(243721),
    u = s(827343),
    m = s(688810),
    x = s(625841),
    p = s(74848),
    g = s(885386),
    A = s(382003),
    j = s(235058),
    f = s(174459),
    N = s(204050),
    _ = s(652215),
    h = s(731854),
    E = s(375708),
    O = s(460610);
function I() {
    let [e, t] = l.useState(!1),
        s = (0, i.bG)([j.Ay], () => j.Ay.isMediaFilterSettingLoading());
    return (l.useEffect(() => {
        let e = new a.Ep();
        return (
            s
                ? e.start(150, () => {
                      t(!0);
                  })
                : (e.stop(), t(!1)),
            () => e.stop()
        );
    }, [s]),
    e)
        ? (0, n.jsx)("div", { className: O.mB, children: (0, n.jsx)(o.y, {}) })
        : null;
}
function v(e) {
    let {
            hideDeviceSelector: t = !1,
            hideDeviceHeader: s = !1,
            hideCameraSettingsLink: l = !1,
            onLearnMore: a,
            selectedBackgroundOption: o,
            onSelectBackgroundOption: I,
            renderCamera: v,
            hidePreviewToggle: C = !1,
            onCancelPreview: k,
        } = e,
        { analyticsLocations: S } = (0, m.Ay)(),
        { id: y } = (0, p.x5)(h.oh.VIDEO_INPUT),
        T = (0, i.bG)([j.Ay], () => j.Ay.isVideoAvailable()),
        b = g.bm.useSetting();
    return (0, n.jsxs)(r.B, {
        gap: 20,
        children: [
            v(y),
            j.Ay.isEnabled()
                ? null
                : (0, n.jsx)(c.E, {
                      className: O.u5,
                      color: "interactive-text-default",
                      variant: "text-sm/normal",
                      children: E.intl.format(E.t.stagfJ, { onEnableClick: () => u.A.enable(!0) }),
                  }),
            C
                ? null
                : (0, n.jsx)(d.d, {
                      label: E.intl.string(E.t["3Ppr1h"]),
                      description: E.intl.string(E.t.WNbX4O),
                      checked: b,
                      onChange: (e) => {
                          g.bm.updateSetting(e),
                              f.default.track(_.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                      },
                  }),
            !t &&
                (0, n.jsx)(x.U, {
                    label: s ? void 0 : E.intl.string(E.t.FsQ3OR),
                    helperText:
                        !l && (0, N.p)()
                            ? E.intl.format(E.t.aJYgRt, {
                                  onCameraSettingsClick: () => {
                                      k?.(),
                                          window.open((0, N.i)(y)),
                                          f.default.track(_.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: S });
                                  },
                              })
                            : void 0,
                    deviceType: h.oh.VIDEO_INPUT,
                    location: "CameraSettings",
                    isDisabled: !T,
                }),
            (0, n.jsx)(A.A, {
                className: O.Jp,
                onLearnMore: a,
                selectedBackgroundOption: o,
                onSelectBackgroundOption: I,
                currentDeviceId: y,
            }),
        ],
    });
}
