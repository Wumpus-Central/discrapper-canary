n.d(t, { gT: () => i });
var r = n(951288);
n(647438);
let l = (e) => {
        var t;
        let { clientX: n, clientY: r, currentTarget: l } = e;
        l.style.pointerEvents = "none";
        let i = document.elementFromPoint(n, r);
        return (
            (l.style.pointerEvents = "auto"),
            {
                elementBelow: i,
                button: null != (t = null == i ? void 0 : i.closest("button")) ? t : null,
            }
        );
    },
    i = (e) => {
        let { isCustomCursorEnabled: t, className: n, riveEventTargetRef: i } = e,
            s = (e) => {
                let { button: n } = l(e),
                    r = e.currentTarget;
                t
                    ? (r.style.cursor = null != n ? "var(--custom-cursor-pointer)" : "var(--custom-cursor)")
                    : (r.style.cursor = null != n ? "pointer" : "default");
            };
        return (0, r.jsx)("div", {
            ref: i,
            className: n,
            onMouseMove: s,
            onMouseDown: (e) => {
                let { button: t } = l(e);
                null != t && t.click();
            },
        });
    };
