n.d(t, { d: () => o });
var r = n(793030),
    i = n(607070);
function a() {
    i.Z.keyboardModeEnabled
        ? (r.dxT.setRingsEnabled(!0), r.dxT.enableAnimationTracking())
        : (r.dxT.setRingsEnabled(!1), r.dxT.disableAnimationTracking());
}
n(42868), n(426548);
let o = {
    init() {
        a(), i.Z.addChangeListener(a);
    },
};
