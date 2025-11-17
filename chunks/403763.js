n.d(t, { Z: () => h }), n(388685);
var r = n(54381);
n(473749);
var i = n(392711),
    l = n.n(i),
    a = n(481060),
    s = n(463395),
    o = n(131951),
    c = n(34828),
    u = n(65154);
let d = new Set(["DisplayPort"]),
    p = "connected-device-modal";
function f() {
    let e;
    if ((0, a.nfh)(p)) return;
    let t = o.Z.getInputDeviceId(),
        i = o.Z.getOutputDeviceId();
    if (c.Z.getState().neverShowModal || l().isEmpty(c.Z.lastDeviceConnected)) return;
    let f = (0, c.X)(o.Z.getInputDevices()[t]),
        h = (0, c.X)(o.Z.getOutputDevices()[i]);
    if (l().some(c.Z.lastDeviceConnected, (e) => d.has(e.displayName) || e.displayName === f || e.displayName === h))
        return;
    let g = l().some(
        c.Z.lastDeviceConnected,
        (e) => s.Z.isCertified(c.Z.inputDevices[e.displayName]) || s.Z.isCertified(c.Z.outputDevices[e.displayName]),
    );
    if (
        ((t === u.w5 && c.Z.lastInputSystemDevice.justChanged) ||
            (i === u.w5 && c.Z.lastOutputSystemDevice.justChanged)) &&
        !g
    )
        return;
    let m = l().first(Object.keys(c.Z.lastDeviceConnected)),
        _ = null != m && "" !== m ? c.Z.lastDeviceConnected[m] : null;
    null != _ &&
        (c.Z.getState().ignoredDevices[_.displayName] ||
            (c.Z.initialized &&
                null != m &&
                (s.Z.isCertified(c.Z.inputDevices[m])
                    ? (e = s.Z.getCertifiedDevice(c.Z.inputDevices[m]))
                    : s.Z.isCertified(c.Z.outputDevices[m]) && (e = s.Z.getCertifiedDevice(c.Z.outputDevices[m]))),
            (0, a.ZDy)(
                async () => {
                    let { default: t } = await n.e("30042").then(n.bind(n, 30575));
                    return (n) => {
                        let { transitionState: i, onClose: l } = n;
                        return (0, r.jsx)(t, {
                            device: _,
                            certifiedDeviceMetadata: e,
                            transitionState: i,
                            onClose: l,
                        });
                    };
                },
                { modalKey: p },
            )));
}
let h = {
    init() {
        c.Z.addChangeListener(f);
    },
};
