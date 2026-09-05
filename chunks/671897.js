n.d(t, { A: () => en }), n(321073);
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(74445),
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
    P = n(297264),
    R = n(775602),
    T = n(174459),
    M = n(683574),
    L = n(61491),
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
    $ = { [d.oA.SM]: d.n4.SM, [d.oA.MD]: d.n4.MD, [d.oA.LG]: d.n4.LG },
    H = { [d.n4.SM]: "sm", [d.n4.MD]: "md", [d.n4.LG]: "lg" },
    G = { [d.n4.SM]: "24px", [d.n4.MD]: "24px", [d.n4.LG]: "32px" };
function Q(e) {
    let { compact: t = !1 } = e,
        [n, a] = l.useState(null),
        [u, s] = l.useState(null),
        [o, c] = l.useState(!1),
        { videoRef: d } = (0, M.X$)();
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
        f = o ? (null != m ? `-${(0, L.rB)(m)}` : K) : Number.isFinite(n) ? (0, L.rB)(n) : K,
        h = Number.isFinite(u) ? (0, L.rB)(u) : K;
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
let V = l.forwardRef(function (e, t) {
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
                    height: G[x],
                },
                children: (0, r.jsx)(n, {
                    size: H[x],
                    color: !0 !== m ? c.A.colors.WHITE : c.A.colors.TEXT_MUTED,
                    className: i()(U.jk, { [U.x2]: o, [U.Wr]: !m }),
                }),
            }),
        }),
    });
});
var Y = n(91034),
    z = n(710434),
    Z = n(634156),
    X = n(652215),
    W = n(871273);
let J = { [d.oA.SM]: 48, [d.oA.MD]: 100, [d.oA.LG]: 100 },
    q = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    ee = q[0],
    et = q[q.length - 1];
