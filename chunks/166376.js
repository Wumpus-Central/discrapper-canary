n.d(t, { default: () => eg });
var r = n(477900),
    a = n(582128),
    s = n(323889),
    i = n(984827),
    l = n(821609),
    o = n(486470),
    d = n(91982),
    u = n(506988);
function c(e) {
    return { label: e.productName, buttonLabel: e.cta.buttonLabel, iconImageUri: e.productIcon };
}
var h = n(637691),
    m = n(738883),
    _ = n(669912),
    p = n(280905),
    C = n(503698),
    v = n.n(C),
    g = n(760914),
    E = n(815714);
let f = { sm: 48, lg: 92 };
function b(e) {
    let { iconImageUri: t, size: n } = e,
        a = f[n],
        s = v()(E.Z2, { [E.Ke]: "sm" === n, [E.EX]: "lg" === n }),
        i = { "--custom-product-icon-size": `${a}px` };
    return null == t
        ? (0, r.jsx)("div", { "aria-hidden": !0, className: s, style: i })
        : (0, r.jsx)("img", {
              src: (0, g.lR)({ assetUrl: t, width: a, height: a }),
              alt: "",
              width: a,
              height: a,
              className: s,
              style: i,
          });
}
var A = n(855986),
    S = n(858899),
    T = n(43990),
    D = n(672619),
    I = n(533609),
    x = n(845890),
    O = n(265704),
    k = n(561844),
    R = n(590202),
    N = n(792996);
let y = new Set([260021]);
var w = n(753386),
    j = n(491812),
    M = n(755372),
    L = n(260918),
    U = n(236850),
    V = n(120692),
    P = n(717421),
    B = n(939249),
    F = n(834730),
    Q = n(475815),
    Y = n(192308),
    H = n(971649),
    z = n(574112),
    G = n(321538);
