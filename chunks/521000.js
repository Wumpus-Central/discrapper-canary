l.d(t, { VA: () => s });
var n = l(627968);
l(64700);
let r = (e) => {
        var t;
        let { clientX: l, clientY: n, currentTarget: r } = e;
        r.style.pointerEvents = "none";
        let s = document.elementFromPoint(l, n);
        return (
            (r.style.pointerEvents = "auto"),
            {
                elementBelow: s,
                button: null != (t = null == s ? void 0 : s.closest("button")) ? t : null,
            }
        );
    },
    s = (e) => {
        let { isCustomCursorEnabled: t, className: l, riveEventTargetRef: s } = e,
            a = (e) => {
                let { button: l } = r(e),
                    n = e.currentTarget;
                t
                    ? (n.style.cursor = null != l ? "var(--custom-cursor-pointer)" : "var(--custom-cursor)")
                    : (n.style.cursor = null != l ? "pointer" : "default");
            };
        return (0, n.jsx)("div", {
            ref: s,
            className: l,
            onMouseMove: a,
            onMouseDown: (e) => {
                let { button: t } = r(e);
                null != t && t.click();
            },
        });
    };
