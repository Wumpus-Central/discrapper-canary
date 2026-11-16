(n.d(t, { A: () => er }), n(321073));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(120692),
    o = n(621466),
    s = n(855986),
    c = n(876230),
    d = n(717421),
    m = n(205513),
    f = n(265872),
    p = n(86147),
    h = n(729475),
    v = n(261958),
    x = n(32880),
    g = n(165862),
    E = n(477782),
    b = n(365199),
    y = n(268791),
    S = n(834730),
    C = n(315710),
    w = n(534514),
    P = n(893007),
    N = n(765548),
    A = n(775602),
    R = n(129230),
    L = n(683574),
    k = n(530567),
    T = n(646514),
    M = n(61491),
    j = n(113494),
    D = n(782134),
    I = n(417270),
    B = n(939249),
    F = n(866665),
    $ = n(792996),
    U = n(862649);
let _ = "-:--",
    K = {
        [c.Q6.PLAYING]: { icon: j.PauseIcon, label: $.t.ZcgDJX },
        [c.Q6.PAUSED]: { icon: D.PlayIcon, label: $.t.RscU7I },
        [c.Q6.ENDED]: { icon: I.RetryIcon, label: $.t.hsvh0i },
    },
    O = { [c.oA.SM]: c.n4.SM, [c.oA.MD]: c.n4.MD, [c.oA.LG]: c.n4.LG };
function Q(e) {
    let { compact: t = !1 } = e,
        [n, a] = l.useState(null),
        [u, o] = l.useState(null),
        [s, d] = l.useState(!1),
        { videoRef: m, controlBarConfig: f, isControlBarExpanded: p } = (0, L.X$)(),
        h = (f ?? k.X4[c.oA.MD]).timeTextVariant;
    l.useEffect(() => {
        let e = m.current;
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
    }, [m]);
    let v = Number.isFinite(n) && Number.isFinite(u) ? Math.max(0, u - n) : null,
        x = s ? (null != v ? `-${(0, M.rB)(v)}` : _) : Number.isFinite(n) ? (0, M.rB)(n) : _,
        g = Number.isFinite(u) ? (0, M.rB)(u) : _;
    return (0, r.jsxs)(B.D, {
        className: i()(U.d$, U.jk),
        focusProps: { enabled: p, ringClassName: U.KE },
        "data-testid": "discord-web-video-player-duration",
        onClick: () => d((e) => !e),
        children: [
            (0, r.jsx)(S.E, { variant: h, className: U.Ue, tabularNumbers: !0, children: x }),
            !t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(S.E, { variant: h, className: U.zO, children: "/" }),
                        (0, r.jsx)(S.E, { variant: h, className: U.Ue, tabularNumbers: !0, children: g }),
                    ],
                }),
        ],
    });
}
function G(e) {
    let {
            iconComponent: t,
            visible: n,
            ariaLabel: l,
            active: a,
            disabled: u,
            overlay: o,
            tooltipLabel: s,
            tooltipDelayMs: d = 1500,
            hideTooltip: m = !1,
            shortcut: f,
            onClick: p,
            buttonSize: h = c.n4.MD,
            className: v,
            "data-testid": x,
            clickableProps: g,
            ref: E,
        } = e,
        { controlBarConfig: b } = (0, L.X$)(),
        y = b ?? k.X4[h],
        S = y.iconSize,
        C = "" !== (f ?? "").trim();
    return (0, r.jsx)(F.m, {
        text: n ? s : void 0,
        keyboardShortcut: C ? f : void 0,
        ariaHidden: !0,
        shouldShow: !m,
        delay: d,
        children: (0, r.jsx)(B.D, {
            onClick: !0 === u ? void 0 : p,
            className: i()(U.K5, { [U.Iy]: u }, v),
            "aria-label": l,
            "aria-keyshortcuts": C ? f : void 0,
            "aria-disabled": u,
            focusProps: { enabled: n, ringClassName: U.KE },
            "data-testid": x,
            "data-active": !0 === a,
            innerRef: E,
            ...g,
            children: (0, r.jsx)("div", {
                className: U.K5,
                style: { height: `${y.buttonHeightPx}px` },
                children:
                    null != o
                        ? (0, r.jsxs)("span", {
                              className: U.bT,
                              children: [
                                  (0, r.jsx)(t, {
                                      size: S,
                                      color: !0 !== u ? T.A.colors.WHITE : T.A.colors.TEXT_MUTED,
                                      className: i()(U.jk, { [U.x2]: a, [U.Wr]: !u }),
                                  }),
                                  o,
                              ],
                          })
                        : (0, r.jsx)(t, {
                              size: S,
                              color: !0 !== u ? T.A.colors.WHITE : T.A.colors.TEXT_MUTED,
                              className: i()(U.jk, { [U.x2]: a, [U.Wr]: !u }),
                          }),
            }),
        }),
    });
}
var H = n(636537),
    X = n(260612),
    V = n(953727);
