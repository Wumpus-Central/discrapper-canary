n.d(t, {
    A: () => S,
    k: () => v,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(451988),
    o = n(397927),
    l = n(827343),
    c = n(688810),
    u = n(625841),
    d = n(74848),
    f = n(195043),
    p = n(253932),
    _ = n(520999),
    h = n(430452),
    m = n(954571),
    g = n(204050),
    E = n(652215),
    b = n(531525),
    y = n(731854),
    O = n(985018),
    A = n(602785);

function v() {
    let [e, t] = i.useState(!1),
        n = (0, a.bG)([h.A], () => h.A.isMediaFilterSettingLoading());
    return (i.useEffect(() => {
        let e = new s.Ep();
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
        ? (0, r.jsx)("div", {
              className: A.mB,
              children: (0, r.jsx)(o.y$y, {}),
          })
        : null;
}

function S(e) {
    let {
            hideDeviceSelector: t = !1,
            hideDeviceHeader: n = !1,
            hideCameraSettingsLink: i = !1,
            onLearnMore: s,
            selectedBackgroundOption: v,
            onSelectBackgroundOption: S,
            renderCamera: I,
            hidePreviewToggle: T = !1,
            onCancelPreview: C,
        } = e,
        { analyticsLocations: N } = (0, c.Ay)(),
        { id: R } = (0, d.x5)(y.oh.VIDEO_INPUT),
        w = (0, a.bG)([h.A], () => h.A.isVideoAvailable()),
        P = p.bm.useSetting();
    return (0, r.jsxs)(o.BJc, {
        gap: 20,
        children: [
            I(R),
            h.A.isEnabled()
                ? null
                : (0, r.jsx)(o.Text, {
                      className: A.u5,
                      color: "interactive-text-default",
                      variant: "text-sm/normal",
                      children: O.intl.format(O.t.stagfJ, {
                          onEnableClick: () => l.A.enable(!0),
                      }),
                  }),
            T
                ? null
                : (0, r.jsx)(o.dOG, {
                      label: O.intl.string(O.t["3Ppr1h"]),
                      description: O.intl.string(O.t.WNbX4O),
                      checked: P,
                      onChange: (e) => {
                          p.bm.updateSetting(e),
                              m.default.track(E.HAw.UPDATE_USER_SETTINGS_LOCAL, {
                                  always_preview_video: e,
                              });
                      },
                  }),
            !t &&
                (0, r.jsx)(f.x, {
                    setting: b.H.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
                    children: (0, r.jsx)(u.U, {
                        label: n ? void 0 : O.intl.string(O.t.FsQ3OR),
                        helperText:
                            !i && (0, g.p)()
                                ? O.intl.format(O.t.aJYgRt, {
                                      onCameraSettingsClick: () => {
                                          null == C || C(),
                                              window.open((0, g.i)(R)),
                                              m.default.track(E.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, {
                                                  location_stack: N,
                                              });
                                      },
                                  })
                                : void 0,
                        deviceType: y.oh.VIDEO_INPUT,
                        location: "CameraSettings",
                        isDisabled: !w,
                        showAllDevices: !0,
                    }),
                }),
            (0, r.jsx)(f.x, {
                setting: b.H.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
                children: (0, r.jsx)(_.A, {
                    className: A.Jp,
                    onLearnMore: s,
                    selectedBackgroundOption: v,
                    onSelectBackgroundOption: S,
                    currentDeviceId: R,
                }),
            }),
        ],
    });
}
