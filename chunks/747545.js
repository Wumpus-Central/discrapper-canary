n.d(t, {
    S: () => D,
    Z: () => w,
}),
    n(704826),
    n(35282),
    n(415506),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(209739),
    o = n.n(a),
    s = n(442837),
    l = n(846519),
    c = n(481060),
    u = n(846027),
    d = n(579806),
    f = n(906732),
    p = n(670863),
    _ = n(72897),
    m = n(921801),
    h = n(695346),
    g = n(938117),
    E = n(131951),
    b = n(626135),
    y = n(358085),
    O = n(981631),
    v = n(726985),
    S = n(65154),
    I = n(388032),
    T = n(612232);
let C = ">=10.0.22000",
    A = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i,
    N = "{E5323777-F976-4f5b-9B55-B94699C46E44}";
function P() {
    return !!(0, y.isWindows)() && !!y.isPlatformEmbedded && o().satisfies(d.Z.os.release, C);
}
function R(e) {
    return (0, y.getPlatform)() === y.PlatformTypes.WINDOWS
        ? "ms-settings:camera" + (null != e ? "?cameraId=".concat(encodeURIComponent(e.replace(A, N))) : "")
        : "";
}
function D() {
    let [e, t] = i.useState(!1),
        n = (0, s.e7)([E.Z], () => E.Z.isMediaFilterSettingLoading());
    return (i.useEffect(() => {
        let e = new l.V7();
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
              className: T.filterLoadingIndicator,
              children: (0, r.jsx)(c.$jN, {}),
          })
        : null;
}
function w(e) {
    let {
            hideDeviceSelector: t = !1,
            hideDeviceHeader: n = !1,
            hideCameraSettingsLink: i = !1,
            onLearnMore: a,
            selectedBackgroundOption: o,
            onSelectBackgroundOption: l,
            renderCamera: d,
            hidePreviewToggle: y = !1,
            onCancelPreview: C,
        } = e,
        { analyticsLocations: A } = (0, f.ZP)(),
        { id: N } = (0, _.p6)(S.h7.VIDEO_INPUT),
        D = (0, s.e7)([E.Z], () => E.Z.isVideoAvailable()),
        w = h.qF.useSetting();
    return (0, r.jsxs)(c.Kqy, {
        gap: 20,
        children: [
            d(N),
            E.Z.isEnabled()
                ? null
                : (0, r.jsx)(c.Text, {
                      className: T.permissionWarning,
                      color: "interactive-text-default",
                      variant: "text-sm/normal",
                      children: I.intl.format(I.t.stagfJ, { onEnableClick: () => u.Z.enable(!0) }),
                  }),
            y
                ? null
                : (0, r.jsx)(c.rsf, {
                      label: I.intl.string(I.t["3Ppr1h"]),
                      description: I.intl.string(I.t.WNbX4O),
                      checked: w,
                      onChange: (e) => {
                          h.qF.updateSetting(e),
                              b.default.track(O.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                      },
                  }),
            !t &&
                (0, r.jsx)(m.F, {
                    setting: v.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
                    children: (0, r.jsx)(p.j, {
                        label: n ? void 0 : I.intl.string(I.t.FsQ3OR),
                        helperText:
                            !i && P()
                                ? I.intl.format(I.t.aJYgRt, {
                                      onCameraSettingsClick: () => {
                                          null == C || C(),
                                              window.open(R(N)),
                                              b.default.track(O.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, {
                                                  location_stack: A,
                                              });
                                      },
                                  })
                                : void 0,
                        deviceType: S.h7.VIDEO_INPUT,
                        location: "CameraSettings",
                        isDisabled: !D,
                        showAllDevices: !0,
                    }),
                }),
            (0, r.jsx)(m.F, {
                setting: v.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
                children: (0, r.jsx)(g.Z, {
                    className: T.spacingTop24,
                    onLearnMore: a,
                    selectedBackgroundOption: o,
                    onSelectBackgroundOption: l,
                    currentDeviceId: N,
                }),
            }),
        ],
    });
}
