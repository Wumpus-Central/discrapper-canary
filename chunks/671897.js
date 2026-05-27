n.d(t, { A: () => J }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(873174),
    u = n(17928),
    o = n(661531),
    c = n(876230),
    d = n(106236),
    m = n(717421),
    h = n(358618),
    f = n(793920),
    p = n(983851),
    v = n(86147),
    x = n(729475),
    g = n(261958),
    E = n(32880),
    b = n(922016),
    S = n(980707),
    w = n(477782),
    C = n(365199),
    N = n(268791),
    y = n(315710),
    A = n(534514),
    R = n(775602),
    T = n(174459),
    j = n(61491),
    L = n(990078),
    M = n(113494),
    k = n(782134),
    P = n(417270),
    D = n(939249),
    I = n(834730),
    B = n(375708),
    F = n(834926);
let _ = "-:--",
    U = {
        [c.Q6.PLAYING]: { icon: M.E, label: B.intl.string(B.t.ZcgDJX) },
        [c.Q6.PAUSED]: { icon: k.u, label: B.intl.string(B.t.RscU7I) },
        [c.Q6.ENDED]: { icon: P.m, label: B.intl.string(B.t.hsvh0i) },
    },
    O = { [c.oA.MD]: c.n4.MD, [c.oA.LG]: c.n4.LG },
    K = { [c.n4.MD]: "md", [c.n4.LG]: "lg" };
function $(e) {
    let { videoRef: t, compact: n = !1 } = e,
        [a, s] = l.useState(null),
        [u, o] = l.useState(null),
        [c, d] = l.useState(!1);
    l.useEffect(() => {
        let e = t.current;
        function n() {
            null != e && (s(e.currentTime), o(e.duration));
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
    let m = Number.isFinite(a) && Number.isFinite(u) ? Math.max(0, u - a) : null,
        h = c ? (null != m ? `-${(0, j.rB)(m)}` : _) : Number.isFinite(a) ? (0, j.rB)(a) : _,
        f = Number.isFinite(u) ? (0, j.rB)(u) : _;
    return (0, r.jsxs)(D.D, {
        className: i()(F.d$, F.jk),
        "data-testid": "discord-web-video-player-duration",
        onClick: () => d((e) => !e),
        children: [
            (0, r.jsx)(I.E, { variant: "text-sm/normal", className: F.Ue, tabularNumbers: !0, children: h }),
            !n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(I.E, { variant: "text-sm/normal", className: F.zO, children: "/" }),
                        (0, r.jsx)(I.E, {
                            variant: "text-sm/normal",
                            className: F.Ue,
                            tabularNumbers: !0,
                            children: f,
                        }),
                    ],
                }),
        ],
    });
}
let Q = l.forwardRef(function (e, t) {
    let {
        iconComponent: n,
        animationTime: l,
        visible: a,
        ariaLabel: u,
        active: d,
        disabled: m,
        tooltipLabel: h,
        tooltipDelayMs: f = 1500,
        shortcut: p,
        onClick: v,
        buttonSize: x = c.n4.MD,
        "data-testid": g,
        clickableProps: E,
    } = e;
    return (0, r.jsx)(L.m, {
        text: a ? h : void 0,
        keyboardShortcut: "" !== (p ?? "").trim() ? p : void 0,
        delay: f,
        children: (0, r.jsx)(D.D, {
            onClick: !0 === m ? void 0 : v,
            className: i()(F.K5, { [F.Iy]: m }),
            "aria-label": u,
            "aria-disabled": m,
            "data-testid": g,
            innerRef: t,
            ...E,
            children: (0, r.jsx)(s.animated.div, {
                className: F.K5,
                style: {
                    opacity: (0, s.to)([l.to({ range: [0, 1], output: [0, 1] })], (e) => `${a ? e : Math.pow(e, 8)}`),
                    height: { [c.n4.LG]: "32px", [c.n4.MD]: "24px" }[x],
                },
                children: (0, r.jsx)(n, {
                    size: K[x],
                    color: !0 !== m ? o.A.colors.WHITE : o.A.colors.TEXT_MUTED,
                    className: i()(F.jk, { [F.x2]: d, [F.Wr]: !m }),
                }),
            }),
        }),
    });
});
var V = n(91034),
    G = n(710434),
    Y = n(634156),
    H = n(652215),
    Z = n(445563);
let z = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    X = z[0],
    W = z[z.length - 1];
function J(e) {
    let {
            videoRef: t,
            playerState: n,
            animSpring: a,
            visible: b,
            seekForwardEnabled: S,
            hideCaptionBtn: w = !1,
            hideTranscriptBtn: C = !1,
            hideSkipButtons: N = !1,
            hideFullScreenBtn: y = !1,
            hidePlaybackSpeedBtn: A = !1,
            size: j,
            downloadUrl: L,
            downloadContentType: M,
            extraButtons: k,
            autoFocus: P = !1,
            keyDownHandlerRef: D,
            volume: I,
            muted: _,
            transcriptEnabled: K,
            captionEnabled: z,
            fullScreenEnabled: X,
            handlePlaybackBtnClick: W,
            handleTranscriptBtnClick: J,
            handleCaptionBtnClick: ee,
            handleFullScreenBtnClick: en,
            handleSeekBackBtnClick: er,
            handleSeekForwardBtnClick: el,
            autoHideVolumeSlider: ea = !1,
            compactTimeDisplay: ei = !1,
            handleControlBarPendingInteraction: es,
            onVolumeChange: eu,
            onMutedChange: eo,
        } = e,
        ec = (0, u.bG)([R.A], () => R.A.useReducedMotion),
        ed = (0, u.bG)([R.A], () => R.A.keyboardModeEnabled),
        [em, eh] = l.useState(_ ? 0 : I),
        [ef, ep] = l.useState(!1),
        [ev, ex] = l.useState(!1),
        [{ volumeAnimSpring: eg }, eE] = (0, m.z)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        eb = l.useRef(null),
        [eS, ew] = l.useState(1),
        eC = l.useCallback(
            (e) => {
                ew(e), null != t.current && (t.current.playbackRate = e);
            },
            [t],
        ),
        eN = l.useCallback(() => {
            if (null == L) return;
            let e = M?.split("/");
            T.default.track(H.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(L, "_blank");
        }, [L, M]),
        ey = l.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== em && eh(e));
            },
            [t, em],
        ),
        eA = l.useCallback(() => {
            if (null != t.current)
                if (0 === em) {
                    let e = 0 === I ? 0.3 : I;
                    ey(e), eo(!1), eu(e);
                } else eu(em), ey(0), eo(!0);
        }, [t, em, ey, I, eo, eu]),
        eR = () => {
            ep(!0);
        },
        eT = () => {
            ep(!1);
        },
        ej = l.useCallback(
            (e) => {
                switch (e.key) {
                    case c.TJ.PLAYBACK:
                        W();
                        break;
                    case c.TJ.SPACE:
                        ed || (e.preventDefault(), W());
                        break;
                    case c.TJ.SEEK_BACK:
                        er();
                        break;
                    case c.TJ.SEEK_FORWARD:
                        el();
                        break;
                    case c.TJ.CAPTION:
                        w || ee();
                        break;
                    case c.TJ.FULLSCREEN:
                        y || en();
                        break;
                    case c.TJ.MUTE:
                        eA();
                }
            },
            [ee, en, W, er, el, eA, w, y, ed],
        );
    l.useEffect(() => {
        P && null != eb.current && eb.current.focus();
    }, [P]),
        l.useEffect(
            () => (
                null != D && (D.current = ej),
                () => {
                    null != D && (D.current = null);
                }
            ),
            [ej, D],
        ),
        l.useEffect(
            () => (
                eE({ volumeAnimSpring: !ea || ev || ef ? 1 : 0, immediate: ec }),
                () => {
                    eg.stop();
                }
            ),
            [ea, ev, ef, eE, ec, eg],
        );
    let eL = 0 === em ? h._ : em < 0.5 ? f.S : p.H,
        { icon: eM, label: ek } = U[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: F.X3,
                children: [
                    (0, r.jsx)(Q, {
                        iconComponent: eM,
                        animationTime: a,
                        visible: b,
                        ariaLabel: ek,
                        tooltipLabel: ek,
                        shortcut: c.TJ.PLAYBACK,
                        onClick: W,
                        ref: eb,
                        buttonSize: O[j],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !N &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(Q, {
                                    iconComponent: G.q,
                                    animationTime: a,
                                    visible: b,
                                    onClick: er,
                                    ariaLabel: B.intl.string(Z.default["dRVF+Z"]),
                                    tooltipLabel: B.intl.string(Z.default["dRVF+Z"]),
                                    shortcut: c.TJ.SEEK_BACK,
                                    buttonSize: O[j],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(Q, {
                                    iconComponent: Y.i,
                                    animationTime: a,
                                    visible: b,
                                    onClick: el,
                                    disabled: !S,
                                    ariaLabel: S ? B.intl.string(Z.default.yV2FLL) : B.intl.string(Z.default.YWbiPw),
                                    tooltipLabel: S ? B.intl.string(Z.default.yV2FLL) : B.intl.string(Z.default.YWbiPw),
                                    tooltipDelayMs: 1500 * !!S,
                                    shortcut: c.TJ.SEEK_FORWARD,
                                    buttonSize: O[j],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(s.animated.div, {
                className: i()(F.X3, F.L1),
                style: {
                    opacity: (0, s.to)([a.to({ range: [0, 1], output: [0, 1] })], (e) => `${b ? e : Math.pow(e, 8)}`),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: eR,
                        onMouseLeave: eT,
                        onFocus: eR,
                        onBlur: eT,
                        className: F.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(Q, {
                                iconComponent: eL,
                                animationTime: a,
                                visible: b,
                                onClick: eA,
                                ariaLabel: B.intl.string(Z.default.XiLvuG),
                                tooltipLabel: B.intl.string(Z.default.XiLvuG),
                                shortcut: c.TJ.MUTE,
                                buttonSize: O[j],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: F.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, s.to)(
                                        [eg.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${b ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, s.to)([eg.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(d.A, {
                                    mini: !0,
                                    value: em,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        ey(e),
                                            eu(e),
                                            ev && (ex(!1), es(!1)),
                                            _ && e > 0 ? eo(!1) : _ || 0 !== e || eo(!0);
                                    },
                                    asValueChanges: (e) => {
                                        ey(e), ev || (ex(!0), es(!0));
                                    },
                                    fillStyles: { backgroundColor: o.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": B.intl.string(Z.default.XiLvuG),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)($, { videoRef: t, compact: ei }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(F.X3, F.ST),
                children: [
                    (0, r.jsx)(q, {
                        canCollapse: null != k && k.length > 0,
                        buttons: (function (e) {
                            let {
                                    hideTranscriptBtn: t = !1,
                                    hideCaptionBtn: n = !1,
                                    transcriptEnabled: r,
                                    captionEnabled: l,
                                    playerState: a,
                                    handleTranscriptBtnClick: i,
                                    handleCaptionBtnClick: s,
                                    downloadUrl: u,
                                    handleDownloadButtonClick: o,
                                    extraButtons: d,
                                } = e,
                                m = [];
                            return (
                                t ||
                                    m.push({
                                        id: "transcript",
                                        iconComponent: g.u,
                                        label: B.intl.string(Z.default["6EjGUv"]),
                                        onClick: i,
                                        active: r && a !== c.Q6.ENDED,
                                        disabled: a === c.Q6.ENDED,
                                        "data-testid": "discord-web-video-player-transcript-btn",
                                    }),
                                n ||
                                    m.push({
                                        id: "caption",
                                        iconComponent: V.I,
                                        label: B.intl.string(Z.default["0DbPcL"]),
                                        onClick: s,
                                        active: l,
                                        shortcut: c.TJ.CAPTION,
                                        "data-testid": "discord-web-video-player-captions-btn",
                                    }),
                                null != u &&
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
                            hideCaptionBtn: w,
                            transcriptEnabled: K,
                            captionEnabled: z,
                            playerState: n,
                            handleTranscriptBtnClick: J,
                            handleCaptionBtnClick: ee,
                            downloadUrl: L,
                            handleDownloadButtonClick: eN,
                            extraButtons: k,
                        }),
                        animSpring: a,
                        visible: b,
                        size: j,
                    }),
                    !A &&
                        (0, r.jsx)(et, {
                            playbackRate: eS,
                            onPlaybackRateChange: eC,
                            animSpring: a,
                            visible: b,
                            size: j,
                            handleControlBarPendingInteraction: es,
                        }),
                    !y &&
                        (0, r.jsx)(Q, {
                            iconComponent: X ? v.z : x.T,
                            animationTime: a,
                            visible: b,
                            onClick: en,
                            ariaLabel: B.intl.string(Z.default.z9Cnzv),
                            tooltipLabel: B.intl.string(Z.default.z9Cnzv),
                            shortcut: c.TJ.FULLSCREEN,
                            buttonSize: O[j],
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
                        Q,
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
                            buttonSize: O[i],
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
        s = l.useRef(null),
        u = B.intl.string(B.t.PdRCRg);
    return (0, r.jsx)(b.Y, {
        targetElementRef: s,
        position: "top",
        align: "right",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(S.W, {
                navId: "video-player-overflow",
                "aria-label": u,
                onClose: n,
                onSelect: n,
                children: t.map((e) => {
                    let t = { type: "icon", icon: e.iconComponent };
                    return null != e.active
                        ? (0, r.jsx)(
                              w.sL,
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
                              w.Dr,
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
            (0, r.jsx)(Q, {
                ref: s,
                iconComponent: C.j,
                animationTime: n,
                visible: a,
                ariaLabel: u,
                tooltipLabel: u,
                buttonSize: O[i],
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
            size: s,
            handleControlBarPendingInteraction: u,
        } = e,
        o = l.useRef(null),
        c = B.intl.string(Z.default.ZwPhbB);
    return (0, r.jsx)(b.Y, {
        targetElementRef: o,
        position: "top",
        align: "right",
        onRequestOpen: () => u(!0),
        onRequestClose: () => {
            u(!1), o.current?.focus();
        },
        renderPopout: () => (0, r.jsx)(en, { playbackRate: t, onPlaybackRateChange: n, label: c }),
        children: (e) =>
            (0, r.jsx)(Q, {
                ref: o,
                iconComponent: N.$,
                animationTime: a,
                visible: i,
                ariaLabel: c,
                tooltipLabel: c,
                buttonSize: O[s],
                clickableProps: { ...e, "aria-haspopup": "dialog" },
                "data-testid": "discord-web-video-player-playback-speed-btn",
            }),
    });
}
function en(e) {
    let { playbackRate: t, onPlaybackRateChange: n, label: a } = e,
        i = l.useRef(null);
    return (
        (0, y.t)(i),
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
                    minValue: X,
                    maxValue: W,
                    markers: z,
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
