n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(735438),
    a = n.n(r),
    l = n(192308),
    s = n(347481),
    o = n(430452),
    d = n(868162),
    u = n(731854);
let c = new Set(["DisplayPort"]),
    A = "connected-device-modal";
function h() {
    let e;
    if ((0, l.hasModalOpen)(A)) return;
    let t = o.Ay.getInputDeviceId(),
        r = o.Ay.getOutputDeviceId();
    if (d.A.getState().neverShowModal || a().isEmpty(d.A.lastDeviceConnected)) return;
    let h = (0, d.x)(o.Ay.getInputDevices()[t]),
        _ = (0, d.x)(o.Ay.getOutputDevices()[r]);
    if (a().some(d.A.lastDeviceConnected, (e) => c.has(e.displayName) || e.displayName === h || e.displayName === _))
        return;
    let E = a().some(
        d.A.lastDeviceConnected,
        (e) => s.A.isCertified(d.A.inputDevices[e.displayName]) || s.A.isCertified(d.A.outputDevices[e.displayName]),
    );
    if (
        ((t === u.dx && d.A.lastInputSystemDevice.justChanged) ||
            (r === u.dx && d.A.lastOutputSystemDevice.justChanged)) &&
        !E
    )
        return;
    let p = a().first(Object.keys(d.A.lastDeviceConnected)),
        m = null != p && "" !== p ? d.A.lastDeviceConnected[p] : null;
    null == m ||
        d.A.getState().ignoredDevices[m.displayName] ||
        (d.A.initialized &&
            null != p &&
            (s.A.isCertified(d.A.inputDevices[p])
                ? (e = s.A.getCertifiedDevice(d.A.inputDevices[p]))
                : s.A.isCertified(d.A.outputDevices[p]) && (e = s.A.getCertifiedDevice(d.A.outputDevices[p]))),
        (0, l.openModalLazy)(
            async () => {
                let { default: t } = await n.e("68386").then(n.bind(n, 347961));
                return (n) => {
                    let { transitionState: r, onClose: a } = n;
                    return (0, i.jsx)(t, { device: m, certifiedDeviceMetadata: e, transitionState: r, onClose: a });
                };
            },
            { modalKey: A },
        ));
}
let _ = {
    init() {
        d.A.addChangeListener(h);
    },
};
