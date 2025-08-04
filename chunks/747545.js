(n.d(t, {
    S: () => y,
    Z: () => A
}),
    n(704826),
    n(35282),
    n(415506),
    n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(209739),
    o = n.n(l),
    c = n(442837),
    d = n(846519),
    u = n(481060),
    m = n(846027),
    p = n(579806),
    g = n(906732),
    h = n(670863),
    f = n(72897),
    b = n(921801),
    x = n(695346),
    _ = n(938117),
    j = n(131951),
    C = n(626135),
    E = n(358085),
    O = n(981631),
    v = n(726985),
    S = n(65154),
    T = n(388032),
    N = n(602985);
let I = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i;
function y() {
    let [e, t] = r.useState(!1),
        n = (0, c.e7)([j.Z], () => j.Z.isMediaFilterSettingLoading());
    return (r.useEffect(() => {
        let e = new d.V7();
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
        ? (0, i.jsx)('div', {
              className: N.filterLoadingIndicator,
              children: (0, i.jsx)(u.$jN, {})
          })
        : null;
}
function A(e) {
    let { hideDeviceSelector: t = !1, hideDeviceHeader: n = !1, hideCameraSettingsLink: r = !1, onLearnMore: s, selectedBackgroundOption: l, onSelectBackgroundOption: d, renderCamera: y, hidePreviewToggle: A = !1, showSmallBackgroundOptions: P = !1, onCancelPreview: R } = e,
        { analyticsLocations: D } = (0, g.ZP)(),
        { id: Z } = (0, f.p)(S.h7.VIDEO_INPUT),
        w = (0, c.e7)([j.Z], () => j.Z.isVideoAvailable()),
        k = x.qF.useSetting();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            y(Z),
            j.Z.isEnabled()
                ? null
                : (0, i.jsx)(u.Text, {
                      className: N.permissionWarning,
                      color: 'interactive-normal',
                      variant: 'text-sm/normal',
                      children: T.intl.format(T.t.stagfH, { onEnableClick: () => m.Z.enable(!0) })
                  }),
            A
                ? null
                : (0, i.jsx)(u.j7V, {
                      className: N.previewToggle,
                      note: T.intl.string(T.t.WNbX4O),
                      onChange: (e) => {
                          (x.qF.updateSetting(e), C.default.track(O.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e }));
                      },
                      value: k,
                      hideBorder: !0,
                      children: (0, i.jsx)('div', {
                          className: N.cameraPreviewTitle,
                          children: T.intl.string(T.t['3Ppr1t'])
                      })
                  }),
            !t &&
                (0, i.jsx)(b.F, {
                    setting: v.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
                    children: (0, i.jsxs)(u.xJW, {
                        title: n ? null : T.intl.string(T.t.FsQ3OT),
                        children: [
                            (0, i.jsx)(h.j, {
                                deviceType: S.h7.VIDEO_INPUT,
                                location: 'CameraSettings',
                                className: a()(N.selector, { [N.selectorNoHeader]: n }),
                                isDisabled: !w,
                                showAllDevices: !0
                            }),
                            !r &&
                                !!(0, E.isWindows)() &&
                                !!E.isPlatformEmbedded &&
                                o().satisfies(p.Z.os.release, '>=10.0.22000') &&
                                (0, i.jsx)(u.R94, {
                                    className: N.cameraDeeplink,
                                    children: T.intl.format(T.t.aJYgRk, {
                                        onCameraSettingsClick: () => {
                                            (null == R || R(), window.open((0, E.getPlatform)() === E.PlatformTypes.WINDOWS ? 'ms-settings:camera' + (null != Z ? '?cameraId='.concat(encodeURIComponent(Z.replace(I, '{E5323777-F976-4f5b-9B55-B94699C46E44}'))) : '') : ''), C.default.track(O.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: D }));
                                        }
                                    })
                                })
                        ]
                    })
                }),
            (0, i.jsx)(b.F, {
                setting: v.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
                children: (0, i.jsx)(_.Z, {
                    className: N.spacingTop24,
                    onLearnMore: s,
                    selectedBackgroundOption: l,
                    onSelectBackgroundOption: d,
                    currentDeviceId: Z,
                    smallerBackgroundOptions: P
                })
            })
        ]
    });
}
