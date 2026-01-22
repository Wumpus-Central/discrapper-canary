n.d(t, {
    t: () => l,
});
var r = n(13163),
    i = n(3388),
    a = n(290424),
    s = n(64700),
    o = n(853590);

function l(e, t) {
    let { "aria-label": n, "aria-labelledby": l, orientation: c = "horizontal" } = e,
        [u, d] = (0, s.useState)(!1);
    (0, i.N)(() => {
        var e;
        d(!!(t.current && (null == (e = t.current.parentElement) ? void 0 : e.closest('[role="toolbar"]'))));
    });
    let { direction: f } = (0, o.Y)(),
        p = "rtl" === f && "horizontal" === c,
        _ = (0, r.C7)(t),
        h = (e) => {
            if (e.currentTarget.contains(e.target)) {
                if (("horizontal" === c && "ArrowRight" === e.key) || ("vertical" === c && "ArrowDown" === e.key))
                    p ? _.focusPrevious() : _.focusNext();
                else if (("horizontal" === c && "ArrowLeft" === e.key) || ("vertical" === c && "ArrowUp" === e.key))
                    p ? _.focusNext() : _.focusPrevious();
                else {
                    if ("Tab" !== e.key) return;
                    e.stopPropagation(),
                        (m.current = document.activeElement),
                        e.shiftKey ? _.focusFirst() : _.focusLast();
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
            ...(0, a.$)(e, {
                labelable: !0,
            }),
            role: u ? "group" : "toolbar",
            "aria-orientation": c,
            "aria-label": n,
            "aria-labelledby": null == n ? l : void 0,
            onKeyDownCapture: u ? void 0 : h,
            onFocusCapture: u ? void 0 : E,
            onBlurCapture: u ? void 0 : g,
        },
    };
}
