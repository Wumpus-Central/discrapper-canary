n.d(t, { A: () => u });
var i = n(477900),
    r = n(582128),
    l = n(876230),
    a = n(268218);
let o = r.lazy(() =>
        (0, a.sq)({
            createPromise: () => Promise.resolve().then(n.bind(n, 664111)),
            webpackId: 664111,
            name: "DiscordVideoPlayer",
        }),
    ),
    s = { width: "100%", height: "100%", objectFit: "contain" };
function u(e) {
    let { onPlay: t, autoplay: n, playable: a = !0, ...u } = e,
        d = r.useRef(!1),
        c = r.useRef(!1),
        h = r.useCallback(
            (e, n) => {
                d.current && ((d.current = !1), t?.(c.current, e, n));
            },
            [t],
        ),
        m = r.useCallback(
            (e, t) => {
                e === l.Q6.PLAYING
                    ? t !== l.KB.BUFFERING_RECOVERY && ((d.current = !0), (c.current = t !== l.KB.USER))
                    : h(0, 0);
            },
            [h],
        ),
        g = r.useCallback(
            (e, t) => {
                h(1e3 * e, Number.isFinite(t) ? 1e3 * t : 0);
            },
            [h],
        ),
        p = null != u.poster ? (0, i.jsx)("img", { src: u.poster, alt: "", style: s }) : null;
    return a
        ? (0, i.jsx)(r.Suspense, {
              fallback: p,
              children: (0, i.jsx)(o, { ...u, autoplay: n, onPlayerStateChange: m, onProgressUpdate: g }),
          })
        : p;
}
