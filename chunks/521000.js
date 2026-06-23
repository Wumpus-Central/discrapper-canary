"use strict";
n.d(t, { $c: () => a, VA: () => u, vf: () => o });
var i = n(627968),
    r = n(64700),
    s = n(758836);
function a(e) {
    return (0, s.EZ)(e);
}
let o = r.createContext(null);
function l(e) {
    let { clientX: t, clientY: n, currentTarget: i } = e;
    i.style.pointerEvents = "none";
    let r = document.elementFromPoint(t, n);
    return (i.style.pointerEvents = "auto"), { elementBelow: r, button: r?.closest("button") ?? null };
}
function u(e) {
    let { isCustomCursorEnabled: t, className: n, riveEventTargetRef: r } = e,
        s = (e) => {
            let { button: n } = l(e),
                i = e.currentTarget;
            t
                ? (i.style.cursor = null != n ? "var(--custom-cursor-pointer)" : "var(--custom-cursor)")
                : (i.style.cursor = null != n ? "pointer" : "default");
        };
    return (0, i.jsx)("div", {
        ref: r,
        className: n,
        onMouseMove: s,
        onMouseDown: (e) => {
            let { button: t } = l(e);
            null != t && t.click();
        },
    });
}
