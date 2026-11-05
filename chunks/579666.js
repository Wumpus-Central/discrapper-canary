n.d(t, { default: () => eg });
var r = n(477900),
    a = n(582128),
    i = n(323889),
    s = n(984827),
    l = n(821609),
    o = n(284009),
    d = n.n(o);
(s.x.PORTRAIT, s.x.PORTRAIT);
let u = { preferred: s.x.LANDSCAPE, supported: [s.x.LANDSCAPE, s.x.PORTRAIT] },
    c = { [s.x.PORTRAIT]: 9 / 16, [s.x.LANDSCAPE]: 16 / 9 };
function m(e, t) {
    let n = e[t];
    return null == n || "" === n ? null : { url: n, aspectRatio: t };
}
var h = n(91982),
    p = n(506988);
function _(e) {
    return { label: e.productName, buttonLabel: e.cta.buttonLabel, iconImageUri: e.productIcon };
}
var C = n(637691),
    v = n(738883),
    f = n(669912),
    b = n(280905),
    g = n(503698),
    A = n.n(g),
    R = n(760914),
    x = n(815714);
let T = { sm: 48, lg: 92 };
function E(e) {
    let { iconImageUri: t, size: n } = e,
        a = T[n],
        i = A()(x.Z2, { [x.Ke]: "sm" === n, [x.EX]: "lg" === n }),
        s = { "--custom-product-icon-size": `${a}px` };
    return null == t
        ? (0, r.jsx)("div", { "aria-hidden": !0, className: i, style: s })
        : (0, r.jsx)("img", {
              src: (0, R.lR)({ assetUrl: t, width: a, height: a }),
              alt: "",
              width: a,
              height: a,
              className: i,
              style: s,
          });
}
var S = n(855986),
    I = n(858899),
    N = n(43990),
    k = n(672619),
    O = n(533609),
    D = n(845890),
    y = n(265704),
    j = n(792996);
let P = new Set([260021]);
var w = n(491812),
    M = n(755372),
    U = n(260918),
    V = n(236850),
    L = n(939249),
    B = n(834730),
    F = n(475815),
    Q = n(192308),
    Y = n(590202),
    H = n(971649),
    z = n(574112),
    G = n(321538);
