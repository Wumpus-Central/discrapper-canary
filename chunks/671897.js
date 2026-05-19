n.d(t, { A: () => J }), n(321073);
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
    p = n(358618),
    f = n(793920),
    h = n(983851),
    x = n(86147),
    v = n(729475),
    g = n(261958),
    E = n(32880),
    b = n(922016),
    y = n(980707),
    S = n(477782),
    C = n(365199),
    R = n(268791),
    N = n(315710),
    A = n(534514),
    w = n(775602),
    P = n(174459),
    L = n(61491),
    T = n(990078),
    j = n(113494),
    D = n(782134),
    k = n(417270),
    M = n(834730),
    I = n(939249),
    B = n(375708),
    F = n(834926);
let G = "-:--",
    O = {
        [c.Q6.PLAYING]: { icon: j.E, label: B.intl.string(B.t.ZcgDJX) },
        [c.Q6.PAUSED]: { icon: D.u, label: B.intl.string(B.t.RscU7I) },
        [c.Q6.ENDED]: { icon: k.m, label: B.intl.string(B.t.hsvh0i) },
    },
    U = { [c.oA.MD]: c.n4.MD, [c.oA.LG]: c.n4.LG },
    Q = { [c.n4.MD]: "md", [c.n4.LG]: "lg" };
function K(e) {
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
    let c = null != a ? (0, L.rB)(a) : G,
        d = null != s ? (0, L.rB)(s) : G;
    return (0, r.jsxs)("div", {
        className: i()(F.d$, F.jk),
        "data-testid": "discord-web-video-player-duration",
        children: [
            (0, r.jsx)(M.E, { variant: "text-xs/normal", className: F.Ue, children: c }),
            !n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(M.E, { variant: "text-xs/normal", className: F.zO, children: "/" }),
                        (0, r.jsx)(M.E, { variant: "text-xs/normal", className: F.Ue, children: d }),
                    ],
                }),
        ],
    });
}
let _ = l.forwardRef(function (e, t) {
    let {
        iconComponent: n,
        animationTime: l,
        visible: a,
        ariaLabel: s,
        active: d,
        disabled: m,
        tooltipLabel: p,
        tooltipDelayMs: f = 1500,
        shortcut: h,
        onClick: x,
        buttonSize: v = c.n4.MD,
        "data-testid": g,
        clickableProps: E,
    } = e;
    return (0, r.jsx)(T.m, {
        text: a ? p : void 0,
        keyboardShortcut: "" !== (h ?? "").trim() ? h : void 0,
        delay: f,
        children: (0, r.jsx)(I.D, {
            onClick: !0 === m ? void 0 : x,
            className: i()(F.K5, { [F.Iy]: m }),
            "aria-label": s,
            "aria-disabled": m,
            "data-testid": g,
            innerRef: t,
            ...E,
            children: (0, r.jsx)(u.animated.div, {
                className: F.K5,
                style: {
                    opacity: (0, u.to)([l.to({ range: [0, 1], output: [0, 1] })], (e) => `${a ? e : Math.pow(e, 8)}`),
                    height: { [c.n4.LG]: "32px", [c.n4.MD]: "24px" }[v],
                },
                children: (0, r.jsx)(n, {
                    size: Q[v],
                    color: !0 !== m ? o.A.colors.WHITE : o.A.colors.TEXT_MUTED,
                    className: i()(F.jk, { [F.x2]: d, [F.Wr]: !m }),
                }),
            }),
        }),
    });
});
var $ = n(91034),
    Y = n(710434),
    z = n(634156),
    X = n(652215),
    V = n(445563);
let W = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    H = W[0],
    Z = W[W.length - 1];
