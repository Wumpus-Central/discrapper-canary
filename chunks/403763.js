(n.d(t, { Z: () => f }), n(388685));
var r = n(255367);
n(73800);
var i = n(392711),
    l = n.n(i),
    a = n(481060),
    o = n(463395),
    s = n(131951),
    c = n(34828),
    u = n(65154);
let d = new Set(['DisplayPort']),
    p = 'connected-device-modal';
function h() {
    let e;
    if ((0, a.nfh)(p)) return;
    let t = s.Z.getInputDeviceId(),
        i = s.Z.getOutputDeviceId();
    if (c.Z.getState().neverShowModal || l().isEmpty(c.Z.lastDeviceConnected)) return;
    let h = (0, c.X)(s.Z.getInputDevices()[t]),
        f = (0, c.X)(s.Z.getOutputDevices()[i]);
    if (l().some(c.Z.lastDeviceConnected, (e) => d.has(e.displayName) || e.displayName === h || e.displayName === f)) return;
    let g = l().some(c.Z.lastDeviceConnected, (e) => o.Z.isCertified(c.Z.inputDevices[e.displayName]) || o.Z.isCertified(c.Z.outputDevices[e.displayName]));
    if (((t === u.w5 && c.Z.lastInputSystemDevice.justChanged) || (i === u.w5 && c.Z.lastOutputSystemDevice.justChanged)) && !g) return;
    let m = l().first(Object.keys(c.Z.lastDeviceConnected)),
        b = null != m && '' !== m ? c.Z.lastDeviceConnected[m] : null;
    null != b &&
        (c.Z.getState().ignoredDevices[b.displayName] ||
            (c.Z.initialized && null != m && (o.Z.isCertified(c.Z.inputDevices[m]) ? (e = o.Z.getCertifiedDevice(c.Z.inputDevices[m])) : o.Z.isCertified(c.Z.outputDevices[m]) && (e = o.Z.getCertifiedDevice(c.Z.outputDevices[m]))),
            (0, a.ZDy)(
                async () => {
                    let { default: t } = await n.e('30042').then(n.bind(n, 30575));
                    return (n) => {
                        let { transitionState: i, onClose: l } = n;
                        return (0, r.jsx)(t, {
                            device: b,
                            certifiedDeviceMetadata: e,
                            transitionState: i,
                            onClose: l
                        });
                    };
                },
                { modalKey: p }
            )));
}
let f = {
    init() {
        c.Z.addChangeListener(h);
    }
};
