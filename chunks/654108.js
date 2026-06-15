a.d(e, { A: () => n });
function n(t) {
    let e = t?.activeElement;
    return ["INPUT", "TEXTAREA"].includes(e?.tagName) || e?.isContentEditable;
}
