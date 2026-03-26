n.d(t, { A: () => S });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(4208),
    o = n(311907),
    u = n(827734),
    c = n(876230),
    d = n(106236),
    m = n(397927),
    p = n(775602),
    E = n(406385),
    f = n(68507),
    h = n(475357),
    v = n(13229),
    x = n(985018),
    g = n(655833);
function S(e) {
    let {
            videoRef: t,
            playerState: n,
            animSpring: a,
            visible: S,
            seekForwardEnabled: A,
            hideCaptionBtn: b,
            hideTranscriptBtn: _,
            hideSkipButtons: C,
            size: y,
            volume: T,
            muted: N,
            transcriptEnabled: D,
            captionEnabled: I,
            fullScreenEnabled: R,
            handlePlaybackBtnClick: L,
            handleTranscriptBtnClick: w,
            handleCaptionBtnClick: M,
            handleFullScreenBtnClick: k,
            handleSeekBackBtnClick: P,
            handleSeekForwardBtnClick: j,
            handleControlBarPendingInteraction: O,
            onVolumeChange: U,
            onMutedChange: B,
        } = e,
        Q = (0, o.bG)([p.A], () => p.A.useReducedMotion),
        V = (0, o.bG)([p.A], () => p.A.keyboardModeEnabled),
        [K, F] = l.useState(N ? 0 : T),
        [$, Y] = l.useState(!1),
        [G, H] = l.useState(!1),
        [{ volumeAnimSpring: z }, W] = (0, m.zhh)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        q = l.useRef(null),
        X = l.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== K && F(e));
            },
            [t, K],
        ),
        J = l.useCallback(() => {
            null != t.current && (0 === K ? (X(T), B(!1), U(T)) : (U(K), X(0), B(!0)));
        }, [t, K, X, T, B, U]),
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
                        L();
                        break;
                    case c.TJ.SPACE:
                        V || (e.preventDefault(), L());
                        break;
                    case c.TJ.SEEK_BACK:
                        P();
                        break;
                    case c.TJ.SEEK_FORWARD:
                        j();
                        break;
                    case c.TJ.CAPTION:
                        M();
                        break;
                    case c.TJ.FULLSCREEN:
                        k();
                        break;
                    case c.TJ.MUTE:
                        J();
                }
            },
            [M, k, L, P, j, J, V],
        );
    l.useEffect(() => {
        null != q.current && q.current.focus();
    }, []),
        l.useEffect(
            () => (
                W({ volumeAnimSpring: G || $ ? 1 : 0, immediate: Q }),
                () => {
                    z.stop();
                }
            ),
            [G, $, W, Q, z],
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
    let en = 0 === K ? m._RO : K < 0.5 ? m.S24 : m.HKD,
        { icon: er, label: el } = E.eC[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: g.X3,
                children: [
                    (0, r.jsx)(E.Ey, {
                        iconComponent: er,
                        animationTime: a,
                        visible: S,
                        ariaLabel: el,
                        tooltipLabel: el,
                        shortcut: c.TJ.PLAYBACK,
                        onClick: L,
                        ref: q,
                        buttonSize: E.AU[y],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !C &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(E.Ey, {
                                    iconComponent: h.q,
                                    animationTime: a,
                                    visible: S,
                                    onClick: P,
                                    ariaLabel: x.intl.string(x.t.r9s3Uv),
                                    tooltipLabel: x.intl.string(x.t.r9s3Uv),
                                    shortcut: c.TJ.SEEK_BACK,
                                    buttonSize: E.AU[y],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(E.Ey, {
                                    iconComponent: v.i,
                                    animationTime: a,
                                    visible: S,
                                    onClick: j,
                                    disabled: !A,
                                    ariaLabel: A ? x.intl.string(x.t.zWDcNP) : x.intl.string(x.t.xXh3yw),
                                    tooltipLabel: A ? x.intl.string(x.t.zWDcNP) : x.intl.string(x.t.xXh3yw),
                                    tooltipDelayMs: A ? E.do : 0,
                                    shortcut: c.TJ.SEEK_FORWARD,
                                    buttonSize: E.AU[y],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(s.animated.div, {
                className: i()(g.X3, g.L1),
                style: {
                    opacity: (0, s.to)([a.to({ range: [0, 1], output: [0, 1] })], (e) => `${S ? e : Math.pow(e, 8)}`),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: Z,
                        onMouseLeave: ee,
                        onFocus: Z,
                        onBlur: ee,
                        className: g.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(E.Ey, {
                                iconComponent: en,
                                animationTime: a,
                                visible: S,
                                onClick: J,
                                ariaLabel: x.intl.string(x.t["eIl+AK"]),
                                tooltipLabel: x.intl.string(x.t["eIl+AK"]),
                                shortcut: c.TJ.MUTE,
                                buttonSize: E.AU[y],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: g.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, s.to)(
                                        [z.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${S ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, s.to)([z.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(d.A, {
                                    mini: !0,
                                    initialValue: K,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        X(e), U(e), G && (H(!1), O(!1)), N && e > 0 && B(!1);
                                    },
                                    asValueChanges: (e) => {
                                        X(e), G || (H(!0), O(!0));
                                    },
                                    fillStyles: { backgroundColor: u.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": x.intl.string(x.t["eIl+AK"]),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(E.QF, { current: t?.current?.currentTime, duration: t?.current?.duration }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(g.X3, g.ST),
                children: [
                    !_ &&
                        (0, r.jsx)(E.Ey, {
                            iconComponent: m.ueQ,
                            animationTime: a,
                            visible: S,
                            onClick: w,
                            active: D && n !== c.Q6.ENDED,
                            disabled: n === c.Q6.ENDED,
                            ariaLabel: x.intl.string(x.t.KCzjTi),
                            tooltipLabel: x.intl.string(x.t.KCzjTi),
                            buttonSize: E.AU[y],
                            "data-testid": "discord-web-video-player-transcript-btn",
                        }),
                    !b &&
                        (0, r.jsx)(E.Ey, {
                            iconComponent: f.I,
                            animationTime: a,
                            visible: S,
                            active: I,
                            onClick: M,
                            ariaLabel: x.intl.string(x.t.bDSZO1),
                            tooltipLabel: x.intl.string(x.t.bDSZO1),
                            shortcut: c.TJ.CAPTION,
                            buttonSize: E.AU[y],
                            "data-testid": "discord-web-video-player-captions-btn",
                        }),
                    (0, r.jsx)(E.Ey, {
                        iconComponent: R ? m.z7w : m.TM1,
                        animationTime: a,
                        visible: S,
                        onClick: k,
                        ariaLabel: x.intl.string(x.t.vKZT5t),
                        tooltipLabel: x.intl.string(x.t.vKZT5t),
                        shortcut: c.TJ.FULLSCREEN,
                        buttonSize: E.AU[y],
                        "data-testid": "discord-web-video-player-fullscreen-btn",
                    }),
                ],
            }),
        ],
    });
}