function J(e) {
    let {
            videoRef: t,
            playerState: n,
            animSpring: a,
            visible: b,
            seekForwardEnabled: y,
            hideCaptionBtn: S = !1,
            hideTranscriptBtn: C = !1,
            hideSkipButtons: R = !1,
            hideFullScreenBtn: N = !1,
            hidePlaybackSpeedBtn: A = !1,
            size: L,
            downloadUrl: T,
            downloadContentType: j,
            extraButtons: D,
            autoFocus: k = !1,
            keyDownHandlerRef: M,
            volume: I,
            muted: G,
            transcriptEnabled: Q,
            captionEnabled: W,
            fullScreenEnabled: H,
            handlePlaybackBtnClick: Z,
            handleTranscriptBtnClick: J,
            handleCaptionBtnClick: ee,
            handleFullScreenBtnClick: en,
            handleSeekBackBtnClick: er,
            handleSeekForwardBtnClick: el,
            autoHideVolumeSlider: ea = !1,
            compactDurationTime: ei = !1,
            handleControlBarPendingInteraction: eu,
            onVolumeChange: es,
            onMutedChange: eo,
        } = e,
        ec = (0, s.bG)([w.A], () => w.A.useReducedMotion),
        ed = (0, s.bG)([w.A], () => w.A.keyboardModeEnabled),
        [em, ep] = l.useState(G ? 0 : I),
        [ef, eh] = l.useState(!1),
        [ex, ev] = l.useState(!1),
        [{ volumeAnimSpring: eg }, eE] = (0, m.z)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        eb = l.useRef(null),
        [ey, eS] = l.useState(1),
        eC = l.useCallback(
            (e) => {
                eS(e), null != t.current && (t.current.playbackRate = e);
            },
            [t],
        ),
        eR = l.useCallback(() => {
            if (null == T) return;
            let e = j?.split("/");
            P.default.track(X.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(T, "_blank");
        }, [T, j]),
        eN = l.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== em && ep(e));
            },
            [t, em],
        ),
        eA = l.useCallback(() => {
            if (null != t.current)
                if (0 === em) {
                    let e = 0 === I ? 0.3 : I;
                    eN(e), eo(!1), es(e);
                } else es(em), eN(0), eo(!0);
        }, [t, em, eN, I, eo, es]),
        ew = () => {
            eh(!0);
        },
        eP = () => {
            eh(!1);
        },
        eL = l.useCallback(
            (e) => {
                switch (e.key) {
                    case c.TJ.PLAYBACK:
                        Z();
                        break;
                    case c.TJ.SPACE:
                        ed || (e.preventDefault(), Z());
                        break;
                    case c.TJ.SEEK_BACK:
                        er();
                        break;
                    case c.TJ.SEEK_FORWARD:
                        el();
                        break;
                    case c.TJ.CAPTION:
                        S || ee();
                        break;
                    case c.TJ.FULLSCREEN:
                        N || en();
                        break;
                    case c.TJ.MUTE:
                        eA();
                }
            },
            [ee, en, Z, er, el, eA, S, N, ed],
        );
    l.useEffect(() => {
        k && null != eb.current && eb.current.focus();
    }, [k]),
        l.useEffect(
            () => (
                null != M && (M.current = eL),
                () => {
                    null != M && (M.current = null);
                }
            ),
            [eL, M],
        ),
        l.useEffect(
            () => (
                eE({ volumeAnimSpring: !ea || ex || ef ? 1 : 0, immediate: ec }),
                () => {
                    eg.stop();
                }
            ),
            [ea, ex, ef, eE, ec, eg],
        );
    let eT = 0 === em ? p._ : em < 0.5 ? f.S : h.H,
        { icon: ej, label: eD } = O[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: F.X3,
                children: [
                    (0, r.jsx)(_, {
                        iconComponent: ej,
                        animationTime: a,
                        visible: b,
                        ariaLabel: eD,
                        tooltipLabel: eD,
                        shortcut: c.TJ.PLAYBACK,
                        onClick: Z,
                        ref: eb,
                        buttonSize: U[L],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !R &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(_, {
                                    iconComponent: Y.q,
                                    animationTime: a,
                                    visible: b,
                                    onClick: er,
                                    ariaLabel: B.intl.string(V.default["dRVF+Z"]),
                                    tooltipLabel: B.intl.string(V.default["dRVF+Z"]),
                                    shortcut: c.TJ.SEEK_BACK,
                                    buttonSize: U[L],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(_, {
                                    iconComponent: z.i,
                                    animationTime: a,
                                    visible: b,
                                    onClick: el,
                                    disabled: !y,
                                    ariaLabel: y ? B.intl.string(V.default.yV2FLL) : B.intl.string(V.default.YWbiPw),
                                    tooltipLabel: y ? B.intl.string(V.default.yV2FLL) : B.intl.string(V.default.YWbiPw),
                                    tooltipDelayMs: 1500 * !!y,
                                    shortcut: c.TJ.SEEK_FORWARD,
                                    buttonSize: U[L],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(u.animated.div, {
                className: i()(F.X3, F.L1),
                style: {
                    opacity: (0, u.to)([a.to({ range: [0, 1], output: [0, 1] })], (e) => `${b ? e : Math.pow(e, 8)}`),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: ew,
                        onMouseLeave: eP,
                        onFocus: ew,
                        onBlur: eP,
                        className: F.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(_, {
                                iconComponent: eT,
                                animationTime: a,
                                visible: b,
                                onClick: eA,
                                ariaLabel: B.intl.string(V.default.XiLvuG),
                                tooltipLabel: B.intl.string(V.default.XiLvuG),
                                shortcut: c.TJ.MUTE,
                                buttonSize: U[L],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(u.animated.div, {
                                className: F.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, u.to)(
                                        [eg.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${b ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, u.to)([eg.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(d.A, {
                                    mini: !0,
                                    value: em,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        eN(e),
                                            es(e),
                                            ex && (ev(!1), eu(!1)),
                                            G && e > 0 ? eo(!1) : G || 0 !== e || eo(!0);
                                    },
                                    asValueChanges: (e) => {
                                        eN(e), ex || (ev(!0), eu(!0));
                                    },
                                    fillStyles: { backgroundColor: o.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": B.intl.string(V.default.XiLvuG),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(K, { videoRef: t, compact: ei }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(F.X3, F.ST),
                children: [
                    (0, r.jsx)(q, {
                        canCollapse: null != D && D.length > 0,
                        buttons: (function (e) {
                            let {
                                    hideTranscriptBtn: t = !1,
                                    hideCaptionBtn: n = !1,
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
                                t ||
                                    m.push({
                                        id: "transcript",
                                        iconComponent: g.u,
                                        label: B.intl.string(V.default["6EjGUv"]),
                                        onClick: i,
                                        active: r && a !== c.Q6.ENDED,
                                        disabled: a === c.Q6.ENDED,
                                        "data-testid": "discord-web-video-player-transcript-btn",
                                    }),
                                n ||
                                    m.push({
                                        id: "caption",
                                        iconComponent: $.I,
                                        label: B.intl.string(V.default["0DbPcL"]),
                                        onClick: u,
                                        active: l,
                                        shortcut: c.TJ.CAPTION,
                                        "data-testid": "discord-web-video-player-captions-btn",
                                    }),
                                null != s &&
                                    m.push({
                                        id: "download",
                                        iconComponent: E.s,
                                        label: B.intl.string(B.t["1WjMbC"]),
                                        onClick: o,
                                        "data-testid": "discord-web-video-player-download-btn",
                                    }),
                                null != d && m.push(...d),
                                m
                            );
                        })({
                            hideTranscriptBtn: C,
                            hideCaptionBtn: S,
                            transcriptEnabled: Q,
                            captionEnabled: W,
                            playerState: n,
                            handleTranscriptBtnClick: J,
                            handleCaptionBtnClick: ee,
                            downloadUrl: T,
                            handleDownloadButtonClick: eR,
                            extraButtons: D,
                        }),
                        animSpring: a,
                        visible: b,
                        size: L,
                    }),
                    !A &&
                        (0, r.jsx)(et, {
                            playbackRate: ey,
                            onPlaybackRateChange: eC,
                            animSpring: a,
                            visible: b,
                            size: L,
                            handleControlBarPendingInteraction: eu,
                        }),
                    !N &&
                        (0, r.jsx)(_, {
                            iconComponent: H ? x.z : v.T,
                            animationTime: a,
                            visible: b,
                            onClick: en,
                            ariaLabel: B.intl.string(V.default.z9Cnzv),
                            tooltipLabel: B.intl.string(V.default.z9Cnzv),
                            shortcut: c.TJ.FULLSCREEN,
                            buttonSize: U[L],
                            "data-testid": "discord-web-video-player-fullscreen-btn",
                        }),
                ],
            }),
        ],
    });
}
function q(e) {
    let { buttons: t, canCollapse: n, animSpring: l, visible: a, size: i } = e;
    return 0 === t.length
        ? null
        : !n || t.length <= 1
          ? (0, r.jsx)(r.Fragment, {
                children: t.map((e) =>
                    (0, r.jsx)(
                        _,
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
                            buttonSize: U[i],
                            "data-testid": e["data-testid"],
                        },
                        e.id,
                    ),
                ),
            })
          : (0, r.jsx)(ee, { buttons: t, animSpring: l, visible: a, size: i });
}
function ee(e) {
    let { buttons: t, animSpring: n, visible: a, size: i } = e,
        u = l.useRef(null),
        s = B.intl.string(B.t.PdRCRg);
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
            (0, r.jsx)(_, {
                ref: u,
                iconComponent: C.j,
                animationTime: n,
                visible: a,
                ariaLabel: s,
                tooltipLabel: s,
                buttonSize: U[i],
                clickableProps: e,
                "data-testid": "discord-web-video-player-overflow-menu-button",
            }),
    });
}
function et(e) {
    let {
            playbackRate: t,
            onPlaybackRateChange: n,
            animSpring: a,
            visible: i,
            size: u,
            handleControlBarPendingInteraction: s,
        } = e,
        o = l.useRef(null),
        c = B.intl.string(V.default.ZwPhbB);
    return (0, r.jsx)(b.Y, {
        targetElementRef: o,
        position: "top",
        align: "right",
        onRequestOpen: () => s(!0),
        onRequestClose: () => {
            s(!1), o.current?.focus();
        },
        renderPopout: () => (0, r.jsx)(en, { playbackRate: t, onPlaybackRateChange: n, label: c }),
        children: (e) =>
            (0, r.jsx)(_, {
                ref: o,
                iconComponent: R.$,
                animationTime: a,
                visible: i,
                ariaLabel: c,
                tooltipLabel: c,
                buttonSize: U[u],
                clickableProps: { ...e, "aria-haspopup": "dialog" },
                "data-testid": "discord-web-video-player-playback-speed-btn",
            }),
    });
}
function en(e) {
    let { playbackRate: t, onPlaybackRateChange: n, label: a } = e,
        i = l.useRef(null);
    return (
        (0, N.t)(i),
        (0, r.jsxs)("div", {
            ref: i,
            className: F.qp,
            role: "dialog",
            "aria-label": a,
            "data-testid": "discord-web-video-player-playback-speed-popout",
            children: [
                (0, r.jsx)(A.D, {
                    variant: "heading-md/semibold",
                    color: "text-default",
                    className: F.xl,
                    children: a,
                }),
                (0, r.jsx)(d.A, {
                    value: t,
                    initialValue: 1,
                    minValue: H,
                    maxValue: Z,
                    markers: W,
                    stickToMarkers: !0,
                    defaultValue: 1,
                    onValueChange: n,
                    asValueChanges: n,
                    onMarkerRender: (e) => `${e}x`,
                    orientation: "horizontal",
                    "aria-label": a,
                    getAriaValueText: (e) => `${e}x`,
                }),
            ],
        })
    );
}
