r.d(t, { r: () => g });
var n = r(582128),
    l = r(59520),
    s = r(174459),
    a = r(440938),
    i = r(790297),
    o = r(652215),
    u = r(650583);
let c = new Set([u.N$.ArrowUp, u.N$.ArrowDown, u.N$.PageUp, u.N$.PageDown, u.N$.Home, u.N$.End, u.N$.Tab]);
function d(e, t, r, n) {
    let { scrollTop: l = 0, scrollOffset: a = 0, scrollHeight: i = 0, scrollWidth: o = 0 } = n;
    if (i > 0) {
        let n = (l + a) / i;
        n > 0 &&
            s.default.track(e, {
                scroll_visible_percent: n,
                source: r,
                page_height: Math.round(i),
                page_width: Math.round(o),
                page_session_id: t,
            });
    }
}
function g(e, t) {
    let r,
        s,
        u,
        g,
        { analyticsSource: h } = (0, i.lC)(t),
        m = (0, l.I)(d, 5e3, [], { trailing: !0 }),
        p = (0, a.uM)(),
        E = p?.sessionId,
        _ =
            ((r = n.useRef(0)),
            (s = n.useRef(!1)),
            (u = n.useRef(!1)),
            (g = n.useRef(0)),
            n.useEffect(() => {
                let t = e.current?.getScrollerNode();
                if (null != t)
                    return (
                        t.addEventListener("wheel", n, { passive: !0 }),
                        t.addEventListener("touchmove", n, { passive: !0 }),
                        t.addEventListener("keydown", a),
                        t.addEventListener("pointerdown", i),
                        t.addEventListener("scrollend", l),
                        window.addEventListener("pointerup", o),
                        window.addEventListener("pointercancel", o),
                        () => {
                            (t.removeEventListener("wheel", n),
                                t.removeEventListener("touchmove", n),
                                t.removeEventListener("keydown", a),
                                t.removeEventListener("pointerdown", i),
                                t.removeEventListener("scrollend", l),
                                window.removeEventListener("pointerup", o),
                                window.removeEventListener("pointercancel", o),
                                (s.current = !1),
                                (u.current = !1));
                        }
                    );
                function n() {
                    ((r.current = Date.now()), (s.current = !0));
                }
                function l() {
                    s.current = !1;
                }
                function a(e) {
                    c.has(e.key) && n();
                }
                function i(e) {
                    e.target === t && ((u.current = !0), (g.current = Date.now()), n());
                }
                function o() {
                    u.current && ((u.current = !1), n());
                }
            }, [e]),
            n.useCallback(
                () => (u.current && Date.now() - g.current < 3e4) || (s.current && Date.now() - r.current < 1e3),
                [],
            ));
    return {
        handleScroll: n.useCallback(() => {
            if (_() && null != e.current) {
                let t = e.current.getScrollerNode();
                null != t &&
                    m(o.HAw.COLLECTIBLES_SHOP_SCROLLED, null != E ? E : "", h, {
                        scrollTop: t.scrollTop,
                        scrollOffset: t.offsetHeight,
                        scrollHeight: t.scrollHeight,
                        scrollWidth: t.scrollWidth,
                    });
            }
        }, [m, h, E, e, _]),
    };
}
