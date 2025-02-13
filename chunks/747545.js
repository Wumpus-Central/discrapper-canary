n.d(t, {
    S: () => A,
    Z: () => O
}),
    n(757143),
    n(411104),
    n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(209739),
    o = n.n(a),
    c = n(442837),
    d = n(846519),
    u = n(481060),
    h = n(846027),
    m = n(579806),
    g = n(906732),
    x = n(920321),
    _ = n(921801),
    p = n(695346),
    E = n(716161),
    C = n(938117),
    N = n(131951),
    f = n(626135),
    I = n(358085),
    T = n(981631),
    S = n(726985),
    j = n(388032),
    v = n(593780);
let b = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i;
function A() {
    let [e, t] = s.useState(!1),
        n = (0, c.e7)([N.Z], () => N.Z.isMediaFilterSettingLoading());
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
    let { hideDeviceSelector: t = !1, hideDeviceHeader: n = !1, hideCameraSettingsLink: l = !1, onLearnMore: a, selectedBackgroundOption: d, onSelectBackgroundOption: A, renderCamera: O, hidePreviewToggle: R = !1, showSmallBackgroundOptions: D = !1, onCancelPreview: P } = e,
        { analyticsLocations: y } = (0, g.ZP)(),
        { currentDeviceId: Z, isVideoAvailable: L } = (0, c.cj)([N.Z], () => ({
            currentDeviceId: N.Z.getVideoDeviceId(),
            isVideoAvailable: N.Z.isVideoAvailable()
        })),
        k = (0, x.Z)(),
        B = p.qF.useSetting(),
        M = Object.values(k).map((e) => {
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
                O(Z),
                N.Z.isEnabled()
                    ? null
                    : (0, i.jsx)(u.Text, {
                          className: v.permissionWarning,
                          color: 'interactive-normal',
                          variant: 'text-sm/normal',
                          children: j.intl.format(j.t.stagfH, { onEnableClick: () => h.Z.enable(!0) })
                      }),
                R
                    ? null
                    : (0, i.jsx)(u.j7V, {
                          className: v.previewToggle,
                          note: j.intl.string(j.t.WNbX4O),
                          onChange: (e) => {
                              p.qF.updateSetting(e), f.default.track(T.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                          },
                          value: B,
                          hideBorder: !0,
                          children: (0, i.jsx)('div', {
                              className: v.cameraPreviewTitle,
                              children: j.intl.string(j.t['3Ppr1t'])
                          })
                      }),
                !t &&
                    (0, i.jsx)(_.F, {
                        setting: S.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
                        children: (0, i.jsxs)(u.xJW, {
                            title: n ? null : j.intl.string(j.t.FsQ3OT),
                            children: [
                                (0, i.jsx)(u.q4e, {
                                    placeholder: j.intl.string(j.t['t9eQ/v']),
                                    className: r()(v.selector, { [v.selectorNoHeader]: n }),
                                    options: M,
                                    value: Z,
                                    isDisabled: !L,
                                    onChange: (e) => h.Z.setVideoDevice(e),
                                    'aria-label': j.intl.string(j.t['t9eQ/v'])
                                }),
                                !l &&
                                    !!(0, I.isWindows)() &&
                                    !!I.isPlatformEmbedded &&
                                    o().satisfies(m.Z.os.release, '>=10.0.22000') &&
                                    (0, i.jsx)(u.R94, {
                                        className: v.cameraDeeplink,
                                        children: j.intl.format(j.t.aJYgRk, {
                                            onCameraSettingsClick: () => {
                                                var e;
                                                null == P || P(), window.open(((e = Z), (0, I.getPlatform)() === I.PlatformTypes.WINDOWS ? 'ms-settings:camera' + (null != e ? '?cameraId='.concat(encodeURIComponent(e.replace(b, '{E5323777-F976-4f5b-9B55-B94699C46E44}'))) : '') : '')), f.default.track(T.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: y });
                                            }
                                        })
                                    })
                            ]
                        })
                    }),
                (0, i.jsx)(_.F, {
                    setting: S.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
                    children: (0, i.jsx)(C.Z, {
                        className: v.spacingTop24,
                        onLearnMore: a,
                        selectedBackgroundOption: d,
                        onSelectBackgroundOption: A,
                        currentDeviceId: Z,
                        smallerBackgroundOptions: D
                    })
                })
            ]
        })
    );
}
