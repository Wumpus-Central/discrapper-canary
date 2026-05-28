r.d(t, { $c: () => o, VA: () => i, vf: () => l });
var n = r(627968),
    s = r(64700),
    a = r(758836);
let o = (e) => (0, a.EZ)(e),
    l = s.createContext(null),
    c = (e) => {
        let { clientX: t, clientY: r, currentTarget: n } = e;
        n.style.pointerEvents = "none";
        let s = document.elementFromPoint(t, r);
        return (n.style.pointerEvents = "auto"), { elementBelow: s, button: s?.closest("button") ?? null };
    },
    i = (e) => {
        let { isCustomCursorEnabled: t, className: r, riveEventTargetRef: s } = e,
            a = (e) => {
                let { button: r } = c(e),
                    n = e.currentTarget;
                t
                    ? (n.style.cursor = null != r ? "var(--custom-cursor-pointer)" : "var(--custom-cursor)")
                    : (n.style.cursor = null != r ? "pointer" : "default");
            };
        return (0, n.jsx)("div", {
            ref: s,
            className: r,
            onMouseMove: a,
            onMouseDown: (e) => {
                let { button: t } = c(e);
                null != t && t.click();
            },
        });
    };
