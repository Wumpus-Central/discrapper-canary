(n.d(t, { Z: () => y }), n(539854), n(388685));
var r = n(46973),
    i = n(846027),
    a = n(147913),
    o = n(710845),
    s = n(131951),
    l = n(19780),
    c = n(358085),
    u = n(621413),
    d = n(981631);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let _ = 'c6_BVC',
    p = new o.Z('KrispBVCDeviceManager'),
    h = [],
    m = [],
    g = {
        block_list: [],
        allow_list: []
    };
for (let e of ((0, c.isMac)() ? (g = n(598473)) : (0, c.isWindows)() && (g = n(689437)), g.block_list)) 'name' in e && m.push(e.name.toLowerCase());
for (let e of g.allow_list) 'name' in e && h.push(e.name.toLowerCase());
function E() {
    var e;
    if ((!(0, c.isMac)() && !(0, c.isWindows)()) || !s.Z.getKrispModels().includes(_)) return;
    let t = s.Z.getInputDeviceId(),
        n = s.Z.getInputDevices()[t],
        r = null != l.Z.getChannelId();
    if (null == n) return;
    let a = null == (e = l.Z.getRTCConnection()) ? void 0 : e.getInputDeviceSampleRate(),
        o = u.F.getCurrentConfig({ location: 'KrispBVCDeviceManager' }, { autoTrackExposure: !1 }).allowBVC;
    if (null != a && a < 16000) {
        s.Z.getKrispModelOverride() && (p.info("BVC model doesn't support <16kHz sample rate, disabling BVC."), i.Z.setKrispModelOverride(''));
        return;
    }
    if (!o) return void i.Z.setKrispModelOverride('');
    let d = n.name.toLowerCase();
    if (m.some((e) => d.includes(e))) {
        s.Z.getKrispModelOverride() && (p.info('BVC not compatible with device, disabling BVC.'), i.Z.setKrispModelOverride(''));
        return;
    }
    if (h.some((e) => d.includes(e))) {
        (r && u.F.trackExposure({ location: 'KrispBVCDeviceManager' }), s.Z.getKrispModelOverride() !== _ && (p.info('BVC compatible with device, enabling BVC.'), i.Z.setKrispModelOverride(_)));
        return;
    }
    s.Z.getKrispModelOverride() && (p.info('Unknown BVC compatibility with device, disabling BVC.'), i.Z.setKrispModelOverride(''));
}
class b extends a.Z {
    constructor(...e) {
        (super(...e),
            f(this, 'actions', {
                AUDIO_SET_INPUT_DEVICE: E,
                MEDIA_ENGINE_DEVICES: E,
                RTC_CONNECTION_STATE: (e) => {
                    let { context: t, state: n } = e;
                    t === r.Yn.DEFAULT && n === d.hes.RTC_CONNECTING && E();
                },
                AUDIO_INPUT_DEVICE_SAMPLE_RATE_CHANGED: E
            }));
    }
}
let y = new b();
