n.d(t, { M8: () => r, kF: () => a, sY: () => i });
let i = (0, n(196765).v)(() => ({ isOpen: !1, openedAt: null, applicationId: null }));
function r(e) {
    i.setState({ isOpen: !0, openedAt: Date.now(), applicationId: e });
}
function a() {
    i.setState({ isOpen: !1, openedAt: null, applicationId: null });
}
