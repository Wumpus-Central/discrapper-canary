(n.d(t, { A: () => en }), n(321073));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(202091),
    o = n(621466),
    s = n(17928),
    c = n(661531),
    d = n(876230),
    m = n(717421),
    f = n(358618),
    p = n(793920),
    h = n(983851),
    x = n(299163),
    v = n(86147),
    g = n(729475),
    E = n(261958),
    b = n(32880),
    y = n(922016),
    S = n(980707),
    C = n(477782),
    P = n(365199),
    A = n(268791),
    R = n(834730),
    N = n(315710),
    w = n(297264),
    L = n(775602),
    T = n(174459),
    k = n(683574),
    M = n(61491),
    j = n(113494),
    D = n(782134),
    I = n(417270),
    B = n(939249),
    F = n(866665),
    _ = n(375708),
    U = n(862649);
let G = "-:--",
    $ = {
        [d.Q6.PLAYING]: { icon: j.PauseIcon, label: _.intl.string(_.t.ZcgDJX) },
        [d.Q6.PAUSED]: { icon: D.PlayIcon, label: _.intl.string(_.t.RscU7I) },
        [d.Q6.ENDED]: { icon: I.RetryIcon, label: _.intl.string(_.t.hsvh0i) },
    },
    K = { [d.oA.SM]: d.n4.SM, [d.oA.MD]: d.n4.MD, [d.oA.LG]: d.n4.LG },
    O = { [d.n4.SM]: "sm", [d.n4.MD]: "md", [d.n4.LG]: "lg" },
    Q = { [d.n4.SM]: "24px", [d.n4.MD]: "24px", [d.n4.LG]: "32px" };
function H(e) {
    let { compact: t = !1 } = e,
        [n, a] = l.useState(null),
        [u, o] = l.useState(null),
        [s, c] = l.useState(!1),
        { videoRef: d } = (0, k.X$)();
    l.useEffect(() => {
        let e = d.current;
        function t() {
            null != e && (a(e.currentTime), o(e.duration));
        }
        if (null != e)
            return (
                e.addEventListener("timeupdate", t),
                e.addEventListener("loadedmetadata", t),
                e.addEventListener("durationchange", t),
                () => {
                    (e.removeEventListener("timeupdate", t),
                        e.removeEventListener("loadedmetadata", t),
                        e.removeEventListener("durationchange", t));
                }
            );
    }, [d]);
    let m = Number.isFinite(n) && Number.isFinite(u) ? Math.max(0, u - n) : null,
        f = s ? (null != m ? `-${(0, M.rB)(m)}` : G) : Number.isFinite(n) ? (0, M.rB)(n) : G,
        p = Number.isFinite(u) ? (0, M.rB)(u) : G;
    return (0, r.jsxs)(B.D, {
        className: i()(U.d$, U.jk),
        "data-testid": "discord-web-video-player-duration",
        onClick: () => c((e) => !e),
        children: [
            (0, r.jsx)(R.E, { variant: "text-sm/normal", className: U.Ue, tabularNumbers: !0, children: f }),
            !t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(R.E, { variant: "text-sm/normal", className: U.zO, children: "/" }),
                        (0, r.jsx)(R.E, {
                            variant: "text-sm/normal",
                            className: U.Ue,
                            tabularNumbers: !0,
                            children: p,
                        }),
                    ],
                }),
        ],
    });
}
let V = l.forwardRef(function (e, t) {
    let {
            iconComponent: n,
            animationTime: l,
            visible: a,
            ariaLabel: o,
            active: s,
            disabled: m,
            overlay: f,
            tooltipLabel: p,
            tooltipDelayMs: h = 1500,
            shortcut: x,
            onClick: v,
            buttonSize: g = d.n4.MD,
            "data-testid": E,
            clickableProps: b,
        } = e,
        y = "" !== (x ?? "").trim();
    return (0, r.jsx)(F.m, {
        text: a ? p : void 0,
        keyboardShortcut: y ? x : void 0,
        ariaHidden: !0,
        delay: h,
        children: (0, r.jsx)(B.D, {
            onClick: !0 === m ? void 0 : v,
            className: i()(U.K5, { [U.Iy]: m }),
            "aria-label": o,
            "aria-keyshortcuts": y ? x : void 0,
            "aria-disabled": m,
            "data-testid": E,
            innerRef: t,
            ...b,
            children: (0, r.jsx)(u.animated.div, {
                className: U.K5,
                style: {
                    opacity: (0, u.to)([l.to({ range: [0, 1], output: [0, 1] })], (e) => `${a ? e : Math.pow(e, 8)}`),
                    height: Q[g],
                },
                children:
                    null != f
                        ? (0, r.jsxs)("span", {
                              className: U.bT,
                              children: [
                                  (0, r.jsx)(n, {
                                      size: O[g],
                                      color: !0 !== m ? c.A.colors.WHITE : c.A.colors.TEXT_MUTED,
                                      className: i()(U.jk, { [U.x2]: s, [U.Wr]: !m }),
                                  }),
                                  f,
                              ],
                          })
                        : (0, r.jsx)(n, {
                              size: O[g],
                              color: !0 !== m ? c.A.colors.WHITE : c.A.colors.TEXT_MUTED,
                              className: i()(U.jk, { [U.x2]: s, [U.Wr]: !m }),
                          }),
            }),
        }),
    });
});
var Y = n(91034),
    z = n(710434),
    X = n(634156),
    W = n(652215),
    Z = n(711127);
