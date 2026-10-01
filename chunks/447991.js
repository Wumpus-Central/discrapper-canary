s.d(r, { A: () => c });
var t = s(477900),
    a = s(582128),
    i = s(876230),
    n = s(268218);
let u = a.lazy(() =>
        (0, n.sq)({
            createPromise: () => Promise.resolve().then(s.bind(s, 266546)),
            webpackId: 266546,
            name: "DiscordVideoPlayer",
        }),
    ),
    l = { width: "100%", height: "100%", objectFit: "contain" };
function c(e) {
    let { onPlay: r, autoplay: s, playable: n = !0, ...c } = e,
        o = a.useRef(!1),
        d = a.useRef(!1),
        p = a.useCallback(
            (e, s) => {
                o.current && ((o.current = !1), r?.(d.current, e, s));
            },
            [r],
        ),
        h = a.useCallback(
            (e, r) => {
                e === i.Q6.PLAYING
                    ? r !== i.KB.BUFFERING_RECOVERY && ((o.current = !0), (d.current = r !== i.KB.USER))
                    : p(0, 0);
            },
            [p],
        ),
        b = a.useCallback(
            (e, r) => {
                p(1e3 * e, Number.isFinite(r) ? 1e3 * r : 0);
            },
            [p],
        ),
        k = null != c.poster ? (0, t.jsx)("img", { src: c.poster, alt: "", style: l }) : null;
    return n
        ? (0, t.jsx)(a.Suspense, {
              fallback: k,
              children: (0, t.jsx)(u, { ...c, autoplay: s, onPlayerStateChange: h, onProgressUpdate: b }),
          })
        : k;
}
