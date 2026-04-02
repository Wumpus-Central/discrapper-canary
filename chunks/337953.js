n.d(t, { A: () => C });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(687498),
    o = n(311907),
    u = n(827734),
    c = n(876230),
    d = n(106236),
    m = n(397927),
    p = n(775602),
    f = n(954571),
    h = n(768146),
    x = n(91034),
    E = n(710434),
    v = n(634156),
    g = n(652215),
    b = n(961432),
    y = n(985018),
    S = n(246878);
function C(e) {
    let {
            videoRef: t,
            playerState: n,
            animSpring: a,
            visible: C,
            seekForwardEnabled: A,
            hideCaptionBtn: N,
            hideTranscriptBtn: R,
            hideSkipButtons: T,
            size: w,
            downloadUrl: j,
            downloadContentType: L,
            autoFocus: P = !1,
            keyDownHandlerRef: D,
            volume: M,
            muted: k,
            transcriptEnabled: I,
            captionEnabled: B,
            fullScreenEnabled: U,
            handlePlaybackBtnClick: G,
            handleTranscriptBtnClick: O,
            handleCaptionBtnClick: _,
            handleFullScreenBtnClick: Q,
            handleSeekBackBtnClick: K,
            handleSeekForwardBtnClick: F,
            handleControlBarPendingInteraction: $,
            onVolumeChange: Y,
            onMutedChange: z,
        } = e,
        X = (0, o.bG)([p.A], () => p.A.useReducedMotion),
        V = (0, o.bG)([p.A], () => p.A.keyboardModeEnabled),
        [W, H] = l.useState(k ? 0 : M),
        [J, Z] = l.useState(!1),
        [q, ee] = l.useState(!1),
        [{ volumeAnimSpring: et }, en] = (0, m.zhh)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        er = l.useRef(null),
        el = l.useCallback(() => {
            if (null == j) return;
            let e = L?.split("/");
            f.default.track(g.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(j, "_blank");
        }, [j, L]),
        ea = l.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== W && H(e));
            },
            [t, W],
        ),
        ei = l.useCallback(() => {
            if (null != t.current)
                if (0 === W) {
                    let e = 0 === M ? 0.3 : M;
                    ea(e), z(!1), Y(e);
                } else Y(W), ea(0), z(!0);
        }, [t, W, ea, M, z, Y]),
        es = () => {
            Z(!0);
        },
        eo = () => {
            Z(!1);
        },
        eu = l.useCallback(
            (e) => {
                switch (e.key) {
                    case c.TJ.PLAYBACK:
                        G();
                        break;
                    case c.TJ.SPACE:
                        V || (e.preventDefault(), G());
                        break;
                    case c.TJ.SEEK_BACK:
                        K();
                        break;
                    case c.TJ.SEEK_FORWARD:
                        F();
                        break;
                    case c.TJ.CAPTION:
                        _();
                        break;
                    case c.TJ.FULLSCREEN:
                        Q();
                        break;
                    case c.TJ.MUTE:
                        ei();
                }
            },
            [_, Q, G, K, F, ei, V],
        );
    l.useEffect(() => {
        P && null != er.current && er.current.focus();
    }, [P]),
        l.useEffect(
            () => (
                null != D && (D.current = eu),
                () => {
                    null != D && (D.current = null);
                }
            ),
            [eu, D],
        ),
        l.useEffect(
            () => (
                en({ volumeAnimSpring: q || J ? 1 : 0, immediate: X }),
                () => {
                    et.stop();
                }
            ),
            [q, J, en, X, et],
        );
    let ec = 0 === W ? m._RO : W < 0.5 ? m.S24 : m.HKD,
        { icon: ed, label: em } = h.eC[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: S.X3,
                children: [
                    (0, r.jsx)(h.Ey, {
                        iconComponent: ed,
                        animationTime: a,
                        visible: C,
                        ariaLabel: em,
                        tooltipLabel: em,
                        shortcut: c.TJ.PLAYBACK,
                        onClick: G,
                        ref: er,
                        buttonSize: h.AU[w],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !T &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(h.Ey, {
                                    iconComponent: E.q,
                                    animationTime: a,
                                    visible: C,
                                    onClick: K,
                                    ariaLabel: y.intl.string(b.default["dRVF+Z"]),
                                    tooltipLabel: y.intl.string(b.default["dRVF+Z"]),
                                    shortcut: c.TJ.SEEK_BACK,
                                    buttonSize: h.AU[w],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(h.Ey, {
                                    iconComponent: v.i,
                                    animationTime: a,
                                    visible: C,
                                    onClick: F,
                                    disabled: !A,
                                    ariaLabel: A ? y.intl.string(b.default.yV2FLL) : y.intl.string(b.default.YWbiPw),
                                    tooltipLabel: A ? y.intl.string(b.default.yV2FLL) : y.intl.string(b.default.YWbiPw),
                                    tooltipDelayMs: A ? h.do : 0,
                                    shortcut: c.TJ.SEEK_FORWARD,
                                    buttonSize: h.AU[w],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(s.animated.div, {
                className: i()(S.X3, S.L1),
                style: {
                    opacity: (0, s.to)([a.to({ range: [0, 1], output: [0, 1] })], (e) => `${C ? e : Math.pow(e, 8)}`),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: es,
                        onMouseLeave: eo,
                        onFocus: es,
                        onBlur: eo,
                        className: S.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(h.Ey, {
                                iconComponent: ec,
                                animationTime: a,
                                visible: C,
                                onClick: ei,
                                ariaLabel: y.intl.string(b.default.XiLvuG),
                                tooltipLabel: y.intl.string(b.default.XiLvuG),
                                shortcut: c.TJ.MUTE,
                                buttonSize: h.AU[w],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: S.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, s.to)(
                                        [et.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${C ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, s.to)([et.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(d.A, {
                                    mini: !0,
                                    value: W,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        ea(e), Y(e), q && (ee(!1), $(!1)), k && e > 0 ? z(!1) : k || 0 !== e || z(!0);
                                    },
                                    asValueChanges: (e) => {
                                        ea(e), q || (ee(!0), $(!0));
                                    },
                                    fillStyles: { backgroundColor: u.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": y.intl.string(b.default.XiLvuG),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(h.QF, { current: t?.current?.currentTime, duration: t?.current?.duration }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(S.X3, S.ST),
                children: [
                    !R &&
                        (0, r.jsx)(h.Ey, {
                            iconComponent: m.ueQ,
                            animationTime: a,
                            visible: C,
                            onClick: O,
                            active: I && n !== c.Q6.ENDED,
                            disabled: n === c.Q6.ENDED,
                            ariaLabel: y.intl.string(b.default["6EjGUv"]),
                            tooltipLabel: y.intl.string(b.default["6EjGUv"]),
                            buttonSize: h.AU[w],
                            "data-testid": "discord-web-video-player-transcript-btn",
                        }),
                    !N &&
                        (0, r.jsx)(h.Ey, {
                            iconComponent: x.I,
                            animationTime: a,
                            visible: C,
                            active: B,
                            onClick: _,
                            ariaLabel: y.intl.string(b.default["0DbPcL"]),
                            tooltipLabel: y.intl.string(b.default["0DbPcL"]),
                            shortcut: c.TJ.CAPTION,
                            buttonSize: h.AU[w],
                            "data-testid": "discord-web-video-player-captions-btn",
                        }),
                    null != j &&
                        (0, r.jsx)(h.Ey, {
                            iconComponent: m.s3U,
                            animationTime: a,
                            visible: C,
                            onClick: el,
                            ariaLabel: y.intl.string(y.t["1WjMbC"]),
                            tooltipLabel: y.intl.string(y.t["1WjMbC"]),
                            buttonSize: h.AU[w],
                            "data-testid": "discord-web-video-player-download-btn",
                        }),
                    (0, r.jsx)(h.Ey, {
                        iconComponent: U ? m.z7w : m.TM1,
                        animationTime: a,
                        visible: C,
                        onClick: Q,
                        ariaLabel: y.intl.string(b.default.z9Cnzv),
                        tooltipLabel: y.intl.string(b.default.z9Cnzv),
                        shortcut: c.TJ.FULLSCREEN,
                        buttonSize: h.AU[w],
                        "data-testid": "discord-web-video-player-fullscreen-btn",
                    }),
                ],
            }),
        ],
    });
}
