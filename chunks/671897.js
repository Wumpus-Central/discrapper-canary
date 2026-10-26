(n.d(t, { A: () => el }), n(321073));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(941143),
    o = n(621466),
    s = n(17928),
    c = n(661531),
    d = n(876230),
    m = n(717421),
    f = n(358618),
    p = n(793920),
    h = n(983851),
    v = n(205513),
    x = n(265872),
    E = n(86147),
    g = n(729475),
    b = n(261958),
    y = n(32880),
    S = n(980707),
    C = n(477782),
    P = n(365199),
    w = n(268791),
    A = n(834730),
    R = n(315710),
    N = n(297264),
    L = n(893007),
    T = n(765548),
    k = n(775602),
    M = n(174459),
    j = n(683574),
    D = n(61491),
    I = n(113494),
    B = n(782134),
    F = n(417270),
    U = n(939249),
    _ = n(866665),
    G = n(105292),
    K = n(862649);
let $ = "-:--",
    O = {
        [d.Q6.PLAYING]: { icon: I.PauseIcon, label: G.intl.string(G.t.ZcgDJX) },
        [d.Q6.PAUSED]: { icon: B.PlayIcon, label: G.intl.string(G.t.RscU7I) },
        [d.Q6.ENDED]: { icon: F.RetryIcon, label: G.intl.string(G.t.hsvh0i) },
    },
    Q = { [d.oA.SM]: d.n4.SM, [d.oA.MD]: d.n4.MD, [d.oA.LG]: d.n4.LG },
    H = { [d.n4.SM]: "sm", [d.n4.MD]: "md", [d.n4.LG]: "lg" },
    Y = { [d.n4.SM]: "24px", [d.n4.MD]: "24px", [d.n4.LG]: "32px" };
function V(e) {
    let { compact: t = !1 } = e,
        [n, a] = l.useState(null),
        [u, o] = l.useState(null),
        [s, c] = l.useState(!1),
        { videoRef: d } = (0, j.X$)();
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
        f = s ? (null != m ? `-${(0, D.rB)(m)}` : $) : Number.isFinite(n) ? (0, D.rB)(n) : $,
        p = Number.isFinite(u) ? (0, D.rB)(u) : $;
    return (0, r.jsxs)(U.D, {
        className: i()(K.d$, K.jk),
        "data-testid": "discord-web-video-player-duration",
        onClick: () => c((e) => !e),
        children: [
            (0, r.jsx)(A.E, { variant: "text-sm/normal", className: K.Ue, tabularNumbers: !0, children: f }),
            !t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(A.E, { variant: "text-sm/normal", className: K.zO, children: "/" }),
                        (0, r.jsx)(A.E, {
                            variant: "text-sm/normal",
                            className: K.Ue,
                            tabularNumbers: !0,
                            children: p,
                        }),
                    ],
                }),
        ],
    });
}
function X(e) {
    let {
            iconComponent: t,
            animationTime: n,
            visible: l,
            ariaLabel: a,
            active: o,
            disabled: s,
            overlay: m,
            tooltipLabel: f,
            tooltipDelayMs: p = 1500,
            hideTooltip: h = !1,
            shortcut: v,
            onClick: x,
            buttonSize: E = d.n4.MD,
            "data-testid": g,
            clickableProps: b,
            ref: y,
        } = e,
        S = "" !== (v ?? "").trim();
    return (0, r.jsx)(_.m, {
        text: l ? f : void 0,
        keyboardShortcut: S ? v : void 0,
        ariaHidden: !0,
        shouldShow: !h,
        delay: p,
        children: (0, r.jsx)(U.D, {
            onClick: !0 === s ? void 0 : x,
            className: i()(K.K5, { [K.Iy]: s }),
            "aria-label": a,
            "aria-keyshortcuts": S ? v : void 0,
            "aria-disabled": s,
            "data-testid": g,
            innerRef: y,
            ...b,
            children: (0, r.jsx)(u.animated.div, {
                className: K.K5,
                style: {
                    opacity: (0, u.to)([n.to({ range: [0, 1], output: [0, 1] })], (e) => `${l ? e : Math.pow(e, 8)}`),
                    height: Y[E],
                },
                children:
                    null != m
                        ? (0, r.jsxs)("span", {
                              className: K.bT,
                              children: [
                                  (0, r.jsx)(t, {
                                      size: H[E],
                                      color: !0 !== s ? c.A.colors.WHITE : c.A.colors.TEXT_MUTED,
                                      className: i()(K.jk, { [K.x2]: o, [K.Wr]: !s }),
                                  }),
                                  m,
                              ],
                          })
                        : (0, r.jsx)(t, {
                              size: H[E],
                              color: !0 !== s ? c.A.colors.WHITE : c.A.colors.TEXT_MUTED,
                              className: i()(K.jk, { [K.x2]: o, [K.Wr]: !s }),
                          }),
            }),
        }),
    });
}
var z = n(91034),
    W = n(710434),
    Z = n(634156),
    q = n(652215),
    J = n(711127);
