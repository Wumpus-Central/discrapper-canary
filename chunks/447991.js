var r = n(477900),
    l = n(582128),
    i = n(876230),
    a = n(625657),
    u = n(268218),
    o = n(584307),
    s = n(530567),
    d = n(792996),
    c = n(230972);
let f = l.lazy(() =>
        (0, u.sq)({
            createPromise: () =>
                Promise.all([n.e(985768), n.e(936090), n.e(791154), n.e(384498)]).then(n.bind(n, 973513)),
            webpackId: 973513,
            name: "DiscordVideoPlayer",
        }),
    ),
    p = { width: "100%", height: "100%", objectFit: "contain" };
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    onPlay: t,
                    autoplay: n,
                    playable: u = !0,
                    mimeType: m,
                    attachmentLayout: g,
                    onOpenInMediaViewer: h,
                    playerRef: b,
                    ...y
                } = e,
                C = "single" === g,
                v = "portrait" === y.orientation,
                x =
                    null == g
                        ? {}
                        : {
                              minWidth: 0,
                              minHeight: 0,
                              autoFitControls: !0,
                              hideSkipButtons: !C,
                              autoCompactTimeDisplay: !0,
                              autoHideVolumeSlider: !C || v,
                              floatingVolumeSlider: C && v,
                              hidePlaybackSpeedBtn: !!C && !!v && "inline",
                              controlBarConfig: s.Xq,
                              objectFit: "contain",
                          },
                S = l.useRef(!1),
                E = l.useRef(!1),
                k = l.useCallback(
                    (e, n) => {
                        S.current && ((S.current = !1), t?.(E.current, e, n));
                    },
                    [t],
                ),
                _ = l.useCallback(
                    (e, t) => {
                        e === i.Q6.PLAYING
                            ? t !== i.KB.BUFFERING_RECOVERY && ((S.current = !0), (E.current = t !== i.KB.USER))
                            : k(0, 0);
                    },
                    [k],
                ),
                j = l.useCallback(
                    (e, t) => {
                        k(1e3 * e, Number.isFinite(t) ? 1e3 * t : 0);
                    },
                    [k],
                ),
                [w] = l.useState(() => new o.A({ src: y.src ?? "", mimeType: m, fileSize: y.fileSizeBytes })),
                I = l.useRef(null),
                M = l.useRef(!1),
                P = l.useCallback(
                    (e) => {
                        ((M.current = e), e ? w.onDragStart(I.current?.currentTime ?? null) : w.onDragEnd());
                    },
                    [w],
                ),
                T = l.useRef(null),
                R = l.useCallback(
                    (e) => {
                        if ((T.current?.(), (T.current = null), (I.current = e), null == e)) return;
                        let t = { currentTarget: e },
                            n = {
                                waiting: () => w.onWaiting(t),
                                seeking: () => w.onSeeking(t),
                                seeked: () => w.onSeeked(t),
                                timeupdate: () => w.onTimeUpdate(t),
                                loadedmetadata: () => w.onLoadedMetadata(t),
                                playing: () => {
                                    (w.onPlaying(t), w.checkVideoDecodability(e, !0));
                                },
                                pause: () => {
                                    M.current || w.onPause(t);
                                },
                                error: () => {
                                    ((w.errorCode = e.error?.code ?? null),
                                        (w.errorMessage = e.error?.message ?? null),
                                        w.onError(t));
                                },
                            };
                        for (let [t, r] of Object.entries(n)) e.addEventListener(t, r);
                        T.current = () => {
                            for (let [t, r] of Object.entries(n)) e.removeEventListener(t, r);
                        };
                    },
                    [w],
                ),
                B = l.useRef(null),
                F = b ?? B,
                A = l.useRef(h);
            l.useLayoutEffect(() => {
                A.current = h;
            }, [h]);
            let D = null != h,
                V = l.useMemo(() => {
                    if (D)
                        return {
                            id: "open-in-media-viewer",
                            iconComponent: a.WindowTopOutlineIcon,
                            label: d.intl.string(c.default.EyuFlE),
                            onClick: () => {
                                F.current?.pause();
                                let e = I.current,
                                    t = null == e || e.ended ? 0 : e.currentTime;
                                A.current?.(Math.round(1e3 * t));
                            },
                            "data-testid": "discord-web-video-player-open-in-media-viewer-btn",
                        };
                }, [D, F]),
                L = null != y.poster ? (0, r.jsx)("img", { src: y.poster, alt: "", style: p }) : null;
            return u
                ? (0, r.jsx)(l.Suspense, {
                      fallback: L,
                      children: (0, r.jsx)(f, {
                          ...y,
                          ...x,
                          autoplay: n,
                          onPlayerStateChange: _,
                          onProgressUpdate: j,
                          onTimelineDragStateChange: P,
                          expandButton: V,
                          playerRef: F,
                          ref: R,
                      }),
                  })
                : L;
        },
    },
);
