n.d(t, { A: () => l });
var i = n(916546),
    r = n(723702);
let a = (0, n(945810).mj)({
    name: "2026-08-virtual-backgrounds-ios",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var s = n(731854);
function l() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Ay;
    return (
        (e = t.supports(s.O5.VIDEO_BACKGROUND_FILTER) && Object.values(t.getVideoDevices()).length > 0),
        (0, r.isIOS)() ? a.getConfig({ location: "isVideoBackgroundSupported" }).enabled && e : e
    );
}
