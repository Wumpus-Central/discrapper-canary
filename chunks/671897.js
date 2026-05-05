n.d(t, { A: () => X }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    u = n(785651),
    s = n(17928),
    o = n(661531),
    c = n(876230),
    d = n(106236),
    m = n(717421),
    f = n(358618),
    p = n(793920),
    h = n(983851),
    x = n(86147),
    E = n(729475),
    v = n(261958),
    g = n(32880),
    b = n(922016),
    y = n(980707),
    S = n(477782),
    C = n(365199),
    N = n(775602),
    A = n(174459),
    R = n(61491),
    w = n(990078),
    P = n(113494),
    T = n(782134),
    D = n(417270),
    L = n(834730),
    M = n(939249),
    j = n(375708),
    k = n(834926);
let I = "-:--",
    B = {
        [c.Q6.PLAYING]: { icon: P.E, label: j.intl.string(j.t.ZcgDJX) },
        [c.Q6.PAUSED]: { icon: T.u, label: j.intl.string(j.t.RscU7I) },
        [c.Q6.ENDED]: { icon: D.m, label: j.intl.string(j.t.hsvh0i) },
    },
    F = { [c.oA.MD]: c.n4.MD, [c.oA.LG]: c.n4.LG },
    G = { [c.n4.MD]: "md", [c.n4.LG]: "lg" };
function U(e) {
    let { current: t, duration: n } = e,
        l = null != t ? (0, R.rB)(t) : I,
        a = null != n ? (0, R.rB)(n) : I;
    return (0, r.jsxs)("div", {
        className: i()(k.d$, k.jk),
        "data-testid": "discord-web-video-player-duration",
        children: [
            (0, r.jsx)(L.E, { variant: "text-xs/normal", className: k.Ue, children: l }),
            (0, r.jsx)(L.E, { variant: "text-xs/normal", className: k.zO, children: "/" }),
            (0, r.jsx)(L.E, { variant: "text-xs/normal", className: k.Ue, children: a }),
        ],
    });
}
let O = l.forwardRef(function (e, t) {
    let {
        iconComponent: n,
        animationTime: l,
        visible: a,
        ariaLabel: s,
        active: d,
        disabled: m,
        tooltipLabel: f,
        tooltipDelayMs: p = 1500,
        shortcut: h,
        onClick: x,
        buttonSize: E = c.n4.MD,
        "data-testid": v,
        clickableProps: g,
    } = e;
    return (0, r.jsx)(w.m, {
        text: a ? f : void 0,
        keyboardShortcut: "" !== (h ?? "").trim() ? h : void 0,
        delay: p,
        children: (0, r.jsx)(M.D, {
            onClick: !0 === m ? void 0 : x,
            className: i()(k.K5, { [k.Iy]: m }),
            "aria-label": s,
            "aria-disabled": m,
            "data-testid": v,
            innerRef: t,
            ...g,
            children: (0, r.jsx)(u.animated.div, {
                className: k.K5,
                style: {
                    opacity: (0, u.to)([l.to({ range: [0, 1], output: [0, 1] })], (e) => `${a ? e : Math.pow(e, 8)}`),
                    height: { [c.n4.LG]: "32px", [c.n4.MD]: "24px" }[E],
                },
                children: (0, r.jsx)(n, {
                    size: G[E],
                    color: !0 !== m ? o.A.colors.WHITE : o.A.colors.TEXT_MUTED,
                    className: i()(k.jk, { [k.x2]: d, [k.Wr]: !m }),
                }),
            }),
        }),
    });
});
var Q = n(91034),
    K = n(710434),
    _ = n(634156),
    $ = n(652215),
    Y = n(445563);
function X(e) {
    let {
            videoRef: t,
            playerState: n,
            animSpring: a,
            visible: b,
            seekForwardEnabled: y,
            hideCaptionBtn: S,
            hideTranscriptBtn: C,
            hideSkipButtons: R,
            hideFullScreenBtn: w,
            size: P,
            downloadUrl: T,
            downloadContentType: D,
            extraButtons: L,
            autoFocus: M = !1,
            keyDownHandlerRef: I,
            volume: G,
            muted: X,
            transcriptEnabled: W,
            captionEnabled: V,
            fullScreenEnabled: H,
            handlePlaybackBtnClick: Z,
            handleTranscriptBtnClick: J,
            handleCaptionBtnClick: q,
            handleFullScreenBtnClick: ee,
            handleSeekBackBtnClick: et,
            handleSeekForwardBtnClick: en,
            autoHideVolumeSlider: er = !1,
            handleControlBarPendingInteraction: el,
            onVolumeChange: ea,
            onMutedChange: ei,
        } = e,
        eu = (0, s.bG)([N.A], () => N.A.useReducedMotion),
        es = (0, s.bG)([N.A], () => N.A.keyboardModeEnabled),
        [eo, ec] = l.useState(X ? 0 : G),
        [ed, em] = l.useState(!1),
        [ef, ep] = l.useState(!1),
        [{ volumeAnimSpring: eh }, ex] = (0, m.z)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        eE = l.useRef(null),
        ev = l.useCallback(() => {
            if (null == T) return;
            let e = D?.split("/");
            A.default.track($.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: e?.[0],
                attachment_subtype: e?.[1],
            }),
                window.open(T, "_blank");
        }, [T, D]),
        eg = l.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== eo && ec(e));
            },
            [t, eo],
        ),
        eb = l.useCallback(() => {
            if (null != t.current)
                if (0 === eo) {
                    let e = 0 === G ? 0.3 : G;
                    eg(e), ei(!1), ea(e);
                } else ea(eo), eg(0), ei(!0);
        }, [t, eo, eg, G, ei, ea]),
        ey = () => {
            em(!0);
        },
        eS = () => {
            em(!1);
        },
        eC = l.useCallback(
            (e) => {
                switch (e.key) {
                    case c.TJ.PLAYBACK:
                        Z();
                        break;
                    case c.TJ.SPACE:
                        es || (e.preventDefault(), Z());
                        break;
                    case c.TJ.SEEK_BACK:
                        et();
                        break;
                    case c.TJ.SEEK_FORWARD:
                        en();
                        break;
                    case c.TJ.CAPTION:
                        S || q();
                        break;
                    case c.TJ.FULLSCREEN:
                        w || ee();
                        break;
                    case c.TJ.MUTE:
                        eb();
                }
            },
            [q, ee, Z, et, en, eb, S, w, es],
        );
    l.useEffect(() => {
        M && null != eE.current && eE.current.focus();
    }, [M]),
        l.useEffect(
            () => (
                null != I && (I.current = eC),
                () => {
                    null != I && (I.current = null);
                }
            ),
            [eC, I],
        ),
        l.useEffect(
            () => (
                ex({ volumeAnimSpring: !er || ef || ed ? 1 : 0, immediate: eu }),
                () => {
                    eh.stop();
                }
            ),
            [er, ef, ed, ex, eu, eh],
        );
    let eN = 0 === eo ? f._ : eo < 0.5 ? p.S : h.H,
        { icon: eA, label: eR } = B[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: k.X3,
                children: [
                    (0, r.jsx)(O, {
                        iconComponent: eA,
                        animationTime: a,
                        visible: b,
                        ariaLabel: eR,
                        tooltipLabel: eR,
                        shortcut: c.TJ.PLAYBACK,
                        onClick: Z,
                        ref: eE,
                        buttonSize: F[P],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !R &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(O, {
                                    iconComponent: K.q,
                                    animationTime: a,
                                    visible: b,
                                    onClick: et,
                                    ariaLabel: j.intl.string(Y.default["dRVF+Z"]),
                                    tooltipLabel: j.intl.string(Y.default["dRVF+Z"]),
                                    shortcut: c.TJ.SEEK_BACK,
                                    buttonSize: F[P],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(O, {
                                    iconComponent: _.i,
                                    animationTime: a,
                                    visible: b,
                                    onClick: en,
                                    disabled: !y,
                                    ariaLabel: y ? j.intl.string(Y.default.yV2FLL) : j.intl.string(Y.default.YWbiPw),
                                    tooltipLabel: y ? j.intl.string(Y.default.yV2FLL) : j.intl.string(Y.default.YWbiPw),
                                    tooltipDelayMs: 1500 * !!y,
                                    shortcut: c.TJ.SEEK_FORWARD,
                                    buttonSize: F[P],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(u.animated.div, {
                className: i()(k.X3, k.L1),
                style: {
                    opacity: (0, u.to)([a.to({ range: [0, 1], output: [0, 1] })], (e) => `${b ? e : Math.pow(e, 8)}`),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: ey,
                        onMouseLeave: eS,
                        onFocus: ey,
                        onBlur: eS,
                        className: k.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(O, {
                                iconComponent: eN,
                                animationTime: a,
                                visible: b,
                                onClick: eb,
                                ariaLabel: j.intl.string(Y.default.XiLvuG),
                                tooltipLabel: j.intl.string(Y.default.XiLvuG),
                                shortcut: c.TJ.MUTE,
                                buttonSize: F[P],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(u.animated.div, {
                                className: k.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, u.to)(
                                        [eh.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${b ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, u.to)([eh.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(d.A, {
                                    mini: !0,
                                    value: eo,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        eg(e),
                                            ea(e),
                                            ef && (ep(!1), el(!1)),
                                            X && e > 0 ? ei(!1) : X || 0 !== e || ei(!0);
                                    },
                                    asValueChanges: (e) => {
                                        eg(e), ef || (ep(!0), el(!0));
                                    },
                                    fillStyles: { backgroundColor: o.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": j.intl.string(Y.default.XiLvuG),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(U, { current: t?.current?.currentTime, duration: t?.current?.duration }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(k.X3, k.ST),
                children: [
                    (0, r.jsx)(z, {
                        canCollapse: null != L && L.length > 0,
                        buttons: (function (e) {
                            let {
                                    hideTranscriptBtn: t,
                                    hideCaptionBtn: n,
                                    transcriptEnabled: r,
                                    captionEnabled: l,
                                    playerState: a,
                                    handleTranscriptBtnClick: i,
                                    handleCaptionBtnClick: u,
                                    downloadUrl: s,
                                    handleDownloadButtonClick: o,
                                    extraButtons: d,
                                } = e,
                                m = [];
                            return (
                                !0 !== t &&
                                    m.push({
                                        id: "transcript",
                                        iconComponent: v.u,
                                        label: j.intl.string(Y.default["6EjGUv"]),
                                        onClick: i,
                                        active: r && a !== c.Q6.ENDED,
                                        disabled: a === c.Q6.ENDED,
                                        "data-testid": "discord-web-video-player-transcript-btn",
                                    }),
                                !0 !== n &&
                                    m.push({
                                        id: "caption",
                                        iconComponent: Q.I,
                                        label: j.intl.string(Y.default["0DbPcL"]),
                                        onClick: u,
                                        active: l,
                                        shortcut: c.TJ.CAPTION,
                                        "data-testid": "discord-web-video-player-captions-btn",
                                    }),
                                null != s &&
                                    m.push({
                                        id: "download",
                                        iconComponent: g.s,
                                        label: j.intl.string(j.t["1WjMbC"]),
                                        onClick: o,
                                        "data-testid": "discord-web-video-player-download-btn",
                                    }),
                                null != d && m.push(...d),
                                m
                            );
                        })({
                            hideTranscriptBtn: C,
                            hideCaptionBtn: S,
                            transcriptEnabled: W,
                            captionEnabled: V,
                            playerState: n,
                            handleTranscriptBtnClick: J,
                            handleCaptionBtnClick: q,
                            downloadUrl: T,
                            handleDownloadButtonClick: ev,
                            extraButtons: L,
                        }),
                        animSpring: a,
                        visible: b,
                        size: P,
                    }),
                    !w &&
                        (0, r.jsx)(O, {
                            iconComponent: H ? x.z : E.T,
                            animationTime: a,
                            visible: b,
                            onClick: ee,
                            ariaLabel: j.intl.string(Y.default.z9Cnzv),
                            tooltipLabel: j.intl.string(Y.default.z9Cnzv),
                            shortcut: c.TJ.FULLSCREEN,
                            buttonSize: F[P],
                            "data-testid": "discord-web-video-player-fullscreen-btn",
                        }),
                ],
            }),
        ],
    });
}
function z(e) {
    let { buttons: t, canCollapse: n, animSpring: l, visible: a, size: i } = e;
    return 0 === t.length
        ? null
        : !n || t.length <= 1
          ? (0, r.jsx)(r.Fragment, {
                children: t.map((e) =>
                    (0, r.jsx)(
                        O,
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
                            buttonSize: F[i],
                            "data-testid": e["data-testid"],
                        },
                        e.id,
                    ),
                ),
            })
          : (0, r.jsx)(W, { buttons: t, animSpring: l, visible: a, size: i });
}
function W(e) {
    let { buttons: t, animSpring: n, visible: a, size: i } = e,
        u = l.useRef(null),
        s = j.intl.string(j.t.PdRCRg);
    return (0, r.jsx)(b.Y, {
        targetElementRef: u,
        position: "top",
        align: "right",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(y.W, {
                navId: "video-player-overflow",
                "aria-label": s,
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
            (0, r.jsx)(O, {
                ref: u,
                iconComponent: C.j,
                animationTime: n,
                visible: a,
                ariaLabel: s,
                tooltipLabel: s,
                buttonSize: F[i],
                clickableProps: e,
                "data-testid": "discord-web-video-player-overflow-menu-button",
            }),
    });
}
