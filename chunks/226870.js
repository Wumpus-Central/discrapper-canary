"use strict";
n.d(t, { d: () => d });
var i = n(627968),
    r = n(64700),
    s = n(66455),
    a = n(607470),
    o = n(609174),
    l = n(665039),
    _ = n(204351);
let d = (e) => {
    let { isPlaying: t = !1, scrubOnHover: n = !1, preload: d = "metadata", children: u } = e,
        c = (0, o.Y_)(),
        E = r.useRef(null),
        h = (0, s.A)(c.editMetadata?.start ?? 0),
        m = (0, l.j)(c),
        f = 0 === c.length,
        [g, A] = r.useState(0),
        I = r.useCallback(
            (e) => {
                let t = E.current;
                if (null == t) return;
                let n = c.editMetadata?.start ?? 0,
                    i = c.editMetadata?.end ?? t.duration;
                t.currentTime = Math.max(0, h.current + ((i - n) * e) / 100);
            },
            [E, h, c],
        ),
        p = r.useCallback(
            (e) => {
                if (!n || null == E.current) return;
                let t = E.current.getBoundingClientRect();
                I(((e.clientX - t.left) / t.width) * 100);
            },
            [E, n, I],
        );
    return (
        r.useEffect(() => {
            if (f) return;
            let e = E.current;
            null == e || ((!t || e.paused) && ((e.currentTime = h.current), t ? e.play() : e.pause()));
        }, [t, E, f, h]),
        r.useEffect(() => {
            let e = E?.current;
            if (null == e || f) return;
            let t = null,
                n = () => {
                    if (e.paused || e.ended) {
                        (t = null), A(0);
                        return;
                    }
                    let i = c.editMetadata?.start ?? 0,
                        r = c.editMetadata?.end ?? e.duration,
                        s = ((e.currentTime - i) / (r - i)) * 100;
                    A(isNaN(s) ? 0 : Math.max(0, Math.min(100, s))), (t = requestAnimationFrame(n));
                },
                i = () => {
                    null == t && (t = requestAnimationFrame(n));
                },
                r = () => {
                    null != t && (cancelAnimationFrame(t), (t = null), A(0));
                };
            return (
                e.addEventListener("play", i),
                e.addEventListener("pause", r),
                e.addEventListener("ended", r),
                e.paused || i(),
                () => {
                    null != t && (cancelAnimationFrame(t), A(0)),
                        e.removeEventListener("play", i),
                        e.removeEventListener("pause", r),
                        e.removeEventListener("ended", r);
                }
            );
        }, [E, f, c.editMetadata]),
        (0, i.jsxs)("div", {
            className: _.Q,
            onMouseMove: p,
            children: [
                f
                    ? (0, i.jsx)("img", { alt: "", src: c.thumbnail, className: _.f })
                    : null != m
                      ? (0, i.jsx)(a.A, {
                            preload: d,
                            poster: c.thumbnail,
                            muted: !0,
                            src: m,
                            loop: !0,
                            className: _.f,
                            ref: E,
                        })
                      : null,
                u,
            ],
        })
    );
};
