n.d(t, { A: () => l });
var r = n(627968),
    s = n(64700),
    i = n(876230),
    a = n(268218);
let _ = s.lazy(() =>
        (0, a.sq)({
            createPromise: () => Promise.resolve().then(n.bind(n, 664111)),
            webpackId: 664111,
            name: "DiscordVideoPlayer",
        }),
    ),
    u = { width: "100%", height: "100%", objectFit: "contain" };
function l(e) {
    let { onPlay: t, autoplay: n, playable: a = !0, ...l } = e,
        S = s.useRef(!1),
        o = s.useRef(!1),
        d = s.useCallback(
            (e, n) => {
                S.current && ((S.current = !1), t?.(o.current, e, n));
            },
            [t],
        ),
        I = s.useCallback(
            (e, t) => {
                e === i.Q6.PLAYING
                    ? t !== i.KB.BUFFERING_RECOVERY && ((S.current = !0), (o.current = t !== i.KB.USER))
                    : d(0, 0);
            },
            [d],
        ),
        E = s.useCallback(
            (e, t) => {
                d(1e3 * e, Number.isFinite(t) ? 1e3 * t : 0);
            },
            [d],
        ),
        c = null != l.poster ? (0, r.jsx)("img", { src: l.poster, alt: "", style: u }) : null;
    return a
        ? (0, r.jsx)(s.Suspense, {
              fallback: c,
              children: (0, r.jsx)(_, { ...l, autoplay: n, onPlayerStateChange: I, onProgressUpdate: E }),
          })
        : c;
}
