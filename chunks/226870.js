"use strict";
n.d(t, { d: () => d });
var i = n(627968),
    r = n(64700),
    s = n(66455),
    a = n(172218),
    o = n(607470),
    l = n(609174),
    u = n(665039),
    c = n(204351);
let d = (e) => {
        let { isStatic: t = !1, children: n, ...r } = e;
        return t ? (0, i.jsx)(_, { children: n }) : (0, i.jsx)(f, { ...r, children: n });
    },
    _ = (e) => {
        let { children: t } = e,
            n = (0, l.Y_)();
        return (0, i.jsxs)("div", {
            className: c.Q,
            children: [(0, i.jsx)("img", { alt: "", src: n.thumbnail, className: c.f }), t],
        });
    },
    f = (e) => {
        let { isPlaying: t = !1, scrubOnHover: n = !1, preload: d = "metadata", lazy: _ = !1, children: f } = e,
            h = (0, l.Y_)(),
            [p, E] = r.useState(!1),
            m = r.useCallback((e) => E(e), []),
            g = (0, a.K)(m, 0.15),
            A = r.useRef(null),
            I = (0, s.A)(h.editMetadata?.start ?? 0),
            T = (0, u.j)(h),
            S = 0 === h.length,
            [N, y] = r.useState(0),
            C = r.useCallback(
                (e) => {
                    let t = A.current;
                    if (null == t) return;
                    let n = h.editMetadata?.start ?? 0,
                        i = h.editMetadata?.end ?? t.duration;
                    t.currentTime = Math.max(0, I.current + ((i - n) * e) / 100);
                },
                [A, I, h],
            ),
            v = r.useCallback(
                (e) => {
                    if (!n || null == A.current) return;
                    let t = A.current.getBoundingClientRect();
                    C(((e.clientX - t.left) / t.width) * 100);
                },
                [A, n, C],
            );
        return (
            r.useEffect(() => {
                if (S) return;
                let e = A.current;
                null == e || ((!t || e.paused) && ((e.currentTime = I.current), t ? e.play() : e.pause()));
            }, [t, A, S, I, p]),
            r.useEffect(() => {
                let e = A?.current;
                if (null == e || S) return;
                let t = null,
                    n = () => {
                        if (e.paused || e.ended) {
                            (t = null), y(0);
                            return;
                        }
                        let i = h.editMetadata?.start ?? 0,
                            r = h.editMetadata?.end ?? e.duration,
                            s = ((e.currentTime - i) / (r - i)) * 100;
                        y(isNaN(s) ? 0 : Math.max(0, Math.min(100, s))), (t = requestAnimationFrame(n));
                    },
                    i = () => {
                        null == t && (t = requestAnimationFrame(n));
                    },
                    r = () => {
                        null != t && (cancelAnimationFrame(t), (t = null), y(0));
                    };
                return (
                    e.addEventListener("play", i),
                    e.addEventListener("pause", r),
                    e.addEventListener("ended", r),
                    e.paused || i(),
                    () => {
                        null != t && (cancelAnimationFrame(t), y(0)),
                            e.removeEventListener("play", i),
                            e.removeEventListener("pause", r),
                            e.removeEventListener("ended", r);
                    }
                );
            }, [A, S, h.editMetadata, p]),
            (0, i.jsxs)("div", {
                ref: g,
                className: c.Q,
                onMouseMove: v,
                children: [
                    S
                        ? (0, i.jsx)("img", { alt: "", src: h.thumbnail, className: c.f })
                        : null != T
                          ? _ && !p
                              ? (0, i.jsx)("img", { alt: "", src: h.thumbnail, className: c.f })
                              : (0, i.jsx)(o.A, {
                                    preload: d,
                                    poster: h.thumbnail,
                                    muted: !0,
                                    src: T,
                                    loop: !0,
                                    className: c.f,
                                    ref: A,
                                })
                          : null,
                    f,
                ],
            })
        );
    };
