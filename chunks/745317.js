var s = n(477900),
    l = n(582128),
    i = n(855986),
    a = n(451988),
    o = n(289873),
    r = n(738188),
    c = n(646514),
    d = n(834730),
    u = n(331322),
    m = n(143129),
    x = n(827343),
    A = n(688810),
    E = n(625841),
    g = n(74848),
    p = n(253932),
    N = n(912630),
    _ = n(717359),
    j = n(754712),
    I = n(129230),
    f = n(204050),
    h = n(652215),
    v = n(731854),
    O = n(792996),
    y = n(357063);
n.d(
    t,
    {},
    {
        Ay: function (e) {
            let {
                    hideDeviceSelector: t = !1,
                    hideDeviceHeader: n = !1,
                    hideCameraSettingsLink: l = !1,
                    onLearnMore: a,
                    selectedBackgroundOption: o,
                    onSelectBackgroundOption: r,
                    renderCamera: c,
                    hidePreviewToggle: N = !1,
                    onCancelPreview: S,
                } = e,
                { analyticsLocations: b } = (0, A.Ay)(),
                { id: C } = (0, g.x5)(v.oh.VIDEO_INPUT),
                D = (0, i.bG)([j.Ay], () => j.Ay.isVideoAvailable()),
                U = p.bm.useSetting();
            return (0, s.jsxs)(u.B, {
                gap: 20,
                children: [
                    c(C),
                    j.Ay.isEnabled()
                        ? null
                        : (0, s.jsx)(d.E, {
                              className: y.u5,
                              color: "interactive-text-default",
                              variant: "body-sm/normal",
                              children: O.intl.format(O.t.stagfJ, { onEnableClick: () => x.default.enable(!0) }),
                          }),
                    N
                        ? null
                        : (0, s.jsx)(m.d, {
                              label: O.intl.string(O.t["3Ppr1h"]),
                              description: O.intl.string(O.t.WNbX4O),
                              checked: U,
                              onChange: (e) => {
                                  (p.bm.updateSetting(e),
                                      I.default.track(h.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e }));
                              },
                          }),
                    !t &&
                        (0, s.jsx)(E.U, {
                            label: n ? void 0 : O.intl.string(O.t.FsQ3OR),
                            helperText:
                                !l && (0, f.p)()
                                    ? O.intl.format(O.t.aJYgRt, {
                                          onCameraSettingsClick: () => {
                                              (S?.(),
                                                  window.open((0, f.i)(C)),
                                                  I.default.track(h.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, {
                                                      location_stack: b,
                                                  }));
                                          },
                                      })
                                    : void 0,
                            deviceType: v.oh.VIDEO_INPUT,
                            location: "CameraSettings",
                            isDisabled: !D,
                        }),
                    (0, s.jsx)(_.A, {
                        className: y.Jp,
                        onLearnMore: a,
                        selectedBackgroundOption: o,
                        onSelectBackgroundOption: r,
                        currentDeviceId: C,
                    }),
                ],
            });
        },
        eK: function () {
            return (0, i.bG)([N.A], () => N.A.videoBackgroundPreviewUnavailable)
                ? (0, s.jsxs)("div", {
                      className: y.AJ,
                      children: [
                          (0, s.jsx)(r.WarningIcon, { color: c.A.colors.STATUS_WARNING_BACKGROUND, size: "lg" }),
                          (0, s.jsx)(d.E, {
                              color: "text-overlay-light",
                              variant: "body-sm/medium",
                              children: O.intl.string(O.t["8n9gj5"]),
                          }),
                      ],
                  })
                : null;
        },
        kE: function () {
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
                ? (0, s.jsx)("div", { className: y.mB, children: (0, s.jsx)(o.y, {}) })
                : null;
        },
    },
);
