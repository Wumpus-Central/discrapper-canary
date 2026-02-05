"use strict";
n.d(t, { A: () => A }), n(321073);
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
    p = [],
    h = [],
    m = { block_list: [], allow_list: [] };
for (let e of ((0, u.isMac)() ? (m = n(361494)) : (0, u.isWindows)() && (m = n(699248)), m.block_list))
    "name" in e && h.push(e.name.toLowerCase());
for (let e of m.allow_list) "name" in e && p.push(e.name.toLowerCase());
function g() {
    if ((!(0, u.isMac)() && !(0, u.isWindows)()) || !o.A.getKrispModels().includes(_)) return;
    let e = o.A.getInputDeviceId(),
        t = o.A.getInputDevices()[e],
        n = null != l.A.getChannelId();
    if (null == t) return;
    let r = l.A.getRTCConnection()?.getInputDeviceSampleRate(),
        a = c._.getCurrentConfig({ location: "KrispBVCDeviceManager" }, { autoTrackExposure: !1 }).allowBVC;
    if (null != r && r < 16e3) {
        o.A.getKrispModelOverride() &&
            (f.info("BVC model doesn't support <16kHz sample rate, disabling BVC."), i.A.setKrispModelOverride(""));
        return;
    }
    let s = t.name.toLowerCase();
    if (h.some((e) => s.includes(e))) {
        o.A.getKrispModelOverride() &&
            (f.info("BVC not compatible with device, disabling BVC."), i.A.setKrispModelOverride(""));
        return;
    }
    p.some((e) => s.includes(e))
        ? (n && c._.trackExposure({ location: "KrispBVCDeviceManager" }), a)
            ? o.A.getKrispModelOverride() !== _ &&
              (f.info("BVC compatible with device, enabling BVC."), i.A.setKrispModelOverride(_))
            : i.A.setKrispModelOverride("")
        : o.A.getKrispModelOverride() &&
          (f.info("Unknown BVC compatibility with device, disabling BVC."), i.A.setKrispModelOverride(""));
}
class E extends a.A {
    actions = {
        AUDIO_SET_INPUT_DEVICE: g,
        MEDIA_ENGINE_DEVICES: g,
        RTC_CONNECTION_STATE: (e) => {
            let { context: t, state: n } = e;
            t === r.x.DEFAULT && n === d.S7L.RTC_CONNECTING && g();
        },
        AUDIO_INPUT_DEVICE_SAMPLE_RATE_CHANGED: g,
    };
}
let A = new E();
