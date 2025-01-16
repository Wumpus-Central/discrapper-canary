t.d(n, {
    S: function () {
        return h;
    },
    Z: function () {
        return I;
    }
}),
    t(47120);
var l = t(200651),
    s = t(192379),
    o = t(120356),
    i = t.n(o),
    a = t(442837),
    r = t(846519),
    c = t(481060),
    d = t(846027),
    u = t(695346),
    g = t(716161),
    m = t(938117),
    p = t(131951),
    x = t(626135),
    O = t(981631),
    k = t(388032),
    j = t(695140);
function h() {
    let [e, n] = s.useState(!1),
        t = (0, a.e7)([p.Z], () => p.Z.isMediaFilterSettingLoading());
    return (s.useEffect(() => {
        let e = new r.V7();
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
              className: j.filterLoadingIndicator,
              children: (0, l.jsx)(c.Spinner, {})
          })
        : null;
}
function I(e) {
    let { hideDeviceSelector: n = !1, hideDeviceHeader: t = !1, onLearnMore: o, selectedBackgroundOption: r, onSelectBackgroundOption: h, renderCamera: I, hidePreviewToggle: N = !1, showSmallBackgroundOptions: f = !1 } = e,
        v = (0, a.e7)([p.Z], () => p.Z.getVideoDeviceId()),
        b = (0, a.Wu)([p.Z], () => Object.values(p.Z.getVideoDevices())),
        T = u.qF.useSetting(),
        _ = b.map((e) => {
            let { id: n, name: t } = e;
            return {
                value: n,
                label: t
            };
        });
    return (
        s.useEffect(() => {
            (0, g.XV)();
        }, []),
        (0, l.jsxs)(l.Fragment, {
            children: [
                I(v),
                p.Z.isEnabled()
                    ? null
                    : (0, l.jsx)(c.Text, {
                          className: j.permissionWarning,
                          color: 'interactive-normal',
                          variant: 'text-sm/normal',
                          children: k.intl.format(k.t.stagfH, { onEnableClick: () => d.Z.enable(!0) })
                      }),
                N
                    ? null
                    : (0, l.jsx)(c.FormSwitch, {
                          className: j.previewToggle,
                          note: k.intl.string(k.t.WNbX4O),
                          onChange: (e) => {
                              u.qF.updateSetting(e), x.default.track(O.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                          },
                          value: T,
                          hideBorder: !0,
                          children: (0, l.jsx)('div', {
                              className: j.cameraPreviewTitle,
                              children: k.intl.string(k.t['3Ppr1t'])
                          })
                      }),
                n
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              t
                                  ? null
                                  : (0, l.jsx)(c.Heading, {
                                        className: j.spacingTop24,
                                        variant: 'eyebrow',
                                        color: 'header-secondary',
                                        children: k.intl.string(k.t.FsQ3OT)
                                    }),
                              (0, l.jsx)(c.SingleSelect, {
                                  placeholder: k.intl.string(k.t['t9eQ/v']),
                                  className: i()(j.selector, { [j.selectorNoHeader]: t }),
                                  options: _,
                                  value: v,
                                  onChange: (e) => d.Z.setVideoDevice(e)
                              })
                          ]
                      }),
                (0, l.jsx)(m.Z, {
                    onLearnMore: o,
                    selectedBackgroundOption: r,
                    onSelectBackgroundOption: h,
                    currentDeviceId: v,
                    smallerBackgroundOptions: f
                })
            ]
        })
    );
}
