n.d(t, { r: () => p });
var r = n(582128),
    l = n(59520),
    s = n(174459),
    a = n(440938),
    o = n(12678),
    i = n(652215),
    c = n(650583);
let u = new Set([c.N$.ArrowUp, c.N$.ArrowDown, c.N$.PageUp, c.N$.PageDown, c.N$.Home, c.N$.End, c.N$.Tab]);
function d(e, t, n, r) {
    let { scrollTop: l = 0, scrollOffset: a = 0, scrollHeight: o = 0, scrollWidth: i = 0 } = r;
    if (o > 0) {
        let r = (l + a) / o;
        r > 0 &&
            s.default.track(e, {
                scroll_visible_percent: r,
                source: n,
                page_height: Math.round(o),
                page_width: Math.round(i),
                page_session_id: t,
            });
    }
}
function p(e, t) {
    let n,
        s,
        c,
        p,
        { analyticsSource: m } = (0, o.lC)(t),
        g = (0, l.I)(d, 5e3, [], { trailing: !0 }),
        h = (0, a.uM)(),
        E = h?.sessionId,
        C =
            ((n = r.useRef(0)),
            (s = r.useRef(!1)),
            (c = r.useRef(!1)),
            (p = r.useRef(0)),
            r.useEffect(() => {
                let t = e.current?.getScrollerNode();
                if (null != t)
                    return (
                        t.addEventListener("wheel", r, { passive: !0 }),
                        t.addEventListener("touchmove", r, { passive: !0 }),
                        t.addEventListener("keydown", a),
                        t.addEventListener("pointerdown", o),
                        t.addEventListener("scrollend", l),
                        window.addEventListener("pointerup", i),
                        window.addEventListener("pointercancel", i),
                        () => {
                            (t.removeEventListener("wheel", r),
                                t.removeEventListener("touchmove", r),
                                t.removeEventListener("keydown", a),
                                t.removeEventListener("pointerdown", o),
                                t.removeEventListener("scrollend", l),
                                window.removeEventListener("pointerup", i),
                                window.removeEventListener("pointercancel", i),
                                (s.current = !1),
                                (c.current = !1));
                        }
                    );
                function r() {
                    ((n.current = Date.now()), (s.current = !0));
                }
                function l() {
                    s.current = !1;
                }
                function a(e) {
                    u.has(e.key) && r();
                }
                function o(e) {
                    e.target === t && ((c.current = !0), (p.current = Date.now()), r());
                }
                function i() {
                    c.current && ((c.current = !1), r());
                }
            }, [e]),
            r.useCallback(
                () => (c.current && Date.now() - p.current < 3e4) || (s.current && Date.now() - n.current < 1e3),
                [],
            ));
    return {
        handleScroll: r.useCallback(() => {
            if (C() && null != e.current) {
                let t = e.current.getScrollerNode();
                null != t &&
                    g(i.HAw.COLLECTIBLES_SHOP_SCROLLED, null != E ? E : "", m, {
                        scrollTop: t.scrollTop,
                        scrollOffset: t.offsetHeight,
                        scrollHeight: t.scrollHeight,
                        scrollWidth: t.scrollWidth,
                    });
            }
        }, [g, m, E, e, C]),
    };
}
