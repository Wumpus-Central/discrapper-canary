"use strict";
function r(e) {
    let t = e?.activeElement;
    return ["INPUT", "TEXTAREA"].includes(t?.tagName) || t?.isContentEditable;
}
n.d(t, { A: () => r });
