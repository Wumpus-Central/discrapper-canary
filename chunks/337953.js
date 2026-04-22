n.d(t, { A: () => P });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(517738),
    u = n(311907),
    o = n(827734),
    c = n(876230),
    d = n(106236),
    m = n(717421),
    f = n(358618),
    h = n(793920),
    p = n(983851),
    E = n(261958),
    v = n(32880),
    x = n(86147),
    b = n(729475),
    g = n(775602),
    y = n(954571),
    A = n(768146),
    C = n(91034),
    S = n(710434),
    N = n(634156),
    R = n(652215),
    L = n(445563),
    w = n(985018),
    T = n(834926);
function P(e) {
    let {
            videoRef: t,
            playerState: n,
            animSpring: a,
            visible: P,
            seekForwardEnabled: D,
            hideCaptionBtn: M,
            hideTranscriptBtn: j,
            hideSkipButtons: k,
            size: I,
            downloadUrl: B,
            downloadContentType: F,
            autoFocus: U = !1,
            keyDownHandlerRef: G,
            volume: Q,
            muted: O,
            transcriptEnabled: _,
            captionEnabled: K,
            fullScreenEnabled: $,
            handlePlaybackBtnClick: Y,
            handleTranscriptBtnClick: X,
            handleCaptionBtnClick: z,
            handleFullScreenBtnClick: V,
            handleSeekBackBtnClick: W,
            handleSeekForwardBtnClick: H,
            autoHideVolumeSlider: Z = !1,
            handleControlBarPendingInteraction: J,
            onVolumeChange: q,
            onMutedChange: ee,
        } = e,
        et = (0, u.bG)([g.A], () => g.A.useReducedMotion),
        en = (0, u.bG)([g.A], () => g.A.keyboardModeEnabled),
        [er, el] = l.useState(O ? 0 : Q),
        [ea, ei] = l.useState(!1),
        [es, eu] = l.useState(!1),
        [{ volumeAnimSpring: eo }, ec] = (0, m.z)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        ed = l.useRef(null),
        em = l.useCallback(() => {
            if (null == B) return;
            let e = F?.split("/");
            y.default.track(R.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(B, "_blank");
        }, [B, F]),
        ef = l.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== er && el(e));
            },
            [t, er],
        ),
        eh = l.useCallback(() => {
            if (null != t.current)
                if (0 === er) {
                    let e = 0 === Q ? 0.3 : Q;
                    ef(e), ee(!1), q(e);
                } else q(er), ef(0), ee(!0);
        }, [t, er, ef, Q, ee, q]),
        ep = () => {
            ei(!0);
        },
        eE = () => {
            ei(!1);
        },
        ev = l.useCallback(
            (e) => {
                switch (e.key) {
                    case c.TJ.PLAYBACK:
                        Y();
                        break;
                    case c.TJ.SPACE:
                        en || (e.preventDefault(), Y());
                        break;
                    case c.TJ.SEEK_BACK:
                        W();
                        break;
                    case c.TJ.SEEK_FORWARD:
                        H();
                        break;
                    case c.TJ.CAPTION:
                        z();
                        break;
                    case c.TJ.FULLSCREEN:
                        V();
                        break;
                    case c.TJ.MUTE:
                        eh();
                }
            },
            [z, V, Y, W, H, eh, en],
        );
    l.useEffect(() => {
        U && null != ed.current && ed.current.focus();
    }, [U]),
        l.useEffect(
            () => (
                null != G && (G.current = ev),
                () => {
                    null != G && (G.current = null);
                }
            ),
            [ev, G],
        ),
        l.useEffect(
            () => (
                ec({ volumeAnimSpring: !Z || es || ea ? 1 : 0, immediate: et }),
                () => {
                    eo.stop();
                }
            ),
            [Z, es, ea, ec, et, eo],
        );
    let ex = 0 === er ? f._ : er < 0.5 ? h.S : p.H,
        { icon: eb, label: eg } = A.eC[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: T.X3,
                children: [
                    (0, r.jsx)(A.Ey, {
                        iconComponent: eb,
                        animationTime: a,
                        visible: P,
                        ariaLabel: eg,
                        tooltipLabel: eg,
                        shortcut: c.TJ.PLAYBACK,
                        onClick: Y,
                        ref: ed,
                        buttonSize: A.AU[I],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !k &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(A.Ey, {
                                    iconComponent: S.q,
                                    animationTime: a,
                                    visible: P,
                                    onClick: W,
                                    ariaLabel: w.intl.string(L.default["dRVF+Z"]),
                                    tooltipLabel: w.intl.string(L.default["dRVF+Z"]),
                                    shortcut: c.TJ.SEEK_BACK,
                                    buttonSize: A.AU[I],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(A.Ey, {
                                    iconComponent: N.i,
                                    animationTime: a,
                                    visible: P,
                                    onClick: H,
                                    disabled: !D,
                                    ariaLabel: D ? w.intl.string(L.default.yV2FLL) : w.intl.string(L.default.YWbiPw),
                                    tooltipLabel: D ? w.intl.string(L.default.yV2FLL) : w.intl.string(L.default.YWbiPw),
                                    tooltipDelayMs: D ? A.do : 0,
                                    shortcut: c.TJ.SEEK_FORWARD,
                                    buttonSize: A.AU[I],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(s.animated.div, {
                className: i()(T.X3, T.L1),
                style: {
                    opacity: (0, s.to)([a.to({ range: [0, 1], output: [0, 1] })], (e) => `${P ? e : Math.pow(e, 8)}`),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: ep,
                        onMouseLeave: eE,
                        onFocus: ep,
                        onBlur: eE,
                        className: T.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(A.Ey, {
                                iconComponent: ex,
                                animationTime: a,
                                visible: P,
                                onClick: eh,
                                ariaLabel: w.intl.string(L.default.XiLvuG),
                                tooltipLabel: w.intl.string(L.default.XiLvuG),
                                shortcut: c.TJ.MUTE,
                                buttonSize: A.AU[I],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: T.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, s.to)(
                                        [eo.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${P ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, s.to)([eo.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(d.A, {
                                    mini: !0,
                                    value: er,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        ef(e),
                                            q(e),
                                            es && (eu(!1), J(!1)),
                                            O && e > 0 ? ee(!1) : O || 0 !== e || ee(!0);
                                    },
                                    asValueChanges: (e) => {
                                        ef(e), es || (eu(!0), J(!0));
                                    },
                                    fillStyles: { backgroundColor: o.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": w.intl.string(L.default.XiLvuG),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(A.QF, { current: t?.current?.currentTime, duration: t?.current?.duration }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(T.X3, T.ST),
                children: [
                    !j &&
                        (0, r.jsx)(A.Ey, {
                            iconComponent: E.u,
                            animationTime: a,
                            visible: P,
                            onClick: X,
                            active: _ && n !== c.Q6.ENDED,
                            disabled: n === c.Q6.ENDED,
                            ariaLabel: w.intl.string(L.default["6EjGUv"]),
                            tooltipLabel: w.intl.string(L.default["6EjGUv"]),
                            buttonSize: A.AU[I],
                            "data-testid": "discord-web-video-player-transcript-btn",
                        }),
                    !M &&
                        (0, r.jsx)(A.Ey, {
                            iconComponent: C.I,
                            animationTime: a,
                            visible: P,
                            active: K,
                            onClick: z,
                            ariaLabel: w.intl.string(L.default["0DbPcL"]),
                            tooltipLabel: w.intl.string(L.default["0DbPcL"]),
                            shortcut: c.TJ.CAPTION,
                            buttonSize: A.AU[I],
                            "data-testid": "discord-web-video-player-captions-btn",
                        }),
                    null != B &&
                        (0, r.jsx)(A.Ey, {
                            iconComponent: v.s,
                            animationTime: a,
                            visible: P,
                            onClick: em,
                            ariaLabel: w.intl.string(w.t["1WjMbC"]),
                            tooltipLabel: w.intl.string(w.t["1WjMbC"]),
                            buttonSize: A.AU[I],
                            "data-testid": "discord-web-video-player-download-btn",
                        }),
                    (0, r.jsx)(A.Ey, {
                        iconComponent: $ ? x.z : b.T,
                        animationTime: a,
                        visible: P,
                        onClick: V,
                        ariaLabel: w.intl.string(L.default.z9Cnzv),
                        tooltipLabel: w.intl.string(L.default.z9Cnzv),
                        shortcut: c.TJ.FULLSCREEN,
                        buttonSize: A.AU[I],
                        "data-testid": "discord-web-video-player-fullscreen-btn",
                    }),
                ],
            }),
        ],
    });
}
