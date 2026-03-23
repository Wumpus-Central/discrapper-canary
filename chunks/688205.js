n.d(t, { A: () => A });
var i = n(627968),
    s = n(311907),
    l = n(688810),
    a = n(625841),
    r = n(74848),
    o = n(204050),
    d = n(430452),
    c = n(954571),
    u = n(248864),
    m = n(652215),
    _ = n(731854),
    g = n(985018);
function A() {
    let e = (0, s.bG)([d.Ay], () => d.Ay.isVideoAvailable()),
        { id: t } = (0, r.x5)(_.oh.VIDEO_INPUT),
        { analyticsLocations: n } = (0, l.Ay)();
    return (0, i.jsx)(a.U, {
        label: g.intl.string(g.t.FsQ3OR),
        deviceType: _.oh.VIDEO_INPUT,
        location: "UserSettingsCameraSelect",
        isDisabled: !e,
        helperText: (0, o.p)()
            ? g.intl.format(g.t.aJYgRt, {
                  onCameraSettingsClick: () => {
                      u.A.setState({ previewEnabled: !1 }),
                          window.open((0, o.i)(t)),
                          c.default.track(m.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n });
                  },
              })
            : void 0,
    });
}
