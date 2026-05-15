n.d(t, { A: () => X }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    u = n(873174),
    s = n(17928),
    o = n(661531),
    c = n(876230),
    d = n(106236),
    m = n(717421),
    f = n(358618),
    p = n(793920),
    h = n(983851),
    x = n(86147),
    v = n(729475),
    E = n(261958),
    g = n(32880),
    b = n(922016),
    y = n(980707),
    S = n(477782),
    C = n(365199),
    N = n(775602),
    A = n(174459),
    R = n(61491),
    w = n(990078),
    L = n(113494),
    P = n(782134),
    T = n(417270),
    D = n(834730),
    j = n(939249),
    M = n(375708),
    k = n(834926);
let I = "-:--",
    B = {
        [c.Q6.PLAYING]: { icon: L.E, label: M.intl.string(M.t.ZcgDJX) },
        [c.Q6.PAUSED]: { icon: P.u, label: M.intl.string(M.t.RscU7I) },
        [c.Q6.ENDED]: { icon: T.m, label: M.intl.string(M.t.hsvh0i) },
    },
    F = { [c.oA.MD]: c.n4.MD, [c.oA.LG]: c.n4.LG },
    G = { [c.n4.MD]: "md", [c.n4.LG]: "lg" };
function U(e) {
    let { videoRef: t, compact: n = !1 } = e,
        [a, u] = l.useState(null),
        [s, o] = l.useState(null);
    l.useEffect(() => {
        let e = t.current;
        function n() {
            null != e && (u(e.currentTime), o(e.duration));
        }
        if (null != e)
            return (
                e.addEventListener("timeupdate", n),
                e.addEventListener("loadedmetadata", n),
                e.addEventListener("durationchange", n),
                () => {
                    e.removeEventListener("timeupdate", n),
                        e.removeEventListener("loadedmetadata", n),
                        e.removeEventListener("durationchange", n);
                }
            );
    }, [t]);
    let c = null != a ? (0, R.rB)(a) : I,
        d = null != s ? (0, R.rB)(s) : I;
    return (0, r.jsxs)("div", {
        className: i()(k.d$, k.jk),
        "data-testid": "discord-web-video-player-duration",
        children: [
            (0, r.jsx)(D.E, { variant: "text-xs/normal", className: k.Ue, children: c }),
            !n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(D.E, { variant: "text-xs/normal", className: k.zO, children: "/" }),
                        (0, r.jsx)(D.E, { variant: "text-xs/normal", className: k.Ue, children: d }),
                    ],
                }),
        ],
    });
}
let O = l.forwardRef(function (e, t) {
    let {
        iconComponent: n,
        animationTime: l,
        visible: a,
        ariaLabel: s,
        active: d,
        disabled: m,
        tooltipLabel: f,
        tooltipDelayMs: p = 1500,
        shortcut: h,
        onClick: x,
        buttonSize: v = c.n4.MD,
        "data-testid": E,
        clickableProps: g,
    } = e;
    return (0, r.jsx)(w.m, {
        text: a ? f : void 0,
        keyboardShortcut: "" !== (h ?? "").trim() ? h : void 0,
        delay: p,
        children: (0, r.jsx)(j.D, {
            onClick: !0 === m ? void 0 : x,
            className: i()(k.K5, { [k.Iy]: m }),
            "aria-label": s,
            "aria-disabled": m,
            "data-testid": E,
            innerRef: t,
            ...g,
            children: (0, r.jsx)(u.animated.div, {
                className: k.K5,
                style: {
                    opacity: (0, u.to)([l.to({ range: [0, 1], output: [0, 1] })], (e) => `${a ? e : Math.pow(e, 8)}`),
                    height: { [c.n4.LG]: "32px", [c.n4.MD]: "24px" }[v],
                },
                children: (0, r.jsx)(n, {
                    size: G[v],
                    color: !0 !== m ? o.A.colors.WHITE : o.A.colors.TEXT_MUTED,
                    className: i()(k.jk, { [k.x2]: d, [k.Wr]: !m }),
                }),
            }),
        }),
    });
});
var Q = n(91034),
    K = n(710434),
    _ = n(634156),
    $ = n(652215),
    Y = n(445563);
