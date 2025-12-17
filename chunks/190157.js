n.d(t, { gT: () => a });
var r = n(54381);
n(473749);
let l = (e) => {
        var t;
        let { clientX: n, clientY: r, currentTarget: l } = e;
        l.style.pointerEvents = "none";
        let a = document.elementFromPoint(n, r);
        return (
            (l.style.pointerEvents = "auto"),
            {
                elementBelow: a,
                button: null != (t = null == a ? void 0 : a.closest("button")) ? t : null,
            }
        );
    },
    a = (e) => {
        let { isCustomCursorEnabled: t, className: n, riveEventTargetRef: a } = e,
            s = (e) => {
                let { button: n } = l(e),
                    r = e.currentTarget;
                t
                    ? (r.style.cursor = null != n ? "var(--custom-cursor-pointer)" : "var(--custom-cursor)")
                    : (r.style.cursor = null != n ? "pointer" : "default");
            };
        return (0, r.jsx)("div", {
            ref: a,
            className: n,
            onMouseMove: s,
            onMouseDown: (e) => {
                let { button: t } = l(e);
                null != t && t.click();
            },
        });
    };
