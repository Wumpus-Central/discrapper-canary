n.d(t, { p: () => r });
function r(e, t) {
    let n = new Image();
    (n.src = e), (n.onload = () => (null == t ? void 0 : t(e)));
}
