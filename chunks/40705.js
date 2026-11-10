(n.d(t, { A: () => er }), n(321073));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    o = n(120692),
    u = n(621466),
    s = n(855986),
    c = n(876230),
    d = n(717421),
    m = n(205513),
    f = n(265872),
    p = n(86147),
    h = n(729475),
    x = n(261958),
    v = n(32880),
    g = n(165862),
    E = n(477782),
    b = n(365199),
    P = n(268791),
    S = n(834730),
    y = n(315710),
    C = n(534514),
    w = n(893007),
    N = n(765548),
    A = n(775602),
    R = n(129230),
    M = n(683574),
    L = n(530567),
    T = n(646514),
    k = n(61491),
    j = n(113494),
    D = n(782134),
    I = n(417270),
    B = n(939249),
    F = n(866665),
    G = n(792996),
    H = n(862649);
let $ = "-:--",
    U = {
        [c.Q6.PLAYING]: { icon: j.PauseIcon, label: G.intl.string(G.t.ZcgDJX) },
        [c.Q6.PAUSED]: { icon: D.PlayIcon, label: G.intl.string(G.t.RscU7I) },
        [c.Q6.ENDED]: { icon: I.RetryIcon, label: G.intl.string(G.t.hsvh0i) },
    },
    _ = { [c.oA.SM]: c.n4.SM, [c.oA.MD]: c.n4.MD, [c.oA.LG]: c.n4.LG };
function K(e) {
    let { compact: t = !1 } = e,
        [n, a] = l.useState(null),
        [o, u] = l.useState(null),
        [s, d] = l.useState(!1),
        { videoRef: m, controlBarConfig: f, isControlBarExpanded: p } = (0, M.X$)(),
        h = (f ?? L.X4[c.oA.MD]).timeTextVariant;
    l.useEffect(() => {
        let e = m.current;
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
    }, [m]);
    let x = Number.isFinite(n) && Number.isFinite(o) ? Math.max(0, o - n) : null,
        v = s ? (null != x ? `-${(0, k.rB)(x)}` : $) : Number.isFinite(n) ? (0, k.rB)(n) : $,
        g = Number.isFinite(o) ? (0, k.rB)(o) : $;
    return (0, r.jsxs)(B.D, {
        className: i()(H.d$, H.jk),
        focusProps: { enabled: p, ringClassName: H.KE },
        "data-testid": "discord-web-video-player-duration",
        onClick: () => d((e) => !e),
        children: [
            (0, r.jsx)(S.E, { variant: h, className: H.Ue, tabularNumbers: !0, children: v }),
            !t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(S.E, { variant: h, className: H.zO, children: "/" }),
                        (0, r.jsx)(S.E, { variant: h, className: H.Ue, tabularNumbers: !0, children: g }),
                    ],
                }),
        ],
    });
}
function O(e) {
    let {
            iconComponent: t,
            visible: n,
            ariaLabel: l,
            active: a,
            disabled: o,
            overlay: u,
            tooltipLabel: s,
            tooltipDelayMs: d = 1500,
            hideTooltip: m = !1,
            shortcut: f,
            onClick: p,
            buttonSize: h = c.n4.MD,
            className: x,
            "data-testid": v,
            clickableProps: g,
            ref: E,
        } = e,
        { controlBarConfig: b } = (0, M.X$)(),
        P = b ?? L.X4[h],
        S = P.iconSize,
        y = "" !== (f ?? "").trim();
    return (0, r.jsx)(F.m, {
        text: n ? s : void 0,
        keyboardShortcut: y ? f : void 0,
        ariaHidden: !0,
        shouldShow: !m,
        delay: d,
        children: (0, r.jsx)(B.D, {
            onClick: !0 === o ? void 0 : p,
            className: i()(H.K5, { [H.Iy]: o }, x),
            "aria-label": l,
            "aria-keyshortcuts": y ? f : void 0,
            "aria-disabled": o,
            focusProps: { enabled: n, ringClassName: H.KE },
            "data-testid": v,
            "data-active": !0 === a,
            innerRef: E,
            ...g,
            children: (0, r.jsx)("div", {
                className: H.K5,
                style: { height: `${P.buttonHeightPx}px` },
                children:
                    null != u
                        ? (0, r.jsxs)("span", {
                              className: H.bT,
                              children: [
                                  (0, r.jsx)(t, {
                                      size: S,
                                      color: !0 !== o ? T.A.colors.WHITE : T.A.colors.TEXT_MUTED,
                                      className: i()(H.jk, { [H.x2]: a, [H.Wr]: !o }),
                                  }),
                                  u,
                              ],
                          })
                        : (0, r.jsx)(t, {
                              size: S,
                              color: !0 !== o ? T.A.colors.WHITE : T.A.colors.TEXT_MUTED,
                              className: i()(H.jk, { [H.x2]: a, [H.Wr]: !o }),
                          }),
            }),
        }),
    });
}
var Q = n(636537),
    z = n(260612),
    V = n(953727);
