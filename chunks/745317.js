s.d(t, { A: () => O, k: () => h });
var n = s(627968),
    l = s(64700),
    i = s(311907),
    a = s(451988),
    o = s(397927),
    r = s(827343),
    c = s(688810),
    d = s(625841),
    u = s(74848),
    m = s(253932),
    x = s(520999),
    p = s(430452),
    A = s(954571),
    g = s(204050),
    f = s(652215),
    j = s(731854),
    N = s(985018),
    _ = s(698091);
function h() {
    let [e, t] = l.useState(!1),
        s = (0, i.bG)([p.Ay], () => p.Ay.isMediaFilterSettingLoading());
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
        ? (0, n.jsx)("div", { className: _.mB, children: (0, n.jsx)(o.y$y, {}) })
        : null;
}
function O(e) {
    let {
            hideDeviceSelector: t = !1,
            hideDeviceHeader: s = !1,
            hideCameraSettingsLink: l = !1,
            onLearnMore: a,
            selectedBackgroundOption: h,
            onSelectBackgroundOption: O,
            renderCamera: E,
            hidePreviewToggle: v = !1,
            onCancelPreview: I,
        } = e,
        { analyticsLocations: T } = (0, c.Ay)(),
        { id: C } = (0, u.x5)(j.oh.VIDEO_INPUT),
        S = (0, i.bG)([p.Ay], () => p.Ay.isVideoAvailable()),
        k = m.bm.useSetting();
    return (0, n.jsxs)(o.BJc, {
        gap: 20,
        children: [
            E(C),
            p.Ay.isEnabled()
                ? null
                : (0, n.jsx)(o.Text, {
                      className: _.u5,
                      color: "interactive-text-default",
                      variant: "text-sm/normal",
                      children: N.intl.format(N.t.stagfJ, { onEnableClick: () => r.A.enable(!0) }),
                  }),
            v
                ? null
                : (0, n.jsx)(o.dOG, {
                      label: N.intl.string(N.t["3Ppr1h"]),
                      description: N.intl.string(N.t.WNbX4O),
                      checked: k,
                      onChange: (e) => {
                          m.bm.updateSetting(e),
                              A.default.track(f.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
                      },
                  }),
            !t &&
                (0, n.jsx)(d.U, {
                    label: s ? void 0 : N.intl.string(N.t.FsQ3OR),
                    helperText:
                        !l && (0, g.p)()
                            ? N.intl.format(N.t.aJYgRt, {
                                  onCameraSettingsClick: () => {
                                      I?.(),
                                          window.open((0, g.i)(C)),
                                          A.default.track(f.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: T });
                                  },
                              })
                            : void 0,
                    deviceType: j.oh.VIDEO_INPUT,
                    location: "CameraSettings",
                    isDisabled: !S,
                }),
            (0, n.jsx)(x.A, {
                className: _.Jp,
                onLearnMore: a,
                selectedBackgroundOption: h,
                onSelectBackgroundOption: O,
                currentDeviceId: C,
            }),
        ],
    });
}
