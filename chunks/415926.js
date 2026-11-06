var l = n(582128),
    r = n(59520),
    s = n(129230),
    a = n(857512),
    i = n(12678),
    o = n(652215),
    c = n(650583);
let u = new Set([c.N$.ArrowUp, c.N$.ArrowDown, c.N$.PageUp, c.N$.PageDown, c.N$.Home, c.N$.End, c.N$.Tab]);
function d(e, t, n, l) {
    let { scrollTop: r = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: o = 0 } = l;
    if (i > 0) {
        let l = (r + a) / i;
        l > 0 &&
            s.default.track(e, {
                scroll_visible_percent: l,
                source: n,
                page_height: Math.round(i),
                page_width: Math.round(o),
                page_session_id: t,
            });
    }
}
n.d(
    t,
    {},
    {
        r: function (e, t) {
            let n,
                s,
                c,
                m,
                { analyticsSource: g } = (0, i.lC)(t),
                h = (0, r.I)(d, 5e3, [], { trailing: !0 }),
                p = (0, a.uM)(),
                f = p?.sessionId,
                x =
                    ((n = l.useRef(0)),
                    (s = l.useRef(!1)),
                    (c = l.useRef(!1)),
                    (m = l.useRef(0)),
                    l.useEffect(() => {
                        let t = e.current?.getScrollerNode();
                        if (null != t)
                            return (
                                t.addEventListener("wheel", l, { passive: !0 }),
                                t.addEventListener("touchmove", l, { passive: !0 }),
                                t.addEventListener("keydown", a),
                                t.addEventListener("pointerdown", i),
                                t.addEventListener("scrollend", r),
                                window.addEventListener("pointerup", o),
                                window.addEventListener("pointercancel", o),
                                () => {
                                    (t.removeEventListener("wheel", l),
                                        t.removeEventListener("touchmove", l),
                                        t.removeEventListener("keydown", a),
                                        t.removeEventListener("pointerdown", i),
                                        t.removeEventListener("scrollend", r),
                                        window.removeEventListener("pointerup", o),
                                        window.removeEventListener("pointercancel", o),
                                        (s.current = !1),
                                        (c.current = !1));
                                }
                            );
                        function l() {
                            ((n.current = Date.now()), (s.current = !0));
                        }
                        function r() {
                            s.current = !1;
                        }
                        function a(e) {
                            u.has(e.key) && l();
                        }
                        function i(e) {
                            e.target === t && ((c.current = !0), (m.current = Date.now()), l());
                        }
                        function o() {
                            c.current && ((c.current = !1), l());
                        }
                    }, [e]),
                    l.useCallback(
                        () =>
                            (c.current && Date.now() - m.current < 3e4) || (s.current && Date.now() - n.current < 1e3),
                        [],
                    ));
            return {
                handleScroll: l.useCallback(() => {
                    if (x() && null != e.current) {
                        let t = e.current.getScrollerNode();
                        null != t &&
                            h(o.HAw.COLLECTIBLES_SHOP_SCROLLED, null != f ? f : "", g, {
                                scrollTop: t.scrollTop,
                                scrollOffset: t.offsetHeight,
                                scrollHeight: t.scrollHeight,
                                scrollWidth: t.scrollWidth,
                            });
                    }
                }, [h, g, f, e, x]),
            };
        },
    },
);
