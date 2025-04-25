n.d(t, {
    S: () => I,
    Z: () => N
}),
    n(704826),
    n(35282),
    n(415506),
    n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(209739),
    o = n.n(a),
    c = n(442837),
    d = n(846519),
    u = n(481060),
    m = n(846027),
    p = n(579806),
    g = n(906732),
    h = n(920321),
    f = n(921801),
    b = n(695346),
    _ = n(938117),
    x = n(131951),
    E = n(626135),
    j = n(358085),
    C = n(981631),
    O = n(726985),
    S = n(388032),
    v = n(602985);
let T = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i;
function I() {
    let [e, t] = r.useState(!1),
        n = (0, c.e7)([x.Z], () => x.Z.isMediaFilterSettingLoading());
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
              className: v.filterLoadingIndicator,
              children: (0, i.jsx)(u.$jN, {})
          })
        : null;
}
function N(e) {
    let { hideDeviceSelector: t = !1, hideDeviceHeader: n = !1, hideCameraSettingsLink: r = !1, onLearnMore: s, selectedBackgroundOption: a, onSelectBackgroundOption: d, renderCamera: I, hidePreviewToggle: N = !1, showSmallBackgroundOptions: y = !1, onCancelPreview: A } = e,
        { analyticsLocations: P } = (0, g.ZP)(),
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
    return (0, i.jsxs)(i.Fragment, {
        children: [
            I(R),
            x.Z.isEnabled()
                ? null
                : (0, i.jsx)(u.Text, {
                      className: v.permissionWarning,
                      color: 'interactive-normal',
                      variant: 'text-sm/normal',
                      children: S.intl.format(S.t.stagfH, { onEnableClick: () => m.Z.enable(!0) })
                  }),
            N
                ? null
                : (0, i.jsx)(u.j7V, {
                      className: v.previewToggle,
                      note: S.intl.string(S.t.WNbX4O),
                      onChange: (e) => {
                          b.qF.updateSetting(e), E.default.track(C.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                      },
                      value: w,
                      hideBorder: !0,
                      children: (0, i.jsx)('div', {
                          className: v.cameraPreviewTitle,
                          children: S.intl.string(S.t['3Ppr1t'])
                      })
                  }),
            !t &&
                (0, i.jsx)(f.F, {
                    setting: O.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
                    children: (0, i.jsxs)(u.xJW, {
                        title: n ? null : S.intl.string(S.t.FsQ3OT),
                        children: [
                            (0, i.jsx)(u.q4e, {
                                placeholder: S.intl.string(S.t['t9eQ/v']),
                                className: l()(v.selector, { [v.selectorNoHeader]: n }),
                                options: k,
                                value: R,
                                isDisabled: !D,
                                onChange: (e) => m.Z.setVideoDevice(e),
                                'aria-label': S.intl.string(S.t['t9eQ/v'])
                            }),
                            !r &&
                                !!(0, j.isWindows)() &&
                                !!j.isPlatformEmbedded &&
                                o().satisfies(p.Z.os.release, '>=10.0.22000') &&
                                (0, i.jsx)(u.R94, {
                                    className: v.cameraDeeplink,
                                    children: S.intl.format(S.t.aJYgRk, {
                                        onCameraSettingsClick: () => {
                                            null == A || A(), window.open((0, j.getPlatform)() === j.PlatformTypes.WINDOWS ? 'ms-settings:camera' + (null != R ? '?cameraId='.concat(encodeURIComponent(R.replace(T, '{E5323777-F976-4f5b-9B55-B94699C46E44}'))) : '') : ''), E.default.track(C.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: P });
                                        }
                                    })
                                })
                        ]
                    })
                }),
            (0, i.jsx)(f.F, {
                setting: O.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
                children: (0, i.jsx)(_.Z, {
                    className: v.spacingTop24,
                    onLearnMore: s,
                    selectedBackgroundOption: a,
                    onSelectBackgroundOption: d,
                    currentDeviceId: R,
                    smallerBackgroundOptions: y
                })
            })
        ]
    });
}
