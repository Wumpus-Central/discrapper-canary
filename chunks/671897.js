"use strict";
n.d(t, { A: () => Q }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(873174),
    l = n(17928),
    u = n(661531),
    c = n(876230),
    d = n(106236),
    _ = n(717421),
    h = n(358618),
    f = n(793920),
    p = n(983851),
    E = n(86147),
    m = n(729475),
    g = n(261958),
    A = n(32880),
    I = n(922016),
    T = n(980707),
    S = n(477782),
    y = n(365199),
    N = n(268791),
    v = n(315710),
    C = n(534514),
    R = n(775602),
    O = n(174459),
    b = n(61491),
    D = n(990078),
    L = n(113494),
    w = n(782134),
    M = n(417270),
    P = n(939249),
    x = n(834730),
    k = n(375708),
    U = n(834926);
let G = "-:--",
    F = {
        [c.Q6.PLAYING]: { icon: L.E, label: k.intl.string(k.t.ZcgDJX) },
        [c.Q6.PAUSED]: { icon: w.u, label: k.intl.string(k.t.RscU7I) },
        [c.Q6.ENDED]: { icon: M.m, label: k.intl.string(k.t.hsvh0i) },
    },
    V = { [c.oA.MD]: c.n4.MD, [c.oA.LG]: c.n4.LG },
    B = { [c.n4.MD]: "md", [c.n4.LG]: "lg" };
function H(e) {
    let { videoRef: t, compact: n = !1 } = e,
        [s, o] = r.useState(null),
        [l, u] = r.useState(null),
        [c, d] = r.useState(!1);
    r.useEffect(() => {
        let e = t.current;
        function n() {
            null != e && (o(e.currentTime), u(e.duration));
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
    let _ = Number.isFinite(s) && Number.isFinite(l) ? Math.max(0, l - s) : null,
        h = c ? (null != _ ? `-${(0, b.rB)(_)}` : G) : Number.isFinite(s) ? (0, b.rB)(s) : G,
        f = Number.isFinite(l) ? (0, b.rB)(l) : G;
    return (0, i.jsxs)(P.D, {
        className: a()(U.d$, U.jk),
        "data-testid": "discord-web-video-player-duration",
        onClick: () => d((e) => !e),
        children: [
            (0, i.jsx)(x.E, { variant: "text-sm/normal", className: U.Ue, tabularNumbers: !0, children: h }),
            !n &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(x.E, { variant: "text-sm/normal", className: U.zO, children: "/" }),
                        (0, i.jsx)(x.E, {
                            variant: "text-sm/normal",
                            className: U.Ue,
                            tabularNumbers: !0,
                            children: f,
                        }),
                    ],
                }),
        ],
    });
}
let j = r.forwardRef(function (e, t) {
    let {
        iconComponent: n,
        animationTime: r,
        visible: s,
        ariaLabel: l,
        active: d,
        disabled: _,
        tooltipLabel: h,
        tooltipDelayMs: f = 1500,
        shortcut: p,
        onClick: E,
        buttonSize: m = c.n4.MD,
        "data-testid": g,
        clickableProps: A,
    } = e;
    return (0, i.jsx)(D.m, {
        text: s ? h : void 0,
        keyboardShortcut: "" !== (p ?? "").trim() ? p : void 0,
        delay: f,
        children: (0, i.jsx)(P.D, {
            onClick: !0 === _ ? void 0 : E,
            className: a()(U.K5, { [U.Iy]: _ }),
            "aria-label": l,
            "aria-disabled": _,
            "data-testid": g,
            innerRef: t,
            ...A,
            children: (0, i.jsx)(o.animated.div, {
                className: U.K5,
                style: {
                    opacity: (0, o.to)([r.to({ range: [0, 1], output: [0, 1] })], (e) => `${s ? e : Math.pow(e, 8)}`),
                    height: { [c.n4.LG]: "32px", [c.n4.MD]: "24px" }[m],
                },
                children: (0, i.jsx)(n, {
                    size: B[m],
                    color: !0 !== _ ? u.A.colors.WHITE : u.A.colors.TEXT_MUTED,
                    className: a()(U.jk, { [U.x2]: d, [U.Wr]: !_ }),
                }),
            }),
        }),
    });
});
var Y = n(91034),
    W = n(710434),
    K = n(634156),
    $ = n(652215),
    z = n(445563);
let q = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    X = q[0],
    Z = q[q.length - 1];
function Q(e) {
    let {
            videoRef: t,
            playerState: n,
            animSpring: s,
            visible: I,
            seekForwardEnabled: T,
            hideCaptionBtn: S = !1,
            hideTranscriptBtn: y = !1,
            hideSkipButtons: N = !1,
            hideFullScreenBtn: v = !1,
            hidePlaybackSpeedBtn: C = !1,
            size: b,
            downloadUrl: D,
            downloadContentType: L,
            extraButtons: w,
            autoFocus: M = !1,
            keyDownHandlerRef: P,
            volume: x,
            muted: G,
            transcriptEnabled: B,
            captionEnabled: q,
            fullScreenEnabled: X,
            handlePlaybackBtnClick: Z,
            handleTranscriptBtnClick: Q,
            handleCaptionBtnClick: ee,
            handleFullScreenBtnClick: en,
            handleSeekBackBtnClick: ei,
            handleSeekForwardBtnClick: er,
            autoHideVolumeSlider: es = !1,
            compactTimeDisplay: ea = !1,
            handleControlBarPendingInteraction: eo,
            onVolumeChange: el,
            onMutedChange: eu,
        } = e,
        ec = (0, l.bG)([R.A], () => R.A.useReducedMotion),
        ed = (0, l.bG)([R.A], () => R.A.keyboardModeEnabled),
        [e_, eh] = r.useState(G ? 0 : x),
        [ef, ep] = r.useState(!1),
        [eE, em] = r.useState(!1),
        [{ volumeAnimSpring: eg }, eA] = (0, _.z)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        eI = r.useRef(null),
        [eT, eS] = r.useState(1),
        ey = r.useCallback(
            (e) => {
                eS(e), null != t.current && (t.current.playbackRate = e);
            },
            [t],
        ),
        eN = r.useCallback(() => {
            if (null == D) return;
            let e = L?.split("/");
            O.default.track($.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(D, "_blank");
        }, [D, L]),
        ev = r.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== e_ && eh(e));
            },
            [t, e_],
        ),
        eC = r.useCallback(() => {
            if (null != t.current)
                if (0 === e_) {
                    let e = 0 === x ? 0.3 : x;
                    ev(e), eu(!1), el(e);
                } else el(e_), ev(0), eu(!0);
        }, [t, e_, ev, x, eu, el]),
        eR = () => {
            ep(!0);
        },
        eO = () => {
            ep(!1);
        },
        eb = r.useCallback(
            (e) => {
                switch (e.key) {
                    case c.TJ.PLAYBACK:
                        Z();
                        break;
                    case c.TJ.SPACE:
                        ed || (e.preventDefault(), Z());
                        break;
                    case c.TJ.SEEK_BACK:
                        ei();
                        break;
                    case c.TJ.SEEK_FORWARD:
                        er();
                        break;
                    case c.TJ.CAPTION:
                        S || ee();
                        break;
                    case c.TJ.FULLSCREEN:
                        v || en();
                        break;
                    case c.TJ.MUTE:
                        eC();
                }
            },
            [ee, en, Z, ei, er, eC, S, v, ed],
        );
    r.useEffect(() => {
        M && null != eI.current && eI.current.focus();
    }, [M]),
        r.useEffect(
            () => (
                null != P && (P.current = eb),
                () => {
                    null != P && (P.current = null);
                }
            ),
            [eb, P],
        ),
        r.useEffect(
            () => (
                eA({ volumeAnimSpring: !es || eE || ef ? 1 : 0, immediate: ec }),
                () => {
                    eg.stop();
                }
            ),
            [es, eE, ef, eA, ec, eg],
        );
    let eD = 0 === e_ ? h._ : e_ < 0.5 ? f.S : p.H,
        { icon: eL, label: ew } = F[n];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: U.X3,
                children: [
                    (0, i.jsx)(j, {
                        iconComponent: eL,
                        animationTime: s,
                        visible: I,
                        ariaLabel: ew,
                        tooltipLabel: ew,
                        shortcut: c.TJ.PLAYBACK,
                        onClick: Z,
                        ref: eI,
                        buttonSize: V[b],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !N &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(j, {
                                    iconComponent: W.q,
                                    animationTime: s,
                                    visible: I,
                                    onClick: ei,
                                    ariaLabel: k.intl.string(z.default["dRVF+Z"]),
                                    tooltipLabel: k.intl.string(z.default["dRVF+Z"]),
                                    shortcut: c.TJ.SEEK_BACK,
                                    buttonSize: V[b],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, i.jsx)(j, {
                                    iconComponent: K.i,
                                    animationTime: s,
                                    visible: I,
                                    onClick: er,
                                    disabled: !T,
                                    ariaLabel: T ? k.intl.string(z.default.yV2FLL) : k.intl.string(z.default.YWbiPw),
                                    tooltipLabel: T ? k.intl.string(z.default.yV2FLL) : k.intl.string(z.default.YWbiPw),
                                    tooltipDelayMs: 1500 * !!T,
                                    shortcut: c.TJ.SEEK_FORWARD,
                                    buttonSize: V[b],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, i.jsxs)(o.animated.div, {
                className: a()(U.X3, U.L1),
                style: {
                    opacity: (0, o.to)([s.to({ range: [0, 1], output: [0, 1] })], (e) => `${I ? e : Math.pow(e, 8)}`),
                },
                children: [
                    (0, i.jsxs)("div", {
                        onMouseEnter: eR,
                        onMouseLeave: eO,
                        onFocus: eR,
                        onBlur: eO,
                        className: U.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, i.jsx)(j, {
                                iconComponent: eD,
                                animationTime: s,
                                visible: I,
                                onClick: eC,
                                ariaLabel: k.intl.string(z.default.XiLvuG),
                                tooltipLabel: k.intl.string(z.default.XiLvuG),
                                shortcut: c.TJ.MUTE,
                                buttonSize: V[b],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, i.jsx)(o.animated.div, {
                                className: U.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, o.to)(
                                        [eg.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${I ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, o.to)([eg.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, i.jsx)(d.A, {
                                    mini: !0,
                                    value: e_,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        ev(e),
                                            el(e),
                                            eE && (em(!1), eo(!1)),
                                            G && e > 0 ? eu(!1) : G || 0 !== e || eu(!0);
                                    },
                                    asValueChanges: (e) => {
                                        ev(e), eE || (em(!0), eo(!0));
                                    },
                                    fillStyles: { backgroundColor: u.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": k.intl.string(z.default.XiLvuG),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(H, { videoRef: t, compact: ea }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: a()(U.X3, U.ST),
                children: [
                    (0, i.jsx)(J, {
                        canCollapse: null != w && w.length > 0,
                        buttons: (function (e) {
                            let {
                                    hideTranscriptBtn: t = !1,
                                    hideCaptionBtn: n = !1,
                                    transcriptEnabled: i,
                                    captionEnabled: r,
                                    playerState: s,
                                    handleTranscriptBtnClick: a,
                                    handleCaptionBtnClick: o,
                                    downloadUrl: l,
                                    handleDownloadButtonClick: u,
                                    extraButtons: d,
                                } = e,
                                _ = [];
                            return (
                                t ||
                                    _.push({
                                        id: "transcript",
                                        iconComponent: g.u,
                                        label: k.intl.string(z.default["6EjGUv"]),
                                        onClick: a,
                                        active: i && s !== c.Q6.ENDED,
                                        disabled: s === c.Q6.ENDED,
                                        "data-testid": "discord-web-video-player-transcript-btn",
                                    }),
                                n ||
                                    _.push({
                                        id: "caption",
                                        iconComponent: Y.I,
                                        label: k.intl.string(z.default["0DbPcL"]),
                                        onClick: o,
                                        active: r,
                                        shortcut: c.TJ.CAPTION,
                                        "data-testid": "discord-web-video-player-captions-btn",
                                    }),
                                null != l &&
                                    _.push({
                                        id: "download",
                                        iconComponent: A.s,
                                        label: k.intl.string(k.t["1WjMbC"]),
                                        onClick: u,
                                        "data-testid": "discord-web-video-player-download-btn",
                                    }),
                                null != d && _.push(...d),
                                _
                            );
                        })({
                            hideTranscriptBtn: y,
                            hideCaptionBtn: S,
                            transcriptEnabled: B,
                            captionEnabled: q,
                            playerState: n,
                            handleTranscriptBtnClick: Q,
                            handleCaptionBtnClick: ee,
                            downloadUrl: D,
                            handleDownloadButtonClick: eN,
                            extraButtons: w,
                        }),
                        animSpring: s,
                        visible: I,
                        size: b,
                    }),
                    !C &&
                        (0, i.jsx)(et, {
                            playbackRate: eT,
                            onPlaybackRateChange: ey,
                            animSpring: s,
                            visible: I,
                            size: b,
                            handleControlBarPendingInteraction: eo,
                        }),
                    !v &&
                        (0, i.jsx)(j, {
                            iconComponent: X ? E.z : m.T,
                            animationTime: s,
                            visible: I,
                            onClick: en,
                            ariaLabel: k.intl.string(z.default.z9Cnzv),
                            tooltipLabel: k.intl.string(z.default.z9Cnzv),
                            shortcut: c.TJ.FULLSCREEN,
                            buttonSize: V[b],
                            "data-testid": "discord-web-video-player-fullscreen-btn",
                        }),
                ],
            }),
        ],
    });
}
function J(e) {
    let { buttons: t, canCollapse: n, animSpring: r, visible: s, size: a } = e;
    return 0 === t.length
        ? null
        : !n || t.length <= 1
          ? (0, i.jsx)(i.Fragment, {
                children: t.map((e) =>
                    (0, i.jsx)(
                        j,
                        {
                            iconComponent: e.iconComponent,
                            animationTime: r,
                            visible: s,
                            onClick: e.onClick,
                            active: e.active,
                            disabled: e.disabled,
                            ariaLabel: e.label,
                            tooltipLabel: e.label,
                            tooltipDelayMs: e.tooltipDelayMs,
                            shortcut: e.shortcut,
                            buttonSize: V[a],
                            "data-testid": e["data-testid"],
                        },
                        e.id,
                    ),
                ),
            })
          : (0, i.jsx)(ee, { buttons: t, animSpring: r, visible: s, size: a });
}
function ee(e) {
    let { buttons: t, animSpring: n, visible: s, size: a } = e,
        o = r.useRef(null),
        l = k.intl.string(k.t.PdRCRg);
    return (0, i.jsx)(I.Y, {
        targetElementRef: o,
        position: "top",
        align: "right",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(T.W, {
                navId: "video-player-overflow",
                "aria-label": l,
                onClose: n,
                onSelect: n,
                children: t.map((e) => {
                    let t = { type: "icon", icon: e.iconComponent };
                    return null != e.active
                        ? (0, i.jsx)(
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
                        : (0, i.jsx)(
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
            (0, i.jsx)(j, {
                ref: o,
                iconComponent: y.j,
                animationTime: n,
                visible: s,
                ariaLabel: l,
                tooltipLabel: l,
                buttonSize: V[a],
                clickableProps: e,
                "data-testid": "discord-web-video-player-overflow-menu-button",
            }),
    });
}
function et(e) {
    let {
            playbackRate: t,
            onPlaybackRateChange: n,
            animSpring: s,
            visible: a,
            size: o,
            handleControlBarPendingInteraction: l,
        } = e,
        u = r.useRef(null),
        c = k.intl.string(z.default.ZwPhbB);
    return (0, i.jsx)(I.Y, {
        targetElementRef: u,
        position: "top",
        align: "right",
        onRequestOpen: () => l(!0),
        onRequestClose: () => {
            l(!1), u.current?.focus();
        },
        renderPopout: () => (0, i.jsx)(en, { playbackRate: t, onPlaybackRateChange: n, label: c }),
        children: (e) =>
            (0, i.jsx)(j, {
                ref: u,
                iconComponent: N.$,
                animationTime: s,
                visible: a,
                ariaLabel: c,
                tooltipLabel: c,
                buttonSize: V[o],
                clickableProps: { ...e, "aria-haspopup": "dialog" },
                "data-testid": "discord-web-video-player-playback-speed-btn",
            }),
    });
}
function en(e) {
    let { playbackRate: t, onPlaybackRateChange: n, label: s } = e,
        a = r.useRef(null);
    return (
        (0, v.t)(a),
        (0, i.jsxs)("div", {
            ref: a,
            className: U.qp,
            role: "dialog",
            "aria-label": s,
            "data-testid": "discord-web-video-player-playback-speed-popout",
            children: [
                (0, i.jsx)(C.D, {
                    variant: "heading-md/semibold",
                    color: "text-default",
                    className: U.xl,
                    children: s,
                }),
                (0, i.jsx)(d.A, {
                    value: t,
                    initialValue: 1,
                    minValue: X,
                    maxValue: Z,
                    markers: q,
                    stickToMarkers: !0,
                    defaultValue: 1,
                    onValueChange: n,
                    asValueChanges: n,
                    onMarkerRender: (e) => `${e}x`,
                    orientation: "horizontal",
                    "aria-label": s,
                    getAriaValueText: (e) => `${e}x`,
                }),
            ],
        })
    );
}
