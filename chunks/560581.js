var n = r(862615),
    i = r(518206),
    o = r(809297),
    a = r(503372),
    s = r(811390),
    l = r(582128);
function u(e) {
    return (
        (e.nativeEvent = e),
        (e.isDefaultPrevented = () => e.defaultPrevented),
        (e.isPropagationStopped = () => e.cancelBubble),
        (e.persist = () => {}),
        e
    );
}
let c = !1;
r.d(
    t,
    { lR: () => c },
    {
        LE: function (e) {
            for (; e && !(0, a.t)(e, { skipVisibilityCheck: !0 });) e = e.parentElement;
            let t = (0, o.mD)(e),
                r = t.document.activeElement;
            if (!r || r === e) return;
            c = !0;
            let s = !1,
                l = (e) => {
                    ((0, i.wt)(e) === r || s) && e.stopImmediatePropagation();
                },
                u = (t) => {
                    ((0, i.wt)(t) === r || s) && (t.stopImmediatePropagation(), e || s || ((s = !0), (0, n.e)(r), p()));
                },
                f = (t) => {
                    ((0, i.wt)(t) === e || s) && t.stopImmediatePropagation();
                },
                d = (t) => {
                    ((0, i.wt)(t) === e || s) && (t.stopImmediatePropagation(), s || ((s = !0), (0, n.e)(r), p()));
                };
            (t.addEventListener("blur", l, !0),
                t.addEventListener("focusout", u, !0),
                t.addEventListener("focusin", d, !0),
                t.addEventListener("focus", f, !0));
            let p = () => {
                    (cancelAnimationFrame(h),
                        t.removeEventListener("blur", l, !0),
                        t.removeEventListener("focusout", u, !0),
                        t.removeEventListener("focusin", d, !0),
                        t.removeEventListener("focus", f, !0),
                        (c = !1),
                        (s = !1));
                },
                h = requestAnimationFrame(p);
            return p;
        },
        eg: u,
        o1: function (e, t) {
            (Object.defineProperty(e, "target", { value: t }), Object.defineProperty(e, "currentTarget", { value: t }));
        },
        yB: function (e) {
            let t = (0, l.useRef)({ isFocused: !1, observer: null });
            return (
                (0, s.N)(() => {
                    let e = t.current;
                    return () => {
                        e.observer && (e.observer.disconnect(), (e.observer = null));
                    };
                }, []),
                (0, l.useCallback)(
                    (r) => {
                        let n = (0, i.wt)(r);
                        (n instanceof HTMLButtonElement ||
                            n instanceof HTMLInputElement ||
                            n instanceof HTMLTextAreaElement ||
                            n instanceof HTMLSelectElement) &&
                            ((t.current.isFocused = !0),
                            n.addEventListener(
                                "focusout",
                                (r) => {
                                    if (((t.current.isFocused = !1), n.disabled)) {
                                        let t = u(r);
                                        e?.(t);
                                    }
                                    t.current.observer &&
                                        (t.current.observer.disconnect(), (t.current.observer = null));
                                },
                                { once: !0 },
                            ),
                            (t.current.observer = new MutationObserver(() => {
                                if (t.current.isFocused && n.disabled) {
                                    t.current.observer?.disconnect();
                                    let e = n === (0, i.bq)() ? null : (0, i.bq)();
                                    (n.dispatchEvent(new FocusEvent("blur", { relatedTarget: e })),
                                        n.dispatchEvent(new FocusEvent("focusout", { bubbles: !0, relatedTarget: e })));
                                }
                            })),
                            t.current.observer.observe(n, { attributes: !0, attributeFilter: ["disabled"] }));
                    },
                    [e],
                )
            );
        },
    },
);
