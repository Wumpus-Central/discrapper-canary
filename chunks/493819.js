"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(607470),
    a = n(522435);
n(131955);
var r = n(273957);
function o(e) {
    let { src: t, className: n, autoPlayOnMount: a } = e,
        o = s.useRef(null),
        c = s.useRef(!1),
        [d, u] = s.useState(!1);
    s.useEffect(() => {
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
    let h = s.useCallback(() => {
            let e = o.current;
            null != e && ((e.currentTime = 0), u(!0), e.play());
        }, []),
        A = s.useCallback(() => {
            let e = o.current;
            null != e && (u(!1), e.pause());
        }, []);
    return (0, i.jsx)("div", {
        className: r.j,
        onMouseEnter: h,
        onMouseLeave: A,
        children: (0, i.jsx)(l.A, { ref: o, className: n, src: t, muted: !0, playsInline: !0, loop: d }),
    });
}
function c(e) {
    let { animatedSrc: t, staticSrc: n, className: l, autoPlayOnMount: a, animationDurationMs: r = 4e3 } = e,
        [o, c] = s.useState(() => a),
        d = s.useRef(!a);
    s.useEffect(() => {
        if (!a) return;
        let e = setTimeout(() => {
            (d.current = !0), c(!1);
        }, r);
        return () => clearTimeout(e);
    }, [t, a, r]);
    let u = s.useCallback(() => {
            c(!0);
        }, []),
        h = s.useCallback(() => {
            d.current && c(!1);
        }, []);
    return (0, i.jsx)("img", { className: l, src: o ? t : n, alt: "", onMouseEnter: u, onMouseLeave: h });
}
function d(e) {
    let { src: t, staticSrc: n, className: s, autoPlayOnMount: l = !0 } = e;
    return (0, a.LG)(t)
        ? (0, i.jsx)(o, { src: t, className: s, autoPlayOnMount: l })
        : null != n
          ? (0, i.jsx)(c, { animatedSrc: t, staticSrc: n, className: s, autoPlayOnMount: l })
          : (0, i.jsx)("img", { className: s, src: t, alt: "" });
}
