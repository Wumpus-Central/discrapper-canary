(n.d(t, { A: () => er }), n(321073));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    o = n(736819),
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
    b = n(477782),
    E = n(365199),
    P = n(268791),
    y = n(834730),
    S = n(315710),
    C = n(534514),
    w = n(893007),
    N = n(765548),
    A = n(775602),
    R = n(129230),
    L = n(683574),
    T = n(530567),
    M = n(646514),
    k = n(61491),
    j = n(113494),
    D = n(782134),
    I = n(417270),
    B = n(939249),
    F = n(866665),
    G = n(792996),
    $ = n(862649);
let H = "-:--",
    U = {
        [c.Q6.PLAYING]: { icon: j.PauseIcon, label: G.intl.string(G.t.ZcgDJX) },
        [c.Q6.PAUSED]: { icon: D.PlayIcon, label: G.intl.string(G.t.RscU7I) },
        [c.Q6.ENDED]: { icon: I.RetryIcon, label: G.intl.string(G.t.hsvh0i) },
    },
    _ = { [c.oA.SM]: c.n4.SM, [c.oA.MD]: c.n4.MD, [c.oA.LG]: c.n4.LG };
function O(e) {
    let { compact: t = !1 } = e,
        [n, a] = l.useState(null),
        [o, u] = l.useState(null),
        [s, d] = l.useState(!1),
        { videoRef: m, controlBarConfig: f, isControlBarExpanded: p } = (0, L.X$)(),
        h = (f ?? T.X4[c.oA.MD]).timeTextVariant;
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
        v = s ? (null != x ? `-${(0, k.rB)(x)}` : H) : Number.isFinite(n) ? (0, k.rB)(n) : H,
        g = Number.isFinite(o) ? (0, k.rB)(o) : H;
    return (0, r.jsxs)(B.D, {
        className: i()($.d$, $.jk),
        focusProps: { enabled: p, ringClassName: $.KE },
        "data-testid": "discord-web-video-player-duration",
        onClick: () => d((e) => !e),
        children: [
            (0, r.jsx)(y.E, { variant: h, className: $.Ue, tabularNumbers: !0, children: v }),
            !t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(y.E, { variant: h, className: $.zO, children: "/" }),
                        (0, r.jsx)(y.E, { variant: h, className: $.Ue, tabularNumbers: !0, children: g }),
                    ],
                }),
        ],
    });
}
function K(e) {
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
            ref: b,
        } = e,
        { controlBarConfig: E } = (0, L.X$)(),
        P = E ?? T.X4[h],
        y = P.iconSize,
        S = "" !== (f ?? "").trim();
    return (0, r.jsx)(F.m, {
        text: n ? s : void 0,
        keyboardShortcut: S ? f : void 0,
        ariaHidden: !0,
        shouldShow: !m,
        delay: d,
        children: (0, r.jsx)(B.D, {
            onClick: !0 === o ? void 0 : p,
            className: i()($.K5, { [$.Iy]: o }, x),
            "aria-label": l,
            "aria-keyshortcuts": S ? f : void 0,
            "aria-disabled": o,
            focusProps: { enabled: n, ringClassName: $.KE },
            "data-testid": v,
            "data-active": !0 === a,
            innerRef: b,
            ...g,
            children: (0, r.jsx)("div", {
                className: $.K5,
                style: { height: `${P.buttonHeightPx}px` },
                children:
                    null != u
                        ? (0, r.jsxs)("span", {
                              className: $.bT,
                              children: [
                                  (0, r.jsx)(t, {
                                      size: y,
                                      color: !0 !== o ? M.A.colors.WHITE : M.A.colors.TEXT_MUTED,
                                      className: i()($.jk, { [$.x2]: a, [$.Wr]: !o }),
                                  }),
                                  u,
                              ],
                          })
                        : (0, r.jsx)(t, {
                              size: y,
                              color: !0 !== o ? M.A.colors.WHITE : M.A.colors.TEXT_MUTED,
                              className: i()($.jk, { [$.x2]: a, [$.Wr]: !o }),
                          }),
            }),
        }),
    });
}
var Q = n(636537),
    z = n(260612),
    V = n(953727);
