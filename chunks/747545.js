n.d(t, {
    S: () => A,
    Z: () => O
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
    _ = n(920321),
    x = n(921801),
    p = n(695346),
    E = n(716161),
    C = n(938117),
    f = n(131951),
    T = n(626135),
    N = n(358085),
    I = n(981631),
    S = n(726985),
    b = n(388032),
    v = n(695140);
let j = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i;
function A() {
    let [e, t] = s.useState(!1),
        n = (0, c.e7)([f.Z], () => f.Z.isMediaFilterSettingLoading());
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
              className: v.filterLoadingIndicator,
              children: (0, i.jsx)(u.$jN, {})
          })
        : null;
}
function O(e) {
    let { hideDeviceSelector: t = !1, hideDeviceHeader: n = !1, hideCameraSettingsLink: r = !1, onLearnMore: a, selectedBackgroundOption: d, onSelectBackgroundOption: A, renderCamera: O, hidePreviewToggle: R = !1, showSmallBackgroundOptions: P = !1, onCancelPreview: D } = e,
        { analyticsLocations: Z } = (0, g.ZP)(),
        { currentDeviceId: y, isVideoAvailable: k } = (0, c.cj)([f.Z], () => ({
            currentDeviceId: f.Z.getVideoDeviceId(),
            isVideoAvailable: f.Z.isVideoAvailable()
        })),
        L = (0, _.Z)(),
        B = p.qF.useSetting(),
        M = Object.values(L).map((e) => {
            let { id: t, name: n } = e;
            return {
                value: t,
                label: n
            };
        });
    return (
        s.useEffect(() => {
            (0, E.XV)();
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                O(y),
                f.Z.isEnabled()
                    ? null
                    : (0, i.jsx)(u.Text, {
                          className: v.permissionWarning,
                          color: 'interactive-normal',
                          variant: 'text-sm/normal',
                          children: b.intl.format(b.t.stagfH, { onEnableClick: () => m.Z.enable(!0) })
                      }),
                R
                    ? null
                    : (0, i.jsx)(u.j7V, {
                          className: v.previewToggle,
                          note: b.intl.string(b.t.WNbX4O),
                          onChange: (e) => {
                              p.qF.updateSetting(e), T.default.track(I.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                          },
                          value: B,
                          hideBorder: !0,
                          children: (0, i.jsx)('div', {
                              className: v.cameraPreviewTitle,
                              children: b.intl.string(b.t['3Ppr1t'])
                          })
                      }),
                !t &&
                    (0, i.jsx)(x.F, {
                        setting: S.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
                        children: (0, i.jsxs)(u.xJW, {
                            title: n ? null : b.intl.string(b.t.FsQ3OT),
                            children: [
                                (0, i.jsx)(u.q4e, {
                                    placeholder: b.intl.string(b.t['t9eQ/v']),
                                    className: l()(v.selector, { [v.selectorNoHeader]: n }),
                                    options: M,
                                    value: y,
                                    isDisabled: !k,
                                    onChange: (e) => m.Z.setVideoDevice(e),
                                    'aria-label': b.intl.string(b.t['t9eQ/v'])
                                }),
                                !r &&
                                    !!(0, N.isWindows)() &&
                                    !!N.isPlatformEmbedded &&
                                    o().satisfies(h.Z.os.release, '>=10.0.22000') &&
                                    (0, i.jsx)(u.R94, {
                                        className: v.cameraDeeplink,
                                        children: b.intl.format(b.t.aJYgRk, {
                                            onCameraSettingsClick: () => {
                                                var e;
                                                null == D || D(), window.open(((e = y), (0, N.getPlatform)() === N.PlatformTypes.WINDOWS ? 'ms-settings:camera' + (null != e ? '?cameraId='.concat(encodeURIComponent(e.replace(j, '{E5323777-F976-4f5b-9B55-B94699C46E44}'))) : '') : '')), T.default.track(I.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: Z });
                                            }
                                        })
                                    })
                            ]
                        })
                    }),
                (0, i.jsx)(x.F, {
                    setting: S.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
                    children: (0, i.jsx)(C.Z, {
                        className: v.spacingTop24,
                        onLearnMore: a,
                        selectedBackgroundOption: d,
                        onSelectBackgroundOption: A,
                        currentDeviceId: y,
                        smallerBackgroundOptions: P
                    })
                })
            ]
        })
    );
}
