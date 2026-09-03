s.d(t, { Ay: () => y, eK: () => U, kE: () => S });
var n = s(477900),
    l = s(582128),
    i = s(17928),
    a = s(451988),
    o = s(289873),
    r = s(738188),
    c = s(661531),
    d = s(834730),
    u = s(331322),
    m = s(243721),
    x = s(827343),
    A = s(688810),
    p = s(625841),
    g = s(74848),
    E = s(885386),
    _ = s(912630),
    N = s(382003),
    j = s(916546),
    f = s(174459),
    I = s(204050),
    h = s(652215),
    O = s(731854),
    v = s(375708),
    C = s(357063);
function S() {
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
        ? (0, n.jsx)("div", { className: C.mB, children: (0, n.jsx)(o.y, {}) })
        : null;
}
function U() {
    return (0, i.bG)([_.A], () => _.A.videoBackgroundPreviewUnavailable)
        ? (0, n.jsxs)("div", {
              className: C.AJ,
              children: [
                  (0, n.jsx)(r.WarningIcon, { color: c.A.colors.STATUS_WARNING_BACKGROUND, size: "lg" }),
                  (0, n.jsx)(d.E, {
                      color: "text-overlay-light",
                      variant: "text-sm/medium",
                      children: v.intl.string(v.t["8n9gj5"]),
                  }),
              ],
          })
        : null;
}
function y(e) {
    let {
            hideDeviceSelector: t = !1,
            hideDeviceHeader: s = !1,
            hideCameraSettingsLink: l = !1,
            onLearnMore: a,
            selectedBackgroundOption: o,
            onSelectBackgroundOption: r,
            renderCamera: c,
            hidePreviewToggle: _ = !1,
            onCancelPreview: S,
        } = e,
        { analyticsLocations: U } = (0, A.Ay)(),
        { id: y } = (0, g.x5)(O.oh.VIDEO_INPUT),
        D = (0, i.bG)([j.Ay], () => j.Ay.isVideoAvailable()),
        T = E.bm.useSetting();
    return (0, n.jsxs)(u.B, {
        gap: 20,
        children: [
            c(y),
            j.Ay.isEnabled()
                ? null
                : (0, n.jsx)(d.E, {
                      className: C.u5,
                      color: "interactive-text-default",
                      variant: "text-sm/normal",
                      children: v.intl.format(v.t.stagfJ, { onEnableClick: () => x.A.enable(!0) }),
                  }),
            _
                ? null
                : (0, n.jsx)(m.d, {
                      label: v.intl.string(v.t["3Ppr1h"]),
                      description: v.intl.string(v.t.WNbX4O),
                      checked: T,
                      onChange: (e) => {
                          E.bm.updateSetting(e),
                              f.default.track(h.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                      },
                  }),
            !t &&
                (0, n.jsx)(p.U, {
                    label: s ? void 0 : v.intl.string(v.t.FsQ3OR),
                    helperText:
                        !l && (0, I.p)()
                            ? v.intl.format(v.t.aJYgRt, {
                                  onCameraSettingsClick: () => {
                                      S?.(),
                                          window.open((0, I.i)(y)),
                                          f.default.track(h.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: U });
                                  },
                              })
                            : void 0,
                    deviceType: O.oh.VIDEO_INPUT,
                    location: "CameraSettings",
                    isDisabled: !D,
                }),
            (0, n.jsx)(N.A, {
                className: C.Jp,
                onLearnMore: a,
                selectedBackgroundOption: o,
                onSelectBackgroundOption: r,
                currentDeviceId: y,
            }),
        ],
    });
}
