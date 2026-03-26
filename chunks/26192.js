n.d(t, { A: () => S });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(4208),
    o = n(311907),
    u = n(827734),
    c = n(106236),
    d = n(397927),
    m = n(775602),
    p = n(892358),
    E = n(406385),
    f = n(405670),
    h = n(795068),
    v = n(163961),
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
            orientation: C,
            size: y,
            handlePlaybackBtnClick: T,
            handleTranscriptBtnClick: N,
            handleCaptionBtnClick: D,
            handleFullScreenBtnClick: I,
            handleSeekBackBtnClick: R,
            handleSeekForwardBtnClick: L,
            handleControlBarPendingInteraction: w,
            onVolumeChange: M,
        } = e,
        { isFullscreenEnabled: k } = l.useContext(h.a),
        P = (0, f.Kr)((e) => e.volume),
        j = (0, f.Kr)((e) => e.setVolume),
        O = (0, f.Kr)((e) => e.muted),
        U = (0, f.Kr)((e) => e.setMuted),
        B = (0, f.Kr)((e) => e.transcriptEnabled),
        Q = (0, f.Kr)((e) => e.captionEnabled),
        V = (0, o.bG)([m.A], () => m.A.useReducedMotion),
        K = (0, o.bG)([m.A], () => m.A.keyboardModeEnabled),
        [F, $] = l.useState(O ? 0 : P),
        [Y, G] = l.useState(!1),
        [H, z] = l.useState(!1),
        [{ volumeAnimSpring: W }, q] = (0, d.zhh)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        X = l.useRef(null),
        J = l.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== F && $(e));
            },
            [t, F],
        ),
        Z = l.useCallback(() => {
            null != t.current &&
                (0 === F ? (U(!1), 0 === P ? (j(p.$J), J(p.$J), M(p.$J)) : (J(P), M(P))) : (j(F), J(0), U(!0), M(0)));
        }, [t, F, J, P, U, j, M]),
        ee = () => {
            G(!0);
        },
        et = () => {
            G(!1);
        },
        en = l.useCallback(
            (e) => {
                switch (e.key) {
                    case v.TJ.PLAYBACK:
                        T();
                        break;
                    case v.TJ.SPACE:
                        K || (e.preventDefault(), T());
                        break;
                    case v.TJ.SEEK_BACK:
                        R();
                        break;
                    case v.TJ.SEEK_FORWARD:
                        L();
                        break;
                    case v.TJ.CAPTION:
                        D();
                        break;
                    case v.TJ.FULLSCREEN:
                        I();
                        break;
                    case v.TJ.MUTE:
                        Z();
                }
            },
            [D, I, T, R, L, Z, K],
        );
    l.useEffect(() => {
        null != X.current && X.current.focus();
    }, []),
        l.useEffect(
            () => (
                q({ volumeAnimSpring: H || Y ? 1 : 0, immediate: V }),
                () => {
                    W.stop();
                }
            ),
            [H, Y, q, V, W],
        ),
        l.useEffect(
            () => (
                window.addEventListener("keydown", en),
                () => {
                    window.removeEventListener("keydown", en);
                }
            ),
            [en],
        );
    let er = 0 === F ? d._RO : F < 0.5 ? d.S24 : d.HKD,
        { icon: el, label: ea } = E.eC[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: g.X3,
                children: [
                    (0, r.jsx)(E.Ey, {
                        iconComponent: el,
                        animationTime: a,
                        visible: S,
                        ariaLabel: ea,
                        tooltipLabel: ea,
                        shortcut: v.TJ.PLAYBACK,
                        onClick: T,
                        ref: X,
                        buttonSize: E.AU[y],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    "portrait" !== C &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(E.Ey, {
                                    iconComponent: p.qN,
                                    animationTime: a,
                                    visible: S,
                                    onClick: R,
                                    ariaLabel: x.intl.string(x.t.r9s3Uv),
                                    tooltipLabel: x.intl.string(x.t.r9s3Uv),
                                    shortcut: v.TJ.SEEK_BACK,
                                    buttonSize: E.AU[y],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(E.Ey, {
                                    iconComponent: p.i7,
                                    animationTime: a,
                                    visible: S,
                                    onClick: L,
                                    disabled: !A,
                                    ariaLabel: A ? x.intl.string(x.t.zWDcNP) : x.intl.string(x.t.xXh3yw),
                                    tooltipLabel: A ? x.intl.string(x.t.zWDcNP) : x.intl.string(x.t.xXh3yw),
                                    tooltipDelayMs: A ? E.do : 0,
                                    shortcut: v.TJ.SEEK_FORWARD,
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
                        onMouseEnter: ee,
                        onMouseLeave: et,
                        onFocus: ee,
                        onBlur: et,
                        className: g.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(E.Ey, {
                                iconComponent: er,
                                animationTime: a,
                                visible: S,
                                onClick: Z,
                                ariaLabel: x.intl.string(x.t["eIl+AK"]),
                                tooltipLabel: x.intl.string(x.t["eIl+AK"]),
                                shortcut: v.TJ.MUTE,
                                buttonSize: E.AU[y],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: g.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, s.to)(
                                        [W.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${S ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, s.to)([W.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(c.A, {
                                    mini: !0,
                                    value: F,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        J(e),
                                            j(e),
                                            M(e),
                                            H && (z(!1), w(!1)),
                                            O && e > 0 ? U(!1) : O || 0 !== e || U(!0);
                                    },
                                    asValueChanges: (e) => {
                                        J(e), H || (z(!0), w(!0));
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
                            iconComponent: d.ueQ,
                            animationTime: a,
                            visible: S,
                            onClick: N,
                            active: B && n !== v.Q6.ENDED,
                            disabled: n === v.Q6.ENDED,
                            ariaLabel: x.intl.string(x.t.KCzjTi),
                            tooltipLabel: x.intl.string(x.t.KCzjTi),
                            buttonSize: E.AU[y],
                            "data-testid": "discord-web-video-player-transcript-btn",
                        }),
                    !b &&
                        (0, r.jsx)(E.Ey, {
                            iconComponent: p.IT,
                            animationTime: a,
                            visible: S,
                            active: Q,
                            onClick: D,
                            ariaLabel: x.intl.string(x.t.bDSZO1),
                            tooltipLabel: x.intl.string(x.t.bDSZO1),
                            shortcut: v.TJ.CAPTION,
                            buttonSize: E.AU[y],
                            "data-testid": "discord-web-video-player-captions-btn",
                        }),
                    (0, r.jsx)(E.Ey, {
                        iconComponent: k ? d.z7w : d.TM1,
                        animationTime: a,
                        visible: S,
                        onClick: I,
                        ariaLabel: x.intl.string(x.t.vKZT5t),
                        tooltipLabel: x.intl.string(x.t.vKZT5t),
                        shortcut: v.TJ.FULLSCREEN,
                        buttonSize: E.AU[y],
                        "data-testid": "discord-web-video-player-fullscreen-btn",
                    }),
                ],
            }),
        ],
    });
}