function X(e) {
    let {
            videoRef: t,
            playerState: n,
            animSpring: a,
            visible: b,
            seekForwardEnabled: y,
            hideCaptionBtn: S,
            hideTranscriptBtn: C,
            hideSkipButtons: R,
            hideFullScreenBtn: w,
            size: L,
            downloadUrl: P,
            downloadContentType: T,
            extraButtons: D,
            autoFocus: j = !1,
            keyDownHandlerRef: I,
            volume: G,
            muted: X,
            transcriptEnabled: W,
            captionEnabled: H,
            fullScreenEnabled: V,
            handlePlaybackBtnClick: Z,
            handleTranscriptBtnClick: J,
            handleCaptionBtnClick: q,
            handleFullScreenBtnClick: ee,
            handleSeekBackBtnClick: et,
            handleSeekForwardBtnClick: en,
            autoHideVolumeSlider: er = !1,
            compactDurationTime: el = !1,
            handleControlBarPendingInteraction: ea,
            onVolumeChange: ei,
            onMutedChange: eu,
        } = e,
        es = (0, s.bG)([N.A], () => N.A.useReducedMotion),
        eo = (0, s.bG)([N.A], () => N.A.keyboardModeEnabled),
        [ec, ed] = l.useState(X ? 0 : G),
        [em, ef] = l.useState(!1),
        [ep, eh] = l.useState(!1),
        [{ volumeAnimSpring: ex }, ev] = (0, m.z)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        eE = l.useRef(null),
        eg = l.useCallback(() => {
            if (null == P) return;
            let e = T?.split("/");
            A.default.track($.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(P, "_blank");
        }, [P, T]),
        eb = l.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== ec && ed(e));
            },
            [t, ec],
        ),
        ey = l.useCallback(() => {
            if (null != t.current)
                if (0 === ec) {
                    let e = 0 === G ? 0.3 : G;
                    eb(e), eu(!1), ei(e);
                } else ei(ec), eb(0), eu(!0);
        }, [t, ec, eb, G, eu, ei]),
        eS = () => {
            ef(!0);
        },
        eC = () => {
            ef(!1);
        },
        eN = l.useCallback(
            (e) => {
                switch (e.key) {
                    case c.TJ.PLAYBACK:
                        Z();
                        break;
                    case c.TJ.SPACE:
                        eo || (e.preventDefault(), Z());
                        break;
                    case c.TJ.SEEK_BACK:
                        et();
                        break;
                    case c.TJ.SEEK_FORWARD:
                        en();
                        break;
                    case c.TJ.CAPTION:
                        S || q();
                        break;
                    case c.TJ.FULLSCREEN:
                        w || ee();
                        break;
                    case c.TJ.MUTE:
                        ey();
                }
            },
            [q, ee, Z, et, en, ey, S, w, eo],
        );
    l.useEffect(() => {
        j && null != eE.current && eE.current.focus();
    }, [j]),
        l.useEffect(
            () => (
                null != I && (I.current = eN),
                () => {
                    null != I && (I.current = null);
                }
            ),
            [eN, I],
        ),
        l.useEffect(
            () => (
                ev({ volumeAnimSpring: !er || ep || em ? 1 : 0, immediate: es }),
                () => {
                    ex.stop();
                }
            ),
            [er, ep, em, ev, es, ex],
        );
    let eA = 0 === ec ? f._ : ec < 0.5 ? p.S : h.H,
        { icon: eR, label: ew } = B[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: k.X3,
                children: [
                    (0, r.jsx)(O, {
                        iconComponent: eR,
                        animationTime: a,
                        visible: b,
                        ariaLabel: ew,
                        tooltipLabel: ew,
                        shortcut: c.TJ.PLAYBACK,
                        onClick: Z,
                        ref: eE,
                        buttonSize: F[L],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !R &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(O, {
                                    iconComponent: K.q,
                                    animationTime: a,
                                    visible: b,
                                    onClick: et,
                                    ariaLabel: M.intl.string(Y.default["dRVF+Z"]),
                                    tooltipLabel: M.intl.string(Y.default["dRVF+Z"]),
                                    shortcut: c.TJ.SEEK_BACK,
                                    buttonSize: F[L],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(O, {
                                    iconComponent: _.i,
                                    animationTime: a,
                                    visible: b,
                                    onClick: en,
                                    disabled: !y,
                                    ariaLabel: y ? M.intl.string(Y.default.yV2FLL) : M.intl.string(Y.default.YWbiPw),
                                    tooltipLabel: y ? M.intl.string(Y.default.yV2FLL) : M.intl.string(Y.default.YWbiPw),
                                    tooltipDelayMs: 1500 * !!y,
                                    shortcut: c.TJ.SEEK_FORWARD,
                                    buttonSize: F[L],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(u.animated.div, {
                className: i()(k.X3, k.L1),
                style: {
                    opacity: (0, u.to)([a.to({ range: [0, 1], output: [0, 1] })], (e) => `${b ? e : Math.pow(e, 8)}`),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: eS,
                        onMouseLeave: eC,
                        onFocus: eS,
                        onBlur: eC,
                        className: k.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(O, {
                                iconComponent: eA,
                                animationTime: a,
                                visible: b,
                                onClick: ey,
                                ariaLabel: M.intl.string(Y.default.XiLvuG),
                                tooltipLabel: M.intl.string(Y.default.XiLvuG),
                                shortcut: c.TJ.MUTE,
                                buttonSize: F[L],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(u.animated.div, {
                                className: k.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, u.to)(
                                        [ex.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${b ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, u.to)([ex.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(d.A, {
                                    mini: !0,
                                    value: ec,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        eb(e),
                                            ei(e),
                                            ep && (eh(!1), ea(!1)),
                                            X && e > 0 ? eu(!1) : X || 0 !== e || eu(!0);
                                    },
                                    asValueChanges: (e) => {
                                        eb(e), ep || (eh(!0), ea(!0));
                                    },
                                    fillStyles: { backgroundColor: o.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": M.intl.string(Y.default.XiLvuG),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(U, { videoRef: t, compact: el }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(k.X3, k.ST),
                children: [
                    (0, r.jsx)(z, {
                        canCollapse: null != D && D.length > 0,
                        buttons: (function (e) {
                            let {
                                    hideTranscriptBtn: t,
                                    hideCaptionBtn: n,
                                    transcriptEnabled: r,
                                    captionEnabled: l,
                                    playerState: a,
                                    handleTranscriptBtnClick: i,
                                    handleCaptionBtnClick: u,
                                    downloadUrl: s,
                                    handleDownloadButtonClick: o,
                                    extraButtons: d,
                                } = e,
                                m = [];
                            return (
                                !0 !== t &&
                                    m.push({
                                        id: "transcript",
                                        iconComponent: E.u,
                                        label: M.intl.string(Y.default["6EjGUv"]),
                                        onClick: i,
                                        active: r && a !== c.Q6.ENDED,
                                        disabled: a === c.Q6.ENDED,
                                        "data-testid": "discord-web-video-player-transcript-btn",
                                    }),
                                !0 !== n &&
                                    m.push({
                                        id: "caption",
                                        iconComponent: Q.I,
                                        label: M.intl.string(Y.default["0DbPcL"]),
                                        onClick: u,
                                        active: l,
                                        shortcut: c.TJ.CAPTION,
                                        "data-testid": "discord-web-video-player-captions-btn",
                                    }),
                                null != s &&
                                    m.push({
                                        id: "download",
                                        iconComponent: g.s,
                                        label: M.intl.string(M.t["1WjMbC"]),
                                        onClick: o,
                                        "data-testid": "discord-web-video-player-download-btn",
                                    }),
                                null != d && m.push(...d),
                                m
                            );
                        })({
                            hideTranscriptBtn: C,
                            hideCaptionBtn: S,
                            transcriptEnabled: W,
                            captionEnabled: H,
                            playerState: n,
                            handleTranscriptBtnClick: J,
                            handleCaptionBtnClick: q,
                            downloadUrl: P,
                            handleDownloadButtonClick: eg,
                            extraButtons: D,
                        }),
                        animSpring: a,
                        visible: b,
                        size: L,
                    }),
                    !w &&
                        (0, r.jsx)(O, {
                            iconComponent: V ? x.z : v.T,
                            animationTime: a,
                            visible: b,
                            onClick: ee,
                            ariaLabel: M.intl.string(Y.default.z9Cnzv),
                            tooltipLabel: M.intl.string(Y.default.z9Cnzv),
                            shortcut: c.TJ.FULLSCREEN,
                            buttonSize: F[L],
                            "data-testid": "discord-web-video-player-fullscreen-btn",
                        }),
                ],
            }),
        ],
    });
}
function z(e) {
    let { buttons: t, canCollapse: n, animSpring: l, visible: a, size: i } = e;
    return 0 === t.length
        ? null
        : !n || t.length <= 1
          ? (0, r.jsx)(r.Fragment, {
                children: t.map((e) =>
                    (0, r.jsx)(
                        O,
                        {
                            iconComponent: e.iconComponent,
                            animationTime: l,
                            visible: a,
                            onClick: e.onClick,
                            active: e.active,
                            disabled: e.disabled,
                            ariaLabel: e.label,
                            tooltipLabel: e.label,
                            tooltipDelayMs: e.tooltipDelayMs,
                            shortcut: e.shortcut,
                            buttonSize: F[i],
                            "data-testid": e["data-testid"],
                        },
                        e.id,
                    ),
                ),
            })
          : (0, r.jsx)(W, { buttons: t, animSpring: l, visible: a, size: i });
}
function W(e) {
    let { buttons: t, animSpring: n, visible: a, size: i } = e,
        u = l.useRef(null),
        s = M.intl.string(M.t.PdRCRg);
    return (0, r.jsx)(b.Y, {
        targetElementRef: u,
        position: "top",
        align: "right",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(y.W, {
                navId: "video-player-overflow",
                "aria-label": s,
                onClose: n,
                onSelect: n,
                children: t.map((e) => {
                    let t = { type: "icon", icon: e.iconComponent };
                    return null != e.active
                        ? (0, r.jsx)(
                              S.sL,
                              {
                                  id: e.id,
                                  label: e.label,
                                  checked: e.active,
                                  disabled: e.disabled,
                                  leadingAccessory: t,
                                  action: e.onClick,
                              },
                              e.id,
                          )
                        : (0, r.jsx)(
                              S.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  shortcut: e.shortcut,
                                  leadingAccessory: t,
                                  action: e.onClick,
                              },
                              e.id,
                          );
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(O, {
                ref: u,
                iconComponent: C.j,
                animationTime: n,
                visible: a,
                ariaLabel: s,
                tooltipLabel: s,
                buttonSize: F[i],
                clickableProps: e,
                "data-testid": "discord-web-video-player-overflow-menu-button",
            }),
    });
}
