n.d(e, { A: () => c });
var i = n(477900),
    r = n(582128),
    s = n(876230),
    a = n(268218);
let l = r.lazy(() =>
        (0, a.sq)({
            createPromise: () => Promise.resolve().then(n.bind(n, 664111)),
            webpackId: 664111,
            name: "DiscordVideoPlayer",
        }),
    ),
    o = { width: "100%", height: "100%", objectFit: "contain" };
function c(t) {
    let { onPlay: e, autoplay: n, playable: a = !0, ...c } = t,
        d = r.useRef(!1),
        u = r.useRef(!1),
        h = r.useCallback(
            (t, n) => {
                d.current && ((d.current = !1), e?.(u.current, t, n));
            },
            [e],
        ),
        S = r.useCallback(
            (t, e) => {
                t === s.Q6.PLAYING
                    ? e !== s.KB.BUFFERING_RECOVERY && ((d.current = !0), (u.current = e !== s.KB.USER))
                    : h(0, 0);
            },
            [h],
        ),
        _ = r.useCallback(
            (t, e) => {
                h(1e3 * t, Number.isFinite(e) ? 1e3 * e : 0);
            },
            [h],
        ),
        g = null != c.poster ? (0, i.jsx)("img", { src: c.poster, alt: "", style: o }) : null;
    return a
        ? (0, i.jsx)(r.Suspense, {
              fallback: g,
              children: (0, i.jsx)(l, { ...c, autoplay: n, onPlayerStateChange: S, onProgressUpdate: _ }),
          })
        : g;
}
