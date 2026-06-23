"use strict";
n.d(t, { A: () => J }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(308186),
    l = n(621466),
    u = n(17928),
    c = n(661531),
    d = n(876230),
    _ = n(106236),
    h = n(717421),
    f = n(358618),
    p = n(793920),
    E = n(983851),
    m = n(86147),
    g = n(729475),
    A = n(261958),
    I = n(32880),
    T = n(922016),
    S = n(980707),
    y = n(477782),
    C = n(365199),
    N = n(268791),
    v = n(315710),
    R = n(534514),
    O = n(775602),
    b = n(174459),
    D = n(61491),
    L = n(990078),
    w = n(113494),
    M = n(782134),
    P = n(417270),
    x = n(939249),
    k = n(834730),
    U = n(375708),
    G = n(834926);
let F = "-:--",
    V = {
        [d.Q6.PLAYING]: { icon: w.E, label: U.intl.string(U.t.ZcgDJX) },
        [d.Q6.PAUSED]: { icon: M.u, label: U.intl.string(U.t.RscU7I) },
        [d.Q6.ENDED]: { icon: P.m, label: U.intl.string(U.t.hsvh0i) },
    },
    B = { [d.oA.MD]: d.n4.MD, [d.oA.LG]: d.n4.LG },
    j = { [d.n4.MD]: "md", [d.n4.LG]: "lg" };
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
        h = c ? (null != _ ? `-${(0, D.rB)(_)}` : F) : Number.isFinite(s) ? (0, D.rB)(s) : F,
        f = Number.isFinite(l) ? (0, D.rB)(l) : F;
    return (0, i.jsxs)(x.D, {
        className: a()(G.d$, G.jk),
        "data-testid": "discord-web-video-player-duration",
        onClick: () => d((e) => !e),
        children: [
            (0, i.jsx)(k.E, { variant: "text-sm/normal", className: G.Ue, tabularNumbers: !0, children: h }),
            !n &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(k.E, { variant: "text-sm/normal", className: G.zO, children: "/" }),
                        (0, i.jsx)(k.E, {
                            variant: "text-sm/normal",
                            className: G.Ue,
                            tabularNumbers: !0,
                            children: f,
                        }),
                    ],
                }),
        ],
    });
}
let Y = r.forwardRef(function (e, t) {
    let {
        iconComponent: n,
        animationTime: r,
        visible: s,
        ariaLabel: l,
        active: u,
        disabled: _,
        tooltipLabel: h,
        tooltipDelayMs: f = 1500,
        shortcut: p,
        onClick: E,
        buttonSize: m = d.n4.MD,
        "data-testid": g,
        clickableProps: A,
    } = e;
    return (0, i.jsx)(L.m, {
        text: s ? h : void 0,
        keyboardShortcut: "" !== (p ?? "").trim() ? p : void 0,
        delay: f,
        children: (0, i.jsx)(x.D, {
            onClick: !0 === _ ? void 0 : E,
            className: a()(G.K5, { [G.Iy]: _ }),
            "aria-label": l,
            "aria-disabled": _,
            "data-testid": g,
            innerRef: t,
            ...A,
            children: (0, i.jsx)(o.animated.div, {
                className: G.K5,
                style: {
                    opacity: (0, o.to)([r.to({ range: [0, 1], output: [0, 1] })], (e) => `${s ? e : Math.pow(e, 8)}`),
                    height: { [d.n4.LG]: "32px", [d.n4.MD]: "24px" }[m],
                },
                children: (0, i.jsx)(n, {
                    size: j[m],
                    color: !0 !== _ ? c.A.colors.WHITE : c.A.colors.TEXT_MUTED,
                    className: a()(G.jk, { [G.x2]: u, [G.Wr]: !_ }),
                }),
            }),
        }),
    });
});
var W = n(91034),
    K = n(710434),
    $ = n(634156),
    z = n(652215),
    q = n(445563);
let Z = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    X = Z[0],
    Q = Z[Z.length - 1];
