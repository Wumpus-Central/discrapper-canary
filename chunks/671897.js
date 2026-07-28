"use strict";
n.d(t, { A: () => ee }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(4798),
    o = n(621466),
    d = n(17928),
    c = n(661531),
    u = n(876230),
    _ = n(106236),
    E = n(717421),
    A = n(358618),
    h = n(793920),
    I = n(983851),
    f = n(86147),
    p = n(729475),
    T = n(261958),
    m = n(32880),
    g = n(922016),
    S = n(980707),
    N = n(477782),
    C = n(365199),
    O = n(268791),
    R = n(315710),
    L = n(297264),
    y = n(775602),
    D = n(174459),
    v = n(683574),
    b = n(61491),
    M = n(113494),
    P = n(782134),
    U = n(417270),
    w = n(939249),
    G = n(834730),
    x = n(866665),
    k = n(375708),
    F = n(668534);
let V = "-:--",
    B = {
        [u.Q6.PLAYING]: { icon: M.E, label: k.intl.string(k.t.ZcgDJX) },
        [u.Q6.PAUSED]: { icon: P.u, label: k.intl.string(k.t.RscU7I) },
        [u.Q6.ENDED]: { icon: U.m, label: k.intl.string(k.t.hsvh0i) },
    },
    H = { [u.oA.MD]: u.n4.MD, [u.oA.LG]: u.n4.LG },
    j = { [u.n4.MD]: "md", [u.n4.LG]: "lg" };
function W(e) {
    let { compact: t = !1 } = e,
        [n, a] = r.useState(null),
        [l, o] = r.useState(null),
        [d, c] = r.useState(!1),
        { videoRef: u } = (0, v.X$)();
    r.useEffect(() => {
        let e = u.current;
        function t() {
            null != e && (a(e.currentTime), o(e.duration));
        }
        if (null != e)
            return (
                e.addEventListener("timeupdate", t),
                e.addEventListener("loadedmetadata", t),
                e.addEventListener("durationchange", t),
                () => {
                    e.removeEventListener("timeupdate", t),
                        e.removeEventListener("loadedmetadata", t),
                        e.removeEventListener("durationchange", t);
                }
            );
    }, [u]);
    let _ = Number.isFinite(n) && Number.isFinite(l) ? Math.max(0, l - n) : null,
        E = d ? (null != _ ? `-${(0, b.rB)(_)}` : V) : Number.isFinite(n) ? (0, b.rB)(n) : V,
        A = Number.isFinite(l) ? (0, b.rB)(l) : V;
    return (0, i.jsxs)(w.D, {
        className: s()(F.d$, F.jk),
        "data-testid": "discord-web-video-player-duration",
        onClick: () => c((e) => !e),
        children: [
            (0, i.jsx)(G.E, { variant: "text-sm/normal", className: F.Ue, tabularNumbers: !0, children: E }),
            !t &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(G.E, { variant: "text-sm/normal", className: F.zO, children: "/" }),
                        (0, i.jsx)(G.E, {
                            variant: "text-sm/normal",
                            className: F.Ue,
                            tabularNumbers: !0,
                            children: A,
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
        visible: a,
        ariaLabel: o,
        active: d,
        disabled: _,
        tooltipLabel: E,
        tooltipDelayMs: A = 1500,
        shortcut: h,
        onClick: I,
        buttonSize: f = u.n4.MD,
        "data-testid": p,
        clickableProps: T,
    } = e;
    return (0, i.jsx)(x.m, {
        text: a ? E : void 0,
        keyboardShortcut: "" !== (h ?? "").trim() ? h : void 0,
        delay: A,
        children: (0, i.jsx)(w.D, {
            onClick: !0 === _ ? void 0 : I,
            className: s()(F.K5, { [F.Iy]: _ }),
            "aria-label": o,
            "aria-disabled": _,
            "data-testid": p,
            innerRef: t,
            ...T,
            children: (0, i.jsx)(l.animated.div, {
                className: F.K5,
                style: {
                    opacity: (0, l.to)([r.to({ range: [0, 1], output: [0, 1] })], (e) => `${a ? e : Math.pow(e, 8)}`),
                    height: { [u.n4.LG]: "32px", [u.n4.MD]: "24px" }[f],
                },
                children: (0, i.jsx)(n, {
                    size: j[f],
                    color: !0 !== _ ? c.A.colors.WHITE : c.A.colors.TEXT_MUTED,
                    className: s()(F.jk, { [F.x2]: d, [F.Wr]: !_ }),
                }),
            }),
        }),
    });
});
var K = n(91034),
    $ = n(710434),
    z = n(634156),
    q = n(652215),
    Z = n(445563);
let X = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    Q = X[0],
    J = X[X.length - 1];
function ee(e) {
    let {
            playerState: t,
            animSpring: n,
            visible: a,
            seekForwardEnabled: g,
            hideCaptionBtn: S = !1,
            hideTranscriptBtn: N = !1,
            hideSkipButtons: C = !1,
            hideFullScreenBtn: O = !1,
            hidePlaybackSpeedBtn: R = !1,
            size: L,
            downloadUrl: b,
            downloadContentType: M,
            extraButtons: P,
            autoFocus: U = !1,
            keyDownHandlerRef: w,
            volume: G,
            muted: x,
            transcriptEnabled: V,
            captionEnabled: j,
            handlePlaybackBtnClick: X,
            handleTranscriptBtnClick: Q,
            handleCaptionBtnClick: J,
            handleFullScreenBtnClick: ee,
            handleSeekBackBtnClick: en,
            handleSeekForwardBtnClick: er,
            autoHideVolumeSlider: ea = !1,
            compactTimeDisplay: es = !1,
            handleControlBarPendingInteraction: el,
            onVolumeChange: eo,
            onMutedChange: ed,
            onVolumeExpandedChange: ec,
        } = e,
        eu = (0, d.bG)([y.Ay], () => y.Ay.useReducedMotion),
        e_ = (0, d.bG)([y.Ay], () => y.Ay.keyboardModeEnabled),
        { isFullscreen: eE, videoRef: eA } = (0, v.X$)(),
        [eh, eI] = r.useState(x ? 0 : G),
        [ef, ep] = r.useState(!1),
        [eT, em] = r.useState(!1),
        [{ volumeAnimSpring: eg }, eS] = (0, E.z)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        eN = r.useRef(null),
        [eC, eO] = r.useState(1),
        eR = r.useCallback(
            (e) => {
                eO(e), null != eA.current && (eA.current.playbackRate = e);
            },
            [eA],
        ),
        eL = r.useCallback(() => {
            if (null == b) return;
            let e = M?.split("/");
            D.default.track(q.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(b, "_blank");
        }, [b, M]),
        ey = r.useCallback(
            (e) => {
                null != eA.current && (e !== eA.current.volume && (eA.current.volume = e), e !== eh && eI(e));
            },
            [eA, eh],
        ),
        eD = r.useCallback(() => {
            if (null != eA.current)
                if (0 === eh) {
                    let e = 0 === G ? 0.3 : G;
                    ey(e), ed(!1), eo(e);
                } else eo(eh), ey(0), ed(!0);
        }, [eA, eh, ey, G, ed, eo]);
    function ev() {
        ep(!0), ec(!0);
    }
    function eb() {
        ep(!1), ec(!1);
    }
    let eM = r.useCallback(
        (e) => {
            if (!(e.metaKey || ((0, o.vq)(e.target) && (0, o.Cw)(e.target))))
                switch (e.key) {
                    case u.TJ.PLAYBACK:
                        e.stopPropagation(), X();
                        break;
                    case u.TJ.SPACE:
                        e.stopPropagation(), e_ || (e.preventDefault(), X());
                        break;
                    case u.TJ.SEEK_BACK:
                    case u.TJ.SEEK_BACK_ALT:
                        e.stopPropagation(), en();
                        break;
                    case u.TJ.SEEK_FORWARD:
                    case u.TJ.SEEK_FORWARD_ALT:
                        e.stopPropagation(), er();
                        break;
                    case u.TJ.CAPTION:
                        e.stopPropagation(), S || J();
                        break;
                    case u.TJ.FULLSCREEN:
                        e.stopPropagation(), O || ee();
                        break;
                    case u.TJ.MUTE:
                        e.stopPropagation(), eD();
                }
        },
        [J, ee, X, en, er, eD, S, O, e_],
    );
    r.useEffect(() => {
        U && null != eN.current && eN.current.focus();
    }, [U]),
        r.useEffect(
            () => (
                null != w && (w.current = eM),
                () => {
                    null != w && (w.current = null);
                }
            ),
            [eM, w],
        ),
        r.useEffect(
            () => (
                eS({ volumeAnimSpring: !ea || eT || ef ? 1 : 0, immediate: eu }),
                () => {
                    eg.stop();
                }
            ),
            [ea, eT, ef, eS, eu, eg],
        );
    let eP = 0 === eh ? A._ : eh < 0.5 ? h.S : I.H,
        { icon: eU, label: ew } = B[t];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: F.X3,
                children: [
                    (0, i.jsx)(Y, {
                        iconComponent: eU,
                        animationTime: n,
                        visible: a,
                        ariaLabel: ew,
                        tooltipLabel: ew,
                        shortcut: u.TJ.PLAYBACK,
                        onClick: X,
                        ref: eN,
                        buttonSize: H[L],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !C &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(Y, {
                                    iconComponent: $.q,
                                    animationTime: n,
                                    visible: a,
                                    onClick: en,
                                    ariaLabel: k.intl.string(Z.default["dRVF+Z"]),
                                    tooltipLabel: k.intl.string(Z.default["dRVF+Z"]),
                                    shortcut: u.TJ.SEEK_BACK,
                                    buttonSize: H[L],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, i.jsx)(Y, {
                                    iconComponent: z.i,
                                    animationTime: n,
                                    visible: a,
                                    onClick: er,
                                    disabled: !g,
                                    ariaLabel: g ? k.intl.string(Z.default.yV2FLL) : k.intl.string(Z.default.YWbiPw),
                                    tooltipLabel: g ? k.intl.string(Z.default.yV2FLL) : k.intl.string(Z.default.YWbiPw),
                                    tooltipDelayMs: 1500 * !!g,
                                    shortcut: u.TJ.SEEK_FORWARD,
                                    buttonSize: H[L],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, i.jsxs)(l.animated.div, {
                className: s()(F.X3, F.L1),
                style: {
                    opacity: (0, l.to)([n.to({ range: [0, 1], output: [0, 1] })], (e) => `${a ? e : Math.pow(e, 8)}`),
                },
                children: [
                    (0, i.jsxs)("div", {
                        onMouseEnter: ev,
                        onMouseLeave: eb,
                        onFocus: ev,
                        onBlur: eb,
                        className: F.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, i.jsx)(Y, {
                                iconComponent: eP,
                                animationTime: n,
                                visible: a,
                                onClick: eD,
                                ariaLabel: k.intl.string(Z.default.XiLvuG),
                                tooltipLabel: k.intl.string(Z.default.XiLvuG),
                                shortcut: u.TJ.MUTE,
                                buttonSize: H[L],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, i.jsx)(l.animated.div, {
                                className: F.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, l.to)(
                                        [eg.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${a ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, l.to)([eg.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, i.jsx)(_.A, {
                                    mini: !0,
                                    value: eh,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: function (e) {
                                        ey(e),
                                            eo(e),
                                            eT && (em(!1), el(!1)),
                                            x && e > 0 ? ed(!1) : x || 0 !== e || ed(!0);
                                    },
                                    asValueChanges: function (e) {
                                        ey(e), eT || (em(!0), el(!0));
                                    },
                                    fillStyles: { backgroundColor: c.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": k.intl.string(Z.default.XiLvuG),
                                    getAriaValueText: (e) =>
                                        k.intl.formatToPlainString(Z.default["5L6uDs"], {
                                            percent: Math.round(100 * e),
                                        }),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(W, { compact: es }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: s()(F.X3, F.ST),
                children: [
                    (0, i.jsx)(et, {
                        canCollapse: null != P && P.length > 0,
                        buttons: (function (e) {
                            let {
                                    hideTranscriptBtn: t = !1,
                                    hideCaptionBtn: n = !1,
                                    transcriptEnabled: i,
                                    captionEnabled: r,
                                    playerState: a,
                                    handleTranscriptBtnClick: s,
                                    handleCaptionBtnClick: l,
                                    downloadUrl: o,
                                    handleDownloadButtonClick: d,
                                    extraButtons: c,
                                } = e,
                                _ = [];
                            return (
                                t ||
                                    _.push({
                                        id: "transcript",
                                        iconComponent: T.u,
                                        label: k.intl.string(Z.default["6EjGUv"]),
                                        onClick: s,
                                        active: i && a !== u.Q6.ENDED,
                                        disabled: a === u.Q6.ENDED,
                                        "data-testid": "discord-web-video-player-transcript-btn",
                                    }),
                                n ||
                                    _.push({
                                        id: "caption",
                                        iconComponent: K.I,
                                        label: k.intl.string(Z.default["0DbPcL"]),
                                        onClick: l,
                                        active: r,
                                        shortcut: u.TJ.CAPTION,
                                        "data-testid": "discord-web-video-player-captions-btn",
                                    }),
                                null != o &&
                                    _.push({
                                        id: "download",
                                        iconComponent: m.s,
                                        label: k.intl.string(k.t["1WjMbC"]),
                                        onClick: d,
                                        "data-testid": "discord-web-video-player-download-btn",
                                    }),
                                null != c && _.push(...c),
                                _
                            );
                        })({
                            hideTranscriptBtn: N,
                            hideCaptionBtn: S,
                            transcriptEnabled: V,
                            captionEnabled: j,
                            playerState: t,
                            handleTranscriptBtnClick: Q,
                            handleCaptionBtnClick: J,
                            downloadUrl: b,
                            handleDownloadButtonClick: eL,
                            extraButtons: P,
                        }),
                        animSpring: n,
                        visible: a,
                        size: L,
                    }),
                    !R &&
                        (0, i.jsx)(ei, {
                            playbackRate: eC,
                            onPlaybackRateChange: eR,
                            animSpring: n,
                            visible: a,
                            size: L,
                            handleControlBarPendingInteraction: el,
                        }),
                    !O &&
                        (0, i.jsx)(Y, {
                            iconComponent: eE ? f.z : p.T,
                            animationTime: n,
                            visible: a,
                            onClick: ee,
                            ariaLabel: k.intl.string(Z.default.z9Cnzv),
                            tooltipLabel: k.intl.string(Z.default.z9Cnzv),
                            shortcut: u.TJ.FULLSCREEN,
                            buttonSize: H[L],
                            "data-testid": "discord-web-video-player-fullscreen-btn",
                        }),
                ],
            }),
        ],
    });
}
function et(e) {
    let { buttons: t, canCollapse: n, animSpring: r, visible: a, size: s } = e;
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
                            visible: a,
                            onClick: e.onClick,
                            active: e.active,
                            disabled: e.disabled,
                            ariaLabel: e.label,
                            tooltipLabel: e.label,
                            tooltipDelayMs: e.tooltipDelayMs,
                            shortcut: e.shortcut,
                            buttonSize: H[s],
                            "data-testid": e["data-testid"],
                        },
                        e.id,
                    ),
                ),
            })
          : (0, i.jsx)(en, { buttons: t, animSpring: r, visible: a, size: s });
}
function en(e) {
    let { buttons: t, animSpring: n, visible: a, size: s } = e,
        l = r.useRef(null),
        o = k.intl.string(k.t.PdRCRg),
        { activeLayer: d } = (0, v.X$)();
    return (0, i.jsx)(g.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        layerContext: d,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(S.W, {
                navId: "video-player-overflow",
                "aria-label": o,
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
            (0, i.jsx)(Y, {
                ref: l,
                iconComponent: C.j,
                animationTime: n,
                visible: a,
                ariaLabel: o,
                tooltipLabel: o,
                buttonSize: H[s],
                clickableProps: e,
                "data-testid": "discord-web-video-player-overflow-menu-button",
            }),
    });
}
function ei(e) {
    let {
            playbackRate: t,
            onPlaybackRateChange: n,
            animSpring: a,
            visible: s,
            size: l,
            handleControlBarPendingInteraction: o,
        } = e,
        d = r.useRef(null),
        c = k.intl.string(Z.default.ZwPhbB),
        { activeLayer: u } = (0, v.X$)();
    return (0, i.jsx)(g.Y, {
        targetElementRef: d,
        layerContext: u,
        position: "top",
        align: "right",
        onRequestOpen: () => o(!0),
        onRequestClose: () => {
            o(!1), d.current?.focus();
        },
        renderPopout: () => (0, i.jsx)(er, { playbackRate: t, onPlaybackRateChange: n, label: c }),
        children: (e) =>
            (0, i.jsx)(Y, {
                ref: d,
                iconComponent: O.$,
                animationTime: a,
                visible: s,
                ariaLabel: c,
                tooltipLabel: c,
                buttonSize: H[l],
                clickableProps: { ...e, "aria-haspopup": "dialog" },
                "data-testid": "discord-web-video-player-playback-speed-btn",
            }),
    });
}
function er(e) {
    let { playbackRate: t, onPlaybackRateChange: n, label: a } = e,
        s = r.useRef(null);
    return (
        (0, R.tj)(s),
        (0, i.jsxs)("div", {
            ref: s,
            className: F.qp,
            role: "dialog",
            "aria-label": a,
            "data-testid": "discord-web-video-player-playback-speed-popout",
            children: [
                (0, i.jsx)(L.D, {
                    variant: "heading-md/semibold",
                    color: "text-default",
                    className: F.xl,
                    children: a,
                }),
                (0, i.jsx)(_.A, {
                    value: t,
                    initialValue: 1,
                    minValue: Q,
                    maxValue: J,
                    markers: X,
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
