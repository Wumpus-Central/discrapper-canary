n.d(t, { r: () => m });
var l = n(582128),
    s = n(59520),
    r = n(174459),
    i = n(440938),
    a = n(790297),
    o = n(652215),
    u = n(650583);
let c = new Set([u.N$.ArrowUp, u.N$.ArrowDown, u.N$.PageUp, u.N$.PageDown, u.N$.Home, u.N$.End, u.N$.Tab]);
function d(e, t, n, l) {
    let { scrollTop: s = 0, scrollOffset: i = 0, scrollHeight: a = 0, scrollWidth: o = 0 } = l;
    if (a > 0) {
        let l = (s + i) / a;
        l > 0 &&
            r.default.track(e, {
                scroll_visible_percent: l,
                source: n,
                page_height: Math.round(a),
                page_width: Math.round(o),
                page_session_id: t,
            });
    }
}
function m(e, t) {
    let n,
        r,
        u,
        m,
        { analyticsSource: h } = (0, a.lC)(t),
        g = (0, s.I)(d, 5e3, [], { trailing: !0 }),
        x = (0, i.uM)(),
        f = x?.sessionId,
        E =
            ((n = l.useRef(0)),
            (r = l.useRef(!1)),
            (u = l.useRef(!1)),
            (m = l.useRef(0)),
            l.useEffect(() => {
                let t = e.current?.getScrollerNode();
                if (null != t)
                    return (
                        t.addEventListener("wheel", l, { passive: !0 }),
                        t.addEventListener("touchmove", l, { passive: !0 }),
                        t.addEventListener("keydown", i),
                        t.addEventListener("pointerdown", a),
                        t.addEventListener("scrollend", s),
                        window.addEventListener("pointerup", o),
                        window.addEventListener("pointercancel", o),
                        () => {
                            (t.removeEventListener("wheel", l),
                                t.removeEventListener("touchmove", l),
                                t.removeEventListener("keydown", i),
                                t.removeEventListener("pointerdown", a),
                                t.removeEventListener("scrollend", s),
                                window.removeEventListener("pointerup", o),
                                window.removeEventListener("pointercancel", o),
                                (r.current = !1),
                                (u.current = !1));
                        }
                    );
                function l() {
                    ((n.current = Date.now()), (r.current = !0));
                }
                function s() {
                    r.current = !1;
                }
                function i(e) {
                    c.has(e.key) && l();
                }
                function a(e) {
                    e.target === t && ((u.current = !0), (m.current = Date.now()), l());
                }
                function o() {
                    u.current && ((u.current = !1), l());
                }
            }, [e]),
            l.useCallback(
                () => (u.current && Date.now() - m.current < 3e4) || (r.current && Date.now() - n.current < 1e3),
                [],
            ));
    return {
        handleScroll: l.useCallback(() => {
            if (E() && null != e.current) {
                let t = e.current.getScrollerNode();
                null != t &&
                    g(o.HAw.COLLECTIBLES_SHOP_SCROLLED, null != f ? f : "", h, {
                        scrollTop: t.scrollTop,
                        scrollOffset: t.offsetHeight,
                        scrollHeight: t.scrollHeight,
                        scrollWidth: t.scrollWidth,
                    });
            }
        }, [g, h, f, e, E]),
    };
}
