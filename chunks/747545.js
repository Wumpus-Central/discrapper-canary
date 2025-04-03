n.d(t, {
    S: () => T,
    Z: () => I
}),
    n(757143),
    n(301563),
    n(411104),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(209739),
    o = n.n(l),
    c = n(442837),
    d = n(846519),
    u = n(481060),
    m = n(846027),
    g = n(579806),
    p = n(906732),
    h = n(920321),
    f = n(921801),
    b = n(695346),
    N = n(938117),
    x = n(131951),
    _ = n(626135),
    E = n(358085),
    j = n(981631),
    O = n(726985),
    C = n(388032),
    S = n(602985);
let v = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i;
function T() {
    let [e, t] = i.useState(!1),
        n = (0, c.e7)([x.Z], () => x.Z.isMediaFilterSettingLoading());
    return (i.useEffect(() => {
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
        ? (0, r.jsx)('div', {
              className: S.filterLoadingIndicator,
              children: (0, r.jsx)(u.$jN, {})
          })
        : null;
}
function I(e) {
    let { hideDeviceSelector: t = !1, hideDeviceHeader: n = !1, hideCameraSettingsLink: i = !1, onLearnMore: s, selectedBackgroundOption: l, onSelectBackgroundOption: d, renderCamera: T, hidePreviewToggle: I = !1, showSmallBackgroundOptions: y = !1, onCancelPreview: A } = e,
        { analyticsLocations: P } = (0, p.ZP)(),
        { currentDeviceId: R, isVideoAvailable: D } = (0, c.cj)([x.Z], () => ({
            currentDeviceId: x.Z.getVideoDeviceId(),
            isVideoAvailable: x.Z.isVideoAvailable()
        })),
        Z = (0, h.Z)(),
        w = b.qF.useSetting(),
        k = Object.values(Z).map((e) => {
            let { id: t, name: n } = e;
            return {
                value: t,
                label: n
            };
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            T(R),
            x.Z.isEnabled()
                ? null
                : (0, r.jsx)(u.Text, {
                      className: S.permissionWarning,
                      color: 'interactive-normal',
                      variant: 'text-sm/normal',
                      children: C.NW.format(C.t.stagfH, { onEnableClick: () => m.Z.enable(!0) })
                  }),
            I
                ? null
                : (0, r.jsx)(u.j7V, {
                      className: S.previewToggle,
                      note: C.NW.string(C.t.WNbX4O),
                      onChange: (e) => {
                          b.qF.updateSetting(e), _.default.track(j.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                      },
                      value: w,
                      hideBorder: !0,
                      children: (0, r.jsx)('div', {
                          className: S.cameraPreviewTitle,
                          children: C.NW.string(C.t['3Ppr1t'])
                      })
                  }),
            !t &&
                (0, r.jsx)(f.F, {
                    setting: O.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
                    children: (0, r.jsxs)(u.xJW, {
                        title: n ? null : C.NW.string(C.t.FsQ3OT),
                        children: [
                            (0, r.jsx)(u.q4e, {
                                placeholder: C.NW.string(C.t['t9eQ/v']),
                                className: a()(S.selector, { [S.selectorNoHeader]: n }),
                                options: k,
                                value: R,
                                isDisabled: !D,
                                onChange: (e) => m.Z.setVideoDevice(e),
                                'aria-label': C.NW.string(C.t['t9eQ/v'])
                            }),
                            !i &&
                                !!(0, E.isWindows)() &&
                                !!E.isPlatformEmbedded &&
                                o().satisfies(g.Z.os.release, '>=10.0.22000') &&
                                (0, r.jsx)(u.R94, {
                                    className: S.cameraDeeplink,
                                    children: C.NW.format(C.t.aJYgRk, {
                                        onCameraSettingsClick: () => {
                                            null == A || A(), window.open((0, E.getPlatform)() === E.PlatformTypes.WINDOWS ? 'ms-settings:camera' + (null != R ? '?cameraId='.concat(encodeURIComponent(R.replace(v, '{E5323777-F976-4f5b-9B55-B94699C46E44}'))) : '') : ''), _.default.track(j.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: P });
                                        }
                                    })
                                })
                        ]
                    })
                }),
            (0, r.jsx)(f.F, {
                setting: O.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
                children: (0, r.jsx)(N.Z, {
                    className: S.spacingTop24,
                    onLearnMore: s,
                    selectedBackgroundOption: l,
                    onSelectBackgroundOption: d,
                    currentDeviceId: R,
                    smallerBackgroundOptions: y
                })
            })
        ]
    });
}
