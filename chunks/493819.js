n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    r = n(775602),
    a = n(607470),
    o = n(253932),
    d = n(522435);
n(131955);
var c = n(453656);
function u(e) {
    let { src: t, className: n, autoPlayOnMount: s } = e,
        r = l.useRef(null),
        o = l.useRef(!1),
        [d, u] = l.useState(!1);
    l.useEffect(() => {
        if (!s) return;
        let e = r.current;
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
            let e = r.current;
            null != e && ((e.currentTime = 0), u(!0), e.play());
        }, []),
        A = l.useCallback(() => {
            let e = r.current;
            null != e && (u(!1), e.pause());
        }, []);
    return (0, i.jsx)("div", {
        className: c.j,
        onMouseEnter: h,
        onMouseLeave: A,
        children: (0, i.jsx)(a.A, { ref: r, className: n, src: t, muted: !0, playsInline: !0, loop: d }),
    });
}
function h(e) {
    let { animatedSrc: t, staticSrc: n, className: s, autoPlayOnMount: r, animationDurationMs: a = 4e3 } = e,
        [o, d] = l.useState(() => r),
        c = l.useRef(!r);
    l.useEffect(() => {
        if (!r) return;
        let e = setTimeout(() => {
            (c.current = !0), d(!1);
        }, a);
        return () => clearTimeout(e);
    }, [r, a]);
    let u = l.useCallback(() => {
            d(!0);
        }, []),
        h = l.useCallback(() => {
            c.current && d(!1);
        }, []);
    return (0, i.jsx)("img", { className: s, src: o ? t : n, alt: "", onMouseEnter: u, onMouseLeave: h });
}
function A(e) {
    let { imageUrl: t, animatedUrl: n, className: l, autoPlayOnMount: a = !0 } = e,
        c = (0, s.bG)([r.A], () => r.A.useReducedMotion),
        A = o.kt.useSetting(),
        _ = a && A && !c;
    return null != n && (0, d.LG)(n)
        ? (0, i.jsx)(u, { src: n, className: l, autoPlayOnMount: _ })
        : null != n
          ? (0, i.jsx)(h, { animatedSrc: n, staticSrc: t, className: l, autoPlayOnMount: _ }, n)
          : (0, i.jsx)("img", { className: l, src: t, alt: "" });
}
