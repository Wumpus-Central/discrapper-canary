n.d(t, {
    S: () => S,
    Z: () => I,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(846519),
    s = n(481060),
    l = n(846027),
    c = n(906732),
    u = n(670863),
    d = n(72897),
    f = n(921801),
    p = n(695346),
    _ = n(938117),
    m = n(131951),
    h = n(626135),
    g = n(988306),
    E = n(981631),
    b = n(726985),
    y = n(65154),
    O = n(388032),
    v = n(986752);
function S() {
    let [e, t] = i.useState(!1),
        n = (0, a.e7)([m.Z], () => m.Z.isMediaFilterSettingLoading());
    return (i.useEffect(() => {
        let e = new o.V7();
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
        ? (0, r.jsx)("div", {
              className: v.filterLoadingIndicator,
              children: (0, r.jsx)(s.$jN, {}),
          })
        : null;
}
function I(e) {
    let {
            hideDeviceSelector: t = !1,
            hideDeviceHeader: n = !1,
            hideCameraSettingsLink: i = !1,
            onLearnMore: o,
            selectedBackgroundOption: S,
            onSelectBackgroundOption: I,
            renderCamera: T,
            hidePreviewToggle: C = !1,
            onCancelPreview: A,
        } = e,
        { analyticsLocations: N } = (0, c.ZP)(),
        { id: P } = (0, d.p6)(y.h7.VIDEO_INPUT),
        R = (0, a.e7)([m.Z], () => m.Z.isVideoAvailable()),
        w = p.qF.useSetting();
    return (0, r.jsxs)(s.Kqy, {
        gap: 20,
        children: [
            T(P),
            m.Z.isEnabled()
                ? null
                : (0, r.jsx)(s.Text, {
                      className: v.permissionWarning,
                      color: "interactive-text-default",
                      variant: "text-sm/normal",
                      children: O.intl.format(O.t.stagfJ, { onEnableClick: () => l.Z.enable(!0) }),
                  }),
            C
                ? null
                : (0, r.jsx)(s.rsf, {
                      label: O.intl.string(O.t["3Ppr1h"]),
                      description: O.intl.string(O.t.WNbX4O),
                      checked: w,
                      onChange: (e) => {
                          p.qF.updateSetting(e),
                              h.default.track(E.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                      },
                  }),
            !t &&
                (0, r.jsx)(f.F, {
                    setting: b.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
                    children: (0, r.jsx)(u.j, {
                        label: n ? void 0 : O.intl.string(O.t.FsQ3OR),
                        helperText:
                            !i && (0, g.O)()
                                ? O.intl.format(O.t.aJYgRt, {
                                      onCameraSettingsClick: () => {
                                          null == A || A(),
                                              window.open((0, g.u)(P)),
                                              h.default.track(E.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, {
                                                  location_stack: N,
                                              });
                                      },
                                  })
                                : void 0,
                        deviceType: y.h7.VIDEO_INPUT,
                        location: "CameraSettings",
                        isDisabled: !R,
                        showAllDevices: !0,
                    }),
                }),
            (0, r.jsx)(f.F, {
                setting: b.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
                children: (0, r.jsx)(_.Z, {
                    className: v.spacingTop24,
                    onLearnMore: o,
                    selectedBackgroundOption: S,
                    onSelectBackgroundOption: I,
                    currentDeviceId: P,
                }),
            }),
        ],
    });
}
