"use strict";
n.d(t, { d: () => u });
var i = n(627968),
    r = n(64700),
    s = n(66455),
    a = n(172218),
    o = n(607470),
    l = n(609174),
    _ = n(665039),
    d = n(204351);
let u = (e) => {
    let { isPlaying: t = !1, scrubOnHover: n = !1, preload: u = "metadata", lazy: c = !1, children: E } = e,
        h = (0, l.Y_)(),
        [m, f] = r.useState(!1),
        g = r.useCallback((e) => f(e), []),
        I = (0, a.K)(g, 0.15),
        A = r.useRef(null),
        p = (0, s.A)(h.editMetadata?.start ?? 0),
        T = (0, _.j)(h),
        S = 0 === h.length,
        [N, O] = r.useState(0),
        R = r.useCallback(
            (e) => {
                let t = A.current;
                if (null == t) return;
                let n = h.editMetadata?.start ?? 0,
                    i = h.editMetadata?.end ?? t.duration;
                t.currentTime = Math.max(0, p.current + ((i - n) * e) / 100);
            },
            [A, p, h],
        ),
        C = r.useCallback(
            (e) => {
                if (!n || null == A.current) return;
                let t = A.current.getBoundingClientRect();
                R(((e.clientX - t.left) / t.width) * 100);
            },
            [A, n, R],
        );
    return (
        r.useEffect(() => {
            if (S) return;
            let e = A.current;
            null == e || ((!t || e.paused) && ((e.currentTime = p.current), t ? e.play() : e.pause()));
        }, [t, A, S, p, m]),
        r.useEffect(() => {
            let e = A?.current;
            if (null == e || S) return;
            let t = null,
                n = () => {
                    if (e.paused || e.ended) {
                        (t = null), O(0);
                        return;
                    }
                    let i = h.editMetadata?.start ?? 0,
                        r = h.editMetadata?.end ?? e.duration,
                        s = ((e.currentTime - i) / (r - i)) * 100;
                    O(isNaN(s) ? 0 : Math.max(0, Math.min(100, s))), (t = requestAnimationFrame(n));
                },
                i = () => {
                    null == t && (t = requestAnimationFrame(n));
                },
                r = () => {
                    null != t && (cancelAnimationFrame(t), (t = null), O(0));
                };
            return (
                e.addEventListener("play", i),
                e.addEventListener("pause", r),
                e.addEventListener("ended", r),
                e.paused || i(),
                () => {
                    null != t && (cancelAnimationFrame(t), O(0)),
                        e.removeEventListener("play", i),
                        e.removeEventListener("pause", r),
                        e.removeEventListener("ended", r);
                }
            );
        }, [A, S, h.editMetadata, m]),
        (0, i.jsxs)("div", {
            ref: I,
            className: d.Q,
            onMouseMove: C,
            children: [
                S
                    ? (0, i.jsx)("img", { alt: "", src: h.thumbnail, className: d.f })
                    : null != T
                      ? c && !m
                          ? (0, i.jsx)("img", { alt: "", src: h.thumbnail, className: d.f })
                          : (0, i.jsx)(o.A, {
                                preload: u,
                                poster: h.thumbnail,
                                muted: !0,
                                src: T,
                                loop: !0,
                                className: d.f,
                                ref: A,
                            })
                      : null,
                E,
            ],
        })
    );
};
