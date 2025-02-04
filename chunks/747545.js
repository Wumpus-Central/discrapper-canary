n.d(t, {
    S: () => j,
    Z: () => A
}),
    n(757143),
    n(411104),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(209739),
    o = n.n(a),
    c = n(442837),
    d = n(846519),
    u = n(481060),
    m = n(846027),
    h = n(579806),
    g = n(906732),
    _ = n(921801),
    x = n(695346),
    p = n(716161),
    E = n(938117),
    C = n(131951),
    f = n(626135),
    T = n(358085),
    N = n(981631),
    I = n(726985),
    S = n(388032),
    b = n(695140);
let v = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i;
function j() {
    let [e, t] = s.useState(!1),
        n = (0, c.e7)([C.Z], () => C.Z.isMediaFilterSettingLoading());
    return (s.useEffect(() => {
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
              className: b.filterLoadingIndicator,
              children: (0, i.jsx)(u.$jN, {})
          })
        : null;
}
function A(e) {
    let { hideDeviceSelector: t = !1, hideDeviceHeader: n = !1, hideCameraSettingsLink: r = !1, onLearnMore: a, selectedBackgroundOption: d, onSelectBackgroundOption: j, renderCamera: A, hidePreviewToggle: O = !1, showSmallBackgroundOptions: R = !1, onCancelPreview: P } = e,
        { analyticsLocations: D } = (0, g.ZP)(),
        y = (0, c.e7)([C.Z], () => C.Z.getVideoDeviceId()),
        Z = (0, c.Wu)([C.Z], () => Object.values(C.Z.getVideoDevices())),
        k = x.qF.useSetting(),
        L = Z.map((e) => {
            let { id: t, name: n } = e;
            return {
                value: t,
                label: n
            };
        });
    return (
        s.useEffect(() => {
            (0, p.XV)();
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                A(y),
                C.Z.isEnabled()
                    ? null
                    : (0, i.jsx)(u.Text, {
                          className: b.permissionWarning,
                          color: 'interactive-normal',
                          variant: 'text-sm/normal',
                          children: S.intl.format(S.t.stagfH, { onEnableClick: () => m.Z.enable(!0) })
                      }),
                O
                    ? null
                    : (0, i.jsx)(u.j7V, {
                          className: b.previewToggle,
                          note: S.intl.string(S.t.WNbX4O),
                          onChange: (e) => {
                              x.qF.updateSetting(e), f.default.track(N.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                          },
                          value: k,
                          hideBorder: !0,
                          children: (0, i.jsx)('div', {
                              className: b.cameraPreviewTitle,
                              children: S.intl.string(S.t['3Ppr1t'])
                          })
                      }),
                !t &&
                    (0, i.jsx)(_.F, {
                        setting: I.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
                        children: (0, i.jsxs)(u.xJW, {
                            title: n ? null : S.intl.string(S.t.FsQ3OT),
                            children: [
                                (0, i.jsx)(u.q4e, {
                                    placeholder: S.intl.string(S.t['t9eQ/v']),
                                    className: l()(b.selector, { [b.selectorNoHeader]: n }),
                                    options: L,
                                    value: y,
                                    onChange: (e) => m.Z.setVideoDevice(e),
                                    'aria-label': S.intl.string(S.t['t9eQ/v'])
                                }),
                                !r &&
                                    !!(0, T.isWindows)() &&
                                    !!T.isPlatformEmbedded &&
                                    o().satisfies(h.Z.os.release, '>=10.0.22000') &&
                                    (0, i.jsx)(u.R94, {
                                        className: b.cameraDeeplink,
                                        children: S.intl.format(S.t.aJYgRk, {
                                            onCameraSettingsClick: () => {
                                                var e;
                                                null == P || P(), window.open(((e = y), (0, T.getPlatform)() === T.PlatformTypes.WINDOWS ? 'ms-settings:camera' + (null != e ? '?cameraId='.concat(encodeURIComponent(e.replace(v, '{E5323777-F976-4f5b-9B55-B94699C46E44}'))) : '') : '')), f.default.track(N.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: D });
                                            }
                                        })
                                    })
                            ]
                        })
                    }),
                (0, i.jsx)(_.F, {
                    setting: I.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
                    children: (0, i.jsx)(E.Z, {
                        className: b.spacingTop24,
                        onLearnMore: a,
                        selectedBackgroundOption: d,
                        onSelectBackgroundOption: j,
                        currentDeviceId: y,
                        smallerBackgroundOptions: R
                    })
                })
            ]
        })
    );
}