function X(e) {
    let { size: t = "md", width: n, height: l, color: a = T.A.colors.WHITE, ...i } = e,
        o = (0, z.J)(t);
    return (0, r.jsxs)("svg", {
        ...(0, V.A)(i),
        xmlns: "http://www.w3.org/2000/svg",
        width: o?.width ?? n,
        height: o?.height ?? l,
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
                        className: H.I4,
                        children: [
                            (0, r.jsx)("path", { className: H.Ew, pathLength: "1", d: "M14 12Q14 10.2 12.5 9" }),
                            (0, r.jsx)("path", { className: H.Ew, pathLength: "1", d: "M14 12Q14 13.8 12.5 15" }),
                        ],
                    }),
                    (0, r.jsxs)("g", {
                        className: H.RL,
                        children: [
                            (0, r.jsx)("path", { className: H.Ew, pathLength: "1", d: "M17.5 12Q17.5 8.5 15 6.5" }),
                            (0, r.jsx)("path", { className: H.Ew, pathLength: "1", d: "M17.5 12Q17.5 15.5 15 17.5" }),
                        ],
                    }),
                    (0, r.jsxs)("g", {
                        className: H.zT,
                        children: [
                            (0, r.jsx)("path", { className: H.Ew, pathLength: "1", d: "M21 12Q21 7 17.5 4" }),
                            (0, r.jsx)("path", { className: H.Ew, pathLength: "1", d: "M21 12Q21 17 17.5 20" }),
                        ],
                    }),
                    (0, r.jsx)("path", { className: H.n0, d: "m15 9 6 6m-6 0 6-6" }),
                ],
            }),
        ],
    });
}
var Y = n(91034),
    W = n(710434),
    q = n(634156),
    Z = n(652215),
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
            hideSkipButtons: P = !1,
            hideFullScreenBtn: S = !1,
            hidePlaybackSpeedBtn: y = !1,
            size: C,
            downloadUrl: w,
            downloadContentType: T,
            extraButtons: k,
            autoFocus: j = !1,
            keyDownHandlerRef: D,
            volume: I,
            muted: B,
            transcriptEnabled: F,
            captionEnabled: $,
            handlePlaybackBtnClick: z,
            handleTranscriptBtnClick: V,
            handleCaptionBtnClick: ee,
            handleFullScreenBtnClick: et,
            handleSeekBackBtnClick: en,
            handleSeekForwardBtnClick: er,
            autoHideVolumeSlider: ea = !1,
            floatingVolumeSlider: eo = !1,
            compactTimeDisplay: eu = !1,
            handleControlBarPendingInteraction: es,
            onVolumeChange: ec,
            onMutedChange: ed,
            onVolumeExpandedChange: em,
        } = e,
        ef = (0, s.bG)([A.Ay], () => A.Ay.useReducedMotion),
        ep = (0, s.bG)([A.Ay], () => A.Ay.keyboardModeEnabled),
        { isFullscreen: eh, videoRef: ex, activeLayer: ev, controlBarConfig: eg } = (0, M.X$)(),
        eE = eg ?? L.X4[C],
        eb = eo && !eh,
        [eP, eS] = l.useState(B ? 0 : I),
        [ey, eC] = l.useState(!1),
        [ew, eN] = l.useState(!1),
        [eA, eR] = l.useState(!1),
        eM = l.useRef(null),
        eL = l.useId(),
        eT = l.useRef(void 0),
        [ek, ej] = l.useState(eb);
    eb !== ek && (ej(eb), eC(!1), eR(!1), eN(!1));
    let eD = eb && (ey || eA || ew),
        [{ volumeAnimSpring: eI }, eB] = (0, d.z)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        eF = l.useRef(null),
        [eG, eH] = l.useState(1),
        [e$, eU] = l.useState(I),
        [e_, eK] = l.useState(B);
    (I !== e$ || B !== e_) && (eU(I), eK(B), eS(B ? 0 : I));
    let eO = l.useCallback(
            (e) => {
                (eH(e), null != ex.current && (ex.current.playbackRate = e));
            },
            [ex],
        ),
        eQ = l.useCallback(() => {
            if (null == w) return;
            let e = T?.split("/");
            (R.default.track(Z.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(w, "_blank"));
        }, [w, T]),
        ez = l.useCallback(
            (e) => {
                null != ex.current && (e !== ex.current.volume && (ex.current.volume = e), e !== eP && eS(e));
            },
            [ex, eP],
        );
    function eV(e) {
        (ez(e), ec(e), ew && (eN(!1), eb || es(!1)), B && e > 0 ? ed(!1) : B || 0 !== e || ed(!0));
    }
    let eX = l.useCallback(() => {
        if (null != ex.current)
            if (0 === eP) {
                let e = 0 === I ? 0.3 : I;
                (ez(e), ed(!1), ec(e));
            } else (ec(eP), ez(0), ed(!0));
    }, [ex, eP, ez, I, ed, ec]);
    function eY() {
        (eC(!0), em(!0));
    }
    function eW() {
        (eC(!1), em(!1));
    }
    function eq() {
        (window.clearTimeout(eT.current), eC(!0));
    }
    function eZ() {
        (window.clearTimeout(eT.current), (eT.current = window.setTimeout(() => eC(!1), 150)));
    }
    function eJ(e) {
        if ("ArrowUp" !== e.key && "ArrowDown" !== e.key) return;
        (e.preventDefault(), e.stopPropagation());
        let t = Math.round(100 * eP),
            n = Math.min(1, Math.max(0, ("ArrowUp" === e.key ? Math.floor(t / 10) + 1 : Math.ceil(t / 10) - 1) / 10));
        n !== eP && eV(n);
    }
    l.useEffect(() => () => window.clearTimeout(eT.current), []);
    let e0 = (0, N.A)(em);
    l.useEffect(() => {
        if (eD)
            return (
                es(!0),
                e0(!0),
                () => {
                    (es(!1), e0(!1));
                }
            );
    }, [eD, es, e0]);
    let e1 = l.useCallback(
        (e) => {
            if (!(e.metaKey || ((0, u.vq)(e.target) && (0, u.Cw)(e.target))))
                switch (e.key) {
                    case c.TJ.PLAYBACK:
                        (e.stopPropagation(), z());
                        break;
                    case c.TJ.SPACE:
                        (e.stopPropagation(), ep || (e.preventDefault(), z()));
                        break;
                    case c.TJ.SEEK_BACK:
                    case c.TJ.SEEK_BACK_ALT:
                        (e.stopPropagation(), en());
                        break;
                    case c.TJ.SEEK_FORWARD:
                    case c.TJ.SEEK_FORWARD_ALT:
                        (e.stopPropagation(), er());
                        break;
                    case c.TJ.CAPTION:
                        (e.stopPropagation(), E || ee());
                        break;
                    case c.TJ.FULLSCREEN:
                        (e.stopPropagation(), S || et());
                        break;
                    case c.TJ.MUTE:
                        (e.stopPropagation(), eX());
                }
        },
        [ee, et, z, en, er, eX, E, S, ep],
    );
    (l.useEffect(() => {
        j && null != eF.current && eF.current.focus();
    }, [j]),
        l.useEffect(
            () => (
                null != D && (D.current = e1),
                () => {
                    null != D && (D.current = null);
                }
            ),
            [e1, D],
        ),
        l.useEffect(
            () => (
                eB({ volumeAnimSpring: !ea || ew || ey ? 1 : 0, immediate: ef }),
                () => {
                    eI.stop();
                }
            ),
            [ea, ew, ey, eB, ef, eI],
        ));
    let e2 = G.intl.string(0 === eP ? G.t.YqAjXy : G.t.w4m945),
        { icon: e6, label: e4 } = U[t],
        e8 = (0, r.jsx)(O, {
            iconComponent: X,
            visible: a,
            onClick: eX,
            ariaLabel: e2,
            tooltipLabel: e2,
            hideTooltip: eD,
            shortcut: c.TJ.MUTE,
            buttonSize: _[C],
            clickableProps: {
                style: {
                    "--custom-volume-wave-1": Math.min(1, Math.max(0, 3 * eP)),
                    "--custom-volume-wave-2": Math.min(1, Math.max(0, 3 * eP - 1)),
                    "--custom-volume-wave-3": Math.min(1, Math.max(0, 3 * eP - 2)),
                    "--custom-volume-muted": +(0 === eP),
                },
                ...(eb
                    ? {
                          "aria-expanded": eD,
                          "aria-controls": eD ? eL : void 0,
                          "aria-keyshortcuts": `${c.TJ.MUTE} ArrowUp ArrowDown`,
                      }
                    : void 0),
            },
            "data-testid": "discord-web-video-player-volume-btn",
        }),
        e9 = (0, r.jsx)(m.G, {
            mini: !0,
            className: H.nA,
            barClassName: H.i1,
            grabberClassName: H.VA,
            value: eP,
            keyboardStep: 0.1,
            minValue: 0,
            maxValue: 1,
            onValueChange: eV,
            asValueChanges: function (e) {
                (ez(e), !ew && (eN(!0), eb || es(!0)));
            },
            fillStyles: { background: "var(--custom-dvp-slider-fill)" },
            orientation: "horizontal",
            "aria-label": G.intl.string(J.default.XiLvuG),
            getAriaValueText: (e) => G.intl.formatToPlainString(J.default["5L6uDs"], { percent: Math.round(100 * e) }),
        });
    return (0, r.jsxs)(o.animated.div, {
        className: H.uN,
        style: { opacity: (0, o.to)([n], (e) => `${e}`) },
        children: [
            (0, r.jsxs)("div", {
                className: H.X3,
                children: [
                    (0, r.jsx)(O, {
                        iconComponent: e6,
                        visible: a,
                        ariaLabel: e4,
                        tooltipLabel: e4,
                        shortcut: c.TJ.PLAYBACK,
                        onClick: z,
                        ref: eF,
                        buttonSize: _[C],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !P &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(O, {
                                    iconComponent: W.q,
                                    visible: a,
                                    onClick: en,
                                    ariaLabel: G.intl.string(J.default["dRVF+Z"]),
                                    tooltipLabel: G.intl.string(J.default["dRVF+Z"]),
                                    shortcut: c.TJ.SEEK_BACK,
                                    buttonSize: _[C],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(O, {
                                    iconComponent: q.i,
                                    visible: a,
                                    onClick: er,
                                    disabled: !g,
                                    ariaLabel: g ? G.intl.string(J.default.yV2FLL) : G.intl.string(J.default.YWbiPw),
                                    tooltipLabel: g ? G.intl.string(J.default.yV2FLL) : G.intl.string(J.default.YWbiPw),
                                    tooltipDelayMs: 1500 * !!g,
                                    shortcut: c.TJ.SEEK_FORWARD,
                                    buttonSize: _[C],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(H.X3, H.L1),
                children: [
                    eb
                        ? (0, r.jsx)(f.Y, {
                              targetElementRef: eM,
                              shouldShow: eD,
                              scrollBehavior: "close",
                              onRequestClose: () => {
                                  (window.clearTimeout(eT.current), eC(!1), eR(!1), eN(!1));
                              },
                              layerContext: ev,
                              position: "top",
                              align: "center",
                              renderPopout: () =>
                                  (0, r.jsx)("div", {
                                      id: eL,
                                      className: i()(Q.i.blurple, H.p8, H.Gl),
                                      onMouseEnter: eq,
                                      onMouseLeave: eZ,
                                      "data-testid": "discord-web-video-player-volume-popout",
                                      children: (0, r.jsx)("div", {
                                          "data-testid": "discord-web-video-player-volume-slider",
                                          children: e9,
                                      }),
                                  }),
                              children: () =>
                                  (0, r.jsx)("div", {
                                      ref: eM,
                                      onMouseEnter: eq,
                                      onMouseLeave: eZ,
                                      onFocus: () => eR(A.Ay.keyboardModeEnabled),
                                      onBlur: () => eR(!1),
                                      onKeyDown: eJ,
                                      className: H.RD,
                                      "data-testid": "discord-web-video-player-volume-control",
                                      children: e8,
                                  }),
                          })
                        : (0, r.jsxs)("div", {
                              onMouseEnter: eY,
                              onMouseLeave: eW,
                              onFocus: eY,
                              onBlur: eW,
                              className: i()(H.RD, H.u3),
                              "data-testid": "discord-web-video-player-volume-control",
                              children: [
                                  e8,
                                  (0, r.jsx)(o.animated.div, {
                                      className: H.MQ,
                                      "data-testid": "discord-web-video-player-volume-slider",
                                      style: {
                                          opacity: (0, o.to)([eI], (e) => `${e}`),
                                          width: (0, o.to)(
                                              [eI.to({ range: [0, 1], output: [0, eE.volumeSliderWidthPx] })],
                                              (e) => `${e}px`,
                                          ),
                                      },
                                      children: e9,
                                  }),
                              ],
                          }),
                    (0, r.jsx)(K, { compact: eu && !eh }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(H.X3, H.ST),
                children: [
                    (0, r.jsx)(el, {
                        canCollapse: null != k && k.length > 0,
                        buttons: (function (e) {
                            let {
                                    hideTranscriptBtn: t = !1,
                                    hideCaptionBtn: n = !1,
                                    transcriptEnabled: r,
                                    captionEnabled: l,
                                    playerState: a,
                                    handleTranscriptBtnClick: i,
                                    handleCaptionBtnClick: o,
                                    downloadUrl: u,
                                    handleDownloadButtonClick: s,
                                    extraButtons: d,
                                } = e,
                                m = [];
                            return (
                                t ||
                                    m.push({
                                        id: "transcript",
                                        iconComponent: x.PaperIcon,
                                        label: G.intl.string(J.default["6EjGUv"]),
                                        onClick: i,
                                        active: r && a !== c.Q6.ENDED,
                                        disabled: a === c.Q6.ENDED,
                                        "data-testid": "discord-web-video-player-transcript-btn",
                                    }),
                                n ||
                                    m.push({
                                        id: "caption",
                                        iconComponent: Y.I,
                                        label: G.intl.string(J.default["0DbPcL"]),
                                        onClick: o,
                                        active: l,
                                        shortcut: c.TJ.CAPTION,
                                        "data-testid": "discord-web-video-player-captions-btn",
                                    }),
                                null != u &&
                                    m.push({
                                        id: "download",
                                        iconComponent: v.DownloadIcon,
                                        label: G.intl.string(G.t["1WjMbC"]),
                                        onClick: s,
                                        "data-testid": "discord-web-video-player-download-btn",
                                    }),
                                null != d && m.push(...d),
                                m
                            );
                        })({
                            hideTranscriptBtn: b,
                            hideCaptionBtn: E,
                            transcriptEnabled: F,
                            captionEnabled: $,
                            playerState: t,
                            handleTranscriptBtnClick: V,
                            handleCaptionBtnClick: ee,
                            downloadUrl: w,
                            handleDownloadButtonClick: eQ,
                            extraButtons: k,
                        }),
                        visible: a,
                        size: C,
                    }),
                    !(!0 === y || ("inline" === y && !eh)) &&
                        (0, r.jsx)(ei, {
                            playbackRate: eG,
                            onPlaybackRateChange: eO,
                            visible: a,
                            size: C,
                            handleControlBarPendingInteraction: es,
                        }),
                    !S &&
                        (0, r.jsx)(O, {
                            iconComponent: eh ? p.FullscreenExitIcon : h.FullscreenEnterIcon,
                            visible: a,
                            onClick: et,
                            ariaLabel: G.intl.string(J.default.z9Cnzv),
                            tooltipLabel: G.intl.string(J.default.z9Cnzv),
                            shortcut: c.TJ.FULLSCREEN,
                            buttonSize: _[C],
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
        : (0, L.Kj)(t.length, n)
          ? (0, r.jsx)(ea, { buttons: t, visible: l, size: a })
          : (0, r.jsx)(r.Fragment, {
                children: t.map((e) =>
                    (0, r.jsx)(
                        O,
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
                            buttonSize: _[a],
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
        o = G.intl.string(G.t.PdRCRg),
        { activeLayer: u } = (0, M.X$)();
    return (0, r.jsx)(f.Y, {
        targetElementRef: i,
        position: "top",
        align: "right",
        layerContext: u,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(g.W, {
                navId: "video-player-overflow",
                "aria-label": o,
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
            (0, r.jsx)(O, {
                ref: i,
                iconComponent: b.MoreHorizontalIcon,
                visible: n,
                ariaLabel: o,
                tooltipLabel: o,
                buttonSize: _[a],
                clickableProps: e,
                "data-testid": "discord-web-video-player-overflow-menu-button",
            }),
    });
}
function ei(e) {
    let { playbackRate: t, onPlaybackRateChange: n, visible: a, size: i, handleControlBarPendingInteraction: o } = e,
        u = l.useRef(null),
        s = G.intl.string(J.default.ZwPhbB),
        { activeLayer: c } = (0, M.X$)();
    return (0, r.jsx)(f.Y, {
        targetElementRef: u,
        layerContext: c,
        position: "top",
        align: "right",
        onRequestOpen: () => o(!0),
        scrollBehavior: "close",
        onRequestClose: () => {
            (o(!1), u.current?.focus({ preventScroll: !0 }));
        },
        renderPopout: () => (0, r.jsx)(eo, { playbackRate: t, onPlaybackRateChange: n, label: s }),
        children: (e) => {
            let n = 1 !== t;
            return (0, r.jsx)(O, {
                ref: u,
                iconComponent: P.SpeedometerIcon,
                visible: a,
                active: n,
                overlay: n
                    ? (0, r.jsx)(S.E, {
                          "aria-hidden": !0,
                          variant: "footnote/semibold",
                          color: "none",
                          className: H.IG,
                          tabularNumbers: !0,
                          children: `${t}x`,
                      })
                    : void 0,
                ariaLabel: s,
                tooltipLabel: s,
                buttonSize: _[i],
                className: n ? H.CX : void 0,
                clickableProps: { ...e, "aria-haspopup": "dialog" },
                "data-testid": "discord-web-video-player-playback-speed-btn",
            });
        },
    });
}
function eo(e) {
    let { playbackRate: t, onPlaybackRateChange: n, label: a } = e,
        o = l.useRef(null);
    return (
        (0, y.tj)(o),
        (0, r.jsxs)("div", {
            ref: o,
            className: i()(Q.i.blurple, H.p8, H.qp),
            role: "dialog",
            "aria-label": a,
            "data-testid": "discord-web-video-player-playback-speed-popout",
            children: [
                (0, r.jsx)(C.D, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    className: H.xl,
                    children: a,
                }),
                (0, r.jsx)(w.A, {
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
