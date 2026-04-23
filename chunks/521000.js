"use strict";
s.d(t, { VA: () => r });
var n = s(627968);
s(64700);
let l = (e) => {
        let { clientX: t, clientY: s, currentTarget: n } = e;
        n.style.pointerEvents = "none";
        let l = document.elementFromPoint(t, s);
        return (n.style.pointerEvents = "auto"), { elementBelow: l, button: l?.closest("button") ?? null };
    },
    r = (e) => {
        let { isCustomCursorEnabled: t, className: s, riveEventTargetRef: r } = e,
            a = (e) => {
                let { button: s } = l(e),
                    n = e.currentTarget;
                t
                    ? (n.style.cursor = null != s ? "var(--custom-cursor-pointer)" : "var(--custom-cursor)")
                    : (n.style.cursor = null != s ? "pointer" : "default");
            };
        return (0, n.jsx)("div", {
            ref: r,
            className: s,
            onMouseMove: a,
            onMouseDown: (e) => {
                let { button: t } = l(e);
                null != t && t.click();
            },
        });
    };