function X(e) {
    let { size: t = "md", width: n, height: l, color: a = M.A.colors.WHITE, ...i } = e,
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
                        className: $.I4,
                        children: [
                            (0, r.jsx)("path", { className: $.Ew, pathLength: "1", d: "M14 12Q14 10.2 12.5 9" }),
                            (0, r.jsx)("path", { className: $.Ew, pathLength: "1", d: "M14 12Q14 13.8 12.5 15" }),
                        ],
                    }),
                    (0, r.jsxs)("g", {
                        className: $.RL,
                        children: [
                            (0, r.jsx)("path", { className: $.Ew, pathLength: "1", d: "M17.5 12Q17.5 8.5 15 6.5" }),
                            (0, r.jsx)("path", { className: $.Ew, pathLength: "1", d: "M17.5 12Q17.5 15.5 15 17.5" }),
                        ],
                    }),
                    (0, r.jsxs)("g", {
                        className: $.zT,
                        children: [
                            (0, r.jsx)("path", { className: $.Ew, pathLength: "1", d: "M21 12Q21 7 17.5 4" }),
                            (0, r.jsx)("path", { className: $.Ew, pathLength: "1", d: "M21 12Q21 17 17.5 20" }),
                        ],
                    }),
                    (0, r.jsx)("path", { className: $.n0, d: "m15 9 6 6m-6 0 6-6" }),
                ],
            }),
        ],
    });
}
var Y = n(91034),
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
            hideCaptionBtn: b = !1,
            hideTranscriptBtn: E = !1,
            hideSkipButtons: P = !1,
            hideFullScreenBtn: y = !1,
            hidePlaybackSpeedBtn: S = !1,
            size: C,
            downloadUrl: w,
            downloadContentType: M,
            extraButtons: k,
            autoFocus: j = !1,
            keyDownHandlerRef: D,
            volume: I,
            muted: B,
            transcriptEnabled: F,
            captionEnabled: H,
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
        { isFullscreen: eh, videoRef: ex, activeLayer: ev, controlBarConfig: eg } = (0, L.X$)(),
        eb = eg ?? T.X4[C],
        eE = eo && !eh,
        [eP, ey] = l.useState(B ? 0 : I),
        [eS, eC] = l.useState(!1),
        [ew, eN] = l.useState(!1),
        [eA, eR] = l.useState(!1),
        eL = l.useRef(null),
        eT = l.useId(),
        eM = l.useRef(void 0),
        [ek, ej] = l.useState(eE);
    eE !== ek && (ej(eE), eC(!1), eR(!1), eN(!1));
    let eD = eE && (eS || eA || ew),
        [{ volumeAnimSpring: eI }, eB] = (0, d.z)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        eF = l.useRef(null),
        [eG, e$] = l.useState(1),
        [eH, eU] = l.useState(I),
        [e_, eO] = l.useState(B);
    (I !== eH || B !== e_) && (eU(I), eO(B), ey(B ? 0 : I));
    let eK = l.useCallback(
            (e) => {
                (e$(e), null != ex.current && (ex.current.playbackRate = e));
            },
            [ex],
        ),
        eQ = l.useCallback(() => {
            if (null == w) return;
            let e = M?.split("/");
            (R.default.track(q.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(w, "_blank"));
        }, [w, M]),
        ez = l.useCallback(
            (e) => {
                null != ex.current && (e !== ex.current.volume && (ex.current.volume = e), e !== eP && ey(e));
            },
            [ex, eP],
        );
    function eV(e) {
        (ez(e), ec(e), ew && (eN(!1), eE || es(!1)), B && e > 0 ? ed(!1) : B || 0 !== e || ed(!0));
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
    function eZ() {
        (window.clearTimeout(eM.current), eC(!0));
    }
    function eq() {
        (window.clearTimeout(eM.current), (eM.current = window.setTimeout(() => eC(!1), 150)));
    }
    function eJ(e) {
        if ("ArrowUp" !== e.key && "ArrowDown" !== e.key) return;
        (e.preventDefault(), e.stopPropagation());
        let t = Math.round(100 * eP),
            n = Math.min(1, Math.max(0, ("ArrowUp" === e.key ? Math.floor(t / 10) + 1 : Math.ceil(t / 10) - 1) / 10));
        n !== eP && eV(n);
    }
    l.useEffect(() => () => window.clearTimeout(eM.current), []);
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
                        (e.stopPropagation(), b || ee());
                        break;
                    case c.TJ.FULLSCREEN:
                        (e.stopPropagation(), y || et());
                        break;
                    case c.TJ.MUTE:
                        (e.stopPropagation(), eX());
                }
        },
        [ee, et, z, en, er, eX, b, y, ep],
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
                eB({ volumeAnimSpring: !ea || ew || eS ? 1 : 0, immediate: ef }),
                () => {
                    eI.stop();
                }
            ),
            [ea, ew, eS, eB, ef, eI],
        ));
    let e2 = G.intl.string(0 === eP ? G.t.YqAjXy : G.t.w4m945),
        { icon: e6, label: e4 } = U[t],
        e8 = (0, r.jsx)(K, {
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
                ...(eE
                    ? {
                          "aria-expanded": eD,
                          "aria-controls": eD ? eT : void 0,
                          "aria-keyshortcuts": `${c.TJ.MUTE} ArrowUp ArrowDown`,
                      }
                    : void 0),
            },
            "data-testid": "discord-web-video-player-volume-btn",
        }),
        e9 = (0, r.jsx)(m.G, {
            mini: !0,
            className: $.nA,
            barClassName: $.i1,
            grabberClassName: $.VA,
            value: eP,
            keyboardStep: 0.1,
            minValue: 0,
            maxValue: 1,
            onValueChange: eV,
            asValueChanges: function (e) {
                (ez(e), !ew && (eN(!0), eE || es(!0)));
            },
            fillStyles: { background: "var(--custom-dvp-slider-fill)" },
            orientation: "horizontal",
            "aria-label": G.intl.string(J.default.XiLvuG),
            getAriaValueText: (e) => G.intl.formatToPlainString(J.default["5L6uDs"], { percent: Math.round(100 * e) }),
        });
    return (0, r.jsxs)(o.animated.div, {
        className: $.uN,
        style: { opacity: (0, o.to)([n], (e) => `${e}`) },
        children: [
            (0, r.jsxs)("div", {
                className: $.X3,
                children: [
                    (0, r.jsx)(K, {
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
                                (0, r.jsx)(K, {
                                    iconComponent: W.q,
                                    visible: a,
                                    onClick: en,
                                    ariaLabel: G.intl.string(J.default["dRVF+Z"]),
                                    tooltipLabel: G.intl.string(J.default["dRVF+Z"]),
                                    shortcut: c.TJ.SEEK_BACK,
                                    buttonSize: _[C],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(K, {
                                    iconComponent: Z.i,
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
                className: i()($.X3, $.L1),
                children: [
                    eE
                        ? (0, r.jsx)(f.Y, {
                              targetElementRef: eL,
                              shouldShow: eD,
                              scrollBehavior: "close",
                              onRequestClose: () => {
                                  (window.clearTimeout(eM.current), eC(!1), eR(!1), eN(!1));
                              },
                              layerContext: ev,
                              position: "top",
                              align: "center",
                              renderPopout: () =>
                                  (0, r.jsx)("div", {
                                      id: eT,
                                      className: i()(Q.i.blurple, $.p8, $.Gl),
                                      onMouseEnter: eZ,
                                      onMouseLeave: eq,
                                      "data-testid": "discord-web-video-player-volume-popout",
                                      children: (0, r.jsx)("div", {
                                          "data-testid": "discord-web-video-player-volume-slider",
                                          children: e9,
                                      }),
                                  }),
                              children: () =>
                                  (0, r.jsx)("div", {
                                      ref: eL,
                                      onMouseEnter: eZ,
                                      onMouseLeave: eq,
                                      onFocus: () => eR(A.Ay.keyboardModeEnabled),
                                      onBlur: () => eR(!1),
                                      onKeyDown: eJ,
                                      className: $.RD,
                                      "data-testid": "discord-web-video-player-volume-control",
                                      children: e8,
                                  }),
                          })
                        : (0, r.jsxs)("div", {
                              onMouseEnter: eY,
                              onMouseLeave: eW,
                              onFocus: eY,
                              onBlur: eW,
                              className: i()($.RD, $.u3),
                              "data-testid": "discord-web-video-player-volume-control",
                              children: [
                                  e8,
                                  (0, r.jsx)(o.animated.div, {
                                      className: $.MQ,
                                      "data-testid": "discord-web-video-player-volume-slider",
                                      style: {
                                          opacity: (0, o.to)([eI], (e) => `${e}`),
                                          width: (0, o.to)(
                                              [eI.to({ range: [0, 1], output: [0, eb.volumeSliderWidthPx] })],
                                              (e) => `${e}px`,
                                          ),
                                      },
                                      children: e9,
                                  }),
                              ],
                          }),
                    (0, r.jsx)(O, { compact: eu }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()($.X3, $.ST),
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
                                        iconComponent: x.u,
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
                            hideTranscriptBtn: E,
                            hideCaptionBtn: b,
                            transcriptEnabled: F,
                            captionEnabled: H,
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
                    !(!0 === S || ("inline" === S && !eh)) &&
                        (0, r.jsx)(ei, {
                            playbackRate: eG,
                            onPlaybackRateChange: eK,
                            visible: a,
                            size: C,
                            handleControlBarPendingInteraction: es,
                        }),
                    !y &&
                        (0, r.jsx)(K, {
                            iconComponent: eh ? p.z : h.T,
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
        : !n || t.length <= 1
          ? (0, r.jsx)(r.Fragment, {
                children: t.map((e) =>
                    (0, r.jsx)(
                        K,
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
            })
          : (0, r.jsx)(ea, { buttons: t, visible: l, size: a });
}
function ea(e) {
    let { buttons: t, visible: n, size: a } = e,
        i = l.useRef(null),
        o = G.intl.string(G.t.PdRCRg),
        { activeLayer: u } = (0, L.X$)();
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
                              b.sL,
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
                              b.Dr,
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
            (0, r.jsx)(K, {
                ref: i,
                iconComponent: E.MoreHorizontalIcon,
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
        { activeLayer: c } = (0, L.X$)();
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
            return (0, r.jsx)(K, {
                ref: u,
                iconComponent: P.$,
                visible: a,
                active: n,
                overlay: n
                    ? (0, r.jsx)(y.E, {
                          "aria-hidden": !0,
                          variant: "footnote/semibold",
                          color: "none",
                          className: $.IG,
                          tabularNumbers: !0,
                          children: `${t}x`,
                      })
                    : void 0,
                ariaLabel: s,
                tooltipLabel: s,
                buttonSize: _[i],
                className: n ? $.CX : void 0,
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
        (0, S.tj)(o),
        (0, r.jsxs)("div", {
            ref: o,
            className: i()(Q.i.blurple, $.p8, $.qp),
            role: "dialog",
            "aria-label": a,
            "data-testid": "discord-web-video-player-playback-speed-popout",
            children: [
                (0, r.jsx)(C.D, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    className: $.xl,
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