function Y(e) {
    let { size: t = "md", width: n, height: l, color: a = T.A.colors.WHITE, ...i } = e,
        u = (0, X.J)(t);
    return (0, r.jsxs)("svg", {
        ...(0, V.A)(i),
        xmlns: "http://www.w3.org/2000/svg",
        width: u?.width ?? n,
        height: u?.height ?? l,
        viewBox: "0 0 24 24",
        fill: "none",
        color: "string" == typeof a ? a : a.css,
        children: [
            (0, r.jsx)("path", {
                fill: "currentColor",
                d: "M10 4.5a.75.75 0 0 1 1.25.56v13.88a.75.75 0 0 1-1.25.56L5.5 16H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2.5L10 4.5Z",
            }),
            (0, r.jsxs)("g", {
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeLinecap: "round",
                children: [
                    (0, r.jsxs)("g", {
                        className: U.I4,
                        children: [
                            (0, r.jsx)("path", { className: U.Ew, pathLength: "1", d: "M14 12Q14 10.2 12.5 9" }),
                            (0, r.jsx)("path", { className: U.Ew, pathLength: "1", d: "M14 12Q14 13.8 12.5 15" }),
                        ],
                    }),
                    (0, r.jsxs)("g", {
                        className: U.RL,
                        children: [
                            (0, r.jsx)("path", { className: U.Ew, pathLength: "1", d: "M17.5 12Q17.5 8.5 15 6.5" }),
                            (0, r.jsx)("path", { className: U.Ew, pathLength: "1", d: "M17.5 12Q17.5 15.5 15 17.5" }),
                        ],
                    }),
                    (0, r.jsxs)("g", {
                        className: U.zT,
                        children: [
                            (0, r.jsx)("path", { className: U.Ew, pathLength: "1", d: "M21 12Q21 7 17.5 4" }),
                            (0, r.jsx)("path", { className: U.Ew, pathLength: "1", d: "M21 12Q21 17 17.5 20" }),
                        ],
                    }),
                    (0, r.jsx)("path", { className: U.n0, d: "m15 9 6 6m-6 0 6-6" }),
                ],
            }),
        ],
    });
}
var z = n(91034),
    W = n(710434),
    Z = n(634156),
    q = n(652215),
    J = n(302034);
let ee = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    et = ee[0],
    en = ee[ee.length - 1];
