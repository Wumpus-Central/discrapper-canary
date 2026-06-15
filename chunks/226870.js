"use strict";
n.d(t, { d: () => c });
var i = n(627968),
    r = n(64700),
    s = n(66455),
    a = n(607470),
    o = n(609174),
    l = n(665039),
    u = n(204351);
let c = r.forwardRef((e, t) => {
    let { isStatic: n = !1, children: r, ...s } = e;
    return n ? (0, i.jsx)(d, { ref: t, children: r }) : (0, i.jsx)(_, { ref: t, ...s, children: r });
});
c.displayName = "ClipThumbnail";
let d = r.forwardRef((e, t) => {
    let { children: n } = e,
        s = (0, o.Y_)();
    return (
        r.useImperativeHandle(t, () => ({ releaseSource() {} }), []),
        (0, i.jsxs)("div", {
            className: u.Q,
            children: [(0, i.jsx)("img", { alt: "", src: s.thumbnail, className: u.f, loading: "lazy" }), n],
        })
    );
});
d.displayName = "ClipStaticThumbnail";
let _ = r.forwardRef((e, t) => {
    let { isPlaying: n = !1, scrubOnHover: c = !1, preload: d = "metadata", onProgressChange: _, children: h } = e,
        f = (0, o.Y_)(),
        p = r.useRef(null),
        E = (0, s.A)(f.editMetadata?.start ?? 0);
    r.useImperativeHandle(
        t,
        () => ({
            releaseSource() {
                let e = p.current;
                null != e && (e.pause(), (e.src = ""));
            },
        }),
        [],
    );
    let m = (0, l.j)(f),
        g = 0 === f.length,
        A = r.useCallback(
            (e) => {
                let t = p.current;
                if (null == t) return;
                let n = f.editMetadata?.start ?? 0,
                    i = f.editMetadata?.end ?? t.duration;
                t.currentTime = Math.max(0, E.current + ((i - n) * e) / 100);
            },
            [p, E, f],
        ),
        I = r.useCallback(
            (e) => {
                if (!c || null == p.current) return;
                let t = p.current.getBoundingClientRect();
                A(((e.clientX - t.left) / t.width) * 100);
            },
            [p, c, A],
        ),
        T = r.useRef(null),
        S = r.useRef(n);
    return (
        r.useEffect(() => {
            if (((S.current = n), g)) return;
            let e = p.current;
            if (null != e)
                if (n) {
                    if (!e.paused) return;
                    e.currentTime = E.current;
                    let t = e.play();
                    (T.current = t), t.catch(() => {});
                } else {
                    let t = T.current;
                    (T.current = null), null != t ? t.then(() => S.current || e.pause()).catch(() => {}) : e.pause();
                }
        }, [n, p, g, E]),
        r.useEffect(() => {
            if (g || null == m) return;
            let e = p.current;
            if (null != e)
                return () => {
                    e.pause(), (e.src = "");
                };
        }, [m, p, g]),
        r.useEffect(() => {
            let e = p?.current;
            if (null == e || g || null == _) return;
            let t = null,
                n = () => {
                    if (e.paused || e.ended) {
                        (t = null), _(0);
                        return;
                    }
                    let i = f.editMetadata?.start ?? 0,
                        r = f.editMetadata?.end ?? e.duration,
                        s = ((e.currentTime - i) / (r - i)) * 100;
                    _(isNaN(s) ? 0 : Math.max(0, Math.min(100, s))), (t = requestAnimationFrame(n));
                },
                i = () => {
                    null == t && (t = requestAnimationFrame(n));
                },
                r = () => {
                    null != t && (cancelAnimationFrame(t), (t = null), _(0));
                };
            return (
                e.addEventListener("play", i),
                e.addEventListener("pause", r),
                e.addEventListener("ended", r),
                e.paused || i(),
                () => {
                    null != t && (cancelAnimationFrame(t), _(0)),
                        e.removeEventListener("play", i),
                        e.removeEventListener("pause", r),
                        e.removeEventListener("ended", r);
                }
            );
        }, [p, g, f.editMetadata, _]),
        (0, i.jsxs)("div", {
            className: u.Q,
            onMouseMove: I,
            children: [
                g
                    ? (0, i.jsx)("img", { alt: "", src: f.thumbnail, className: u.f, loading: "lazy" })
                    : null != m
                      ? (0, i.jsx)(a.A, {
                            preload: d,
                            poster: f.thumbnail,
                            muted: !0,
                            src: m,
                            loop: !0,
                            className: u.f,
                            ref: p,
                        })
                      : null,
                h,
            ],
        })
    );
});
_.displayName = "ClipDynamicThumbnail";
