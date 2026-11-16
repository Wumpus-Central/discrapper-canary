var r = n(477900),
    l = n(582128),
    i = n(876230),
    a = n(625657),
    u = n(268218),
    o = n(584307),
    s = n(530567),
    d = n(792996),
    c = n(302034);
let f = l.lazy(() =>
        (0, u.sq)({
            createPromise: () =>
                Promise.all([n.e(985768), n.e(936090), n.e(791154), n.e(133179), n.e(555793)]).then(n.bind(n, 955368)),
            webpackId: 955368,
            name: "DiscordVideoPlayer",
        }),
    ),
    m = { width: "100%", height: "100%", objectFit: "contain" };
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    onPlay: t,
                    autoplay: n,
                    playable: u = !0,
                    mimeType: p,
                    attachmentLayout: g,
                    onOpenInMediaViewer: h,
                    ...b
                } = e,
                y = "single" === g,
                C = "portrait" === b.orientation,
                v =
                    null == g
                        ? {}
                        : {
                              minWidth: 0,
                              minHeight: 0,
                              autoFitControls: !0,
                              hideSkipButtons: !y,
                              autoCompactTimeDisplay: !0,
                              autoHideVolumeSlider: !y || C,
                              floatingVolumeSlider: y && C,
                              hidePlaybackSpeedBtn: !!y && !!C && "inline",
                              controlBarConfig: s.Xq,
                              objectFit: "contain",
                          },
                x = l.useRef(!1),
                S = l.useRef(!1),
                E = l.useCallback(
                    (e, n) => {
                        x.current && ((x.current = !1), t?.(S.current, e, n));
                    },
                    [t],
                ),
                k = l.useCallback(
                    (e, t) => {
                        e === i.Q6.PLAYING
                            ? t !== i.KB.BUFFERING_RECOVERY && ((x.current = !0), (S.current = t !== i.KB.USER))
                            : E(0, 0);
                    },
                    [E],
                ),
                _ = l.useCallback(
                    (e, t) => {
                        E(1e3 * e, Number.isFinite(t) ? 1e3 * t : 0);
                    },
                    [E],
                ),
                [j] = l.useState(() => new o.A({ src: b.src ?? "", mimeType: p, fileSize: b.fileSizeBytes })),
                w = l.useRef(null),
                I = l.useRef(!1),
                M = l.useCallback(
                    (e) => {
                        ((I.current = e), e ? j.onDragStart(w.current?.currentTime ?? null) : j.onDragEnd());
                    },
                    [j],
                ),
                P = l.useRef(null),
                T = l.useCallback(
                    (e) => {
                        if ((P.current?.(), (P.current = null), (w.current = e), null == e)) return;
                        let t = { currentTarget: e },
                            n = {
                                waiting: () => j.onWaiting(t),
                                seeking: () => j.onSeeking(t),
                                seeked: () => j.onSeeked(t),
                                timeupdate: () => j.onTimeUpdate(t),
                                loadedmetadata: () => j.onLoadedMetadata(t),
                                playing: () => {
                                    (j.onPlaying(t), j.checkVideoDecodability(e, !0));
                                },
                                pause: () => {
                                    I.current || j.onPause(t);
                                },
                                error: () => {
                                    ((j.errorCode = e.error?.code ?? null),
                                        (j.errorMessage = e.error?.message ?? null),
                                        j.onError(t));
                                },
                            };
                        for (let [t, r] of Object.entries(n)) e.addEventListener(t, r);
                        P.current = () => {
                            for (let [t, r] of Object.entries(n)) e.removeEventListener(t, r);
                        };
                    },
                    [j],
                ),
                B = l.useRef(null),
                R = l.useRef(h);
            l.useLayoutEffect(() => {
                R.current = h;
            }, [h]);
            let F = null != h,
                A = l.useMemo(() => {
                    if (F)
                        return {
                            id: "open-in-media-viewer",
                            iconComponent: a.WindowTopOutlineIcon,
                            label: d.intl.string(c.default.EyuFlE),
                            onClick: () => {
                                B.current?.pause();
                                let e = w.current,
                                    t = null == e || e.ended ? 0 : e.currentTime;
                                R.current?.(Math.round(1e3 * t));
                            },
                            "data-testid": "discord-web-video-player-open-in-media-viewer-btn",
                        };
                }, [F]),
                D = null != b.poster ? (0, r.jsx)("img", { src: b.poster, alt: "", style: m }) : null;
            return u
                ? (0, r.jsx)(l.Suspense, {
                      fallback: D,
                      children: (0, r.jsx)(f, {
                          ...b,
                          ...v,
                          autoplay: n,
                          onPlayerStateChange: k,
                          onProgressUpdate: _,
                          onTimelineDragStateChange: M,
                          expandButton: A,
                          playerRef: B,
                          ref: T,
                      }),
                  })
                : D;
        },
    },
);
