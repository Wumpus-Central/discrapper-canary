"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(522160),
    l = n(311907),
    u = n(827734),
    c = n(876230),
    d = n(106236),
    _ = n(397927),
    f = n(775602),
    h = n(406385),
    p = n(68507),
    g = n(475357),
    E = n(13229),
    A = n(985018),
    I = n(681636);
function T(e) {
    let {
            videoRef: t,
            playerState: n,
            animSpring: a,
            visible: T,
            seekForwardEnabled: y,
            hideCaptionBtn: S,
            hideTranscriptBtn: v,
            hideSkipButtons: C,
            size: b,
            volume: N,
            muted: R,
            transcriptEnabled: O,
            captionEnabled: D,
            fullScreenEnabled: L,
            handlePlaybackBtnClick: w,
            handleTranscriptBtnClick: x,
            handleCaptionBtnClick: P,
            handleFullScreenBtnClick: M,
            handleSeekBackBtnClick: k,
            handleSeekForwardBtnClick: U,
            handleControlBarPendingInteraction: G,
            onVolumeChange: F,
            onMutedChange: V,
        } = e,
        B = (0, l.bG)([f.A], () => f.A.useReducedMotion),
        j = (0, l.bG)([f.A], () => f.A.keyboardModeEnabled),
        [H, Y] = i.useState(R ? 0 : N),
        [W, K] = i.useState(!1),
        [$, z] = i.useState(!1),
        [{ volumeAnimSpring: q }, X] = (0, _.zhh)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        Z = i.useRef(null),
        Q = i.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== H && Y(e));
            },
            [t, H],
        ),
        J = (e) => {
            Q(e), $ || (z(!0), G(!0));
        },
        ee = (e) => {
            Q(e), F(e), $ && (z(!1), G(!1)), R && e > 0 && V(!1);
        },
        et = i.useCallback(() => {
            null != t.current && (0 === H ? (Q(N), V(!1), F(N)) : (F(H), Q(0), V(!0)));
        }, [t, H, Q, N, V, F]),
        en = () => {
            K(!0);
        },
        er = () => {
            K(!1);
        },
        ei = i.useCallback(
            (e) => {
                switch (e.key) {
                    case c.TJ.PLAYBACK:
                        w();
                        break;
                    case c.TJ.SPACE:
                        j || (e.preventDefault(), w());
                        break;
                    case c.TJ.SEEK_BACK:
                        k();
                        break;
                    case c.TJ.SEEK_FORWARD:
                        U();
                        break;
                    case c.TJ.CAPTION:
                        P();
                        break;
                    case c.TJ.FULLSCREEN:
                        M();
                        break;
                    case c.TJ.MUTE:
                        et();
                }
            },
            [P, M, w, k, U, et, j],
        );
    i.useEffect(() => {
        null != Z.current && Z.current.focus();
    }, []),
        i.useEffect(
            () => (
                X({ volumeAnimSpring: $ || W ? 1 : 0, immediate: B }),
                () => {
                    q.stop();
                }
            ),
            [$, W, X, B, q],
        ),
        i.useEffect(
            () => (
                window.addEventListener("keydown", ei),
                () => {
                    window.removeEventListener("keydown", ei);
                }
            ),
            [ei],
        );
    let ea = 0 === H ? _._RO : H < 0.5 ? _.S24 : _.HKD,
        { icon: es, label: eo } = h.eC[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: I.X3,
                children: [
                    (0, r.jsx)(h.Ey, {
                        iconComponent: es,
                        animationTime: a,
                        visible: T,
                        ariaLabel: eo,
                        tooltipLabel: eo,
                        shortcut: c.TJ.PLAYBACK,
                        onClick: w,
                        ref: Z,
                        buttonSize: h.AU[b],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !C &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(h.Ey, {
                                    iconComponent: g.q,
                                    animationTime: a,
                                    visible: T,
                                    onClick: k,
                                    ariaLabel: A.intl.string(A.t.r9s3Uv),
                                    tooltipLabel: A.intl.string(A.t.r9s3Uv),
                                    shortcut: c.TJ.SEEK_BACK,
                                    buttonSize: h.AU[b],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(h.Ey, {
                                    iconComponent: E.i,
                                    animationTime: a,
                                    visible: T,
                                    onClick: U,
                                    disabled: !y,
                                    ariaLabel: y ? A.intl.string(A.t.zWDcNP) : A.intl.string(A.t.xXh3yw),
                                    tooltipLabel: y ? A.intl.string(A.t.zWDcNP) : A.intl.string(A.t.xXh3yw),
                                    tooltipDelayMs: y ? h.do : 0,
                                    shortcut: c.TJ.SEEK_FORWARD,
                                    buttonSize: h.AU[b],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(o.animated.div, {
                className: s()(I.X3, I.L1),
                style: {
                    opacity: (0, o.to)([a.to({ range: [0, 1], output: [0, 1] })], (e) => `${T ? e : Math.pow(e, 8)}`),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: en,
                        onMouseLeave: er,
                        onFocus: en,
                        onBlur: er,
                        className: I.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(h.Ey, {
                                iconComponent: ea,
                                animationTime: a,
                                visible: T,
                                onClick: et,
                                ariaLabel: A.intl.string(A.t["eIl+AK"]),
                                tooltipLabel: A.intl.string(A.t["eIl+AK"]),
                                shortcut: c.TJ.MUTE,
                                buttonSize: h.AU[b],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(o.animated.div, {
                                className: I.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, o.to)(
                                        [q.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${T ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, o.to)([q.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(d.A, {
                                    mini: !0,
                                    initialValue: H,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: ee,
                                    asValueChanges: J,
                                    fillStyles: { backgroundColor: u.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": A.intl.string(A.t["eIl+AK"]),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(h.QF, { current: t?.current?.currentTime, duration: t?.current?.duration }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: s()(I.X3, I.ST),
                children: [
                    !v &&
                        (0, r.jsx)(h.Ey, {
                            iconComponent: _.ueQ,
                            animationTime: a,
                            visible: T,
                            onClick: x,
                            active: O && n !== c.Q6.ENDED,
                            disabled: n === c.Q6.ENDED,
                            ariaLabel: A.intl.string(A.t.KCzjTi),
                            tooltipLabel: A.intl.string(A.t.KCzjTi),
                            buttonSize: h.AU[b],
                            "data-testid": "discord-web-video-player-transcript-btn",
                        }),
                    !S &&
                        (0, r.jsx)(h.Ey, {
                            iconComponent: p.I,
                            animationTime: a,
                            visible: T,
                            active: D,
                            onClick: P,
                            ariaLabel: A.intl.string(A.t.bDSZO1),
                            tooltipLabel: A.intl.string(A.t.bDSZO1),
                            shortcut: c.TJ.CAPTION,
                            buttonSize: h.AU[b],
                            "data-testid": "discord-web-video-player-captions-btn",
                        }),
                    (0, r.jsx)(h.Ey, {
                        iconComponent: L ? _.z7w : _.TM1,
                        animationTime: a,
                        visible: T,
                        onClick: M,
                        ariaLabel: A.intl.string(A.t.vKZT5t),
                        tooltipLabel: A.intl.string(A.t.vKZT5t),
                        shortcut: c.TJ.FULLSCREEN,
                        buttonSize: h.AU[b],
                        "data-testid": "discord-web-video-player-fullscreen-btn",
                    }),
                ],
            }),
        ],
    });
}
