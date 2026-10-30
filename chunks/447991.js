r.d(t, { A: () => d });
var n = r(477900),
    l = r(582128),
    a = r(876230),
    i = r(268218),
    u = r(584307);
let o = l.lazy(() =>
        (0, i.sq)({
            createPromise: () => Promise.all([r.e("216870"), r.e("133179"), r.e("334127")]).then(r.bind(r, 266546)),
            webpackId: 266546,
            name: "DiscordVideoPlayer",
        }),
    ),
    s = { width: "100%", height: "100%", objectFit: "contain" };
function d(e) {
    let { onPlay: t, autoplay: r, playable: i = !0, mimeType: d, ...c } = e,
        f = l.useRef(!1),
        m = l.useRef(!1),
        p = l.useCallback(
            (e, r) => {
                f.current && ((f.current = !1), t?.(m.current, e, r));
            },
            [t],
        ),
        g = l.useCallback(
            (e, t) => {
                e === a.Q6.PLAYING
                    ? t !== a.KB.BUFFERING_RECOVERY && ((f.current = !0), (m.current = t !== a.KB.USER))
                    : p(0, 0);
            },
            [p],
        ),
        h = l.useCallback(
            (e, t) => {
                p(1e3 * e, Number.isFinite(t) ? 1e3 * t : 0);
            },
            [p],
        ),
        [b] = l.useState(() => new u.A({ src: c.src ?? "", mimeType: d, fileSize: c.fileSizeBytes })),
        x = l.useRef(null),
        C = l.useRef(!1),
        y = l.useCallback(
            (e) => {
                ((C.current = e), e ? b.onDragStart(x.current?.currentTime ?? null) : b.onDragEnd());
            },
            [b],
        ),
        v = l.useRef(null),
        E = l.useCallback(
            (e) => {
                if ((v.current?.(), (v.current = null), (x.current = e), null == e)) return;
                let t = { currentTarget: e },
                    r = {
                        waiting: () => b.onWaiting(t),
                        seeking: () => b.onSeeking(t),
                        seeked: () => b.onSeeked(t),
                        timeupdate: () => b.onTimeUpdate(t),
                        loadedmetadata: () => b.onLoadedMetadata(t),
                        playing: () => {
                            (b.onPlaying(t), b.checkVideoDecodability(e, !0));
                        },
                        pause: () => {
                            C.current || b.onPause(t);
                        },
                        error: () => {
                            ((b.errorCode = e.error?.code ?? null),
                                (b.errorMessage = e.error?.message ?? null),
                                b.onError(t));
                        },
                    };
                for (let [t, n] of Object.entries(r)) e.addEventListener(t, n);
                v.current = () => {
                    for (let [t, n] of Object.entries(r)) e.removeEventListener(t, n);
                };
            },
            [b],
        ),
        S = null != c.poster ? (0, n.jsx)("img", { src: c.poster, alt: "", style: s }) : null;
    return i
        ? (0, n.jsx)(l.Suspense, {
              fallback: S,
              children: (0, n.jsx)(o, {
                  ...c,
                  autoplay: r,
                  onPlayerStateChange: g,
                  onProgressUpdate: h,
                  onTimelineDragStateChange: y,
                  ref: E,
              }),
          })
        : S;
}
