(n.d(t, { A: () => en }), n(321073));
var r = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
    o = n(941143),
    u = n(621466),
    s = n(17928),
    c = n(661531),
    d = n(876230),
    m = n(717421),
    f = n(358618),
    p = n(793920),
    h = n(983851),
    x = n(205513),
    v = n(265872),
    g = n(86147),
    E = n(729475),
    b = n(261958),
    y = n(32880),
    P = n(980707),
    S = n(477782),
    C = n(365199),
    A = n(268791),
    w = n(834730),
    R = n(315710),
    N = n(297264),
    T = n(893007),
    L = n(765548),
    M = n(775602),
    k = n(174459),
    j = n(683574),
    D = n(530567),
    I = n(61491),
    B = n(113494),
    F = n(782134),
    $ = n(417270),
    G = n(939249),
    H = n(866665),
    _ = n(105292),
    U = n(862649);
let O = "-:--",
    K = {
        [d.Q6.PLAYING]: { icon: B.PauseIcon, label: _.intl.string(_.t.ZcgDJX) },
        [d.Q6.PAUSED]: { icon: F.PlayIcon, label: _.intl.string(_.t.RscU7I) },
        [d.Q6.ENDED]: { icon: $.RetryIcon, label: _.intl.string(_.t.hsvh0i) },
    },
    Q = { [d.oA.SM]: d.n4.SM, [d.oA.MD]: d.n4.MD, [d.oA.LG]: d.n4.LG };
function z(e) {
    let { compact: t = !1 } = e,
        [n, i] = l.useState(null),
        [o, u] = l.useState(null),
        [s, c] = l.useState(!1),
        { videoRef: m, controlBarConfig: f } = (0, j.X$)(),
        p = (f ?? D.X4[d.oA.MD]).timeTextVariant;
    l.useEffect(() => {
        let e = m.current;
        function t() {
            null != e && (i(e.currentTime), u(e.duration));
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
    }, [m]);
    let h = Number.isFinite(n) && Number.isFinite(o) ? Math.max(0, o - n) : null,
        x = s ? (null != h ? `-${(0, I.rB)(h)}` : O) : Number.isFinite(n) ? (0, I.rB)(n) : O,
        v = Number.isFinite(o) ? (0, I.rB)(o) : O;
    return (0, r.jsxs)(G.D, {
        className: a()(U.d$, U.jk),
        "data-testid": "discord-web-video-player-duration",
        onClick: () => c((e) => !e),
        children: [
            (0, r.jsx)(w.E, { variant: p, className: U.Ue, tabularNumbers: !0, children: x }),
            !t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(w.E, { variant: p, className: U.zO, children: "/" }),
                        (0, r.jsx)(w.E, { variant: p, className: U.Ue, tabularNumbers: !0, children: v }),
                    ],
                }),
        ],
    });
}
function V(e) {
    let {
            iconComponent: t,
            animationTime: n,
            visible: l,
            ariaLabel: i,
            active: u,
            disabled: s,
            overlay: m,
            tooltipLabel: f,
            tooltipDelayMs: p = 1500,
            hideTooltip: h = !1,
            shortcut: x,
            onClick: v,
            buttonSize: g = d.n4.MD,
            "data-testid": E,
            clickableProps: b,
            ref: y,
        } = e,
        { controlBarConfig: P } = (0, j.X$)(),
        S = P ?? D.X4[g],
        C = S.iconSize,
        A = "" !== (x ?? "").trim();
    return (0, r.jsx)(H.m, {
        text: l ? f : void 0,
        keyboardShortcut: A ? x : void 0,
        ariaHidden: !0,
        shouldShow: !h,
        delay: p,
        children: (0, r.jsx)(G.D, {
            onClick: !0 === s ? void 0 : v,
            className: a()(U.K5, { [U.Iy]: s }),
            "aria-label": i,
            "aria-keyshortcuts": A ? x : void 0,
            "aria-disabled": s,
            "data-testid": E,
            innerRef: y,
            ...b,
            children: (0, r.jsx)(o.animated.div, {
                className: U.K5,
                style: {
                    opacity: (0, o.to)([n.to({ range: [0, 1], output: [0, 1] })], (e) => `${l ? e : Math.pow(e, 8)}`),
                    height: `${S.buttonHeightPx}px`,
                },
                children:
                    null != m
                        ? (0, r.jsxs)("span", {
                              className: U.bT,
                              children: [
                                  (0, r.jsx)(t, {
                                      size: C,
                                      color: !0 !== s ? c.A.colors.WHITE : c.A.colors.TEXT_MUTED,
                                      className: a()(U.jk, { [U.x2]: u, [U.Wr]: !s }),
                                  }),
                                  m,
                              ],
                          })
                        : (0, r.jsx)(t, {
                              size: C,
                              color: !0 !== s ? c.A.colors.WHITE : c.A.colors.TEXT_MUTED,
                              className: a()(U.jk, { [U.x2]: u, [U.Wr]: !s }),
                          }),
            }),
        }),
    });
}
var X = n(91034),
    Y = n(710434),
    W = n(634156),
    q = n(652215),
    Z = n(267286);
