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
    N = n(893007),
    P = n(765548),
    A = n(775602),
    R = n(129230),
    L = n(683574),
    T = n(530567),
    k = n(646514),
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
        [c.Q6.PLAYING]: { icon: j.PauseIcon, label: $.intl.string($.t.ZcgDJX) },
        [c.Q6.PAUSED]: { icon: D.PlayIcon, label: $.intl.string($.t.RscU7I) },
        [c.Q6.ENDED]: { icon: I.RetryIcon, label: $.intl.string($.t.hsvh0i) },
    },
    O = { [c.oA.SM]: c.n4.SM, [c.oA.MD]: c.n4.MD, [c.oA.LG]: c.n4.LG };
function Q(e) {
    let { compact: t = !1 } = e,
        [n, a] = l.useState(null),
        [u, o] = l.useState(null),
        [s, d] = l.useState(!1),
        { videoRef: m, controlBarConfig: f, isControlBarExpanded: p } = (0, L.X$)(),
        h = (f ?? T.X4[c.oA.MD]).timeTextVariant;
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
        y = b ?? T.X4[h],
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
                                      color: !0 !== u ? k.A.colors.WHITE : k.A.colors.TEXT_MUTED,
                                      className: i()(U.jk, { [U.x2]: a, [U.Wr]: !u }),
                                  }),
                                  o,
                              ],
                          })
                        : (0, r.jsx)(t, {
                              size: S,
                              color: !0 !== u ? k.A.colors.WHITE : k.A.colors.TEXT_MUTED,
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
    let { size: t = "md", width: n, height: l, color: a = k.A.colors.WHITE, ...i } = e,
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
            downloadUrl: N,
            downloadContentType: k,
            extraButtons: M,
            autoFocus: j = !1,
            keyDownHandlerRef: D,
            volume: I,
            muted: B,
            transcriptEnabled: F,
            captionEnabled: _,
            handlePlaybackBtnClick: X,
            handleTranscriptBtnClick: V,
            handleCaptionBtnClick: ee,
            handleFullScreenBtnClick: et,
            handleSeekBackBtnClick: en,
            handleSeekForwardBtnClick: er,
            autoHideVolumeSlider: ea = !1,
            floatingVolumeSlider: eu = !1,
            compactTimeDisplay: eo = !1,
            handleControlBarPendingInteraction: es,
            onVolumeChange: ec,
            onMutedChange: ed,
            onVolumeExpandedChange: em,
        } = e,
        ef = (0, s.bG)([A.Ay], () => A.Ay.useReducedMotion),
        ep = (0, s.bG)([A.Ay], () => A.Ay.keyboardModeEnabled),
        { isFullscreen: eh, videoRef: ev, activeLayer: ex, controlBarConfig: eg } = (0, L.X$)(),
        eE = eg ?? T.X4[w],
        eb = eu && !eh,
        [ey, eS] = l.useState(B ? 0 : I),
        [eC, ew] = l.useState(!1),
        [eN, eP] = l.useState(!1),
        [eA, eR] = l.useState(!1),
        eL = l.useRef(null),
        eT = l.useId(),
        ek = l.useRef(void 0),
        [eM, ej] = l.useState(eb);
    eb !== eM && (ej(eb), ew(!1), eR(!1), eP(!1));
    let eD = eb && (eC || eA || eN),
        [{ volumeAnimSpring: eI }, eB] = (0, d.z)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        eF = l.useRef(null),
        [e$, eU] = l.useState(1),
        [e_, eK] = l.useState(I),
        [eO, eQ] = l.useState(B);
    (I !== e_ || B !== eO) && (eK(I), eQ(B), eS(B ? 0 : I));
    let eG = l.useCallback(
            (e) => {
                (eU(e), null != ev.current && (ev.current.playbackRate = e));
            },
            [ev],
        ),
        eH = l.useCallback(() => {
            if (null == N) return;
            let e = k?.split("/");
            (R.default.track(q.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(N, "_blank"));
        }, [N, k]),
        eX = l.useCallback(
            (e) => {
                null != ev.current && (e !== ev.current.volume && (ev.current.volume = e), e !== ey && eS(e));
            },
            [ev, ey],
        );
    function eV(e) {
        (eX(e), ec(e), eN && (eP(!1), eb || es(!1)), B && e > 0 ? ed(!1) : B || 0 !== e || ed(!0));
    }
    let eY = l.useCallback(() => {
        if (null != ev.current)
            if (0 === ey) {
                let e = 0 === I ? 0.3 : I;
                (eX(e), ed(!1), ec(e));
            } else (ec(ey), eX(0), ed(!0));
    }, [ev, ey, eX, I, ed, ec]);
    function ez() {
        (ew(!0), em(!0));
    }
    function eW() {
        (ew(!1), em(!1));
    }
    function eZ() {
        (window.clearTimeout(ek.current), ew(!0));
    }
    function eq() {
        (window.clearTimeout(ek.current), (ek.current = window.setTimeout(() => ew(!1), 150)));
    }
    function eJ(e) {
        if ("ArrowUp" !== e.key && "ArrowDown" !== e.key) return;
        (e.preventDefault(), e.stopPropagation());
        let t = Math.round(100 * ey),
            n = Math.min(1, Math.max(0, ("ArrowUp" === e.key ? Math.floor(t / 10) + 1 : Math.ceil(t / 10) - 1) / 10));
        n !== ey && eV(n);
    }
    l.useEffect(() => () => window.clearTimeout(ek.current), []);
    let e0 = (0, P.A)(em);
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
            if (!(e.metaKey || ((0, o.vq)(e.target) && (0, o.Cw)(e.target))))
                switch (e.key) {
                    case c.TJ.PLAYBACK:
                        (e.stopPropagation(), X());
                        break;
                    case c.TJ.SPACE:
                        (e.stopPropagation(), ep || (e.preventDefault(), X()));
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
                        (e.stopPropagation(), eY());
                }
        },
        [ee, et, X, en, er, eY, E, S, ep],
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
                eB({ volumeAnimSpring: !ea || eN || eC ? 1 : 0, immediate: ef }),
                () => {
                    eI.stop();
                }
            ),
            [ea, eN, eC, eB, ef, eI],
        ));
    let e2 = $.intl.string(0 === ey ? $.t.YqAjXy : $.t.w4m945),
        { icon: e6, label: e4 } = K[t],
        e8 = (0, r.jsx)(G, {
            iconComponent: Y,
            visible: a,
            onClick: eY,
            ariaLabel: e2,
            tooltipLabel: e2,
            hideTooltip: eD,
            shortcut: c.TJ.MUTE,
            buttonSize: O[w],
            clickableProps: {
                style: {
                    "--custom-volume-wave-1": Math.min(1, Math.max(0, 3 * ey)),
                    "--custom-volume-wave-2": Math.min(1, Math.max(0, 3 * ey - 1)),
                    "--custom-volume-wave-3": Math.min(1, Math.max(0, 3 * ey - 2)),
                    "--custom-volume-muted": +(0 === ey),
                },
                ...(eb
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
            className: U.nA,
            barClassName: U.i1,
            grabberClassName: U.VA,
            value: ey,
            keyboardStep: 0.1,
            minValue: 0,
            maxValue: 1,
            onValueChange: eV,
            asValueChanges: function (e) {
                (eX(e), !eN && (eP(!0), eb || es(!0)));
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
                        iconComponent: e6,
                        visible: a,
                        ariaLabel: e4,
                        tooltipLabel: e4,
                        shortcut: c.TJ.PLAYBACK,
                        onClick: X,
                        ref: eF,
                        buttonSize: O[w],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !y &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(G, {
                                    iconComponent: W.q,
                                    visible: a,
                                    onClick: en,
                                    ariaLabel: $.intl.string(J.default["dRVF+Z"]),
                                    tooltipLabel: $.intl.string(J.default["dRVF+Z"]),
                                    shortcut: c.TJ.SEEK_BACK,
                                    buttonSize: O[w],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(G, {
                                    iconComponent: Z.i,
                                    visible: a,
                                    onClick: er,
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
                    eb
                        ? (0, r.jsx)(f.Y, {
                              targetElementRef: eL,
                              shouldShow: eD,
                              scrollBehavior: "close",
                              onRequestClose: () => {
                                  (window.clearTimeout(ek.current), ew(!1), eR(!1), eP(!1));
                              },
                              layerContext: ex,
                              position: "top",
                              align: "center",
                              renderPopout: () =>
                                  (0, r.jsx)("div", {
                                      id: eT,
                                      className: i()(H.i.blurple, U.p8, U.Gl),
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
                                      className: U.RD,
                                      "data-testid": "discord-web-video-player-volume-control",
                                      children: e8,
                                  }),
                          })
                        : (0, r.jsxs)("div", {
                              onMouseEnter: ez,
                              onMouseLeave: eW,
                              onFocus: ez,
                              onBlur: eW,
                              className: i()(U.RD, U.u3),
                              "data-testid": "discord-web-video-player-volume-control",
                              children: [
                                  e8,
                                  (0, r.jsx)(u.animated.div, {
                                      className: U.MQ,
                                      "data-testid": "discord-web-video-player-volume-slider",
                                      style: {
                                          opacity: (0, u.to)([eI], (e) => `${e}`),
                                          width: (0, u.to)(
                                              [eI.to({ range: [0, 1], output: [0, eE.volumeSliderWidthPx] })],
                                              (e) => `${e}px`,
                                          ),
                                      },
                                      children: e9,
                                  }),
                              ],
                          }),
                    (0, r.jsx)(Q, { compact: eo && !eh }),
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
                            transcriptEnabled: F,
                            captionEnabled: _,
                            playerState: t,
                            handleTranscriptBtnClick: V,
                            handleCaptionBtnClick: ee,
                            downloadUrl: N,
                            handleDownloadButtonClick: eH,
                            extraButtons: M,
                        }),
                        visible: a,
                        size: w,
                    }),
                    !(!0 === C || ("inline" === C && !eh)) &&
                        (0, r.jsx)(ei, {
                            playbackRate: e$,
                            onPlaybackRateChange: eG,
                            visible: a,
                            size: w,
                            handleControlBarPendingInteraction: es,
                        }),
                    !S &&
                        (0, r.jsx)(G, {
                            iconComponent: eh ? p.FullscreenExitIcon : h.FullscreenEnterIcon,
                            visible: a,
                            onClick: et,
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
        : (0, T.Kj)(t.length, n)
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
                (0, r.jsx)(N.A, {
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
