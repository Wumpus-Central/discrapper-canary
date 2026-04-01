n.d(t, { A: () => S });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(773690),
    o = n(311907),
    u = n(827734),
    c = n(876230),
    d = n(106236),
    m = n(397927),
    p = n(775602),
    h = n(954571),
    f = n(768146),
    x = n(91034),
    E = n(710434),
    v = n(634156),
    g = n(652215),
    b = n(985018),
    y = n(246878);
function S(e) {
    let {
            videoRef: t,
            playerState: n,
            animSpring: a,
            visible: S,
            seekForwardEnabled: C,
            hideCaptionBtn: A,
            hideTranscriptBtn: N,
            hideSkipButtons: T,
            size: R,
            downloadUrl: w,
            downloadContentType: j,
            autoFocus: P = !1,
            keyDownHandlerRef: D,
            volume: M,
            muted: L,
            transcriptEnabled: k,
            captionEnabled: I,
            fullScreenEnabled: B,
            handlePlaybackBtnClick: U,
            handleTranscriptBtnClick: O,
            handleCaptionBtnClick: K,
            handleFullScreenBtnClick: _,
            handleSeekBackBtnClick: G,
            handleSeekForwardBtnClick: Q,
            handleControlBarPendingInteraction: $,
            onVolumeChange: F,
            onMutedChange: Y,
        } = e,
        z = (0, o.bG)([p.A], () => p.A.useReducedMotion),
        X = (0, o.bG)([p.A], () => p.A.keyboardModeEnabled),
        [W, H] = l.useState(L ? 0 : M),
        [V, J] = l.useState(!1),
        [Z, q] = l.useState(!1),
        [{ volumeAnimSpring: ee }, et] = (0, m.zhh)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        en = l.useRef(null),
        er = l.useCallback(() => {
            if (null == w) return;
            let e = j?.split("/");
            h.default.track(g.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(w, "_blank");
        }, [w, j]),
        el = l.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== W && H(e));
            },
            [t, W],
        ),
        ea = l.useCallback(() => {
            if (null != t.current)
                if (0 === W) {
                    let e = 0 === M ? 0.3 : M;
                    el(e), Y(!1), F(e);
                } else F(W), el(0), Y(!0);
        }, [t, W, el, M, Y, F]),
        ei = () => {
            J(!0);
        },
        es = () => {
            J(!1);
        },
        eo = l.useCallback(
            (e) => {
                switch (e.key) {
                    case c.TJ.PLAYBACK:
                        U();
                        break;
                    case c.TJ.SPACE:
                        X || (e.preventDefault(), U());
                        break;
                    case c.TJ.SEEK_BACK:
                        G();
                        break;
                    case c.TJ.SEEK_FORWARD:
                        Q();
                        break;
                    case c.TJ.CAPTION:
                        K();
                        break;
                    case c.TJ.FULLSCREEN:
                        _();
                        break;
                    case c.TJ.MUTE:
                        ea();
                }
            },
            [K, _, U, G, Q, ea, X],
        );
    l.useEffect(() => {
        P && null != en.current && en.current.focus();
    }, [P]),
        l.useEffect(
            () => (
                null != D && (D.current = eo),
                () => {
                    null != D && (D.current = null);
                }
            ),
            [eo, D],
        ),
        l.useEffect(
            () => (
                et({ volumeAnimSpring: Z || V ? 1 : 0, immediate: z }),
                () => {
                    ee.stop();
                }
            ),
            [Z, V, et, z, ee],
        );
    let eu = 0 === W ? m._RO : W < 0.5 ? m.S24 : m.HKD,
        { icon: ec, label: ed } = f.eC[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: y.X3,
                children: [
                    (0, r.jsx)(f.Ey, {
                        iconComponent: ec,
                        animationTime: a,
                        visible: S,
                        ariaLabel: ed,
                        tooltipLabel: ed,
                        shortcut: c.TJ.PLAYBACK,
                        onClick: U,
                        ref: en,
                        buttonSize: f.AU[R],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !T &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(f.Ey, {
                                    iconComponent: E.q,
                                    animationTime: a,
                                    visible: S,
                                    onClick: G,
                                    ariaLabel: b.intl.string(b.t.r9s3Uv),
                                    tooltipLabel: b.intl.string(b.t.r9s3Uv),
                                    shortcut: c.TJ.SEEK_BACK,
                                    buttonSize: f.AU[R],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(f.Ey, {
                                    iconComponent: v.i,
                                    animationTime: a,
                                    visible: S,
                                    onClick: Q,
                                    disabled: !C,
                                    ariaLabel: C ? b.intl.string(b.t.zWDcNP) : b.intl.string(b.t.xXh3yw),
                                    tooltipLabel: C ? b.intl.string(b.t.zWDcNP) : b.intl.string(b.t.xXh3yw),
                                    tooltipDelayMs: C ? f.do : 0,
                                    shortcut: c.TJ.SEEK_FORWARD,
                                    buttonSize: f.AU[R],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(s.animated.div, {
                className: i()(y.X3, y.L1),
                style: {
                    opacity: (0, s.to)([a.to({ range: [0, 1], output: [0, 1] })], (e) => `${S ? e : Math.pow(e, 8)}`),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: ei,
                        onMouseLeave: es,
                        onFocus: ei,
                        onBlur: es,
                        className: y.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(f.Ey, {
                                iconComponent: eu,
                                animationTime: a,
                                visible: S,
                                onClick: ea,
                                ariaLabel: b.intl.string(b.t["eIl+AK"]),
                                tooltipLabel: b.intl.string(b.t["eIl+AK"]),
                                shortcut: c.TJ.MUTE,
                                buttonSize: f.AU[R],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: y.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, s.to)(
                                        [ee.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${S ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, s.to)([ee.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(d.A, {
                                    mini: !0,
                                    value: W,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        el(e), F(e), Z && (q(!1), $(!1)), L && e > 0 ? Y(!1) : L || 0 !== e || Y(!0);
                                    },
                                    asValueChanges: (e) => {
                                        el(e), Z || (q(!0), $(!0));
                                    },
                                    fillStyles: { backgroundColor: u.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": b.intl.string(b.t["eIl+AK"]),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(f.QF, { current: t?.current?.currentTime, duration: t?.current?.duration }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(y.X3, y.ST),
                children: [
                    !N &&
                        (0, r.jsx)(f.Ey, {
                            iconComponent: m.ueQ,
                            animationTime: a,
                            visible: S,
                            onClick: O,
                            active: k && n !== c.Q6.ENDED,
                            disabled: n === c.Q6.ENDED,
                            ariaLabel: b.intl.string(b.t.KCzjTi),
                            tooltipLabel: b.intl.string(b.t.KCzjTi),
                            buttonSize: f.AU[R],
                            "data-testid": "discord-web-video-player-transcript-btn",
                        }),
                    !A &&
                        (0, r.jsx)(f.Ey, {
                            iconComponent: x.I,
                            animationTime: a,
                            visible: S,
                            active: I,
                            onClick: K,
                            ariaLabel: b.intl.string(b.t.bDSZO1),
                            tooltipLabel: b.intl.string(b.t.bDSZO1),
                            shortcut: c.TJ.CAPTION,
                            buttonSize: f.AU[R],
                            "data-testid": "discord-web-video-player-captions-btn",
                        }),
                    null != w &&
                        (0, r.jsx)(f.Ey, {
                            iconComponent: m.s3U,
                            animationTime: a,
                            visible: S,
                            onClick: er,
                            ariaLabel: b.intl.string(b.t["1WjMbC"]),
                            tooltipLabel: b.intl.string(b.t["1WjMbC"]),
                            buttonSize: f.AU[R],
                            "data-testid": "discord-web-video-player-download-btn",
                        }),
                    (0, r.jsx)(f.Ey, {
                        iconComponent: B ? m.z7w : m.TM1,
                        animationTime: a,
                        visible: S,
                        onClick: _,
                        ariaLabel: b.intl.string(b.t.vKZT5t),
                        tooltipLabel: b.intl.string(b.t.vKZT5t),
                        shortcut: c.TJ.FULLSCREEN,
                        buttonSize: f.AU[R],
                        "data-testid": "discord-web-video-player-fullscreen-btn",
                    }),
                ],
            }),
        ],
    });
}