function er(e) {
    let {
            playerState: t,
            animSpring: n,
            visible: a,
            seekForwardEnabled: g,
            hideCaptionBtn: E = !1,
            hideTranscriptBtn: b = !1,
            hideSkipButtons: y = !1,
            hideFullScreenBtn: S = !1,
            hidePlaybackSpeedBtn: C = !1,
            size: w,
            downloadUrl: P,
            downloadContentType: T,
            extraButtons: M,
            expandButton: j,
            autoFocus: D = !1,
            keyDownHandlerRef: I,
            volume: B,
            muted: F,
            transcriptEnabled: _,
            captionEnabled: X,
            handlePlaybackBtnClick: V,
            handleTranscriptBtnClick: ee,
            handleCaptionBtnClick: et,
            handleFullScreenBtnClick: en,
            handleSeekBackBtnClick: er,
            handleSeekForwardBtnClick: ea,
            autoHideVolumeSlider: eu = !1,
            floatingVolumeSlider: eo = !1,
            compactTimeDisplay: es = !1,
            handleControlBarPendingInteraction: ec,
            onVolumeChange: ed,
            onMutedChange: em,
            onVolumeExpandedChange: ef,
        } = e,
        ep = (0, s.bG)([A.Ay], () => A.Ay.useReducedMotion),
        eh = (0, s.bG)([A.Ay], () => A.Ay.keyboardModeEnabled),
        { isFullscreen: ev, videoRef: ex, activeLayer: eg, controlBarConfig: eE } = (0, L.X$)(),
        eb = eE ?? k.X4[w],
        ey = eo && !ev,
        [eS, eC] = l.useState(F ? 0 : B),
        [ew, eP] = l.useState(!1),
        [eN, eA] = l.useState(!1),
        [eR, eL] = l.useState(!1),
        ek = l.useRef(null),
        eT = l.useId(),
        eM = l.useRef(void 0),
        [ej, eD] = l.useState(ey);
    ey !== ej && (eD(ey), eP(!1), eL(!1), eA(!1));
    let eI = ey && (ew || eR || eN),
        [{ volumeAnimSpring: eB }, eF] = (0, d.z)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        e$ = l.useRef(null),
        [eU, e_] = l.useState(1),
        [eK, eO] = l.useState(B),
        [eQ, eG] = l.useState(F);
    (B !== eK || F !== eQ) && (eO(B), eG(F), eC(F ? 0 : B));
    let eH = l.useCallback(
            (e) => {
                (e_(e), null != ex.current && (ex.current.playbackRate = e));
            },
            [ex],
        ),
        eX = l.useCallback(() => {
            if (null == P) return;
            let e = T?.split("/");
            (R.default.track(q.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(P, "_blank"));
        }, [P, T]),
        eV = l.useCallback(
            (e) => {
                null != ex.current && (e !== ex.current.volume && (ex.current.volume = e), e !== eS && eC(e));
            },
            [ex, eS],
        );
    function eY(e) {
        (eV(e), ed(e), eN && (eA(!1), ey || ec(!1)), F && e > 0 ? em(!1) : F || 0 !== e || em(!0));
    }
    let ez = l.useCallback(() => {
        if (null != ex.current)
            if (0 === eS) {
                let e = 0 === B ? 0.3 : B;
                (eV(e), em(!1), ed(e));
            } else (ed(eS), eV(0), em(!0));
    }, [ex, eS, eV, B, em, ed]);
    function eW() {
        (eP(!0), ef(!0));
    }
    function eZ() {
        (eP(!1), ef(!1));
    }
    function eq() {
        (window.clearTimeout(eM.current), eP(!0));
    }
    function eJ() {
        (window.clearTimeout(eM.current), (eM.current = window.setTimeout(() => eP(!1), 150)));
    }
    function e0(e) {
        if ("ArrowUp" !== e.key && "ArrowDown" !== e.key) return;
        (e.preventDefault(), e.stopPropagation());
        let t = Math.round(100 * eS),
            n = Math.min(1, Math.max(0, ("ArrowUp" === e.key ? Math.floor(t / 10) + 1 : Math.ceil(t / 10) - 1) / 10));
        n !== eS && eY(n);
    }
    l.useEffect(() => () => window.clearTimeout(eM.current), []);
    let e1 = (0, N.A)(ef);
    l.useEffect(() => {
        if (eI)
            return (
                ec(!0),
                e1(!0),
                () => {
                    (ec(!1), e1(!1));
                }
            );
    }, [eI, ec, e1]);
    let e2 = l.useCallback(
        (e) => {
            if (!(e.metaKey || ((0, o.vq)(e.target) && (0, o.Cw)(e.target))))
                switch (e.key) {
                    case c.TJ.PLAYBACK:
                        (e.stopPropagation(), V());
                        break;
                    case c.TJ.SPACE:
                        (e.stopPropagation(), eh || (e.preventDefault(), V()));
                        break;
                    case c.TJ.SEEK_BACK:
                    case c.TJ.SEEK_BACK_ALT:
                        (e.stopPropagation(), er());
                        break;
                    case c.TJ.SEEK_FORWARD:
                    case c.TJ.SEEK_FORWARD_ALT:
                        (e.stopPropagation(), ea());
                        break;
                    case c.TJ.CAPTION:
                        (e.stopPropagation(), E || et());
                        break;
                    case c.TJ.FULLSCREEN:
                        (e.stopPropagation(), S || en());
                        break;
                    case c.TJ.MUTE:
                        (e.stopPropagation(), ez());
                }
        },
        [et, en, V, er, ea, ez, E, S, eh],
    );
    (l.useEffect(() => {
        D && null != e$.current && e$.current.focus();
    }, [D]),
        l.useEffect(
            () => (
                null != I && (I.current = e2),
                () => {
                    null != I && (I.current = null);
                }
            ),
            [e2, I],
        ),
        l.useEffect(
            () => (
                eF({ volumeAnimSpring: !eu || eN || ew ? 1 : 0, immediate: ep }),
                () => {
                    eB.stop();
                }
            ),
            [eu, eN, ew, eF, ep, eB],
        ));
    let e6 = $.intl.string(0 === eS ? $.t.YqAjXy : $.t.w4m945),
        { icon: e4, label: e8 } = K[t],
        e9 = $.intl.string(e8),
        e3 = (0, r.jsx)(G, {
            iconComponent: Y,
            visible: a,
            onClick: ez,
            ariaLabel: e6,
            tooltipLabel: e6,
            hideTooltip: eI,
            shortcut: c.TJ.MUTE,
            buttonSize: O[w],
            clickableProps: {
                style: {
                    "--custom-volume-wave-1": Math.min(1, Math.max(0, 3 * eS)),
                    "--custom-volume-wave-2": Math.min(1, Math.max(0, 3 * eS - 1)),
                    "--custom-volume-wave-3": Math.min(1, Math.max(0, 3 * eS - 2)),
                    "--custom-volume-muted": +(0 === eS),
                },
                ...(ey
                    ? {
                          "aria-expanded": eI,
                          "aria-controls": eI ? eT : void 0,
                          "aria-keyshortcuts": `${c.TJ.MUTE} ArrowUp ArrowDown`,
                      }
                    : void 0),
            },
            "data-testid": "discord-web-video-player-volume-btn",
        }),
        e7 = (0, r.jsx)(m.G, {
            mini: !0,
            className: U.nA,
            barClassName: U.i1,
            grabberClassName: U.VA,
            value: eS,
            keyboardStep: 0.1,
            minValue: 0,
            maxValue: 1,
            onValueChange: eY,
            asValueChanges: function (e) {
                (eV(e), !eN && (eA(!0), ey || ec(!0)));
            },
            fillStyles: { background: "var(--custom-dvp-slider-fill)" },
            orientation: "horizontal",
            "aria-label": $.intl.string(J.default.XiLvuG),
            getAriaValueText: (e) => $.intl.formatToPlainString(J.default["5L6uDs"], { percent: Math.round(100 * e) }),
        });
    return (0, r.jsxs)(u.animated.div, {
        className: U.uN,
        style: { opacity: (0, u.to)([n], (e) => `${e}`) },
        children: [
            (0, r.jsxs)("div", {
                className: U.X3,
                children: [
                    (0, r.jsx)(G, {
                        iconComponent: e4,
                        visible: a,
                        ariaLabel: e9,
                        tooltipLabel: e9,
                        shortcut: c.TJ.PLAYBACK,
                        onClick: V,
                        ref: e$,
                        buttonSize: O[w],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !y &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(G, {
                                    iconComponent: W.q,
                                    visible: a,
                                    onClick: er,
                                    ariaLabel: $.intl.string(J.default["dRVF+Z"]),
                                    tooltipLabel: $.intl.string(J.default["dRVF+Z"]),
                                    shortcut: c.TJ.SEEK_BACK,
                                    buttonSize: O[w],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(G, {
                                    iconComponent: Z.i,
                                    visible: a,
                                    onClick: ea,
                                    disabled: !g,
                                    ariaLabel: g ? $.intl.string(J.default.yV2FLL) : $.intl.string(J.default.YWbiPw),
                                    tooltipLabel: g ? $.intl.string(J.default.yV2FLL) : $.intl.string(J.default.YWbiPw),
                                    tooltipDelayMs: 1500 * !!g,
                                    shortcut: c.TJ.SEEK_FORWARD,
                                    buttonSize: O[w],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(U.X3, U.L1),
                children: [
                    ey
                        ? (0, r.jsx)(f.Y, {
                              targetElementRef: ek,
                              shouldShow: eI,
                              scrollBehavior: "close",
                              onRequestClose: () => {
                                  (window.clearTimeout(eM.current), eP(!1), eL(!1), eA(!1));
                              },
                              layerContext: eg,
                              position: "top",
                              align: "center",
                              renderPopout: () =>
                                  (0, r.jsx)("div", {
                                      id: eT,
                                      className: i()(H.i.blurple, U.p8, U.Gl),
                                      onMouseEnter: eq,
                                      onMouseLeave: eJ,
                                      "data-testid": "discord-web-video-player-volume-popout",
                                      children: (0, r.jsx)("div", {
                                          "data-testid": "discord-web-video-player-volume-slider",
                                          children: e7,
                                      }),
                                  }),
                              children: () =>
                                  (0, r.jsx)("div", {
                                      ref: ek,
                                      onMouseEnter: eq,
                                      onMouseLeave: eJ,
                                      onFocus: () => eL(A.Ay.keyboardModeEnabled),
                                      onBlur: () => eL(!1),
                                      onKeyDown: e0,
                                      className: U.RD,
                                      "data-testid": "discord-web-video-player-volume-control",
                                      children: e3,
                                  }),
                          })
                        : (0, r.jsxs)("div", {
                              onMouseEnter: eW,
                              onMouseLeave: eZ,
                              onFocus: eW,
                              onBlur: eZ,
                              className: i()(U.RD, U.u3),
                              "data-testid": "discord-web-video-player-volume-control",
                              children: [
                                  e3,
                                  (0, r.jsx)(u.animated.div, {
                                      className: U.MQ,
                                      "data-testid": "discord-web-video-player-volume-slider",
                                      style: {
                                          opacity: (0, u.to)([eB], (e) => `${e}`),
                                          width: (0, u.to)(
                                              [eB.to({ range: [0, 1], output: [0, eb.volumeSliderWidthPx] })],
                                              (e) => `${e}px`,
                                          ),
                                      },
                                      children: e7,
                                  }),
                              ],
                          }),
                    (0, r.jsx)(Q, { compact: es && !ev }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(U.X3, U.ST),
                children: [
                    (0, r.jsx)(el, {
                        canCollapse: null != M && M.length > 0,
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
                                    extraButtons: d,
                                } = e,
                                m = [];
                            return (
                                t ||
                                    m.push({
                                        id: "transcript",
                                        iconComponent: v.PaperIcon,
                                        label: $.intl.string(J.default["6EjGUv"]),
                                        onClick: i,
                                        active: r && a !== c.Q6.ENDED,
                                        disabled: a === c.Q6.ENDED,
                                        "data-testid": "discord-web-video-player-transcript-btn",
                                    }),
                                n ||
                                    m.push({
                                        id: "caption",
                                        iconComponent: z.I,
                                        label: $.intl.string(J.default["0DbPcL"]),
                                        onClick: u,
                                        active: l,
                                        shortcut: c.TJ.CAPTION,
                                        "data-testid": "discord-web-video-player-captions-btn",
                                    }),
                                null != o &&
                                    m.push({
                                        id: "download",
                                        iconComponent: x.DownloadIcon,
                                        label: $.intl.string($.t["1WjMbC"]),
                                        onClick: s,
                                        "data-testid": "discord-web-video-player-download-btn",
                                    }),
                                null != d && m.push(...d),
                                m
                            );
                        })({
                            hideTranscriptBtn: b,
                            hideCaptionBtn: E,
                            transcriptEnabled: _,
                            captionEnabled: X,
                            playerState: t,
                            handleTranscriptBtnClick: ee,
                            handleCaptionBtnClick: et,
                            downloadUrl: P,
                            handleDownloadButtonClick: eX,
                            extraButtons: M,
                        }),
                        visible: a,
                        size: w,
                    }),
                    !(!0 === C || ("inline" === C && !ev)) &&
                        (0, r.jsx)(ei, {
                            playbackRate: eU,
                            onPlaybackRateChange: eH,
                            visible: a,
                            size: w,
                            handleControlBarPendingInteraction: ec,
                        }),
                    null != j &&
                        !ev &&
                        (0, r.jsx)(G, {
                            iconComponent: j.iconComponent,
                            visible: a,
                            onClick: j.onClick,
                            disabled: j.disabled,
                            ariaLabel: j.label,
                            tooltipLabel: j.label,
                            tooltipDelayMs: j.tooltipDelayMs,
                            shortcut: j.shortcut,
                            buttonSize: O[w],
                            "data-testid": j["data-testid"],
                        }),
                    !S &&
                        (0, r.jsx)(G, {
                            iconComponent: ev ? p.FullscreenExitIcon : h.FullscreenEnterIcon,
                            visible: a,
                            onClick: en,
                            ariaLabel: $.intl.string(J.default.z9Cnzv),
                            tooltipLabel: $.intl.string(J.default.z9Cnzv),
                            shortcut: c.TJ.FULLSCREEN,
                            buttonSize: O[w],
                            "data-testid": "discord-web-video-player-fullscreen-btn",
                        }),
                ],
            }),
        ],
    });
}
function el(e) {
    let { buttons: t, canCollapse: n, visible: l, size: a } = e;
    return 0 === t.length
        ? null
        : (0, k.Kj)(t.length, n)
          ? (0, r.jsx)(ea, { buttons: t, visible: l, size: a })
          : (0, r.jsx)(r.Fragment, {
                children: t.map((e) =>
                    (0, r.jsx)(
                        G,
                        {
                            iconComponent: e.iconComponent,
                            visible: l,
                            onClick: e.onClick,
                            active: e.active,
                            clickableProps: null != e.active ? { "aria-pressed": e.active } : void 0,
                            disabled: e.disabled,
                            ariaLabel: e.label,
                            tooltipLabel: e.label,
                            tooltipDelayMs: e.tooltipDelayMs,
                            shortcut: e.shortcut,
                            buttonSize: O[a],
                            "data-testid": e["data-testid"],
                        },
                        e.id,
                    ),
                ),
            });
}
function ea(e) {
    let { buttons: t, visible: n, size: a } = e,
        i = l.useRef(null),
        u = $.intl.string($.t.PdRCRg),
        { activeLayer: o } = (0, L.X$)();
    return (0, r.jsx)(f.Y, {
        targetElementRef: i,
        position: "top",
        align: "right",
        layerContext: o,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(g.W, {
                navId: "video-player-overflow",
                "aria-label": u,
                onClose: n,
                onSelect: n,
                children: t.map((e) => {
                    let t = { type: "icon", icon: e.iconComponent };
                    return null != e.active
                        ? (0, r.jsx)(
                              E.sL,
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
                              E.Dr,
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
                ref: i,
                iconComponent: b.MoreHorizontalIcon,
                visible: n,
                ariaLabel: u,
                tooltipLabel: u,
                buttonSize: O[a],
                clickableProps: e,
                "data-testid": "discord-web-video-player-overflow-menu-button",
            }),
    });
}
function ei(e) {
    let { playbackRate: t, onPlaybackRateChange: n, visible: a, size: i, handleControlBarPendingInteraction: u } = e,
        o = l.useRef(null),
        s = $.intl.string(J.default.ZwPhbB),
        { activeLayer: c } = (0, L.X$)();
    return (0, r.jsx)(f.Y, {
        targetElementRef: o,
        layerContext: c,
        position: "top",
        align: "right",
        onRequestOpen: () => u(!0),
        scrollBehavior: "close",
        onRequestClose: () => {
            (u(!1), o.current?.focus({ preventScroll: !0 }));
        },
        renderPopout: () => (0, r.jsx)(eu, { playbackRate: t, onPlaybackRateChange: n, label: s }),
        children: (e) => {
            let n = 1 !== t;
            return (0, r.jsx)(G, {
                ref: o,
                iconComponent: y.SpeedometerIcon,
                visible: a,
                active: n,
                overlay: n
                    ? (0, r.jsx)(S.E, {
                          "aria-hidden": !0,
                          variant: "footnote/semibold",
                          color: "none",
                          className: U.IG,
                          tabularNumbers: !0,
                          children: `${t}x`,
                      })
                    : void 0,
                ariaLabel: s,
                tooltipLabel: s,
                buttonSize: O[i],
                className: n ? U.CX : void 0,
                clickableProps: { ...e, "aria-haspopup": "dialog" },
                "data-testid": "discord-web-video-player-playback-speed-btn",
            });
        },
    });
}
function eu(e) {
    let { playbackRate: t, onPlaybackRateChange: n, label: a } = e,
        u = l.useRef(null);
    return (
        (0, C.tj)(u),
        (0, r.jsxs)("div", {
            ref: u,
            className: i()(H.i.blurple, U.p8, U.qp),
            role: "dialog",
            "aria-label": a,
            "data-testid": "discord-web-video-player-playback-speed-popout",
            children: [
                (0, r.jsx)(w.D, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    className: U.xl,
                    children: a,
                }),
                (0, r.jsx)(P.A, {
                    value: t,
                    minValue: et,
                    maxValue: en,
                    marks: ee,
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
