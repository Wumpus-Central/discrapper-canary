n.d(t, { default: () => eg });
var r = n(477900),
    a = n(582128),
    s = n(323889),
    i = n(984827),
    l = n(821609),
    o = n(284009),
    d = n.n(o);
(i.x.PORTRAIT, i.x.PORTRAIT);
let u = { preferred: i.x.LANDSCAPE, supported: [i.x.LANDSCAPE, i.x.PORTRAIT] },
    c = { [i.x.PORTRAIT]: 9 / 16, [i.x.LANDSCAPE]: 16 / 9 };
function h(e, t) {
    let n = e[t];
    return null == n || "" === n ? null : { url: n, aspectRatio: t };
}
var m = n(91982),
    p = n(506988);
function _(e) {
    return { label: e.productName, buttonLabel: e.cta.buttonLabel, iconImageUri: e.productIcon };
}
var C = n(637691),
    v = n(738883),
    f = n(669912),
    A = n(280905),
    g = n(503698),
    E = n.n(g),
    T = n(760914),
    b = n(815714);
let S = { sm: 48, lg: 92 };
function R(e) {
    let { iconImageUri: t, size: n } = e,
        a = S[n],
        s = E()(b.Z2, { [b.Ke]: "sm" === n, [b.EX]: "lg" === n }),
        i = { "--custom-product-icon-size": `${a}px` };
    return null == t
        ? (0, r.jsx)("div", { "aria-hidden": !0, className: s, style: i })
        : (0, r.jsx)("img", {
              src: (0, T.lR)({ assetUrl: t, width: a, height: a }),
              alt: "",
              width: a,
              height: a,
              className: s,
              style: i,
          });
}
var x = n(855986),
    I = n(858899),
    D = n(43990),
    O = n(672619),
    N = n(533609),
    k = n(845890),
    y = n(265704),
    w = n(561844),
    j = n(590202),
    P = n(792996);
let L = new Set([260021]);
var M = n(753386),
    V = n(491812),
    U = n(755372),
    B = n(260918),
    F = n(236850),
    Q = n(939249),
    Y = n(834730),
    H = n(475815),
    z = n(192308),
    G = n(971649),
    $ = n(574112),
    q = n(321538);
