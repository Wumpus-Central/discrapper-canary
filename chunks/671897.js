"use strict";
n.d(t, { A: () => J }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(580929),
    l = n(621466),
    u = n(17928),
    d = n(661531),
    c = n(876230),
    _ = n(106236),
    h = n(717421),
    f = n(358618),
    E = n(793920),
    p = n(983851),
    m = n(86147),
    g = n(729475),
    A = n(261958),
    I = n(32880),
    T = n(922016),
    S = n(980707),
    N = n(477782),
    C = n(365199),
    y = n(268791),
    v = n(315710),
    R = n(534514),
    O = n(775602),
    b = n(174459),
    L = n(61491),
    D = n(990078),
    P = n(113494),
    w = n(782134),
    M = n(417270),
    x = n(939249),
    U = n(834730),
    k = n(375708),
    G = n(834926);
let V = "-:--",
    F = {
        [c.Q6.PLAYING]: { icon: P.E, label: k.intl.string(k.t.ZcgDJX) },
        [c.Q6.PAUSED]: { icon: w.u, label: k.intl.string(k.t.RscU7I) },
        [c.Q6.ENDED]: { icon: M.m, label: k.intl.string(k.t.hsvh0i) },
    },
    B = { [c.oA.MD]: c.n4.MD, [c.oA.LG]: c.n4.LG },
    j = { [c.n4.MD]: "md", [c.n4.LG]: "lg" };
function H(e) {
    let { videoRef: t, compact: n = !1 } = e,
        [s, o] = r.useState(null),
        [l, u] = r.useState(null),
        [d, c] = r.useState(!1);
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
        h = d ? (null != _ ? `-${(0, L.rB)(_)}` : V) : Number.isFinite(s) ? (0, L.rB)(s) : V,
        f = Number.isFinite(l) ? (0, L.rB)(l) : V;
    return (0, i.jsxs)(x.D, {
        className: a()(G.d$, G.jk),
        "data-testid": "discord-web-video-player-duration",
        onClick: () => c((e) => !e),
        children: [
            (0, i.jsx)(U.E, { variant: "text-sm/normal", className: G.Ue, tabularNumbers: !0, children: h }),
            !n &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(U.E, { variant: "text-sm/normal", className: G.zO, children: "/" }),
                        (0, i.jsx)(U.E, {
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
let W = r.forwardRef(function (e, t) {
    let {
        iconComponent: n,
        animationTime: r,
        visible: s,
        ariaLabel: l,
        active: u,
        disabled: _,
        tooltipLabel: h,
        tooltipDelayMs: f = 1500,
        shortcut: E,
        onClick: p,
        buttonSize: m = c.n4.MD,
        "data-testid": g,
        clickableProps: A,
    } = e;
    return (0, i.jsx)(D.m, {
        text: s ? h : void 0,
        keyboardShortcut: "" !== (E ?? "").trim() ? E : void 0,
        delay: f,
        children: (0, i.jsx)(x.D, {
            onClick: !0 === _ ? void 0 : p,
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
                    height: { [c.n4.LG]: "32px", [c.n4.MD]: "24px" }[m],
                },
                children: (0, i.jsx)(n, {
                    size: j[m],
                    color: !0 !== _ ? d.A.colors.WHITE : d.A.colors.TEXT_MUTED,
                    className: a()(G.jk, { [G.x2]: u, [G.Wr]: !_ }),
                }),
            }),
        }),
    });
});
var Y = n(91034),
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
            hideCaptionBtn: N = !1,
            hideTranscriptBtn: C = !1,
            hideSkipButtons: y = !1,
            hideFullScreenBtn: v = !1,
            hidePlaybackSpeedBtn: R = !1,
            size: L,
            downloadUrl: D,
            downloadContentType: P,
            extraButtons: w,
            autoFocus: M = !1,
            keyDownHandlerRef: x,
            volume: U,
            muted: V,
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
            onMutedChange: ed,
            onVolumeExpandedChange: ec,
        } = e,
        e_ = (0, u.bG)([O.Ay], () => O.Ay.useReducedMotion),
        eh = (0, u.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        [ef, eE] = r.useState(V ? 0 : U),
        [ep, em] = r.useState(!1),
        [eg, eA] = r.useState(!1),
        [{ volumeAnimSpring: eI }, eT] = (0, h.z)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        eS = r.useRef(null),
        [eN, eC] = r.useState(1),
        ey = r.useCallback(
            (e) => {
                eC(e), null != t.current && (t.current.playbackRate = e);
            },
            [t],
        ),
        ev = r.useCallback(() => {
            if (null == D) return;
            let e = P?.split("/");
            b.default.track(z.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(D, "_blank");
        }, [D, P]),
        eR = r.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== ef && eE(e));
            },
            [t, ef],
        ),
        eO = r.useCallback(() => {
            if (null != t.current)
                if (0 === ef) {
                    let e = 0 === U ? 0.3 : U;
                    eR(e), ed(!1), eu(e);
                } else eu(ef), eR(0), ed(!0);
        }, [t, ef, eR, U, ed, eu]);
    function eb() {
        em(!0), ec(!0);
    }
    function eL() {
        em(!1), ec(!1);
    }
    let eD = r.useCallback(
        (e) => {
            if (!(e.metaKey || ((0, l.vq)(e.target) && (0, l.Cw)(e.target))))
                switch (e.key) {
                    case c.TJ.PLAYBACK:
                        e.stopPropagation(), Q();
                        break;
                    case c.TJ.SPACE:
                        e.stopPropagation(), eh || (e.preventDefault(), Q());
                        break;
                    case c.TJ.SEEK_BACK:
                    case c.TJ.SEEK_BACK_ALT:
                        e.stopPropagation(), er();
                        break;
                    case c.TJ.SEEK_FORWARD:
                    case c.TJ.SEEK_FORWARD_ALT:
                        e.stopPropagation(), es();
                        break;
                    case c.TJ.CAPTION:
                        e.stopPropagation(), N || et();
                        break;
                    case c.TJ.FULLSCREEN:
                        e.stopPropagation(), v || ei();
                        break;
                    case c.TJ.MUTE:
                        e.stopPropagation(), eO();
                }
        },
        [et, ei, Q, er, es, eO, N, v, eh],
    );
    r.useEffect(() => {
        M && null != eS.current && eS.current.focus();
    }, [M]),
        r.useEffect(
            () => (
                null != x && (x.current = eD),
                () => {
                    null != x && (x.current = null);
                }
            ),
            [eD, x],
        ),
        r.useEffect(
            () => (
                eT({ volumeAnimSpring: !ea || eg || ep ? 1 : 0, immediate: e_ }),
                () => {
                    eI.stop();
                }
            ),
            [ea, eg, ep, eT, e_, eI],
        );
    let eP = 0 === ef ? f._ : ef < 0.5 ? E.S : p.H,
        { icon: ew, label: eM } = F[n];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: G.X3,
                children: [
                    (0, i.jsx)(W, {
                        iconComponent: ew,
                        animationTime: s,
                        visible: T,
                        ariaLabel: eM,
                        tooltipLabel: eM,
                        shortcut: c.TJ.PLAYBACK,
                        onClick: Q,
                        ref: eS,
                        buttonSize: B[L],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !y &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(W, {
                                    iconComponent: K.q,
                                    animationTime: s,
                                    visible: T,
                                    onClick: er,
                                    ariaLabel: k.intl.string(q.default["dRVF+Z"]),
                                    tooltipLabel: k.intl.string(q.default["dRVF+Z"]),
                                    shortcut: c.TJ.SEEK_BACK,
                                    buttonSize: B[L],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, i.jsx)(W, {
                                    iconComponent: $.i,
                                    animationTime: s,
                                    visible: T,
                                    onClick: es,
                                    disabled: !S,
                                    ariaLabel: S ? k.intl.string(q.default.yV2FLL) : k.intl.string(q.default.YWbiPw),
                                    tooltipLabel: S ? k.intl.string(q.default.yV2FLL) : k.intl.string(q.default.YWbiPw),
                                    tooltipDelayMs: 1500 * !!S,
                                    shortcut: c.TJ.SEEK_FORWARD,
                                    buttonSize: B[L],
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
                        onMouseLeave: eL,
                        onFocus: eb,
                        onBlur: eL,
                        className: G.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, i.jsx)(W, {
                                iconComponent: eP,
                                animationTime: s,
                                visible: T,
                                onClick: eO,
                                ariaLabel: k.intl.string(q.default.XiLvuG),
                                tooltipLabel: k.intl.string(q.default.XiLvuG),
                                shortcut: c.TJ.MUTE,
                                buttonSize: B[L],
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
                                    onValueChange: function (e) {
                                        eR(e),
                                            eu(e),
                                            eg && (eA(!1), el(!1)),
                                            V && e > 0 ? ed(!1) : V || 0 !== e || ed(!0);
                                    },
                                    asValueChanges: function (e) {
                                        eR(e), eg || (eA(!0), el(!0));
                                    },
                                    fillStyles: { backgroundColor: d.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": k.intl.string(q.default.XiLvuG),
                                    getAriaValueText: (e) =>
                                        k.intl.formatToPlainString(q.default["5L6uDs"], {
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
                                        iconComponent: A.u,
                                        label: k.intl.string(q.default["6EjGUv"]),
                                        onClick: a,
                                        active: i && s !== c.Q6.ENDED,
                                        disabled: s === c.Q6.ENDED,
                                        "data-testid": "discord-web-video-player-transcript-btn",
                                    }),
                                n ||
                                    _.push({
                                        id: "caption",
                                        iconComponent: Y.I,
                                        label: k.intl.string(q.default["0DbPcL"]),
                                        onClick: o,
                                        active: r,
                                        shortcut: c.TJ.CAPTION,
                                        "data-testid": "discord-web-video-player-captions-btn",
                                    }),
                                null != l &&
                                    _.push({
                                        id: "download",
                                        iconComponent: I.s,
                                        label: k.intl.string(k.t["1WjMbC"]),
                                        onClick: u,
                                        "data-testid": "discord-web-video-player-download-btn",
                                    }),
                                null != d && _.push(...d),
                                _
                            );
                        })({
                            hideTranscriptBtn: C,
                            hideCaptionBtn: N,
                            transcriptEnabled: j,
                            captionEnabled: Z,
                            playerState: n,
                            handleTranscriptBtnClick: J,
                            handleCaptionBtnClick: et,
                            downloadUrl: D,
                            handleDownloadButtonClick: ev,
                            extraButtons: w,
                        }),
                        animSpring: s,
                        visible: T,
                        size: L,
                    }),
                    !R &&
                        (0, i.jsx)(en, {
                            playbackRate: eN,
                            onPlaybackRateChange: ey,
                            animSpring: s,
                            visible: T,
                            size: L,
                            handleControlBarPendingInteraction: el,
                        }),
                    !v &&
                        (0, i.jsx)(W, {
                            iconComponent: X ? m.z : g.T,
                            animationTime: s,
                            visible: T,
                            onClick: ei,
                            ariaLabel: k.intl.string(q.default.z9Cnzv),
                            tooltipLabel: k.intl.string(q.default.z9Cnzv),
                            shortcut: c.TJ.FULLSCREEN,
                            buttonSize: B[L],
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
                        W,
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
        l = k.intl.string(k.t.PdRCRg);
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
                              N.sL,
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
                              N.Dr,
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
            (0, i.jsx)(W, {
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
        d = k.intl.string(q.default.ZwPhbB);
    return (0, i.jsx)(T.Y, {
        targetElementRef: u,
        position: "top",
        align: "right",
        onRequestOpen: () => l(!0),
        onRequestClose: () => {
            l(!1), u.current?.focus();
        },
        renderPopout: () => (0, i.jsx)(ei, { playbackRate: t, onPlaybackRateChange: n, label: d }),
        children: (e) =>
            (0, i.jsx)(W, {
                ref: u,
                iconComponent: y.$,
                animationTime: s,
                visible: a,
                ariaLabel: d,
                tooltipLabel: d,
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
        (0, v.tj)(a),
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
