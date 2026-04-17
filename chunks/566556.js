"use strict";
n.d(t, { u: () => c });
var r = n(64700),
    i = n(306327),
    s = n(167789);
let a = new Map();
function o(e) {
    if (null == e || "" === e) return null;
    if (a.has(e)) return a.get(e);
    let t = new i.A(e).to("srgb"),
        n = { r: 255 * t.get("r"), g: 255 * t.get("g"), b: 255 * t.get("b"), a: t.alpha };
    return a.set(e, n), n;
}
let l = 1e3 / 30,
    u = 1e3;
function c(e) {
    let {
            eventTargetRef: t,
            elementRef: n,
            needsCurrentColorTracking: i,
            isFocused: a,
            theme: c,
            gradientThemeId: d,
            dataBinding: _,
            allowAnimationWhileUnfocused: f,
        } = e,
        [p, h] = r.useState(null),
        m = r.useRef(!1),
        E = r.useRef(0),
        g = r.useRef(null),
        A = r.useRef(0),
        I = r.useRef(null),
        T = r.useCallback(() => {
            let e = n.current;
            if (null == e) return;
            let t = o((e.ownerDocument.defaultView ?? window).getComputedStyle(e).color);
            t !== I.current && ((I.current = t), h(t));
        }, [n]),
        S = r.useCallback(() => {
            if (null != g.current) return;
            let e = () => {
                let t = m.current || performance.now() < E.current,
                    n = performance.now();
                if ((n - A.current >= l && ((A.current = n), T()), !t)) {
                    g.current = null;
                    return;
                }
                g.current = (0, s.O)(e, { timeout: 100 });
            };
            g.current = (0, s.O)(e, { timeout: 100 });
        }, [T]),
        y = r.useCallback(() => {
            (E.current = performance.now() + u), S();
        }, [S]);
    return (
        r.useEffect(() => {
            if (!i) return;
            let e = t.current;
            if (null == e) return;
            let n = () => {
                    (m.current = !0), S();
                },
                r = () => {
                    (m.current = !1), y();
                };
            return (
                e.addEventListener("mouseenter", n, !0),
                e.addEventListener("mouseleave", r, !0),
                e.addEventListener("focusin", n, !0),
                e.addEventListener("focusout", r, !0),
                T(),
                () => {
                    e.removeEventListener("mouseenter", n, !0),
                        e.removeEventListener("mouseleave", r, !0),
                        e.removeEventListener("focusin", n, !0),
                        e.removeEventListener("focusout", r, !0),
                        (m.current = !1),
                        (E.current = 0),
                        null != g.current && (g.current(), (g.current = null));
                }
            );
        }, [i, t, T, S, y]),
        r.useEffect(() => {
            i && (a || f ? ((m.current = t.current?.matches(":hover") ?? !1), y()) : (m.current = !1));
        }, [f, i, a, c, d, _, y, t]),
        p
    );
}
