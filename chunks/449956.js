i.d(e, { A: () => g });
var n = i(627968),
    l = i(311907),
    s = i(688810),
    r = i(625841),
    a = i(74848),
    u = i(204050),
    o = i(430452),
    d = i(954571),
    T = i(948641),
    A = i(652215),
    S = i(731854),
    E = i(985018);
function g() {
    let t = (0, l.bG)([o.A], () => o.A.isVideoAvailable()),
        { id: e } = (0, a.x5)(S.oh.VIDEO_INPUT),
        { analyticsLocations: i } = (0, s.Ay)();
    return (0, n.jsx)(r.U, {
        label: E.intl.string(E.t.FsQ3OR),
        deviceType: S.oh.VIDEO_INPUT,
        location: "UserSettingsCameraSelect",
        isDisabled: !t,
        showAllDevices: !0,
        helperText: (0, u.p)()
            ? E.intl.format(E.t.aJYgRt, {
                  onCameraSettingsClick: () => {
                      T.A.setState({ previewEnabled: !1 }),
                          window.open((0, u.i)(e)),
                          d.default.track(A.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: i });
                  },
              })
            : void 0,
    });
}
