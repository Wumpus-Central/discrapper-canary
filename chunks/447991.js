var r = n(477900),
    l = n(582128),
    i = n(876230),
    a = n(268218),
    o = n(584307),
    u = n(530567);
let s = l.lazy(() =>
        (0, a.sq)({
            createPromise: () =>
                Promise.all([n.e(985768), n.e(936090), n.e(791154), n.e(133179), n.e(555793)]).then(n.bind(n, 955368)),
            webpackId: 955368,
            name: "DiscordVideoPlayer",
        }),
    ),
    d = { width: "100%", height: "100%", objectFit: "contain" };
n.d(
    t,
    {},
    {
        A: function (e) {
            let { onPlay: t, autoplay: n, playable: a = !0, mimeType: c, attachmentLayout: f, ...m } = e,
                p = "single" === f,
                g = "portrait" === m.orientation,
                h =
                    null == f
                        ? {}
                        : {
                              minWidth: 0,
                              minHeight: 0,
                              autoFitControls: !0,
                              hideSkipButtons: !p,
                              autoCompactTimeDisplay: !0,
                              autoHideVolumeSlider: !p || g,
                              floatingVolumeSlider: p && g,
                              hidePlaybackSpeedBtn: !!p && !!g && "inline",
                              controlBarConfig: u.Xq,
                              objectFit: "contain",
                          },
                b = l.useRef(!1),
                C = l.useRef(!1),
                y = l.useCallback(
                    (e, n) => {
                        b.current && ((b.current = !1), t?.(C.current, e, n));
                    },
                    [t],
                ),
                S = l.useCallback(
                    (e, t) => {
                        e === i.Q6.PLAYING
                            ? t !== i.KB.BUFFERING_RECOVERY && ((b.current = !0), (C.current = t !== i.KB.USER))
                            : y(0, 0);
                    },
                    [y],
                ),
                x = l.useCallback(
                    (e, t) => {
                        y(1e3 * e, Number.isFinite(t) ? 1e3 * t : 0);
                    },
                    [y],
                ),
                [k] = l.useState(() => new o.A({ src: m.src ?? "", mimeType: c, fileSize: m.fileSizeBytes })),
                v = l.useRef(null),
                E = l.useRef(!1),
                _ = l.useCallback(
                    (e) => {
                        ((E.current = e), e ? k.onDragStart(v.current?.currentTime ?? null) : k.onDragEnd());
                    },
                    [k],
                ),
                j = l.useRef(null),
                P = l.useCallback(
                    (e) => {
                        if ((j.current?.(), (j.current = null), (v.current = e), null == e)) return;
                        let t = { currentTarget: e },
                            n = {
                                waiting: () => k.onWaiting(t),
                                seeking: () => k.onSeeking(t),
                                seeked: () => k.onSeeked(t),
                                timeupdate: () => k.onTimeUpdate(t),
                                loadedmetadata: () => k.onLoadedMetadata(t),
                                playing: () => {
                                    (k.onPlaying(t), k.checkVideoDecodability(e, !0));
                                },
                                pause: () => {
                                    E.current || k.onPause(t);
                                },
                                error: () => {
                                    ((k.errorCode = e.error?.code ?? null),
                                        (k.errorMessage = e.error?.message ?? null),
                                        k.onError(t));
                                },
                            };
                        for (let [t, r] of Object.entries(n)) e.addEventListener(t, r);
                        j.current = () => {
                            for (let [t, r] of Object.entries(n)) e.removeEventListener(t, r);
                        };
                    },
                    [k],
                ),
                I = null != m.poster ? (0, r.jsx)("img", { src: m.poster, alt: "", style: d }) : null;
            return a
                ? (0, r.jsx)(l.Suspense, {
                      fallback: I,
                      children: (0, r.jsx)(s, {
                          ...m,
                          ...h,
                          autoplay: n,
                          onPlayerStateChange: S,
                          onProgressUpdate: x,
                          onTimelineDragStateChange: _,
                          ref: P,
                      }),
                  })
                : I;
        },
    },
);
