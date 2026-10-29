t.d(r, { A: () => c });
var n = t(477900),
    a = t(582128),
    s = t(876230),
    i = t(268218),
    l = t(584307);
let u = a.lazy(() =>
        (0, i.sq)({
            createPromise: () => Promise.all([t.e("216870"), t.e("133179"), t.e("334127")]).then(t.bind(t, 266546)),
            webpackId: 266546,
            name: "DiscordVideoPlayer",
        }),
    ),
    o = { width: "100%", height: "100%", objectFit: "contain" };
function c(e) {
    let { onPlay: r, autoplay: t, playable: i = !0, mimeType: c, ...d } = e,
        f = a.useRef(!1),
        g = a.useRef(!1),
        p = a.useCallback(
            (e, t) => {
                f.current && ((f.current = !1), r?.(g.current, e, t));
            },
            [r],
        ),
        k = a.useCallback(
            (e, r) => {
                e === s.Q6.PLAYING
                    ? r !== s.KB.BUFFERING_RECOVERY && ((f.current = !0), (g.current = r !== s.KB.USER))
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
        [m] = a.useState(() => new l.A({ src: d.src ?? "", mimeType: c, fileSize: d.fileSizeBytes })),
        h = a.useRef(null),
        C = a.useRef(!1),
        y = a.useCallback(
            (e) => {
                ((C.current = e), e ? m.onDragStart(h.current?.currentTime ?? null) : m.onDragEnd());
            },
            [m],
        ),
        P = a.useRef(null),
        S = a.useCallback(
            (e) => {
                if ((P.current?.(), (P.current = null), (h.current = e), null == e)) return;
                let r = { currentTarget: e },
                    t = {
                        waiting: () => m.onWaiting(r),
                        seeking: () => m.onSeeking(r),
                        seeked: () => m.onSeeked(r),
                        timeupdate: () => m.onTimeUpdate(r),
                        loadedmetadata: () => m.onLoadedMetadata(r),
                        playing: () => {
                            (m.onPlaying(r), m.checkVideoDecodability(e, !0));
                        },
                        pause: () => {
                            C.current || m.onPause(r);
                        },
                        error: () => {
                            ((m.errorCode = e.error?.code ?? null),
                                (m.errorMessage = e.error?.message ?? null),
                                m.onError(r));
                        },
                    };
                for (let [r, n] of Object.entries(t)) e.addEventListener(r, n);
                P.current = () => {
                    for (let [r, n] of Object.entries(t)) e.removeEventListener(r, n);
                };
            },
            [m],
        ),
        R = null != d.poster ? (0, n.jsx)("img", { src: d.poster, alt: "", style: o }) : null;
    return i
        ? (0, n.jsx)(a.Suspense, {
              fallback: R,
              children: (0, n.jsx)(u, {
                  ...d,
                  autoplay: t,
                  onPlayerStateChange: k,
                  onProgressUpdate: b,
                  onTimelineDragStateChange: y,
                  ref: S,
              }),
          })
        : R;
}
