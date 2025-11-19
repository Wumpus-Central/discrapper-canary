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
    _ = n(670863),
    p = n(72897),
    h = n(921801),
    m = n(695346),
    g = n(938117),
    E = n(131951),
    b = n(626135),
    y = n(358085),
    O = n(981631),
    v = n(726985),
    I = n(65154),
    T = n(388032),
    S = n(612232);
let A = ">=10.0.22000",
    C = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i,
    N = "{E5323777-F976-4f5b-9B55-B94699C46E44}";
function R() {
    return !!(0, y.isWindows)() && !!y.isPlatformEmbedded && o().satisfies(d.Z.os.release, A);
}
function P(e) {
    return (0, y.getPlatform)() === y.PlatformTypes.WINDOWS
        ? "ms-settings:camera" + (null != e ? "?cameraId=".concat(encodeURIComponent(e.replace(C, N))) : "")
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
              className: S.filterLoadingIndicator,
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
            showSmallBackgroundOptions: A = !1,
            onCancelPreview: C,
        } = e,
        { analyticsLocations: N } = (0, f.ZP)(),
        { id: D } = (0, p.p6)(I.h7.VIDEO_INPUT),
        w = (0, s.e7)([E.Z], () => E.Z.isVideoAvailable()),
        L = m.qF.useSetting();
    return (0, r.jsxs)(c.Kqy, {
        gap: 20,
        children: [
            d(D),
            E.Z.isEnabled()
                ? null
                : (0, r.jsx)(c.Text, {
                      className: S.permissionWarning,
                      color: "interactive-normal",
                      variant: "text-sm/normal",
                      children: T.intl.format(T.t.stagfJ, { onEnableClick: () => u.Z.enable(!0) }),
                  }),
            y
                ? null
                : (0, r.jsx)(c.rsf, {
                      label: T.intl.string(T.t["3Ppr1h"]),
                      description: T.intl.string(T.t.WNbX4O),
                      checked: L,
                      onChange: (e) => {
                          m.qF.updateSetting(e),
                              b.default.track(O.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                      },
                  }),
            !t &&
                (0, r.jsx)(h.F, {
                    setting: v.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
                    children: (0, r.jsx)(_.j, {
                        label: n ? void 0 : T.intl.string(T.t.FsQ3OR),
                        helperText:
                            !i && R()
                                ? T.intl.format(T.t.aJYgRt, {
                                      onCameraSettingsClick: () => {
                                          null == C || C(),
                                              window.open(P(D)),
                                              b.default.track(O.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, {
                                                  location_stack: N,
                                              });
                                      },
                                  })
                                : void 0,
                        deviceType: I.h7.VIDEO_INPUT,
                        location: "CameraSettings",
                        isDisabled: !w,
                        showAllDevices: !0,
                    }),
                }),
            (0, r.jsx)(h.F, {
                setting: v.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
                children: (0, r.jsx)(g.Z, {
                    className: S.spacingTop24,
                    onLearnMore: a,
                    selectedBackgroundOption: o,
                    onSelectBackgroundOption: l,
                    currentDeviceId: D,
                    smallerBackgroundOptions: A,
                }),
            }),
        ],
    });
}