let J = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    ee = J[0],
    et = J[J.length - 1];
function en(e) {
    let {
            playerState: t,
            animSpring: n,
            visible: i,
            seekForwardEnabled: P,
            hideCaptionBtn: S = !1,
            hideTranscriptBtn: C = !1,
            hideSkipButtons: A = !1,
            hideFullScreenBtn: w = !1,
            hidePlaybackSpeedBtn: R = !1,
            size: N,
            downloadUrl: T,
            downloadContentType: I,
            extraButtons: B,
            autoFocus: F = !1,
            keyDownHandlerRef: $,
            volume: G,
            muted: H,
            transcriptEnabled: O,
            captionEnabled: J,
            handlePlaybackBtnClick: ee,
            handleTranscriptBtnClick: et,
            handleCaptionBtnClick: en,
            handleFullScreenBtnClick: el,
            handleSeekBackBtnClick: ea,
            handleSeekForwardBtnClick: eo,
            autoHideVolumeSlider: eu = !1,
            floatingVolumeSlider: es = !1,
            compactTimeDisplay: ec = !1,
            handleControlBarPendingInteraction: ed,
            onVolumeChange: em,
            onMutedChange: ef,
            onVolumeExpandedChange: ep,
        } = e,
        eh = (0, s.bG)([M.Ay], () => M.Ay.useReducedMotion),
        ex = (0, s.bG)([M.Ay], () => M.Ay.keyboardModeEnabled),
        { isFullscreen: ev, videoRef: eg, activeLayer: eE, controlBarConfig: eb } = (0, j.X$)(),
        ey = eb ?? D.X4[N],
        eP = es && !ev,
        [eS, eC] = l.useState(H ? 0 : G),
        [eA, ew] = l.useState(!1),
        [eR, eN] = l.useState(!1),
        [eT, eL] = l.useState(!1),
        eM = l.useRef(null),
        ek = l.useId(),
        ej = l.useRef(void 0),
        [eD, eI] = l.useState(eP);
    eP !== eD && (eI(eP), ew(!1), eL(!1), eN(!1));
    let eB = eP && (eA || eT || eR),
        [{ volumeAnimSpring: eF }, e$] = (0, m.z)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        eG = l.useRef(null),
        [eH, e_] = l.useState(1),
        [eU, eO] = l.useState(G),
        [eK, eQ] = l.useState(H);
    (G !== eU || H !== eK) && (eO(G), eQ(H), eC(H ? 0 : G));
    let ez = l.useCallback(
            (e) => {
                (e_(e), null != eg.current && (eg.current.playbackRate = e));
            },
            [eg],
        ),
        eV = l.useCallback(() => {
            if (null == T) return;
            let e = I?.split("/");
            (k.default.track(q.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(T, "_blank"));
        }, [T, I]),
        eX = l.useCallback(
            (e) => {
                null != eg.current && (e !== eg.current.volume && (eg.current.volume = e), e !== eS && eC(e));
            },
            [eg, eS],
        );
    function eY(e) {
        (eX(e), em(e), eR && (eN(!1), eP || ed(!1)), H && e > 0 ? ef(!1) : H || 0 !== e || ef(!0));
    }
    let eW = l.useCallback(() => {
        if (null != eg.current)
            if (0 === eS) {
                let e = 0 === G ? 0.3 : G;
                (eX(e), ef(!1), em(e));
            } else (em(eS), eX(0), ef(!0));
    }, [eg, eS, eX, G, ef, em]);
    function eq() {
        (ew(!0), ep(!0));
    }
    function eZ() {
        (ew(!1), ep(!1));
    }
    function eJ() {
        (window.clearTimeout(ej.current), ew(!0));
    }
    function e0() {
        (window.clearTimeout(ej.current), (ej.current = window.setTimeout(() => ew(!1), 150)));
    }
    function e1(e) {
        if ("ArrowUp" !== e.key && "ArrowDown" !== e.key) return;
        (e.preventDefault(), e.stopPropagation());
        let t = Math.round(100 * eS),
            n = Math.min(1, Math.max(0, ("ArrowUp" === e.key ? Math.floor(t / 10) + 1 : Math.ceil(t / 10) - 1) / 10));
        n !== eS && eY(n);
    }
    l.useEffect(() => () => window.clearTimeout(ej.current), []);
    let e2 = (0, L.A)(ep);
    l.useEffect(() => {
        if (eB)
            return (
                ed(!0),
                e2(!0),
                () => {
                    (ed(!1), e2(!1));
                }
            );
    }, [eB, ed, e2]);
    let e6 = l.useCallback(
        (e) => {
            if (!(e.metaKey || ((0, u.vq)(e.target) && (0, u.Cw)(e.target))))
                switch (e.key) {
                    case d.TJ.PLAYBACK:
                        (e.stopPropagation(), ee());
                        break;
                    case d.TJ.SPACE:
                        (e.stopPropagation(), ex || (e.preventDefault(), ee()));
                        break;
                    case d.TJ.SEEK_BACK:
                    case d.TJ.SEEK_BACK_ALT:
                        (e.stopPropagation(), ea());
                        break;
                    case d.TJ.SEEK_FORWARD:
                    case d.TJ.SEEK_FORWARD_ALT:
                        (e.stopPropagation(), eo());
                        break;
                    case d.TJ.CAPTION:
                        (e.stopPropagation(), S || en());
                        break;
                    case d.TJ.FULLSCREEN:
                        (e.stopPropagation(), w || el());
                        break;
                    case d.TJ.MUTE:
                        (e.stopPropagation(), eW());
                }
        },
        [en, el, ee, ea, eo, eW, S, w, ex],
    );
    (l.useEffect(() => {
        F && null != eG.current && eG.current.focus();
    }, [F]),
        l.useEffect(
            () => (
                null != $ && ($.current = e6),
                () => {
                    null != $ && ($.current = null);
                }
            ),
            [e6, $],
        ),
        l.useEffect(
            () => (
                e$({ volumeAnimSpring: !eu || eR || eA ? 1 : 0, immediate: eh }),
                () => {
                    eF.stop();
                }
            ),
            [eu, eR, eA, e$, eh, eF],
        ));
    let e4 = 0 === eS ? f._ : eS < 0.5 ? p.S : h.H,
        e8 = _.intl.string(0 === eS ? _.t.YqAjXy : _.t.w4m945),
        { icon: e9, label: e7 } = K[t],
        e3 = (0, r.jsx)(V, {
            iconComponent: e4,
            animationTime: n,
            visible: i,
            onClick: eW,
            ariaLabel: e8,
            tooltipLabel: e8,
            hideTooltip: eB,
            shortcut: d.TJ.MUTE,
            buttonSize: Q[N],
            clickableProps: eP
                ? {
                      "aria-expanded": eB,
                      "aria-controls": eB ? ek : void 0,
                      "aria-keyshortcuts": `${d.TJ.MUTE} ArrowUp ArrowDown`,
                  }
                : void 0,
            "data-testid": "discord-web-video-player-volume-btn",
        }),
        e5 = (0, r.jsx)(x.G, {
            mini: !0,
            value: eS,
            keyboardStep: 0.1,
            minValue: 0,
            maxValue: 1,
            onValueChange: eY,
            asValueChanges: function (e) {
                (eX(e), !eR && (eN(!0), eP || ed(!0)));
            },
            fillStyles: eP ? void 0 : { backgroundColor: c.A.colors.WHITE.css },
            orientation: "horizontal",
            "aria-label": _.intl.string(Z.default.XiLvuG),
            getAriaValueText: (e) => _.intl.formatToPlainString(Z.default["5L6uDs"], { percent: Math.round(100 * e) }),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: U.X3,
                children: [
                    (0, r.jsx)(V, {
                        iconComponent: e9,
                        animationTime: n,
                        visible: i,
                        ariaLabel: e7,
                        tooltipLabel: e7,
                        shortcut: d.TJ.PLAYBACK,
                        onClick: ee,
                        ref: eG,
                        buttonSize: Q[N],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !A &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(V, {
                                    iconComponent: Y.q,
                                    animationTime: n,
                                    visible: i,
                                    onClick: ea,
                                    ariaLabel: _.intl.string(Z.default["dRVF+Z"]),
                                    tooltipLabel: _.intl.string(Z.default["dRVF+Z"]),
                                    shortcut: d.TJ.SEEK_BACK,
                                    buttonSize: Q[N],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(V, {
                                    iconComponent: W.i,
                                    animationTime: n,
                                    visible: i,
                                    onClick: eo,
                                    disabled: !P,
                                    ariaLabel: P ? _.intl.string(Z.default.yV2FLL) : _.intl.string(Z.default.YWbiPw),
                                    tooltipLabel: P ? _.intl.string(Z.default.yV2FLL) : _.intl.string(Z.default.YWbiPw),
                                    tooltipDelayMs: 1500 * !!P,
                                    shortcut: d.TJ.SEEK_FORWARD,
                                    buttonSize: Q[N],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(o.animated.div, {
                className: a()(U.X3, U.L1),
                style: {
                    opacity: (0, o.to)([n.to({ range: [0, 1], output: [0, 1] })], (e) => `${i ? e : Math.pow(e, 8)}`),
                },
                children: [
                    eP
                        ? (0, r.jsx)(v.Y, {
                              targetElementRef: eM,
                              shouldShow: eB,
                              scrollBehavior: "close",
                              onRequestClose: () => {
                                  (window.clearTimeout(ej.current), ew(!1), eL(!1), eN(!1));
                              },
                              layerContext: eE,
                              position: "top",
                              align: "center",
                              renderPopout: () =>
                                  (0, r.jsx)("div", {
                                      id: ek,
                                      className: a()(U.p8, U.Gl),
                                      onMouseEnter: eJ,
                                      onMouseLeave: e0,
                                      "data-testid": "discord-web-video-player-volume-popout",
                                      children: (0, r.jsx)("div", {
                                          "data-testid": "discord-web-video-player-volume-slider",
                                          children: e5,
                                      }),
                                  }),
                              children: () =>
                                  (0, r.jsx)("div", {
                                      ref: eM,
                                      onMouseEnter: eJ,
                                      onMouseLeave: e0,
                                      onFocus: () => eL(M.Ay.keyboardModeEnabled),
                                      onBlur: () => eL(!1),
                                      onKeyDown: e1,
                                      className: U.RD,
                                      "data-testid": "discord-web-video-player-volume-control",
                                      children: e3,
                                  }),
                          })
                        : (0, r.jsxs)("div", {
                              onMouseEnter: eq,
                              onMouseLeave: eZ,
                              onFocus: eq,
                              onBlur: eZ,
                              className: a()(U.RD, U.u3),
                              "data-testid": "discord-web-video-player-volume-control",
                              children: [
                                  e3,
                                  (0, r.jsx)(o.animated.div, {
                                      className: U.MQ,
                                      "data-testid": "discord-web-video-player-volume-slider",
                                      style: {
                                          opacity: (0, o.to)(
                                              [eF.to({ range: [0, 1], output: [0, 1] })],
                                              (e) => `${i ? e : Math.pow(e, 8)}`,
                                          ),
                                          width: (0, o.to)(
                                              [eF.to({ range: [0, 1], output: [0, ey.volumeSliderWidthPx] })],
                                              (e) => `${e}px`,
                                          ),
                                      },
                                      children: e5,
                                  }),
                              ],
                          }),
                    (0, r.jsx)(z, { compact: ec }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: a()(U.X3, U.ST),
                children: [
                    (0, r.jsx)(er, {
                        canCollapse: null != B && B.length > 0,
                        buttons: (function (e) {
                            let {
                                    hideTranscriptBtn: t = !1,
                                    hideCaptionBtn: n = !1,
                                    transcriptEnabled: r,
                                    captionEnabled: l,
                                    playerState: i,
                                    handleTranscriptBtnClick: a,
                                    handleCaptionBtnClick: o,
                                    downloadUrl: u,
                                    handleDownloadButtonClick: s,
                                    extraButtons: c,
                                } = e,
                                m = [];
                            return (
                                t ||
                                    m.push({
                                        id: "transcript",
                                        iconComponent: b.u,
                                        label: _.intl.string(Z.default["6EjGUv"]),
                                        onClick: a,
                                        active: r && i !== d.Q6.ENDED,
                                        disabled: i === d.Q6.ENDED,
                                        "data-testid": "discord-web-video-player-transcript-btn",
                                    }),
                                n ||
                                    m.push({
                                        id: "caption",
                                        iconComponent: X.I,
                                        label: _.intl.string(Z.default["0DbPcL"]),
                                        onClick: o,
                                        active: l,
                                        shortcut: d.TJ.CAPTION,
                                        "data-testid": "discord-web-video-player-captions-btn",
                                    }),
                                null != u &&
                                    m.push({
                                        id: "download",
                                        iconComponent: y.DownloadIcon,
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
                            transcriptEnabled: O,
                            captionEnabled: J,
                            playerState: t,
                            handleTranscriptBtnClick: et,
                            handleCaptionBtnClick: en,
                            downloadUrl: T,
                            handleDownloadButtonClick: eV,
                            extraButtons: B,
                        }),
                        animSpring: n,
                        visible: i,
                        size: N,
                    }),
                    !(!0 === R || ("inline" === R && !ev)) &&
                        (0, r.jsx)(ei, {
                            playbackRate: eH,
                            onPlaybackRateChange: ez,
                            animSpring: n,
                            visible: i,
                            size: N,
                            handleControlBarPendingInteraction: ed,
                        }),
                    !w &&
                        (0, r.jsx)(V, {
                            iconComponent: ev ? g.z : E.T,
                            animationTime: n,
                            visible: i,
                            onClick: el,
                            ariaLabel: _.intl.string(Z.default.z9Cnzv),
                            tooltipLabel: _.intl.string(Z.default.z9Cnzv),
                            shortcut: d.TJ.FULLSCREEN,
                            buttonSize: Q[N],
                            "data-testid": "discord-web-video-player-fullscreen-btn",
                        }),
                ],
            }),
        ],
    });
}
function er(e) {
    let { buttons: t, canCollapse: n, animSpring: l, visible: i, size: a } = e;
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
                            visible: i,
                            onClick: e.onClick,
                            active: e.active,
                            clickableProps: null != e.active ? { "aria-pressed": e.active } : void 0,
                            disabled: e.disabled,
                            ariaLabel: e.label,
                            tooltipLabel: e.label,
                            tooltipDelayMs: e.tooltipDelayMs,
                            shortcut: e.shortcut,
                            buttonSize: Q[a],
                            "data-testid": e["data-testid"],
                        },
                        e.id,
                    ),
                ),
            })
          : (0, r.jsx)(el, { buttons: t, animSpring: l, visible: i, size: a });
}
function el(e) {
    let { buttons: t, animSpring: n, visible: i, size: a } = e,
        o = l.useRef(null),
        u = _.intl.string(_.t.PdRCRg),
        { activeLayer: s } = (0, j.X$)();
    return (0, r.jsx)(v.Y, {
        targetElementRef: o,
        position: "top",
        align: "right",
        layerContext: s,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(P.W, {
                navId: "video-player-overflow",
                "aria-label": u,
                onClose: n,
                onSelect: n,
                children: t.map((e) => {
                    let t = { type: "icon", icon: e.iconComponent };
                    return null != e.active
                        ? (0, r.jsx)(
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
                        : (0, r.jsx)(
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
            (0, r.jsx)(V, {
                ref: o,
                iconComponent: C.MoreHorizontalIcon,
                animationTime: n,
                visible: i,
                ariaLabel: u,
                tooltipLabel: u,
                buttonSize: Q[a],
                clickableProps: e,
                "data-testid": "discord-web-video-player-overflow-menu-button",
            }),
    });
}
function ei(e) {
    let {
            playbackRate: t,
            onPlaybackRateChange: n,
            animSpring: i,
            visible: a,
            size: o,
            handleControlBarPendingInteraction: u,
        } = e,
        s = l.useRef(null),
        c = _.intl.string(Z.default.ZwPhbB),
        { activeLayer: d } = (0, j.X$)();
    return (0, r.jsx)(v.Y, {
        targetElementRef: s,
        layerContext: d,
        position: "top",
        align: "right",
        onRequestOpen: () => u(!0),
        scrollBehavior: "close",
        onRequestClose: () => {
            (u(!1), s.current?.focus({ preventScroll: !0 }));
        },
        renderPopout: () => (0, r.jsx)(ea, { playbackRate: t, onPlaybackRateChange: n, label: c }),
        children: (e) => {
            let n = 1 !== t;
            return (0, r.jsx)(V, {
                ref: s,
                iconComponent: A.$,
                animationTime: i,
                visible: a,
                active: n,
                overlay: n
                    ? (0, r.jsx)(w.E, {
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
                buttonSize: Q[o],
                clickableProps: { ...e, "aria-haspopup": "dialog" },
                "data-testid": "discord-web-video-player-playback-speed-btn",
            });
        },
    });
}
function ea(e) {
    let { playbackRate: t, onPlaybackRateChange: n, label: i } = e,
        o = l.useRef(null);
    return (
        (0, R.tj)(o),
        (0, r.jsxs)("div", {
            ref: o,
            className: a()(U.p8, U.qp),
            role: "dialog",
            "aria-label": i,
            "data-testid": "discord-web-video-player-playback-speed-popout",
            children: [
                (0, r.jsx)(N.D, {
                    variant: "heading-md/semibold",
                    color: "text-default",
                    className: U.xl,
                    children: i,
                }),
                (0, r.jsx)(T.A, {
                    value: t,
                    minValue: ee,
                    maxValue: et,
                    marks: J,
                    snapToMarks: !0,
                    defaultMark: 1,
                    onChange: n,
                    formatValue: (e) => `${e}x`,
                    "aria-label": i,
                }),
            ],
        })
    );
}
