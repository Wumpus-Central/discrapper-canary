n.d(t, { A: () => _ });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(419354),
    u = n(17928),
    o = n(661531),
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
    S = n(61491),
    C = n(990078),
    N = n(113494),
    A = n(782134),
    R = n(417270),
    L = n(834730),
    w = n(939249),
    T = n(985018),
    P = n(834926);
let D = "-:--",
    M = {
        [c.Q6.PLAYING]: { icon: N.E, label: T.intl.string(T.t.ZcgDJX) },
        [c.Q6.PAUSED]: { icon: A.u, label: T.intl.string(T.t.RscU7I) },
        [c.Q6.ENDED]: { icon: R.m, label: T.intl.string(T.t.hsvh0i) },
    },
    j = { [c.oA.MD]: c.n4.MD, [c.oA.LG]: c.n4.LG },
    k = { [c.n4.MD]: "md", [c.n4.LG]: "lg" };
function I(e) {
    let { current: t, duration: n } = e,
        l = null != t ? (0, S.rB)(t) : D,
        a = null != n ? (0, S.rB)(n) : D;
    return (0, r.jsxs)("div", {
        className: i()(P.d$, P.jk),
        "data-testid": "discord-web-video-player-duration",
        children: [
            (0, r.jsx)(L.E, { variant: "text-xs/normal", className: P.Ue, children: l }),
            (0, r.jsx)(L.E, { variant: "text-xs/normal", className: P.zO, children: "/" }),
            (0, r.jsx)(L.E, { variant: "text-xs/normal", className: P.Ue, children: a }),
        ],
    });
}
let B = l.forwardRef(function (e, t) {
    let {
            iconComponent: n,
            animationTime: l,
            visible: a,
            ariaLabel: u,
            active: d,
            disabled: m,
            tooltipLabel: f,
            tooltipDelayMs: h = 1500,
            shortcut: p,
            onClick: E,
            buttonSize: v = c.n4.MD,
            "data-testid": x,
        } = e,
        b = (e) =>
            (0, r.jsx)(w.D, {
                ...e,
                onClick: !0 === m ? void 0 : E,
                className: i()(P.K5, { [P.Iy]: m }),
                "aria-label": u,
                "aria-disabled": m,
                "data-testid": x,
                innerRef: t,
                children: (0, r.jsx)(s.animated.div, {
                    className: P.K5,
                    style: {
                        opacity: (0, s.to)(
                            [l.to({ range: [0, 1], output: [0, 1] })],
                            (e) => `${a ? e : Math.pow(e, 8)}`,
                        ),
                        height: { [c.n4.LG]: "32px", [c.n4.MD]: "24px" }[v],
                    },
                    children: (0, r.jsx)(n, {
                        size: k[v],
                        color: !0 !== m ? o.A.colors.WHITE : o.A.colors.TEXT_MUTED,
                        className: i()(P.jk, { [P.x2]: d, [P.Wr]: !m }),
                    }),
                }),
            });
    return null != f && a
        ? (0, r.jsx)(C.m, { text: f, keyboardShortcut: "" !== (p ?? "").trim() ? p : void 0, delay: h, children: b() })
        : b();
});
var F = n(91034),
    G = n(710434),
    U = n(634156),
    O = n(652215),
    Q = n(445563);
