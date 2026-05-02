"use strict";
function i(e) {
    let t = e?.activeElement;
    return ["INPUT", "TEXTAREA"].includes(t?.tagName) || t?.isContentEditable;
}
n.d(t, { A: () => i });
