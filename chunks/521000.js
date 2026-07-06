r.d(t, { $c: () => a, VA: () => u, vf: () => c });
var n = r(627968),
    o = r(64700),
    s = r(758836);
function a(e) {
    return (0, s.EZ)(e);
}
let c = o.createContext(null);
function l(e) {
    let { clientX: t, clientY: r, currentTarget: n } = e;
    n.style.pointerEvents = "none";
    let o = document.elementFromPoint(t, r);
    return (n.style.pointerEvents = "auto"), { elementBelow: o, button: o?.closest("button") ?? null };
}
function u(e) {
    let { isCustomCursorEnabled: t, className: r, riveEventTargetRef: o } = e,
        s = (e) => {
            let { button: r } = l(e),
                n = e.currentTarget;
            t
                ? (n.style.cursor = null != r ? "var(--custom-cursor-pointer)" : "var(--custom-cursor)")
                : (n.style.cursor = null != r ? "pointer" : "default");
        };
    return (0, n.jsx)("div", {
        ref: o,
        className: r,
        onMouseMove: s,
        onMouseDown: (e) => {
            let { button: t } = l(e);
            null != t && t.click();
        },
    });
}