function en(e) {
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
            size: P,
            downloadUrl: L,
            downloadContentType: j,
            extraButtons: D,
            autoFocus: k = !1,
            keyDownHandlerRef: I,
            volume: B,
            muted: F,
            transcriptEnabled: K,
            captionEnabled: H,
            handlePlaybackBtnClick: G,
            handleTranscriptBtnClick: q,
            handleCaptionBtnClick: ee,
            handleFullScreenBtnClick: et,
            handleSeekBackBtnClick: en,
            handleSeekForwardBtnClick: el,
            autoHideVolumeSlider: ei = !1,
            compactTimeDisplay: eu = !1,
            handleControlBarPendingInteraction: es,
            onVolumeChange: eo,
            onMutedChange: ec,
            onVolumeExpandedChange: ed,
        } = e,
        em = (0, o.bG)([R.Ay], () => R.Ay.useReducedMotion),
        ef = (0, o.bG)([R.Ay], () => R.Ay.keyboardModeEnabled),
        { isFullscreen: eh, videoRef: ep } = (0, M.X$)(),
        [ev, ex] = l.useState(F ? 0 : B),
        [eg, eE] = l.useState(!1),
        [eb, eS] = l.useState(!1),
        [{ volumeAnimSpring: eC }, ey] = (0, f.z)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        ew = l.useRef(null),
        [eA, eN] = l.useState(1),
        [eP, eR] = l.useState(B),
        [eT, eM] = l.useState(F);
    (B !== eP || F !== eT) && (eR(B), eM(F), ex(F ? 0 : B));
    let eL = l.useCallback(
            (e) => {
                eN(e), null != ep.current && (ep.current.playbackRate = e);
            },
            [ep],
        ),
        ej = l.useCallback(() => {
            if (null == L) return;
            let e = j?.split("/");
            T.default.track(X.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(L, "_blank");
        }, [L, j]),
        eD = l.useCallback(
            (e) => {
                null != ep.current && (e !== ep.current.volume && (ep.current.volume = e), e !== ev && ex(e));
            },
            [ep, ev],
        ),
        ek = l.useCallback(() => {
            if (null != ep.current)
                if (0 === ev) {
                    let e = 0 === B ? 0.3 : B;
                    eD(e), ec(!1), eo(e);
                } else eo(ev), eD(0), ec(!0);
        }, [ep, ev, eD, B, ec, eo]);
    function eI() {
        eE(!0), ed(!0);
    }
    function eB() {
        eE(!1), ed(!1);
    }
    let eF = l.useCallback(
        (e) => {
            if (!(e.metaKey || ((0, s.vq)(e.target) && (0, s.Cw)(e.target))))
                switch (e.key) {
                    case d.TJ.PLAYBACK:
                        e.stopPropagation(), G();
                        break;
                    case d.TJ.SPACE:
                        e.stopPropagation(), ef || (e.preventDefault(), G());
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
                        e.stopPropagation(), C || ee();
                        break;
                    case d.TJ.FULLSCREEN:
                        e.stopPropagation(), A || et();
                        break;
                    case d.TJ.MUTE:
                        e.stopPropagation(), ek();
                }
        },
        [ee, et, G, en, el, ek, C, A, ef],
    );
    l.useEffect(() => {
        k && null != ew.current && ew.current.focus();
    }, [k]),
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
                ey({ volumeAnimSpring: !ei || eb || eg ? 1 : 0, immediate: em }),
                () => {
                    eC.stop();
                }
            ),
            [ei, eb, eg, ey, em, eC],
        );
    let e_ = 0 === ev ? h._ : ev < 0.5 ? p.S : v.H,
        eU = _.intl.string(0 === ev ? _.t.YqAjXy : _.t.w4m945),
        { icon: eK, label: eO } = O[t];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: U.X3,
                children: [
                    (0, r.jsx)(V, {
                        iconComponent: eK,
                        animationTime: n,
                        visible: a,
                        ariaLabel: eO,
                        tooltipLabel: eO,
                        shortcut: d.TJ.PLAYBACK,
                        onClick: G,
                        ref: ew,
                        buttonSize: $[P],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !w &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(V, {
                                    iconComponent: z.q,
                                    animationTime: n,
                                    visible: a,
                                    onClick: en,
                                    ariaLabel: _.intl.string(W.default["dRVF+Z"]),
                                    tooltipLabel: _.intl.string(W.default["dRVF+Z"]),
                                    shortcut: d.TJ.SEEK_BACK,
                                    buttonSize: $[P],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(V, {
                                    iconComponent: Z.i,
                                    animationTime: n,
                                    visible: a,
                                    onClick: el,
                                    disabled: !S,
                                    ariaLabel: S ? _.intl.string(W.default.yV2FLL) : _.intl.string(W.default.YWbiPw),
                                    tooltipLabel: S ? _.intl.string(W.default.yV2FLL) : _.intl.string(W.default.YWbiPw),
                                    tooltipDelayMs: 1500 * !!S,
                                    shortcut: d.TJ.SEEK_FORWARD,
                                    buttonSize: $[P],
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
                                onClick: ek,
                                ariaLabel: eU,
                                tooltipLabel: eU,
                                shortcut: d.TJ.MUTE,
                                buttonSize: $[P],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(u.animated.div, {
                                className: U.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, u.to)(
                                        [eC.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${a ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, u.to)([eC.to({ range: [0, 1], output: [0, J[P]] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(m.A, {
                                    mini: !0,
                                    value: ev,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: function (e) {
                                        eD(e),
                                            eo(e),
                                            eb && (eS(!1), es(!1)),
                                            F && e > 0 ? ec(!1) : F || 0 !== e || ec(!0);
                                    },
                                    asValueChanges: function (e) {
                                        eD(e), eb || (eS(!0), es(!0));
                                    },
                                    fillStyles: { backgroundColor: c.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": _.intl.string(W.default.XiLvuG),
                                    getAriaValueText: (e) =>
                                        _.intl.formatToPlainString(W.default["5L6uDs"], {
                                            percent: Math.round(100 * e),
                                        }),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(Q, { compact: eu }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(U.X3, U.ST),
                children: [
                    (0, r.jsx)(er, {
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
                                        label: _.intl.string(W.default["6EjGUv"]),
                                        onClick: i,
                                        active: r && a !== d.Q6.ENDED,
                                        disabled: a === d.Q6.ENDED,
                                        "data-testid": "discord-web-video-player-transcript-btn",
                                    }),
                                n ||
                                    m.push({
                                        id: "caption",
                                        iconComponent: Y.I,
                                        label: _.intl.string(W.default["0DbPcL"]),
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
                            captionEnabled: H,
                            playerState: t,
                            handleTranscriptBtnClick: q,
                            handleCaptionBtnClick: ee,
                            downloadUrl: L,
                            handleDownloadButtonClick: ej,
                            extraButtons: D,
                        }),
                        animSpring: n,
                        visible: a,
                        size: P,
                    }),
                    !N &&
                        (0, r.jsx)(ea, {
                            playbackRate: eA,
                            onPlaybackRateChange: eL,
                            animSpring: n,
                            visible: a,
                            size: P,
                            handleControlBarPendingInteraction: es,
                        }),
                    !A &&
                        (0, r.jsx)(V, {
                            iconComponent: eh ? x.z : g.T,
                            animationTime: n,
                            visible: a,
                            onClick: et,
                            ariaLabel: _.intl.string(W.default.z9Cnzv),
                            tooltipLabel: _.intl.string(W.default.z9Cnzv),
                            shortcut: d.TJ.FULLSCREEN,
                            buttonSize: $[P],
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
                            buttonSize: $[i],
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
        s = _.intl.string(_.t.PdRCRg),
        { activeLayer: o } = (0, M.X$)();
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
            (0, r.jsx)(V, {
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
function ea(e) {
    let {
            playbackRate: t,
            onPlaybackRateChange: n,
            animSpring: a,
            visible: i,
            size: u,
            handleControlBarPendingInteraction: s,
        } = e,
        o = l.useRef(null),
        c = _.intl.string(W.default.ZwPhbB),
        { activeLayer: d } = (0, M.X$)();
    return (0, r.jsx)(S.Y, {
        targetElementRef: o,
        layerContext: d,
        position: "top",
        align: "right",
        onRequestOpen: () => s(!0),
        onRequestClose: () => {
            s(!1), o.current?.focus();
        },
        renderPopout: () => (0, r.jsx)(ei, { playbackRate: t, onPlaybackRateChange: n, label: c }),
        children: (e) =>
            (0, r.jsx)(V, {
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
                (0, r.jsx)(P.D, {
                    variant: "heading-md/semibold",
                    color: "text-default",
                    className: U.xl,
                    children: a,
                }),
                (0, r.jsx)(m.A, {
                    value: t,
                    initialValue: 1,
                    minValue: ee,
                    maxValue: et,
                    markers: q,
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
