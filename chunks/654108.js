l.d(t, { A: () => n });
function n(e) {
    let t = e?.activeElement;
    return ["INPUT", "TEXTAREA"].includes(t?.tagName) || t?.isContentEditable;
}
