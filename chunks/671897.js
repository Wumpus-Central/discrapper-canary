n.d(t, { A: () => ee }), n(321073);
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(221877),
    s = n(621466),
    o = n(17928),
    c = n(661531),
    d = n(876230),
    m = n(106236),
    f = n(717421),
    h = n(358618),
    p = n(793920),
    v = n(983851),
    x = n(86147),
    g = n(729475),
    E = n(261958),
    b = n(32880),
    S = n(922016),
    C = n(980707),
    y = n(477782),
    w = n(365199),
    A = n(268791),
    N = n(315710),
    R = n(297264),
    T = n(775602),
    P = n(174459),
    L = n(683574),
    M = n(61491),
    j = n(113494),
    D = n(782134),
    k = n(417270),
    I = n(939249),
    B = n(834730),
    F = n(866665),
    _ = n(375708),
    U = n(862649);
let K = "-:--",
    O = {
        [d.Q6.PLAYING]: { icon: j.PauseIcon, label: _.intl.string(_.t.ZcgDJX) },
        [d.Q6.PAUSED]: { icon: D.PlayIcon, label: _.intl.string(_.t.RscU7I) },
        [d.Q6.ENDED]: { icon: k.RetryIcon, label: _.intl.string(_.t.hsvh0i) },
    },
    $ = { [d.oA.MD]: d.n4.MD, [d.oA.LG]: d.n4.LG },
    Q = { [d.n4.MD]: "md", [d.n4.LG]: "lg" };
function V(e) {
    let { compact: t = !1 } = e,
        [n, a] = l.useState(null),
        [u, s] = l.useState(null),
        [o, c] = l.useState(!1),
        { videoRef: d } = (0, L.X$)();
    l.useEffect(() => {
        let e = d.current;
        function t() {
            null != e && (a(e.currentTime), s(e.duration));
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
    }, [d]);
    let m = Number.isFinite(n) && Number.isFinite(u) ? Math.max(0, u - n) : null,
        f = o ? (null != m ? `-${(0, M.rB)(m)}` : K) : Number.isFinite(n) ? (0, M.rB)(n) : K,
        h = Number.isFinite(u) ? (0, M.rB)(u) : K;
    return (0, r.jsxs)(I.D, {
        className: i()(U.d$, U.jk),
        "data-testid": "discord-web-video-player-duration",
        onClick: () => c((e) => !e),
        children: [
            (0, r.jsx)(B.E, { variant: "text-sm/normal", className: U.Ue, tabularNumbers: !0, children: f }),
            !t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(B.E, { variant: "text-sm/normal", className: U.zO, children: "/" }),
                        (0, r.jsx)(B.E, {
                            variant: "text-sm/normal",
                            className: U.Ue,
                            tabularNumbers: !0,
                            children: h,
                        }),
                    ],
                }),
        ],
    });
}
let G = l.forwardRef(function (e, t) {
    let {
            iconComponent: n,
            animationTime: l,
            visible: a,
            ariaLabel: s,
            active: o,
            disabled: m,
            tooltipLabel: f,
            tooltipDelayMs: h = 1500,
            shortcut: p,
            onClick: v,
            buttonSize: x = d.n4.MD,
            "data-testid": g,
            clickableProps: E,
        } = e,
        b = "" !== (p ?? "").trim();
    return (0, r.jsx)(F.m, {
        text: a ? f : void 0,
        keyboardShortcut: b ? p : void 0,
        ariaHidden: !0,
        delay: h,
        children: (0, r.jsx)(I.D, {
            onClick: !0 === m ? void 0 : v,
            className: i()(U.K5, { [U.Iy]: m }),
            "aria-label": s,
            "aria-keyshortcuts": b ? p : void 0,
            "aria-disabled": m,
            "data-testid": g,
            innerRef: t,
            ...E,
            children: (0, r.jsx)(u.animated.div, {
                className: U.K5,
                style: {
                    opacity: (0, u.to)([l.to({ range: [0, 1], output: [0, 1] })], (e) => `${a ? e : Math.pow(e, 8)}`),
                    height: { [d.n4.LG]: "32px", [d.n4.MD]: "24px" }[x],
                },
                children: (0, r.jsx)(n, {
                    size: Q[x],
                    color: !0 !== m ? c.A.colors.WHITE : c.A.colors.TEXT_MUTED,
                    className: i()(U.jk, { [U.x2]: o, [U.Wr]: !m }),
                }),
            }),
        }),
    });
});
var Y = n(91034),
    H = n(710434),
    Z = n(634156),
    z = n(652215),
    X = n(652699);
