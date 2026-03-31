n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(607470),
    a = n(522435);
n(131955);
var r = n(708072);
function o(e) {
    let { src: t, className: n, autoPlayOnMount: a } = e,
        o = l.useRef(null),
        c = l.useRef(!1),
        [d, u] = l.useState(!1);
    l.useEffect(() => {
        if (!a) return;
        let e = o.current;
        if (null != e)
            return (
                (c.current = !1),
                e.addEventListener("canplay", t),
                e.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA && t(),
                () => e.removeEventListener("canplay", t)
            );
        function t() {
            c.current || null == e || ((c.current = !0), e.play());
        }
    }, [t, a]);
    let h = l.useCallback(() => {
            let e = o.current;
            null != e && ((e.currentTime = 0), u(!0), e.play());
        }, []),
        A = l.useCallback(() => {
            let e = o.current;
            null != e && (u(!1), e.pause());
        }, []);
    return (0, i.jsx)("div", {
        className: r.j,
        onMouseEnter: h,
        onMouseLeave: A,
        children: (0, i.jsx)(s.A, { ref: o, className: n, src: t, muted: !0, playsInline: !0, loop: d }),
    });
}
function c(e) {
    let { animatedSrc: t, staticSrc: n, className: s, autoPlayOnMount: a, animationDurationMs: r = 4e3 } = e,
        [o, c] = l.useState(() => a),
        d = l.useRef(!a);
    l.useEffect(() => {
        if (!a) return;
        let e = setTimeout(() => {
            (d.current = !0), c(!1);
        }, r);
        return () => clearTimeout(e);
    }, [t, a, r]);
    let u = l.useCallback(() => {
            c(!0);
        }, []),
        h = l.useCallback(() => {
            d.current && c(!1);
        }, []);
    return (0, i.jsx)("img", { className: s, src: o ? t : n, alt: "", onMouseEnter: u, onMouseLeave: h });
}
function d(e) {
    let { src: t, staticSrc: n, className: l, autoPlayOnMount: s = !0 } = e;
    return (0, a.LG)(t)
        ? (0, i.jsx)(o, { src: t, className: l, autoPlayOnMount: s })
        : null != n
          ? (0, i.jsx)(c, { animatedSrc: t, staticSrc: n, className: l, autoPlayOnMount: s })
          : (0, i.jsx)("img", { className: l, src: t, alt: "" });
}
