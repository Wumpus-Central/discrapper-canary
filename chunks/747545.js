n.d(t, {
    S: () => I,
    Z: () => y
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
    N = n(716161),
    x = n(938117),
    _ = n(131951),
    E = n(626135),
    j = n(358085),
    C = n(981631),
    O = n(726985),
    v = n(388032),
    S = n(120938);
let T = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i;
function I() {
    let [e, t] = i.useState(!1),
        n = (0, c.e7)([_.Z], () => _.Z.isMediaFilterSettingLoading());
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
function y(e) {
    let { hideDeviceSelector: t = !1, hideDeviceHeader: n = !1, hideCameraSettingsLink: s = !1, onLearnMore: l, selectedBackgroundOption: d, onSelectBackgroundOption: I, renderCamera: y, hidePreviewToggle: A = !1, showSmallBackgroundOptions: P = !1, onCancelPreview: R } = e,
        { analyticsLocations: D } = (0, p.ZP)(),
        { currentDeviceId: Z, isVideoAvailable: w } = (0, c.cj)([_.Z], () => ({
            currentDeviceId: _.Z.getVideoDeviceId(),
            isVideoAvailable: _.Z.isVideoAvailable()
        })),
        k = (0, h.Z)(),
        W = b.qF.useSetting(),
        L = Object.values(k).map((e) => {
            let { id: t, name: n } = e;
            return {
                value: t,
                label: n
            };
        });
    return (
        i.useEffect(() => {
            (0, N.XV)();
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                y(Z),
                _.Z.isEnabled()
                    ? null
                    : (0, r.jsx)(u.Text, {
                          className: S.permissionWarning,
                          color: 'interactive-normal',
                          variant: 'text-sm/normal',
                          children: v.NW.format(v.t.stagfH, { onEnableClick: () => m.Z.enable(!0) })
                      }),
                A
                    ? null
                    : (0, r.jsx)(u.j7V, {
                          className: S.previewToggle,
                          note: v.NW.string(v.t.WNbX4O),
                          onChange: (e) => {
                              b.qF.updateSetting(e), E.default.track(C.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                          },
                          value: W,
                          hideBorder: !0,
                          children: (0, r.jsx)('div', {
                              className: S.cameraPreviewTitle,
                              children: v.NW.string(v.t['3Ppr1t'])
                          })
                      }),
                !t &&
                    (0, r.jsx)(f.F, {
                        setting: O.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
                        children: (0, r.jsxs)(u.xJW, {
                            title: n ? null : v.NW.string(v.t.FsQ3OT),
                            children: [
                                (0, r.jsx)(u.q4e, {
                                    placeholder: v.NW.string(v.t['t9eQ/v']),
                                    className: a()(S.selector, { [S.selectorNoHeader]: n }),
                                    options: L,
                                    value: Z,
                                    isDisabled: !w,
                                    onChange: (e) => m.Z.setVideoDevice(e),
                                    'aria-label': v.NW.string(v.t['t9eQ/v'])
                                }),
                                !s &&
                                    !!(0, j.isWindows)() &&
                                    !!j.isPlatformEmbedded &&
                                    o().satisfies(g.Z.os.release, '>=10.0.22000') &&
                                    (0, r.jsx)(u.R94, {
                                        className: S.cameraDeeplink,
                                        children: v.NW.format(v.t.aJYgRk, {
                                            onCameraSettingsClick: () => {
                                                var e;
                                                null == R || R(), window.open(((e = Z), (0, j.getPlatform)() === j.PlatformTypes.WINDOWS ? 'ms-settings:camera' + (null != e ? '?cameraId='.concat(encodeURIComponent(e.replace(T, '{E5323777-F976-4f5b-9B55-B94699C46E44}'))) : '') : '')), E.default.track(C.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: D });
                                            }
                                        })
                                    })
                            ]
                        })
                    }),
                (0, r.jsx)(f.F, {
                    setting: O.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
                    children: (0, r.jsx)(x.Z, {
                        className: S.spacingTop24,
                        onLearnMore: l,
                        selectedBackgroundOption: d,
                        onSelectBackgroundOption: I,
                        currentDeviceId: Z,
                        smallerBackgroundOptions: P
                    })
                })
            ]
        })
    );
}
