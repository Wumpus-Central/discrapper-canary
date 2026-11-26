n.d(t, { d: () => m });
var r = n(477900),
    a = n(582128),
    i = n(66455),
    l = n(607470),
    s = n(609174),
    o = n(825245),
    u = n(367974),
    c = n(77729),
    d = n(292490);
function m(e) {
    let { isStatic: t = !1, children: n, ref: a, ...i } = e;
    return t
        ? (0, r.jsx)(p, { ref: a, children: n })
        : (0, r.jsxs)(f, { ref: a, ...i, children: [n, (0, r.jsx)(o.L, {})] });
}
function p(e) {
    let { children: t, ref: n } = e,
        i = (0, s.Y_)();
    return (
        a.useImperativeHandle(n, () => ({ releaseSource() {}, seek() {} }), []),
        (0, r.jsxs)("div", {
            className: d.Q,
            children: [
                (0, r.jsx)("img", { alt: "", src: i.thumbnail, className: d.f, loading: "lazy" }),
                t,
                (0, r.jsx)(o.L, {}),
            ],
        })
    );
}
function f(e) {
    let {
            isPlaying: t = !1,
            scrubOnHover: n = !1,
            preload: o = "metadata",
            onProgressChange: m,
            children: p,
            ref: f,
        } = e,
        v = (0, s.Y_)(),
        h = a.useRef(null),
        g = (0, i.A)(v.editMetadata?.start ?? 0),
        x = (0, a.useMemo)(
            () =>
                null == v || null == c.A.clips.getClipProtocolURLFromPath
                    ? null
                    : c.A.clips.getClipProtocolURLFromPath(v.filepath),
            [v],
        ),
        y = 0 === v.length,
        b = a.useCallback(
            (e) => {
                let t = h.current;
                if (null == t) return;
                let n = v.editMetadata?.start ?? 0,
                    r = v.editMetadata?.end ?? t.duration;
                t.currentTime = Math.max(0, g.current + ((r - n) * e) / 100);
            },
            [h, g, v],
        );
    a.useImperativeHandle(
        f,
        () => ({
            releaseSource() {
                (0, u.A)(h.current);
            },
            seek(e) {
                b(e);
            },
        }),
        [b],
    );
    let C = a.useCallback(
            (e) => {
                if (!n || null == h.current) return;
                let t = h.current.getBoundingClientRect();
                b(((e.clientX - t.left) / t.width) * 100);
            },
            [h, n, b],
        ),
        A = a.useRef(null),
        j = a.useRef(t);
    return (
        a.useEffect(() => {
            if (((j.current = t), y)) return;
            let e = h.current;
            if (null != e)
                if (t) {
                    if (!e.paused) return;
                    e.currentTime = g.current;
                    let t = e.play();
                    ((A.current = t), t.catch(() => {}));
                } else {
                    let t = A.current;
                    ((A.current = null), null != t ? t.then(() => j.current || e.pause()).catch(() => {}) : e.pause());
                }
        }, [t, h, y, g]),
        a.useEffect(() => {
            if (y || null == x) return;
            let e = h.current;
            if (null != e)
                return () => {
                    (0, u.A)(e);
                };
        }, [x, h, y]),
        a.useEffect(() => {
            let e = h?.current;
            if (null == e || y || null == m) return;
            let t = null;
            function n() {
                if (null == e || null == m) return;
                if (e.paused || e.ended) {
                    ((t = null), m(0));
                    return;
                }
                let r = v.editMetadata?.start ?? 0,
                    a = v.editMetadata?.end ?? e.duration,
                    i = ((e.currentTime - r) / (a - r)) * 100;
                (m(isNaN(i) ? 0 : Math.max(0, Math.min(100, i))), (t = requestAnimationFrame(n)));
            }
            function r() {
                null == t && (t = requestAnimationFrame(n));
            }
            function a() {
                null != m && null != t && (cancelAnimationFrame(t), (t = null), m(0));
            }
            return (
                e.addEventListener("play", r),
                e.addEventListener("pause", a),
                e.addEventListener("ended", a),
                e.paused || r(),
                () => {
                    (null != t && (cancelAnimationFrame(t), m(0)),
                        e.removeEventListener("play", r),
                        e.removeEventListener("pause", a),
                        e.removeEventListener("ended", a));
                }
            );
        }, [h, y, v.editMetadata, m]),
        (0, r.jsxs)("div", {
            className: d.Q,
            onMouseMove: C,
            children: [
                y
                    ? (0, r.jsx)("img", { alt: "", src: v.thumbnail, className: d.f, loading: "lazy" })
                    : null != x
                      ? (0, r.jsx)(l.A, {
                            preload: o,
                            poster: v.thumbnail,
                            muted: !0,
                            src: x,
                            loop: !0,
                            className: d.f,
                            ref: h,
                        })
                      : null,
                p,
            ],
        })
    );
}
((m.displayName = "ClipThumbnail"), (p.displayName = "ClipStaticThumbnail"), (f.displayName = "ClipDynamicThumbnail"));
