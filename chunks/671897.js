(n.d(t, { A: () => en }), n(321073));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(202091),
    u = n(621466),
    o = n(17928),
    c = n(661531),
    d = n(876230),
    m = n(717421),
    h = n(358618),
    f = n(793920),
    p = n(983851),
    v = n(299163),
    g = n(86147),
    x = n(729475),
    E = n(261958),
    b = n(32880),
    S = n(922016),
    C = n(980707),
    y = n(477782),
    w = n(365199),
    A = n(268791),
    R = n(834730),
    P = n(315710),
    T = n(297264),
    N = n(775602),
    M = n(174459),
    I = n(683574),
    k = n(61491),
    L = n(113494),
    j = n(782134),
    D = n(417270),
    B = n(939249),
    F = n(866665),
    _ = n(375708),
    V = n(862649);
let $ = "-:--",
    H = {
        [d.Q6.PLAYING]: { icon: L.PauseIcon, label: _.intl.string(_.t.ZcgDJX) },
        [d.Q6.PAUSED]: { icon: j.PlayIcon, label: _.intl.string(_.t.RscU7I) },
        [d.Q6.ENDED]: { icon: D.RetryIcon, label: _.intl.string(_.t.hsvh0i) },
    },
    K = { [d.oA.SM]: d.n4.SM, [d.oA.MD]: d.n4.MD, [d.oA.LG]: d.n4.LG },
    O = { [d.n4.SM]: "sm", [d.n4.MD]: "md", [d.n4.LG]: "lg" },
    U = { [d.n4.SM]: "24px", [d.n4.MD]: "24px", [d.n4.LG]: "32px" };
