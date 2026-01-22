n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(735438),
    l = n.n(i),
    a = n(397927),
    s = n(347481),
    o = n(430452),
    c = n(868162),
    u = n(731854);
let d = new Set(["DisplayPort"]),
    p = "connected-device-modal";

function f() {
    let e;
    if ((0, a.kBI)(p)) return;
    let t = o.A.getInputDeviceId(),
        i = o.A.getOutputDeviceId();
    if (c.A.getState().neverShowModal || l().isEmpty(c.A.lastDeviceConnected)) return;
    let f = (0, c.x)(o.A.getInputDevices()[t]),
        h = (0, c.x)(o.A.getOutputDevices()[i]);
    if (l().some(c.A.lastDeviceConnected, (e) => d.has(e.displayName) || e.displayName === f || e.displayName === h))
        return;
    let A = l().some(
        c.A.lastDeviceConnected,
        (e) => s.A.isCertified(c.A.inputDevices[e.displayName]) || s.A.isCertified(c.A.outputDevices[e.displayName]),
    );
    if (
        ((t === u.dx && c.A.lastInputSystemDevice.justChanged) ||
            (i === u.dx && c.A.lastOutputSystemDevice.justChanged)) &&
        !A
    )
        return;
    let g = l().first(Object.keys(c.A.lastDeviceConnected)),
        m = null != g && "" !== g ? c.A.lastDeviceConnected[g] : null;
    null == m ||
        c.A.getState().ignoredDevices[m.displayName] ||
        (c.A.initialized &&
            null != g &&
            (s.A.isCertified(c.A.inputDevices[g])
                ? (e = s.A.getCertifiedDevice(c.A.inputDevices[g]))
                : s.A.isCertified(c.A.outputDevices[g]) && (e = s.A.getCertifiedDevice(c.A.outputDevices[g]))),
        (0, a.mMO)(
            async () => {
                let { default: t } = await n.e("68386").then(n.bind(n, 347961));
                return (n) => {
                    let { transitionState: i, onClose: l } = n;
                    return (0, r.jsx)(t, {
                        device: m,
                        certifiedDeviceMetadata: e,
                        transitionState: i,
                        onClose: l,
                    });
                };
            },
            {
                modalKey: p,
            },
        ));
}
let h = {
    init() {
        c.A.addChangeListener(f);
    },
};
