var c = n(477900),
    o = n(582128),
    r = n(758836);
let s = o.createContext(null);
function u(t) {
    let { clientX: e, clientY: n, currentTarget: c } = t;
    c.style.pointerEvents = "none";
    let o = document.elementFromPoint(e, n);
    return ((c.style.pointerEvents = "auto"), { elementBelow: o, button: o?.closest("button") ?? null });
}
n.d(
    e,
    {},
    {
        $c: function (t) {
            return (0, r.EZ)(t);
        },
        VA: function (t) {
            let { isCustomCursorEnabled: e, className: n, riveEventTargetRef: o } = t,
                r = (t) => {
                    let { button: n } = u(t),
                        c = t.currentTarget;
                    e
                        ? (c.style.cursor = null != n ? "var(--custom-cursor-pointer)" : "var(--custom-cursor)")
                        : (c.style.cursor = null != n ? "pointer" : "default");
                };
            return (0, c.jsx)("div", {
                ref: o,
                className: n,
                onMouseMove: r,
                onMouseDown: (t) => {
                    let { button: e } = u(t);
                    null != e && e.click();
                },
            });
        },
        vf: s,
    },
);
