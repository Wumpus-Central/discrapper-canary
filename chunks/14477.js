"use strict";
n.d(t, { A: () => I }), n(321073);
var r = n(205693),
    i = n(827343),
    a = n(439372),
    s = n(626584),
    o = n(430452),
    l = n(383501),
    u = n(723702),
    c = n(842772),
    d = n(652215);
let _ = "c6_BVC",
    f = new s.A("KrispBVCDeviceManager"),
    h = [],
    p = [],
    g = { block_list: [], allow_list: [] };
for (let e of ((0, u.isMac)() ? (g = n(361494)) : (0, u.isWindows)() && (g = n(699248)), g.block_list))
    "name" in e && p.push(e.name.toLowerCase());
for (let e of g.allow_list) "name" in e && h.push(e.name.toLowerCase());
function E() {
    if ((!(0, u.isMac)() && !(0, u.isWindows)()) || !o.Ay.getKrispModels().includes(_)) return;
    let e = o.Ay.getInputDeviceId(),
        t = o.Ay.getInputDevices()[e],
        n = null != l.A.getChannelId();
    if (null == t) return;
    let r = l.A.getRTCConnection()?.getInputDeviceSampleRate(),
        a = c._.getCurrentConfig({ location: "KrispBVCDeviceManager" }, { autoTrackExposure: !1 }).allowBVC;
    if (null != r && r < 16e3) {
        o.Ay.getKrispModelOverride() &&
            (f.info("BVC model doesn't support <16kHz sample rate, disabling BVC."), i.A.setKrispModelOverride(""));
        return;
    }
    let s = t.name.toLowerCase();
    if (p.some((e) => s.includes(e))) {
        o.Ay.getKrispModelOverride() &&
            (f.info("BVC not compatible with device, disabling BVC."), i.A.setKrispModelOverride(""));
        return;
    }
    h.some((e) => s.includes(e))
        ? (n && c._.trackExposure({ location: "KrispBVCDeviceManager" }), a)
            ? o.Ay.getKrispModelOverride() !== _ &&
              (f.info("BVC compatible with device, enabling BVC."), i.A.setKrispModelOverride(_))
            : i.A.setKrispModelOverride("")
        : o.Ay.getKrispModelOverride() &&
          (f.info("Unknown BVC compatibility with device, disabling BVC."), i.A.setKrispModelOverride(""));
}
class A extends a.A {
    actions = {
        AUDIO_SET_INPUT_DEVICE: E,
        MEDIA_ENGINE_DEVICES: E,
        RTC_CONNECTION_STATE: (e) => {
            let { context: t, state: n } = e;
            t === r.x.DEFAULT && n === d.S7L.RTC_CONNECTING && E();
        },
        AUDIO_INPUT_DEVICE_SAMPLE_RATE_CHANGED: E,
    };
}
let I = new A();
