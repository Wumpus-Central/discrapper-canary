n.d(t, { d: () => d });
var l = n(477900),
    a = n(582128),
    r = n(66455),
    i = n(607470),
    u = n(609174),
    s = n(367974),
    c = n(77729),
    o = n(292490);
function d(e) {
    let { isStatic: t = !1, children: n, ref: a, ...r } = e;
    return t ? (0, l.jsx)(f, { ref: a, children: n }) : (0, l.jsx)(p, { ref: a, ...r, children: n });
}
function f(e) {
    let { children: t, ref: n } = e,
        r = (0, u.Y_)();
    return (
        a.useImperativeHandle(n, () => ({ releaseSource() {}, seek() {} }), []),
        (0, l.jsxs)("div", {
            className: o.Q,
            children: [(0, l.jsx)("img", { alt: "", src: r.thumbnail, className: o.f, loading: "lazy" }), t],
        })
    );
}
function p(e) {
    let {
            isPlaying: t = !1,
            scrubOnHover: n = !1,
            preload: d = "metadata",
            onProgressChange: f,
            children: p,
            ref: m,
        } = e,
        v = (0, u.Y_)(),
        h = a.useRef(null),
        x = (0, r.A)(v.editMetadata?.start ?? 0),
        C = (0, a.useMemo)(
            () =>
                null == v || null == c.A.clips.getClipProtocolURLFromPath
                    ? null
                    : c.A.clips.getClipProtocolURLFromPath(v.filepath),
            [v],
        ),
        k = 0 === v.length,
        y = a.useCallback(
            (e) => {
                let t = h.current;
                if (null == t) return;
                let n = v.editMetadata?.start ?? 0,
                    l = v.editMetadata?.end ?? t.duration;
                t.currentTime = Math.max(0, x.current + ((l - n) * e) / 100);
            },
            [h, x, v],
        );
    a.useImperativeHandle(
        m,
        () => ({
            releaseSource() {
                (0, s.A)(h.current);
            },
            seek(e) {
                y(e);
            },
        }),
        [y],
    );
    let g = a.useCallback(
            (e) => {
                if (!n || null == h.current) return;
                let t = h.current.getBoundingClientRect();
                y(((e.clientX - t.left) / t.width) * 100);
            },
            [h, n, y],
        ),
        b = a.useRef(null),
        j = a.useRef(t);
    return (
        a.useEffect(() => {
            if (((j.current = t), k)) return;
            let e = h.current;
            if (null != e)
                if (t) {
                    if (!e.paused) return;
                    e.currentTime = x.current;
                    let t = e.play();
                    ((b.current = t), t.catch(() => {}));
                } else {
                    let t = b.current;
                    ((b.current = null), null != t ? t.then(() => j.current || e.pause()).catch(() => {}) : e.pause());
                }
        }, [t, h, k, x]),
        a.useEffect(() => {
            if (k || null == C) return;
            let e = h.current;
            if (null != e)
                return () => {
                    (0, s.A)(e);
                };
        }, [C, h, k]),
        a.useEffect(() => {
            let e = h?.current;
            if (null == e || k || null == f) return;
            let t = null;
            function n() {
                if (null == e || null == f) return;
                if (e.paused || e.ended) {
                    ((t = null), f(0));
                    return;
                }
                let l = v.editMetadata?.start ?? 0,
                    a = v.editMetadata?.end ?? e.duration,
                    r = ((e.currentTime - l) / (a - l)) * 100;
                (f(isNaN(r) ? 0 : Math.max(0, Math.min(100, r))), (t = requestAnimationFrame(n)));
            }
            function l() {
                null == t && (t = requestAnimationFrame(n));
            }
            function a() {
                null != f && null != t && (cancelAnimationFrame(t), (t = null), f(0));
            }
            return (
                e.addEventListener("play", l),
                e.addEventListener("pause", a),
                e.addEventListener("ended", a),
                e.paused || l(),
                () => {
                    (null != t && (cancelAnimationFrame(t), f(0)),
                        e.removeEventListener("play", l),
                        e.removeEventListener("pause", a),
                        e.removeEventListener("ended", a));
                }
            );
        }, [h, k, v.editMetadata, f]),
        (0, l.jsxs)("div", {
            className: o.Q,
            onMouseMove: g,
            children: [
                k
                    ? (0, l.jsx)("img", { alt: "", src: v.thumbnail, className: o.f, loading: "lazy" })
                    : null != C
                      ? (0, l.jsx)(i.A, {
                            preload: d,
                            poster: v.thumbnail,
                            muted: !0,
                            src: C,
                            loop: !0,
                            className: o.f,
                            ref: h,
                        })
                      : null,
                p,
            ],
        })
    );
}
((d.displayName = "ClipThumbnail"), (f.displayName = "ClipStaticThumbnail"), (p.displayName = "ClipDynamicThumbnail"));
