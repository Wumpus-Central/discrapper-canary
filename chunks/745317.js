n.d(t, {
    A: () => h,
    k: () => A,
}),
    n(896048);
var s = n(627968),
    r = n(64700),
    l = n(311907),
    i = n(451988),
    o = n(397927),
    a = n(827343),
    c = n(688810),
    u = n(625841),
    d = n(74848),
    p = n(253932),
    m = n(520999),
    O = n(430452),
    f = n(954571),
    j = n(204050),
    g = n(652215),
    b = n(731854),
    x = n(985018),
    y = n(602785);

function A() {
    let [e, t] = r.useState(!1),
        n = (0, l.bG)([O.A], () => O.A.isMediaFilterSettingLoading());
    return (r.useEffect(() => {
        let e = new i.Ep();
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
        ? (0, s.jsx)("div", {
              className: y.mB,
              children: (0, s.jsx)(o.y$y, {}),
          })
        : null;
}

function h(e) {
    let {
            hideDeviceSelector: t = !1,
            hideDeviceHeader: n = !1,
            hideCameraSettingsLink: r = !1,
            onLearnMore: i,
            selectedBackgroundOption: A,
            onSelectBackgroundOption: h,
            renderCamera: v,
            hidePreviewToggle: N = !1,
            onCancelPreview: E,
        } = e,
        { analyticsLocations: _ } = (0, c.Ay)(),
        { id: S } = (0, d.x5)(b.oh.VIDEO_INPUT),
        P = (0, l.bG)([O.A], () => O.A.isVideoAvailable()),
        D = p.bm.useSetting();
    return (0, s.jsxs)(o.BJc, {
        gap: 20,
        children: [
            v(S),
            O.A.isEnabled()
                ? null
                : (0, s.jsx)(o.Text, {
                      className: y.u5,
                      color: "interactive-text-default",
                      variant: "text-sm/normal",
                      children: x.intl.format(x.t.stagfJ, {
                          onEnableClick: () => a.A.enable(!0),
                      }),
                  }),
            N
                ? null
                : (0, s.jsx)(o.dOG, {
                      label: x.intl.string(x.t["3Ppr1h"]),
                      description: x.intl.string(x.t.WNbX4O),
                      checked: D,
                      onChange: (e) => {
                          p.bm.updateSetting(e),
                              f.default.track(g.HAw.UPDATE_USER_SETTINGS_LOCAL, {
                                  always_preview_video: e,
                              });
                      },
                  }),
            !t &&
                (0, s.jsx)(u.U, {
                    label: n ? void 0 : x.intl.string(x.t.FsQ3OR),
                    helperText:
                        !r && (0, j.p)()
                            ? x.intl.format(x.t.aJYgRt, {
                                  onCameraSettingsClick: () => {
                                      null == E || E(),
                                          window.open((0, j.i)(S)),
                                          f.default.track(g.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, {
                                              location_stack: _,
                                          });
                                  },
                              })
                            : void 0,
                    deviceType: b.oh.VIDEO_INPUT,
                    location: "CameraSettings",
                    isDisabled: !P,
                    showAllDevices: !0,
                }),
            (0, s.jsx)(m.A, {
                className: y.Jp,
                onLearnMore: i,
                selectedBackgroundOption: A,
                onSelectBackgroundOption: h,
                currentDeviceId: S,
            }),
        ],
    });
}