let W = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    J = W[0],
    q = W[W.length - 1];
function ee(e) {
    let {
            playerState: t,
            animSpring: n,
            visible: a,
            seekForwardEnabled: S,
            hideCaptionBtn: C = !1,
            hideTranscriptBtn: y = !1,
            hideSkipButtons: w = !1,
            hideFullScreenBtn: A = !1,
            hidePlaybackSpeedBtn: N = !1,
            size: R,
            downloadUrl: M,
            downloadContentType: j,
            extraButtons: D,
            autoFocus: k = !1,
            keyDownHandlerRef: I,
            volume: B,
            muted: F,
            transcriptEnabled: K,
            captionEnabled: Q,
            handlePlaybackBtnClick: W,
            handleTranscriptBtnClick: J,
            handleCaptionBtnClick: q,
            handleFullScreenBtnClick: ee,
            handleSeekBackBtnClick: en,
            handleSeekForwardBtnClick: el,
            autoHideVolumeSlider: ea = !1,
            compactTimeDisplay: ei = !1,
            handleControlBarPendingInteraction: eu,
            onVolumeChange: es,
            onMutedChange: eo,
            onVolumeExpandedChange: ec,
        } = e,
        ed = (0, o.bG)([T.Ay], () => T.Ay.useReducedMotion),
        em = (0, o.bG)([T.Ay], () => T.Ay.keyboardModeEnabled),
        { isFullscreen: ef, videoRef: eh } = (0, L.X$)(),
        [ep, ev] = l.useState(F ? 0 : B),
        [ex, eg] = l.useState(!1),
        [eE, eb] = l.useState(!1),
        [{ volumeAnimSpring: eS }, eC] = (0, f.z)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        ey = l.useRef(null),
        [ew, eA] = l.useState(1),
        [eN, eR] = l.useState(B),
        [eT, eP] = l.useState(F);
    (B !== eN || F !== eT) && (eR(B), eP(F), ev(F ? 0 : B));
    let eL = l.useCallback(
            (e) => {
                eA(e), null != eh.current && (eh.current.playbackRate = e);
            },
            [eh],
        ),
        eM = l.useCallback(() => {
            if (null == M) return;
            let e = j?.split("/");
            P.default.track(z.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(M, "_blank");
        }, [M, j]),
        ej = l.useCallback(
            (e) => {
                null != eh.current && (e !== eh.current.volume && (eh.current.volume = e), e !== ep && ev(e));
            },
            [eh, ep],
        ),
        eD = l.useCallback(() => {
            if (null != eh.current)
                if (0 === ep) {
                    let e = 0 === B ? 0.3 : B;
                    ej(e), eo(!1), es(e);
                } else es(ep), ej(0), eo(!0);
        }, [eh, ep, ej, B, eo, es]);
    function ek() {
        eg(!0), ec(!0);
    }
    function eI() {
        eg(!1), ec(!1);
    }
    let eB = l.useCallback(
        (e) => {
            if (!(e.metaKey || ((0, s.vq)(e.target) && (0, s.Cw)(e.target))))
                switch (e.key) {
                    case d.TJ.PLAYBACK:
                        e.stopPropagation(), W();
                        break;
                    case d.TJ.SPACE:
                        e.stopPropagation(), em || (e.preventDefault(), W());
                        break;
                    case d.TJ.SEEK_BACK:
                    case d.TJ.SEEK_BACK_ALT:
                        e.stopPropagation(), en();
                        break;
                    case d.TJ.SEEK_FORWARD:
                    case d.TJ.SEEK_FORWARD_ALT:
                        e.stopPropagation(), el();
                        break;
                    case d.TJ.CAPTION:
                        e.stopPropagation(), C || q();
                        break;
                    case d.TJ.FULLSCREEN:
                        e.stopPropagation(), A || ee();
                        break;
                    case d.TJ.MUTE:
                        e.stopPropagation(), eD();
                }
        },
        [q, ee, W, en, el, eD, C, A, em],
    );
    l.useEffect(() => {
        k && null != ey.current && ey.current.focus();
    }, [k]),
        l.useEffect(
            () => (
                null != I && (I.current = eB),
                () => {
                    null != I && (I.current = null);
                }
            ),
            [eB, I],
        ),
        l.useEffect(
            () => (
                eC({ volumeAnimSpring: !ea || eE || ex ? 1 : 0, immediate: ed }),
                () => {
                    eS.stop();
                }
            ),
            [ea, eE, ex, eC, ed, eS],
        );
    let eF = 0 === ep ? h._ : ep < 0.5 ? p.S : v.H,
        e_ = _.intl.string(0 === ep ? _.t.YqAjXy : _.t.w4m945),
        { icon: eU, label: eK } = O[t];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: U.X3,
                children: [
                    (0, r.jsx)(G, {
                        iconComponent: eU,
                        animationTime: n,
                        visible: a,
                        ariaLabel: eK,
                        tooltipLabel: eK,
                        shortcut: d.TJ.PLAYBACK,
                        onClick: W,
                        ref: ey,
                        buttonSize: $[R],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !w &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(G, {
                                    iconComponent: H.q,
                                    animationTime: n,
                                    visible: a,
                                    onClick: en,
                                    ariaLabel: _.intl.string(X.default["dRVF+Z"]),
                                    tooltipLabel: _.intl.string(X.default["dRVF+Z"]),
                                    shortcut: d.TJ.SEEK_BACK,
                                    buttonSize: $[R],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(G, {
                                    iconComponent: Z.i,
                                    animationTime: n,
                                    visible: a,
                                    onClick: el,
                                    disabled: !S,
                                    ariaLabel: S ? _.intl.string(X.default.yV2FLL) : _.intl.string(X.default.YWbiPw),
                                    tooltipLabel: S ? _.intl.string(X.default.yV2FLL) : _.intl.string(X.default.YWbiPw),
                                    tooltipDelayMs: 1500 * !!S,
                                    shortcut: d.TJ.SEEK_FORWARD,
                                    buttonSize: $[R],
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
                        onMouseEnter: ek,
                        onMouseLeave: eI,
                        onFocus: ek,
                        onBlur: eI,
                        className: U.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(G, {
                                iconComponent: eF,
                                animationTime: n,
                                visible: a,
                                onClick: eD,
                                ariaLabel: e_,
                                tooltipLabel: e_,
                                shortcut: d.TJ.MUTE,
                                buttonSize: $[R],
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
                                    width: (0, u.to)([eS.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(m.A, {
                                    mini: !0,
                                    value: ep,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: function (e) {
                                        ej(e),
                                            es(e),
                                            eE && (eb(!1), eu(!1)),
                                            F && e > 0 ? eo(!1) : F || 0 !== e || eo(!0);
                                    },
                                    asValueChanges: function (e) {
                                        ej(e), eE || (eb(!0), eu(!0));
                                    },
                                    fillStyles: { backgroundColor: c.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": _.intl.string(X.default.XiLvuG),
                                    getAriaValueText: (e) =>
                                        _.intl.formatToPlainString(X.default["5L6uDs"], {
                                            percent: Math.round(100 * e),
                                        }),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(V, { compact: ei }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(U.X3, U.ST),
                children: [
                    (0, r.jsx)(et, {
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
                                    extraButtons: c,
                                } = e,
                                m = [];
                            return (
                                t ||
                                    m.push({
                                        id: "transcript",
                                        iconComponent: E.u,
                                        label: _.intl.string(X.default["6EjGUv"]),
                                        onClick: i,
                                        active: r && a !== d.Q6.ENDED,
                                        disabled: a === d.Q6.ENDED,
                                        "data-testid": "discord-web-video-player-transcript-btn",
                                    }),
                                n ||
                                    m.push({
                                        id: "caption",
                                        iconComponent: Y.I,
                                        label: _.intl.string(X.default["0DbPcL"]),
                                        onClick: u,
                                        active: l,
                                        shortcut: d.TJ.CAPTION,
                                        "data-testid": "discord-web-video-player-captions-btn",
                                    }),
                                null != s &&
                                    m.push({
                                        id: "download",
                                        iconComponent: b.DownloadIcon,
                                        label: _.intl.string(_.t["1WjMbC"]),
                                        onClick: o,
                                        "data-testid": "discord-web-video-player-download-btn",
                                    }),
                                null != c && m.push(...c),
                                m
                            );
                        })({
                            hideTranscriptBtn: y,
                            hideCaptionBtn: C,
                            transcriptEnabled: K,
                            captionEnabled: Q,
                            playerState: t,
                            handleTranscriptBtnClick: J,
                            handleCaptionBtnClick: q,
                            downloadUrl: M,
                            handleDownloadButtonClick: eM,
                            extraButtons: D,
                        }),
                        animSpring: n,
                        visible: a,
                        size: R,
                    }),
                    !N &&
                        (0, r.jsx)(er, {
                            playbackRate: ew,
                            onPlaybackRateChange: eL,
                            animSpring: n,
                            visible: a,
                            size: R,
                            handleControlBarPendingInteraction: eu,
                        }),
                    !A &&
                        (0, r.jsx)(G, {
                            iconComponent: ef ? x.z : g.T,
                            animationTime: n,
                            visible: a,
                            onClick: ee,
                            ariaLabel: _.intl.string(X.default.z9Cnzv),
                            tooltipLabel: _.intl.string(X.default.z9Cnzv),
                            shortcut: d.TJ.FULLSCREEN,
                            buttonSize: $[R],
                            "data-testid": "discord-web-video-player-fullscreen-btn",
                        }),
                ],
            }),
        ],
    });
}
function et(e) {
    let { buttons: t, canCollapse: n, animSpring: l, visible: a, size: i } = e;
    return 0 === t.length
        ? null
        : !n || t.length <= 1
          ? (0, r.jsx)(r.Fragment, {
                children: t.map((e) =>
                    (0, r.jsx)(
                        G,
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
                            buttonSize: $[i],
                            "data-testid": e["data-testid"],
                        },
                        e.id,
                    ),
                ),
            })
          : (0, r.jsx)(en, { buttons: t, animSpring: l, visible: a, size: i });
}
function en(e) {
    let { buttons: t, animSpring: n, visible: a, size: i } = e,
        u = l.useRef(null),
        s = _.intl.string(_.t.PdRCRg),
        { activeLayer: o } = (0, L.X$)();
    return (0, r.jsx)(S.Y, {
        targetElementRef: u,
        position: "top",
        align: "right",
        layerContext: o,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(C.W, {
                navId: "video-player-overflow",
                "aria-label": s,
                onClose: n,
                onSelect: n,
                children: t.map((e) => {
                    let t = { type: "icon", icon: e.iconComponent };
                    return null != e.active
                        ? (0, r.jsx)(
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
                        : (0, r.jsx)(
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
            (0, r.jsx)(G, {
                ref: u,
                iconComponent: w.MoreHorizontalIcon,
                animationTime: n,
                visible: a,
                ariaLabel: s,
                tooltipLabel: s,
                buttonSize: $[i],
                clickableProps: e,
                "data-testid": "discord-web-video-player-overflow-menu-button",
            }),
    });
}
function er(e) {
    let {
            playbackRate: t,
            onPlaybackRateChange: n,
            animSpring: a,
            visible: i,
            size: u,
            handleControlBarPendingInteraction: s,
        } = e,
        o = l.useRef(null),
        c = _.intl.string(X.default.ZwPhbB),
        { activeLayer: d } = (0, L.X$)();
    return (0, r.jsx)(S.Y, {
        targetElementRef: o,
        layerContext: d,
        position: "top",
        align: "right",
        onRequestOpen: () => s(!0),
        onRequestClose: () => {
            s(!1), o.current?.focus();
        },
        renderPopout: () => (0, r.jsx)(el, { playbackRate: t, onPlaybackRateChange: n, label: c }),
        children: (e) =>
            (0, r.jsx)(G, {
                ref: o,
                iconComponent: A.$,
                animationTime: a,
                visible: i,
                ariaLabel: c,
                tooltipLabel: c,
                buttonSize: $[u],
                clickableProps: { ...e, "aria-haspopup": "dialog" },
                "data-testid": "discord-web-video-player-playback-speed-btn",
            }),
    });
}
function el(e) {
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
                (0, r.jsx)(R.D, {
                    variant: "heading-md/semibold",
                    color: "text-default",
                    className: U.xl,
                    children: a,
                }),
                (0, r.jsx)(m.A, {
                    value: t,
                    initialValue: 1,
                    minValue: J,
                    maxValue: q,
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