let q = { [d.oA.SM]: 48, [d.oA.MD]: 100, [d.oA.LG]: 100 },
    J = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    ee = J[0],
    et = J[J.length - 1];
function en(e) {
    let {
            playerState: t,
            animSpring: n,
            visible: a,
            seekForwardEnabled: y,
            hideCaptionBtn: S = !1,
            hideTranscriptBtn: C = !1,
            hideSkipButtons: P = !1,
            hideFullScreenBtn: A = !1,
            hidePlaybackSpeedBtn: R = !1,
            size: N,
            downloadUrl: w,
            downloadContentType: M,
            extraButtons: j,
            autoFocus: D = !1,
            keyDownHandlerRef: I,
            volume: B,
            muted: F,
            transcriptEnabled: G,
            captionEnabled: O,
            handlePlaybackBtnClick: Q,
            handleTranscriptBtnClick: J,
            handleCaptionBtnClick: ee,
            handleFullScreenBtnClick: et,
            handleSeekBackBtnClick: en,
            handleSeekForwardBtnClick: el,
            autoHideVolumeSlider: ei = !1,
            compactTimeDisplay: eu = !1,
            handleControlBarPendingInteraction: eo,
            onVolumeChange: es,
            onMutedChange: ec,
            onVolumeExpandedChange: ed,
        } = e,
        em = (0, s.bG)([L.Ay], () => L.Ay.useReducedMotion),
        ef = (0, s.bG)([L.Ay], () => L.Ay.keyboardModeEnabled),
        { isFullscreen: ep, videoRef: eh } = (0, k.X$)(),
        [ex, ev] = l.useState(F ? 0 : B),
        [eg, eE] = l.useState(!1),
        [eb, ey] = l.useState(!1),
        [{ volumeAnimSpring: eS }, eC] = (0, m.z)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        eP = l.useRef(null),
        [eA, eR] = l.useState(1),
        [eN, ew] = l.useState(B),
        [eL, eT] = l.useState(F);
    (B !== eN || F !== eL) && (ew(B), eT(F), ev(F ? 0 : B));
    let ek = l.useCallback(
            (e) => {
                (eR(e), null != eh.current && (eh.current.playbackRate = e));
            },
            [eh],
        ),
        eM = l.useCallback(() => {
            if (null == w) return;
            let e = M?.split("/");
            (T.default.track(W.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(w, "_blank"));
        }, [w, M]),
        ej = l.useCallback(
            (e) => {
                null != eh.current && (e !== eh.current.volume && (eh.current.volume = e), e !== ex && ev(e));
            },
            [eh, ex],
        ),
        eD = l.useCallback(() => {
            if (null != eh.current)
                if (0 === ex) {
                    let e = 0 === B ? 0.3 : B;
                    (ej(e), ec(!1), es(e));
                } else (es(ex), ej(0), ec(!0));
        }, [eh, ex, ej, B, ec, es]);
    function eI() {
        (eE(!0), ed(!0));
    }
    function eB() {
        (eE(!1), ed(!1));
    }
    let eF = l.useCallback(
        (e) => {
            if (!(e.metaKey || ((0, o.vq)(e.target) && (0, o.Cw)(e.target))))
                switch (e.key) {
                    case d.TJ.PLAYBACK:
                        (e.stopPropagation(), Q());
                        break;
                    case d.TJ.SPACE:
                        (e.stopPropagation(), ef || (e.preventDefault(), Q()));
                        break;
                    case d.TJ.SEEK_BACK:
                    case d.TJ.SEEK_BACK_ALT:
                        (e.stopPropagation(), en());
                        break;
                    case d.TJ.SEEK_FORWARD:
                    case d.TJ.SEEK_FORWARD_ALT:
                        (e.stopPropagation(), el());
                        break;
                    case d.TJ.CAPTION:
                        (e.stopPropagation(), S || ee());
                        break;
                    case d.TJ.FULLSCREEN:
                        (e.stopPropagation(), A || et());
                        break;
                    case d.TJ.MUTE:
                        (e.stopPropagation(), eD());
                }
        },
        [ee, et, Q, en, el, eD, S, A, ef],
    );
    (l.useEffect(() => {
        D && null != eP.current && eP.current.focus();
    }, [D]),
        l.useEffect(
            () => (
                null != I && (I.current = eF),
                () => {
                    null != I && (I.current = null);
                }
            ),
            [eF, I],
        ),
        l.useEffect(
            () => (
                eC({ volumeAnimSpring: !ei || eb || eg ? 1 : 0, immediate: em }),
                () => {
                    eS.stop();
                }
            ),
            [ei, eb, eg, eC, em, eS],
        ));
    let e_ = 0 === ex ? f._ : ex < 0.5 ? p.S : h.H,
        eU = _.intl.string(0 === ex ? _.t.YqAjXy : _.t.w4m945),
        { icon: eG, label: e$ } = $[t];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: U.X3,
                children: [
                    (0, r.jsx)(V, {
                        iconComponent: eG,
                        animationTime: n,
                        visible: a,
                        ariaLabel: e$,
                        tooltipLabel: e$,
                        shortcut: d.TJ.PLAYBACK,
                        onClick: Q,
                        ref: eP,
                        buttonSize: K[N],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !P &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(V, {
                                    iconComponent: z.q,
                                    animationTime: n,
                                    visible: a,
                                    onClick: en,
                                    ariaLabel: _.intl.string(Z.default["dRVF+Z"]),
                                    tooltipLabel: _.intl.string(Z.default["dRVF+Z"]),
                                    shortcut: d.TJ.SEEK_BACK,
                                    buttonSize: K[N],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(V, {
                                    iconComponent: X.i,
                                    animationTime: n,
                                    visible: a,
                                    onClick: el,
                                    disabled: !y,
                                    ariaLabel: y ? _.intl.string(Z.default.yV2FLL) : _.intl.string(Z.default.YWbiPw),
                                    tooltipLabel: y ? _.intl.string(Z.default.yV2FLL) : _.intl.string(Z.default.YWbiPw),
                                    tooltipDelayMs: 1500 * !!y,
                                    shortcut: d.TJ.SEEK_FORWARD,
                                    buttonSize: K[N],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(u.animated.div, {
                className: i()(U.X3, U.L1),
                style: {
                    opacity: (0, u.to)([n.to({ range: [0, 1], output: [0, 1] })], (e) => `${a ? e : Math.pow(e, 8)}`),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: eI,
                        onMouseLeave: eB,
                        onFocus: eI,
                        onBlur: eB,
                        className: U.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(V, {
                                iconComponent: e_,
                                animationTime: n,
                                visible: a,
                                onClick: eD,
                                ariaLabel: eU,
                                tooltipLabel: eU,
                                shortcut: d.TJ.MUTE,
                                buttonSize: K[N],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(u.animated.div, {
                                className: U.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, u.to)(
                                        [eS.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${a ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, u.to)([eS.to({ range: [0, 1], output: [0, q[N]] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(x.A, {
                                    mini: !0,
                                    value: ex,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: function (e) {
                                        (ej(e),
                                            es(e),
                                            eb && (ey(!1), eo(!1)),
                                            F && e > 0 ? ec(!1) : F || 0 !== e || ec(!0));
                                    },
                                    asValueChanges: function (e) {
                                        (ej(e), eb || (ey(!0), eo(!0)));
                                    },
                                    fillStyles: { backgroundColor: c.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": _.intl.string(Z.default.XiLvuG),
                                    getAriaValueText: (e) =>
                                        _.intl.formatToPlainString(Z.default["5L6uDs"], {
                                            percent: Math.round(100 * e),
                                        }),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(H, { compact: eu }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(U.X3, U.ST),
                children: [
                    (0, r.jsx)(er, {
                        canCollapse: null != j && j.length > 0,
                        buttons: (function (e) {
                            let {
                                    hideTranscriptBtn: t = !1,
                                    hideCaptionBtn: n = !1,
                                    transcriptEnabled: r,
                                    captionEnabled: l,
                                    playerState: a,
                                    handleTranscriptBtnClick: i,
                                    handleCaptionBtnClick: u,
                                    downloadUrl: o,
                                    handleDownloadButtonClick: s,
                                    extraButtons: c,
                                } = e,
                                m = [];
                            return (
                                t ||
                                    m.push({
                                        id: "transcript",
                                        iconComponent: E.u,
                                        label: _.intl.string(Z.default["6EjGUv"]),
                                        onClick: i,
                                        active: r && a !== d.Q6.ENDED,
                                        disabled: a === d.Q6.ENDED,
                                        "data-testid": "discord-web-video-player-transcript-btn",
                                    }),
                                n ||
                                    m.push({
                                        id: "caption",
                                        iconComponent: Y.I,
                                        label: _.intl.string(Z.default["0DbPcL"]),
                                        onClick: u,
                                        active: l,
                                        shortcut: d.TJ.CAPTION,
                                        "data-testid": "discord-web-video-player-captions-btn",
                                    }),
                                null != o &&
                                    m.push({
                                        id: "download",
                                        iconComponent: b.DownloadIcon,
                                        label: _.intl.string(_.t["1WjMbC"]),
                                        onClick: s,
                                        "data-testid": "discord-web-video-player-download-btn",
                                    }),
                                null != c && m.push(...c),
                                m
                            );
                        })({
                            hideTranscriptBtn: C,
                            hideCaptionBtn: S,
                            transcriptEnabled: G,
                            captionEnabled: O,
                            playerState: t,
                            handleTranscriptBtnClick: J,
                            handleCaptionBtnClick: ee,
                            downloadUrl: w,
                            handleDownloadButtonClick: eM,
                            extraButtons: j,
                        }),
                        animSpring: n,
                        visible: a,
                        size: N,
                    }),
                    !R &&
                        (0, r.jsx)(ea, {
                            playbackRate: eA,
                            onPlaybackRateChange: ek,
                            animSpring: n,
                            visible: a,
                            size: N,
                            handleControlBarPendingInteraction: eo,
                        }),
                    !A &&
                        (0, r.jsx)(V, {
                            iconComponent: ep ? v.z : g.T,
                            animationTime: n,
                            visible: a,
                            onClick: et,
                            ariaLabel: _.intl.string(Z.default.z9Cnzv),
                            tooltipLabel: _.intl.string(Z.default.z9Cnzv),
                            shortcut: d.TJ.FULLSCREEN,
                            buttonSize: K[N],
                            "data-testid": "discord-web-video-player-fullscreen-btn",
                        }),
                ],
            }),
        ],
    });
}
function er(e) {
    let { buttons: t, canCollapse: n, animSpring: l, visible: a, size: i } = e;
    return 0 === t.length
        ? null
        : !n || t.length <= 1
          ? (0, r.jsx)(r.Fragment, {
                children: t.map((e) =>
                    (0, r.jsx)(
                        V,
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
                            buttonSize: K[i],
                            "data-testid": e["data-testid"],
                        },
                        e.id,
                    ),
                ),
            })
          : (0, r.jsx)(el, { buttons: t, animSpring: l, visible: a, size: i });
}
function el(e) {
    let { buttons: t, animSpring: n, visible: a, size: i } = e,
        u = l.useRef(null),
        o = _.intl.string(_.t.PdRCRg),
        { activeLayer: s } = (0, k.X$)();
    return (0, r.jsx)(y.Y, {
        targetElementRef: u,
        position: "top",
        align: "right",
        layerContext: s,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(S.W, {
                navId: "video-player-overflow",
                "aria-label": o,
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
            (0, r.jsx)(V, {
                ref: u,
                iconComponent: P.MoreHorizontalIcon,
                animationTime: n,
                visible: a,
                ariaLabel: o,
                tooltipLabel: o,
                buttonSize: K[i],
                clickableProps: e,
                "data-testid": "discord-web-video-player-overflow-menu-button",
            }),
    });
}
function ea(e) {
    let {
            playbackRate: t,
            onPlaybackRateChange: n,
            animSpring: a,
            visible: i,
            size: u,
            handleControlBarPendingInteraction: o,
        } = e,
        s = l.useRef(null),
        c = _.intl.string(Z.default.ZwPhbB),
        { activeLayer: d } = (0, k.X$)();
    return (0, r.jsx)(y.Y, {
        targetElementRef: s,
        layerContext: d,
        position: "top",
        align: "right",
        onRequestOpen: () => o(!0),
        onRequestClose: () => {
            (o(!1), s.current?.focus());
        },
        renderPopout: () => (0, r.jsx)(ei, { playbackRate: t, onPlaybackRateChange: n, label: c }),
        children: (e) => {
            let n = 1 !== t;
            return (0, r.jsx)(V, {
                ref: s,
                iconComponent: A.$,
                animationTime: a,
                visible: i,
                active: n,
                overlay: n
                    ? (0, r.jsx)(R.E, {
                          "aria-hidden": !0,
                          variant: "text-xxs/bold",
                          color: "none",
                          className: U.IG,
                          tabularNumbers: !0,
                          children: `${t}x`,
                      })
                    : void 0,
                ariaLabel: c,
                tooltipLabel: c,
                buttonSize: K[u],
                clickableProps: { ...e, "aria-haspopup": "dialog" },
                "data-testid": "discord-web-video-player-playback-speed-btn",
            });
        },
    });
}
function ei(e) {
    let { playbackRate: t, onPlaybackRateChange: n, label: a } = e,
        i = l.useRef(null);
    return (
        (0, N.tj)(i),
        (0, r.jsxs)("div", {
            ref: i,
            className: U.qp,
            role: "dialog",
            "aria-label": a,
            "data-testid": "discord-web-video-player-playback-speed-popout",
            children: [
                (0, r.jsx)(w.D, {
                    variant: "heading-md/semibold",
                    color: "text-default",
                    className: U.xl,
                    children: a,
                }),
                (0, r.jsx)(x.A, {
                    value: t,
                    initialValue: 1,
                    minValue: ee,
                    maxValue: et,
                    markers: J,
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
