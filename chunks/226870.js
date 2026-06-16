l.d(t, { d: () => o });
var a = l(627968),
    r = l(64700),
    n = l(66455),
    i = l(607470),
    s = l(609174),
    u = l(665039),
    c = l(204351);
let o = r.forwardRef((e, t) => {
    let { isStatic: l = !1, children: r, ...n } = e;
    return l ? (0, a.jsx)(d, { ref: t, children: r }) : (0, a.jsx)(p, { ref: t, ...n, children: r });
});
o.displayName = "ClipThumbnail";
let d = r.forwardRef((e, t) => {
    let { children: l } = e,
        n = (0, s.Y_)();
    return (
        r.useImperativeHandle(t, () => ({ releaseSource() {} }), []),
        (0, a.jsxs)("div", {
            className: c.Q,
            children: [(0, a.jsx)("img", { alt: "", src: n.thumbnail, className: c.f, loading: "lazy" }), l],
        })
    );
});
d.displayName = "ClipStaticThumbnail";
let p = r.forwardRef((e, t) => {
    let { isPlaying: l = !1, scrubOnHover: o = !1, preload: d = "metadata", onProgressChange: p, children: m } = e,
        f = (0, s.Y_)(),
        v = r.useRef(null),
        h = (0, n.A)(f.editMetadata?.start ?? 0);
    r.useImperativeHandle(
        t,
        () => ({
            releaseSource() {
                let e = v.current;
                null != e && (e.pause(), (e.src = ""));
            },
        }),
        [],
    );
    let x = (0, u.j)(f),
        y = 0 === f.length,
        C = r.useCallback(
            (e) => {
                let t = v.current;
                if (null == t) return;
                let l = f.editMetadata?.start ?? 0,
                    a = f.editMetadata?.end ?? t.duration;
                t.currentTime = Math.max(0, h.current + ((a - l) * e) / 100);
            },
            [v, h, f],
        ),
        g = r.useCallback(
            (e) => {
                if (!o || null == v.current) return;
                let t = v.current.getBoundingClientRect();
                C(((e.clientX - t.left) / t.width) * 100);
            },
            [v, o, C],
        ),
        k = r.useRef(null),
        j = r.useRef(l);
    return (
        r.useEffect(() => {
            if (((j.current = l), y)) return;
            let e = v.current;
            if (null != e)
                if (l) {
                    if (!e.paused) return;
                    e.currentTime = h.current;
                    let t = e.play();
                    (k.current = t), t.catch(() => {});
                } else {
                    let t = k.current;
                    (k.current = null), null != t ? t.then(() => j.current || e.pause()).catch(() => {}) : e.pause();
                }
        }, [l, v, y, h]),
        r.useEffect(() => {
            if (y || null == x) return;
            let e = v.current;
            if (null != e)
                return () => {
                    e.pause(), (e.src = "");
                };
        }, [x, v, y]),
        r.useEffect(() => {
            let e = v?.current;
            if (null == e || y || null == p) return;
            let t = null,
                l = () => {
                    if (e.paused || e.ended) {
                        (t = null), p(0);
                        return;
                    }
                    let a = f.editMetadata?.start ?? 0,
                        r = f.editMetadata?.end ?? e.duration,
                        n = ((e.currentTime - a) / (r - a)) * 100;
                    p(isNaN(n) ? 0 : Math.max(0, Math.min(100, n))), (t = requestAnimationFrame(l));
                },
                a = () => {
                    null == t && (t = requestAnimationFrame(l));
                },
                r = () => {
                    null != t && (cancelAnimationFrame(t), (t = null), p(0));
                };
            return (
                e.addEventListener("play", a),
                e.addEventListener("pause", r),
                e.addEventListener("ended", r),
                e.paused || a(),
                () => {
                    null != t && (cancelAnimationFrame(t), p(0)),
                        e.removeEventListener("play", a),
                        e.removeEventListener("pause", r),
                        e.removeEventListener("ended", r);
                }
            );
        }, [v, y, f.editMetadata, p]),
        (0, a.jsxs)("div", {
            className: c.Q,
            onMouseMove: g,
            children: [
                y
                    ? (0, a.jsx)("img", { alt: "", src: f.thumbnail, className: c.f, loading: "lazy" })
                    : null != x
                      ? (0, a.jsx)(i.A, {
                            preload: d,
                            poster: f.thumbnail,
                            muted: !0,
                            src: x,
                            loop: !0,
                            className: c.f,
                            ref: v,
                        })
                      : null,
                m,
            ],
        })
    );
});
p.displayName = "ClipDynamicThumbnail";
