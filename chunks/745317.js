n.d(t, { Ay: () => S, eK: () => b, kE: () => y });
var s = n(477900),
    l = n(582128),
    i = n(17928),
    a = n(451988),
    o = n(289873),
    r = n(738188),
    c = n(661531),
    d = n(834730),
    u = n(331322),
    m = n(243721),
    x = n(827343),
    p = n(688810),
    g = n(625841),
    A = n(74848),
    j = n(885386),
    f = n(912630),
    N = n(382003),
    _ = n(453028),
    h = n(174459),
    E = n(204050),
    v = n(652215),
    O = n(731854),
    I = n(375708),
    C = n(471946);
function y() {
    let [e, t] = l.useState(!1),
        n = (0, i.bG)([_.Ay], () => _.Ay.isMediaFilterSettingLoading());
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
        ? (0, s.jsx)("div", { className: C.mB, children: (0, s.jsx)(o.y, {}) })
        : null;
}
function b() {
    return (0, i.bG)([f.A], () => f.A.videoBackgroundPreviewUnavailable)
        ? (0, s.jsxs)("div", {
              className: C.AJ,
              children: [
                  (0, s.jsx)(r.WarningIcon, { color: c.A.colors.STATUS_WARNING_BACKGROUND, size: "lg" }),
                  (0, s.jsx)(d.E, {
                      color: "text-overlay-light",
                      variant: "text-sm/medium",
                      children: I.intl.string(I.t["8n9gj5"]),
                  }),
              ],
          })
        : null;
}
function S(e) {
    let {
            hideDeviceSelector: t = !1,
            hideDeviceHeader: n = !1,
            hideCameraSettingsLink: l = !1,
            onLearnMore: a,
            selectedBackgroundOption: o,
            onSelectBackgroundOption: r,
            renderCamera: c,
            hidePreviewToggle: f = !1,
            onCancelPreview: y,
        } = e,
        { analyticsLocations: b } = (0, p.Ay)(),
        { id: S } = (0, A.x5)(O.oh.VIDEO_INPUT),
        T = (0, i.bG)([_.Ay], () => _.Ay.isVideoAvailable()),
        k = j.bm.useSetting();
    return (0, s.jsxs)(u.B, {
        gap: 20,
        children: [
            c(S),
            _.Ay.isEnabled()
                ? null
                : (0, s.jsx)(d.E, {
                      className: C.u5,
                      color: "interactive-text-default",
                      variant: "text-sm/normal",
                      children: I.intl.format(I.t.stagfJ, { onEnableClick: () => x.A.enable(!0) }),
                  }),
            f
                ? null
                : (0, s.jsx)(m.d, {
                      label: I.intl.string(I.t["3Ppr1h"]),
                      description: I.intl.string(I.t.WNbX4O),
                      checked: k,
                      onChange: (e) => {
                          j.bm.updateSetting(e),
                              h.default.track(v.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                      },
                  }),
            !t &&
                (0, s.jsx)(g.U, {
                    label: n ? void 0 : I.intl.string(I.t.FsQ3OR),
                    helperText:
                        !l && (0, E.p)()
                            ? I.intl.format(I.t.aJYgRt, {
                                  onCameraSettingsClick: () => {
                                      y?.(),
                                          window.open((0, E.i)(S)),
                                          h.default.track(v.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: b });
                                  },
                              })
                            : void 0,
                    deviceType: O.oh.VIDEO_INPUT,
                    location: "CameraSettings",
                    isDisabled: !T,
                }),
            (0, s.jsx)(N.A, {
                className: C.Jp,
                onLearnMore: a,
                selectedBackgroundOption: o,
                onSelectBackgroundOption: r,
                currentDeviceId: S,
            }),
        ],
    });
}
