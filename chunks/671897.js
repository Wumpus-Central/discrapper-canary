n.d(t, { A: () => q }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(922139),
    u = n(17928),
    o = n(661531),
    c = n(876230),
    d = n(106236),
    m = n(717421),
    h = n(358618),
    f = n(793920),
    p = n(983851),
    v = n(86147),
    g = n(729475),
    x = n(261958),
    E = n(32880),
    b = n(922016),
    S = n(980707),
    C = n(477782),
    w = n(365199),
    y = n(268791),
    A = n(315710),
    N = n(534514),
    R = n(775602),
    T = n(174459),
    L = n(61491),
    M = n(990078),
    P = n(113494),
    j = n(782134),
    k = n(417270),
    D = n(939249),
    I = n(834730),
    B = n(375708),
    F = n(834926);
let _ = "-:--",
    U = {
        [c.Q6.PLAYING]: { icon: P.E, label: B.intl.string(B.t.ZcgDJX) },
        [c.Q6.PAUSED]: { icon: j.u, label: B.intl.string(B.t.RscU7I) },
        [c.Q6.ENDED]: { icon: k.m, label: B.intl.string(B.t.hsvh0i) },
    },
    O = { [c.oA.MD]: c.n4.MD, [c.oA.LG]: c.n4.LG },
    K = { [c.n4.MD]: "md", [c.n4.LG]: "lg" };
function Q(e) {
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
        h = c ? (null != m ? `-${(0, L.rB)(m)}` : _) : Number.isFinite(a) ? (0, L.rB)(a) : _,
        f = Number.isFinite(u) ? (0, L.rB)(u) : _;
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
let $ = l.forwardRef(function (e, t) {
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
        buttonSize: g = c.n4.MD,
        "data-testid": x,
        clickableProps: E,
    } = e;
    return (0, r.jsx)(M.m, {
        text: a ? h : void 0,
        keyboardShortcut: "" !== (p ?? "").trim() ? p : void 0,
        delay: f,
        children: (0, r.jsx)(D.D, {
            onClick: !0 === m ? void 0 : v,
            className: i()(F.K5, { [F.Iy]: m }),
            "aria-label": u,
            "aria-disabled": m,
            "data-testid": x,
            innerRef: t,
            ...E,
            children: (0, r.jsx)(s.animated.div, {
                className: F.K5,
                style: {
                    opacity: (0, s.to)([l.to({ range: [0, 1], output: [0, 1] })], (e) => `${a ? e : Math.pow(e, 8)}`),
                    height: { [c.n4.LG]: "32px", [c.n4.MD]: "24px" }[g],
                },
                children: (0, r.jsx)(n, {
                    size: K[g],
                    color: !0 !== m ? o.A.colors.WHITE : o.A.colors.TEXT_MUTED,
                    className: i()(F.jk, { [F.x2]: d, [F.Wr]: !m }),
                }),
            }),
        }),
    });
});
var G = n(91034),
    V = n(710434),
    H = n(634156),
    Y = n(652215),
    Z = n(445563);
let z = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    X = z[0],
    W = z[z.length - 1];
function q(e) {
    let {
            videoRef: t,
            playerState: n,
            animSpring: a,
            visible: b,
            seekForwardEnabled: S,
            hideCaptionBtn: C = !1,
            hideTranscriptBtn: w = !1,
            hideSkipButtons: y = !1,
            hideFullScreenBtn: A = !1,
            hidePlaybackSpeedBtn: N = !1,
            size: L,
            downloadUrl: M,
            downloadContentType: P,
            extraButtons: j,
            autoFocus: k = !1,
            keyDownHandlerRef: D,
            volume: I,
            muted: _,
            transcriptEnabled: K,
            captionEnabled: z,
            fullScreenEnabled: X,
            handlePlaybackBtnClick: W,
            handleTranscriptBtnClick: q,
            handleCaptionBtnClick: ee,
            handleFullScreenBtnClick: en,
            handleSeekBackBtnClick: er,
            handleSeekForwardBtnClick: el,
            autoHideVolumeSlider: ea = !1,
            compactTimeDisplay: ei = !1,
            handleControlBarPendingInteraction: es,
            onVolumeChange: eu,
            onMutedChange: eo,
            onVolumeExpandedChange: ec,
        } = e,
        ed = (0, u.bG)([R.Ay], () => R.Ay.useReducedMotion),
        em = (0, u.bG)([R.Ay], () => R.Ay.keyboardModeEnabled),
        [eh, ef] = l.useState(_ ? 0 : I),
        [ep, ev] = l.useState(!1),
        [eg, ex] = l.useState(!1),
        [{ volumeAnimSpring: eE }, eb] = (0, m.z)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        eS = l.useRef(null),
        [eC, ew] = l.useState(1),
        ey = l.useCallback(
            (e) => {
                ew(e), null != t.current && (t.current.playbackRate = e);
            },
            [t],
        ),
        eA = l.useCallback(() => {
            if (null == M) return;
            let e = P?.split("/");
            T.default.track(Y.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(M, "_blank");
        }, [M, P]),
        eN = l.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== eh && ef(e));
            },
            [t, eh],
        ),
        eR = l.useCallback(() => {
            if (null != t.current)
                if (0 === eh) {
                    let e = 0 === I ? 0.3 : I;
                    eN(e), eo(!1), eu(e);
                } else eu(eh), eN(0), eo(!0);
        }, [t, eh, eN, I, eo, eu]),
        eT = () => {
            ev(!0), ec(!0);
        },
        eL = () => {
            ev(!1), ec(!1);
        },
        eM = l.useCallback(
            (e) => {
                if (!e.metaKey)
                    switch (e.key) {
                        case c.TJ.PLAYBACK:
                            e.stopPropagation(), W();
                            break;
                        case c.TJ.SPACE:
                            e.stopPropagation(), em || (e.preventDefault(), W());
                            break;
                        case c.TJ.SEEK_BACK:
                            e.stopPropagation(), er();
                            break;
                        case c.TJ.SEEK_FORWARD:
                            e.stopPropagation(), el();
                            break;
                        case c.TJ.CAPTION:
                            e.stopPropagation(), C || ee();
                            break;
                        case c.TJ.FULLSCREEN:
                            e.stopPropagation(), A || en();
                            break;
                        case c.TJ.MUTE:
                            e.stopPropagation(), eR();
                    }
            },
            [ee, en, W, er, el, eR, C, A, em],
        );
    l.useEffect(() => {
        k && null != eS.current && eS.current.focus();
    }, [k]),
        l.useEffect(
            () => (
                null != D && (D.current = eM),
                () => {
                    null != D && (D.current = null);
                }
            ),
            [eM, D],
        ),
        l.useEffect(
            () => (
                eb({ volumeAnimSpring: !ea || eg || ep ? 1 : 0, immediate: ed }),
                () => {
                    eE.stop();
                }
            ),
            [ea, eg, ep, eb, ed, eE],
        );
    let eP = 0 === eh ? h._ : eh < 0.5 ? f.S : p.H,
        { icon: ej, label: ek } = U[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: F.X3,
                children: [
                    (0, r.jsx)($, {
                        iconComponent: ej,
                        animationTime: a,
                        visible: b,
                        ariaLabel: ek,
                        tooltipLabel: ek,
                        shortcut: c.TJ.PLAYBACK,
                        onClick: W,
                        ref: eS,
                        buttonSize: O[L],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !y &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)($, {
                                    iconComponent: V.q,
                                    animationTime: a,
                                    visible: b,
                                    onClick: er,
                                    ariaLabel: B.intl.string(Z.default["dRVF+Z"]),
                                    tooltipLabel: B.intl.string(Z.default["dRVF+Z"]),
                                    shortcut: c.TJ.SEEK_BACK,
                                    buttonSize: O[L],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)($, {
                                    iconComponent: H.i,
                                    animationTime: a,
                                    visible: b,
                                    onClick: el,
                                    disabled: !S,
                                    ariaLabel: S ? B.intl.string(Z.default.yV2FLL) : B.intl.string(Z.default.YWbiPw),
                                    tooltipLabel: S ? B.intl.string(Z.default.yV2FLL) : B.intl.string(Z.default.YWbiPw),
                                    tooltipDelayMs: 1500 * !!S,
                                    shortcut: c.TJ.SEEK_FORWARD,
                                    buttonSize: O[L],
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
                        onMouseEnter: eT,
                        onMouseLeave: eL,
                        onFocus: eT,
                        onBlur: eL,
                        className: F.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)($, {
                                iconComponent: eP,
                                animationTime: a,
                                visible: b,
                                onClick: eR,
                                ariaLabel: B.intl.string(Z.default.XiLvuG),
                                tooltipLabel: B.intl.string(Z.default.XiLvuG),
                                shortcut: c.TJ.MUTE,
                                buttonSize: O[L],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: F.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, s.to)(
                                        [eE.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${b ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, s.to)([eE.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(d.A, {
                                    mini: !0,
                                    value: eh,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        eN(e),
                                            eu(e),
                                            eg && (ex(!1), es(!1)),
                                            _ && e > 0 ? eo(!1) : _ || 0 !== e || eo(!0);
                                    },
                                    asValueChanges: (e) => {
                                        eN(e), eg || (ex(!0), es(!0));
                                    },
                                    fillStyles: { backgroundColor: o.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": B.intl.string(Z.default.XiLvuG),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(Q, { videoRef: t, compact: ei }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(F.X3, F.ST),
                children: [
                    (0, r.jsx)(J, {
                        canCollapse: null != j && j.length > 0,
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
                                        iconComponent: x.u,
                                        label: B.intl.string(Z.default["6EjGUv"]),
                                        onClick: i,
                                        active: r && a !== c.Q6.ENDED,
                                        disabled: a === c.Q6.ENDED,
                                        "data-testid": "discord-web-video-player-transcript-btn",
                                    }),
                                n ||
                                    m.push({
                                        id: "caption",
                                        iconComponent: G.I,
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
                            hideTranscriptBtn: w,
                            hideCaptionBtn: C,
                            transcriptEnabled: K,
                            captionEnabled: z,
                            playerState: n,
                            handleTranscriptBtnClick: q,
                            handleCaptionBtnClick: ee,
                            downloadUrl: M,
                            handleDownloadButtonClick: eA,
                            extraButtons: j,
                        }),
                        animSpring: a,
                        visible: b,
                        size: L,
                    }),
                    !N &&
                        (0, r.jsx)(et, {
                            playbackRate: eC,
                            onPlaybackRateChange: ey,
                            animSpring: a,
                            visible: b,
                            size: L,
                            handleControlBarPendingInteraction: es,
                        }),
                    !A &&
                        (0, r.jsx)($, {
                            iconComponent: X ? v.z : g.T,
                            animationTime: a,
                            visible: b,
                            onClick: en,
                            ariaLabel: B.intl.string(Z.default.z9Cnzv),
                            tooltipLabel: B.intl.string(Z.default.z9Cnzv),
                            shortcut: c.TJ.FULLSCREEN,
                            buttonSize: O[L],
                            "data-testid": "discord-web-video-player-fullscreen-btn",
                        }),
                ],
            }),
        ],
    });
}
function J(e) {
    let { buttons: t, canCollapse: n, animSpring: l, visible: a, size: i } = e;
    return 0 === t.length
        ? null
        : !n || t.length <= 1
          ? (0, r.jsx)(r.Fragment, {
                children: t.map((e) =>
                    (0, r.jsx)(
                        $,
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
                              C.sL,
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
                              C.Dr,
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
            (0, r.jsx)($, {
                ref: s,
                iconComponent: w.j,
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
            (0, r.jsx)($, {
                ref: o,
                iconComponent: y.$,
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
        (0, A.t)(i),
        (0, r.jsxs)("div", {
            ref: i,
            className: F.qp,
            role: "dialog",
            "aria-label": a,
            "data-testid": "discord-web-video-player-playback-speed-popout",
            children: [
                (0, r.jsx)(N.D, {
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
