n.d(t, { A: () => C });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(522160),
    o = n(311907),
    u = n(827734),
    c = n(876230),
    d = n(106236),
    m = n(397927),
    p = n(775602),
    E = n(406385),
    f = n(68507),
    v = n(475357),
    h = n(13229),
    g = n(985018),
    S = n(681636);
function C(e) {
    let {
            videoRef: t,
            playerState: n,
            animSpring: i,
            visible: C,
            seekForwardEnabled: A,
            hideCaptionBtn: x,
            hideTranscriptBtn: _,
            hideSkipButtons: b,
            size: T,
            volume: y,
            muted: N,
            transcriptEnabled: D,
            captionEnabled: L,
            fullScreenEnabled: I,
            handlePlaybackBtnClick: j,
            handleTranscriptBtnClick: R,
            handleCaptionBtnClick: k,
            handleFullScreenBtnClick: w,
            handleSeekBackBtnClick: M,
            handleSeekForwardBtnClick: O,
            handleControlBarPendingInteraction: P,
            onVolumeChange: V,
            onMutedChange: Q,
        } = e,
        U = (0, o.bG)([p.A], () => p.A.useReducedMotion),
        B = (0, o.bG)([p.A], () => p.A.keyboardModeEnabled),
        [F, G] = l.useState(N ? 0 : y),
        [$, Y] = l.useState(!1),
        [K, H] = l.useState(!1),
        [{ volumeAnimSpring: z }, W] = (0, m.zhh)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        q = l.useRef(null),
        X = l.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== F && G(e));
            },
            [t, F],
        ),
        J = l.useCallback(() => {
            null != t.current && (0 === F ? (X(y), Q(!1), V(y)) : (V(F), X(0), Q(!0)));
        }, [t, F, X, y, Q, V]),
        Z = () => {
            Y(!0);
        },
        ee = () => {
            Y(!1);
        },
        et = l.useCallback(
            (e) => {
                switch (e.key) {
                    case c.TJ.PLAYBACK:
                        j();
                        break;
                    case c.TJ.SPACE:
                        B || (e.preventDefault(), j());
                        break;
                    case c.TJ.SEEK_BACK:
                        M();
                        break;
                    case c.TJ.SEEK_FORWARD:
                        O();
                        break;
                    case c.TJ.CAPTION:
                        k();
                        break;
                    case c.TJ.FULLSCREEN:
                        w();
                        break;
                    case c.TJ.MUTE:
                        J();
                }
            },
            [k, w, j, M, O, J, B],
        );
    l.useEffect(() => {
        null != q.current && q.current.focus();
    }, []),
        l.useEffect(
            () => (
                W({ volumeAnimSpring: K || $ ? 1 : 0, immediate: U }),
                () => {
                    z.stop();
                }
            ),
            [K, $, W, U, z],
        ),
        l.useEffect(
            () => (
                window.addEventListener("keydown", et),
                () => {
                    window.removeEventListener("keydown", et);
                }
            ),
            [et],
        );
    let en = 0 === F ? m._RO : F < 0.5 ? m.S24 : m.HKD,
        { icon: er, label: el } = E.eC[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: S.X3,
                children: [
                    (0, r.jsx)(E.Ey, {
                        iconComponent: er,
                        animationTime: i,
                        visible: C,
                        ariaLabel: el,
                        tooltipLabel: el,
                        shortcut: c.TJ.PLAYBACK,
                        onClick: j,
                        ref: q,
                        buttonSize: E.AU[T],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !b &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(E.Ey, {
                                    iconComponent: v.q,
                                    animationTime: i,
                                    visible: C,
                                    onClick: M,
                                    ariaLabel: g.intl.string(g.t.r9s3Uv),
                                    tooltipLabel: g.intl.string(g.t.r9s3Uv),
                                    shortcut: c.TJ.SEEK_BACK,
                                    buttonSize: E.AU[T],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(E.Ey, {
                                    iconComponent: h.i,
                                    animationTime: i,
                                    visible: C,
                                    onClick: O,
                                    disabled: !A,
                                    ariaLabel: A ? g.intl.string(g.t.zWDcNP) : g.intl.string(g.t.xXh3yw),
                                    tooltipLabel: A ? g.intl.string(g.t.zWDcNP) : g.intl.string(g.t.xXh3yw),
                                    tooltipDelayMs: A ? E.do : 0,
                                    shortcut: c.TJ.SEEK_FORWARD,
                                    buttonSize: E.AU[T],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(a.animated.div, {
                className: s()(S.X3, S.L1),
                style: {
                    opacity: (0, a.to)([i.to({ range: [0, 1], output: [0, 1] })], (e) => `${C ? e : Math.pow(e, 8)}`),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: Z,
                        onMouseLeave: ee,
                        onFocus: Z,
                        onBlur: ee,
                        className: S.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(E.Ey, {
                                iconComponent: en,
                                animationTime: i,
                                visible: C,
                                onClick: J,
                                ariaLabel: g.intl.string(g.t["eIl+AK"]),
                                tooltipLabel: g.intl.string(g.t["eIl+AK"]),
                                shortcut: c.TJ.MUTE,
                                buttonSize: E.AU[T],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: S.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, a.to)(
                                        [z.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${C ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, a.to)([z.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(d.A, {
                                    mini: !0,
                                    initialValue: F,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        X(e), V(e), K && (H(!1), P(!1)), N && e > 0 && Q(!1);
                                    },
                                    asValueChanges: (e) => {
                                        X(e), K || (H(!0), P(!0));
                                    },
                                    fillStyles: { backgroundColor: u.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": g.intl.string(g.t["eIl+AK"]),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(E.QF, { current: t?.current?.currentTime, duration: t?.current?.duration }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: s()(S.X3, S.ST),
                children: [
                    !_ &&
                        (0, r.jsx)(E.Ey, {
                            iconComponent: m.ueQ,
                            animationTime: i,
                            visible: C,
                            onClick: R,
                            active: D && n !== c.Q6.ENDED,
                            disabled: n === c.Q6.ENDED,
                            ariaLabel: g.intl.string(g.t.KCzjTi),
                            tooltipLabel: g.intl.string(g.t.KCzjTi),
                            buttonSize: E.AU[T],
                            "data-testid": "discord-web-video-player-transcript-btn",
                        }),
                    !x &&
                        (0, r.jsx)(E.Ey, {
                            iconComponent: f.I,
                            animationTime: i,
                            visible: C,
                            active: L,
                            onClick: k,
                            ariaLabel: g.intl.string(g.t.bDSZO1),
                            tooltipLabel: g.intl.string(g.t.bDSZO1),
                            shortcut: c.TJ.CAPTION,
                            buttonSize: E.AU[T],
                            "data-testid": "discord-web-video-player-captions-btn",
                        }),
                    (0, r.jsx)(E.Ey, {
                        iconComponent: I ? m.z7w : m.TM1,
                        animationTime: i,
                        visible: C,
                        onClick: w,
                        ariaLabel: g.intl.string(g.t.vKZT5t),
                        tooltipLabel: g.intl.string(g.t.vKZT5t),
                        shortcut: c.TJ.FULLSCREEN,
                        buttonSize: E.AU[T],
                        "data-testid": "discord-web-video-player-fullscreen-btn",
                    }),
                ],
            }),
        ],
    });
}
