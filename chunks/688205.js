n.d(t, { A: () => A });
var i = n(627968),
    s = n(311907),
    l = n(688810),
    a = n(848222),
    r = n(74848),
    o = n(204050),
    d = n(430452),
    u = n(954571),
    c = n(248864),
    g = n(652215),
    m = n(731854),
    _ = n(985018);
function A() {
    let e = (0, s.bG)([d.Ay], () => d.Ay.isVideoAvailable()),
        { id: t } = (0, r.x5)(m.oh.VIDEO_INPUT),
        { analyticsLocations: n } = (0, l.Ay)();
    return (0, i.jsx)(a.U, {
        label: _.intl.string(_.t.FsQ3OR),
        deviceType: m.oh.VIDEO_INPUT,
        location: "UserSettingsCameraSelect",
        isDisabled: !e,
        helperText: (0, o.p)()
            ? _.intl.format(_.t.aJYgRt, {
                  onCameraSettingsClick: () => {
                      c.A.setState({ previewEnabled: !1 }),
                          window.open((0, o.i)(t)),
                          u.default.track(g.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n });
                  },
              })
            : void 0,
    });
}
