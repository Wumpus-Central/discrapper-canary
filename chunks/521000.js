"use strict";
s.d(t, { VA: () => l });
var n = s(627968);
s(64700);
let r = (e) => {
        let { clientX: t, clientY: s, currentTarget: n } = e;
        n.style.pointerEvents = "none";
        let r = document.elementFromPoint(t, s);
        return (n.style.pointerEvents = "auto"), { elementBelow: r, button: r?.closest("button") ?? null };
    },
    l = (e) => {
        let { isCustomCursorEnabled: t, className: s, riveEventTargetRef: l } = e,
            a = (e) => {
                let { button: s } = r(e),
                    n = e.currentTarget;
                t
                    ? (n.style.cursor = null != s ? "var(--custom-cursor-pointer)" : "var(--custom-cursor)")
                    : (n.style.cursor = null != s ? "pointer" : "default");
            };
        return (0, n.jsx)("div", {
            ref: l,
            className: s,
            onMouseMove: a,
            onMouseDown: (e) => {
                let { button: t } = r(e);
                null != t && t.click();
            },
        });
    };