function _(e) {
    let {
            videoRef: t,
            playerState: n,
            animSpring: a,
            visible: S,
            seekForwardEnabled: C,
            hideCaptionBtn: N,
            hideTranscriptBtn: A,
            hideSkipButtons: R,
            size: L,
            downloadUrl: w,
            downloadContentType: D,
            autoFocus: k = !1,
            keyDownHandlerRef: _,
            volume: K,
            muted: $,
            transcriptEnabled: Y,
            captionEnabled: X,
            fullScreenEnabled: z,
            handlePlaybackBtnClick: V,
            handleTranscriptBtnClick: W,
            handleCaptionBtnClick: H,
            handleFullScreenBtnClick: Z,
            handleSeekBackBtnClick: J,
            handleSeekForwardBtnClick: q,
            autoHideVolumeSlider: ee = !1,
            handleControlBarPendingInteraction: et,
            onVolumeChange: en,
            onMutedChange: er,
        } = e,
        el = (0, u.bG)([g.A], () => g.A.useReducedMotion),
        ea = (0, u.bG)([g.A], () => g.A.keyboardModeEnabled),
        [ei, es] = l.useState($ ? 0 : K),
        [eu, eo] = l.useState(!1),
        [ec, ed] = l.useState(!1),
        [{ volumeAnimSpring: em }, ef] = (0, m.z)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        eh = l.useRef(null),
        ep = l.useCallback(() => {
            if (null == w) return;
            let e = D?.split("/");
            y.default.track(O.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(w, "_blank");
        }, [w, D]),
        eE = l.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== ei && es(e));
            },
            [t, ei],
        ),
        ev = l.useCallback(() => {
            if (null != t.current)
                if (0 === ei) {
                    let e = 0 === K ? 0.3 : K;
                    eE(e), er(!1), en(e);
                } else en(ei), eE(0), er(!0);
        }, [t, ei, eE, K, er, en]),
        ex = () => {
            eo(!0);
        },
        eb = () => {
            eo(!1);
        },
        eg = l.useCallback(
            (e) => {
                switch (e.key) {
                    case c.TJ.PLAYBACK:
                        V();
                        break;
                    case c.TJ.SPACE:
                        ea || (e.preventDefault(), V());
                        break;
                    case c.TJ.SEEK_BACK:
                        J();
                        break;
                    case c.TJ.SEEK_FORWARD:
                        q();
                        break;
                    case c.TJ.CAPTION:
                        H();
                        break;
                    case c.TJ.FULLSCREEN:
                        Z();
                        break;
                    case c.TJ.MUTE:
                        ev();
                }
            },
            [H, Z, V, J, q, ev, ea],
        );
    l.useEffect(() => {
        k && null != eh.current && eh.current.focus();
    }, [k]),
        l.useEffect(
            () => (
                null != _ && (_.current = eg),
                () => {
                    null != _ && (_.current = null);
                }
            ),
            [eg, _],
        ),
        l.useEffect(
            () => (
                ef({ volumeAnimSpring: !ee || ec || eu ? 1 : 0, immediate: el }),
                () => {
                    em.stop();
                }
            ),
            [ee, ec, eu, ef, el, em],
        );
    let ey = 0 === ei ? f._ : ei < 0.5 ? h.S : p.H,
        { icon: eS, label: eC } = M[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: P.X3,
                children: [
                    (0, r.jsx)(B, {
                        iconComponent: eS,
                        animationTime: a,
                        visible: S,
                        ariaLabel: eC,
                        tooltipLabel: eC,
                        shortcut: c.TJ.PLAYBACK,
                        onClick: V,
                        ref: eh,
                        buttonSize: j[L],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !R &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(B, {
                                    iconComponent: G.q,
                                    animationTime: a,
                                    visible: S,
                                    onClick: J,
                                    ariaLabel: T.intl.string(Q.default["dRVF+Z"]),
                                    tooltipLabel: T.intl.string(Q.default["dRVF+Z"]),
                                    shortcut: c.TJ.SEEK_BACK,
                                    buttonSize: j[L],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(B, {
                                    iconComponent: U.i,
                                    animationTime: a,
                                    visible: S,
                                    onClick: q,
                                    disabled: !C,
                                    ariaLabel: C ? T.intl.string(Q.default.yV2FLL) : T.intl.string(Q.default.YWbiPw),
                                    tooltipLabel: C ? T.intl.string(Q.default.yV2FLL) : T.intl.string(Q.default.YWbiPw),
                                    tooltipDelayMs: 1500 * !!C,
                                    shortcut: c.TJ.SEEK_FORWARD,
                                    buttonSize: j[L],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(s.animated.div, {
                className: i()(P.X3, P.L1),
                style: {
                    opacity: (0, s.to)([a.to({ range: [0, 1], output: [0, 1] })], (e) => `${S ? e : Math.pow(e, 8)}`),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: ex,
                        onMouseLeave: eb,
                        onFocus: ex,
                        onBlur: eb,
                        className: P.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(B, {
                                iconComponent: ey,
                                animationTime: a,
                                visible: S,
                                onClick: ev,
                                ariaLabel: T.intl.string(Q.default.XiLvuG),
                                tooltipLabel: T.intl.string(Q.default.XiLvuG),
                                shortcut: c.TJ.MUTE,
                                buttonSize: j[L],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: P.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, s.to)(
                                        [em.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${S ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, s.to)([em.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(d.A, {
                                    mini: !0,
                                    value: ei,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        eE(e),
                                            en(e),
                                            ec && (ed(!1), et(!1)),
                                            $ && e > 0 ? er(!1) : $ || 0 !== e || er(!0);
                                    },
                                    asValueChanges: (e) => {
                                        eE(e), ec || (ed(!0), et(!0));
                                    },
                                    fillStyles: { backgroundColor: o.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": T.intl.string(Q.default.XiLvuG),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(I, { current: t?.current?.currentTime, duration: t?.current?.duration }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(P.X3, P.ST),
                children: [
                    !A &&
                        (0, r.jsx)(B, {
                            iconComponent: E.u,
                            animationTime: a,
                            visible: S,
                            onClick: W,
                            active: Y && n !== c.Q6.ENDED,
                            disabled: n === c.Q6.ENDED,
                            ariaLabel: T.intl.string(Q.default["6EjGUv"]),
                            tooltipLabel: T.intl.string(Q.default["6EjGUv"]),
                            buttonSize: j[L],
                            "data-testid": "discord-web-video-player-transcript-btn",
                        }),
                    !N &&
                        (0, r.jsx)(B, {
                            iconComponent: F.I,
                            animationTime: a,
                            visible: S,
                            active: X,
                            onClick: H,
                            ariaLabel: T.intl.string(Q.default["0DbPcL"]),
                            tooltipLabel: T.intl.string(Q.default["0DbPcL"]),
                            shortcut: c.TJ.CAPTION,
                            buttonSize: j[L],
                            "data-testid": "discord-web-video-player-captions-btn",
                        }),
                    null != w &&
                        (0, r.jsx)(B, {
                            iconComponent: v.s,
                            animationTime: a,
                            visible: S,
                            onClick: ep,
                            ariaLabel: T.intl.string(T.t["1WjMbC"]),
                            tooltipLabel: T.intl.string(T.t["1WjMbC"]),
                            buttonSize: j[L],
                            "data-testid": "discord-web-video-player-download-btn",
                        }),
                    (0, r.jsx)(B, {
                        iconComponent: z ? x.z : b.T,
                        animationTime: a,
                        visible: S,
                        onClick: Z,
                        ariaLabel: T.intl.string(Q.default.z9Cnzv),
                        tooltipLabel: T.intl.string(Q.default.z9Cnzv),
                        shortcut: c.TJ.FULLSCREEN,
                        buttonSize: j[L],
                        "data-testid": "discord-web-video-player-fullscreen-btn",
                    }),
                ],
            }),
        ],
    });
}
