n.d(t, {
    S: function () {
        return A;
    },
    Z: function () {
        return j;
    }
}),
    n(757143),
    n(411104),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(209739),
    o = n.n(l),
    c = n(442837),
    d = n(846519),
    u = n(481060),
    m = n(846027),
    g = n(579806),
    h = n(906732),
    p = n(921801),
    x = n(695346),
    f = n(716161),
    _ = n(938117),
    E = n(131951),
    C = n(626135),
    T = n(358085),
    S = n(981631),
    b = n(726985),
    I = n(388032),
    N = n(695140);
let v = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i;
function A() {
    let [e, t] = r.useState(!1),
        n = (0, c.e7)([E.Z], () => E.Z.isMediaFilterSettingLoading());
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
              children: (0, i.jsx)(u.Spinner, {})
          })
        : null;
}
function j(e) {
    let { hideDeviceSelector: t = !1, hideDeviceHeader: n = !1, hideCameraSettingsLink: s = !1, onLearnMore: l, selectedBackgroundOption: d, onSelectBackgroundOption: A, renderCamera: j, hidePreviewToggle: O = !1, showSmallBackgroundOptions: R = !1, onCancelPreview: P } = e,
        { analyticsLocations: D } = (0, h.ZP)(),
        y = (0, c.e7)([E.Z], () => E.Z.getVideoDeviceId()),
        B = (0, c.Wu)([E.Z], () => Object.values(E.Z.getVideoDevices())),
        Z = x.qF.useSetting(),
        L = B.map((e) => {
            let { id: t, name: n } = e;
            return {
                value: t,
                label: n
            };
        });
    return (
        r.useEffect(() => {
            (0, f.XV)();
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                j(y),
                E.Z.isEnabled()
                    ? null
                    : (0, i.jsx)(u.Text, {
                          className: N.permissionWarning,
                          color: 'interactive-normal',
                          variant: 'text-sm/normal',
                          children: I.intl.format(I.t.stagfH, { onEnableClick: () => m.Z.enable(!0) })
                      }),
                O
                    ? null
                    : (0, i.jsx)(u.FormSwitch, {
                          className: N.previewToggle,
                          note: I.intl.string(I.t.WNbX4O),
                          onChange: (e) => {
                              x.qF.updateSetting(e), C.default.track(S.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                          },
                          value: Z,
                          hideBorder: !0,
                          children: (0, i.jsx)('div', {
                              className: N.cameraPreviewTitle,
                              children: I.intl.string(I.t['3Ppr1t'])
                          })
                      }),
                !t &&
                    (0, i.jsx)(p.F, {
                        setting: b.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
                        children: (0, i.jsxs)(u.FormItem, {
                            title: n ? null : I.intl.string(I.t.FsQ3OT),
                            children: [
                                (0, i.jsx)(u.SingleSelect, {
                                    placeholder: I.intl.string(I.t['t9eQ/v']),
                                    className: a()(N.selector, { [N.selectorNoHeader]: n }),
                                    options: L,
                                    value: y,
                                    onChange: (e) => m.Z.setVideoDevice(e),
                                    'aria-label': I.intl.string(I.t['t9eQ/v'])
                                }),
                                !s &&
                                    !!(0, T.isWindows)() &&
                                    !!T.isPlatformEmbedded &&
                                    o().satisfies(g.Z.os.release, '>=10.0.22000') &&
                                    (0, i.jsx)(u.FormText, {
                                        className: N.cameraDeeplink,
                                        children: I.intl.format(I.t.aJYgRk, {
                                            onCameraSettingsClick: () => {
                                                null == P || P(),
                                                    window.open(
                                                        (function (e) {
                                                            if ((0, T.getPlatform)() === T.PlatformTypes.WINDOWS) return 'ms-settings:camera' + (null != e ? '?cameraId='.concat(encodeURIComponent(e.replace(v, '{E5323777-F976-4f5b-9B55-B94699C46E44}'))) : '');
                                                            return '';
                                                        })(y)
                                                    ),
                                                    C.default.track(S.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: D });
                                            }
                                        })
                                    })
                            ]
                        })
                    }),
                (0, i.jsx)(p.F, {
                    setting: b.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
                    children: (0, i.jsx)(_.Z, {
                        className: N.spacingTop24,
                        onLearnMore: l,
                        selectedBackgroundOption: d,
                        onSelectBackgroundOption: A,
                        currentDeviceId: y,
                        smallerBackgroundOptions: R
                    })
                })
            ]
        })
    );
}
