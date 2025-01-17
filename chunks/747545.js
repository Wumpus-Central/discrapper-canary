t.d(n, {
    S: function () {
        return T;
    },
    Z: function () {
        return _;
    }
}),
    t(47120);
var s = t(200651),
    l = t(192379),
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
    h = t(626135),
    I = t(358085),
    N = t(981631),
    f = t(388032),
    v = t(695140);
function T() {
    let [e, n] = l.useState(!1),
        t = (0, c.e7)([j.Z], () => j.Z.isMediaFilterSettingLoading());
    return (l.useEffect(() => {
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
        ? (0, s.jsx)('div', {
              className: v.filterLoadingIndicator,
              children: (0, s.jsx)(u.Spinner, {})
          })
        : null;
}
function _(e) {
    let { hideDeviceSelector: n = !1, hideDeviceHeader: t = !1, hideCameraSettingsLink: o = !1, onLearnMore: i, selectedBackgroundOption: d, onSelectBackgroundOption: T, renderCamera: _, hidePreviewToggle: b = !1, showSmallBackgroundOptions: C = !1 } = e,
        { analyticsLocations: E } = (0, p.ZP)(),
        S = (0, c.e7)([j.Z], () => j.Z.getVideoDeviceId()),
        B = (0, c.Wu)([j.Z], () => Object.values(j.Z.getVideoDevices())),
        U = x.qF.useSetting(),
        y = B.map((e) => {
            let { id: n, name: t } = e;
            return {
                value: n,
                label: t
            };
        });
    return (
        l.useEffect(() => {
            (0, k.XV)();
        }, []),
        (0, s.jsxs)(s.Fragment, {
            children: [
                _(S),
                j.Z.isEnabled()
                    ? null
                    : (0, s.jsx)(u.Text, {
                          className: v.permissionWarning,
                          color: 'interactive-normal',
                          variant: 'text-sm/normal',
                          children: f.intl.format(f.t.stagfH, { onEnableClick: () => g.Z.enable(!0) })
                      }),
                b
                    ? null
                    : (0, s.jsx)(u.FormSwitch, {
                          className: v.previewToggle,
                          note: f.intl.string(f.t.WNbX4O),
                          onChange: (e) => {
                              x.qF.updateSetting(e), h.default.track(N.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                          },
                          value: U,
                          hideBorder: !0,
                          children: (0, s.jsx)('div', {
                              className: v.cameraPreviewTitle,
                              children: f.intl.string(f.t['3Ppr1t'])
                          })
                      }),
                n
                    ? null
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              t
                                  ? null
                                  : (0, s.jsx)(u.Heading, {
                                        className: v.spacingTop24,
                                        variant: 'eyebrow',
                                        color: 'header-secondary',
                                        children: f.intl.string(f.t.FsQ3OT)
                                    }),
                              (0, s.jsx)(u.SingleSelect, {
                                  placeholder: f.intl.string(f.t['t9eQ/v']),
                                  className: a()(v.selector, { [v.selectorNoHeader]: t }),
                                  options: y,
                                  value: S,
                                  onChange: (e) => g.Z.setVideoDevice(e)
                              }),
                              !o &&
                                  !!(0, I.isWindows)() &&
                                  !!I.isPlatformEmbedded &&
                                  r().satisfies(m.Z.os.release, '>=10.0.22000') &&
                                  (0, s.jsx)(u.FormText, {
                                      className: v.cameraDeeplink,
                                      children: f.intl.format(f.t.aJYgRk, {
                                          onCameraSettingsClick: () => {
                                              window.open('ms-settings:camera'), h.default.track(N.rMx.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: E });
                                          }
                                      })
                                  })
                          ]
                      }),
                (0, s.jsx)(O.Z, {
                    onLearnMore: i,
                    selectedBackgroundOption: d,
                    onSelectBackgroundOption: T,
                    currentDeviceId: S,
                    smallerBackgroundOptions: C
                })
            ]
        })
    );
}
