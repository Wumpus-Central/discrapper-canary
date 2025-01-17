t.d(n, {
    S: function () {
        return T;
    },
    Z: function () {
        return E;
    }
}),
    t(757143),
    t(411104),
    t(47120);
var l = t(200651),
    s = t(192379),
    o = t(120356),
    a = t.n(o),
    i = t(209739),
    r = t.n(i),
    c = t(442837),
    d = t(846519),
    u = t(481060),
    g = t(846027),
    m = t(579806),
    p = t(906732),
    x = t(695346),
    k = t(716161),
    O = t(938117),
    j = t(131951),
    f = t(626135),
    I = t(358085),
    N = t(981631),
    h = t(388032),
    v = t(695140);
let C = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i;
function T() {
    let [e, n] = s.useState(!1),
        t = (0, c.e7)([j.Z], () => j.Z.isMediaFilterSettingLoading());
    return (s.useEffect(() => {
        let e = new d.V7();
        return (
            t
                ? e.start(150, () => {
                      n(!0);
                  })
                : (e.stop(), n(!1)),
            () => e.stop()
        );
    }, [t]),
    e)
        ? (0, l.jsx)('div', {
              className: v.filterLoadingIndicator,
              children: (0, l.jsx)(u.Spinner, {})
          })
        : null;
}
function E(e) {
    let { hideDeviceSelector: n = !1, hideDeviceHeader: t = !1, hideCameraSettingsLink: o = !1, onLearnMore: i, selectedBackgroundOption: d, onSelectBackgroundOption: T, renderCamera: E, hidePreviewToggle: _ = !1, showSmallBackgroundOptions: b = !1, onCancelPreview: S } = e,
        { analyticsLocations: B } = (0, p.ZP)(),
        D = (0, c.e7)([j.Z], () => j.Z.getVideoDeviceId()),
        U = (0, c.Wu)([j.Z], () => Object.values(j.Z.getVideoDevices())),
        y = x.qF.useSetting(),
        M = U.map((e) => {
            let { id: n, name: t } = e;
            return {
                value: n,
                label: t
            };
        });
    return (
        s.useEffect(() => {
            (0, k.XV)();
        }, []),
        (0, l.jsxs)(l.Fragment, {
            children: [
                E(D),
                j.Z.isEnabled()
                    ? null
                    : (0, l.jsx)(u.Text, {
                          className: v.permissionWarning,
                          color: 'interactive-normal',
                          variant: 'text-sm/normal',
                          children: h.intl.format(h.t.stagfH, { onEnableClick: () => g.Z.enable(!0) })
                      }),
                _
                    ? null
                    : (0, l.jsx)(u.FormSwitch, {
                          className: v.previewToggle,
                          note: h.intl.string(h.t.WNbX4O),
                          onChange: (e) => {
                              x.qF.updateSetting(e), f.default.track(N.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                          },
                          value: y,
                          hideBorder: !0,
                          children: (0, l.jsx)('div', {
                              className: v.cameraPreviewTitle,
                              children: h.intl.string(h.t['3Ppr1t'])
                          })
                      }),
                n
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              t
                                  ? null
                                  : (0, l.jsx)(u.Heading, {
                                        className: v.spacingTop24,
                                        variant: 'eyebrow',
                                        color: 'header-secondary',
                                        children: h.intl.string(h.t.FsQ3OT)
                                    }),
                              (0, l.jsx)(u.SingleSelect, {
                                  placeholder: h.intl.string(h.t['t9eQ/v']),
                                  className: a()(v.selector, { [v.selectorNoHeader]: t }),
                                  options: M,
                                  value: D,
                                  onChange: (e) => g.Z.setVideoDevice(e)
                              }),
                              !o &&
                                  !!(0, I.isWindows)() &&
                                  !!I.isPlatformEmbedded &&
                                  r().satisfies(m.Z.os.release, '>=10.0.22000') &&
                                  (0, l.jsx)(u.FormText, {
                                      className: v.cameraDeeplink,
                                      children: h.intl.format(h.t.aJYgRk, {
                                          onCameraSettingsClick: () => {
                                              null == S || S(),
                                                  window.open(
                                                      (function (e) {
                                                          if ((0, I.getPlatform)() === I.PlatformTypes.WINDOWS) return 'ms-settings:camera' + (null != e ? '?cameraId='.concat(encodeURIComponent(e.replace(C, '{E5323777-F976-4f5b-9B55-B94699C46E44}'))) : '');
                                                          return '';
                                                      })(D)
                                                  ),
                                                  f.default.track(N.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: B });
                                          }
                                      })
                                  })
                          ]
                      }),
                (0, l.jsx)(O.Z, {
                    onLearnMore: i,
                    selectedBackgroundOption: d,
                    onSelectBackgroundOption: T,
                    currentDeviceId: D,
                    smallerBackgroundOptions: b
                })
            ]
        })
    );
}