function $(e) {
    let { bounty: t, onClose: n, sourceQuestContent: r } = e,
        i = (0, H.QK)();
    return a.useCallback(
        async (e) => {
            ((await (0, G.f7)(t.cta.url)) && (n(), (0, Y.s7)()),
                (0, z._Q)(
                    { adContentId: t.id, adCreativeType: s.p.BOUNTY, cta: t.cta },
                    { content: e, ctaContent: R.Cy.OPEN_GAME_LINK, impressionId: i(), sourceQuestContent: r },
                ));
        },
        [t.id, t.cta, n, r, i],
    );
}
var K = n(652215);
let q = { offset: 4 };
function W(e) {
    let { bounty: t, sourceQuestContent: n, videoRef: i, onClose: l } = e,
        [o, d] = a.useState(!1),
        h = (0, P.z)({ transform: `scale(${o ? 1.12 : 1})`, config: { duration: 200 } }),
        m = c(t),
        _ = $({ bounty: t, onClose: l, sourceQuestContent: n }),
        C = a.useCallback(() => {
            let e = (0, Q.qf)(i.current?.parentNode, i.current);
            (null != e && (0, Q.sP)(e), _(u.uF.VIDEO_MODAL_ICON_END_CARD));
        }, [i, _]);
    return (0, r.jsx)(T.N, {
        theme: K.NJ8.DARK,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)(p.R, {
                adContentId: t.id,
                adCreativeType: s.p.BOUNTY,
                questContent: u.uF.VIDEO_MODAL_END_CARD,
                sourceQuestContent: n,
                children: (t) =>
                    (0, r.jsx)(B.D, {
                        innerRef: t,
                        className: v()(e, E.hn),
                        focusProps: q,
                        onMouseEnter: () => d(!0),
                        onMouseLeave: () => d(!1),
                        onClick: C,
                        children: (0, r.jsxs)(V.animated.div, {
                            className: E.jT,
                            style: h,
                            children: [
                                (0, r.jsx)(b, { iconImageUri: m.iconImageUri, size: "lg" }),
                                (0, r.jsxs)("div", {
                                    className: E.z9,
                                    children: [
                                        (0, r.jsx)(F.E, {
                                            tag: "div",
                                            variant: "heading-sm/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: m.label,
                                        }),
                                        (0, r.jsx)(F.E, {
                                            tag: "div",
                                            variant: "heading-xs/medium",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children: m.buttonLabel,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
            }),
    });
}
var X = n(646514),
    J = n(820081),
    Z = n(250328);
let ee = 2 * Math.PI * 14.4,
    et = (1.6 / 14.4) * (180 / Math.PI),
    en = `rotate(${-90 + et} 16 16)`;
function er(e) {
    let { animateIn: t } = e;
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: v()(Z.z6, { [Z.HY]: t }),
        children: [
            (0, r.jsx)("div", { className: Z.AW }),
            (0, r.jsx)(J.CheckmarkSmallBoldIcon, {
                size: "custom",
                width: 20,
                height: 20,
                color: X.A.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT,
                className: Z.kQ,
            }),
        ],
    });
}
function ea(e) {
    var t;
    let { totalSeconds: n, remainingSeconds: s, isSeekInteraction: i } = e,
        l = s <= 0,
        [o] = a.useState(l),
        d = Math.max(1, Math.ceil(s)),
        u = 0;
    return (
        l ? (u = 1) : n > 0 && (u = 1 - s / n),
        (0, r.jsxs)("div", {
            role: "timer",
            "aria-label": l ? N.intl.string(N.t["0F4Peo"]) : N.intl.formatToPlainString(N.t["45cddS"], { seconds: d }),
            className: Z.O1,
            children: [
                (0, r.jsxs)("svg", {
                    "aria-hidden": !0,
                    className: Z.hN,
                    width: 32,
                    height: 32,
                    viewBox: "0 0 32 32",
                    children: [
                        (0, r.jsx)("circle", { className: Z.tB, cx: 16, cy: 16, r: 15.5 }),
                        (0, r.jsx)("circle", {
                            className: v()(Z.qB, { [Z.LQ]: u <= 0, [Z.Aq]: i }),
                            cx: 16,
                            cy: 16,
                            r: 14.4,
                            strokeWidth: 3.2,
                            strokeDasharray: `${ee} ${ee}`,
                            strokeDashoffset: ee - ((t = u) >= 1 ? ee : Math.max(0.01, t * ee - 3.2)),
                            transform: en,
                        }),
                    ],
                }),
                l
                    ? (0, r.jsx)(er, { animateIn: !o })
                    : (0, r.jsx)(F.E, {
                          "aria-hidden": !0,
                          variant: "body-xs/semibold",
                          color: "text-strong",
                          className: Z.YA,
                          children: d,
                      }),
            ],
        })
    );
}
var es = n(115560),
    ei = n(731738),
    el = n(876230),
    eo = n(69114),
    ed = n(913379),
    eu = n(544180),
    ec = n(297727);
let eh = [25, 50, 75];
function em(e, t) {
    return null != t ? Math.min(e, t) : e;
}
(n(221596), n(500522));
var e_ = n(879371);
function ep() {
    let e = a.useMemo(
        () =>
            (0, g.lR)({
                assetUrl:
                    "https://cdn.discordapp.com/assets/content/66ce8fb3ad4ef321d7e96c976ad672d8e120a798375a27d433db4b8b3848818a.png",
                width: 34,
                height: 34,
            }),
        [],
    );
    return (0, r.jsx)("img", { src: e, alt: "", className: E.RN });
}
function eC(e) {
    let {
            bounty: t,
            sourceQuestContent: n,
            src: i,
            orientation: l,
            openedAtMs: o,
            parentTransitionState: c,
            onClose: h,
        } = e,
        m = a.useRef(null),
        _ = (0, A.bG)([O.A], () => O.A.isBountyCompleted(t.id)),
        p = a.useCallback(() => {
            !(async function (e, t) {
                try {
                    await (0, x.Hq)(e.id, t);
                } catch (e) {
                    (0, S.P0)({
                        text:
                            e?.code != null && y.has(e.code) && e?.message != null
                                ? e.message
                                : N.intl.string(N.t.uLjCfn),
                        variant: "critical",
                    });
                }
            })(t, n);
        }, [t, n]),
        C = (function (e) {
            let { bountyId: t, sourceQuestContent: n, rewardTimerSeconds: r, openedAtMs: i, videoRef: l } = e,
                [o] = a.useState(() => (0, es.A)()),
                c = (0, H.wW)(),
                h = a.useRef(null),
                m = a.useRef(!1),
                _ = a.useRef(null),
                p = a.useRef(-1),
                C = a.useRef(new Set()),
                v = a.useCallback(
                    () => ({ video_session_id: o, impression_id: c(), reward_timer_seconds: r }),
                    [o, c, r],
                ),
                g = a.useCallback(() => {
                    var e;
                    let t;
                    return {
                        ...((t = null != (e = h.current) && e.currentLevel >= 0 ? e.levels[e.currentLevel] : void 0),
                        null == e || null == t
                            ? { hls_level_index: null, hls_segment_res_width: null, hls_segment_res_height: null }
                            : {
                                  hls_level_index: e.currentLevel,
                                  hls_segment_res_width: t.width > 0 ? t.width : null,
                                  hls_segment_res_height: t.height > 0 ? t.height : null,
                              }),
                        network_connection_speed: eu.A.getEffectiveConnectionSpeed(),
                    };
                }, []),
                E = a.useCallback(
                    (e) => {
                        let r = l.current;
                        null != r &&
                            (0, k.Qg)({
                                adContentId: t,
                                adCreativeType: s.p.BOUNTY,
                                event: K.HAw.AD_VIDEO_SEGMENT_WATCHED,
                                properties: {
                                    ...e,
                                    ...v(),
                                    ...g(),
                                    video_duration_sec: r.duration,
                                    video_progress: (0, w.zh)(e.segment_end_sec, r.duration),
                                },
                                sourceQuestContent: n,
                            });
                    },
                    [t, n, l, v, g],
                ),
                f = a.useCallback(() => l.current?.currentTime ?? null, [l]),
                {
                    handlePlayerStateChange: b,
                    handleLoadEnd: A,
                    handleFirstFrame: S,
                    handleSeek: T,
                } = (0, d.Yr)({
                    getCurrentVideoTime: f,
                    onAnalytics: E,
                    emitIntervalMs: d.KI,
                    minSegmentDurationMs: d._4,
                }),
                D = a.useMemo(
                    () =>
                        (0, ec.n0)({
                            getImpressionId: c,
                            onEmit: (e) => {
                                (0, k.Qg)({
                                    adContentId: t,
                                    adCreativeType: s.p.BOUNTY,
                                    event: K.HAw.QUEST_CONTENT_ENGAGED_VIEWED,
                                    properties: {
                                        ...(0, R.fF)(u.uF.VIDEO_MODAL),
                                        ...(0, eo.A)(),
                                        ...e,
                                        impression_id: c(),
                                        apple_advertising_id: null,
                                        android_advertising_id: null,
                                    },
                                    sourceQuestContent: n,
                                });
                            },
                        }),
                    [t, n, c],
                ),
                I = a.useCallback(
                    (e, r, a, i) => {
                        C.current.has(e) ||
                            (C.current.add(e),
                            (0, k.Qg)({
                                adContentId: t,
                                adCreativeType: s.p.BOUNTY,
                                event: K.HAw.AD_VIDEO_PROGRESSED,
                                properties: { ...v(), progress: a, video_timestamp_seconds: r, threshold_met: i },
                                sourceQuestContent: n,
                            }));
                    },
                    [t, n, v],
                ),
                x = a.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            a = (0, w.zh)(e, t),
                            s = e >= r;
                        if ((I("start", 0, 0, !1), s || n)) {
                            let n = Math.max(r, e);
                            I("threshold", n, (0, w.zh)(n, t), !0);
                        }
                        if ((0, w.di)(t)) for (let t of eh) a >= t / 100 && I(`p${t}`, e, a, s);
                        n && I("end", t, 1, !0);
                    },
                    [r, I],
                ),
                O = a.useCallback(
                    (e, t, n) => {
                        (x(e, t),
                            D.onProgress({
                                positionSeconds: n,
                                durationSeconds: t,
                                isPlaying: null != l.current && !l.current.paused && !l.current.seeking,
                            }));
                    },
                    [x, D, l],
                ),
                N = a.useCallback(
                    (e) => {
                        (T(e), D.pause());
                    },
                    [D, T],
                ),
                y = a.useCallback(
                    (e, t) => {
                        x(e, t, !0);
                    },
                    [x],
                ),
                j = a.useCallback(
                    (e, r) => {
                        (b(e, r), e !== el.Q6.PLAYING && D.pause());
                        let a = l.current;
                        null == a ||
                            r !== el.KB.USER ||
                            ((e !== el.Q6.PLAYING || a.paused) &&
                                (0, k.Qg)({
                                    adContentId: t,
                                    adCreativeType: s.p.BOUNTY,
                                    event: e === el.Q6.PAUSED ? K.HAw.AD_VIDEO_PAUSED : K.HAw.AD_VIDEO_RESUMED,
                                    properties: { ...v(), video_timestamp_seconds: a.currentTime },
                                    sourceQuestContent: n,
                                }));
                    },
                    [t, n, l, v, D, b],
                ),
                M = a.useCallback(
                    (e) => {
                        let r = _.current;
                        null != r &&
                            ((_.current = null),
                            (0, k.Qg)({
                                adContentId: t,
                                adCreativeType: s.p.BOUNTY,
                                event: K.HAw.AD_VIDEO_BUFFERING_ENDED,
                                properties: { ...r, ...g(), duration: e },
                                sourceQuestContent: n,
                            }));
                    },
                    [t, n, g],
                ),
                L = a.useCallback(() => {
                    if ((D.pause(), null != _.current)) return;
                    p.current += 1;
                    let e = { ...v(), buffer_index: p.current };
                    ((_.current = e),
                        (0, k.Qg)({
                            adContentId: t,
                            adCreativeType: s.p.BOUNTY,
                            event: K.HAw.AD_VIDEO_BUFFERING_STARTED,
                            properties: { ...e, ...g() },
                            sourceQuestContent: n,
                        }));
                }, [t, n, v, g, D]),
                U = a.useCallback(
                    (e) => {
                        (S(e),
                            m.current ||
                                ((m.current = !0),
                                (0, k.Qg)({
                                    adContentId: t,
                                    adCreativeType: s.p.BOUNTY,
                                    event: K.HAw.AD_VIDEO_TIME_TO_FIRST_FRAME,
                                    properties: { ...v(), ...g(), duration_ms: e - i },
                                    sourceQuestContent: n,
                                })));
                    },
                    [t, n, i, v, g, S],
                ),
                V = a.useCallback(
                    (e, r) => {
                        let a = l.current;
                        if (null == a) return;
                        let i = null != r ? { hls_error_subtype: r.errorDetails, hls_error_fatal: r.fatal } : {};
                        ((0, k.Qg)({
                            adContentId: t,
                            adCreativeType: s.p.BOUNTY,
                            event: K.HAw.AD_VIDEO_ERROR,
                            properties: {
                                ...v(),
                                ...g(),
                                video_progress: (0, w.zh)(a.currentTime, a.duration),
                                video_error_type: e,
                                video_error_code: a.error?.code,
                                video_error_message: a.error?.message,
                                video_network_state: a.networkState,
                                ...i,
                            },
                            sourceQuestContent: n,
                        }),
                            (e === el.SB.SOURCE_ERROR || e === el.SB.NO_VALID_SOURCE) &&
                                ed.A.increment({
                                    name: ei.K.QUEST_VIDEO_ERROR,
                                    tags: [
                                        `ad_creative_id:${t}`,
                                        `ad_creative_type:${s.p[s.p.BOUNTY]}`,
                                        `error_type:${e}`,
                                    ],
                                }));
                    },
                    [t, n, l, v, g],
                );
            return {
                getVideoProperties: v,
                handleVideoProgress: O,
                handleSeek: N,
                handleVideoEnd: y,
                handlePlayerStateChange: j,
                handleReadyForDisplay: U,
                handleLoadEnd: A,
                handleBufferingStart: L,
                handleBufferingEnd: M,
                handleVideoError: V,
                handleHlsInstance: a.useCallback((e) => {
                    h.current = e;
                }, []),
            };
        })({
            bountyId: t.id,
            sourceQuestContent: n,
            rewardTimerSeconds: t.rewardTimerSeconds,
            openedAtMs: o,
            videoRef: m,
        }),
        {
            maxWatchedSeconds: g,
            durationSeconds: f,
            rewardTargetSeconds: b,
            isRewardEarned: V,
            rewardRemainingSeconds: P,
            isSeekInteraction: B,
            maxSeekableTimeSeconds: F,
            handleProgressUpdate: Q,
            handleSeek: Y,
            handleEnded: z,
        } = (function (e) {
            let {
                    rewardTimerSeconds: t,
                    initialDurationSeconds: n,
                    videoRef: r,
                    isCompleted: s,
                    onRewardEarned: i,
                    onVideoProgress: l,
                    onVideoSeek: o,
                    onVideoEnd: d,
                } = e,
                [u, c] = a.useState(0),
                [h, m] = a.useState(0),
                { isSeekInteraction: _, handleSeek: p } = (function () {
                    let [e, t] = a.useState(!1),
                        n = a.useRef(null);
                    return (
                        a.useEffect(
                            () => () => {
                                null != n.current && clearTimeout(n.current);
                            },
                            [],
                        ),
                        {
                            isSeekInteraction: e,
                            handleSeek: a.useCallback(() => {
                                (t(!0),
                                    null != n.current && clearTimeout(n.current),
                                    (n.current = window.setTimeout(() => {
                                        (t(!1), (n.current = null));
                                    }, 100)));
                            }, []),
                        }
                    );
                })(),
                [C, v] = a.useState(n),
                g = a.useRef(0),
                E = a.useRef(n),
                f = a.useRef(s),
                b = em(t, C),
                A = s || u >= b,
                S = a.useCallback((e) => {
                    ((E.current = e), v(e));
                }, []),
                T = a.useCallback(
                    (e) => {
                        let n = Math.max(g.current, e);
                        return (
                            (g.current = n), c(n), !f.current && n >= em(t, E.current) && ((f.current = !0), i()), n
                        );
                    },
                    [t, i],
                ),
                D = a.useCallback(
                    (e, t) => {
                        ((0, w.di)(t) && S(t), m(e), l(T(e), E.current ?? t, e));
                    },
                    [S, T, l],
                ),
                I = a.useCallback(
                    (e, t) => {
                        (T(e), m(t), p(), o(e, t));
                    },
                    [T, p, o],
                ),
                x = a.useCallback(() => {
                    let e = r.current,
                        t = g.current;
                    (null != e && (0, w.di)(e.duration) && (S(e.duration), (t = T(e.duration))),
                        d(t, E.current ?? e?.duration ?? 0 / 0));
                }, [r, S, T, d]),
                O = 0;
            return (
                null != C && (0, w.di)(C) ? (O = C) : null != n && (0, w.di)(n) && (O = n),
                {
                    maxWatchedSeconds: u,
                    durationSeconds: O,
                    rewardTargetSeconds: b,
                    isRewardEarned: A,
                    rewardRemainingSeconds: A ? 0 : b - h,
                    isSeekInteraction: _,
                    maxSeekableTimeSeconds: u,
                    handleProgressUpdate: D,
                    handleSeek: I,
                    handleEnded: x,
                }
            );
        })({
            rewardTimerSeconds: t.rewardTimerSeconds,
            initialDurationSeconds: t.videoDurationSeconds ?? null,
            videoRef: m,
            isCompleted: _,
            onRewardEarned: p,
            onVideoProgress: C.handleVideoProgress,
            onVideoSeek: C.handleSeek,
            onVideoEnd: C.handleVideoEnd,
        }),
        { getVideoProperties: G } = C,
        $ = (0, a.useEffectEvent)(() => {
            (0, k.Qg)({
                adContentId: t.id,
                adCreativeType: s.p.BOUNTY,
                event: K.HAw.AD_VIDEO_MODAL_CLOSED,
                sourceQuestContent: n,
                properties: {
                    ...G(),
                    content_name: (0, R.jO)(u.uF.VIDEO_MODAL),
                    content_id: u.uF.VIDEO_MODAL,
                    video_progress: (0, w.zh)(g, f),
                    threshold_met: g >= t.rewardTimerSeconds,
                },
            });
        });
    a.useEffect(() => () => $(), []);
    let { volume: q, muted: X, setVolume: J, setMuted: Z } = (0, U.A)(),
        { balance: ee } = (0, D.W0)(),
        et = a.useMemo(() => (0, r.jsx)(ep, {}), []),
        en = a.useMemo(() => N.intl.formatToPlainString(N.t["nLXlh+"], { orbAmount: 50 }), []),
        er = (0, L.A)({ targetSec: b, label: en, isCompleted: V, icon: et, clickable: F >= b }),
        eC = a.useCallback(
            () =>
                (0, r.jsx)(T.N, {
                    theme: K.NJ8.DARK,
                    disableAdaptiveTheme: !0,
                    children: (e) =>
                        (0, r.jsxs)("div", {
                            className: v()(e, E.gP),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: E.Cq,
                                    children: [
                                        (0, r.jsx)(ea, { totalSeconds: b, remainingSeconds: P, isSeekInteraction: B }),
                                        (0, r.jsx)(I.Ay, {
                                            variant: "overlay-secondary",
                                            balance: ee,
                                            borderRadius: "round",
                                            textSize: "sm",
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: E.ne, children: (0, r.jsx)(j.A, { onClose: h }) }),
                            ],
                        }),
                }),
            [h, ee, P, b, B],
        ),
        ev = a.useCallback(
            () => (0, r.jsx)(W, { bounty: t, sourceQuestContent: n, videoRef: m, onClose: h }),
            [t, n, h],
        );
    return (0, r.jsx)(d.Ft, {
        ref: m,
        parentTransitionState: c,
        autoplay: !0,
        autoFocus: !0,
        orientation: l,
        src: i,
        progressClassName: V ? e_.so : e_.Vw,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !V,
        getPlaybackBlockedMessage: M.b,
        maxSeekableTimeSec: F,
        initialVolume: q,
        initialMuted: X,
        onVolumeChange: J,
        onMutedChange: Z,
        onProgressUpdate: Q,
        onSeek: Y,
        onEnded: z,
        onPlayerStateChange: C.handlePlayerStateChange,
        onLoadEnd: C.handleLoadEnd,
        onFirstFrame: C.handleReadyForDisplay,
        onBufferingStart: C.handleBufferingStart,
        onBufferingEnd: C.handleBufferingEnd,
        onError: C.handleVideoError,
        onHlsInstance: C.handleHlsInstance,
        renderPersistentOverlay: eC,
        renderEndScreen: ev,
        timelineIndicatorConfig: er,
        loadingSpinnerPosition: "center",
        autoHideVolumeSlider: !0,
        hidePlaybackSpeedBtn: !0,
    });
}
function ev(e) {
    let { transitionState: t, onClose: n, bounty: s, sourceQuestContent: d, openedAtMs: p, impressionRef: C } = e,
        { url: v, orientation: g } = a.useMemo(() => {
            let e = (0, o.U9)(s, o.Ke);
            return null == e
                ? { url: s.videoHls, orientation: "portrait" }
                : { url: e.url, orientation: e.aspectRatio === i.x.PORTRAIT ? "portrait" : "landscape" };
        }, [s]),
        E = c(s),
        f = E.label,
        A = $({ bounty: s, onClose: n, sourceQuestContent: d });
    return (0, r.jsx)(_.A, {
        transitionState: t,
        orientation: g,
        ariaLabel: f,
        impressionRef: (e) => {
            C.current = e;
        },
        video: (0, r.jsx)(eC, {
            bounty: s,
            sourceQuestContent: d,
            src: v,
            orientation: g,
            openedAtMs: p,
            parentTransitionState: t,
            onClose: n,
        }),
        footer: (0, r.jsx)(m.A, {
            advertiserDetails: (0, r.jsx)(h.A, {
                prefix: (0, r.jsx)(b, { iconImageUri: E.iconImageUri, size: "sm" }),
                title: f,
                subtitle: N.intl.string(N.t.o6FLcF),
                isFlush: !0,
                onClick: () => A(u.uF.VIDEO_MODAL),
            }),
            primaryAction: (0, r.jsx)(l.$, {
                variant: "primary",
                text: E.buttonLabel,
                onClick: () => A(u.uF.VIDEO_MODAL_PRIMARY_CTA),
            }),
        }),
    });
}
function eg(e) {
    return (0, r.jsx)(p.R, {
        adContentId: e.bounty.id,
        adCreativeType: s.p.BOUNTY,
        questContent: u.uF.VIDEO_MODAL,
        minViewTimeSeconds: d.bq,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: e.sourceQuestContent,
        children: (t) => (0, r.jsx)(ev, { ...e, impressionRef: t }),
    });
}
