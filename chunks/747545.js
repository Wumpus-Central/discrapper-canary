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
    x = n(695346),
    b = n(938117),
    N = n(131951),
    _ = n(626135),
    E = n(358085),
    j = n(981631),
    C = n(726985),
    O = n(388032),
    v = n(85073);
let S = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i;
function T() {
    let [e, t] = i.useState(!1),
        n = (0, c.e7)([N.Z], () => N.Z.isMediaFilterSettingLoading());
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
              className: v.filterLoadingIndicator,
              children: (0, r.jsx)(u.$jN, {})
          })
        : null;
}
function I(e) {
    let { hideDeviceSelector: t = !1, hideDeviceHeader: n = !1, hideCameraSettingsLink: i = !1, onLearnMore: s, selectedBackgroundOption: l, onSelectBackgroundOption: d, renderCamera: T, hidePreviewToggle: I = !1, showSmallBackgroundOptions: y = !1, onCancelPreview: A } = e,
        { analyticsLocations: P } = (0, p.ZP)(),
        { currentDeviceId: R, isVideoAvailable: D } = (0, c.cj)([N.Z], () => ({
            currentDeviceId: N.Z.getVideoDeviceId(),
            isVideoAvailable: N.Z.isVideoAvailable()
        })),
        Z = (0, h.Z)(),
        w = x.qF.useSetting(),
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
            N.Z.isEnabled()
                ? null
                : (0, r.jsx)(u.Text, {
                      className: v.permissionWarning,
                      color: 'interactive-normal',
                      variant: 'text-sm/normal',
                      children: O.NW.format(O.t.stagfH, { onEnableClick: () => m.Z.enable(!0) })
                  }),
            I
                ? null
                : (0, r.jsx)(u.j7V, {
                      className: v.previewToggle,
                      note: O.NW.string(O.t.WNbX4O),
                      onChange: (e) => {
                          x.qF.updateSetting(e), _.default.track(j.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                      },
                      value: w,
                      hideBorder: !0,
                      children: (0, r.jsx)('div', {
                          className: v.cameraPreviewTitle,
                          children: O.NW.string(O.t['3Ppr1t'])
                      })
                  }),
            !t &&
                (0, r.jsx)(f.F, {
                    setting: C.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
                    children: (0, r.jsxs)(u.xJW, {
                        title: n ? null : O.NW.string(O.t.FsQ3OT),
                        children: [
                            (0, r.jsx)(u.q4e, {
                                placeholder: O.NW.string(O.t['t9eQ/v']),
                                className: a()(v.selector, { [v.selectorNoHeader]: n }),
                                options: k,
                                value: R,
                                isDisabled: !D,
                                onChange: (e) => m.Z.setVideoDevice(e),
                                'aria-label': O.NW.string(O.t['t9eQ/v'])
                            }),
                            !i &&
                                !!(0, E.isWindows)() &&
                                !!E.isPlatformEmbedded &&
                                o().satisfies(g.Z.os.release, '>=10.0.22000') &&
                                (0, r.jsx)(u.R94, {
                                    className: v.cameraDeeplink,
                                    children: O.NW.format(O.t.aJYgRk, {
                                        onCameraSettingsClick: () => {
                                            var e;
                                            null == A || A(), window.open(((e = R), (0, E.getPlatform)() === E.PlatformTypes.WINDOWS ? 'ms-settings:camera' + (null != e ? '?cameraId='.concat(encodeURIComponent(e.replace(S, '{E5323777-F976-4f5b-9B55-B94699C46E44}'))) : '') : '')), _.default.track(j.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: P });
                                        }
                                    })
                                })
                        ]
                    })
                }),
            (0, r.jsx)(f.F, {
                setting: C.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
                children: (0, r.jsx)(b.Z, {
                    className: v.spacingTop24,
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