function G(e) {
    let { compact: t = !1 } = e,
        [n, a] = l.useState(null),
        [s, u] = l.useState(null),
        [o, c] = l.useState(!1),
        { videoRef: d } = (0, I.X$)();
    l.useEffect(() => {
        let e = d.current;
        function t() {
            null != e && (a(e.currentTime), u(e.duration));
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
    let m = Number.isFinite(n) && Number.isFinite(s) ? Math.max(0, s - n) : null,
        h = o ? (null != m ? `-${(0, k.rB)(m)}` : $) : Number.isFinite(n) ? (0, k.rB)(n) : $,
        f = Number.isFinite(s) ? (0, k.rB)(s) : $;
    return (0, r.jsxs)(B.D, {
        className: i()(V.d$, V.jk),
        "data-testid": "discord-web-video-player-duration",
        onClick: () => c((e) => !e),
        children: [
            (0, r.jsx)(R.E, { variant: "text-sm/normal", className: V.Ue, tabularNumbers: !0, children: h }),
            !t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(R.E, { variant: "text-sm/normal", className: V.zO, children: "/" }),
                        (0, r.jsx)(R.E, {
                            variant: "text-sm/normal",
                            className: V.Ue,
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
            active: o,
            disabled: m,
            overlay: h,
            tooltipLabel: f,
            tooltipDelayMs: p = 1500,
            shortcut: v,
            onClick: g,
            buttonSize: x = d.n4.MD,
            "data-testid": E,
            clickableProps: b,
        } = e,
        S = "" !== (v ?? "").trim();
    return (0, r.jsx)(F.m, {
        text: a ? f : void 0,
        keyboardShortcut: S ? v : void 0,
        ariaHidden: !0,
        delay: p,
        children: (0, r.jsx)(B.D, {
            onClick: !0 === m ? void 0 : g,
            className: i()(V.K5, { [V.Iy]: m }),
            "aria-label": u,
            "aria-keyshortcuts": S ? v : void 0,
            "aria-disabled": m,
            "data-testid": E,
            innerRef: t,
            ...b,
            children: (0, r.jsx)(s.animated.div, {
                className: V.K5,
                style: {
                    opacity: (0, s.to)([l.to({ range: [0, 1], output: [0, 1] })], (e) => `${a ? e : Math.pow(e, 8)}`),
                    height: U[x],
                },
                children:
                    null != h
                        ? (0, r.jsxs)("span", {
                              className: V.bT,
                              children: [
                                  (0, r.jsx)(n, {
                                      size: O[x],
                                      color: !0 !== m ? c.A.colors.WHITE : c.A.colors.TEXT_MUTED,
                                      className: i()(V.jk, { [V.x2]: o, [V.Wr]: !m }),
                                  }),
                                  h,
                              ],
                          })
                        : (0, r.jsx)(n, {
                              size: O[x],
                              color: !0 !== m ? c.A.colors.WHITE : c.A.colors.TEXT_MUTED,
                              className: i()(V.jk, { [V.x2]: o, [V.Wr]: !m }),
                          }),
            }),
        }),
    });
});
var W = n(91034),
    z = n(710434),
    Y = n(634156),
    Z = n(652215),
    X = n(871273);
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
            hidePlaybackSpeedBtn: R = !1,
            size: P,
            downloadUrl: T,
            downloadContentType: k,
            extraButtons: L,
            autoFocus: j = !1,
            keyDownHandlerRef: D,
            volume: B,
            muted: F,
            transcriptEnabled: $,
            captionEnabled: O,
            handlePlaybackBtnClick: U,
            handleTranscriptBtnClick: q,
            handleCaptionBtnClick: ee,
            handleFullScreenBtnClick: et,
            handleSeekBackBtnClick: en,
            handleSeekForwardBtnClick: el,
            autoHideVolumeSlider: ei = !1,
            compactTimeDisplay: es = !1,
            handleControlBarPendingInteraction: eu,
            onVolumeChange: eo,
            onMutedChange: ec,
            onVolumeExpandedChange: ed,
        } = e,
        em = (0, o.bG)([N.Ay], () => N.Ay.useReducedMotion),
        eh = (0, o.bG)([N.Ay], () => N.Ay.keyboardModeEnabled),
        { isFullscreen: ef, videoRef: ep } = (0, I.X$)(),
        [ev, eg] = l.useState(F ? 0 : B),
        [ex, eE] = l.useState(!1),
        [eb, eS] = l.useState(!1),
        [{ volumeAnimSpring: eC }, ey] = (0, m.z)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        ew = l.useRef(null),
        [eA, eR] = l.useState(1),
        [eP, eT] = l.useState(B),
        [eN, eM] = l.useState(F);
    (B !== eP || F !== eN) && (eT(B), eM(F), eg(F ? 0 : B));
    let eI = l.useCallback(
            (e) => {
                (eR(e), null != ep.current && (ep.current.playbackRate = e));
            },
            [ep],
        ),
        ek = l.useCallback(() => {
            if (null == T) return;
            let e = k?.split("/");
            (M.default.track(Z.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(T, "_blank"));
        }, [T, k]),
        eL = l.useCallback(
            (e) => {
                null != ep.current && (e !== ep.current.volume && (ep.current.volume = e), e !== ev && eg(e));
            },
            [ep, ev],
        ),
        ej = l.useCallback(() => {
            if (null != ep.current)
                if (0 === ev) {
                    let e = 0 === B ? 0.3 : B;
                    (eL(e), ec(!1), eo(e));
                } else (eo(ev), eL(0), ec(!0));
        }, [ep, ev, eL, B, ec, eo]);
    function eD() {
        (eE(!0), ed(!0));
    }
    function eB() {
        (eE(!1), ed(!1));
    }
    let eF = l.useCallback(
        (e) => {
            if (!(e.metaKey || ((0, u.vq)(e.target) && (0, u.Cw)(e.target))))
                switch (e.key) {
                    case d.TJ.PLAYBACK:
                        (e.stopPropagation(), U());
                        break;
                    case d.TJ.SPACE:
                        (e.stopPropagation(), eh || (e.preventDefault(), U()));
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
                        (e.stopPropagation(), C || ee());
                        break;
                    case d.TJ.FULLSCREEN:
                        (e.stopPropagation(), A || et());
                        break;
                    case d.TJ.MUTE:
                        (e.stopPropagation(), ej());
                }
        },
        [ee, et, U, en, el, ej, C, A, eh],
    );
    (l.useEffect(() => {
        j && null != ew.current && ew.current.focus();
    }, [j]),
        l.useEffect(
            () => (
                null != D && (D.current = eF),
                () => {
                    null != D && (D.current = null);
                }
            ),
            [eF, D],
        ),
        l.useEffect(
            () => (
                ey({ volumeAnimSpring: !ei || eb || ex ? 1 : 0, immediate: em }),
                () => {
                    eC.stop();
                }
            ),
            [ei, eb, ex, ey, em, eC],
        ));
    let e_ = 0 === ev ? h._ : ev < 0.5 ? f.S : p.H,
        eV = _.intl.string(0 === ev ? _.t.YqAjXy : _.t.w4m945),
        { icon: e$, label: eH } = H[t];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: V.X3,
                children: [
                    (0, r.jsx)(Q, {
                        iconComponent: e$,
                        animationTime: n,
                        visible: a,
                        ariaLabel: eH,
                        tooltipLabel: eH,
                        shortcut: d.TJ.PLAYBACK,
                        onClick: U,
                        ref: ew,
                        buttonSize: K[P],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !w &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(Q, {
                                    iconComponent: z.q,
                                    animationTime: n,
                                    visible: a,
                                    onClick: en,
                                    ariaLabel: _.intl.string(X.default["dRVF+Z"]),
                                    tooltipLabel: _.intl.string(X.default["dRVF+Z"]),
                                    shortcut: d.TJ.SEEK_BACK,
                                    buttonSize: K[P],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(Q, {
                                    iconComponent: Y.i,
                                    animationTime: n,
                                    visible: a,
                                    onClick: el,
                                    disabled: !S,
                                    ariaLabel: S ? _.intl.string(X.default.yV2FLL) : _.intl.string(X.default.YWbiPw),
                                    tooltipLabel: S ? _.intl.string(X.default.yV2FLL) : _.intl.string(X.default.YWbiPw),
                                    tooltipDelayMs: 1500 * !!S,
                                    shortcut: d.TJ.SEEK_FORWARD,
                                    buttonSize: K[P],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(s.animated.div, {
                className: i()(V.X3, V.L1),
                style: {
                    opacity: (0, s.to)([n.to({ range: [0, 1], output: [0, 1] })], (e) => `${a ? e : Math.pow(e, 8)}`),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: eD,
                        onMouseLeave: eB,
                        onFocus: eD,
                        onBlur: eB,
                        className: V.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(Q, {
                                iconComponent: e_,
                                animationTime: n,
                                visible: a,
                                onClick: ej,
                                ariaLabel: eV,
                                tooltipLabel: eV,
                                shortcut: d.TJ.MUTE,
                                buttonSize: K[P],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: V.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, s.to)(
                                        [eC.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${a ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, s.to)([eC.to({ range: [0, 1], output: [0, J[P]] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(v.A, {
                                    mini: !0,
                                    value: ev,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: function (e) {
                                        (eL(e),
                                            eo(e),
                                            eb && (eS(!1), eu(!1)),
                                            F && e > 0 ? ec(!1) : F || 0 !== e || ec(!0));
                                    },
                                    asValueChanges: function (e) {
                                        (eL(e), eb || (eS(!0), eu(!0)));
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
                    (0, r.jsx)(G, { compact: es }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(V.X3, V.ST),
                children: [
                    (0, r.jsx)(er, {
                        canCollapse: null != L && L.length > 0,
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
                                        iconComponent: W.I,
                                        label: _.intl.string(X.default["0DbPcL"]),
                                        onClick: s,
                                        active: l,
                                        shortcut: d.TJ.CAPTION,
                                        "data-testid": "discord-web-video-player-captions-btn",
                                    }),
                                null != u &&
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
                            transcriptEnabled: $,
                            captionEnabled: O,
                            playerState: t,
                            handleTranscriptBtnClick: q,
                            handleCaptionBtnClick: ee,
                            downloadUrl: T,
                            handleDownloadButtonClick: ek,
                            extraButtons: L,
                        }),
                        animSpring: n,
                        visible: a,
                        size: P,
                    }),
                    !R &&
                        (0, r.jsx)(ea, {
                            playbackRate: eA,
                            onPlaybackRateChange: eI,
                            animSpring: n,
                            visible: a,
                            size: P,
                            handleControlBarPendingInteraction: eu,
                        }),
                    !A &&
                        (0, r.jsx)(Q, {
                            iconComponent: ef ? g.z : x.T,
                            animationTime: n,
                            visible: a,
                            onClick: et,
                            ariaLabel: _.intl.string(X.default.z9Cnzv),
                            tooltipLabel: _.intl.string(X.default.z9Cnzv),
                            shortcut: d.TJ.FULLSCREEN,
                            buttonSize: K[P],
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
        s = l.useRef(null),
        u = _.intl.string(_.t.PdRCRg),
        { activeLayer: o } = (0, I.X$)();
    return (0, r.jsx)(S.Y, {
        targetElementRef: s,
        position: "top",
        align: "right",
        layerContext: o,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(C.W, {
                navId: "video-player-overflow",
                "aria-label": u,
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
            (0, r.jsx)(Q, {
                ref: s,
                iconComponent: w.MoreHorizontalIcon,
                animationTime: n,
                visible: a,
                ariaLabel: u,
                tooltipLabel: u,
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
            size: s,
            handleControlBarPendingInteraction: u,
        } = e,
        o = l.useRef(null),
        c = _.intl.string(X.default.ZwPhbB),
        { activeLayer: d } = (0, I.X$)();
    return (0, r.jsx)(S.Y, {
        targetElementRef: o,
        layerContext: d,
        position: "top",
        align: "right",
        onRequestOpen: () => u(!0),
        onRequestClose: () => {
            (u(!1), o.current?.focus());
        },
        renderPopout: () => (0, r.jsx)(ei, { playbackRate: t, onPlaybackRateChange: n, label: c }),
        children: (e) => {
            let n = 1 !== t;
            return (0, r.jsx)(Q, {
                ref: o,
                iconComponent: A.$,
                animationTime: a,
                visible: i,
                active: n,
                overlay: n
                    ? (0, r.jsx)(R.E, {
                          "aria-hidden": !0,
                          variant: "text-xxs/bold",
                          color: "none",
                          className: V.IG,
                          tabularNumbers: !0,
                          children: `${t}x`,
                      })
                    : void 0,
                ariaLabel: c,
                tooltipLabel: c,
                buttonSize: K[s],
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
        (0, P.tj)(i),
        (0, r.jsxs)("div", {
            ref: i,
            className: V.qp,
            role: "dialog",
            "aria-label": a,
            "data-testid": "discord-web-video-player-playback-speed-popout",
            children: [
                (0, r.jsx)(T.D, {
                    variant: "heading-md/semibold",
                    color: "text-default",
                    className: V.xl,
                    children: a,
                }),
                (0, r.jsx)(v.A, {
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
