n.d(t, { d: () => d });
var l = n(627968),
    s = n(64700),
    i = n(66455),
    a = n(172218),
    r = n(607470),
    o = n(609174),
    u = n(665039),
    c = n(204351);
let d = (e) => {
        let { isStatic: t = !1, children: n, ...s } = e;
        return t ? (0, l.jsx)(h, { children: n }) : (0, l.jsx)(m, { ...s, children: n });
    },
    h = (e) => {
        let { children: t } = e,
            n = (0, o.Y_)();
        return (0, l.jsxs)("div", {
            className: c.Q,
            children: [(0, l.jsx)("img", { alt: "", src: n.thumbnail, className: c.f }), t],
        });
    },
    m = (e) => {
        let { isPlaying: t = !1, scrubOnHover: n = !1, preload: d = "metadata", lazy: h = !1, children: m } = e,
            p = (0, o.Y_)(),
            [f, g] = s.useState(!1),
            A = s.useCallback((e) => g(e), []),
            x = (0, a.K)(A, 0.15),
            C = s.useRef(null),
            v = (0, i.A)(p.editMetadata?.start ?? 0),
            E = (0, u.j)(p),
            T = 0 === p.length,
            [j, _] = s.useState(0),
            N = s.useCallback(
                (e) => {
                    let t = C.current;
                    if (null == t) return;
                    let n = p.editMetadata?.start ?? 0,
                        l = p.editMetadata?.end ?? t.duration;
                    t.currentTime = Math.max(0, v.current + ((l - n) * e) / 100);
                },
                [C, v, p],
            ),
            S = s.useCallback(
                (e) => {
                    if (!n || null == C.current) return;
                    let t = C.current.getBoundingClientRect();
                    N(((e.clientX - t.left) / t.width) * 100);
                },
                [C, n, N],
            );
        return (
            s.useEffect(() => {
                if (T) return;
                let e = C.current;
                null == e || ((!t || e.paused) && ((e.currentTime = v.current), t ? e.play() : e.pause()));
            }, [t, C, T, v, f]),
            s.useEffect(() => {
                let e = C?.current;
                if (null == e || T) return;
                let t = null,
                    n = () => {
                        if (e.paused || e.ended) {
                            (t = null), _(0);
                            return;
                        }
                        let l = p.editMetadata?.start ?? 0,
                            s = p.editMetadata?.end ?? e.duration,
                            i = ((e.currentTime - l) / (s - l)) * 100;
                        _(isNaN(i) ? 0 : Math.max(0, Math.min(100, i))), (t = requestAnimationFrame(n));
                    },
                    l = () => {
                        null == t && (t = requestAnimationFrame(n));
                    },
                    s = () => {
                        null != t && (cancelAnimationFrame(t), (t = null), _(0));
                    };
                return (
                    e.addEventListener("play", l),
                    e.addEventListener("pause", s),
                    e.addEventListener("ended", s),
                    e.paused || l(),
                    () => {
                        null != t && (cancelAnimationFrame(t), _(0)),
                            e.removeEventListener("play", l),
                            e.removeEventListener("pause", s),
                            e.removeEventListener("ended", s);
                    }
                );
            }, [C, T, p.editMetadata, f]),
            (0, l.jsxs)("div", {
                ref: x,
                className: c.Q,
                onMouseMove: S,
                children: [
                    T
                        ? (0, l.jsx)("img", { alt: "", src: p.thumbnail, className: c.f })
                        : null != E
                          ? h && !f
                              ? (0, l.jsx)("img", { alt: "", src: p.thumbnail, className: c.f })
                              : (0, l.jsx)(r.A, {
                                    preload: d,
                                    poster: p.thumbnail,
                                    muted: !0,
                                    src: E,
                                    loop: !0,
                                    className: c.f,
                                    ref: C,
                                })
                          : null,
                    m,
                ],
            })
        );
    };
