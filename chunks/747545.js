n.d(t, {
    S: () => x,
    Z: () => L,
}),
    n(704826),
    n(35282),
    n(415506),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(209739),
    l = n.n(s),
    c = n(442837),
    u = n(846519),
    d = n(481060),
    f = n(846027),
    _ = n(579806),
    p = n(906732),
    h = n(670863),
    m = n(72897),
    g = n(921801),
    E = n(695346),
    b = n(938117),
    y = n(131951),
    O = n(626135),
    v = n(358085),
    I = n(981631),
    T = n(726985),
    S = n(65154),
    A = n(388032),
    C = n(612232);
let N = ">=10.0.22000",
    R = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i,
    P = "{E5323777-F976-4f5b-9B55-B94699C46E44}";
function w() {
    return !!(0, v.isWindows)() && !!v.isPlatformEmbedded && l().satisfies(_.Z.os.release, N);
}
function D(e) {
    return (0, v.getPlatform)() === v.PlatformTypes.WINDOWS
        ? "ms-settings:camera" + (null != e ? "?cameraId=".concat(encodeURIComponent(e.replace(R, P))) : "")
        : "";
}
function x() {
    let [e, t] = i.useState(!1),
        n = (0, c.e7)([y.Z], () => y.Z.isMediaFilterSettingLoading());
    return (i.useEffect(() => {
        let e = new u.V7();
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
              className: C.filterLoadingIndicator,
              children: (0, r.jsx)(d.$jN, {}),
          })
        : null;
}
function L(e) {
    let {
            hideDeviceSelector: t = !1,
            hideDeviceHeader: n = !1,
            hideCameraSettingsLink: i = !1,
            onLearnMore: a,
            selectedBackgroundOption: s,
            onSelectBackgroundOption: l,
            renderCamera: u,
            hidePreviewToggle: _ = !1,
            showSmallBackgroundOptions: v = !1,
            onCancelPreview: N,
        } = e,
        { analyticsLocations: R } = (0, p.ZP)(),
        { id: P } = (0, m.p6)(S.h7.VIDEO_INPUT),
        x = (0, c.e7)([y.Z], () => y.Z.isVideoAvailable()),
        L = E.qF.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            u(P),
            y.Z.isEnabled()
                ? null
                : (0, r.jsx)(d.Text, {
                      className: C.permissionWarning,
                      color: "interactive-normal",
                      variant: "text-sm/normal",
                      children: A.intl.format(A.t.stagfH, { onEnableClick: () => f.Z.enable(!0) }),
                  }),
            _
                ? null
                : (0, r.jsx)(d.j7V, {
                      className: C.previewToggle,
                      note: A.intl.string(A.t.WNbX4O),
                      onChange: (e) => {
                          E.qF.updateSetting(e),
                              O.default.track(I.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                      },
                      value: L,
                      hideBorder: !0,
                      children: (0, r.jsx)("div", {
                          className: C.cameraPreviewTitle,
                          children: A.intl.string(A.t["3Ppr1t"]),
                      }),
                  }),
            !t &&
                (0, r.jsx)(g.F, {
                    setting: T.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
                    children: (0, r.jsxs)(d.xJW, {
                        title: n ? null : A.intl.string(A.t.FsQ3OT),
                        children: [
                            (0, r.jsx)(h.j, {
                                deviceType: S.h7.VIDEO_INPUT,
                                location: "CameraSettings",
                                className: o()(C.selector, { [C.selectorNoHeader]: n }),
                                isDisabled: !x,
                                showAllDevices: !0,
                            }),
                            !i &&
                                w() &&
                                (0, r.jsx)(d.R94, {
                                    className: C.cameraDeeplink,
                                    children: A.intl.format(A.t.aJYgRk, {
                                        onCameraSettingsClick: () => {
                                            null == N || N(),
                                                window.open(D(P)),
                                                O.default.track(I.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, {
                                                    location_stack: R,
                                                });
                                        },
                                    }),
                                }),
                        ],
                    }),
                }),
            (0, r.jsx)(g.F, {
                setting: T.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
                children: (0, r.jsx)(b.Z, {
                    className: C.spacingTop24,
                    onLearnMore: a,
                    selectedBackgroundOption: s,
                    onSelectBackgroundOption: l,
                    currentDeviceId: P,
                    smallerBackgroundOptions: v,
                }),
            }),
        ],
    });
}
