n.d(t, { A: () => r });
function r(e) {
    let t = e?.activeElement;
    return ["INPUT", "TEXTAREA"].includes(t?.tagName) || t?.isContentEditable;
}