let ee = { [d.oA.SM]: 48, [d.oA.MD]: 100, [d.oA.LG]: 100 },
    et = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    en = et[0],
    er = et[et.length - 1];
function el(e) {
    let {
            playerState: t,
            animSpring: n,
            visible: a,
            seekForwardEnabled: S,
            hideCaptionBtn: C = !1,
            hideTranscriptBtn: P = !1,
            hideSkipButtons: w = !1,
            hideFullScreenBtn: A = !1,
            hidePlaybackSpeedBtn: R = !1,
            size: N,
            downloadUrl: L,
            downloadContentType: D,
            extraButtons: I,
            autoFocus: B = !1,
            keyDownHandlerRef: F,
            volume: U,
            muted: _,
            transcriptEnabled: $,
            captionEnabled: H,
            handlePlaybackBtnClick: Y,
            handleTranscriptBtnClick: et,
            handleCaptionBtnClick: en,
            handleFullScreenBtnClick: er,
            handleSeekBackBtnClick: el,
            handleSeekForwardBtnClick: ei,
            autoHideVolumeSlider: eo = !1,
            floatingVolumeSlider: es = !1,
            compactTimeDisplay: ec = !1,
            handleControlBarPendingInteraction: ed,
            onVolumeChange: em,
            onMutedChange: ef,
            onVolumeExpandedChange: ep,
        } = e,
        eh = (0, s.bG)([k.Ay], () => k.Ay.useReducedMotion),
        ev = (0, s.bG)([k.Ay], () => k.Ay.keyboardModeEnabled),
        { isFullscreen: ex, videoRef: eE, activeLayer: eg } = (0, j.X$)(),
        eb = es && !ex,
        [ey, eS] = l.useState(_ ? 0 : U),
        [eC, eP] = l.useState(!1),
        [ew, eA] = l.useState(!1),
        [eR, eN] = l.useState(!1),
        eL = l.useRef(null),
        eT = l.useId(),
        ek = l.useRef(void 0),
        [eM, ej] = l.useState(eb);
    eb !== eM && (ej(eb), eP(!1), eN(!1), eA(!1));
    let eD = eb && (eC || eR || ew),
        [{ volumeAnimSpring: eI }, eB] = (0, m.z)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        eF = l.useRef(null),
        [eU, e_] = l.useState(1),
        [eG, eK] = l.useState(U),
        [e$, eO] = l.useState(_);
    (U !== eG || _ !== e$) && (eK(U), eO(_), eS(_ ? 0 : U));
    let eQ = l.useCallback(
            (e) => {
                (e_(e), null != eE.current && (eE.current.playbackRate = e));
            },
            [eE],
        ),
        eH = l.useCallback(() => {
            if (null == L) return;
            let e = D?.split("/");
            (M.default.track(q.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(L, "_blank"));
        }, [L, D]),
        eY = l.useCallback(
            (e) => {
                null != eE.current && (e !== eE.current.volume && (eE.current.volume = e), e !== ey && eS(e));
            },
            [eE, ey],
        );
    function eV(e) {
        (eY(e), em(e), ew && (eA(!1), eb || ed(!1)), _ && e > 0 ? ef(!1) : _ || 0 !== e || ef(!0));
    }
    let eX = l.useCallback(() => {
        if (null != eE.current)
            if (0 === ey) {
                let e = 0 === U ? 0.3 : U;
                (eY(e), ef(!1), em(e));
            } else (em(ey), eY(0), ef(!0));
    }, [eE, ey, eY, U, ef, em]);
    function ez() {
        (eP(!0), ep(!0));
    }
    function eW() {
        (eP(!1), ep(!1));
    }
    function eZ() {
        (window.clearTimeout(ek.current), eP(!0));
    }
    function eq() {
        (window.clearTimeout(ek.current), (ek.current = window.setTimeout(() => eP(!1), 150)));
    }
    function eJ(e) {
        if ("ArrowUp" !== e.key && "ArrowDown" !== e.key) return;
        (e.preventDefault(), e.stopPropagation());
        let t = Math.round(100 * ey),
            n = Math.min(1, Math.max(0, ("ArrowUp" === e.key ? Math.floor(t / 10) + 1 : Math.ceil(t / 10) - 1) / 10));
        n !== ey && eV(n);
    }
    l.useEffect(() => () => window.clearTimeout(ek.current), []);
    let e0 = (0, T.A)(ep);
    l.useEffect(() => {
        if (eD)
            return (
                ed(!0),
                e0(!0),
                () => {
                    (ed(!1), e0(!1));
                }
            );
    }, [eD, ed, e0]);
    let e1 = l.useCallback(
        (e) => {
            if (!(e.metaKey || ((0, o.vq)(e.target) && (0, o.Cw)(e.target))))
                switch (e.key) {
                    case d.TJ.PLAYBACK:
                        (e.stopPropagation(), Y());
                        break;
                    case d.TJ.SPACE:
                        (e.stopPropagation(), ev || (e.preventDefault(), Y()));
                        break;
                    case d.TJ.SEEK_BACK:
                    case d.TJ.SEEK_BACK_ALT:
                        (e.stopPropagation(), el());
                        break;
                    case d.TJ.SEEK_FORWARD:
                    case d.TJ.SEEK_FORWARD_ALT:
                        (e.stopPropagation(), ei());
                        break;
                    case d.TJ.CAPTION:
                        (e.stopPropagation(), C || en());
                        break;
                    case d.TJ.FULLSCREEN:
                        (e.stopPropagation(), A || er());
                        break;
                    case d.TJ.MUTE:
                        (e.stopPropagation(), eX());
                }
        },
        [en, er, Y, el, ei, eX, C, A, ev],
    );
    (l.useEffect(() => {
        B && null != eF.current && eF.current.focus();
    }, [B]),
        l.useEffect(
            () => (
                null != F && (F.current = e1),
                () => {
                    null != F && (F.current = null);
                }
            ),
            [e1, F],
        ),
        l.useEffect(
            () => (
                eB({ volumeAnimSpring: !eo || ew || eC ? 1 : 0, immediate: eh }),
                () => {
                    eI.stop();
                }
            ),
            [eo, ew, eC, eB, eh, eI],
        ));
    let e2 = 0 === ey ? f._ : ey < 0.5 ? p.S : h.H,
        e6 = G.intl.string(0 === ey ? G.t.YqAjXy : G.t.w4m945),
        { icon: e4, label: e8 } = O[t],
        e9 = (0, r.jsx)(X, {
            iconComponent: e2,
            animationTime: n,
            visible: a,
            onClick: eX,
            ariaLabel: e6,
            tooltipLabel: e6,
            hideTooltip: eD,
            shortcut: d.TJ.MUTE,
            buttonSize: Q[N],
            clickableProps: eb
                ? {
                      "aria-expanded": eD,
                      "aria-controls": eD ? eT : void 0,
                      "aria-keyshortcuts": `${d.TJ.MUTE} ArrowUp ArrowDown`,
                  }
                : void 0,
            "data-testid": "discord-web-video-player-volume-btn",
        }),
        e7 = (0, r.jsx)(v.G, {
            mini: !0,
            value: ey,
            keyboardStep: 0.1,
            minValue: 0,
            maxValue: 1,
            onValueChange: eV,
            asValueChanges: function (e) {
                (eY(e), !ew && (eA(!0), eb || ed(!0)));
            },
            fillStyles: eb ? void 0 : { backgroundColor: c.A.colors.WHITE.css },
            orientation: "horizontal",
            "aria-label": G.intl.string(J.default.XiLvuG),
            getAriaValueText: (e) => G.intl.formatToPlainString(J.default["5L6uDs"], { percent: Math.round(100 * e) }),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: K.X3,
                children: [
                    (0, r.jsx)(X, {
                        iconComponent: e4,
                        animationTime: n,
                        visible: a,
                        ariaLabel: e8,
                        tooltipLabel: e8,
                        shortcut: d.TJ.PLAYBACK,
                        onClick: Y,
                        ref: eF,
                        buttonSize: Q[N],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !w &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(X, {
                                    iconComponent: W.q,
                                    animationTime: n,
                                    visible: a,
                                    onClick: el,
                                    ariaLabel: G.intl.string(J.default["dRVF+Z"]),
                                    tooltipLabel: G.intl.string(J.default["dRVF+Z"]),
                                    shortcut: d.TJ.SEEK_BACK,
                                    buttonSize: Q[N],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(X, {
                                    iconComponent: Z.i,
                                    animationTime: n,
                                    visible: a,
                                    onClick: ei,
                                    disabled: !S,
                                    ariaLabel: S ? G.intl.string(J.default.yV2FLL) : G.intl.string(J.default.YWbiPw),
                                    tooltipLabel: S ? G.intl.string(J.default.yV2FLL) : G.intl.string(J.default.YWbiPw),
                                    tooltipDelayMs: 1500 * !!S,
                                    shortcut: d.TJ.SEEK_FORWARD,
                                    buttonSize: Q[N],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(u.animated.div, {
                className: i()(K.X3, K.L1),
                style: {
                    opacity: (0, u.to)([n.to({ range: [0, 1], output: [0, 1] })], (e) => `${a ? e : Math.pow(e, 8)}`),
                },
                children: [
                    eb
                        ? (0, r.jsx)(x.Y, {
                              targetElementRef: eL,
                              shouldShow: eD,
                              scrollBehavior: "close",
                              onRequestClose: () => {
                                  (window.clearTimeout(ek.current), eP(!1), eN(!1), eA(!1));
                              },
                              layerContext: eg,
                              position: "top",
                              align: "center",
                              renderPopout: () =>
                                  (0, r.jsx)("div", {
                                      id: eT,
                                      className: i()(K.p8, K.Gl),
                                      onMouseEnter: eZ,
                                      onMouseLeave: eq,
                                      "data-testid": "discord-web-video-player-volume-popout",
                                      children: (0, r.jsx)("div", {
                                          "data-testid": "discord-web-video-player-volume-slider",
                                          children: e7,
                                      }),
                                  }),
                              children: () =>
                                  (0, r.jsx)("div", {
                                      ref: eL,
                                      onMouseEnter: eZ,
                                      onMouseLeave: eq,
                                      onFocus: () => eN(k.Ay.keyboardModeEnabled),
                                      onBlur: () => eN(!1),
                                      onKeyDown: eJ,
                                      className: K.RD,
                                      "data-testid": "discord-web-video-player-volume-control",
                                      children: e9,
                                  }),
                          })
                        : (0, r.jsxs)("div", {
                              onMouseEnter: ez,
                              onMouseLeave: eW,
                              onFocus: ez,
                              onBlur: eW,
                              className: K.RD,
                              "data-testid": "discord-web-video-player-volume-control",
                              children: [
                                  e9,
                                  (0, r.jsx)(u.animated.div, {
                                      className: K.MQ,
                                      "data-testid": "discord-web-video-player-volume-slider",
                                      style: {
                                          opacity: (0, u.to)(
                                              [eI.to({ range: [0, 1], output: [0, 1] })],
                                              (e) => `${a ? e : Math.pow(e, 8)}`,
                                          ),
                                          width: (0, u.to)(
                                              [eI.to({ range: [0, 1], output: [0, ee[N]] })],
                                              (e) => `${e}px`,
                                          ),
                                      },
                                      children: e7,
                                  }),
                              ],
                          }),
                    (0, r.jsx)(V, { compact: ec }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(K.X3, K.ST),
                children: [
                    (0, r.jsx)(ea, {
                        canCollapse: null != I && I.length > 0,
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
                                        iconComponent: b.u,
                                        label: G.intl.string(J.default["6EjGUv"]),
                                        onClick: i,
                                        active: r && a !== d.Q6.ENDED,
                                        disabled: a === d.Q6.ENDED,
                                        "data-testid": "discord-web-video-player-transcript-btn",
                                    }),
                                n ||
                                    m.push({
                                        id: "caption",
                                        iconComponent: z.I,
                                        label: G.intl.string(J.default["0DbPcL"]),
                                        onClick: u,
                                        active: l,
                                        shortcut: d.TJ.CAPTION,
                                        "data-testid": "discord-web-video-player-captions-btn",
                                    }),
                                null != o &&
                                    m.push({
                                        id: "download",
                                        iconComponent: y.DownloadIcon,
                                        label: G.intl.string(G.t["1WjMbC"]),
                                        onClick: s,
                                        "data-testid": "discord-web-video-player-download-btn",
                                    }),
                                null != c && m.push(...c),
                                m
                            );
                        })({
                            hideTranscriptBtn: P,
                            hideCaptionBtn: C,
                            transcriptEnabled: $,
                            captionEnabled: H,
                            playerState: t,
                            handleTranscriptBtnClick: et,
                            handleCaptionBtnClick: en,
                            downloadUrl: L,
                            handleDownloadButtonClick: eH,
                            extraButtons: I,
                        }),
                        animSpring: n,
                        visible: a,
                        size: N,
                    }),
                    !(!0 === R || ("inline" === R && !ex)) &&
                        (0, r.jsx)(eu, {
                            playbackRate: eU,
                            onPlaybackRateChange: eQ,
                            animSpring: n,
                            visible: a,
                            size: N,
                            handleControlBarPendingInteraction: ed,
                        }),
                    !A &&
                        (0, r.jsx)(X, {
                            iconComponent: ex ? E.z : g.T,
                            animationTime: n,
                            visible: a,
                            onClick: er,
                            ariaLabel: G.intl.string(J.default.z9Cnzv),
                            tooltipLabel: G.intl.string(J.default.z9Cnzv),
                            shortcut: d.TJ.FULLSCREEN,
                            buttonSize: Q[N],
                            "data-testid": "discord-web-video-player-fullscreen-btn",
                        }),
                ],
            }),
        ],
    });
}
function ea(e) {
    let { buttons: t, canCollapse: n, animSpring: l, visible: a, size: i } = e;
    return 0 === t.length
        ? null
        : !n || t.length <= 1
          ? (0, r.jsx)(r.Fragment, {
                children: t.map((e) =>
                    (0, r.jsx)(
                        X,
                        {
                            iconComponent: e.iconComponent,
                            animationTime: l,
                            visible: a,
                            onClick: e.onClick,
                            active: e.active,
                            clickableProps: null != e.active ? { "aria-pressed": e.active } : void 0,
                            disabled: e.disabled,
                            ariaLabel: e.label,
                            tooltipLabel: e.label,
                            tooltipDelayMs: e.tooltipDelayMs,
                            shortcut: e.shortcut,
                            buttonSize: Q[i],
                            "data-testid": e["data-testid"],
                        },
                        e.id,
                    ),
                ),
            })
          : (0, r.jsx)(ei, { buttons: t, animSpring: l, visible: a, size: i });
}
function ei(e) {
    let { buttons: t, animSpring: n, visible: a, size: i } = e,
        u = l.useRef(null),
        o = G.intl.string(G.t.PdRCRg),
        { activeLayer: s } = (0, j.X$)();
    return (0, r.jsx)(x.Y, {
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
            (0, r.jsx)(X, {
                ref: u,
                iconComponent: P.MoreHorizontalIcon,
                animationTime: n,
                visible: a,
                ariaLabel: o,
                tooltipLabel: o,
                buttonSize: Q[i],
                clickableProps: e,
                "data-testid": "discord-web-video-player-overflow-menu-button",
            }),
    });
}
function eu(e) {
    let {
            playbackRate: t,
            onPlaybackRateChange: n,
            animSpring: a,
            visible: i,
            size: u,
            handleControlBarPendingInteraction: o,
        } = e,
        s = l.useRef(null),
        c = G.intl.string(J.default.ZwPhbB),
        { activeLayer: d } = (0, j.X$)();
    return (0, r.jsx)(x.Y, {
        targetElementRef: s,
        layerContext: d,
        position: "top",
        align: "right",
        onRequestOpen: () => o(!0),
        scrollBehavior: "close",
        onRequestClose: () => {
            (o(!1), s.current?.focus({ preventScroll: !0 }));
        },
        renderPopout: () => (0, r.jsx)(eo, { playbackRate: t, onPlaybackRateChange: n, label: c }),
        children: (e) => {
            let n = 1 !== t;
            return (0, r.jsx)(X, {
                ref: s,
                iconComponent: w.$,
                animationTime: a,
                visible: i,
                active: n,
                overlay: n
                    ? (0, r.jsx)(A.E, {
                          "aria-hidden": !0,
                          variant: "text-xxs/bold",
                          color: "none",
                          className: K.IG,
                          tabularNumbers: !0,
                          children: `${t}x`,
                      })
                    : void 0,
                ariaLabel: c,
                tooltipLabel: c,
                buttonSize: Q[u],
                clickableProps: { ...e, "aria-haspopup": "dialog" },
                "data-testid": "discord-web-video-player-playback-speed-btn",
            });
        },
    });
}
function eo(e) {
    let { playbackRate: t, onPlaybackRateChange: n, label: a } = e,
        u = l.useRef(null);
    return (
        (0, R.tj)(u),
        (0, r.jsxs)("div", {
            ref: u,
            className: i()(K.p8, K.qp),
            role: "dialog",
            "aria-label": a,
            "data-testid": "discord-web-video-player-playback-speed-popout",
            children: [
                (0, r.jsx)(N.D, {
                    variant: "heading-md/semibold",
                    color: "text-default",
                    className: K.xl,
                    children: a,
                }),
                (0, r.jsx)(L.A, {
                    value: t,
                    minValue: en,
                    maxValue: er,
                    marks: et,
                    snapToMarks: !0,
                    defaultMark: 1,
                    onChange: n,
                    formatValue: (e) => `${e}x`,
                    "aria-label": a,
                }),
            ],
        })
    );
}
