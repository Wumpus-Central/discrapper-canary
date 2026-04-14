"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(445887),
    l = n(311907),
    u = n(827734),
    c = n(876230),
    d = n(106236),
    _ = n(397927),
    f = n(775602),
    h = n(954571),
    p = n(768146),
    m = n(91034),
    E = n(710434),
    g = n(634156),
    A = n(652215),
    I = n(354361),
    T = n(985018),
    S = n(246878);
function y(e) {
    let {
            videoRef: t,
            playerState: n,
            animSpring: s,
            visible: y,
            seekForwardEnabled: v,
            hideCaptionBtn: C,
            hideTranscriptBtn: N,
            hideSkipButtons: R,
            size: b,
            downloadUrl: O,
            downloadContentType: D,
            autoFocus: L = !1,
            keyDownHandlerRef: w,
            volume: M,
            muted: x,
            transcriptEnabled: P,
            captionEnabled: k,
            fullScreenEnabled: U,
            handlePlaybackBtnClick: G,
            handleTranscriptBtnClick: F,
            handleCaptionBtnClick: B,
            handleFullScreenBtnClick: V,
            handleSeekBackBtnClick: H,
            handleSeekForwardBtnClick: j,
            handleControlBarPendingInteraction: Y,
            onVolumeChange: W,
            onMutedChange: K,
        } = e,
        $ = (0, l.bG)([f.A], () => f.A.useReducedMotion),
        z = (0, l.bG)([f.A], () => f.A.keyboardModeEnabled),
        [q, Z] = i.useState(x ? 0 : M),
        [X, Q] = i.useState(!1),
        [J, ee] = i.useState(!1),
        [{ volumeAnimSpring: et }, en] = (0, _.zhh)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        er = i.useRef(null),
        ei = i.useCallback(() => {
            if (null == O) return;
            let e = D?.split("/");
            h.default.track(A.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(O, "_blank");
        }, [O, D]),
        es = i.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== q && Z(e));
            },
            [t, q],
        ),
        ea = (e) => {
            es(e), J || (ee(!0), Y(!0));
        },
        eo = (e) => {
            es(e), W(e), J && (ee(!1), Y(!1)), x && e > 0 ? K(!1) : x || 0 !== e || K(!0);
        },
        el = i.useCallback(() => {
            if (null != t.current)
                if (0 === q) {
                    let e = 0 === M ? 0.3 : M;
                    es(e), K(!1), W(e);
                } else W(q), es(0), K(!0);
        }, [t, q, es, M, K, W]),
        eu = () => {
            Q(!0);
        },
        ec = () => {
            Q(!1);
        },
        ed = i.useCallback(
            (e) => {
                switch (e.key) {
                    case c.TJ.PLAYBACK:
                        G();
                        break;
                    case c.TJ.SPACE:
                        z || (e.preventDefault(), G());
                        break;
                    case c.TJ.SEEK_BACK:
                        H();
                        break;
                    case c.TJ.SEEK_FORWARD:
                        j();
                        break;
                    case c.TJ.CAPTION:
                        B();
                        break;
                    case c.TJ.FULLSCREEN:
                        V();
                        break;
                    case c.TJ.MUTE:
                        el();
                }
            },
            [B, V, G, H, j, el, z],
        );
    i.useEffect(() => {
        L && null != er.current && er.current.focus();
    }, [L]),
        i.useEffect(
            () => (
                null != w && (w.current = ed),
                () => {
                    null != w && (w.current = null);
                }
            ),
            [ed, w],
        ),
        i.useEffect(
            () => (
                en({ volumeAnimSpring: J || X ? 1 : 0, immediate: $ }),
                () => {
                    et.stop();
                }
            ),
            [J, X, en, $, et],
        );
    let e_ = 0 === q ? _._RO : q < 0.5 ? _.S24 : _.HKD,
        { icon: ef, label: eh } = p.eC[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: S.X3,
                children: [
                    (0, r.jsx)(p.Ey, {
                        iconComponent: ef,
                        animationTime: s,
                        visible: y,
                        ariaLabel: eh,
                        tooltipLabel: eh,
                        shortcut: c.TJ.PLAYBACK,
                        onClick: G,
                        ref: er,
                        buttonSize: p.AU[b],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !R &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(p.Ey, {
                                    iconComponent: E.q,
                                    animationTime: s,
                                    visible: y,
                                    onClick: H,
                                    ariaLabel: T.intl.string(I.default["dRVF+Z"]),
                                    tooltipLabel: T.intl.string(I.default["dRVF+Z"]),
                                    shortcut: c.TJ.SEEK_BACK,
                                    buttonSize: p.AU[b],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(p.Ey, {
                                    iconComponent: g.i,
                                    animationTime: s,
                                    visible: y,
                                    onClick: j,
                                    disabled: !v,
                                    ariaLabel: v ? T.intl.string(I.default.yV2FLL) : T.intl.string(I.default.YWbiPw),
                                    tooltipLabel: v ? T.intl.string(I.default.yV2FLL) : T.intl.string(I.default.YWbiPw),
                                    tooltipDelayMs: v ? p.do : 0,
                                    shortcut: c.TJ.SEEK_FORWARD,
                                    buttonSize: p.AU[b],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(o.animated.div, {
                className: a()(S.X3, S.L1),
                style: {
                    opacity: (0, o.to)([s.to({ range: [0, 1], output: [0, 1] })], (e) => `${y ? e : Math.pow(e, 8)}`),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: eu,
                        onMouseLeave: ec,
                        onFocus: eu,
                        onBlur: ec,
                        className: S.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(p.Ey, {
                                iconComponent: e_,
                                animationTime: s,
                                visible: y,
                                onClick: el,
                                ariaLabel: T.intl.string(I.default.XiLvuG),
                                tooltipLabel: T.intl.string(I.default.XiLvuG),
                                shortcut: c.TJ.MUTE,
                                buttonSize: p.AU[b],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(o.animated.div, {
                                className: S.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, o.to)(
                                        [et.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${y ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, o.to)([et.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(d.A, {
                                    mini: !0,
                                    value: q,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: eo,
                                    asValueChanges: ea,
                                    fillStyles: { backgroundColor: u.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": T.intl.string(I.default.XiLvuG),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(p.QF, { current: t?.current?.currentTime, duration: t?.current?.duration }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: a()(S.X3, S.ST),
                children: [
                    !N &&
                        (0, r.jsx)(p.Ey, {
                            iconComponent: _.ueQ,
                            animationTime: s,
                            visible: y,
                            onClick: F,
                            active: P && n !== c.Q6.ENDED,
                            disabled: n === c.Q6.ENDED,
                            ariaLabel: T.intl.string(I.default["6EjGUv"]),
                            tooltipLabel: T.intl.string(I.default["6EjGUv"]),
                            buttonSize: p.AU[b],
                            "data-testid": "discord-web-video-player-transcript-btn",
                        }),
                    !C &&
                        (0, r.jsx)(p.Ey, {
                            iconComponent: m.I,
                            animationTime: s,
                            visible: y,
                            active: k,
                            onClick: B,
                            ariaLabel: T.intl.string(I.default["0DbPcL"]),
                            tooltipLabel: T.intl.string(I.default["0DbPcL"]),
                            shortcut: c.TJ.CAPTION,
                            buttonSize: p.AU[b],
                            "data-testid": "discord-web-video-player-captions-btn",
                        }),
                    null != O &&
                        (0, r.jsx)(p.Ey, {
                            iconComponent: _.s3U,
                            animationTime: s,
                            visible: y,
                            onClick: ei,
                            ariaLabel: T.intl.string(T.t["1WjMbC"]),
                            tooltipLabel: T.intl.string(T.t["1WjMbC"]),
                            buttonSize: p.AU[b],
                            "data-testid": "discord-web-video-player-download-btn",
                        }),
                    (0, r.jsx)(p.Ey, {
                        iconComponent: U ? _.z7w : _.TM1,
                        animationTime: s,
                        visible: y,
                        onClick: V,
                        ariaLabel: T.intl.string(I.default.z9Cnzv),
                        tooltipLabel: T.intl.string(I.default.z9Cnzv),
                        shortcut: c.TJ.FULLSCREEN,
                        buttonSize: p.AU[b],
                        "data-testid": "discord-web-video-player-fullscreen-btn",
                    }),
                ],
            }),
        ],
    });
}
