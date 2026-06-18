s.d(t, { Ay: () => S, eK: () => y, kE: () => b });
var n = s(627968),
    l = s(64700),
    i = s(17928),
    a = s(451988),
    o = s(289873),
    r = s(738188),
    c = s(661531),
    d = s(834730),
    u = s(331322),
    m = s(243721),
    x = s(827343),
    p = s(688810),
    A = s(625841),
    g = s(74848),
    j = s(885386),
    N = s(912630),
    f = s(382003),
    _ = s(941327),
    h = s(174459),
    E = s(204050),
    O = s(652215),
    v = s(731854),
    I = s(375708),
    C = s(460610);
function b() {
    let [e, t] = l.useState(!1),
        s = (0, i.bG)([_.Ay], () => _.Ay.isMediaFilterSettingLoading());
    return (l.useEffect(() => {
        let e = new a.Ep();
        return (
            s
                ? e.start(150, () => {
                      t(!0);
                  })
                : (e.stop(), t(!1)),
            () => e.stop()
        );
    }, [s]),
    e)
        ? (0, n.jsx)("div", { className: C.mB, children: (0, n.jsx)(o.y, {}) })
        : null;
}
function y() {
    return (0, i.bG)([N.A], () => N.A.videoBackgroundPreviewUnavailable)
        ? (0, n.jsxs)("div", {
              className: C.AJ,
              children: [
                  (0, n.jsx)(r.i, { color: c.A.colors.STATUS_WARNING_BACKGROUND, size: "lg" }),
                  (0, n.jsx)(d.E, {
                      color: "always-white",
                      variant: "text-sm/medium",
                      children: I.intl.string(I.t["8n9gj5"]),
                  }),
              ],
          })
        : null;
}
function S(e) {
    let {
            hideDeviceSelector: t = !1,
            hideDeviceHeader: s = !1,
            hideCameraSettingsLink: l = !1,
            onLearnMore: a,
            selectedBackgroundOption: o,
            onSelectBackgroundOption: r,
            renderCamera: c,
            hidePreviewToggle: N = !1,
            onCancelPreview: b,
        } = e,
        { analyticsLocations: y } = (0, p.Ay)(),
        { id: S } = (0, g.x5)(v.oh.VIDEO_INPUT),
        T = (0, i.bG)([_.Ay], () => _.Ay.isVideoAvailable()),
        k = j.bm.useSetting();
    return (0, n.jsxs)(u.B, {
        gap: 20,
        children: [
            c(S),
            _.Ay.isEnabled()
                ? null
                : (0, n.jsx)(d.E, {
                      className: C.u5,
                      color: "interactive-text-default",
                      variant: "text-sm/normal",
                      children: I.intl.format(I.t.stagfJ, { onEnableClick: () => x.A.enable(!0) }),
                  }),
            N
                ? null
                : (0, n.jsx)(m.d, {
                      label: I.intl.string(I.t["3Ppr1h"]),
                      description: I.intl.string(I.t.WNbX4O),
                      checked: k,
                      onChange: (e) => {
                          j.bm.updateSetting(e),
                              h.default.track(O.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                      },
                  }),
            !t &&
                (0, n.jsx)(A.U, {
                    label: s ? void 0 : I.intl.string(I.t.FsQ3OR),
                    helperText:
                        !l && (0, E.p)()
                            ? I.intl.format(I.t.aJYgRt, {
                                  onCameraSettingsClick: () => {
                                      b?.(),
                                          window.open((0, E.i)(S)),
                                          h.default.track(O.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: y });
                                  },
                              })
                            : void 0,
                    deviceType: v.oh.VIDEO_INPUT,
                    location: "CameraSettings",
                    isDisabled: !T,
                }),
            (0, n.jsx)(f.A, {
                className: C.Jp,
                onLearnMore: a,
                selectedBackgroundOption: o,
                onSelectBackgroundOption: r,
                currentDeviceId: S,
            }),
        ],
    });
}