function J(e) {
    let {
            videoRef: t,
            playerState: n,
            animSpring: s,
            visible: T,
            seekForwardEnabled: S,
            hideCaptionBtn: y = !1,
            hideTranscriptBtn: C = !1,
            hideSkipButtons: N = !1,
            hideFullScreenBtn: v = !1,
            hidePlaybackSpeedBtn: R = !1,
            size: D,
            downloadUrl: L,
            downloadContentType: w,
            extraButtons: M,
            autoFocus: P = !1,
            keyDownHandlerRef: x,
            volume: k,
            muted: F,
            transcriptEnabled: j,
            captionEnabled: Z,
            fullScreenEnabled: X,
            handlePlaybackBtnClick: Q,
            handleTranscriptBtnClick: J,
            handleCaptionBtnClick: et,
            handleFullScreenBtnClick: ei,
            handleSeekBackBtnClick: er,
            handleSeekForwardBtnClick: es,
            autoHideVolumeSlider: ea = !1,
            compactTimeDisplay: eo = !1,
            handleControlBarPendingInteraction: el,
            onVolumeChange: eu,
            onMutedChange: ec,
            onVolumeExpandedChange: ed,
        } = e,
        e_ = (0, u.bG)([O.Ay], () => O.Ay.useReducedMotion),
        eh = (0, u.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        [ef, ep] = r.useState(F ? 0 : k),
        [eE, em] = r.useState(!1),
        [eg, eA] = r.useState(!1),
        [{ volumeAnimSpring: eI }, eT] = (0, h.z)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        eS = r.useRef(null),
        [ey, eC] = r.useState(1),
        eN = r.useCallback(
            (e) => {
                eC(e), null != t.current && (t.current.playbackRate = e);
            },
            [t],
        ),
        ev = r.useCallback(() => {
            if (null == L) return;
            let e = w?.split("/");
            b.default.track(z.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(L, "_blank");
        }, [L, w]),
        eR = r.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== ef && ep(e));
            },
            [t, ef],
        ),
        eO = r.useCallback(() => {
            if (null != t.current)
                if (0 === ef) {
                    let e = 0 === k ? 0.3 : k;
                    eR(e), ec(!1), eu(e);
                } else eu(ef), eR(0), ec(!0);
        }, [t, ef, eR, k, ec, eu]),
        eb = () => {
            em(!0), ed(!0);
        },
        eD = () => {
            em(!1), ed(!1);
        },
        eL = r.useCallback(
            (e) => {
                if (!(e.metaKey || ((0, l.vq)(e.target) && (0, l.Cw)(e.target))))
                    switch (e.key) {
                        case d.TJ.PLAYBACK:
                            e.stopPropagation(), Q();
                            break;
                        case d.TJ.SPACE:
                            e.stopPropagation(), eh || (e.preventDefault(), Q());
                            break;
                        case d.TJ.SEEK_BACK:
                        case d.TJ.SEEK_BACK_ALT:
                            e.stopPropagation(), er();
                            break;
                        case d.TJ.SEEK_FORWARD:
                        case d.TJ.SEEK_FORWARD_ALT:
                            e.stopPropagation(), es();
                            break;
                        case d.TJ.CAPTION:
                            e.stopPropagation(), y || et();
                            break;
                        case d.TJ.FULLSCREEN:
                            e.stopPropagation(), v || ei();
                            break;
                        case d.TJ.MUTE:
                            e.stopPropagation(), eO();
                    }
            },
            [et, ei, Q, er, es, eO, y, v, eh],
        );
    r.useEffect(() => {
        P && null != eS.current && eS.current.focus();
    }, [P]),
        r.useEffect(
            () => (
                null != x && (x.current = eL),
                () => {
                    null != x && (x.current = null);
                }
            ),
            [eL, x],
        ),
        r.useEffect(
            () => (
                eT({ volumeAnimSpring: !ea || eg || eE ? 1 : 0, immediate: e_ }),
                () => {
                    eI.stop();
                }
            ),
            [ea, eg, eE, eT, e_, eI],
        );
    let ew = 0 === ef ? f._ : ef < 0.5 ? p.S : E.H,
        { icon: eM, label: eP } = V[n];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: G.X3,
                children: [
                    (0, i.jsx)(Y, {
                        iconComponent: eM,
                        animationTime: s,
                        visible: T,
                        ariaLabel: eP,
                        tooltipLabel: eP,
                        shortcut: d.TJ.PLAYBACK,
                        onClick: Q,
                        ref: eS,
                        buttonSize: B[D],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !N &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(Y, {
                                    iconComponent: K.q,
                                    animationTime: s,
                                    visible: T,
                                    onClick: er,
                                    ariaLabel: U.intl.string(q.default["dRVF+Z"]),
                                    tooltipLabel: U.intl.string(q.default["dRVF+Z"]),
                                    shortcut: d.TJ.SEEK_BACK,
                                    buttonSize: B[D],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, i.jsx)(Y, {
                                    iconComponent: $.i,
                                    animationTime: s,
                                    visible: T,
                                    onClick: es,
                                    disabled: !S,
                                    ariaLabel: S ? U.intl.string(q.default.yV2FLL) : U.intl.string(q.default.YWbiPw),
                                    tooltipLabel: S ? U.intl.string(q.default.yV2FLL) : U.intl.string(q.default.YWbiPw),
                                    tooltipDelayMs: 1500 * !!S,
                                    shortcut: d.TJ.SEEK_FORWARD,
                                    buttonSize: B[D],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, i.jsxs)(o.animated.div, {
                className: a()(G.X3, G.L1),
                style: {
                    opacity: (0, o.to)([s.to({ range: [0, 1], output: [0, 1] })], (e) => `${T ? e : Math.pow(e, 8)}`),
                },
                children: [
                    (0, i.jsxs)("div", {
                        onMouseEnter: eb,
                        onMouseLeave: eD,
                        onFocus: eb,
                        onBlur: eD,
                        className: G.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, i.jsx)(Y, {
                                iconComponent: ew,
                                animationTime: s,
                                visible: T,
                                onClick: eO,
                                ariaLabel: U.intl.string(q.default.XiLvuG),
                                tooltipLabel: U.intl.string(q.default.XiLvuG),
                                shortcut: d.TJ.MUTE,
                                buttonSize: B[D],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, i.jsx)(o.animated.div, {
                                className: G.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, o.to)(
                                        [eI.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${T ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, o.to)([eI.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, i.jsx)(_.A, {
                                    mini: !0,
                                    value: ef,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        eR(e),
                                            eu(e),
                                            eg && (eA(!1), el(!1)),
                                            F && e > 0 ? ec(!1) : F || 0 !== e || ec(!0);
                                    },
                                    asValueChanges: (e) => {
                                        eR(e), eg || (eA(!0), el(!0));
                                    },
                                    fillStyles: { backgroundColor: c.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": U.intl.string(q.default.XiLvuG),
                                    getAriaValueText: (e) =>
                                        U.intl.formatToPlainString(q.default["5L6uDs"], {
                                            percent: Math.round(100 * e),
                                        }),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(H, { videoRef: t, compact: eo }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: a()(G.X3, G.ST),
                children: [
                    (0, i.jsx)(ee, {
                        canCollapse: null != M && M.length > 0,
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
                                    extraButtons: c,
                                } = e,
                                _ = [];
                            return (
                                t ||
                                    _.push({
                                        id: "transcript",
                                        iconComponent: A.u,
                                        label: U.intl.string(q.default["6EjGUv"]),
                                        onClick: a,
                                        active: i && s !== d.Q6.ENDED,
                                        disabled: s === d.Q6.ENDED,
                                        "data-testid": "discord-web-video-player-transcript-btn",
                                    }),
                                n ||
                                    _.push({
                                        id: "caption",
                                        iconComponent: W.I,
                                        label: U.intl.string(q.default["0DbPcL"]),
                                        onClick: o,
                                        active: r,
                                        shortcut: d.TJ.CAPTION,
                                        "data-testid": "discord-web-video-player-captions-btn",
                                    }),
                                null != l &&
                                    _.push({
                                        id: "download",
                                        iconComponent: I.s,
                                        label: U.intl.string(U.t["1WjMbC"]),
                                        onClick: u,
                                        "data-testid": "discord-web-video-player-download-btn",
                                    }),
                                null != c && _.push(...c),
                                _
                            );
                        })({
                            hideTranscriptBtn: C,
                            hideCaptionBtn: y,
                            transcriptEnabled: j,
                            captionEnabled: Z,
                            playerState: n,
                            handleTranscriptBtnClick: J,
                            handleCaptionBtnClick: et,
                            downloadUrl: L,
                            handleDownloadButtonClick: ev,
                            extraButtons: M,
                        }),
                        animSpring: s,
                        visible: T,
                        size: D,
                    }),
                    !R &&
                        (0, i.jsx)(en, {
                            playbackRate: ey,
                            onPlaybackRateChange: eN,
                            animSpring: s,
                            visible: T,
                            size: D,
                            handleControlBarPendingInteraction: el,
                        }),
                    !v &&
                        (0, i.jsx)(Y, {
                            iconComponent: X ? m.z : g.T,
                            animationTime: s,
                            visible: T,
                            onClick: ei,
                            ariaLabel: U.intl.string(q.default.z9Cnzv),
                            tooltipLabel: U.intl.string(q.default.z9Cnzv),
                            shortcut: d.TJ.FULLSCREEN,
                            buttonSize: B[D],
                            "data-testid": "discord-web-video-player-fullscreen-btn",
                        }),
                ],
            }),
        ],
    });
}
function ee(e) {
    let { buttons: t, canCollapse: n, animSpring: r, visible: s, size: a } = e;
    return 0 === t.length
        ? null
        : !n || t.length <= 1
          ? (0, i.jsx)(i.Fragment, {
                children: t.map((e) =>
                    (0, i.jsx)(
                        Y,
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
                            buttonSize: B[a],
                            "data-testid": e["data-testid"],
                        },
                        e.id,
                    ),
                ),
            })
          : (0, i.jsx)(et, { buttons: t, animSpring: r, visible: s, size: a });
}
function et(e) {
    let { buttons: t, animSpring: n, visible: s, size: a } = e,
        o = r.useRef(null),
        l = U.intl.string(U.t.PdRCRg);
    return (0, i.jsx)(T.Y, {
        targetElementRef: o,
        position: "top",
        align: "right",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(S.W, {
                navId: "video-player-overflow",
                "aria-label": l,
                onClose: n,
                onSelect: n,
                children: t.map((e) => {
                    let t = { type: "icon", icon: e.iconComponent };
                    return null != e.active
                        ? (0, i.jsx)(
                              y.sL,
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
                              y.Dr,
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
            (0, i.jsx)(Y, {
                ref: o,
                iconComponent: C.j,
                animationTime: n,
                visible: s,
                ariaLabel: l,
                tooltipLabel: l,
                buttonSize: B[a],
                clickableProps: e,
                "data-testid": "discord-web-video-player-overflow-menu-button",
            }),
    });
}
function en(e) {
    let {
            playbackRate: t,
            onPlaybackRateChange: n,
            animSpring: s,
            visible: a,
            size: o,
            handleControlBarPendingInteraction: l,
        } = e,
        u = r.useRef(null),
        c = U.intl.string(q.default.ZwPhbB);
    return (0, i.jsx)(T.Y, {
        targetElementRef: u,
        position: "top",
        align: "right",
        onRequestOpen: () => l(!0),
        onRequestClose: () => {
            l(!1), u.current?.focus();
        },
        renderPopout: () => (0, i.jsx)(ei, { playbackRate: t, onPlaybackRateChange: n, label: c }),
        children: (e) =>
            (0, i.jsx)(Y, {
                ref: u,
                iconComponent: N.$,
                animationTime: s,
                visible: a,
                ariaLabel: c,
                tooltipLabel: c,
                buttonSize: B[o],
                clickableProps: { ...e, "aria-haspopup": "dialog" },
                "data-testid": "discord-web-video-player-playback-speed-btn",
            }),
    });
}
function ei(e) {
    let { playbackRate: t, onPlaybackRateChange: n, label: s } = e,
        a = r.useRef(null);
    return (
        (0, v.t)(a),
        (0, i.jsxs)("div", {
            ref: a,
            className: G.qp,
            role: "dialog",
            "aria-label": s,
            "data-testid": "discord-web-video-player-playback-speed-popout",
            children: [
                (0, i.jsx)(R.D, {
                    variant: "heading-md/semibold",
                    color: "text-default",
                    className: G.xl,
                    children: s,
                }),
                (0, i.jsx)(_.A, {
                    value: t,
                    initialValue: 1,
                    minValue: X,
                    maxValue: Q,
                    markers: Z,
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
