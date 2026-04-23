n.d(t, { A: () => l });
function l(e) {
    let t = e?.activeElement;
    return ["INPUT", "TEXTAREA"].includes(t?.tagName) || t?.isContentEditable;
}