function K(e) {
    let { bounty: t, onClose: n, sourceQuestContent: r } = e,
        i = (0, G.QK)();
    return a.useCallback(
        async (e) => {
            ((await (0, q.f7)(t.cta.url)) && (n(), (0, z.s7)()),
                (0, $._Q)(
                    { adContentId: t.id, adCreativeType: s.p.BOUNTY, cta: t.cta },
                    { content: e, ctaContent: j.Cy.OPEN_GAME_LINK, impressionId: i(), sourceQuestContent: r },
                ));
        },
        [t.id, t.cta, n, r, i],
    );
}
var W = n(652215);
let X = { offset: 4 };
function J(e) {
    let { bounty: t, sourceQuestContent: n, videoRef: i, onClose: l } = e,
        o = _(t),
        d = K({ bounty: t, onClose: l, sourceQuestContent: n }),
        u = a.useCallback(() => {
            let e = (0, H.qf)(i.current?.parentNode, i.current);
            (null != e && (0, H.sP)(e), d(p.uF.VIDEO_MODAL_ICON_END_CARD));
        }, [i, d]);
    return (0, r.jsx)(D.N, {
        theme: W.NJ8.DARK,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)(A.R, {
                adContentId: t.id,
                adCreativeType: s.p.BOUNTY,
                questContent: p.uF.VIDEO_MODAL_END_CARD,
                sourceQuestContent: n,
                children: (t) =>
                    (0, r.jsx)(Q.D, {
                        innerRef: t,
                        className: E()(e, b.hn),
                        focusProps: X,
                        onClick: u,
                        children: (0, r.jsxs)("div", {
                            className: b.jT,
                            children: [
                                (0, r.jsx)(R, { iconImageUri: o.iconImageUri, size: "lg" }),
                                (0, r.jsxs)("div", {
                                    className: b.z9,
                                    children: [
                                        (0, r.jsx)(Y.E, {
                                            tag: "div",
                                            variant: "heading-sm/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: o.label,
                                        }),
                                        (0, r.jsx)(Y.E, {
                                            tag: "div",
                                            variant: "heading-xs/medium",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children: o.buttonLabel,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
            }),
    });
}
var Z = n(646514),
    ee = n(820081),
    et = n(250328);
let en = 2 * Math.PI * 14.4,
    er = (1.6 / 14.4) * (180 / Math.PI),
    ea = `rotate(${-90 + er} 16 16)`;
function es(e) {
    let { animateIn: t } = e;
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: E()(et.z6, { [et.HY]: t }),
        children: [
            (0, r.jsx)("div", { className: et.AW }),
            (0, r.jsx)(ee.CheckmarkSmallBoldIcon, {
                size: "custom",
                width: 20,
                height: 20,
                color: Z.A.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT,
                className: et.kQ,
            }),
        ],
    });
}
function ei(e) {
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
            "aria-label": l ? P.intl.string(P.t["0F4Peo"]) : P.intl.formatToPlainString(P.t["45cddS"], { seconds: d }),
            className: et.O1,
            children: [
                (0, r.jsxs)("svg", {
                    "aria-hidden": !0,
                    className: et.hN,
                    width: 32,
                    height: 32,
                    viewBox: "0 0 32 32",
                    children: [
                        (0, r.jsx)("circle", { className: et.tB, cx: 16, cy: 16, r: 15.5 }),
                        (0, r.jsx)("circle", {
                            className: E()(et.qB, { [et.LQ]: u <= 0, [et.Aq]: i }),
                            cx: 16,
                            cy: 16,
                            r: 14.4,
                            strokeWidth: 3.2,
                            strokeDasharray: `${en} ${en}`,
                            strokeDashoffset: en - ((t = u) >= 1 ? en : Math.max(0.01, t * en - 3.2)),
                            transform: ea,
                        }),
                    ],
                }),
                l
                    ? (0, r.jsx)(es, { animateIn: !o })
                    : (0, r.jsx)(Y.E, {
                          "aria-hidden": !0,
                          variant: "body-xs/semibold",
                          color: "text-strong",
                          className: et.YA,
                          children: d,
                      }),
            ],
        })
    );
}
var el = n(115560),
    eo = n(731738),
    ed = n(876230),
    eu = n(69114),
    ec = n(913379),
    eh = n(544180),
    em = n(297727);
let ep = [25, 50, 75];
function e_(e, t) {
    return null != t ? Math.min(e, t) : e;
}
(n(221596), n(500522));
var eC = n(879371);
function ev() {
    let e = a.useMemo(
        () =>
            (0, T.lR)({
                assetUrl:
                    "https://cdn.discordapp.com/assets/content/66ce8fb3ad4ef321d7e96c976ad672d8e120a798375a27d433db4b8b3848818a.png",
                width: 34,
                height: 34,
            }),
        [],
    );
    return (0, r.jsx)("img", { src: e, alt: "", className: b.RN });
}
function ef(e) {
    let {
            bounty: t,
            sourceQuestContent: n,
            src: i,
            orientation: l,
            openedAtMs: o,
            parentTransitionState: d,
            onClose: u,
        } = e,
        c = a.useRef(null),
        h = (0, x.bG)([y.A], () => y.A.isBountyCompleted(t.id)),
        _ = a.useCallback(() => {
            !(async function (e, t) {
                try {
                    await (0, k.Hq)(e.id, t);
                } catch (e) {
                    (0, I.P0)({
                        text:
                            e?.code != null && L.has(e.code) && e?.message != null
                                ? e.message
                                : P.intl.string(P.t.uLjCfn),
                        variant: "critical",
                    });
                }
            })(t, n);
        }, [t, n]),
        C = (function (e) {
            let { bountyId: t, sourceQuestContent: n, rewardTimerSeconds: r, openedAtMs: i, videoRef: l } = e,
                [o] = a.useState(() => (0, el.A)()),
                d = (0, G.wW)(),
                u = a.useRef(null),
                c = a.useRef(!1),
                h = a.useRef(null),
                _ = a.useRef(-1),
                C = a.useRef(new Set()),
                v = a.useCallback(
                    () => ({ video_session_id: o, impression_id: d(), reward_timer_seconds: r }),
                    [o, d, r],
                ),
                f = a.useCallback(() => {
                    var e;
                    let t;
                    return {
                        ...((t = null != (e = u.current) && e.currentLevel >= 0 ? e.levels[e.currentLevel] : void 0),
                        null == e || null == t
                            ? { hls_level_index: null, hls_segment_res_width: null, hls_segment_res_height: null }
                            : {
                                  hls_level_index: e.currentLevel,
                                  hls_segment_res_width: t.width > 0 ? t.width : null,
                                  hls_segment_res_height: t.height > 0 ? t.height : null,
                              }),
                        network_connection_speed: eh.A.getEffectiveConnectionSpeed(),
                    };
                }, []),
                A = a.useCallback(
                    (e) => {
                        let r = l.current;
                        null != r &&
                            (0, w.Qg)({
                                adContentId: t,
                                adCreativeType: s.p.BOUNTY,
                                event: W.HAw.AD_VIDEO_SEGMENT_WATCHED,
                                properties: {
                                    ...e,
                                    ...v(),
                                    ...f(),
                                    video_duration_sec: r.duration,
                                    video_progress: (0, M.zh)(e.segment_end_sec, r.duration),
                                },
                                sourceQuestContent: n,
                            });
                    },
                    [t, n, l, v, f],
                ),
                g = a.useCallback(() => l.current?.currentTime ?? null, [l]),
                {
                    handlePlayerStateChange: E,
                    handleLoadEnd: T,
                    handleFirstFrame: b,
                    handleSeek: S,
                } = (0, m.Yr)({
                    getCurrentVideoTime: g,
                    onAnalytics: A,
                    emitIntervalMs: m.KI,
                    minSegmentDurationMs: m._4,
                }),
                R = a.useMemo(
                    () =>
                        (0, em.n0)({
                            getImpressionId: d,
                            onEmit: (e) => {
                                (0, w.Qg)({
                                    adContentId: t,
                                    adCreativeType: s.p.BOUNTY,
                                    event: W.HAw.QUEST_CONTENT_ENGAGED_VIEWED,
                                    properties: {
                                        ...(0, j.fF)(p.uF.VIDEO_MODAL),
                                        ...(0, eu.A)(),
                                        ...e,
                                        impression_id: d(),
                                        apple_advertising_id: null,
                                        android_advertising_id: null,
                                    },
                                    sourceQuestContent: n,
                                });
                            },
                        }),
                    [t, n, d],
                ),
                x = a.useCallback(
                    (e, r, a, i) => {
                        C.current.has(e) ||
                            (C.current.add(e),
                            (0, w.Qg)({
                                adContentId: t,
                                adCreativeType: s.p.BOUNTY,
                                event: W.HAw.AD_VIDEO_PROGRESSED,
                                properties: { ...v(), progress: a, video_timestamp_seconds: r, threshold_met: i },
                                sourceQuestContent: n,
                            }));
                    },
                    [t, n, v],
                ),
                I = a.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            a = (0, M.zh)(e, t),
                            s = e >= r;
                        if ((x("start", 0, 0, !1), s || n)) {
                            let n = Math.max(r, e);
                            x("threshold", n, (0, M.zh)(n, t), !0);
                        }
                        if ((0, M.di)(t)) for (let t of ep) a >= t / 100 && x(`p${t}`, e, a, s);
                        n && x("end", t, 1, !0);
                    },
                    [r, x],
                ),
                D = a.useCallback(
                    (e, t, n) => {
                        (I(e, t),
                            R.onProgress({
                                positionSeconds: n,
                                durationSeconds: t,
                                isPlaying: null != l.current && !l.current.paused && !l.current.seeking,
                            }));
                    },
                    [I, R, l],
                ),
                O = a.useCallback(
                    (e) => {
                        (S(e), R.pause());
                    },
                    [R, S],
                ),
                N = a.useCallback(
                    (e, t) => {
                        I(e, t, !0);
                    },
                    [I],
                ),
                k = a.useCallback(
                    (e, r) => {
                        (E(e, r), e !== ed.Q6.PLAYING && R.pause());
                        let a = l.current;
                        null == a ||
                            r !== ed.KB.USER ||
                            ((e !== ed.Q6.PLAYING || a.paused) &&
                                (0, w.Qg)({
                                    adContentId: t,
                                    adCreativeType: s.p.BOUNTY,
                                    event: e === ed.Q6.PAUSED ? W.HAw.AD_VIDEO_PAUSED : W.HAw.AD_VIDEO_RESUMED,
                                    properties: { ...v(), video_timestamp_seconds: a.currentTime },
                                    sourceQuestContent: n,
                                }));
                    },
                    [t, n, l, v, R, E],
                ),
                y = a.useCallback(
                    (e) => {
                        let r = h.current;
                        null != r &&
                            ((h.current = null),
                            (0, w.Qg)({
                                adContentId: t,
                                adCreativeType: s.p.BOUNTY,
                                event: W.HAw.AD_VIDEO_BUFFERING_ENDED,
                                properties: { ...r, ...f(), duration: e },
                                sourceQuestContent: n,
                            }));
                    },
                    [t, n, f],
                ),
                P = a.useCallback(() => {
                    if ((R.pause(), null != h.current)) return;
                    _.current += 1;
                    let e = { ...v(), buffer_index: _.current };
                    ((h.current = e),
                        (0, w.Qg)({
                            adContentId: t,
                            adCreativeType: s.p.BOUNTY,
                            event: W.HAw.AD_VIDEO_BUFFERING_STARTED,
                            properties: { ...e, ...f() },
                            sourceQuestContent: n,
                        }));
                }, [t, n, v, f, R]),
                L = a.useCallback(
                    (e) => {
                        (b(e),
                            c.current ||
                                ((c.current = !0),
                                (0, w.Qg)({
                                    adContentId: t,
                                    adCreativeType: s.p.BOUNTY,
                                    event: W.HAw.AD_VIDEO_TIME_TO_FIRST_FRAME,
                                    properties: { ...v(), ...f(), duration_ms: e - i },
                                    sourceQuestContent: n,
                                })));
                    },
                    [t, n, i, v, f, b],
                ),
                V = a.useCallback(
                    (e, r) => {
                        let a = l.current;
                        if (null == a) return;
                        let i = null != r ? { hls_error_subtype: r.errorDetails, hls_error_fatal: r.fatal } : {};
                        ((0, w.Qg)({
                            adContentId: t,
                            adCreativeType: s.p.BOUNTY,
                            event: W.HAw.AD_VIDEO_ERROR,
                            properties: {
                                ...v(),
                                ...f(),
                                video_progress: (0, M.zh)(a.currentTime, a.duration),
                                video_error_type: e,
                                video_error_code: a.error?.code,
                                video_error_message: a.error?.message,
                                video_network_state: a.networkState,
                                ...i,
                            },
                            sourceQuestContent: n,
                        }),
                            (e === ed.SB.SOURCE_ERROR || e === ed.SB.NO_VALID_SOURCE) &&
                                ec.A.increment({
                                    name: eo.K.QUEST_VIDEO_ERROR,
                                    tags: [
                                        `ad_creative_id:${t}`,
                                        `ad_creative_type:${s.p[s.p.BOUNTY]}`,
                                        `error_type:${e}`,
                                    ],
                                }));
                    },
                    [t, n, l, v, f],
                );
            return {
                getVideoProperties: v,
                handleVideoProgress: D,
                handleSeek: O,
                handleVideoEnd: N,
                handlePlayerStateChange: k,
                handleReadyForDisplay: L,
                handleLoadEnd: T,
                handleBufferingStart: P,
                handleBufferingEnd: y,
                handleVideoError: V,
                handleHlsInstance: a.useCallback((e) => {
                    u.current = e;
                }, []),
            };
        })({
            bountyId: t.id,
            sourceQuestContent: n,
            rewardTimerSeconds: t.rewardTimerSeconds,
            openedAtMs: o,
            videoRef: c,
        }),
        {
            maxWatchedSeconds: v,
            durationSeconds: f,
            rewardTargetSeconds: A,
            isRewardEarned: g,
            rewardRemainingSeconds: T,
            isSeekInteraction: S,
            maxSeekableTimeSeconds: R,
            handleProgressUpdate: Q,
            handleSeek: Y,
            handleEnded: H,
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
                { isSeekInteraction: p, handleSeek: _ } = (function () {
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
                f = a.useRef(0),
                A = a.useRef(n),
                g = a.useRef(s),
                E = e_(t, C),
                T = s || u >= E,
                b = a.useCallback((e) => {
                    ((A.current = e), v(e));
                }, []),
                S = a.useCallback(
                    (e) => {
                        let n = Math.max(f.current, e);
                        return (
                            (f.current = n), c(n), !g.current && n >= e_(t, A.current) && ((g.current = !0), i()), n
                        );
                    },
                    [t, i],
                ),
                R = a.useCallback(
                    (e, t) => {
                        ((0, M.di)(t) && b(t), m(e), l(S(e), A.current ?? t, e));
                    },
                    [b, S, l],
                ),
                x = a.useCallback(
                    (e, t) => {
                        (S(e), m(t), _(), o(e, t));
                    },
                    [S, _, o],
                ),
                I = a.useCallback(() => {
                    let e = r.current,
                        t = f.current;
                    (null != e && (0, M.di)(e.duration) && (b(e.duration), (t = S(e.duration))),
                        d(t, A.current ?? e?.duration ?? 0 / 0));
                }, [r, b, S, d]),
                D = 0;
            return (
                null != C && (0, M.di)(C) ? (D = C) : null != n && (0, M.di)(n) && (D = n),
                {
                    maxWatchedSeconds: u,
                    durationSeconds: D,
                    rewardTargetSeconds: E,
                    isRewardEarned: T,
                    rewardRemainingSeconds: T ? 0 : E - h,
                    isSeekInteraction: p,
                    maxSeekableTimeSeconds: u,
                    handleProgressUpdate: R,
                    handleSeek: x,
                    handleEnded: I,
                }
            );
        })({
            rewardTimerSeconds: t.rewardTimerSeconds,
            initialDurationSeconds: t.videoDurationSeconds ?? null,
            videoRef: c,
            isCompleted: h,
            onRewardEarned: _,
            onVideoProgress: C.handleVideoProgress,
            onVideoSeek: C.handleSeek,
            onVideoEnd: C.handleVideoEnd,
        }),
        { getVideoProperties: z } = C,
        $ = (0, a.useEffectEvent)(() => {
            (0, w.Qg)({
                adContentId: t.id,
                adCreativeType: s.p.BOUNTY,
                event: W.HAw.AD_VIDEO_MODAL_CLOSED,
                sourceQuestContent: n,
                properties: {
                    ...z(),
                    content_name: (0, j.jO)(p.uF.VIDEO_MODAL),
                    content_id: p.uF.VIDEO_MODAL,
                    video_progress: (0, M.zh)(v, f),
                    threshold_met: v >= t.rewardTimerSeconds,
                },
            });
        });
    a.useEffect(() => () => $(), []);
    let { volume: q, muted: K, setVolume: X, setMuted: Z } = (0, F.A)(),
        { balance: ee } = (0, O.W0)(),
        et = a.useMemo(() => (0, r.jsx)(ev, {}), []),
        en = a.useMemo(() => P.intl.formatToPlainString(P.t["nLXlh+"], { orbAmount: 50 }), []),
        er = (0, B.A)({ targetSec: A, label: en, isCompleted: g, icon: et, clickable: R >= A }),
        ea = a.useCallback(
            () =>
                (0, r.jsx)(D.N, {
                    theme: W.NJ8.DARK,
                    disableAdaptiveTheme: !0,
                    children: (e) =>
                        (0, r.jsxs)("div", {
                            className: E()(e, b.gP),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: b.Cq,
                                    children: [
                                        (0, r.jsx)(ei, { totalSeconds: A, remainingSeconds: T, isSeekInteraction: S }),
                                        (0, r.jsx)(N.Ay, {
                                            variant: "overlay-secondary",
                                            balance: ee,
                                            borderRadius: "round",
                                            textSize: "sm",
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: b.ne, children: (0, r.jsx)(V.A, { onClose: u }) }),
                            ],
                        }),
                }),
            [u, ee, T, A, S],
        ),
        es = a.useCallback(
            () => (0, r.jsx)(J, { bounty: t, sourceQuestContent: n, videoRef: c, onClose: u }),
            [t, n, u],
        );
    return (0, r.jsx)(m.Ft, {
        ref: c,
        parentTransitionState: d,
        autoplay: !0,
        autoFocus: !0,
        orientation: l,
        src: i,
        progressClassName: g ? eC.so : eC.Vw,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !g,
        getPlaybackBlockedMessage: U.b,
        maxSeekableTimeSec: R,
        initialVolume: q,
        initialMuted: K,
        onVolumeChange: X,
        onMutedChange: Z,
        onProgressUpdate: Q,
        onSeek: Y,
        onEnded: H,
        onPlayerStateChange: C.handlePlayerStateChange,
        onLoadEnd: C.handleLoadEnd,
        onFirstFrame: C.handleReadyForDisplay,
        onBufferingStart: C.handleBufferingStart,
        onBufferingEnd: C.handleBufferingEnd,
        onError: C.handleVideoError,
        onHlsInstance: C.handleHlsInstance,
        renderPersistentOverlay: ea,
        renderEndScreen: es,
        timelineIndicatorConfig: er,
        loadingSpinnerPosition: "center",
        autoHideVolumeSlider: !0,
        hidePlaybackSpeedBtn: !0,
    });
}
function eA(e) {
    let { transitionState: t, onClose: n, bounty: s, sourceQuestContent: o, openedAtMs: m, impressionRef: A } = e,
        { url: g, orientation: E } = a.useMemo(() => {
            let e,
                t =
                    null !=
                    (e =
                        null != s.videoRenditions
                            ? (function (e, t) {
                                  let { preferred: n, supported: r } = t;
                                  d()(r.includes(n), "Preferred aspect ratio must be in supported renditions list");
                                  let a = h(e, n);
                                  if (null != a) return a;
                                  let s = c[n],
                                      i = null,
                                      l = 1 / 0;
                                  for (let t of r) {
                                      if (t === n) continue;
                                      let r = h(e, t);
                                      if (null == r) continue;
                                      let a = Math.abs(c[t] - s);
                                      a < l && ((l = a), (i = r));
                                  }
                                  return i;
                              })(s.videoRenditions, u)
                            : null)
                        ? e
                        : u.supported.includes(i.x.PORTRAIT)
                          ? { url: s.videoHls, aspectRatio: i.x.PORTRAIT }
                          : null;
            return null == t
                ? { url: s.videoHls, orientation: "portrait" }
                : { url: t.url, orientation: t.aspectRatio === i.x.PORTRAIT ? "portrait" : "landscape" };
        }, [s]),
        T = _(s),
        b = T.label,
        S = K({ bounty: s, onClose: n, sourceQuestContent: o });
    return (0, r.jsx)(f.A, {
        transitionState: t,
        orientation: E,
        ariaLabel: b,
        impressionRef: (e) => {
            A.current = e;
        },
        video: (0, r.jsx)(ef, {
            bounty: s,
            sourceQuestContent: o,
            src: g,
            orientation: E,
            openedAtMs: m,
            parentTransitionState: t,
            onClose: n,
        }),
        footer: (0, r.jsx)(v.A, {
            advertiserDetails: (0, r.jsx)(C.A, {
                prefix: (0, r.jsx)(R, { iconImageUri: T.iconImageUri, size: "sm" }),
                title: b,
                subtitle: P.intl.string(P.t.o6FLcF),
                isFlush: !0,
                onClick: () => S(p.uF.VIDEO_MODAL),
            }),
            primaryAction: (0, r.jsx)(l.$, {
                variant: "primary",
                text: T.buttonLabel,
                onClick: () => S(p.uF.VIDEO_MODAL_PRIMARY_CTA),
            }),
        }),
    });
}
function eg(e) {
    return (0, r.jsx)(A.R, {
        adContentId: e.bounty.id,
        adCreativeType: s.p.BOUNTY,
        questContent: p.uF.VIDEO_MODAL,
        minViewTimeSeconds: m.bq,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: e.sourceQuestContent,
        children: (t) => (0, r.jsx)(eA, { ...e, impressionRef: t }),
    });
}
