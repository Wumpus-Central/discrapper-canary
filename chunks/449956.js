n.d(t, { A: () => h });
var r = n(627968),
    i = n(311907),
    a = n(688810),
    s = n(625841),
    o = n(74848),
    l = n(204050),
    c = n(430452),
    u = n(954571),
    d = n(948641),
    f = n(652215),
    p = n(731854),
    _ = n(985018);
function h() {
    let e = (0, i.bG)([c.A], () => c.A.isVideoAvailable()),
        { id: t } = (0, o.x5)(p.oh.VIDEO_INPUT),
        { analyticsLocations: n } = (0, a.Ay)();
    return (0, r.jsx)(s.U, {
        label: _.intl.string(_.t.FsQ3OR),
        deviceType: p.oh.VIDEO_INPUT,
        location: "UserSettingsCameraSelect",
        isDisabled: !e,
        showAllDevices: !0,
        helperText: (0, l.p)()
            ? _.intl.format(_.t.aJYgRt, {
                  onCameraSettingsClick: () => {
                      d.A.setState({ previewEnabled: !1 }),
                          window.open((0, l.i)(t)),
                          u.default.track(f.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n });
                  },
              })
            : void 0,
    });
}
