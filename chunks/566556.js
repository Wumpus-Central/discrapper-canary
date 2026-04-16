"use strict";
n.d(t, { u: () => u });
var r = n(64700),
    i = n(306327);
let s = new Map();
function a(e) {
    if (null == e || "" === e) return null;
    if (s.has(e)) return s.get(e);
    let t = new i.A(e).to("srgb"),
        n = { r: 255 * t.get("r"), g: 255 * t.get("g"), b: 255 * t.get("b"), a: t.alpha };
    return s.set(e, n), n;
}
let o = 1e3 / 30,
    l = 1e3;
function u(e) {
    let {
            eventTargetRef: t,
            elementRef: n,
            needsCurrentColorTracking: i,
            isFocused: s,
            theme: u,
            gradientThemeId: c,
            dataBinding: d,
            allowAnimationWhileUnfocused: _,
        } = e,
        [f, p] = r.useState(null),
        h = r.useRef(!1),
        m = r.useRef(0),
        E = r.useRef(null),
        g = r.useRef(0),
        A = r.useRef(null),
        I = r.useCallback(() => {
            let e = n.current;
            if (null == e) return;
            let t = a((e.ownerDocument.defaultView ?? window).getComputedStyle(e).color);
            t !== A.current && ((A.current = t), p(t));
        }, [n]),
        T = r.useCallback(() => {
            if (null != E.current) return;
            let e = (t) => {
                let n = h.current || performance.now() < m.current;
                if ((t - g.current >= o && ((g.current = t), I()), !n)) {
                    E.current = null;
                    return;
                }
                E.current = requestAnimationFrame(e);
            };
            E.current = requestAnimationFrame(e);
        }, [I]),
        S = r.useCallback(() => {
            (m.current = performance.now() + l), T();
        }, [T]);
    r.useEffect(() => {
        if (!i) return;
        let e = t.current;
        if (null == e) return;
        let n = () => {
                (h.current = !0), T();
            },
            r = () => {
                (h.current = !1), S();
            };
        return (
            e.addEventListener("mouseenter", n, !0),
            e.addEventListener("mouseleave", r, !0),
            e.addEventListener("focusin", n, !0),
            e.addEventListener("focusout", r, !0),
            I(),
            () => {
                e.removeEventListener("mouseenter", n, !0),
                    e.removeEventListener("mouseleave", r, !0),
                    e.removeEventListener("focusin", n, !0),
                    e.removeEventListener("focusout", r, !0),
                    (h.current = !1),
                    (m.current = 0),
                    null != E.current && (cancelAnimationFrame(E.current), (E.current = null));
            }
        );
    }, [i, t, I, T, S]);
    let y = r.useMemo(() => JSON.stringify(d), [JSON.stringify(d)]);
    return (
        r.useEffect(() => {
            i && (s || _ ? ((h.current = t.current?.matches(":hover") ?? !1), S()) : (h.current = !1));
        }, [_, i, s, u, c, y, S, t]),
        f
    );
}
