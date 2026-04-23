n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(775602),
    r = n(607470),
    o = n(253932),
    d = n(522435);
n(131955);
var c = n(453656);
function u(e) {
    let { src: t, className: n, autoPlayOnMount: s } = e,
        a = l.useRef(null),
        o = l.useRef(!1),
        [d, u] = l.useState(!1);
    l.useEffect(() => {
        if (!s) return;
        let e = a.current;
        if (null != e)
            return (
                (o.current = !1),
                e.addEventListener("canplay", t),
                e.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA && t(),
                () => e.removeEventListener("canplay", t)
            );
        function t() {
            o.current || null == e || ((o.current = !0), e.play());
        }
    }, [t, s]);
    let h = l.useCallback(() => {
            let e = a.current;
            null != e && ((e.currentTime = 0), u(!0), e.play());
        }, []),
        A = l.useCallback(() => {
            let e = a.current;
            null != e && (u(!1), e.pause());
        }, []);
    return (0, i.jsx)("div", {
        className: c.j,
        onMouseEnter: h,
        onMouseLeave: A,
        children: (0, i.jsx)(r.A, { ref: a, className: n, src: t, muted: !0, playsInline: !0, loop: d }),
    });
}
function h(e) {
    let { animatedSrc: t, staticSrc: n, className: s, autoPlayOnMount: a, animationDurationMs: r = 4e3 } = e,
        [o, d] = l.useState(() => a),
        c = l.useRef(!a);
    l.useEffect(() => {
        if (!a) return;
        let e = setTimeout(() => {
            (c.current = !0), d(!1);
        }, r);
        return () => clearTimeout(e);
    }, [a, r]);
    let u = l.useCallback(() => {
            d(!0);
        }, []),
        h = l.useCallback(() => {
            c.current && d(!1);
        }, []);
    return (0, i.jsx)("img", { className: s, src: o ? t : n, alt: "", onMouseEnter: u, onMouseLeave: h });
}
function A(e) {
    let { imageUrl: t, animatedUrl: n, className: l, autoPlayOnMount: r = !0 } = e,
        c = (0, s.bG)([a.A], () => a.A.useReducedMotion),
        A = o.kt.useSetting(),
        _ = r && A && !c;
    return null != n && (0, d.LG)(n)
        ? (0, i.jsx)(u, { src: n, className: l, autoPlayOnMount: _ })
        : null != n
          ? (0, i.jsx)(h, { animatedSrc: n, staticSrc: t, className: l, autoPlayOnMount: _ }, n)
          : (0, i.jsx)("img", { className: l, src: t, alt: "" });
}
