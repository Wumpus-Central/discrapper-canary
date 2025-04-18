n.d(t, {
    S: () => T,
    Z: () => I
}),
    n(704826),
    n(35282),
    n(415506),
    n(388685);
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
    _ = n(938117),
    N = n(131951),
    x = n(626135),
    E = n(358085),
    j = n(981631),
    C = n(726985),
    O = n(388032),
    S = n(932473);
let v = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i;
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
              className: S.filterLoadingIndicator,
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
            N.Z.isEnabled()
                ? null
                : (0, r.jsx)(u.Text, {
                      className: S.permissionWarning,
                      color: 'interactive-normal',
                      variant: 'text-sm/normal',
                      children: O.NW.format(O.t.stagfH, { onEnableClick: () => m.Z.enable(!0) })
                  }),
            I
                ? null
                : (0, r.jsx)(u.j7V, {
                      className: S.previewToggle,
                      note: O.NW.string(O.t.WNbX4O),
                      onChange: (e) => {
                          b.qF.updateSetting(e), x.default.track(j.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                      },
                      value: w,
                      hideBorder: !0,
                      children: (0, r.jsx)('div', {
                          className: S.cameraPreviewTitle,
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
                                className: a()(S.selector, { [S.selectorNoHeader]: n }),
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
                                    className: S.cameraDeeplink,
                                    children: O.NW.format(O.t.aJYgRk, {
                                        onCameraSettingsClick: () => {
                                            null == A || A(), window.open((0, E.getPlatform)() === E.PlatformTypes.WINDOWS ? 'ms-settings:camera' + (null != R ? '?cameraId='.concat(encodeURIComponent(R.replace(v, '{E5323777-F976-4f5b-9B55-B94699C46E44}'))) : '') : ''), x.default.track(j.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: P });
                                        }
                                    })
                                })
                        ]
                    })
                }),
            (0, r.jsx)(f.F, {
                setting: C.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
                children: (0, r.jsx)(_.Z, {
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