function $(e) {
    let { bounty: t, onClose: n, sourceQuestContent: r } = e,
        s = (0, H.QK)();
    return a.useCallback(
        async (e) => {
            ((await (0, G.f7)(t.cta.url)) && (n(), (0, Q.s7)()),
                (0, z._Q)(
                    { adContentId: t.id, adCreativeType: i.p.BOUNTY, cta: t.cta },
                    { content: e, ctaContent: Y.Cy.OPEN_GAME_LINK, impressionId: s(), sourceQuestContent: r },
                ));
        },
        [t.id, t.cta, n, r, s],
    );
}
var q = n(652215);
let K = { offset: 4 };
function W(e) {
    let { bounty: t, sourceQuestContent: n, videoRef: s, onClose: l } = e,
        o = _(t),
        d = $({ bounty: t, onClose: l, sourceQuestContent: n }),
        u = a.useCallback(() => {
            let e = (0, F.qf)(s.current?.parentNode, s.current);
            (null != e && (0, F.sP)(e), d(p.uF.VIDEO_MODAL_ICON_END_CARD));
        }, [s, d]);
    return (0, r.jsx)(N.N, {
        theme: q.NJ8.DARK,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)(b.R, {
                adContentId: t.id,
                adCreativeType: i.p.BOUNTY,
                questContent: p.uF.VIDEO_MODAL_END_CARD,
                sourceQuestContent: n,
                children: (n) =>
                    (0, r.jsx)(L.D, {
                        innerRef: n,
                        className: A()(e, x.hn),
                        focusProps: K,
                        onClick: u,
                        children: (0, r.jsxs)("div", {
                            className: x.jT,
                            children: [
                                (0, r.jsx)(E, { iconImageUri: o.iconImageUri, size: "lg" }),
                                (0, r.jsxs)("div", {
                                    className: x.z9,
                                    children: [
                                        (0, r.jsx)(B.E, {
                                            tag: "div",
                                            variant: "heading-sm/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: o.label ?? t.advertiserName,
                                        }),
                                        (0, r.jsx)(B.E, {
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
        className: A()(Z.z6, { [Z.HY]: t }),
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
    let { totalSeconds: n, remainingSeconds: i, isSeekInteraction: s } = e,
        l = i <= 0,
        [o] = a.useState(l),
        d = Math.max(1, Math.ceil(i)),
        u = 0;
    return (
        l ? (u = 1) : n > 0 && (u = 1 - i / n),
        (0, r.jsxs)("div", {
            role: "timer",
            "aria-label": l ? j.intl.string(j.t["0F4Peo"]) : j.intl.formatToPlainString(j.t["45cddS"], { seconds: d }),
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
                            className: A()(Z.qB, { [Z.LQ]: u <= 0, [Z.Aq]: s }),
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
                    : (0, r.jsx)(B.E, {
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
var ei = n(115560),
    es = n(731738),
    el = n(876230),
    eo = n(69114),
    ed = n(913379),
    eu = n(544180),
    ec = n(561844),
    em = n(297727),
    eh = n(753386);
let ep = [25, 50, 75];
function e_(e, t) {
    return null != t ? Math.min(e, t) : e;
}
(n(221596), n(500522));
var eC = n(879371);
function ev() {
    let e = a.useMemo(
        () =>
            (0, R.lR)({
                assetUrl:
                    "https://cdn.discordapp.com/assets/content/8db8015bf879338028eb3094d2ca5567c70f6ea9a6bb60068b0f00ca712e5bf6.webp",
                width: 34,
                height: 34,
            }),
        [],
    );
    return (0, r.jsx)("img", { src: e, alt: "", className: x.RN });
}
function ef(e) {
    let {
            bounty: t,
            sourceQuestContent: n,
            src: s,
            orientation: l,
            openedAtMs: o,
            parentTransitionState: d,
            onClose: u,
        } = e,
        c = a.useRef(null),
        m = (0, S.bG)([y.A], () => y.A.isBountyCompleted(t.id)),
        _ = a.useCallback(() => {
            !(async function (e, t) {
                try {
                    await (0, D.Hq)(e.id, t);
                } catch (e) {
                    (0, I.P0)({
                        text:
                            e?.code != null && P.has(e.code) && e?.message != null
                                ? e.message
                                : j.intl.string(j.t.uLjCfn),
                        variant: "critical",
                    });
                }
            })(t, n);
        }, [t, n]),
        C = (function (e) {
            let { bountyId: t, sourceQuestContent: n, rewardTimerSeconds: r, openedAtMs: s, videoRef: l } = e,
                [o] = a.useState(() => (0, ei.A)()),
                d = (0, H.wW)(),
                u = a.useRef(null),
                c = a.useRef(!1),
                m = a.useRef(null),
                h = a.useRef(-1),
                _ = a.useRef(new Set()),
                C = a.useCallback(
                    () => ({ video_session_id: o, impression_id: d(), reward_timer_seconds: r }),
                    [o, d, r],
                ),
                v = a.useCallback(() => {
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
                        network_connection_speed: eu.A.getEffectiveConnectionSpeed(),
                    };
                }, []),
                f = a.useMemo(
                    () =>
                        (0, em.n0)({
                            getImpressionId: d,
                            onEmit: (e) => {
                                (0, ec.Qg)({
                                    adContentId: t,
                                    adCreativeType: i.p.BOUNTY,
                                    event: q.HAw.QUEST_CONTENT_ENGAGED_VIEWED,
                                    properties: {
                                        ...(0, Y.fF)(p.uF.VIDEO_MODAL),
                                        ...(0, eo.A)(),
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
                b = a.useCallback(
                    (e, r, a, s) => {
                        _.current.has(e) ||
                            (_.current.add(e),
                            (0, ec.Qg)({
                                adContentId: t,
                                adCreativeType: i.p.BOUNTY,
                                event: q.HAw.AD_VIDEO_PROGRESSED,
                                properties: { ...C(), progress: a, video_timestamp_seconds: r, threshold_met: s },
                                sourceQuestContent: n,
                            }));
                    },
                    [t, n, C],
                ),
                g = a.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            a = (0, eh.zh)(e, t),
                            i = e >= r;
                        if ((b("start", 0, 0, !1), i || n)) {
                            let n = Math.max(r, e);
                            b("threshold", n, (0, eh.zh)(n, t), !0);
                        }
                        if ((0, eh.di)(t)) for (let t of ep) a >= t / 100 && b(`p${t}`, e, a, i);
                        n && b("end", t, 1, !0);
                    },
                    [r, b],
                ),
                A = a.useCallback(
                    (e, t, n) => {
                        (g(e, t),
                            f.onProgress({
                                positionSeconds: n,
                                durationSeconds: t,
                                isPlaying: null != l.current && !l.current.paused && !l.current.seeking,
                            }));
                    },
                    [g, f, l],
                ),
                R = a.useCallback(() => {
                    f.pause();
                }, [f]),
                x = a.useCallback(
                    (e, t) => {
                        g(e, t, !0);
                    },
                    [g],
                ),
                T = a.useCallback(
                    (e, r) => {
                        e !== el.Q6.PLAYING && f.pause();
                        let a = l.current;
                        null == a ||
                            r !== el.KB.USER ||
                            ((e !== el.Q6.PLAYING || a.paused) &&
                                (0, ec.Qg)({
                                    adContentId: t,
                                    adCreativeType: i.p.BOUNTY,
                                    event: e === el.Q6.PAUSED ? q.HAw.AD_VIDEO_PAUSED : q.HAw.AD_VIDEO_RESUMED,
                                    properties: { ...C(), video_timestamp_seconds: a.currentTime },
                                    sourceQuestContent: n,
                                }));
                    },
                    [t, n, l, C, f],
                ),
                E = a.useCallback(
                    (e) => {
                        let r = m.current;
                        null != r &&
                            ((m.current = null),
                            (0, ec.Qg)({
                                adContentId: t,
                                adCreativeType: i.p.BOUNTY,
                                event: q.HAw.AD_VIDEO_BUFFERING_ENDED,
                                properties: { ...r, ...v(), duration: e },
                                sourceQuestContent: n,
                            }));
                    },
                    [t, n, v],
                ),
                S = a.useCallback(() => {
                    if ((f.pause(), null != m.current)) return;
                    h.current += 1;
                    let e = { ...C(), buffer_index: h.current };
                    ((m.current = e),
                        (0, ec.Qg)({
                            adContentId: t,
                            adCreativeType: i.p.BOUNTY,
                            event: q.HAw.AD_VIDEO_BUFFERING_STARTED,
                            properties: { ...e, ...v() },
                            sourceQuestContent: n,
                        }));
                }, [t, n, C, v, f]),
                I = a.useCallback(
                    (e) => {
                        c.current ||
                            ((c.current = !0),
                            (0, ec.Qg)({
                                adContentId: t,
                                adCreativeType: i.p.BOUNTY,
                                event: q.HAw.AD_VIDEO_TIME_TO_FIRST_FRAME,
                                properties: { ...C(), ...v(), duration_ms: e - s },
                                sourceQuestContent: n,
                            }));
                    },
                    [t, n, s, C, v],
                );
            return {
                handleVideoProgress: A,
                handleSeek: R,
                handleVideoEnd: x,
                handlePlayerStateChange: T,
                handleReadyForDisplay: I,
                handleBufferingStart: S,
                handleBufferingEnd: E,
                handleVideoError: a.useCallback(
                    (e) => {
                        let r = l.current;
                        null != r &&
                            ((0, ec.Qg)({
                                adContentId: t,
                                adCreativeType: i.p.BOUNTY,
                                event: q.HAw.AD_VIDEO_ERROR,
                                properties: {
                                    ...C(),
                                    ...v(),
                                    video_progress: (0, eh.zh)(r.currentTime, r.duration),
                                    video_error_type: e,
                                    video_error_code: r.error?.code,
                                    video_error_message: r.error?.message,
                                    video_network_state: r.networkState,
                                },
                                sourceQuestContent: n,
                            }),
                            (e === el.SB.SOURCE_ERROR || e === el.SB.NO_VALID_SOURCE) &&
                                ed.A.increment({
                                    name: es.K.QUEST_VIDEO_ERROR,
                                    tags: [
                                        `ad_creative_id:${t}`,
                                        `ad_creative_type:${i.p[i.p.BOUNTY]}`,
                                        `error_type:${e}`,
                                    ],
                                }));
                    },
                    [t, n, l, C, v],
                ),
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
            rewardTargetSeconds: v,
            isRewardEarned: f,
            rewardRemainingSeconds: b,
            isSeekInteraction: g,
            maxSeekableTimeSeconds: R,
            handleProgressUpdate: T,
            handleSeek: E,
            handleEnded: L,
        } = (function (e) {
            let {
                    rewardTimerSeconds: t,
                    initialDurationSeconds: n,
                    videoRef: r,
                    isCompleted: i,
                    onRewardEarned: s,
                    onVideoProgress: l,
                    onVideoSeek: o,
                    onVideoEnd: d,
                } = e,
                [u, c] = a.useState(0),
                [m, h] = a.useState(0),
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
                b = a.useRef(n),
                g = a.useRef(i),
                A = e_(t, C),
                R = i || u >= A,
                x = a.useCallback((e) => {
                    ((b.current = e), v(e));
                }, []),
                T = a.useCallback(
                    (e) => {
                        let n = Math.max(f.current, e);
                        return (
                            (f.current = n), c(n), !g.current && n >= e_(t, b.current) && ((g.current = !0), s()), n
                        );
                    },
                    [t, s],
                ),
                E = a.useCallback(
                    (e, t) => {
                        ((0, eh.di)(t) && x(t), h(e), l(T(e), b.current ?? t, e));
                    },
                    [x, T, l],
                );
            return {
                rewardTargetSeconds: A,
                isRewardEarned: R,
                rewardRemainingSeconds: R ? 0 : A - m,
                isSeekInteraction: p,
                maxSeekableTimeSeconds: u,
                handleProgressUpdate: E,
                handleSeek: a.useCallback(
                    (e, t) => {
                        (T(e), h(t), _(), o(e, t));
                    },
                    [T, _, o],
                ),
                handleEnded: a.useCallback(() => {
                    let e = r.current,
                        t = f.current;
                    (null != e && (0, eh.di)(e.duration) && (x(e.duration), (t = T(e.duration))),
                        d(t, b.current ?? e?.duration ?? 0 / 0));
                }, [r, x, T, d]),
            };
        })({
            rewardTimerSeconds: t.rewardTimerSeconds,
            initialDurationSeconds: t.videoDurationSeconds ?? null,
            videoRef: c,
            isCompleted: m,
            onRewardEarned: _,
            onVideoProgress: C.handleVideoProgress,
            onVideoSeek: C.handleSeek,
            onVideoEnd: C.handleVideoEnd,
        }),
        { volume: B, muted: F, setVolume: Q, setMuted: z } = (0, V.A)(),
        { balance: G } = (0, k.W0)(),
        $ = a.useMemo(() => (0, r.jsx)(ev, {}), []),
        K = a.useMemo(() => j.intl.formatToPlainString(j.t["nLXlh+"], { orbAmount: 50 }), []),
        X = (0, U.A)({ targetSec: v, label: K, isCompleted: f, icon: $, clickable: R >= v }),
        J = a.useCallback(
            () =>
                (0, r.jsx)(N.N, {
                    theme: q.NJ8.DARK,
                    disableAdaptiveTheme: !0,
                    children: (e) =>
                        (0, r.jsxs)("div", {
                            className: A()(e, x.gP),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: x.Cq,
                                    children: [
                                        (0, r.jsx)(ea, { totalSeconds: v, remainingSeconds: b, isSeekInteraction: g }),
                                        (0, r.jsx)(O.Ay, {
                                            variant: "overlay-secondary",
                                            balance: G,
                                            borderRadius: "round",
                                            textSize: "sm",
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: x.ne, children: (0, r.jsx)(w.A, { onClose: u }) }),
                            ],
                        }),
                }),
            [u, G, b, v, g],
        ),
        Z = a.useCallback(
            () => (0, r.jsx)(W, { bounty: t, sourceQuestContent: n, videoRef: c, onClose: u }),
            [t, n, u],
        );
    return (0, r.jsx)(h.Ft, {
        ref: c,
        parentTransitionState: d,
        autoplay: !0,
        autoFocus: !0,
        orientation: l,
        src: s,
        progressClassName: f ? eC.s : eC.V,
        persistTimeline: !0,
        persistPlayhead: !1,
        pauseOnLostVisibility: !f,
        getPlaybackBlockedMessage: M.b,
        maxSeekableTimeSec: R,
        initialVolume: B,
        initialMuted: F,
        onVolumeChange: Q,
        onMutedChange: z,
        onProgressUpdate: T,
        onSeek: E,
        onEnded: L,
        onPlayerStateChange: C.handlePlayerStateChange,
        onFirstFrame: C.handleReadyForDisplay,
        onBufferingStart: C.handleBufferingStart,
        onBufferingEnd: C.handleBufferingEnd,
        onError: C.handleVideoError,
        onHlsInstance: C.handleHlsInstance,
        renderPersistentOverlay: J,
        renderEndScreen: Z,
        timelineIndicatorConfig: X,
        loadingSpinnerPosition: "center",
        autoHideVolumeSlider: !0,
        hidePlaybackSpeedBtn: !0,
    });
}
function eb(e) {
    let { transitionState: t, onClose: n, bounty: i, sourceQuestContent: o, openedAtMs: h, impressionRef: b } = e,
        { url: g, orientation: A } = a.useMemo(() => {
            var e, t;
            let n =
                ((e = i),
                (t = u),
                null == e.videoRenditions
                    ? t.supported.includes(s.x.PORTRAIT)
                        ? { url: e.videoHls, aspectRatio: s.x.PORTRAIT }
                        : null
                    : (function (e, t) {
                          let { preferred: n, supported: r } = t;
                          d()(r.includes(n), "Preferred aspect ratio must be in supported renditions list");
                          let a = m(e, n);
                          if (null != a) return a;
                          let i = c[n],
                              s = null,
                              l = 1 / 0;
                          for (let t of r) {
                              if (t === n) continue;
                              let r = m(e, t);
                              if (null == r) continue;
                              let a = Math.abs(c[t] - i);
                              a < l && ((l = a), (s = r));
                          }
                          return s;
                      })(e.videoRenditions, t));
            return null == n
                ? { url: i.videoHls, orientation: "portrait" }
                : { url: n.url, orientation: n.aspectRatio === s.x.PORTRAIT ? "portrait" : "landscape" };
        }, [i]),
        R = _(i),
        x = R.label ?? i.advertiserName,
        T = $({ bounty: i, onClose: n, sourceQuestContent: o });
    return (0, r.jsx)(f.A, {
        transitionState: t,
        orientation: A,
        ariaLabel: x,
        impressionRef: (e) => {
            b.current = e;
        },
        video: (0, r.jsx)(ef, {
            bounty: i,
            sourceQuestContent: o,
            src: g,
            orientation: A,
            openedAtMs: h,
            parentTransitionState: t,
            onClose: n,
        }),
        footer: (0, r.jsx)(v.A, {
            prefix: (0, r.jsx)(E, { iconImageUri: R.iconImageUri, size: "sm" }),
            advertiserDetails: (0, r.jsx)(C.A, {
                title: x,
                subtitle: j.intl.string(j.t.o6FLcF),
                onClick: () => T(p.uF.VIDEO_MODAL),
            }),
            primaryAction: (0, r.jsx)(l.$, {
                variant: "primary",
                text: R.buttonLabel,
                onClick: () => T(p.uF.VIDEO_MODAL_PRIMARY_CTA),
            }),
        }),
    });
}
function eg(e) {
    return (0, r.jsx)(b.R, {
        adContentId: e.bounty.id,
        adCreativeType: i.p.BOUNTY,
        questContent: p.uF.VIDEO_MODAL,
        minViewTimeSeconds: h.bq,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: e.sourceQuestContent,
        children: (t) => (0, r.jsx)(eb, { ...e, impressionRef: t }),
    });
}
