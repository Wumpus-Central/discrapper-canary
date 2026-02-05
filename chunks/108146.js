"use strict";
n.d(t, { t: () => l });
var r = n(13163),
    i = n(3388),
    a = n(290424),
    s = n(64700),
    o = n(853590);
function l(e, t) {
    let { "aria-label": n, "aria-labelledby": l, orientation: u = "horizontal" } = e,
        [c, d] = (0, s.useState)(!1);
    (0, i.N)(() => {
        var e;
        d(!!(t.current && (null == (e = t.current.parentElement) ? void 0 : e.closest('[role="toolbar"]'))));
    });
    let { direction: _ } = (0, o.Y)(),
        f = "rtl" === _ && "horizontal" === u,
        p = (0, r.C7)(t),
        h = (e) => {
            if (e.currentTarget.contains(e.target)) {
                if (("horizontal" === u && "ArrowRight" === e.key) || ("vertical" === u && "ArrowDown" === e.key))
                    f ? p.focusPrevious() : p.focusNext();
                else if (("horizontal" === u && "ArrowLeft" === e.key) || ("vertical" === u && "ArrowUp" === e.key))
                    f ? p.focusNext() : p.focusPrevious();
                else {
                    if ("Tab" !== e.key) return;
                    e.stopPropagation(),
                        (m.current = document.activeElement),
                        e.shiftKey ? p.focusFirst() : p.focusLast();
                    return;
                }
                e.stopPropagation(), e.preventDefault();
            }
        },
        m = (0, s.useRef)(null),
        g = (e) => {
            e.currentTarget.contains(e.relatedTarget) || m.current || (m.current = e.target);
        },
        E = (e) => {
            var n, r;
            m.current &&
                !e.currentTarget.contains(e.relatedTarget) &&
                (null == (n = t.current) ? void 0 : n.contains(e.target)) &&
                (null == (r = m.current) || r.focus(), (m.current = null));
        };
    return {
        toolbarProps: {
            ...(0, a.$)(e, { labelable: !0 }),
            role: c ? "group" : "toolbar",
            "aria-orientation": u,
            "aria-label": n,
            "aria-labelledby": null == n ? l : void 0,
            onKeyDownCapture: c ? void 0 : h,
            onFocusCapture: c ? void 0 : E,
            onBlurCapture: c ? void 0 : g,
        },
    };
}
