n.d(t, { A: () => y }), n(321073), n(896048);
var r = n(205693),
    i = n(827343),
    a = n(439372),
    s = n(626584),
    o = n(430452),
    l = n(383501),
    c = n(723702),
    u = n(842772),
    d = n(652215);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let p = "c6_BVC",
    _ = new s.A("KrispBVCDeviceManager"),
    h = [],
    m = [],
    g = {
        block_list: [],
        allow_list: [],
    };
for (let e of ((0, c.isMac)() ? (g = n(361494)) : (0, c.isWindows)() && (g = n(699248)), g.block_list))
    "name" in e && m.push(e.name.toLowerCase());
for (let e of g.allow_list) "name" in e && h.push(e.name.toLowerCase());
function E() {
    var e;
    if ((!(0, c.isMac)() && !(0, c.isWindows)()) || !o.A.getKrispModels().includes(p)) return;
    let t = o.A.getInputDeviceId(),
        n = o.A.getInputDevices()[t],
        r = null != l.A.getChannelId();
    if (null == n) return;
    let a = null == (e = l.A.getRTCConnection()) ? void 0 : e.getInputDeviceSampleRate(),
        s = u._.getCurrentConfig({ location: "KrispBVCDeviceManager" }, { autoTrackExposure: !1 }).allowBVC;
    if (null != a && a < 16000) {
        o.A.getKrispModelOverride() &&
            (_.info("BVC model doesn't support <16kHz sample rate, disabling BVC."), i.A.setKrispModelOverride(""));
        return;
    }
    let d = n.name.toLowerCase();
    if (m.some((e) => d.includes(e))) {
        o.A.getKrispModelOverride() &&
            (_.info("BVC not compatible with device, disabling BVC."), i.A.setKrispModelOverride(""));
        return;
    }
    h.some((e) => d.includes(e))
        ? (r && u._.trackExposure({ location: "KrispBVCDeviceManager" }), s)
            ? o.A.getKrispModelOverride() !== p &&
              (_.info("BVC compatible with device, enabling BVC."), i.A.setKrispModelOverride(p))
            : i.A.setKrispModelOverride("")
        : o.A.getKrispModelOverride() &&
          (_.info("Unknown BVC compatibility with device, disabling BVC."), i.A.setKrispModelOverride(""));
}
class b extends a.A {
    constructor(...e) {
        super(...e),
            f(this, "actions", {
                AUDIO_SET_INPUT_DEVICE: E,
                MEDIA_ENGINE_DEVICES: E,
                RTC_CONNECTION_STATE: (e) => {
                    let { context: t, state: n } = e;
                    t === r.x.DEFAULT && n === d.S7L.RTC_CONNECTING && E();
                },
                AUDIO_INPUT_DEVICE_SAMPLE_RATE_CHANGED: E,
            });
    }
}
let y = new b();
