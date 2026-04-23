s.d(t, { A: () => O, k: () => D });
var n = s(627968),
    l = s(64700),
    i = s(17928),
    a = s(451988),
    o = s(289873),
    r = s(331322),
    c = s(834730),
    d = s(243721),
    u = s(827343),
    m = s(688810),
    x = s(625841),
    p = s(74848),
    g = s(253932),
    h = s(382003),
    A = s(969341),
    v = s(954571),
    f = s(204050),
    j = s(652215),
    N = s(731854),
    _ = s(985018),
    I = s(460610);
function D() {
    let [e, t] = l.useState(!1),
        s = (0, i.bG)([A.Ay], () => A.Ay.isMediaFilterSettingLoading());
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
        ? (0, n.jsx)("div", { className: I.mB, children: (0, n.jsx)(o.y, {}) })
        : null;
}
function O(e) {
    let {
            hideDeviceSelector: t = !1,
            hideDeviceHeader: s = !1,
            hideCameraSettingsLink: l = !1,
            onLearnMore: a,
            selectedBackgroundOption: o,
            onSelectBackgroundOption: D,
            renderCamera: O,
            hidePreviewToggle: E = !1,
            onCancelPreview: C,
        } = e,
        { analyticsLocations: b } = (0, m.Ay)(),
        { id: T } = (0, p.x5)(N.oh.VIDEO_INPUT),
        S = (0, i.bG)([A.Ay], () => A.Ay.isVideoAvailable()),
        U = g.bm.useSetting();
    return (0, n.jsxs)(r.B, {
        gap: 20,
        children: [
            O(T),
            A.Ay.isEnabled()
                ? null
                : (0, n.jsx)(c.E, {
                      className: I.u5,
                      color: "interactive-text-default",
                      variant: "text-sm/normal",
                      children: _.intl.format(_.t.stagfJ, { onEnableClick: () => u.A.enable(!0) }),
                  }),
            E
                ? null
                : (0, n.jsx)(d.d, {
                      label: _.intl.string(_.t["3Ppr1h"]),
                      description: _.intl.string(_.t.WNbX4O),
                      checked: U,
                      onChange: (e) => {
                          g.bm.updateSetting(e),
                              v.default.track(j.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                      },
                  }),
            !t &&
                (0, n.jsx)(x.U, {
                    label: s ? void 0 : _.intl.string(_.t.FsQ3OR),
                    helperText:
                        !l && (0, f.p)()
                            ? _.intl.format(_.t.aJYgRt, {
                                  onCameraSettingsClick: () => {
                                      C?.(),
                                          window.open((0, f.i)(T)),
                                          v.default.track(j.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: b });
                                  },
                              })
                            : void 0,
                    deviceType: N.oh.VIDEO_INPUT,
                    location: "CameraSettings",
                    isDisabled: !S,
                }),
            (0, n.jsx)(h.A, {
                className: I.Jp,
                onLearnMore: a,
                selectedBackgroundOption: o,
                onSelectBackgroundOption: D,
                currentDeviceId: T,
            }),
        ],
    });
}
