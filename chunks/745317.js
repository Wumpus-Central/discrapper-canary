n.d(t, { Ay: () => y, eK: () => U, kE: () => C });
var s = n(477900),
    l = n(582128),
    i = n(17928),
    a = n(451988),
    o = n(289873),
    r = n(738188),
    c = n(661531),
    d = n(834730),
    u = n(331322),
    m = n(193249),
    x = n(827343),
    p = n(688810),
    A = n(625841),
    E = n(74848),
    g = n(253932),
    _ = n(912630),
    N = n(382003),
    j = n(999926),
    f = n(174459),
    h = n(204050),
    I = n(652215),
    v = n(731854),
    O = n(105292),
    S = n(357063);
function C() {
    let [e, t] = l.useState(!1),
        n = (0, i.bG)([j.Ay], () => j.Ay.isMediaFilterSettingLoading());
    return (l.useEffect(() => {
        let e = new a.Ep();
        return (
            n
                ? e.start(150, () => {
                      t(!0);
                  })
                : (e.stop(), t(!1)),
            () => e.stop()
        );
    }, [n]),
    e)
        ? (0, s.jsx)("div", { className: S.mB, children: (0, s.jsx)(o.y, {}) })
        : null;
}
function U() {
    return (0, i.bG)([_.A], () => _.A.videoBackgroundPreviewUnavailable)
        ? (0, s.jsxs)("div", {
              className: S.AJ,
              children: [
                  (0, s.jsx)(r.WarningIcon, { color: c.A.colors.STATUS_WARNING_BACKGROUND, size: "lg" }),
                  (0, s.jsx)(d.E, {
                      color: "text-overlay-light",
                      variant: "text-sm/medium",
                      children: O.intl.string(O.t["8n9gj5"]),
                  }),
              ],
          })
        : null;
}
function y(e) {
    let {
            hideDeviceSelector: t = !1,
            hideDeviceHeader: n = !1,
            hideCameraSettingsLink: l = !1,
            onLearnMore: a,
            selectedBackgroundOption: o,
            onSelectBackgroundOption: r,
            renderCamera: c,
            hidePreviewToggle: _ = !1,
            onCancelPreview: C,
        } = e,
        { analyticsLocations: U } = (0, p.Ay)(),
        { id: y } = (0, E.x5)(v.oh.VIDEO_INPUT),
        D = (0, i.bG)([j.Ay], () => j.Ay.isVideoAvailable()),
        T = g.bm.useSetting();
    return (0, s.jsxs)(u.B, {
        gap: 20,
        children: [
            c(y),
            j.Ay.isEnabled()
                ? null
                : (0, s.jsx)(d.E, {
                      className: S.u5,
                      color: "interactive-text-default",
                      variant: "text-sm/normal",
                      children: O.intl.format(O.t.stagfJ, { onEnableClick: () => x.default.enable(!0) }),
                  }),
            _
                ? null
                : (0, s.jsx)(m.d, {
                      label: O.intl.string(O.t["3Ppr1h"]),
                      description: O.intl.string(O.t.WNbX4O),
                      checked: T,
                      onChange: (e) => {
                          (g.bm.updateSetting(e),
                              f.default.track(I.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e }));
                      },
                  }),
            !t &&
                (0, s.jsx)(A.U, {
                    label: n ? void 0 : O.intl.string(O.t.FsQ3OR),
                    helperText:
                        !l && (0, h.p)()
                            ? O.intl.format(O.t.aJYgRt, {
                                  onCameraSettingsClick: () => {
                                      (C?.(),
                                          window.open((0, h.i)(y)),
                                          f.default.track(I.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: U }));
                                  },
                              })
                            : void 0,
                    deviceType: v.oh.VIDEO_INPUT,
                    location: "CameraSettings",
                    isDisabled: !D,
                }),
            (0, s.jsx)(N.A, {
                className: S.Jp,
                onLearnMore: a,
                selectedBackgroundOption: o,
                onSelectBackgroundOption: r,
                currentDeviceId: y,
            }),
        ],
    });
}
